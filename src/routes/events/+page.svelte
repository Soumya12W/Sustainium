<script lang="ts">
    import eventimg from '$lib/assets/pexels-maxfrancis-2246476.jpg';
    import eventcover from '$lib/assets/eventpagecover.avif';
    import BlogCard1 from '$lib/components/cards/BlogCard1.svelte';
    import { goto } from '$app/navigation'; 

    const blogData = [
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'coming soon',
        duration:'Not Started',
        buttonName:'VIEW DETAILS',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },
        {
        title: 'Sustainium Blog Title',
        date: 'August 11, 2024',
        description: 'This is a brief description of the blog content',
        image: eventimg, // Replace with actual image path
        imageAlt: 'Blog image description',
        event:'webinar',
        duration:'45 min',
        buttonName:'VIEW EVENT',
        slug: '/blog/sustainium-post'
        },

       
        
];
    
    let selectedTab='All'; // Default tab is "All"
    let filteredData = blogData;

    $: {
    if (selectedTab === 'Recorded') {
        filteredData = blogData.filter(blog => blog.event === 'webinar');
    } else if (selectedTab === 'Upcoming') {
        filteredData = blogData.filter(blog => blog.event !== 'webinar');
    } else {
        filteredData = blogData;
    }
    }


  function selectTab(tab: string) {
    selectedTab = tab;
    console.log(tab);
  }

</script>

<div class="relative  overflow-hidden mb-10">
    <img src={eventcover} alt="cover" class="w-full h-[200px]  object-cover">
    <h1 class="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl lg:text-5xl bg-black bg-opacity-50 p-4">
        Live Events
    </h1>
</div> 

<section class="container flex flex-col justify-center items-center py-20 px-20">

    
    <div class="flex justify-start space-x-4 mb-10 self-start">
        <button class={`px-4 py-2 rounded-2xl ${selectedTab === 'All' ? 'bg-green-500 text-black' : 'bg-gray-300'}`} on:click={() => selectedTab = 'All'}>All</button>
        <button class={`px-4 py-2 rounded-2xl ${selectedTab === 'Recorded' ? 'bg-green-500 text-black' : 'bg-gray-300'}`} on:click={() => selectedTab = 'Recorded'}>Recorded</button>
        <button class={`px-4 py-2 rounded-2xl ${selectedTab === 'Upcoming' ? 'bg-green-500 text-black' : 'bg-gray-300'}`} on:click={() => selectedTab = 'Upcoming'}>Upcoming</button>
    </div>

    <article class='grid grid-cols-1 md:w-2/3 2xl:grid-cols-5 my-10 gap-6 justify-center'>
        {#each filteredData as blogData, index}
        <BlogCard1 
            title={blogData.title}
            date={blogData.date}
            description={blogData.description}
            image={blogData.image}
            imageAlt={blogData.imageAlt}
            event={blogData.event}
            duration={blogData.duration}
            buttonName={blogData.buttonName}
            slug={blogData.slug}
         />
        {/each}
        
    </article>

</section>