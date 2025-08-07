from pydantic import BaseModel, Field
from typing import Optional
import json
import logging

logger = logging.getLogger(__name__)

with open('settings.json', 'r') as f:
	settings = json.load(f)
	logger.info(f"Settings: {settings}")


class HaikuRequest(BaseModel):
	about: str = Field(default="the moon", description="Topic for the haiku")

class EmptyRequest(BaseModel):
	pass

class ImageRequest(BaseModel):
	prompt: Optional[str] = Field(default="A shiba inu", description="The image to generate")

class PromptRequest(BaseModel):
	prompt: str = Field(default="What's up?", description="Message for Roby")
	system_prompt: Optional[str] = Field(default=settings["system_prompt"], description="System prompt for the LLM")

class ThrowRequest(BaseModel):
	faces: int = Field(default=6, description="Number of faces on the dice", ge=2)

class RemoveBgRequest(BaseModel):
	image_url: Optional[str] = Field(default="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/1920px-Octopus2.jpg", description="URL of the image to process")
	is_b64: bool = Field(default=False, description="Whether the image is base64 encoded")

class SettingsUpdateRequest(BaseModel):
	system_prompt: Optional[str] = Field(default=settings["system_prompt"], description="System prompt for the LLM")
	style_prompt: Optional[str] = Field(default=settings["style_prompt"], description="Style prompt for the LLM")
	name: Optional[str] = Field(default=settings["name"], description="Name of the bot")
	first_time: Optional[bool] = Field(default=settings["first_time"], description="Whether the bot is in first time")