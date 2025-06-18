<script>
	let { handleSubmit } = $props()

	let prompt = $state('')
</script>

<form onsubmit={handleSubmit}>
	<h4>Background Removal</h4>
	<input type="file" name="image" accept="image/*" />
	<button type="submit">Submit</button>
</form>