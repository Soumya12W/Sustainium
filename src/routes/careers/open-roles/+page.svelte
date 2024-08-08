<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
</script>

<section class="container my-10">
	<iframe
		title="Job Listings"
		id="jobFrame"
		style="background: transparent;"
		src="https://12thwonder.kekahire.com/api/embedjobs/46d04007-cc44-4268-aac3-947fb7095d7a"
		width="100%"
		frameborder="0"
		class="min-h-screen"
	></iframe>
</section>

<style>
	:global(iframe::-webkit-scrollbar) {
		display: none;
	}
</style>
