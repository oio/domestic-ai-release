<script>
	import ImageOutput from './ImageOutput.svelte'
	import { slide } from 'svelte/transition'
	import { status } from '$lib/stores'
</script>

<div class="h-fit" transition:slide>
	<ImageOutput image={'data:image/png;base64,' + $status.output} />
</div>