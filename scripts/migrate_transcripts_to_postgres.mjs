/**
 * Database Migration & SQL Generator: Video Transcripts to PostgreSQL
 * 
 * Migrates existing JSON transcripts from apps/web/public/downloads/ into PostgreSQL tables:
 * 1. video_transcripts (Master table with structured sentences & streaming URL)
 * 2. video_words (Inverted index for word/root timestamps)
 * 
 * Generates scripts/seed_video_transcripts.sql
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const DOWNLOADS_DIR = path.join(ROOT_DIR, 'apps', 'web', 'public', 'downloads')

const KNOWN_VIDEOS = [
  {
    videoId: 'HWGieW9zwso',
    title: 'Arabic Speech & Wisdom (الخطبة والموعظة)',
    sourceUrl: 'https://www.youtube.com/watch?v=HWGieW9zwso',
    duration: 300,
  },
  {
    videoId: 'cObnEdY_gOY',
    title: 'Arabic Story & Narration (قصة عربية معبرة)',
    sourceUrl: 'https://www.youtube.com/watch?v=cObnEdY_gOY',
    duration: 300,
  },
  {
    videoId: 'dinQIb4ZFXY',
    title: 'Spoken Arabic Dialogue (حوار باللغة العربية)',
    sourceUrl: 'https://www.youtube.com/watch?v=dinQIb4ZFXY',
    duration: 300,
  },
  {
    videoId: 'peppa_pig_arabic',
    title: 'Peppa Pig Arabic (بيبا بيغ التسوق)',
    sourceUrl: 'https://www.youtube.com/watch?v=Sg1Z14G-4wk',
    duration: 300,
  },
  {
    videoId: 'Sg1Z14G-4wk',
    title: 'Peppa Pig Arabic (بيبا بيغ التسوق)',
    sourceUrl: 'https://www.youtube.com/watch?v=Sg1Z14G-4wk',
    duration: 300,
  },
]

function escapeSqlString(str) {
  if (str === null || str === undefined) return 'NULL'
  return `'${String(str).replace(/'/g, "''")}'`
}

export function generateSeedSql() {
  console.log('====================================================')
  console.log('🎬 Video Transcripts -> PostgreSQL Migration & SQL Generator')
  console.log('====================================================\n')

  const sqlStatements = []
  sqlStatements.push('-- PostgreSQL Schema & Seed for Video Transcripts')
  sqlStatements.push(`
CREATE TABLE IF NOT EXISTS video_transcripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  source_url TEXT NOT NULL,
  duration DOUBLE PRECISION NOT NULL DEFAULT 0,
  language TEXT NOT NULL DEFAULT 'ar',
  total_sentences INTEGER NOT NULL DEFAULT 0,
  total_words INTEGER NOT NULL DEFAULT 0,
  sentences JSONB NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS video_transcripts_video_id_idx ON video_transcripts(video_id);
CREATE INDEX IF NOT EXISTS video_transcripts_source_url_idx ON video_transcripts(source_url);

CREATE TABLE IF NOT EXISTS video_words (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id TEXT NOT NULL REFERENCES video_transcripts(video_id) ON DELETE CASCADE,
  sentence_id TEXT NOT NULL,
  word_id TEXT NOT NULL,
  arabic_raw TEXT NOT NULL,
  arabic_vocalized TEXT,
  transliteration TEXT,
  meaning_en TEXT,
  meaning_bn TEXT,
  root TEXT,
  pos TEXT,
  start_time DOUBLE PRECISION NOT NULL,
  end_time DOUBLE PRECISION NOT NULL
);

CREATE INDEX IF NOT EXISTS video_words_arabic_raw_idx ON video_words(arabic_raw);
CREATE INDEX IF NOT EXISTS video_words_root_idx ON video_words(root);
CREATE INDEX IF NOT EXISTS video_words_video_id_idx ON video_words(video_id);
`)

  let totalWordsCount = 0
  let totalVideosCount = 0

  for (const config of KNOWN_VIDEOS) {
    const transcriptPath = path.join(DOWNLOADS_DIR, `${config.videoId}_transcript.json`)
    let sentences = []

    if (fs.existsSync(transcriptPath)) {
      sentences = JSON.parse(fs.readFileSync(transcriptPath, 'utf-8'))
    } else if (config.videoId === 'peppa_pig_arabic') {
      const parsedPath = path.join(ROOT_DIR, 'apps', 'web', 'src', 'data', 'peppa_parsed_transcript.json')
      if (fs.existsSync(parsedPath)) {
        sentences = JSON.parse(fs.readFileSync(parsedPath, 'utf-8'))
      }
    }

    if (!sentences || sentences.length === 0) {
      console.warn(`⚠️ Transcript not found for ${config.videoId}, skipping...`)
      continue
    }

    const allWords = sentences.flatMap((s) => s.words || [])
    console.log(`[+] Processing ${config.videoId}: ${sentences.length} sentences, ${allWords.length} words`)
    totalVideosCount++
    totalWordsCount += allWords.length

    // Insert statement for video_transcripts
    const jsonStr = JSON.stringify(sentences).replace(/'/g, "''")
    sqlStatements.push(`
INSERT INTO video_transcripts (video_id, title, source_url, duration, language, total_sentences, total_words, sentences, metadata)
VALUES (
  ${escapeSqlString(config.videoId)},
  ${escapeSqlString(config.title)},
  ${escapeSqlString(config.sourceUrl)},
  ${config.duration},
  'ar',
  ${sentences.length},
  ${allWords.length},
  '${jsonStr}'::jsonb,
  '{"sourceType": "youtube"}'::jsonb
)
ON CONFLICT (video_id) DO UPDATE SET
  title = EXCLUDED.title,
  source_url = EXCLUDED.source_url,
  sentences = EXCLUDED.sentences,
  total_sentences = EXCLUDED.total_sentences,
  total_words = EXCLUDED.total_words,
  updated_at = NOW();
`)

    // Insert statement for video_words
    sqlStatements.push(`DELETE FROM video_words WHERE video_id = ${escapeSqlString(config.videoId)};`)

    const wordValues = []
    for (const sentence of sentences) {
      for (const w of sentence.words || []) {
        wordValues.push(`(
          ${escapeSqlString(config.videoId)},
          ${escapeSqlString(sentence.sentenceId)},
          ${escapeSqlString(w.id)},
          ${escapeSqlString(w.ar || '')},
          ${escapeSqlString(w.vocalized || w.ar || '')},
          ${escapeSqlString(w.transliteration || '')},
          ${escapeSqlString(w.en || '')},
          ${escapeSqlString(w.bn || null)},
          ${escapeSqlString(w.root || null)},
          ${escapeSqlString(w.pos || 'word')},
          ${Number(w.start) || 0},
          ${Number(w.end) || 0}
        )`)
      }
    }

    // Chunk word inserts in batches of 100
    const chunkSize = 100
    for (let i = 0; i < wordValues.length; i += chunkSize) {
      const chunk = wordValues.slice(i, i + chunkSize)
      sqlStatements.push(`
INSERT INTO video_words (video_id, sentence_id, word_id, arabic_raw, arabic_vocalized, transliteration, meaning_en, meaning_bn, root, pos, start_time, end_time)
VALUES ${chunk.join(',\n')};
`)
    }
  }

  const sqlFilePath = path.join(ROOT_DIR, 'scripts', 'seed_video_transcripts.sql')
  fs.writeFileSync(sqlFilePath, sqlStatements.join('\n'), 'utf-8')
  console.log(`\n[✓] Successfully compiled seed SQL file: ${sqlFilePath}`)
  console.log(`    - Total Videos: ${totalVideosCount}`)
  console.log(`    - Total Words Indexed: ${totalWordsCount}`)
  console.log(`    - File Size: ${Math.round(fs.statSync(sqlFilePath).size / 1024)} KB\n`)
  return sqlFilePath
}

generateSeedSql()
