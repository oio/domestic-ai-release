#!/bin/bash

set -e

echo "🔍 Checking prerequisites..."

# Check Python installation
if ! command -v python3 &> /dev/null
then
    echo "❌ Python3 is not installed. Please install Python first."
    exit 1
fi

#Install uv if missing
if ! command -v uv &> /dev/null
then
    echo "🚀 Installing uv..."
    curl -LsSf https://astral.sh/uv/install.sh | sh

    # Add uv to PATH temporarily
    export PATH="$HOME/.local/bin:$PATH"
fi

# Confirm uv installation
if ! command -v uv &> /dev/null
then
    echo "❌ uv installation failed. Please install uv manually."
    exit 1
fi

# Switch off needed ports
echo "🔌 Checking and switching off needed ports..."
PORTS=(23847 35672 29384 47219 52847)  

for PORT in "${PORTS[@]}"; do
    if lsof -i :"$PORT" &> /dev/null; then
        echo "⚠️ Port $PORT is already in use. Attempting to kill the process..."
        lsof -ti :"$PORT" | xargs kill -9 || echo "❌ Failed to kill process using port $PORT."
    else
        echo "✅ Port $PORT is free."
    fi
done

PROJECT_DIR="$(pwd)/domestic-ai"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Clone repository
#if [ ! -d ".git" ]; then
#    echo "📂 Cloning repository..."
#    git clone https://github.com/oio/domestic-ai-release .
#else
#    echo "✅ Repository already cloned."
#fi

# Make sure uv is in the path for this script
export PATH="$HOME/.cargo/bin:$PATH"

LLAMAFILE="Llama-3.2-3B-Instruct-Q6_K.llamafile"
echo "Setting up the llamafile..."

# Check disk space before downloading
FREE_SPACE=$(df -m . | awk 'NR==2 {print $4}')
echo "Available disk space: ${FREE_SPACE}MB"

if [ "$FREE_SPACE" -lt 4000 ]; then
    echo "⚠️ Warning: Less than 4GB of free space available. Download may fail."
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
        exit 1
    fi
fi

if [ ! -d "./domestic-ai" ]; then
    echo "📂 Downloading repository..."
    curl -L -o domestic-ai.zip "https://github.com/oio/domestic-ai-release/archive/refs/heads/main.zip"
    
    echo "📦 Extracting repository..."
    mkdir -p "./domestic-ai"
    unzip -q domestic-ai.zip -d "./domestic-ai"
    rm domestic-ai.zip
else
    echo "✅ Repository already exists."
fi

if [ ! -f "./$LLAMAFILE" ]; then
    echo "Downloading llamafile..."
    # Using -L to follow redirects, -C - to resume, and -o to specify output file
    for i in {1..3}; do
        echo "Download attempt $i..."
        curl -L -C - "https://huggingface.co/Mozilla/Llama-3.2-3B-Instruct-llamafile/resolve/main/Llama-3.2-3B-Instruct-Q6_K.llamafile" -o "$LLAMAFILE"
        
        # Check if download was successful
        if [ -f "./$LLAMAFILE" ]; then
            # Verify the file isn't corrupted (it should be about 2.8GB)
            FILE_SIZE=$(du -m "./$LLAMAFILE" | cut -f1)
            if [ "$FILE_SIZE" -gt 2500 ]; then  # At least 2.5GB
                echo "Download completed successfully!"
                chmod +x "./$LLAMAFILE"
                break
            else
                echo "File appears to be incomplete. Retrying..."
            fi
        fi
        
        if [ $i -eq 3 ]; then
            echo "❌ Failed to download llamafile after 3 attempts."
            echo "You can try downloading manually from: https://huggingface.co/Mozilla/Llama-3.2-3B-Instruct-llamafile/resolve/main/Llama-3.2-3B-Instruct-Q6_K.llamafile"
            echo "Place the file in: $PROJECT_DIR"
            echo "Then run this script again."
            exit 1
        fi
        
        echo "Waiting 5 seconds before retry..."
        sleep 5
    done
else
    echo "Llamafile already exists, making it executable..."
    chmod +x "./$LLAMAFILE"
fi

# Start llamafile in a new terminal window
echo "🚀 Starting llamafile in a new terminal window..."
osascript -e "tell application \"Terminal\" to do script \"cd ${PROJECT_DIR} && ./${LLAMAFILE} --server --host 0.0.0.0 --port 23847 --nobrowser\""

# Move to the domestic-ai directory
echo "📂 Moving to the domestic-ai directory..."
cd "./domestic-ai/domestic-ai-release-main/"

# Install Python dependencies using uv
echo "📦 Installing Python dependencies with uv..."
uv sync

# Final instructions
echo "🎉 Installation completed!"

# Create .env file with DOMESTIC_AI_PATH variable
echo "📄 Creating .env file..."
echo "DOMESTIC_AI_PATH=\"$(pwd)\"" > .env
echo "✅ Created .env file with DOMESTIC_AI_PATH set to: $(pwd)"

echo "2️⃣ Starting your app in this terminal window..."
uv run init.py

echo "Your local LLM environment is now running!"