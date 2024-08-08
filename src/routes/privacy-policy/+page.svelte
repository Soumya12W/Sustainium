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

<section class="container py-10">
	<div bind:this={div} data-id="994862ff-4ab1-41bf-825d-bc28e6edb75a"></div>
</section>
