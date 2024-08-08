<script lang="ts">
    import eventimg from '$lib/assets/eventsimg.jpg';
    import eventcover from '$lib/assets/eventpagecover.avif';
    import { goto } from '$app/navigation'; 

    function navigateToEvents() {
        goto('upcoming-events'); 
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
        <div class='sm:w-full md:w-2/3 flex flex-col justify-center text-center py-14'>
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
    
    <article class="mt-6  sm:flex lg:flex-row sm:flex-col justify-between items-start w-full rounded-2xl shadow-lg shadow-gray-300 border border-gray-300  overflow-hidden">
        <div class='sm:w-full h-full md:w-1/3'>
            <img class='object-cover h-[300px] w-full' src={eventimg} alt='event'>
        </div>
        <div class='sm:w-full md:w-2/3 text-center flex flex-col justify-center py-14'>
            <h3 class='font-semibold text-gray-500 md:text-lg text-xs px-6 my-2'>August 13, 2024 - 9:30am to 5:30pm Central Daylight Time</h3>
            <h3 class='font-bold text-[rgb(83,212,40)] md:text-3xl text-xl px-6 mt-2 mb-2'>Software Developer Success</h3>
            <p class='md:text-md text-sm px-6 mb-2'>Learn the crucial technical and interpersonal skills needed to thrive as a Junior Engineer.</p>
            <a href="live-events">
            <button class="bg-[rgb(83,212,40)] text-white py-2 mx-6 mt-4 mb-2 px-6 rounded-full md:rounded-3xl shadow hover:bg-green-600 w-40 self-center">
                View Event
            </button>
        </a>
        </div>
    </article>


</section>