<script>
	import MidButton from '$components/MidButton.svelte'
	import GenericPromptInput from '$components/inputs/GenericPromptInput.svelte'
	import ImageGenerationInput from '$components/inputs/ImageGenerationInput.svelte'
	import BackgroundRemovalInput from '$components/inputs/BackgroundRemovalInput.svelte'
	import HaikuInput from '$components/inputs/HaikuInput.svelte'
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'
</script>
<div transition:slide class="w-full">
	<!-- <slot /> -->
	<div class="input-output w-full mb-4">
		{#if $status.modality == 'generic-prompt'}
			<GenericPromptInput />
		{:else if $status.modality == 'image-generation'}
			<ImageGenerationInput />
		{:else if $status.modality == 'background-removal'}
			<BackgroundRemovalInput />
		{:else if $status.modality == 'haiku'}
			<HaikuInput />
		{/if}
	</div>
	<MidButton disabled={$status.input == null} name={$status.modality || 'generate'} />
	<div class="w-full">
		<!-- model data -->
	</div>
</div>