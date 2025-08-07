<script>
	import Flow from '$components/Flow.svelte'
	import Settings from '$components/Settings.svelte'
	import WelcomeModal from '$components/WelcomeModal.svelte'
	import { getSettings } from '$lib'
	import { onMount } from 'svelte'
	import { status } from '$lib/stores'

	$effect(async() => {
		if ($status.firstTime) {
			const settings = await getSettings()
			console.log(1, settings)
		} else {
			const settings = await getSettings()
			console.log(2, settings)
		}
	})

	onMount(async () => {
		const settings = await getSettings()
		status.update(s => ({
			...s,
			firstTime: Boolean(settings.first_time)
		}))
	})

</script>
<section class="w-full h-full flex items-center justify-center">
	{#if $status.firstTime}
		<WelcomeModal />
	{:else}
		<Flow />
		<Settings />
	{/if}
</section>
