<script>
	import { status } from '$lib/stores'
	import { callLLM, callImagen, callBgRemoval, callPokemon, callHaiku } from '$lib'

	let { name = 'Mid button' } = $props()

	let disabled = $derived($status.input == null)

	const clearOutput = () => {
		status.update(s => ({
			...s,
			output: null, 
			loading: true
		}))
	}

	const handleClick = (e) => {
		e.preventDefault()
		clearOutput()
		if (name == 'generic-prompt') {
			callLLM($status.input)
		} else if (name == 'image-generation') {
			callImagen($status.input.prompt)
		} else if (name == 'background-removal') {
			callBgRemoval($status.input)
		} else if (name == 'pokemon') {
			callPokemon($status.input)
		} else if (name == 'haiku') {
			callHaiku($status.input)
		}
	}
</script>
<div class="w-full">
	<!-- <button class="w-full bg-oio-cyan text-black px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200" onclick={handleClick} disabled={disabled}>{name}</button> -->
	<button 
		class="w-full px-4 py-2 rounded-full {disabled && !$status.loading ? 'opacity-50' : ''} disabled:cursor-not-allowed transition-all duration-200 relative overflow-hidden text-black"
		class:cursor-not-allowed={disabled || $status.loading}
		class:bg-oio-cyan={!$status.loading}
		class:animate-gradient={$status.loading}
		class:bg-gradient-to-r={$status.loading}
		class:from-oio-cyan={$status.loading}
		class:via-white={$status.loading}
		class:to-oio-cyan={$status.loading}
		class:bg-[length:200%_100%]={$status.loading}
		onclick={handleClick} 
		disabled={disabled || $status.loading}
	> {name}
	</button>
</div>
