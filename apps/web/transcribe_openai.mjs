import fs from 'fs'
import path from 'path'

// Verify API Key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY environment variable is not set.")
  console.error("Run this script like this:")
  console.error("  $env:OPENAI_API_KEY=\"your-openai-key-here\"; node apps/web/transcribe_openai.mjs")
  process.exit(1)
}

// Paths
const videoPath = path.join(process.cwd(), 'apps/web/public/peppa_pig_arabic.mp4')
const outputPath = path.join(process.cwd(), 'apps/web/src/data/peppa_parsed_transcript.json')

async function transcribeVideo() {
  console.log("🚀 Starting OpenAI Whisper Transcription Pipeline...")
  
  if (!fs.existsSync(videoPath)) {
    console.error(`❌ ERROR: Video file not found at ${videoPath}`)
    process.exit(1)
  }

  // Read video into buffer and convert to Blob for FormData
  const buffer = fs.readFileSync(videoPath)
  const blob = new Blob([buffer], { type: 'video/mp4' })

  // Construct multipart/form-data payload
  const formData = new FormData()
  formData.append('file', blob, 'video.mp4')
  formData.append('model', 'whisper-1')
  formData.append('language', 'ar')
  formData.append('response_format', 'verbose_json')
  formData.append('timestamp_granularities[]', 'segment')
  formData.append('timestamp_granularities[]', 'word')

  console.log("📤 Uploading video to OpenAI... (This takes a few seconds)")

  try {
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: formData
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`OpenAI API failed (${response.status}): ${errText}`)
    }

    const result = await response.json()
    console.log("✅ Transcription complete! Formatting into Video Lab JSON structure...")

    const segments = result.segments || []
    const words = result.words || []
    const formattedTranscript = []
    
    let globalWordIndex = 0

    // Map the flat words array into OpenAI's logical sentence segments
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      const sentenceWords = []

      while (globalWordIndex < words.length) {
        const w = words[globalWordIndex]
        
        // If word belongs to this segment (allow a 0.1s tolerance for floating point rounding)
        if (w.start <= segment.end + 0.1) {
          sentenceWords.push({
            id: `w${globalWordIndex + 1}`,
            ar: w.word.trim(),
            transliteration: "...", // Placeholder for ChatGPT translation prompt later
            en: "...",             // Placeholder
            start: Number(w.start.toFixed(2)),
            end: Number(w.end.toFixed(2))
          })
          globalWordIndex++
        } else {
          break // Move to next segment
        }
      }

      if (sentenceWords.length > 0) {
        formattedTranscript.push({
          sentenceId: `s${i + 1}`,
          words: sentenceWords
        })
      }
    }

    // Save to file
    fs.writeFileSync(outputPath, JSON.stringify(formattedTranscript, null, 2))
    console.log(`🎉 Success! Saved ${formattedTranscript.length} perfect sentences to ${outputPath}`)
    console.log(`👉 You can now run the app and watch the video in perfect sync!`)

  } catch (err) {
    console.error("❌ Transcription Error:", err)
  }
}

transcribeVideo()
