<script>
	let { vertical } = $props();
	$inspect(vertical)
</script>

<div class="machine {vertical ? 'w-full max-w-64' : 'w-1/3  max-h-24'}">
	Left Hand
</div>