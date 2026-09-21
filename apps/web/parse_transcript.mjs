import fs from 'fs'
import path from 'path'

// Paths
const json3Path = path.join(process.cwd(), 'apps/web/src/data/peppa_pig_arabic.ar.json3')
const outputPath = path.join(process.cwd(), 'apps/web/src/data/peppa_parsed_transcript.json')

// Read the raw json3 file
const rawData = fs.readFileSync(json3Path, 'utf8')
const parsed = JSON.parse(rawData)

const sentences = []
let sentenceCounter = 1
let wordCounter = 1

// Iterate through YouTube's events
for (const event of parsed.events) {
  if (!event.segs || event.segs.length === 0) continue
  
  // Skip events that are just newlines (aAppend: 1 with just "\n")
  if (event.segs.length === 1 && event.segs[0].utf8 === "\n") continue

  const sentenceStartTime = event.tStartMs || 0
  const sentenceDuration = event.dDurationMs || 0

  const words = []

  for (let i = 0; i < event.segs.length; i++) {
    const seg = event.segs[i]
    const wordText = seg.utf8.trim()
    
    if (!wordText) continue

    const offsetMs = seg.tOffsetMs || 0
    const startSec = (sentenceStartTime + offsetMs) / 1000

    // Calculate end time (either start of next word, or end of sentence)
    let endSec
    if (i < event.segs.length - 1) {
      const nextOffset = event.segs[i + 1].tOffsetMs || (offsetMs + 500)
      endSec = (sentenceStartTime + nextOffset) / 1000
    } else {
      endSec = (sentenceStartTime + sentenceDuration) / 1000
    }

    words.push({
      id: `w${wordCounter++}`,
      ar: wordText,
      transliteration: "...", // Placeholder since YT doesn't provide this
      en: "...",             // Placeholder since YT doesn't provide this
      start: Number(startSec.toFixed(2)),
      end: Number(endSec.toFixed(2))
    })
  }

  if (words.length > 0) {
    sentences.push({
      sentenceId: `s${sentenceCounter++}`,
      words: words
    })
  }
}

// Write the perfectly formatted JSON payload
fs.writeFileSync(outputPath, JSON.stringify(sentences, null, 2))
console.log(`Successfully parsed ${sentences.length} sentences with word-level timestamps!`)
console.log(`Saved to: ${outputPath}`)
