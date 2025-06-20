<script>
	let { output } = $props()

	function copyOutput() {
		navigator.clipboard.writeText(output)
	}
</script>

<div class="relative w-full min-h-36 bg-white rounded-lg p-2">
	{output}
	<button onclick={copyOutput} class="absolute bottom-3 right-2 bg-black/66 text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed"><img src="/assets/copy.svg" alt="copy" class="w-4 h-4"></button>
</div>
