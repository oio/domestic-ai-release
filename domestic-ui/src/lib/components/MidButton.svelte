<script>
	import { status } from '$lib/stores'
	import { callLLM, callImagen, callBgRemoval } from '$lib'

	let { loading, disabled = false, name = 'Mid button' } = $props()

	const handleClick = () => {
		if (name == 'generic-prompt') {
			callLLM($status.input.prompt, $status.input.systemPrompt)
		} else if (name == 'image-generation') {
			callImagen($status.input.prompt)
		} else if (name == 'background-removal') {
			callBgRemoval($status.input)
		}
	}
</script>
<div class="w-full">
	<button class="w-full bg-oio-cyan text-black px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200" onclick={handleClick} disabled={disabled}>{name}</button>
</div>