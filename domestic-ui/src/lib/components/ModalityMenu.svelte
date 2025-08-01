<script>
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'

	const modalities = [
		{
			name: 'generic-prompt',
			label: 'Generic Prompt'
		},
		{
			name: 'image-generation',
			label: 'Image Generation'
		},
		{
			name: 'background-removal',
			label: 'Background Removal'
		}, 
		{
			name: 'pokemon',
			label: 'Pokemon'
		}, 
		{
			name: 'haiku',
			label: 'Haiku'
		}
	]

	const modalityChoice = (modality) => {
		status.update(s => ({
			...s,
			modality: modality
		}))
	}
</script>

<div transition:slide class="w-full flex flex-col items-center justify-center gap-2">
	{#each modalities as modality}
		<div class="w-full bg-black rounded-lg p-2">
			<button onclick={() => modalityChoice(modality.name)} class="w-full">{modality.label}</button>
		</div>
	{/each}
</div>
