<script>
	let { handleSubmit } = $props()
	import { status } from '$lib/stores'

	let prompt = $state('What is Saturn?'), 
		disabled = $derived(prompt.length === 0 || ($status.input && !$status.output))
</script>

<form onsubmit={e => {
	e.preventDefault()
	handleSubmit(prompt)
}} class='relative'>
	<textarea bind:value={prompt} name="prompt" placeholder="Enter your prompt for the LLM" class="w-full h-48 {disabled ? 'bg-gray-dark' : 'bg-white'} resize-none rounded-lg p-2 focus:outline-none" disabled={disabled}></textarea>
	<button type="submit" class="absolute bottom-3 right-2 bg-black/66 text-white p-1 aspect-square rounded-full disabled:opacity-30 disabled:cursor-not-allowed" disabled={disabled}><img src="/assets/arrow.svg" alt="arrow" class="w-4 h-4"></button>
</form>