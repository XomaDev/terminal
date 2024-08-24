<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme } from '../stores/theme';
  import * as he from 'he';
  import Ps1 from "./Ps1.svelte";
  import {EIA_ENDPOINT, sendCode} from "../eia";

  let BANNER = `
          _____                    _____                    _____
         /\\    \\                  /\\    \\                  /\\    \\                  Eia64 — 2.3
        /::\\    \\                /::\\    \\                /::\\    \\                 An interpreted language
       /::::\\    \\               \\:::\\    \\              /::::\\    \\
      /::::::\\    \\               \\:::\\    \\            /::::::\\    \\               [X] [Docs] [Web client]
     /:::/\\:::\\    \\               \\:::\\    \\          /:::/\\:::\\    \\
    /:::/__\\:::\\    \\               \\:::\\    \\        /:::/__\\:::\\    \\
   /::::\\   \\:::\\    \\              /::::\\    \\      /::::\\   \\:::\\    \\
  /::::::\\   \\:::\\    \\    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\
 /:::/\\:::\\   \\:::\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\    \\
/:::/__\\:::\\   \\:::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::\\____\\
\\:::\\   \\:::\\   \\::/    /\\:::\\  /:::/    \\::/    /\\::/    \\:::\\  /:::/    /
 \\:::\\   \\:::\\   \\/____/  \\:::\\/:::/    / \\/____/  \\/____/ \\:::\\/:::/    /
  \\:::\\   \\:::\\    \\       \\::::::/    /                    \\::::::/    /
   \\:::\\   \\:::\\____\\       \\::::/____/                      \\::::/    /
    \\:::\\   \\::/    /        \\:::\\    \\                      /:::/    /
     \\:::\\   \\/____/          \\:::\\    \\                    /:::/    /
      \\:::\\    \\               \\:::\\    \\                  /:::/    /
       \\:::\\____\\               \\:::\\____\\                /:::/    /
        \\::/    /                \\::/    /                \\::/    /
         \\/____/                  \\/____/                  \\/____/

`.replace('X', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Eia64" target="_blank">Project</a>`)
.replace('Docs', `<a style="color: ${$theme.brightGreen.toString()}" href="https://eia-docs.vercel.app/" target="_blank">Docs</a>`)
.replace('Web client', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Terminal" target="_blank">Web client</a>`)

  let command = '';
  let historyIndex = -1;

  let input: HTMLInputElement;

  onMount(() => {
    input.focus();
    $history = [{ command: 'Welcome to Eia Playground!', outputs: [BANNER], type: 3 }];
  });

  afterUpdate(() => {
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  // Called by eia.ts when the server is connected
  function eiaConnected() {
    $history = [...$history, { command: '', outputs: ["Connected to Eia Server (" + EIA_ENDPOINT + ")"], type: 1 }];
  }

  // Called by eia.ts when execution is completed
  function messageReceived(content: string) {
    const json = JSON.parse(content);
    let type = json.type;
    if (type === "output") {
        let message = json.message;
        let sanitized = he.encode(message)
        $history = [...$history, { command: "", outputs: [sanitized], type: 1 }]
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
        sendCode(command)
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
