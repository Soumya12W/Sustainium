<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let dialogElement: HTMLDialogElement;
	
    export let className = '';
	export let modalWidth = '';

	function openDialog() {
		
		dialogElement.showModal();
        dispatch('open');
	
	}

	function closeDialog() {
		dialogElement.close();
        dispatch('close');
		
	}

	function handleKeydown(event: any) {
		if (event.key === 'Escape' && dialogElement.open) {
			closeDialog();
		}
	}
</script>

<svelte:document on:keydown={handleKeydown} />

<button on:click={openDialog} class="{className}">
	<slot name="button"></slot>
</button>

<dialog bind:this={dialogElement} class="relative max-w-[80%] {modalWidth} rounded-2xl">
	<button on:click={closeDialog} class="absolute z-50 top-0 right-0 text-2xl cursor-pointer font-light hover:bg-sky-500 hover:text-black m-3  px-1 rounded-md  bg-[#0f0c08] text-white">
		<i class="ri-close-line"></i>
	</button>
	<slot></slot>
</dialog>


<!-- ... -->
<style>
dialog {
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
