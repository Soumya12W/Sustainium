<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<section
	class="mt-10 py-8 pb-24 contact-hero bg-contain bg-no-repeat bg-sm-right-bottom lg:bg-right-bottom lg:bg-origin-border bg-origin-content bg-lime-50/20 px-8"
>
	<div class="container">
		<h1 class="fluid-title font-bold lg:font-black text-lime-500 tracking-wide">
			Hello Change Maker
		</h1>
		<h2 class="fluid-subtitle font-medium">Want to talk ?</h2>

		<div class="mt-20 flex flex-col space-y-6 xl:space-y-10">
			<a href="/book-a-demo" class="demo-link bg-white flex items-center justify-between gap-10 p-4 lg:p-6 shadow-md transform scale-100 hover:scale-105 transition-transform duration-300 md:w-[60%] ease-in-out rounded-xl lg:rounded-xl hover:bg-lime-50">
				<div>
					<h3 class="fluid-card-title font-bold">Interested in using Sustanium?</h3>
					<p class="fluid-font text-neutral-400">Book a demo with our team.</p>
				</div>
				<i class="ri-arrow-right-down-line text-2xl transform transition-transform duration-300"></i>
			</a>
			<a
				href="/partner"
				class="demo-link bg-white flex items-center justify-between gap-10 p-4 lg:p-6 shadow-md transform scale-100 hover:scale-105 transition-transform duration-300 md:w-[60%] ease-in-out rounded-xl lg:rounded-xl hover:bg-lime-50"
			>
				<div>
					<h3 class="fluid-card-title font-bold">Interested in Partnership?</h3>
					<p class="fluid-font text-neutral-400">Check our partner page</p>
				</div>
				<i class="ri-arrow-right-down-line text-2xl transform transition-transform duration-300"></i>
			</a>
			<a
				href="/careers"
				class="demo-link bg-white flex items-center justify-between gap-10 p-4 lg:p-6 shadow-md transform scale-100 hover:scale-105 transition-transform duration-300 md:w-[60%] ease-in-out rounded-xl lg:rounded-xl hover:bg-lime-50"
			>
				<div>
					<h3 class="fluid-card-title font-bold">Want to work at Sustainium?</h3>
					<p class="fluid-font text-neutral-400">Browse our open roles.</p>
				</div>
				<i class="ri-arrow-right-down-line text-2xl transform transition-transform duration-300"></i>
			</a>

			<a
				href="mailto:hello@sustainium.io"
				class="demo-link bg-white flex items-center justify-between gap-10 p-4 lg:p-6 shadow-md transform scale-100 hover:scale-105 transition-transform duration-300 md:w-[60%] ease-in-out rounded-xl lg:rounded-xl hover:bg-lime-50"
			>
				<div>
					<h3 class="fluid-card-title font-bold">Just want to say hi?</h3>
					<p class="fluid-font text-neutral-400">Drop us a note at hello@sustainium.io</p>
				</div>
				<i class="ri-arrow-right-down-line text-2xl transform transition-transform duration-300"></i>
			</a>
			
		</div>
	</div>
</section>

<style>
	.fluid-title {
		font-size: clamp(1.5rem, 5vw, 3rem);
	}

	.fluid-subtitle {
		font-size: clamp(1rem, 2vw, 2rem);
	}
	.fluid-card-title {
		font-size: clamp(0.65rem, 1.5vw, 2rem);
	}

	.shadow {
		@apply shadow-md;
		/* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
	}

	.map {
		@apply container bg-origin-border max-h-full !important;
	}

	.contact-hero {
		background-image: url($lib/assets/contact-hero.webp);
	}
	
.demo-link:hover .ri-arrow-right-down-line {
    transform: rotate(260deg);
}


</style>
