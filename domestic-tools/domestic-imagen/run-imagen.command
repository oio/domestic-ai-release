#!/bin/bash
cd "$(dirname "$0")"
uv run python -m uvicorn main:app --host 0.0.0.0 --port 8042
