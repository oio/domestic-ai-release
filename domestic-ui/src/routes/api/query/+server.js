import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const response = await fetch('http://0.0.0.0:8000/api/roby', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(await request.json())
		});

		const data = await response.json();
		return json(data);
	} catch (error) {
		return json({ error: error.message }, { status: 500 });
	}
}
