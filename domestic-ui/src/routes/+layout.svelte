<script>
	import '../app.css'
	import { fade, slide } from 'svelte/transition'
	import { status } from '$lib/stores'

	let { children } = $props()
</script>

<div class="w-screen h-screen fixed top-0 left-0 -z-10 bg-black">
	{#if !$status.modality} 
		{#if $status.firstTime}
			<img transition:fade src="/screens/roby-start.png" alt="background" class="bg-image">
		{:else}
			<img transition:fade src="/screens/roby-idle.png" alt="background" class="bg-image">
		{/if}
	{:else}
		<img transition:fade src="/screens/roby-prompt.png" alt="background" class="bg-image">
	{/if}
</div>

<div class="w-screen h-screen overflow-y-scroll">
	<header class="w-full">
		<h1 class='text-center'>OPEN ROBY</h1>
		{#if !$status.firstTime}
			<div transition:slide class="w-full h-full flex justify-center items-center">
				<p class="text-center max-w-2xl mx-auto text-sm text-gray-ultralight">A creative assistant, a fun mate, and an amazingly powerful pokemon finder. <br> All from a local intelligence that lives in your machine :)</p>
			</div>
		{/if}
	</header>
	<main class="pt-8 pb-12 max-w-7xl mx-auto">
		<div class="w-full">
			{@render children()}
		</div>
	</main>
	<footer class="fixed bottom-0 p-2 w-full flex items-center justify-center gap-4">
		<div class="footer-pill">
			<a href="https://discord.gg/Gjgm9w8x" target="_blank">Join our Discord<span><img src="/assets/link-arrow.svg" alt="oio logo" class="w-3 h-3"></span></a>
		</div>
		<div class="footer-pill">
			<a href="https://github.com/oio/" target="_blank">Go to GitHub repo<span><img src="/assets/link-arrow.svg" alt="oio logo" class="w-3 h-3"></span></a>
		</div>
			<!-- <p class="text-center text-sm max-w-3xl mx-auto pt-2">Made by <a href="https://www.oio.studio" target="_blank" class="text-oio-cyan">oio</a> | Need help? ask on <a href="https://discord.gg/Gjgm9w8x" target="_blank" class="text-oio-cyan">discord</a></p> -->
	</footer>
</div>

<div class="fixed bottom-0 right-0 p-4">
	<a href="https://www.oio.studio" target="_blank">
		<img src="/assets/attribution.svg" alt="oio logo" class="h-5">
	</a>
</div>

<style scoped>
	@reference "$src/app.css";

	.bg-image {
		@apply w-full h-full object-none object-bottom;
	}

	.footer-pill {
		@apply px-4 py-1 bg-gray-light rounded-full text-sm text-white;
	}

	.footer-pill a {
		@apply no-underline flex items-center justify-center gap-2;
	}
</style>