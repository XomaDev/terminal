<script lang="ts">
    import {history} from '../stores/history';
    import {theme} from '../stores/theme';
    import Ps1 from './Ps1.svelte';
</script>

{#each $history as { command, outputs, type }}
    <div style={`color: ${$theme.foreground}`}>
        <div class="flex flex-col md:flex-row">

            {#if type === 0}
                <Ps1 />
                <div class="flex">
                    <p class="visible md:hidden">❯</p>
                    <p class="px-2">{command}</p>
                </div>
            {/if}
            {#if type === 1}
                {#each outputs as output}
                    <p class="whitespace-pre">
                        {@html output}
                    </p>
                {/each}
            {/if}
            {#if type === 2}
                <h1 class="font-bold flex">
                    <span style={`color: ${$theme.green}`}>&gt;</span>
                </h1>
                <div class="flex">
                    <p class="visible md:hidden">❯</p>
                    <p class="px-2">{command}</p>
                </div>
                {#each outputs as output}
                    <p class="whitespace-pre">
                        {@html output}
                    </p>
                {/each}
            {/if}
            {#if type === 3}
                <div class="flex">
                    <p class="visible md:hidden">❯</p>
                    <p class="px-2">{command}</p>
                </div>
                {#each outputs as output}
                    <p class="whitespace-pre">
                        {@html output}
                    </p>
                {/each}
            {/if}
        </div>
    </div>
{/each}

