<script>
	let { output } = $props()

</script>

<div class="output-pokemon flex flex-col items-center justify-center">
	<div>
		<p>{output.msg}</p>
	</div>
	<div>
		<img src={output.image} alt="pokemon" />
	</div>
</div>