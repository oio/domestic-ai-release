<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'

	let topic = $state('The sand')

	$effect(() => {
		if (topic) {
			$status.input = topic
		}
	})
</script>

<div class="input-haiku" transition:slide>
	<h4 class="input-title">Topic</h4>	
	<input type="text" bind:value={topic} placeholder="The sand" />
</div>
