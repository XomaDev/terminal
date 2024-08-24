<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme } from '../stores/theme';
  import * as he from 'he';
  import Ps1 from "./Ps1.svelte";
  import {EIA_ENDPOINT, sendCode} from "../eia";

  let BANNER = `
          _____                    _____                    _____
         /\\    \\                  /\\    \\                  /\\    \\                  Eia64 — 2.3                      |  Ctrl+X to clear syntax buffer
        /::\\    \\                /::\\    \\                /::\\    \\                 An interpreted language          |  Ctrl+E to run a file
       /::::\\    \\               \\:::\\    \\              /::::\\    \\                                                 |
      /::::::\\    \\               \\:::\\    \\            /::::::\\    \\               [XX] [Docs] [Web client]    |
     /:::/\\:::\\    \\               \\:::\\    \\          /:::/\\:::\\    \\              !===~~===~~===~~===~~===~~===~~===
    /:::/__\\:::\\    \\               \\:::\\    \\        /:::/__\\:::\\    \\
   /::::\\   \\:::\\    \\              /::::\\    \\      /::::\\   \\:::\\    \\            Examples ✨
  /::::::\\   \\:::\\    \\    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\                1. (> ^_^)> cute trash guy animation
 /:::/\\:::\\   \\:::\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\    \\               2. Rock Paper Scissor
/:::/__\\:::\\   \\:::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::\\____\\
\\:::\\   \\:::\\   \\::/    /\\:::\\  /:::/    \\::/    /\\::/    \\:::\\  /:::/    /
 \\:::\\   \\:::\\   \\/____/  \\:::\\/:::/    / \\/____/  \\/____/ \\:::\\/:::/    /
  \\:::\\   \\:::\\    \\       \\::::::/    /                    \\::::::/    /
   \\:::\\   \\:::\\____\\       \\::::/____/                      \\::::/    /
    \\:::\\   \\::/    /        \\:::\\    \\                      /:::/    /
     \\:::\\   \\/____/          \\:::\\    \\                    /:::/    /              Max 1 min/execution
      \\:::\\    \\               \\:::\\    \\                  /:::/    /
       \\:::\\____\\               \\:::\\____\\                /:::/    /
        \\::/    /                \\::/    /                \\::/    /
         \\/____/                  \\/____/                  \\/____/

`
.replace('Eia64 — 2.3', `<a style="color: ${$theme.cyan.toString()}">Eia64 — 2.3</a>`)
.replace('An interpreted language', `<a style="color: ${$theme.blue.toString()}">An interpreted language</a>`)
.replace('XX', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Eia64" target="_blank">Project</a>`)
.replace('Docs', `<a style="color: ${$theme.brightGreen.toString()}" href="https://eia-docs.vercel.app/" target="_blank">Docs</a>`)
.replace('Web client', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Terminal" target="_blank">Web client</a>`)
.replace('(> ^_^)>', `<a style="color: ${$theme.brightBlue.toString()}" href="${window.location.origin}?fileUrl=https://raw.githubusercontent.com/XomaDev/Eia64/main/examples/animation.eia">(> ^_^)></a>`)
.replace('cute trash guy animation', `<a style="color: ${$theme.cyan.toString()}" href="${window.location.origin}?fileUrl=https://raw.githubusercontent.com/XomaDev/Eia64/main/examples/animation.eia">cute trash guy animation</a>`)
.replace('Rock Paper Scissor', `<a style="color: ${$theme.green.toString()}" href="${window.location.origin}?fileUrl=https://raw.githubusercontent.com/XomaDev/Eia64/main/examples/RockPaperScissor.eia">Rock Paper Scissor</a>`)
.replace('Max 1 min/execution', `<a style="color: ${$theme.brightRed.toString()}">Max 1 min/execution</a>`)

  let command = '';
  let historyIndex = -1;

  let input: HTMLInputElement;

  onMount(() => {
    input.focus();
    $history = [{ command: 'Welcome to Eia Playground!', outputs: [], type: -2 }];
    $history = [{ ...$history, command: '', outputs: [BANNER], type: -3 }];

    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey) {
        if (event.key === 's' || event.key === 'S') {
          // Ctrl+S for clearing syntax buffer
          console.log('Ctrl+B was pressed');
          // send a clear content request
          sendCode(JSON.stringify({"type": "clear", "content": ""}));
          input.disabled = false; // re-enable input
        }

        if (event.key === 'e' || event.key === 'E') {
          // Ctrl+E to run a file
          console.log('Ctrl+E was pressed');
          const fileUrl = prompt('Enter a Raw File URL ');
          if (fileUrl != null) {
            const newUrl = window.location.origin + "?fileUrl=" + fileUrl
            window.location.replace(newUrl);
          }
        }
      }
    });
  });

  afterUpdate(() => {
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  // Called by eia.ts when the server is connected
  function eiaConnected() {
    $history = [...$history, { command: '', outputs: ["Connected to Eia Server (" + EIA_ENDPOINT + ")"], type: 1 }];
    $history = [...$history, { command: '', outputs: ["Try out `println(\"Hello, World\")`"], type: 4 }];
  }

  // Called by eia.ts when execution is completed
  function messageReceived(content: string) {
    const json = JSON.parse(content);
    let type = json.type;
    if (type === "output") {
        let message = json.message.replace(/\u001B\[[0-9;]*[a-zA-Z]/g, "");
        // let sanitized = he.encode(message)
        $history = [...$history, { command: "", outputs: [message], type: 1 }]
    } else if (type === "input") {
        // unlock textbox for user to input text
        console.log("Seeking input");
        input.disabled = false;
        input.focus();
    } else if (type == "error") {
        let message = json.message;
        let sanitized = he.encode(message)
        $history = [...$history, { command: "", outputs: [sanitized], type: 0 }]
        input.disabled = false; // enable it after errors for fresh input
    } else if (type == "wait") {
        // currently executing... we have to switch of textbox
        input.disabled = true;
    } else if (type == "executed") {
        input.disabled = false;
        input.focus();
    }
  }


  (window as any).eiaConnected = eiaConnected;
  (window as any).messageReceived = messageReceived;

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      let trimmed = command.trim()
      $history = [...$history, { command, outputs: [], type: -1 }];
      if (trimmed.length > 0) {
        sendCode(JSON.stringify({"type": "code", "data": command}));
      }
      command = '';
    }
  };
</script>

<svelte:window
  on:click={() => {
    input.focus();
  }}
/>

<Ps1/>

<div class="flex w-full">
  <input
    id="command-input"
    name="command-input"
    aria-label="Command input"
    class="w-full px-2 bg-transparent outline-none"
    type="text"
    style={`color: ${$theme.foreground}`}
    bind:value={command}
    on:keydown={handleKeyDown}
    bind:this={input}
  />
</div>
