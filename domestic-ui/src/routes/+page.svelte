<script>
	/* import Flux from '$components/[delete]/Flux.svelte' */
	import Flow from '$components/Flow.svelte'
	import Settings from '$components/Settings.svelte'
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
<section class="w-full h-full flex items-center justify-center">
	<Flow />
	<Settings />
</section>
