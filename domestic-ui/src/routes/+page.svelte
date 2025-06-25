<script>
	import Flux from '$components/Flux.svelte'
	import Settings from '$components/inputs/Settings.svelte'
	import { onMount } from 'svelte'
	import { status } from '$lib/stores'

</script>
<section class="w-full h-full ">
	<Flux />
	<Settings />
</section>