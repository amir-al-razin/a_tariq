import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'apps/web/src/data/peppa_parsed_transcript.json')

// Read the JSON
const rawData = fs.readFileSync(filePath, 'utf8')
const transcript = JSON.parse(rawData)

// Flatten all words into one massive array, filtering out "موسيقى" (Music)
const allWords = []
for (const sentence of transcript) {
  for (const word of sentence.words) {
    if (!word.ar.includes('موسيقى')) {
      allWords.push(word)
    }
  }
}

// Rebuild into beautiful, long paragraphs (e.g., 12 words per sentence)
const newTranscript = []
let sentenceCounter = 1
const WORDS_PER_SENTENCE = 12

for (let i = 0; i < allWords.length; i += WORDS_PER_SENTENCE) {
  const chunk = allWords.slice(i, i + WORDS_PER_SENTENCE)
  
  newTranscript.push({
    sentenceId: `s${sentenceCounter++}`,
    words: chunk
  })
}

// Overwrite the JSON file
fs.writeFileSync(filePath, JSON.stringify(newTranscript, null, 2))
console.log("Successfully removed all 'موسيقى' (music) tags and rebuilt the transcript!")
