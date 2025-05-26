<script>
	import { onMount } from 'svelte';

	const submitChat = async (event) => {
		event.preventDefault();
		const prompt = event.target.prompt.value;
		const response = await fetch('/api/query', {
			method: 'POST',
			body: JSON.stringify({ message: prompt })
		});
		const data = await response.json();
		console.log(data);
	};

	const submitImagen = async (event) => {
		event.preventDefault();
		const prompt = event.target.prompt.value;
		const response = await fetch('/api/imagen', {
			method: 'POST',
			body: JSON.stringify({ message: prompt })
		});
		const data = await response.json();
		console.log(data);
	};

	onMount(async () => {
		const response = await fetch('/api/ping', {
			method: 'POST',
			body: JSON.stringify({})
		});
		const data = await response.json();
		console.log(data);
	});
</script>

<section>
	<h1>Domestic AI</h1>
	<form on:submit|preventDefault={submitChat}>
		<h2>Chat</h2>
		<label for="prompt">Prompt</label>
		<input type="text" id="prompt" name="prompt" value="What's a tayaki" />
		<button type="submit">Send</button>
	</form>
	<form on:submit|preventDefault={submitImagen}>
		<h2>Imagen</h2>
		<label for="prompt">Prompt</label>
		<input type="text" id="prompt" name="prompt" value="A tayaki" />
		<button type="submit">Send</button>
	</form>
</section>