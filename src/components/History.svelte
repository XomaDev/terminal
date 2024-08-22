<script lang="ts">
  import { history } from '../stores/history';
  import { theme } from '../stores/theme';
  import Ps1 from './Ps1.svelte';
</script>

{#each $history as { command, outputs, stdInput }}
  <div style={`color: ${$theme.foreground}`}>
    <div class="flex flex-col md:flex-row">

      {#if stdInput}
<!--        If stdInput line, just print `>` else `eia >`  -->
        <h1 class="font-bold flex">
          <span style={`color: ${$theme.green}`}>&gt;</span>
        </h1>
        {:else}
        <Ps1 />
      {/if}


      <div class="flex">
        <p class="visible md:hidden">❯</p>

        <p class="px-2">{command}</p>
      </div>
    </div>

    {#each outputs as output}
      <p class="whitespace-pre">
        {@html output}
      </p>
    {/each}
  </div>
{/each}
