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
	<div bind:this={div} data-id="1eb68df9-02ba-4c54-8549-5a63d2cc8be5"></div>
</section>
