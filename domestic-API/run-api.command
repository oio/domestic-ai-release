#!/bin/bash
cd "$(dirname "$0")"
uv run uvicorn domestic_api:app --host 0.0.0.0 --port 8000 
