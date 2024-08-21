<script context="module" lang="ts">
  // Declarations that are at the module level, like `declare`
  declare const main: any;
</script>

<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { history } from '../stores/history';
  import { theme } from '../stores/theme';
  import { commands } from '../utils/commands';

  let BANNER = `
          _____                    _____                    _____
         /\\    \\                  /\\    \\                  /\\    \\
        /::\\    \\                /::\\    \\                /::\\    \\
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

`

  let command = '';
  let historyIndex = -1;

  let input: HTMLInputElement;

  onMount(() => {
    input.focus();

    if ($history.length === 0) {
      $history = [...$history, { command: 'Welcome to Eia Playground!', outputs: [BANNER] }];
    }
  });

  afterUpdate(() => {
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(command);
      let output = main.eia(command);
      $history = [...$history, { command, outputs: [output] }];
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
