<script lang="ts">
	import type { PageData } from './$types';
	import demoCover from '$lib/assets/book-a-demo/demo.webp';
	export let data: PageData;
</script>

<img src={demoCover} alt="book a demo cover" class="w-[40%] ml-[-70px] lg:block hidden">

<section class="container flex flex-col justify-center gap-10 py-10 lg:flex-row  lg:mt-[-10em] 2xl:mt-[-16em]   ">
	
	<div class="prose-sm xl:prose-lg prose-h6:font-bold prose-h1:text-lime-500 prose-h1:font-bold prose-h1:mb-4 prose-ol:list-decimal pl-[5%] xl:pl-[10%]">
		<h1>Book a demo</h1>

		<h6>Your partner in Sustainable Business Practices</h6>
		<p>
			Welcome to Sustainium, the cutting-edge solution for carbon accounting. Our platform is
			designed to make your journey towards sustainability both seamless and effective.
		</p>

		<h6>Booking Process</h6>

		<ol>
			<li>Select a session time: Choose a date and time that works best for you.</li>
			<li>Provide your details: Fill in the form with your details</li>
			<li>Confirm your booking: we will send you a teams meeting invite.</li>
		</ol>

		<h6>
			Need help? <br />
			Reach out to us at hello@sustainium.io or <br /> +1 (925) 336-3944
		</h6>
	</div>
	<iframe
		title="zoho-form"
		width="100%"
		class="min-h-screen"
		src="https://sustainiuminc.zohobookings.com/portal-embed#/4584511000000039016"
		frameborder="0"
	>
	</iframe>
</section>
