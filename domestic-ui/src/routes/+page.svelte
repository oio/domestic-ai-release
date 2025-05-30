<script>
	import Fluxus from '$lib/components/machines/Fluxus.svelte'

	let machineType = $state('chat') // null, chat, image, rembg
</script>
<section class="w-full h-full bg-gray-ultralight">
	<Fluxus machineType={machineType} />
</section>