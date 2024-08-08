<script context="module" lang="ts">
	import 'remixicon/fonts/remixicon.css';
	import '../app.css';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';
</script>

<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import SustainiumLogo from '$lib/assets/sustainiumLogo.webp';
	import SustainiumFooterLogo from '$lib/assets/sustainiumLogoFooter.webp';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import { fly } from 'svelte/transition';
	import linkedin1 from '$lib/assets/linkedin-sqaure 1.webp'
	import tippy from 'tippy.js'; // Import tippy
	import { onMount } from 'svelte';

	export let data: LayoutData;

	let isOpen: boolean = false;
	let currentYear = new Date().getFullYear();

	function closeSidebar() {
		isOpen = false;
	}

	// Call createDropdown when the component mounts
	function dropdown(element: HTMLElement, id: string) {
		const contentElement = document.getElementById(id);

		const tooltip = tippy(element, {
			arrow: false,
			content: contentElement?.innerHTML,
			placement: 'bottom',
			interactive: true,
			maxWidth: 1200,
			allowHTML: true,
			theme: 'light',
			hideOnClick: 'toggle',
			appendTo: () => document.body,

			onShown(instance) {
				const content = instance.popper.querySelector('.tippy-content');
				const clickHandler = (e: any) => {
					if (e.target && (e.target as HTMLElement).tagName === 'A') {
						tooltip.hide();
						content?.removeEventListener('click', clickHandler);
					}
				};
				content?.addEventListener('click', clickHandler);
			}
		});

		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<svelte:head>
	{#if data.seo}
		<title>{data.seo?.metaTitle}</title>
		<meta name="google-site-verification" content="dYkvXe62xo8lYibGh5Bw-kBqfnMnuHHiSohPUohia-g" />
		<meta name="description" content={data.seo?.metaDescription} />
		<meta name="keywords" content={data.seo?.keywords} />
		<link rel="canonical" href={data.seo?.canonicalURL} />
	{/if}
	{#if $page.data?.seo}
		<title>{$page.data?.seo?.metaTitle}</title>
		<meta name="description" content={$page.data?.seo?.metaDescription} />
		<meta name="keywords" content={$page.data?.seo?.keywords} />
		<meta property="og:image" content={$page.data?.seo?.metaImage?.data?.attributes?.url} />
	{/if}

	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-K5LT54F3');
	</script>
	<!-- End Google Tag Manager -->
	
</svelte:head>

<header class="  py-4 xl:py-6 z-20 sticky top-0 bg-white/30 backdrop-blur-md">
	<div class="flex justify-between items-center container">
		<a href="/" class="w-1/3 sm:w-[17%]">
			<img src={SustainiumLogo} alt="Sustainium Logo" />
		</a>
		<div class="flex gap-12 lg:gap-16 items-center">
			<nav class="hidden md:block fluid-font">
				<ul
					class="flex gap-8 p-2 px-8 border border-lime-500 bg-white/40 backdrop-blur-3xl rounded-full"
				>
				<!-- <li>
					<a href="/product" class:text-lime-500={$page.url.pathname == '/product'}> Product </a>
				</li> -->
					<li>
						<a href="/careers" class:text-lime-500={$page.url.pathname == '/careers'}> Careers </a>
					</li>
					<li>
						<a href="/contact-us" class:text-lime-500={$page.url.pathname == '/contact-us'}>
							Contact
						</a>
					</li>
					<li>
						<button use:dropdown={'Resources'} class="dropdown hover:text-lime-500"
							>Resources</button
						>
						<!-- Dropdown content -->
						<div id="Resources" class="hidden">
							<ul class="bg-white rounded-md overflow-hidden">
								<li>
									<a
										href="/glossary"
										class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Glossary</a
									>
								</li>
								<li>
									<a href="/blog" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
										>Blog</a
									>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
			<a
				href="/book-a-demo"
				class="px-6 py-2 bg-lime-500 hover:bg-lime-300 active:bg-yellow-400 rounded-full text-black fluid-font"
				>Book a demo</a
			>
			<button
				class="md:hidden px-2 p-1 border rounded-md hover:bg-slate-200 active:bg-slate-50"
				on:click={() => (isOpen = true)}
			>
				<i class="ri-menu-line"></i>
			</button>
		</div>
	</div>
</header>

{#key data.url}
	<main
		class="min-h-screen"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<slot />
	</main>
{/key}

<footer
	class="min-h-[24rem] bg-neutral-800   text-white text-center md:text-left text-xs lg:text-sm flex flex-col justify-between"
>
	<div class="container pb-6 pt-16 grid md:grid-cols-4 justify-items-center gap-10 lg:gap-32">
		<img src={SustainiumFooterLogo} alt="Sustainium Logo" class="max-w-44 w-full" />

		<div class="flex flex-col space-y-2">
			<h6 class="font-semibold text-lime-500 text-base lg:text-xl">Contact Us</h6>
			<p class="max-w-xs">5890 Stoneridge Dr, Suite 216 Pleasanton, CA 94588 USA</p>
			<a href="mailto:hello@Sustanium.io" class=" text-lime-500 hover:text-lime-300"
				>hello@sustainium.io</a
			>
			<p>Tel: +1 (925) 336-3944</p>
		</div>

		<div class="flex flex-col space-y-2 capitalize">
			<a href="/terms-of-use">terms of use</a>
			<a href="/disclaimer">disclaimer</a>
			<a href="/acceptance-use-policy">acceptance use policy</a>
			<a href="/privacy-policy">privacy policy</a>
		</div>

		<div class="flex flex-col space-y-2 capitalize">
			<a href="/careers">careers</a>
			<a href="/contact-us">contact</a>
			<a href="/blog">blog</a>
			<a href="/glossary">glossary</a>
		</div>
	</div>
	<div class="flex justify-center items-center gap-4 mt-10">
		<span class="w-[500px] h-[1px] bg-white/70"></span>
		<a
			href="https://www.linkedin.com/company/sustainiuminc"
			class="flex items-center text-base"
		>
			<!-- <i class="ri-linkedin-box-fill rounded-sm text-blue-500 text-5xl"></i> -->
			<img src={linkedin1} alt="LinkedIn Logo" class="w-10" />
		</a>

		<span class="w-[500px] h-[1px] bg-white/70"></span>
	</div>

	<p class="container py-4 text-center tracking-wider font-light">
		© {currentYear} Sustainium. All rights reserved.
	</p>
</footer>

<Sidebar {isOpen} on:closed={closeSidebar}>
	<nav class="flex flex-col gap-4 p-4">
		<!-- <a href="/product" class="fluid-font" on:click={closeSidebar}>Product</a> -->
		<a href="/careers" class="fluid-font" on:click={closeSidebar}>Careers</a>
		<a href="/contact-us" class="fluid-font" on:click={closeSidebar}>Contact</a>
		<a href="/glossary" class="fluid-font" on:click={closeSidebar}>Glossary</a>
		<a href="/blog" class="fluid-font" on:click={closeSidebar}>Blog</a>
	</nav>
</Sidebar>

<style type="postcss">
	footer a {
		@apply hover:text-lime-300;
	}

	nav a {
		@apply font-medium hover:text-lime-700 active:text-yellow-500;
	}
</style>
