import fs from 'fs'
import path from 'path'

// Verify API Key
const GROQ_API_KEY = process.env.GROQ_API_KEY
if (!GROQ_API_KEY) {
  console.error("❌ ERROR: GROQ_API_KEY environment variable is not set.")
  console.error("Run this script like this:")
  console.error("  $env:GROQ_API_KEY=\"your-groq-key-here\"; node apps/web/transcribe_groq.mjs")
  process.exit(1)
}

// Paths
const videoPath = path.join(process.cwd(), 'apps/web/public/peppa_pig_arabic.mp4')
const outputPath = path.join(process.cwd(), 'apps/web/src/data/peppa_parsed_transcript.json')

async function transcribeVideo() {
  console.log("🚀 Starting Free Groq Whisper Transcription Pipeline...")
  
  if (!fs.existsSync(videoPath)) {
    console.error(`❌ ERROR: Video file not found at ${videoPath}`)
    process.exit(1)
  }

  const buffer = fs.readFileSync(videoPath)
  const blob = new Blob([buffer], { type: 'video/mp4' })

  const formData = new FormData()
  formData.append('file', blob, 'video.mp4')
  formData.append('model', 'whisper-large-v3')
  formData.append('language', 'ar')
  formData.append('response_format', 'verbose_json')
  formData.append('timestamp_granularities[]', 'segment')
  formData.append('timestamp_granularities[]', 'word')

  console.log("📤 Uploading video to Groq... (This takes a few seconds)")

  try {
    const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: formData
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`Groq API failed (${response.status}): ${errText}`)
    }

    const result = await response.json()
    console.log("✅ Transcription complete! Formatting into Video Lab JSON structure...")

    const segments = result.segments || []
    const words = result.words || []
    const formattedTranscript = []
    
    let globalWordIndex = 0

    // Groq sometimes just returns segments without words depending on API coverage, 
    // we handle both perfectly here!
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      const sentenceWords = []

      // If the API returned word-level timestamps:
      if (words && words.length > 0) {
        while (globalWordIndex < words.length) {
          const w = words[globalWordIndex]
          if (w.start <= segment.end + 0.1) {
            sentenceWords.push({
              id: `w${globalWordIndex + 1}`,
              ar: w.word.trim(),
              transliteration: "...",
              en: "...",
              start: Number(w.start.toFixed(2)),
              end: Number(w.end.toFixed(2))
            })
            globalWordIndex++
          } else {
            break 
          }
        }
      } 
      // If it only returned sentence-level timestamps, we simulate word timings evenly
      else {
        const wordsArray = segment.text.trim().split(/\s+/)
        const timePerWord = (segment.end - segment.start) / wordsArray.length
        
        wordsArray.forEach((w, wIndex) => {
          sentenceWords.push({
            id: `w${globalWordIndex++}`,
            ar: w,
            transliteration: "...",
            en: "...",
            start: Number((segment.start + (wIndex * timePerWord)).toFixed(2)),
            end: Number((segment.start + ((wIndex + 1) * timePerWord)).toFixed(2))
          })
        })
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
