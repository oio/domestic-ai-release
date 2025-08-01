<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'
	import GenericPromptOutput from '$components/outputs/GenericPromptOutput.svelte'
	import ImageGenerationOutput from '$components/outputs/ImageGenerationOutput.svelte'
	import BackgroundRemovalOutput from '$components/outputs/BackgroundRemovalOutput.svelte'
	let { visible = false } = $props()
</script>

{#if visible}
	<div class="input-output" transition:slide>
		<h5 class="text-sm font-monosten mb-2">Result</h5>
		{#if $status.modality == 'generic-prompt'}
			<GenericPromptOutput />
		{:else if $status.modality == 'image-generation'}
			<ImageGenerationOutput />
		{:else if $status.modality == 'background-removal'}
			<BackgroundRemovalOutput />
		{/if}
	</div>
{/if}