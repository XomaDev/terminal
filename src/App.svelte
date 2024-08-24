<script lang="ts">
  import Input from './components/Input.svelte';
  import History from './components/History.svelte';
  import { theme } from './stores/theme';
</script>

<svelte:head>
  {#if import.meta.env.VITE_TRACKING_ENABLED === 'true'}
    <script
      async
      defer
      data-website-id={import.meta.env.VITE_TRACKING_SITE_ID}
      src={import.meta.env.VITE_TRACKING_URL}
    ></script>
  {/if}
</svelte:head>

<main
        class="h-full border-2 rounded-md p-4 overflow-auto text-xs sm:text-sm md:text-base"
        style={`
    background: linear-gradient(135deg, ${$theme.background}, ${$theme.backgroundSecond});
    color: ${$theme.foreground};
    border-color: ${$theme.green};
  `}
>
  <History />

  <div class="flex flex-row">
    <Input />
  </div>
</main>
