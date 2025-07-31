<!-- <script>
	import { hexColors } from '$lib'
	import { status } from '$lib/stores'
	let { vertical, loading, visible } = $props()

	let width = $state(0),
		height = $state(0)
</script>

<div class="{vertical ? 'w-full max-w-64 h-12' : 'w-1/10 h-4'}">
	{#if visible}
		<div bind:clientWidth={width} bind:clientHeight={height} class="w-full h-full">
			<svg width={width} height={height} viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
				{#if loading}
					{#if vertical}
						<line class="animate-dash" x1="{width / 2}" y1="0" x2="{width / 2}" y2="{height}" stroke="{hexColors[$status.type]}" stroke-width="6" stroke-dasharray="0 10" stroke-linecap="round" />
					{:else}
						<line class="animate-dash" x1="0" y1="{height / 2}" x2="{width}" y2="{height / 2}" stroke="{hexColors[$status.type]}" stroke-width="6" stroke-dasharray="0 10" stroke-linecap="round" />
					{/if}
				{:else}
					{#if vertical}
						<line x1="{width / 2}" y1="0" x2="{width / 2}" y2="{height}" stroke="{hexColors[$status.type]}" stroke-width="2"/>
					{:else}
						<line x1="0" y1="{height / 2}" x2="{width}" y2="{height / 2}" stroke="{hexColors[$status.type]}" stroke-width="2"/>
					{/if}
				{/if}
			</svg>
		</div>
	{/if}
</div>

<style>
	.animate-dash {
		animation: dash 4s linear infinite;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: -100;
		}
	}
</style> -->