import fs from 'fs'
import path from 'path'
import { createClient } from '@deepgram/sdk'

// Verify API Key
const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY
if (!DEEPGRAM_API_KEY) {
  console.error("❌ ERROR: DEEPGRAM_API_KEY environment variable is not set.")
  console.error("Run this script like this:")
  console.error("  $env:DEEPGRAM_API_KEY=\"your-api-key-here\"; node apps/web/transcribe_deepgram.mjs")
  process.exit(1)
}

// Paths
const videoPath = path.join(process.cwd(), 'apps/web/public/peppa_pig_arabic.mp4')
const outputPath = path.join(process.cwd(), 'apps/web/src/data/peppa_parsed_transcript.json')

async function transcribeVideo() {
  console.log("🚀 Starting Deepgram Transcription Pipeline (using SDK)...")
  
  if (!fs.existsSync(videoPath)) {
    console.error(`❌ ERROR: Video file not found at ${videoPath}`)
    process.exit(1)
  }

  const deepgram = createClient(DEEPGRAM_API_KEY)
  const audioPayload = fs.readFileSync(videoPath)
  console.log("📤 Uploading video to Deepgram... (This takes a few seconds)")

  try {
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      audioPayload,
      {
        model: "nova-2",
        language: "ar",
        smart_format: true,
        punctuate: true,
        utterances: true,
      }
    )

    if (error) {
      throw new Error(`Deepgram API failed: ${error.message}`)
    }

    console.log("✅ Transcription complete! Formatting into Video Lab JSON structure...")

    const utterances = result.results.utterances || []
    const formattedTranscript = []
    
    let sentenceCounter = 1
    let wordCounter = 1

    for (const utterance of utterances) {
      const sentenceWords = []

      for (const wordObj of utterance.words) {
        // Deepgram sometimes returns empty words for punctuation, skip them
        if (!wordObj.word.trim()) continue

        sentenceWords.push({
          id: `w${wordCounter++}`,
          ar: wordObj.word,
          transliteration: "...", // Placeholder for LLM later
          en: "...",             // Placeholder for LLM later
          start: Number(wordObj.start.toFixed(2)),
          end: Number(wordObj.end.toFixed(2))
        })
      }

      if (sentenceWords.length > 0) {
        formattedTranscript.push({
          sentenceId: `s${sentenceCounter++}`,
          words: sentenceWords
        })
      }
    }

    // Save to file
    fs.writeFileSync(outputPath, JSON.stringify(formattedTranscript, null, 2))
    console.log(`🎉 Success! Saved ${formattedTranscript.length} perfect sentences to ${outputPath}`)
    console.log(`👉 You can now run the app and watch the video in perfect sync!`)

  } catch (err) {
    console.error("❌ Deepgram Error:", err)
  }
}

transcribeVideo()
