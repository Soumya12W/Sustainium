<script lang="ts">
    export let text:string;
    export let className:string =''; 
    export let link:string = '#';
</script>



<a href={link} class="group fluid-font inline-flex items-center gap-2 px-4 py-2 bg-lime-500 text-white rounded-full  hover:bg-lime-500 active:bg-yellow-400 {className}">
	{text}
	<i class="ri-arrow-right-line text-sm group-hover:-rotate-45"></i>
</a>
