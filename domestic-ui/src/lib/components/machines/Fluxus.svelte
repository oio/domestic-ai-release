<script>
	import { onMount } from 'svelte'
	import LeftHand from '$lib/components/machines/LeftHand.svelte'
	import RightHand from '$lib/components/machines/RightHand.svelte'
	import Machine from '$lib/components/machines/Machine.svelte'
	import Connection from '$lib/components/machines/Connection.svelte';
	import { storeVar } from '$lib/stores.js'

	let { machineType } = $props()
	
	let windowWidth = $state(1000),
		windowHeight = $state(1000), 
		isVertical = $derived(windowWidth < 550)

	const cols = {
		'chat' : 'bg-red-100',
		'image' : 'bg-blue-100', 
		'rembg' : 'bg-amber-100'
	}

	
</script>

<svelte:window on:resize={() => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}} />
<div class="w-full h-full h-full flex {isVertical ? 'flex-col items-center justify-center' : 'justify-around'} {cols[machineType]}">
<!-- <div class="flex items-center justify-center w-full "> -->
	<LeftHand vertical={isVertical} />
	<Connection vertical={isVertical} />
	<Machine vertical={isVertical} />
	<Connection vertical={isVertical} />
	<RightHand vertical={isVertical} />
</div>

<div class='fixed top-12 left-12'>{ $storeVar }</div>