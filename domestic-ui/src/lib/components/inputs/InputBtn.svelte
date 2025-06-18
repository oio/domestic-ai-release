<script>
	import Arrow from '$components/assets/Arrow.svelte'
	import { colors } from '$lib'
	let { type, title, description, onClick } = $props()

	const handleClick = () => {
		onClick(type)
	}

</script>

<button onclick={handleClick} class="bg-{colors[type]} text-white text-left rounded-lg w-full p-2 flex items-center justify-between">
	<div>
		<h5>{title}</h5>
		<p>{description}</p>
	</div>
	<div class='bg-white rounded-full p-2'>
		<Arrow bgColor='black' />
	</div>
</button>