<script lang="ts">
    import { onMount } from 'svelte';
    let div: HTMLDivElement;
    onMount(() => {
        const script = document.createElement('script');
        script.src = 'https://app.termly.io/embed-policy.min.js';
        script.id = 'termly-jssdk';
        document.body.appendChild(script);
        div.setAttribute('name', 'termly-embed');
    });
</script>

<section class="container py-20">
    <div bind:this={div} data-id="aa79c058-ea65-4010-850e-dc8249e63e5b"></div>
</section>