<script>
	import { borderColors, colors, hexColors, modelNames } from '$lib'
	import { status } from '$lib/stores'
	let { vertical, visible, loading } = $props()

	let width = $state(0)
</script>

<div bind:clientWidth={width} class="{vertical ? 'w-full max-w-36 aspect-square' : 'w-36 aspect-square'}">
	{#if visible}
		<div class="relative w-full h-full flex items-center justify-center">
			<svg class="absolute {loading ? 'animate-spin' : ''}" width={width} height={width} viewBox="-1 -1 101 102" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M42.3542 2.64753C46.8402 -0.882509 53.1598 -0.882509 57.6458 2.64753C60.305 4.74005 63.7056 5.65125 67.0548 5.16867C72.7048 4.35457 78.1777 7.51434 80.2977 12.8144C81.5543 15.9562 84.0438 18.4457 87.1856 19.7023C92.4857 21.8223 95.6454 27.2952 94.8313 32.9452C94.3488 36.2944 95.2599 39.695 97.3525 42.3542C100.883 46.8402 100.883 53.1598 97.3525 57.6458C95.2599 60.305 94.3488 63.7056 94.8313 67.0548C95.6454 72.7048 92.4857 78.1777 87.1856 80.2977C84.0438 81.5543 81.5543 84.0438 80.2977 87.1856C78.1777 92.4857 72.7048 95.6454 67.0548 94.8313C63.7056 94.3488 60.305 95.2599 57.6458 97.3525C53.1598 100.883 46.8402 100.883 42.3542 97.3525C39.695 95.2599 36.2944 94.3488 32.9452 94.8313C27.2952 95.6454 21.8223 92.4857 19.7023 87.1856C18.4457 84.0438 15.9562 81.5543 12.8144 80.2977C7.51434 78.1777 4.35457 72.7048 5.16867 67.0548C5.65125 63.7056 4.74005 60.305 2.64753 57.6458C-0.882509 53.1598 -0.882509 46.8402 2.64753 42.3542C4.74005 39.695 5.65125 36.2944 5.16867 32.9452C4.35457 27.2952 7.51434 21.8223 12.8144 19.7023C15.9562 18.4457 18.4457 15.9562 19.7023 12.8144C21.8223 7.51434 27.2952 4.35457 32.9452 5.16867C36.2944 5.65125 39.695 4.74005 42.3542 2.64753Z" fill="white" 
				stroke="{hexColors[$status.type]}" stroke-width="2"/>
			</svg>
				
			<div class="absolute flex items-center justify-center text-sm font-semibold	">
				{#if $status.type}
				<span class="text-{colors[$status.type]}">{modelNames[$status.type][0]}</span>
					{#if modelNames[$status.type].length > 1}
						<span class="text-{colors[$status.type]} opacity-50 ml-1">{modelNames[$status.type][1]}</span>
					{/if}
				
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.animate-spin {
		animation: spin 8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>