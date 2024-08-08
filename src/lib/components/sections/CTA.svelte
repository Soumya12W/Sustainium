<script lang="ts">
	import CtaButton from "../Buttons/CtaButton.svelte";

    
    export let title: string;
    export let className: string = '';
    export let buttonText: string = '';
    export let buttonClass: string = '';
    export let link:string = '#';
    
</script>


<div class="p-4 md:p-6 lg:p-8 flex items-center justify-between  rounded-xl lg:rounded-3xl gap-5 w-full {className} ">
    <h4 class="font-bold fluid-font-CTA">
        {title}
    </h4>

    <CtaButton link={link} text={buttonText} className="bg-white text-zinc-900 shrink-0 {buttonClass}" />
</div>

<style>
     .fluid-font-CTA{
        font-size: clamp(1rem, 2vw, 2.25rem);
    }
</style>