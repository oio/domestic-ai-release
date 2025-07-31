<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'

	let prompt = $state(''), 
		systemPrompt = $state(''), 
		showAdvancedSettings = $state(false)

	$effect(() => {
		if (prompt == '') {
			status.update(s => ({
				...s,
				input: null
			}))
			console.log('input is null')
		} else {
		status.update(s => ({
			...s,
			input: {
				prompt: prompt,
				systemPrompt: systemPrompt
				}
			}))
		}
	})

</script>
<div class="input-output-slot">
	<h4 class="input-title">Generic Prompt</h4>
	<form>
		<input type="text" bind:value={prompt} placeholder="Write a poem" />
		<div>
			<h5 class="text-xs text-gray-ultralight">Advanced Settings <button class="text-xs text-oio-cyan pt-2 pb-1" onclick={() => showAdvancedSettings = !showAdvancedSettings}>{showAdvancedSettings ? 'Hide' : 'Show'}</button></h5>
			{#if showAdvancedSettings}
				<div transition:slide class="pb-4">
					<label for="system-prompt">System Prompt</label>
					<input type="text" bind:value={systemPrompt} />
				</div>
			{/if}
		</div>
	</form>
</div>

<style scoped>
	@reference "$src/app.css";
	.input-output-slot {
		@apply w-full  rounded-xl;
	}
</style>