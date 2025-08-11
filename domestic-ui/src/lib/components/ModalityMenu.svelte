<script>
	import { slide, fade } from 'svelte/transition'
	import { status } from '$lib/stores'

	const modalities = [
		{
			name: 'generic-prompt',
			label: 'Generic Prompt',
			emoji: '💭', 
			description: 'All purpose text-based command', 
			full: true
		},
		{
			name: 'image-generation',
			label: 'Image Generation',
			emoji: '🎨', 
			description: 'I generate an image from text description',
			full: false
		},
		{
			name: 'background-removal',
			label: 'Background Removal',
			emoji: '✂️',
			description: 'I remove the background of a given image',
			full: false
		}, 
		{
			name: 'pokemon',
			label: 'Pokemon',
			emoji: '🐉', 
			description: '...A wild Roby appeared!',
			full: false
		}, 
		{
			name: 'haiku',
			label: 'Haiku',
			emoji: '🌸',
			description: 'I write a haiku about a subject of your choice',
			full: false
		}
	]

	const modalityChoice = (modality) => {
		status.update(s => ({
			...s,
			modality: modality
		}))
	}
</script>

<div transition:slide class="w-full flex flex-wrap items-start justify-start">
	{#each modalities as modality}
		{#if modality.full}
			<div class="w-full p-1">
				<button onclick={() => modalityChoice(modality.name)} class="w-full bg-gray-light hover:bg-gray-light/80 rounded-lg p-2 py-4 flex flex-col items-start justify-start transition-colors duration-300">
					<div  class="">
						<div class="text-left uppercase text-oio-cyan">
							<p class="flex items-center gap-2">
								{modality.emoji} {modality.label}
							</p>
						</div>
						<div class="w-full text-left">
							<p class="text-xs text-gray-ultralight">{modality.description}</p>
						</div>
					</div>
				</button>
			</div>
		{:else}
			<div class="w-1/2 p-1">
				<button onclick={() => modalityChoice(modality.name)} class="w-full aspect-square bg-black hover:bg-[#0d0d0d] rounded-lg p-2 flex flex-col items-start justify-start transition-colors duration-300">
					<div  class="">
						<div class="text-left uppercase text-oio-cyan">
							<p class="flex items-center gap-2">
								{modality.emoji} {modality.label}
							</p>
						</div>
						<div class="w-full text-left">
							<p class="text-xs text-gray-ultralight">{modality.description}</p>
						</div>
					</div>
				</button>
			</div>
		{/if}
	{/each}
</div>

