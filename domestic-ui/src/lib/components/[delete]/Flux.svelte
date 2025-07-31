<!-- <script>
	import Input from '$components/Input.svelte'
	import Output from '$components/Output.svelte'
	import Center from '$components/Center.svelte'
	import Connection from '$components/Connection.svelte';
	import { status } from '$lib/stores.js'
	import { onMount } from 'svelte'
	
	let windowWidth = $state(1000),
		windowHeight = $state(1000), 
		isVertical = $derived(windowWidth < 1000)

	onMount(() => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		isVertical = windowWidth < 1000;
	})
</script>

<svelte:window on:resize={() => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}} />
<div class="w-full h-full flex {isVertical ? 'flex-col items-center justify-center' : 'justify-around items-center'}">
	<Input vertical={isVertical} />
	<Connection visible={$status.input} vertical={isVertical} loading={$status.input && !$status.output} />
	<Center visible={$status.input} loading={$status.input && !$status.output} vertical={isVertical} />
	<Connection visible={$status.output} vertical={isVertical} loading={!$status.output} />
	<Output visible={$status.output} vertical={isVertical} />
</div> -->