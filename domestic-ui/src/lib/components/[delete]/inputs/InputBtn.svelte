<!-- <script>
	import Arrow from '$components/assets/Arrow.svelte'
	import { colors } from '$lib'
	let { type, title, description, onClick } = $props()

	const handleClick = () => {
		onClick(type)
	}

</script>

<button onclick={handleClick} class="bg-{colors[type]} text-white text-left rounded-lg w-full p-2 flex items-center justify-between">
	<div>
		<h5 class="text-sm font-semibold mb-2">{title}</h5>
		<p class="text-xs opacity-90">{description}</p>
	</div>
	<div class='bg-white rounded-full p-1'>
		<Arrow bgColor='black' size={16} />
	</div>
</button> -->