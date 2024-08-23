<script context="module" lang="ts">
  // Declarations that are at the module level, like `declare`
  declare const main: any;
</script>

<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme, getTheme } from '../stores/theme';
  import { encode } from 'html-entities';
  import * as he from 'he';
  import Ps1 from "./Ps1.svelte";
  import {sendCode} from "../eia";

  let BANNER = `
          _____                    _____                    _____
         /\\    \\                  /\\    \\                  /\\    \\                  Eia64 — 2.3
        /::\\    \\                /::\\    \\                /::\\    \\                 An interpreted language
       /::::\\    \\               \\:::\\    \\              /::::\\    \\
      /::::::\\    \\               \\:::\\    \\            /::::::\\    \\               [X] [Docs] [UI fork]
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
.replace('Docs', `<a style="color: ${$theme.brightGreen.toString()}" href="https://eia.themelon.space" target="_blank">Docs</a>`)
.replace('UI fork', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Terminal" target="_blank">UI fork</a>`)

  let command = '';
  let historyIndex = -1;
  let acceptingInput = false;

  let input: HTMLInputElement;

  onMount(() => {
    input.focus();

    if ($history.length === 0) {
      $history = [...$history, { command: 'Welcome to Eia Playground!', outputs: [BANNER], type: 3 }];
    }
  });

  afterUpdate(() => {
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  // Called by Eia64 when user input is required
  function inputRequired() {
    console.log("Input required called!")
    acceptingInput = true;
  }

  // Called by Eia64 when execution is completed
  function messageReceived(content: string) {
    const json = JSON.parse(content);
    let type = json.type;
    if (type === "output") {
        let message = json.message;
        let sanitized = he.encode(message)
        $history = [...$history, { command: "", outputs: [sanitized], type: 1 }]
    } else if (type === "input") {
        // that means it's currently requiring input
        // TODO: for later
        acceptingInput = true;
    } else if (type == "error") {
        let message = json.message;
        let sanitized = he.encode(message)
        $history = [...$history, { command: "", outputs: [sanitized], type: 0 }]
    }
  }

  (window as any).inputRequired = inputRequired;
  (window as any).messageReceived = messageReceived;

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (acceptingInput) {
        // print the symbol and user input
        $history = [...$history, { command, outputs: [], type: 2 }]
        //main.stdInput(command)
        acceptingInput = false;
        command = '';
      } else {
        let trimmed = command.trim()
        $history = [...$history, { command, outputs: [], type: -1 }]
        if (trimmed.length > 0) {
          // print the command
          //main.eia(command);
          sendCode(trimmed)
        }
        command = '';
      }
    }
  };
</script>

<svelte:window
  on:click={() => {
    input.focus();
  }}
/>

{#if !acceptingInput}
  <Ps1/>
{/if}
{#if acceptingInput}
  <h1 class="font-bold flex">
    <span style={`color: ${$theme.green}`}>&gt;</span>
  </h1>
{/if}

<div class="flex w-full">
  <p class="visible md:hidden">❯</p>

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
