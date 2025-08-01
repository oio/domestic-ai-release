<script>
	import { getSettings, setSettings } from '$lib'
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'
	import { onMount } from 'svelte'
	
	let mounted = $state(false),
		showSettings = $state(false), 
		name = $state(''),
		systemPrompt = $state(''),
		imageStyle = $state(''),
		settings = $state(null)

	$effect(() => {
		if (mounted) {
			setSettings({
				name: name,
				system_prompt: systemPrompt,
				style_prompt: imageStyle
			})
		}
	})

	onMount(async () => {
		mounted = true
		settings = await getSettings()
		console.log(settings)
		name = settings.name || ''
		systemPrompt = settings.system_prompt || ''
		imageStyle = settings.style_prompt || ''
	})
</script>

<div onclick={(e) => { if (e.target === e.currentTarget) { showSettings = false }}} class="w-screen h-screen fixed top-0 left-0 z-50 {showSettings ? 'pointer-events-auto' : 'pointer-events-none'}">
	<div class="w-2xs fixed top-4 right-4 z-50 flex flex-col items-end gap-2 bg-gray-dark rounded-lg p-2 pointer-events-auto">
		<button onclick={(e) => { e.stopPropagation(); showSettings = !showSettings}}>Settings</button>
		{#if showSettings}
			<div transition:slide>
				<label for="name">Name</label>
				<input type="text" bind:value={name} />
				<label for="system-prompt">System Prompt</label>
				<input type="text" bind:value={systemPrompt} />
				<label for="image-style">Image Style</label>
				<input type="text" bind:value={imageStyle} />
			</div>
		{/if}
	</div>
</div>