<script>
	import { borderColors, colors, hexColors, callLLM, callImagen, callBgRemoval } from '$lib'
	import LLMInput from '$components/inputs/LLMInput.svelte'
	import ImagenInput from '$components/inputs/ImagenInput.svelte'
	import BgRemovalInput from '$components/inputs/BgRemovalInput.svelte'
	import InputBtn from '$components/inputs/InputBtn.svelte'
	import { status } from '$lib/stores'

	let { vertical } = $props()

	$inspect($status)

	const handleSubmitLLM = async (prompt) => {
		status.update(s => ({
			...s,
			input: prompt,
			output: null
		}))
		console.log('calling LLM with prompt', prompt)
		await callLLM(prompt)
	}
	const handleSubmitImagen = async (prompt) => {
		status.update(s => ({
			...s,
			input: prompt,
			output: null
		}))
		console.log(prompt)
		await callImagen(prompt)
	}
	const handleSubmitBgRemoval = async (data) => {
		status.update(s => ({
			...s,
			input: data,
			output: null
		}))
		console.log(data)
		await callBgRemoval(data)
	}
	const backToChoice = () => {
		status.update(s => ({
			...s,
			input: null,
			output: null, 
			type: null
		}))
	}
	const typeChoice = (type) => {
		status.update(s => ({
			...s,
			output: null, 
			type: type
		}))
	}
</script>

<div class="relative {vertical ? 'w-full max-w-80' : 'w-1/3'} bg-gray-ultralight border-2 rounded-2xl p-4" 
style="border: {$status.type ? `2px solid ${hexColors[$status.type]}` : '2px dashed #E5E5E5'}">
	{#if $status.type}
		<h3 class="font-semibold text-sm mb-4" style="color: {$status.type ? hexColors[$status.type] : '#000'}">
			{#if $status.type === 'llm'}
				Generic Prompt
			{:else if $status.type === 'image'}
				Image Generation Prompt
			{:else if $status.type === 'rembg'}
				Background Removal Prompt
			{/if}
		</h3>
	{/if}
	{#if $status.type === 'llm'}
		<LLMInput handleSubmit={handleSubmitLLM} />
	{:else if $status.type === 'image'}
		<ImagenInput handleSubmit={handleSubmitImagen} />
	{:else if $status.type === 'rembg'}
		<BgRemovalInput handleSubmit={handleSubmitBgRemoval} />
	{:else if $status.type === null}
		<div class="w-full flex flex-col items-center justify-center gap-2 p-2">
			<InputBtn type="llm" title="LLM" description="All purpose text-based command" onClick={typeChoice} />
			<InputBtn type="image" title="Image Generation" description="Generate image from text description" onClick={typeChoice} />
			<InputBtn type="rembg" title="Background Removal" description="Creates png transparent background of a image" onClick={typeChoice} />
		</div>
	{/if}
	{#if $status.type}
		<button onclick={backToChoice} class="absolute top-1/2 -translate-y-1/2 -left-10 p-2 bg-white rounded-full">
			<img src="/assets/home.svg" alt="home" class="w-4 h-4" />
		</button>
	{/if}
</div>