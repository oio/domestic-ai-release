import adapter from '@sveltejs/adapter-auto'

const config = { 
	kit: { 
		adapter: adapter(),
		alias: {
			$components: './src/lib/components', 
			$lib: './src/lib',
			$src: './src'
		}
	}
}

export default config