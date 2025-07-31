<!-- <script>
	let { output } = $props()

	function downloadOutput() {
		const link = document.createElement('a')
		link.href = `data:image/png;base64,${output}`
		link.download = 'output.png'
		link.click()
	}
</script>

<div class="relative grow-1 flex items-center justify-center">
	<div class="w-full h-full">
		<img src={`${!output.startsWith('data:') ? 'data:image/png;base64,' : ''}${output}`} alt="Imagen output" class="w-full h-full object-contain rounded-xl" />
	</div>
	<button onclick={downloadOutput} class="absolute bottom-3 right-2 bg-black/66 text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed"><img src="/assets/download.svg" alt="download" class="w-4 h-4"></button>
</div> -->