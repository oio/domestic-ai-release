import { status } from '$lib/stores'

export const colors = {
	llm: 'oio-blue',
	image: 'oio-red',
	rembg: 'oio-violet'
}

export const bgColors = {
	llm: 'bg-oio-blue',
	image: 'bg-oio-red',
	rembg: 'bg-oio-violet'
}

export const hexColors = {
	llm: '#4870FF',
	image: '#FF857B',
	rembg: '#9F86FF'
}
export const borderColors = {
	llm: 'border-oio-blue',
	image: 'border-oio-blue',
	rembg: 'border-oio-blue', 
}

export const modelNames = {
	llm: ['Llama 3.2', '3B'],
	image: ['MFlux'],
	rembg: ['Rembg']
}

export const callLLM = async (prompt) => {
	const response = await fetch('/api/LLM', {
		method: 'POST',
		body: JSON.stringify({ prompt })
	})

	if (response.ok) {
		let result = await response.json()
		console.log(result)	
		status.update(s => ({
			...s,
			output: result.result
		}))
	} else {
		console.error(response)
		status.update(s => ({
			...s,
			error: response.error
		}))
	}
}

export const callImagen = async (prompt) => {
	const response = await fetch('/api/imagen', {
		method: 'POST',
		body: JSON.stringify({ prompt })
	})

	if (response.ok) {
		let result = await response.json()
		console.log(result)
		status.update(s => ({
			...s,
			output: result.result.b64
		}))
	} else {
		console.error(response)
		status.update(s => ({
			...s,
			error: response.error
		}))
	}
}

export const callBgRemoval = async (data) => {
	const response = await fetch('/api/rembg', {
		method: 'POST',
		body: JSON.stringify(data)
	})

	if (response.ok) {
		let result = await response.json()
		console.log(result)
		status.update(s => ({
			...s,
			output: result.result
		}))
	}
}