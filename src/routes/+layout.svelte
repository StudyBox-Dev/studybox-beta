<script>
    import "../styles/global.css";
    import { onMount } from "svelte";

    onMount(async () => {
        const { initTheme } = await import("../utils/theme");

        initTheme();
    });
</script>

<header />
<main>
    <!-- Page content -->
    <slot />
</main>
