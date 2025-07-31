<!-- <script>
	let { output } = $props()

	let isGlowing = $state(false)

	function copyOutput() {
		navigator.clipboard.writeText(output)
		isGlowing = true
		setTimeout(() => {
			isGlowing = false
		}, 1000)
	}
</script>

<div class="relative w-full min-h-36 flex-grow bg-white rounded-lg p-2 {isGlowing ? 'animation-glow' : ''}">
	{output}
	<button onclick={copyOutput} class="absolute bottom-3 right-2 bg-black/66 text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed"><img src="/assets/copy.svg" alt="copy" class="w-4 h-4"></button>
</div>

<style>
	.animation-glow {
		animation: glow 1s ease-in-out;
	}

	@keyframes glow {
		0% {
			background-color: rgba(255, 255, 255, 1);
		}
		25% {
			background-color: rgba(219, 227, 255, 1);
		}
		100% {
			background-color: rgba(255, 255, 255, 1);
		}
	}
</style>
 -->