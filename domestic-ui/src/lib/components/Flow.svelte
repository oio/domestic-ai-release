<script>
	import Input from '$components/Input.svelte'
	import Output from '$components/Output.svelte'
	import MidButton from '$components/MidButton.svelte'
	import { status } from '$lib/stores.js'
	import { onMount } from 'svelte'
	import GenericPromptInput from '$components/inputs/GenericPromptInput.svelte'

	let showMenu = $state(false)
	
	let windowWidth = $state(1000),
		windowHeight = $state(1000)

	const modalityChoice = (type) => {
		status.update(s => ({
			...s,
			output: null, 
			modality: type
		}))
	}

	onMount(() => {
		windowWidth = window.innerWidth
		windowHeight = window.innerHeight
	})
</script>

<svelte:window on:resize={() => {
	windowWidth = window.innerWidth
	windowHeight = window.innerHeight
}} />
<div class="w-full max-w-sm flex flex-col">
	<div class="w-full flex items-center justify-center h-12 min-h-12">
		{#if $status.modality}
			<button onclick={() => modalityChoice(null)} class="bg-white rounded-full p-2">
				<img src="/assets/home.svg" alt="home" class="w-4 h-4" />
		</button>
		{/if}
	</div>
	<div class="w-full flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-gray-light border-2 border-oio-cyan">
		{#if $status.modality == null}
			Menu
			<button onclick={() => modalityChoice('generic-prompt')}>input chosen</button>
		{:else}
			<Input>
				{#if $status.modality == 'generic-prompt'}
					<GenericPromptInput />
				{:else if $status.modality == 'image-generation'}
					<!-- <ImagePromptInput /> -->
				{:else if $status.modality == 'background-removal'}
					<!-- <BackgroundRemovalInput /> -->
				{/if}
				<MidButton disabled={$status.input == null} name={$status.modality || 'generate'} />
			</Input>
			<Output visible={$status.output}/>
			<button onclick={() => modalityChoice(null)}>menu</button>
		{/if}
	</div>
</div>