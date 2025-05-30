<script>
	import { onMount } from 'svelte'
	let responseChat = $state(''),
		responseImagen = $state('')

	const submitChat = async (event) => {
		event.preventDefault()
		responseChat = ''
		const prompt = event.target.prompt.value;
		const response = await fetch('/api/query', {
			method: 'POST',
			body: JSON.stringify({ prompt })
		});
		const data = await response.json()
		if (response.ok) {
			console.log(data)
			responseChat = data.result
		} else {
			console.error(data)
		}
	};

	const submitImagen = async (event) => {
		event.preventDefault();
		responseImagen = ''
		const prompt = event.target.prompt.value;
		const response = await fetch('/api/imagen', {
			method: 'POST',
			body: JSON.stringify({ prompt })
		});
		const data = await response.json();
		if (response.ok) {
			console.log(data);
			responseImagen = 'data:image/png;base64,' + data.result.b64;
		} else {
			console.error(data);
		}
	};

	onMount(async () => {
		const response = await fetch('/api/ping', {
			method: 'POST',
			body: JSON.stringify({})
		});
		const data = await response.json()
		if (response.ok) {
			console.log(data)
		} else {
			console.error(data)
		}
	});
</script>

<section>
	<h1>Domestic AI</h1>
	<form onsubmit={submitChat}>
		<h2>Chat</h2>
		<label for="prompt">Prompt</label>
		<input type="text" id="prompt" name="prompt" value="What's a tayaki" />
		<button type="submit">Send</button>
		{#if responseChat}
			<p>{responseChat}</p>
		{/if}
	</form>
	<form onsubmit={submitImagen}>
		<h2>Imagen</h2>
		<label for="prompt">Prompt</label>
		<input type="text" id="prompt" name="prompt" value="A tayaki" />
		<button type="submit">Send</button>
		{#if responseImagen}
			<img src={responseImagen} alt="Imagen" class="h-24" />
		{/if}
	</form>
</section>