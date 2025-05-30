<script>
	import { onMount } from 'svelte'
	import LeftHand from '$lib/components/machines/LeftHand.svelte'
	import RightHand from '$lib/components/machines/RightHand.svelte'
	import Machine from '$lib/components/machines/Machine.svelte'

	
	let windowWidth = $state(1000),
		windowHeight = $state(1000)
	const isVertical = $derived(windowWidth < 550)

	
</script>

<svelte:window on:resize={() => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}} />
<!-- <div class="w-full h-24 {isVertical ? 'flex-col items-start justify-center' : 'flex justify-around'}"> -->
	<div class="flex items-center justify-center w-full min-h-screen bg-black">
	<div class='p-2 bg-blue-600'>
		l
	</div>
	<div class='p-2 bg-blue-600'>
		c
	</div>
	<div class=' p-2 bg-blue-600'>
		r
	</div>
	<!-- <div>
		<LeftHand vertical={isVertical} />
	</div>
	<div>
		<Machine vertical={isVertical} />
	</div>
	<div>
		<RightHand vertical={isVertical} />
	</div> -->
</div>