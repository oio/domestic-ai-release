<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'
	import TextOutput from '$components/outputs/TextOutput.svelte'
	import ImageOutput from '$components/outputs/ImageOutput.svelte'
	let { visible = false } = $props()
</script>

{#if visible}
	<div class="input-output" transition:slide>
		<h5 class="text-sm font-monosten mb-2">Result</h5>
		{#if $status.modality == 'generic-prompt' || $status.modality == 'haiku'}
			<TextOutput text={$status.output} />
		{:else if $status.modality == 'image-generation' || $status.modality == 'background-removal' || $status.modality == 'pokemon'}
			<ImageOutput image={$status.output} />
		{/if}
	</div>
{/if}