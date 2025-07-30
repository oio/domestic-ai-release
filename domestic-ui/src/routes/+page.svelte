<script>
	import Flux from '$components/Flux.svelte'
	import { onMount } from 'svelte'
	import { status } from '$lib/stores'

	/* onMount(async () => {
		const response = await fetch('/api/commands', {
			method: 'POST',
			body: JSON.stringify({ command: 'throw', inputs: { faces: 20 } })
		})
		const data = await response.json()
		console.log(data)
	}) */
</script>
<section class="w-full h-full ">
	<Flux />
</section>
