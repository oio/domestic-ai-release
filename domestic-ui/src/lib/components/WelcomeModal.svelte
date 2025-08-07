<script>
	import { getSettings, setSettings } from '$lib'
	import { status } from '$lib/stores'
	import { fade, slide } from 'svelte/transition'
	import { onMount } from 'svelte'

	let step = $state(0), 
		name = $state(''),
		systemPrompt = $state(''),
		stylePrompt = $state(''),
		nextDisabled = $derived((step == 0 && name.length > 0) || (step == 1 && systemPrompt.length > 0  || stylePrompt.length > 0) ? false : true)
		

	const changeName = async() => {
		await setSettings({
			name: name
		})

		const settings = await getSettings()
		console.log(3, settings)
	}

	const changeSettings = async() => {
		const settingsToUpdate = {
			system_prompt: systemPrompt,
			style_prompt: stylePrompt,
			first_time: false
		}

		await setSettings(settingsToUpdate)

		status.update(s => ({
			...s,
			firstTime: false
		}))
	}
		
	const handleNext = async() => {
		if (step === 0) {
			changeName()
		} else if (step === 1) {
			changeSettings()
		}
		step += 1
	}

	const handleBack = async() => {
		step -= 1
	}

	const handleSkip = async() => {
		step += 1
		if (step == 2) {
			await setSettings({
				first_time: false
			})

			status.update(s => ({
				...s,
				firstTime: false
			}))
		}
	}

	onMount(async() => {
		const settings = await getSettings()
		systemPrompt = settings.system_prompt
		stylePrompt = settings.style_prompt
	})
</script>
 
<div transition:fade={{ duration: 200 }} class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-sm bg-gray-dark rounded-xl p-4 flex flex-col items-center justify-center">
	<div class="w-full h-4 flex items-center justify-center mb-4">
		<img src="/assets/intro.svg" alt="intro" class="h-full" />
	</div>
	<div class="w-full">
		{#if step === 0}
			<div class="w-full mb-2 flex flex-col gap-1">
				<p class="text-sm mb-1">I’m Roby, your new creative buddy!<br />Wanna be friends?</p>
				<form onsubmit={handleNext}>
					<input bind:value={name} type="text" placeholder="Your name, or nickname, or whatever…" class="w-full bg-gray-light rounded-xl p-2" />
				</form>
				<p class="text-xs text-gray-light">You can change it later</p>
			</div>
		{:else} 
			{#if step > 0}
				<div class="w-full">
					<button onclick={handleBack} class="text-sm bg-gray-light rounded-full p-2"><img src="/assets/arrow.svg" alt="arrow" class="w-3 h-3 rotate-180" /></button>
				</div>
			{/if}
			<div class="w-full">
				<form onsubmit={handleNext}>
					<div class='settings-field'>
						<label for="system-prompt">System Prompt</label>
						<textarea type="text" class="h-24">{systemPrompt}</textarea> 
						<p class='settings-info'>Defines how Roby will handle textual conversation</p>
					</div>
					<div class='settings-field'>
						<label for="image-style">Image Style</label>
						<textarea type="text">{stylePrompt}</textarea> 
						<p class='settings-info'>Defines how Roby will generate images</p>
					</div>
				</form>
			</div>
		{/if}
	</div>
	<div class="w-full flex items-center justify-center my-2">
		<button onclick={handleNext} disabled={nextDisabled} class="w-1/2 bg-oio-cyan text-black px-4 py-2 text-sm rounded-full disabled:opacity-50 disabled:cursor-not-allowed">next</button>
	</div>
	<div>
		<button onclick={handleSkip} class="text-sm text-gray-ultralight">skip</button>
	</div>
</div>