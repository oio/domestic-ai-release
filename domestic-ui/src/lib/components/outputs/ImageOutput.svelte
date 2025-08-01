<script>
	import { slide } from 'svelte/transition'

	let { image } = $props()

	let isGlowing = $state(false)

	const downloadImage = () => {
		const link = document.createElement('a')
		link.href = image
		link.download = 'image.png'
		link.click()
	}
</script>

<div transition:slide class="relative w-full {isGlowing ? 'animation-glow' : ''}">
	<div class="h-fit max-h-96">
		<img src={image} alt="generation" class="w-full h-full object-cover rounded-xl" />
	</div>
	<button onclick={downloadImage} class="absolute bottom-2 right-2 bg-gray-light text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed"><img src="/assets/download.svg" alt="download" class="w-4 h-4"></button>
</div>

<style>
	.animation-glow {
		animation: glow 1s ease-in-out;
	}

	@keyframes glow {
		0% {
			opacity: 1;
		}
		25% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
</style>