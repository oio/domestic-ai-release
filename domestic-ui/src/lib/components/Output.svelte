<script>
	import { borderColors, colors, bgColors, hexColors } from '$lib'
	import LLMOutput from '$components/outputs/LLMOutput.svelte'
	import ImagenOutput from '$components/outputs/ImagenOutput.svelte'
	import BgRemovalOutput from '$components/outputs/BgRemovalOutput.svelte'
	import { status } from '$lib/stores'

	let { vertical, visible } = $props()

	let padHeight = $state(0)
</script>

<div class="{vertical ? 'w-full max-w-64 mb-24' : 'w-1/3  h-fit'}">
	{#if visible}
		{#if !vertical}
			<div class="w-full mb-4" style="height: {padHeight}px;"></div>
		{/if}
	<div class="w-full h-full">
		<div class="w-full h-full bg-gray-ultralight border-2 rounded-xl p-4" style="border: 2px solid {hexColors[$status.type]}">
			<h3 class="font-semibold mb-4 text-sm" style="color: {$status.type ? hexColors[$status.type] : '#000'}">Result</h3>

			{#if $status.error}
				<div class="text-red-500">
					{$status.error}
				</div>
			{:else if $status.output}
				{#if $status.type === 'llm'}
					<LLMOutput output={$status.output} />
				{:else if $status.type === 'image'}
					<ImagenOutput output={$status.output} />
				{:else if $status.type === 'rembg'}
					<BgRemovalOutput output={$status.output} />
				{/if}
			{/if}
		</div>
		<div bind:clientHeight={padHeight} class="w-full mt-4 flex items-center justify-between gap-2">
			<button class="w-[45%] {bgColors[$status.type]} text-white rounded-xl p-2 text-xs flex items-center justify-between"><div>edit  prompt</div><div><img src="/assets/pencil.svg" alt="pencil" class="w-3 h-3"></div></button>
			<button class="w-[45%] bg-white rounded-xl p-2 text-xs flex items-center justify-between"><div>new command</div><div><img src="/assets/sparkle.svg" alt="sparkle" class="w-3 h-3"></div></button>
		</div>
	</div>

	{/if}
</div>