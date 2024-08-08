<script lang="ts">
	export let purpose: string = '';
	export let title: string;
	export let description: string;
	export let image: string;
	export let imageAlt: string;
	export let rightAlign: boolean = false;
</script>

<article
	class="flex flex-col gap-8 md:gap-9 md:flex-row md:items-center md:justify-between  {rightAlign
		? 'md:flex-row-reverse'
		: ''}"
>
	<div class="flex flex-col space-y-1 md:space-y-2 md:w-[40%]">
		<h6 class="text-lime-500 fluid-subtitle">{purpose}</h6>
		<h2 class="fluid-title leading-tight font-bold max-w-[70%] md:max-w-full">{title}</h2>
		<p class="fluid-subtitle max-w-[85%]">{description}</p>
	</div>

	<img
		src={image}
		alt={imageAlt}
		class="w-full md:w-[54%] border border-lime-400 soft-glow shadow-lime-500 rounded-md md:rounded-2xl"
	/>
</article>

<style>
	.fluid-title {
		font-size: clamp(1rem, 1.85vw, 2.25rem);
	}
	.fluid-subtitle {
		font-size: clamp(0.75rem, 1.15vw, 1.5rem);
	}

	.soft-glow {
		box-shadow: 0 0 5px 0 rgba(163, 230, 53, 0.2);
	}
</style>
