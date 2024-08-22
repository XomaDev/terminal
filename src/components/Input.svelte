<script context="module" lang="ts">
  // Declarations that are at the module level, like `declare`
  declare const main: any;
</script>

<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme, getTheme } from '../stores/theme';
  import * as he from 'he';
  import Ps1 from "./Ps1.svelte";

  let BANNER = `
          _____                    _____                    _____
         /\\    \\                  /\\    \\                  /\\    \\                  Project Eia64 — X
        /::\\    \\                /::\\    \\                /::\\    \\                 UI Fork — Y
       /::::\\    \\               \\:::\\    \\              /::::\\    \\
      /::::::\\    \\               \\:::\\    \\            /::::::\\    \\
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

`.replace('X', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Eia64" target="_blank">XomaDev/Eia64</a>`)
.replace('Y', `<a style="color: ${$theme.brightGreen.toString()}" href="https://github.com/XomaDev/Terminal" target="_blank">XomaDev/Eia64</a>`)

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
  function execResult(content: string) {
    let sanitized = he.encode(content)
    if (sanitized.endsWith('\n')) {
      sanitized = sanitized.substring(0, sanitized.length - 1)
    }
    $history = [...$history, { command: "", outputs: [sanitized], type: 1 }]
  }

  (window as any).inputRequired = inputRequired;
  (window as any).execResult = execResult;

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (acceptingInput) {
        // print the symbol and user input
        $history = [...$history, { command, outputs: [], type: 2 }]
        main.stdInput(command)
        acceptingInput = false;
        command = '';
      } else {
        // print the command
        $history = [...$history, { command, outputs: [], type: 0 }]
        main.eia(command);
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
