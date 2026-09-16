"""Configuration settings for the Arabic Video Transcription Pipeline."""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parent.parent
OUTPUT_DIR = BASE_DIR / "output"
CACHE_DB_PATH = BASE_DIR / "arabic_words_cache.db"

# Automatically load .env file if present
for env_file in [BASE_DIR / ".env", PROJECT_ROOT / ".env"]:
    if env_file.exists():
        try:
            with open(env_file, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        k, v = line.split("=", 1)
                        k = k.strip()
                        v = v.strip().strip("'\"")
                        if k not in os.environ:
                            os.environ[k] = v
        except Exception:
            pass

# Audio Settings
SAMPLE_RATE = 16000  # 16kHz is optimal for Whisper & speech models
CHANNELS = 1         # Mono

# Whisper settings
WHISPER_MODEL = os.getenv("WHISPER_MODEL", "large-v3-turbo")  # or 'medium', 'small'
WHISPER_DEVICE = os.getenv("WHISPER_DEVICE", "cuda" if os.getenv("CUDA_VISIBLE_DEVICES") else "auto")
WHISPER_COMPUTE_TYPE = os.getenv("WHISPER_COMPUTE_TYPE", "float16")  # 'int8' for low VRAM

# Demucs Vocal Isolation
DEMUCS_MODEL = os.getenv("DEMUCS_MODEL", "htdemucs")
USE_VOCAL_ISOLATION = os.getenv("USE_VOCAL_ISOLATION", "true").lower() in ("true", "1", "yes")

# Free Cloud API Keys (Optional fallbacks if not running locally)
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
HF_TOKEN = os.getenv("HF_TOKEN", "")

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
