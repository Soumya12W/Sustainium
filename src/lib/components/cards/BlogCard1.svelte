<script lang='ts'>
    export let title: string;
    export let date: string;
    export let duration: string;
    export let event:string;
    export let buttonName:string;
    export let description: string;
    export let image: string;
    export let imageAlt: string;
   // export let imageForProfile: string = 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg';
    export let slug: string = '#';
    import image1 from '$lib/assets/sustainiumLogo1.jpg'
</script>

<a href={slug}>
    <article class="flex flex-col h-full shadow-md rounded-md hover:scale-105 transition-transform hover:shadow-lg cursor-pointer group my-4">
        <div class="w-full h-[15em] relative">
        <span class='absolute top-2 left-2 border border-white text-white font-semibold rounded-2xl p-1'>{event}</span>    
        <img src={image} alt={imageAlt} class="w-full h-[15em] rounded-t-md bg-slate-300" />
        <span class='absolute bottom-0 left-0 w-2/5 bg-gray-300 text-gray-700 text-center font-semibold rounded-t-lg p-2'>{duration}</span>
        </div>
        <div class="card-content p-4 flex flex-col gap-2 pb-10 ">

            <h2 class="text-lg font-bold group-hover:text-green-500">{title}</h2>
            <p class="text-base text-gray-700">{description}...</p>
            <div class="flex justify-between items-center" >
                <div class="flex gap-2 items-center">
                    <div>
                        <p class="text-xs text-gray-700">{date}</p>
                    </div>
                </div>
               <!--  <i class="ri-more-2-fill"></i> -->
    
            </div>
            <button class="bg-[#2b2b2b]  text-white text-sm hover:text-green-500 py-2 mt-4 mb-2 px-6 rounded-md md:rounded-lg shadow w-40 " >{buttonName} </button> 
        </div>
    </article>
</a>



