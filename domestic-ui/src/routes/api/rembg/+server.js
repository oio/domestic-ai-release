import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	let { image_url, is_b64 } = await request.json()
	console.log({image_url, is_b64})
	try {
		const response = await fetch('http://0.0.0.0:8000/api/rembg', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ image_url, is_b64 })
		})

		const data = await response.json()
		return json(data)
	} catch (error) {
		return json({ error: error.message }, { status: 500 });
	}
}
