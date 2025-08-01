import { status } from '$lib/stores'

export const callLLM = async (data) => {
	console.log('callLLM', data)
	try {
		const response = await fetch('http://localhost:8000/api/roby', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		if (response.ok) {
			let result = await response.json()
			console.log(result)
			status.update(s => ({
				...s,
				output: result.result
			}));
		} else {
			console.error(response);
			status.update(s => ({
				...s,
				error: 'API request failed'
			}))
		}
	} catch (error) {
		console.error(error)
		status.update(s => ({
			...s,
			error: error.message
		}))
	}
}

export const callImagen = async (prompt) => {
	try {
		const response = await fetch('http://localhost:8000/api/image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({prompt})
		});
		if (response.ok) {
			let result = await response.json();
			console.log(result);
			status.update(s => ({
				...s,
				output: 'data:image/png;base64,' + result.result.b64
			}));
		} else {
			console.error(response);
			status.update(s => ({
				...s,
				error: 'API request failed'
			}));
		}
	} catch (error) {
		console.error(error);
		status.update(s => ({
			...s,
			error: error.message
		}));
	}
}

export const callBgRemoval = async (data) => {
	try {
		const response = await fetch('http://localhost:8000/api/rembg', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (response.ok) {
			let result = await response.json();
			console.log(result);
			status.update(s => ({
				...s,
				output: result.result
			}));
		}
	} catch (error) {
		console.error(error);
		status.update(s => ({
			...s,
			error: error.message
		}));
	}
}

export const callPokemon = async (prompt) => {

}

export const callHaiku = async (about) => {
	try {
		const response = await fetch('http://localhost:8000/api/haiku', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({about})
		})
		if (response.ok) {
			let result = await response.json()
			console.log(result)
			status.update(s => ({
				...s,
				output: result.result
			}))
		}
	} catch (error) {
		console.error(error);
		status.update(s => ({
			...s,
			error: error.message
		}))
	}
}


export const getSettings = async () => {
	const response = await fetch('http://localhost:8000/api/settings_get', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}, 
		body: JSON.stringify({})
	});
	if (response.ok) {
		let result = await response.json();
		return result.result;
	} else {
		console.error(response);
		return null;
	}
}

export const setSettings = async (settings) => {
	const response = await fetch('http://localhost:8000/api/settings_update', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(settings)
	});
	if (response.ok) {
		let result = await response.json();
		return result.result;
	} else {
		console.error(response);
		return null;
	}
}