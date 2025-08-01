<script>
	import Input from '$components/Input.svelte'
	import Output from '$components/Output.svelte'
	import MidButton from '$components/MidButton.svelte'
	import ModalityMenu from '$components/ModalityMenu.svelte'
	import { status } from '$lib/stores.js'
	import { onMount } from 'svelte'
	import GenericPromptInput from '$components/inputs/GenericPromptInput.svelte'
	import ImageGenerationInput from '$components/inputs/ImageGenerationInput.svelte'
	import BackgroundRemovalInput from '$components/inputs/BackgroundRemovalInput.svelte'

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
			<button onclick={() => modalityChoice(null)} class="bg-gray-light rounded-full p-2">
				<img src="/assets/home.svg" alt="home" class="w-4 h-4" />
		</button>
		{/if}
	</div>
	<div class="w-full flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-gray-light border-2 border-oio-cyan">
		{#if $status.modality == null}
			<ModalityMenu />
		{:else}
			<Input>
				<div class="input-output w-full mb-4">
					{#if $status.modality == 'generic-prompt'}
						<GenericPromptInput />
					{:else if $status.modality == 'image-generation'}
						<ImageGenerationInput />
					{:else if $status.modality == 'background-removal'}
						<BackgroundRemovalInput />
					{/if}
				</div>
				<MidButton disabled={$status.input == null} name={$status.modality || 'generate'} />
				<div class="w-full">
					<!-- model data -->
				</div>
			</Input>
			<Output visible={$status.output}/>
		{/if}
	</div>
</div>