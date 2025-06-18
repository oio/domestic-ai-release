<script>
	let { bgColor = 'white', size = 12 } = $props()
</script>

<svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M6 2.5L9.5 6M9.5 6L6 9.5M9.5 6L2.5 6" stroke={bgColor} stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>