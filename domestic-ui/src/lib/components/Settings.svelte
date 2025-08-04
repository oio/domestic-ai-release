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
		if (mounted && showSettings) {
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
		name = settings.name || ''
		systemPrompt = settings.system_prompt || ''
		imageStyle = settings.style_prompt || ''
	})
</script>

<div onclick={(e) => { if (e.target === e.currentTarget) { showSettings = false }}} class="w-screen h-screen fixed top-0 left-0 z-50 {showSettings ? 'pointer-events-auto' : 'pointer-events-none'}">
	<div class="settings-container {showSettings ? 'open' : ''} fixed top-4 right-4 z-50 flex flex-col items-end gap-2 bg-gray-dark rounded-lg p-4 pointer-events-auto">
		<button onclick={(e) => { e.stopPropagation(); showSettings = !showSettings}} class="flex items-center gap-6">Settings <span class="w-6 h-6 flex items-center justify-center bg-gray-light rounded-full"><img src="/assets/menu-toggle.svg" alt="settings" class="w-4 h-4 {showSettings ? 'rotate-180' : ''} transition-all duration-400"/></span></button>
		{#if showSettings}
			<div transition:slide class="w-full">
					<div class='field'>
						<label for="name">Name</label>
						<input type="text" bind:value={name} />
					</div>
					<div class='field'>
						<label for="system-prompt">System Prompt</label>
						<textarea type="text" class="h-24" bind:value={systemPrompt} />
						<p class='info'>Defines how Roby will handle textual conversation</p>
					</div>
					<div class='field'>
						<label for="image-style">Image Style</label>
						<textarea type="text" bind:value={imageStyle} />
						<p class='info'>Defines how Roby will generate images</p>
					</div>
				<div class="w-full h-1 border-b border-gray-ultralight"></div>
				<div class='field w-full flex justify-center items-center'>
					<button class='bg-black rounded-full p-2 text-red-500 text-xs'>Restore default settings</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<style scoped>
	@reference "$src/app.css";

	.settings-container {
		width: 150px;
		transition: width 0.3s ease-in-out;
	}

	.settings-container.open {
		width: 300px;
	}

	.field {
		@apply my-3;
	}

	.info {
		@apply text-gray-ultralight text-xs;
	}

</style>