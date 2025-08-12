import adapter from '@sveltejs/adapter-static'

const config = {
	kit: {
		adapter: adapter({
			strict: false,
			fallback: 'index.html'
		}),
		prerender: {
			handleMissingId: 'ignore'
		},
		alias: {
			$components: './src/lib/components',
			$lib: './src/lib',
			$src: './src'
		}
	}
}

export default config

/* import adapter from '@sveltejs/adapter-auto'

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

export default config */
