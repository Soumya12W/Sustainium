<script lang="ts">
	import resolveRichText, { serverUrl } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
	let blog = data.props?.blog;		
</script>

<article class="prose-sm prose md:prose-base blog-width container py-10 lg:py-16">
	<h1>{blog.title}</h1>
	<img
		src={blog.coverImage.data.attributes.url}
		alt={blog.coverImage.data.attributes.alternativeText}
	/>
	<div>
		{@html resolveRichText(blog.content)}
	</div>
	<hr class="border-gray-200 border-t md:m-0 " />
	<div class="flex items-center space-x-4 mt-2 ml-5">
		<p class="text-sm">Share this Article:</p>
		<a
			href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(data.url)}`}
			target="_blank"
			class="text-white bg-gray-500 hover:bg-blue-600 rounded-full flex items-center justify-center w-8 h-8 no-underline border-b border-gray-500 hover:border-blue-600"
			>
			<i class="ri-linkedin-fill"></i>
		</a>
		<a
			href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(data.url)}`}
			target="_blank"
			class="text-white bg-gray-500 hover:bg-gray-800 rounded-full flex items-center justify-center w-8 h-8 no-underline border-b border-gray-500 hover:border-gray-800"
			>
			<i class="ri-twitter-x-fill"></i>
		</a>
	</div>
</article>

<style>
	.blog-width {
		max-width: 90ch !important;
	}
</style>
