<script lang='ts'>
    export let title: string;
    export let date: string;
    export let description: string;
    export let image: string;
    export let imageAlt: string;
   // export let imageForProfile: string = 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg';
    export let slug: string = '#';
    import image1 from '$lib/assets/sustainiumLogo1.jpg'
</script>

<a href={slug}>
    <article class="flex flex-col h-full shadow-md rounded-md hover:scale-105 transition-transform hover:shadow-lg cursor-pointer group">
        <img src={image} alt={imageAlt} class="w-full h-[15em] rounded-t-md bg-slate-300" />
        <div class="card-content p-6 flex flex-col gap-2 pb-10 ">
            <div class="flex justify-between items-center" >
                <div class="flex gap-2 items-center">
                    <img src={image1} alt={imageAlt} class="w-12 rounded-full  " />
                    <div>
                        <p class="text-sm font-bold">Sustainium</p>
                        <p class="text-xs">{date}</p>
                    </div>
                </div>
               <!--  <i class="ri-more-2-fill"></i> -->
    
            </div>
            <h2 class="text-base font-bold group-hover:text-sky-500">{title}</h2>
            <p class="text-sm">{description}...</p> 
        </div>
    </article>
</a>



