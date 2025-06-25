<script>
	import { getSettings, setSettings } from '$lib'
	import { onMount } from 'svelte'

	let settings = $state({})

	$effect(() => {
		$inspect(settings)
	})

	const handleChange = async (e) => {
		e.preventDefault()
		let result = await setSettings(settings)
	}

	onMount(async () => {
		const result = await getSettings()
		settings = result
	})
</script>

{#if Object.keys(settings).length > 0}
	<div class="fixed bottom-4 left-2 z-50 bg-gray-ultralight p-4 rounded-lg border-2 border-oio-blue">
		<h3>settings</h3>
		<form class="flex flex-col">
			{#each Object.keys(settings) as key}
				<label for={key}>{key.replace(/_/g, ' ')}</label>
				{#if key === 'system_prompt'}
					<textarea id={key} bind:value={settings[key]} oninput={handleChange}></textarea>
				{:else}
					<input type="text" id={key} bind:value={settings[key]} oninput={handleChange} />
				{/if}
			{/each}
		</form>
	</div>
{/if}