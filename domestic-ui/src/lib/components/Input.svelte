<script>
	import { borderColors, colors, hexColors, callLLM, callImagen, callBgRemoval } from '$lib'
	import LLMInput from '$components/inputs/LLMInput.svelte'
	import ImagenInput from '$components/inputs/ImagenInput.svelte'
	import BgRemovalInput from '$components/inputs/BgRemovalInput.svelte'
	import InputBtn from '$components/inputs/InputBtn.svelte'
	import { status } from '$lib/stores'
	import { crossfade } from 'svelte/transition'
	import { cubicOut } from 'svelte/easing'

	let { vertical } = $props()

	$inspect($status)

	// Create crossfade transition for morphing effect
	const [send, receive] = crossfade({
		duration: 600,
		easing: cubicOut,
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;
			return {
				duration: 600,
				easing: cubicOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

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

<div class="relative {vertical ? 'w-full max-w-80' : 'w-1/3'}">
	{#if $status.type}
		<div class="absolute {vertical ? 'w-full max-w-80' : 'w-full'} top-1/2 -translate-y-1/2 left-0  bg-gray-ultralight border-2 rounded-2xl p-4 h-fit" 
		style="border: {$status.type ? `2px solid ${hexColors[$status.type]}` : '2px dashed #E5E5E5'}">
			<h3 class="font-semibold text-sm mb-4" style="color: {$status.type ? hexColors[$status.type] : '#000'}">
				{#if $status.type === 'llm'}
					Generic Prompt
				{:else if $status.type === 'image'}
					Image Generation Prompt
				{:else if $status.type === 'rembg'}
					Background Removal Prompt
				{/if}
			</h3>
		
		
			{#if $status.type === 'llm'}
				<LLMInput handleSubmit={handleSubmitLLM} />
			{:else if $status.type === 'image'}
				<ImagenInput handleSubmit={handleSubmitImagen} />
			{:else if $status.type === 'rembg'}
				<BgRemovalInput handleSubmit={handleSubmitBgRemoval} />
			{/if}
		</div>
	{/if}
	{#if $status.type}
		<button onclick={backToChoice} 
				class="absolute top-1/2 -translate-y-1/2 -left-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
				in:receive={{ key: 'morph-element' }}
				out:send={{ key: 'morph-element' }}>
			<img src="/assets/home.svg" alt="home" class="w-4 h-4" />
		</button>
	{/if}
	{#if $status.type == null} 
		<div class="absolute top-1/2 -translate-y-1/2 left-0" in:receive={{ key: 'morph-element' }} out:send={{ key: 'morph-element' }}>
			<div class=" bg-gray-ultralight border-2 rounded-2xl p-4 h-fit" 
			style="border: {$status.type ? `2px solid ${hexColors[$status.type]}` : '2px dashed #E5E5E5'}">
				<div class="w-full flex flex-col items-center justify-center gap-2 p-2"  >
					<InputBtn type="llm" title="LLM" description="All purpose text-based command" onClick={typeChoice} />
					<InputBtn type="image" title="Image Generation" description="Generate image from text description" onClick={typeChoice} />
					<InputBtn type="rembg" title="Background Removal" description="Creates png transparent background of a image" onClick={typeChoice} />
				</div>
			</div>
		</div>
	{/if}
</div>