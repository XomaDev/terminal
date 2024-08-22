<script context="module" lang="ts">
  // Declarations that are at the module level, like `declare`
  declare const main: any;
</script>

<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme, getTheme } from '../stores/theme';
  import * as he from 'he';

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

  let input: HTMLInputElement;

  onMount(() => {
    input.focus();

    if ($history.length === 0) {
      $history = [...$history, { command: 'Welcome to Eia Playground!', outputs: [BANNER], stdInput: false }];
    }
  });

  afterUpdate(() => {
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      let output = main.eia(command);
      let sanitized = output[1];
      console.log(output[0]);
      console.log(output[1]);
      // TODO: we need to sanitize output here, output will actually be
      //  evaluated as HTML
      $history = [...$history, { command, outputs: [sanitized], stdInput: false }];
      command = '';
    }
  };
</script>

<svelte:window
  on:click={() => {
    input.focus();
  }}
/>

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
