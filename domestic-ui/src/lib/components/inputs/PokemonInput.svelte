<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'
	import { callPokemon } from '$lib'
	import { onMount } from 'svelte'

	onMount(async () => {
		callPokemon()
		status.update(s => ({
			...s,
			input: 'pokemon'
		}))
	})
</script>