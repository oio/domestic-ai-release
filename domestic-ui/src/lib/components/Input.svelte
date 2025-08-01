<script>
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'
</script>
<div transition:slide class="w-full">
	<slot />
</div>