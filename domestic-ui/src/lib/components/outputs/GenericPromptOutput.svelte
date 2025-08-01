<script>
	import TextOutput from './TextOutput.svelte'
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'
</script>

<div class="output-generic-prompt" transition:slide>
	<TextOutput text={$status.output} />
</div>