<script>
	import '../app.css';
	import { status } from '$lib/stores';

	let { children } = $props();
</script>

<header class="pb-2">
	<h1 class='text-center mb-8'>OPEN ROBY</h1>
	<p class="text-center max-w-2xl mx-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini.</p>
</header>
<main class="flex-1 w-full max-w-7xl mx-auto mb-2">
	<div class="w-full h-full">
		{@render children()}
	</div>
</main>
<footer>
		<p class="text-center text-sm max-w-3xl mx-auto pt-2">Made by <a href="https://www.oio.studio" target="_blank" class="text-oio-cyan">oio</a> | Need help? ask on <a href="https://discord.gg/Gjgm9w8x" target="_blank" class="text-oio-cyan">discord</a></p>
</footer>
