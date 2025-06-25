<script>
	import { fade } from 'svelte/transition'
	import { getSettings, setSettings } from '$lib'
	import { onMount } from 'svelte'

	let { closeSettings } = $props()
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

<div transition:fade={{ duration: 200 }} class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-xs bg-white/20 flex items-center justify-center">
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class="relative w-1/3 max-w-sm min-w-80 bg-gray-ultralight p-4 rounded-lg border-2 border-oio-blue">
		{#if Object.keys(settings).length > 0}
			<button onclick={closeSettings} class="absolute top-3 right-3 p-1 h-4 aspect-square rounded-full disabled:opacity-30 disabled:cursor-not-allowed" ><img src="/assets/close.svg" alt="close" class="w-4 h-4"></button>
			<h3>settings</h3>
			<form class="flex flex-col">
				{#each Object.keys(settings) as key}
					<label for={key}>{key.replace(/_/g, ' ')}</label>
					{#if key === 'system_prompt'}
						<textarea bind:value={settings[key]} oninput={handleChange} id={key} class="h-36 resize-none"></textarea>
					{:else}
						<input type="text" id={key} bind:value={settings[key]} oninput={handleChange} />
					{/if}
				{/each}
			</form>
		{/if}
	</div>
</div>