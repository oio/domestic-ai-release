<script>
	import { onMount } from 'svelte'
	import Input from '$components/Input.svelte'
	import Output from '$components/Output.svelte'
	import Center from '$components/Center.svelte'
	import Connection from '$components/Connection.svelte';
	import { status } from '$lib/stores.js'
	
	let windowWidth = $state(1000),
		windowHeight = $state(1000), 
		isVertical = $derived(windowWidth < 800), 
		type = $state(null),
		input = $state(null),
		output = $state(null),
		error = $state(null)

	$effect(() => {
		type = $status.type
		input = $status.input
		output = $status.output
		error = $status.error
	})	
</script>

<svelte:window on:resize={() => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}} />
<div class="w-full h-full flex {isVertical ? 'flex-col items-center justify-center' : 'justify-around items-center'}">
	<Input type={type} vertical={isVertical} />
	<Connection visible={input} vertical={isVertical} type={type} loading={input && !output} />
	<Center visible={input} loading={input && !output} type={type} vertical={isVertical} />
	<Connection visible={output} vertical={isVertical} type={type} loading={!output} />
	<Output visible={output} type={type} vertical={isVertical} />
</div>