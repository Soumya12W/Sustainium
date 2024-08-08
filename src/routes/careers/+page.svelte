<script lang="ts">
	import { page } from '$app/stores';
	import CtaButton from '$lib/components/Buttons/CtaButton.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="container flex flex-col md:flex-row gap-10 items-center p-4 lg:min-h-[80vh]">
	<div class="md:w-1/2">
		<h1 class="mb-2 md:mb-4 fluid-title font-extrabold leading-tight">
			Rise Up to the climate challenge! Embark on a Career That Shapes a Greener Tomorrow with Us
		</h1>

		<p class="fluid-subtitle font-medium text-lime-600 md:mb-8">
			Climate change remains one of the critical challenges faced by earth today with global
			temperatures rising due to increased greenhouse gas emissions.
		</p>

		<CtaButton link='careers/open-roles'  text="See open roles" className="hidden md:inline-flex hover:bg-neutral-950" />
	</div>

	<img
		src="https://static.wixstatic.com/media/454d4b_3b659f58d00547f7ad28c92f2c469bfc~mv2.webp"
		alt=""
		class="w-10/12 md:w-1/2"
	/>
</section>
<div class="text-center">
	<CtaButton link='careers/open-roles'  text="See open roles" className="md:hidden " />
</div>

<p
	class="container py-16 md:py-28 tracking-wide font-semibold w-3/4 text-center fluid-subtitle mx-auto"
>
	Our team has a diverse set of skills to track policy changes, build enterprise tools for carbon
	accounting, develop roadmaps to get to <span class="font-bold">net0.</span>
	<br /> <br />We are passionate about earth and committed to doing whatever it takes to make planet
	earth sustainable.
</p>

<section class="container">
	<h2 class="fluid-h2 font-black tracking-wide text-center max-w-xs mx-auto md:max-w-[40%]">
		Join us to make impact at <span class="text-lime-500">Sustainium</span>
	</h2>

	<ul class="flex text-center justify-center items-center py-8">
		<li class="fluid-font">Are you all for continuous improvement and learning?</li>
		<li class="fluid-font">Do you play well with others and practice effective communication?</li>
		<li class="fluid-font">Are you committed to do your part to combat climate change?</li>
	</ul>

	<article class="prose prose-sm md:prose-base text-center mx-auto mt-5">
		<blockquote>
			If this sounds like you, then we’d love to hear from you. Join to Build a Brighter Tomorrow
			with Sustainium.
		</blockquote>
	</article>

	<div class="text-center">
		<CtaButton link='careers/open-roles' text="See open roles" className="my-10 md:my-20  text-center hover:bg-neutral-950" />
	</div>
</section>

<style type="postcss">
	.fluid-title {
		font-size: clamp(1rem, 2vw, 2.5rem);
	}

	.fluid-subtitle {
		font-size: clamp(0.75rem, 1.25vw, 1.5rem);
	}

	ul li {
		@apply border-r-2 px-4 py-2 text-neutral-400 font-medium max-w-xs;
	}

	ul li:last-child {
		@apply border-r-0;
	}
</style>
