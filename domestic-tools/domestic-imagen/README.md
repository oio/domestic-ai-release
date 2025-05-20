# Roby mflux API

API wrapper inspired by [mflux github](https://github.com/filipstrand/mflux).

## Install and run
### If you are using Domestic AI
The setup is done by the [Domestic AI](https://github.com/oio/domestic-ai) startup script.

### If you are not using Domestic AI
First install the dependencies using [uv](https://github.com/astral-sh/uv?tab=readme-ov-file#installation). Then run the project.

```
uv sync
uv run python -m uvicorn main:app --host 0.0.0.0 --port 8042
```

> [!NOTE]  
> the first time you run mflux, it will download the model weights and cache them. that's around 30gb of space, so it might take a while.

## Web frontend

in the `/client` folder, there is a simple frontend to test the api.
just run a web server in the client folder to test it out.

## API

```python
url = "http://0.0.0.0:8042/generate"
payload = {
	"prompt": prompt,
	"width": 512,  # optional, defaults to 512
	"height": 512,  # optional, defaults to 512
}
async with aiohttp.ClientSession() as session:
	async with session.post(url, json=payload) as response:
		data = await response.json()
		b64 =  data.get("image_base64", "")
		
		return b64
```