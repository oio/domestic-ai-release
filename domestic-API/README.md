# Domestic API

The API interface for all the [Domestic AI](https://github.com/oio/domestic-ai) tools.

## Setup

The setup is done by the [Domestic AI](https://github.com/oio/domestic-ai) startup script.

## Run

The API is automatically started by the [Domestic AI](https://github.com/oio/domestic-ai) startup script. However, you can also start it manually with:

```
uv run uvicorn domestic_api:app --host 0.0.0.0 --port 35672
```

## Test the endpoints

You can test the endpoints with the following command:

```
curl --location 'http://0.0.0.0:35672/commands/haiku' \
--header 'Content-Type: application/json' \
--data '{"prompt" : "a shiba inu"}'
```

Otherwise, just open `http://0.0.0.0:35672/` in your browser to test the endpoints via GUI.

## Endpoints documentation

The endpoints are documented with Swagger. You can access the documentation at `http://0.0.0.0:35672/docs`.

## Implement new endpoints
Update `all_routes` in routes.py

```python

all_routes = [
    Route("endpoint_name", "POST", callbacks.name_of_callback, None, description="🤖 endpoint description (for documentation)", preview="🤖 /endpoint_name (for documentation)"), # Leave None for endpoints without parameter or implement a parameter type under params.py
	# ...
]
```

Create a callback in callbacks.py. Callbacks' outputs must be objects `{"result": value}`.

```python
	async def basic_callback(request):
	return {"result": "some response"}

	async def callback_with_input_params(request):
	parameter = request.parameter
	return {"result": random.randint(1, parameter)}
```

If needed, also set a request class for those that need input parameters.

```python
class NumberRequest(BaseModel):
	prompt: int = Field(..., description="a int")
```
