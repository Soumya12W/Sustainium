<script lang="ts">
    import eventimg from '$lib/assets/pexels-maxfrancis-2246476.jpg';
    import eventcover from '$lib/assets/eventpagecover.avif';
    import BlogCard1 from '$lib/components/cards/BlogCard1.svelte';
    import { goto } from '$app/navigation'; 
	import BlogCard from '$lib/components/cards/BlogCard.svelte';

    function navigateToEvents() {
        goto('upcoming-events'); 
    }

    const blogData = [
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        slug: '/blog/sustainium-post'
        }
        
];

let currentPage = 1;
  const itemsPerPage = 3;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  function getCurrentPageData() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return blogData.slice(start, end);
  }

  function goToPage(page:any) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      currentPage += 1;
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage -= 1;
    }
  }

</script>

<section class="container py-20 lg:px-40">
    <div class="relative rounded-2xl overflow-hidden mb-24">
        <img src={eventcover} alt="cover" class="w-full h-[200px]  object-cover">
        <h1 class="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl lg:text-5xl bg-black bg-opacity-50 p-4">
            Live Events
        </h1>
    </div> 

    <h2 class="font-bold text-gray-700 text-center text-2xl lg:text-4xl  mb-16 ">Upcoming Events</h2>
    <article class="mt-6 mb-6 sm:flex lg:flex-row sm:flex-col justify-between items-start w-full rounded-2xl border border-gray-300 shadow-lg shadow-gray-300 overflow-hidden">
        <div class='sm:w-full md:w-1/3'>
            <img class='h-[300px] w-full' src={eventimg} alt='event'>
        </div>
        <div class='sm:w-full md:w-2/3 flex flex-col justify-center text-start py-14'>
            <h3 class='font-semibold text-gray-500 md:text-lg text-xs px-6 my-2 '>August 13, 2024 - 9:30am to 5:30pm Central Daylight Time</h3>
            <h3 class='font-bold text-[rgb(83,212,40)] md:text-3xl text-xl px-6 mt-2 mb-2  '>Software Developer Success</h3>
            <p class='md:text-md text-sm px-6 mb-2'>Learn the crucial technical and interpersonal skills needed to thrive as a Junior Engineer.</p>
            <a href='xyz'>
                <button class="bg-[#2b2b2b]  text-white hover:text-green-500 py-2 mx-6 mt-4 mb-2 px-6 rounded-full md:rounded-3xl shadow w-40 self-center">
                View Event
            </button>
            </a>
        </div>
    </article>


    <h2 class="font-bold text-gray-700 text-center mt-20 mb-16 text-2xl lg:text-4xl">Recorded Events</h2>
    <div class='grid grid-cols-3 gap-6 justify-center'>
    {#each getCurrentPageData() as blogData, index}
    <BlogCard1 
        title={blogData.title}
        date={blogData.date}
        description={blogData.description}
        image={blogData.image}
        imageAlt={blogData.imageAlt}
        slug={blogData.slug}
     />
    {/each}
    
    </div>

    <div class="flex justify-center items-center mt-10 space-x-2">
        <button on:click={prevPage} disabled={currentPage === 1} class="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200">Prev</button>
        
        {#each Array(totalPages) as _, pageIndex}
          <button on:click={() => goToPage(pageIndex + 1)} class="px-4 py-2 bg-gray-300 rounded {currentPage === (pageIndex + 1) ? 'bg-blue-500 text-white' : ''}">
            {pageIndex + 1}
          </button>
        {/each}
        
        <button on:click={nextPage} disabled={currentPage === totalPages} class="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200">Next</button>
      </div>


</section>