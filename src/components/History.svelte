<script lang="ts">
    import {history} from '../stores/history';
    import {theme} from '../stores/theme';
    import Ps1 from './Ps1.svelte';
</script>

{#each $history as { command, outputs, type }}
    <div style={`color: ${$theme.foreground}`}>
        <div class="flex flex-row">
            {#if type === -3}
                {#each outputs as output}
                    <p class="whitespace-pre">
                        {@html output}
                    </p>
                {/each}
            {/if}
            {#if type === -2}
                <div class="flex">
                    <p class="px-2" >{command}</p>
                </div>
            {/if}
            {#if type === -1}
                <Ps1 />
                <div class="flex">
                    <p class="px-2" style="white-space: pre;">{command}</p>
                </div>
            {/if}
            {#if type === 0}
                {#each outputs as output}
                    <p class="whitespace-pre" style="color: {$theme.brightRed}">
                        {@html output}
                    </p>
                {/each}
            {/if}
            {#if type === 1}
                {#each outputs as output}
                    <p class="whitespace-pre" style="color: {$theme.brightGreen}">
                        {@html output}
                    </p>
                {/each}
            {/if}
            {#if type === 2}
                <Ps1 />
                <div class="flex">
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

