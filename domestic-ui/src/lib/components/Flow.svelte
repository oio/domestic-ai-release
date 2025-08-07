<script>
	import Input from '$components/Input.svelte'
	import Output from '$components/Output.svelte'
	import ModalityMenu from '$components/ModalityMenu.svelte'
	import { status } from '$lib/stores.js'
	import { fade } from 'svelte/transition'
	import { onMount } from 'svelte'

	let showMenu = $state(false)
	
	const modalityChoice = (type) => {
		status.update(s => ({
			...s,
			output: null, 
			modality: type
		}))
	}

</script>

<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 200 }} class="w-full max-w-sm flex flex-col">
	<div class="w-full flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-gray-dark { $status.modality ? 'border-2 border-oio-cyan' : '' } transition-all duration-300">
		<button onclick={() => modalityChoice(null)} class="bg-gray-light rounded-full p-2">
			<img src="/assets/home.svg" alt="home" class="w-4 h-4" />
		</button>
		{#if $status.modality == null}
			<ModalityMenu />
		{:else}
			<Input />
			<Output visible={$status.output}/>
		{/if}
	</div>
</div>