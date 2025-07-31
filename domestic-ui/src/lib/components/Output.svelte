<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'

	let { visible = false } = $props()
</script>

{#if visible}
	<div class="input-output" transition:slide>
		{#if $status.modality == 'generic-prompt'}
			<div class="output-generic-prompt">
				<h4>Generic Prompt</h4>
				<p>{$status.output}</p>
			</div>
		{:else if $status.modality == 'image-generation'}
			<div class="output-image-generation">
				<h4>Image Generation</h4>
			</div>
		{/if}
	</div>
{/if}