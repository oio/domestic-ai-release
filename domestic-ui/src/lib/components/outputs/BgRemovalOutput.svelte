<script>
	let { output } = $props()
</script>

<div class="w-full h-full flex items-center justify-center">
	<img src={`${!output.startsWith('data:') ? 'data:image/png;base64,' : ''}${output}`} alt="Imagen output" class="w-full h-full object-contain rounded-xl" />
</div>