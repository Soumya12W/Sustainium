<script lang="ts">
    import { serverUrl } from '$lib';
    import BlogCard from '$lib/components/cards/BlogCard.svelte';
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';

    export let data: PageData;
    export let blogs: any[] = data.props?.blogs;

    
    $: totalPages = Array(data.props?.totalPages || 1).fill('');
    $: currentPage = data.props?.currentPage || 1;

    function navigateToPage(pageNumber: number) {
        goto(`/blog?page=${pageNumber}`);
    }
</script>

<section class="container grid md:grid-cols-2 items-stretch lg:grid-cols-3 gap-10 py-10">
    {#each blogs as blog}
        <BlogCard
            title={blog.attributes.title}
            date={blog.attributes.Date} 
            description={blog.attributes.description}
            image={blog.attributes.coverImage.data.attributes.url}
            imageAlt={blog.attributes.coverImage.data.attributes.alternativeText}
            slug={`/post/${blog.attributes.slug}`}
        />
    {/each}
</section>

<section class="my-20 container">
    <div class="flex items-center justify-center gap-4">
        <button
            on:click={() => navigateToPage(currentPage - 1)}
            disabled={currentPage === 1}
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
        >
            Previous
        </button>
        <div class="flex items-center gap-2">
            {#each totalPages as _, index }
                <a
                    href="/blog?page={index + 1}"
                    
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    class:active={currentPage === index + 1}
                    type="button"
                >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        {index + 1}
                    </span>
                </a>
            {/each}
        </div>
        <button
            on:click={() => navigateToPage(currentPage + 1)}
            disabled={currentPage === totalPages.length}
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
        >
            Next
        </button>
    </div>
</section>

<style>
  .active{
    @apply bg-black text-white;

  }  
</style>
