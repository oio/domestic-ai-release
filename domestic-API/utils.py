import aiohttp
from dotenv import load_dotenv
import httpx
import logging
import ollama
from ollama import chat
import os
from operations_queue import queue_llm, queue_image
import tools

load_dotenv()

logger = logging.getLogger(__name__)
#ollama_client = ollama.AsyncClient("http://0.0.0.0:11434")
ollama_client = httpx.AsyncClient(base_url="http://0.0.0.0:8123/")

"""
LLM / GENERATIVE AI
"""

#async def query_llm(prompt, system_prompt=None, model="llama3.2:3b"):
"""async def query_llm(prompt, system_prompt=None):
	model = os.environ["OLLAMA_MODEL"]
	response = await ollama_client.generate(model=model, prompt=prompt, system=system_prompt)
	logger.info(f"Response: {response}")
	return response.get("response")

#async def query_llm_structured(prompt, schema, system_prompt=None, model="llama3.2:3b"):
async def query_llm_structured(prompt, schema, system_prompt=None):
	model = os.environ["OLLAMA_MODEL"]
	async def _execute_llm_structured(prompt, schema, system_prompt, model):
		response = chat(
			model=model,
			format=schema.model_json_schema(),
			messages=[
				{
					"role": "system",
					"content": system_prompt
				},
				{
					"role": "user",
					"content": prompt
				}
			], 
			tools = [tools.now, tools.iso_to_datetime, tools.datetime_to_iso],
		)
		parsed_response = schema.model_validate_json(response.message.content)
		logger.info(f"Parsed response: {parsed_response}")
		return parsed_response
		
	# Queue the structured LLM request
	return await queue_llm(_execute_llm_structured, prompt, schema, system_prompt, model)
"""

async def query_llm(prompt, system_prompt=None):
	"""
	Query the LLM with a prompt and optional system prompt using the OpenAI-compatible
	chat completions API.
	
	Args:
		prompt (str): The user prompt
		system_prompt (str, optional): The system prompt
		
	Returns:
		The model's response as a string
	"""
	model_url = "http://0.0.0.0:8123/v1/chat/completions"
	
	messages = []
	if system_prompt:
		messages.append({"role": "system", "content": system_prompt})
	messages.append({"role": "user", "content": prompt})
	
	payload = {
		"model": "llama3.2:3b",  
		"messages": messages,
		"stream": False
	}
	
	headers = {
		"Content-Type": "application/json"
	}
	
	async with aiohttp.ClientSession() as session:
		async with session.post(model_url, json=payload, headers=headers) as response:
			if response.status == 200:
				result = await response.json()
				logger.info(f"Response: {result}")
				content = result.get("choices", [{}])[0].get("message", {}).get("content", "")
				content = content.replace("<|eot_id|>", "").strip()
				return content
			else:
				error_text = await response.text()
				logger.error(f"Error {response.status}: {error_text}")
				return f"Error: {response.status}, {error_text}"

async def query_llm_structured(prompt, schema, system_prompt=None):
	"""
	Query the LLM with a prompt, expecting a structured response according to schema.
	Uses the OpenAI-compatible chat completions API.
	
	Args:
		prompt (str): The user prompt
		schema: Pydantic schema for response validation
		system_prompt (str, optional): The system prompt
		
	Returns:
		Validated schema object
	"""
	model_url = "http://0.0.0.0:8123/v1/chat/completions"
	
	schema_json = json.dumps(schema.model_json_schema())
	format_instruction = f"You must respond with JSON that conforms to this schema: {schema_json}"
	
	full_system_prompt = system_prompt or ""
	if full_system_prompt:
		full_system_prompt += "\n\n"
	full_system_prompt += format_instruction
	
	messages = [
		{
			"role": "system",
			"content": full_system_prompt
		},
		{
			"role": "user",
			"content": prompt
		}
	]
	
	payload = {
		"model": "llama3.2:3b",  
		"messages": messages,
		"stream": False,
		"temperature": 0.1,  
		"response_format": {"type": "json_object"}  
	}
	
	headers = {
		"Content-Type": "application/json"
	}
	
	async def _execute_llm_structured():
		async with aiohttp.ClientSession() as session:
			async with session.post(model_url, json=payload, headers=headers) as response:
				if response.status == 200:
					result = await response.json()
					content = result.get("choices", [{}])[0].get("message", {}).get("content", "")
					content = content.replace("<|eot_id|>", "").strip()
					
					try:
						if content.startswith("```json") and content.endswith("```"):
							content = content[7:-3].strip()
						elif content.startswith("```") and content.endswith("```"):
							content = content[3:-3].strip()
							
						parsed_response = schema.model_validate_json(content)
						logger.info(f"Parsed response: {parsed_response}")
						return parsed_response
					except Exception as e:
						logger.error(f"Error parsing response: {e}")
						logger.error(f"Response content: {content}")
						raise ValueError(f"Failed to parse model response as valid JSON: {e}")
				else:
					error_text = await response.text()
					logger.error(f"Error {response.status}: {error_text}")
					raise ValueError(f"API Error: {response.status}, {error_text}")
	
	if 'queue_llm' in globals():
		return await queue_llm(_execute_llm_structured)
	else:
		return await _execute_llm_structured()

async def generate_image(prompt, width=512, height=512):
	async def _execute_image_gen(prompt, width, height):
		url = "http://0.0.0.0:8042/generate"
		payload = {
			"prompt": prompt,
			"width": width,
			"height": height,
			"source": "discord"
		}
		async with aiohttp.ClientSession() as session:
			async with session.post(url, json=payload) as response:
				data = await response.json()
				# Log all data except image_base64 to avoid cluttering logs
				log_data = {k: v for k, v in data.items() if k != 'image_base64'}
				logger.info(f"Image generation response: {log_data}")
				b64 = data.get("image_base64", "")
				generation_time = data.get("generation_time_s", 0)
				total_energy_nespresso = data.get("total_energy_nespresso", 0)
				return {"b64": b64, "generation_time": generation_time, "total_energy_nespresso": total_energy_nespresso}
	
	# Queue the image generation request
	return await queue_image(_execute_image_gen, prompt, width, height)

async def remove_background(image_url):
	"""
	Remove background from image at given URL
	
	Args:
		image_url: URL of the image to process
		
	Returns:
		Dict with base64 encoded image without background
	"""
	url = "http://0.0.0.0:8008/rembg"
	payload = {
		"image_url": image_url
	}
	async with aiohttp.ClientSession() as session:
		async with session.post(url, json=payload) as response:
			data = await response.json()
			return data.get("image_base64")

"""
OTHER
"""

feedback = [
	"that sucks",
	"it's great!",
	"good idea!",
	"i'm not sure",
	"i wouldn't be so enthusiastic about it",  
	"forget it",
	"it's the best thing i've ever seen",
	"sick",
	"no",
	"what?",
	"i can't think",
	'more "tangible" '
]