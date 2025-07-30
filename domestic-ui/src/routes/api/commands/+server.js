import { json } from '@sveltejs/kit'

export async function POST({ request }) {
	const { command, inputs } = await request.json()
	try {
		const response = await fetch(`http://0.0.0.0:8000/api/${command}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputs)
		})

		const data = await response.json()
		return json(data)
	} catch (error) {
		return json({ error: error.message }, { status: 500 })
	}
}
