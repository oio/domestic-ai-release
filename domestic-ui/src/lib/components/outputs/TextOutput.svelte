<script>
	import { slide } from 'svelte/transition'

	let { text } = $props()

	let isGlowing = $state(false)

	const copyOutput = () => {
		navigator.clipboard.writeText(text)
		isGlowing = true
		setTimeout(() => {
			isGlowing = false
		}, 1000)
	}
</script>

<div transition:slide class="relative w-full {isGlowing ? 'animation-glow' : ''}">
	<div class="bg-gray-light p-2 rounded-lg min-h-20 max-h-40 overflow-y-scroll">
		<p class="text-sm">{text}</p>
	</div>
	<button onclick={copyOutput} class="absolute bottom-2 right-2 bg-gray-light text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed"><img src="/assets/copy.svg" alt="copy" class="w-4 h-4"></button>
</div>

<style>
	.animation-glow {
		animation: glow 1s ease-in-out;
	}

	@keyframes glow {
		0% {
			color: rgba(255, 255, 255, 1);
		}
		25% {
			color: rgba(119, 231, 255, 1);
		}
		100% {
			color: rgba(255, 255, 255, 1);
		}
	}
</style>