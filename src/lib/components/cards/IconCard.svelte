<script lang="ts">
    export let title: string;
    export let iconSrc: string;
    export let iconAlt:string ='';
    export let className: string = '';
</script>


<article class="flex flex-col gap-5 md:gap-10 justify-between items-start rounded-md  md:min-h-[25vw] lg:min-h-[15vw] p-4 border border-lime-400 md:rounded-xl    2xl:min-h-[300px] {className}">
    <img src={iconSrc} alt={iconAlt} class="w-12 text-lime-300">
    <h4 class="fluid-title font-semibold">{title}</h4>
</article>


<style>
    .fluid-title{
        font-size: clamp(.75rem, 1.2vw, 1.25rem);
    }
</style>