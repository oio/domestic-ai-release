<script>
	import '../app.css';

	let { children } = $props();
</script>

<header class="pb-2">
	<h1 class='text-center'><span class="text-oio-blue">oio</span> Domestic AI <span class="text-gray-light">1.0</span></h1>
	<p class="text-center max-w-3xl mx-auto py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
</header>
<main class="flex-1 w-full max-w-7xl mx-auto">
	<div class="w-full h-full">
		{@render children()}
	</div>
</main>
<footer>
		<p class="text-center max-w-3xl mx-auto pt-2">Made by <a href="https://www.oio.studio" target="_blank" class="text-oio-blue">oio</a> | Need help? ask on <a href="https://discord.gg/Gjgm9w8x" target="_blank" class="text-oio-blue">discord</a></p>
</footer>
