<script>
	import '../app.css';
	import { colors, hexColors } from '$lib';
	import { status } from '$lib/stores';

	let { children } = $props();
</script>

<header class="pb-2">
	<h1 class='text-center mb-8'><span style="color: {$status.type ? hexColors[$status.type] : '#4870FF'}">oio</span> Domestic AI <span class="text-gray-light">1.0</span></h1>
	<p class="text-center max-w-2xl mx-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
</header>
<main class="flex-1 w-full max-w-7xl mx-auto mb-2">
	<div class="w-full h-full">
		{@render children()}
	</div>
</main>
<footer>
		<p class="text-center text-sm max-w-3xl mx-auto pt-2">Made by <a href="https://www.oio.studio" target="_blank" style="color: {$status.type ? hexColors[$status.type] : '#000'}">oio</a> | Need help? ask on <a href="https://discord.gg/Gjgm9w8x" target="_blank" style="color: {$status.type ? hexColors[$status.type] : '#000'}">discord</a></p>
</footer>
