/**
 * Database Migration & Seeding Script: Video Transcripts to PostgreSQL
 * 
 * Migrates existing JSON transcripts from apps/web/public/downloads/ into PostgreSQL tables:
 * 1. video_transcripts (Master table with structured sentences & streaming URL)
 * 2. video_words (Inverted index for word/root timestamps)
 * 
 * Also generates scripts/seed_video_transcripts.sql for direct psql/Neon execution.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as schema from '../apps/web/src/db/schema.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const DOWNLOADS_DIR = path.join(ROOT_DIR, 'apps', 'web', 'public', 'downloads')

interface KnownVideoConfig {
  videoId: string
  title: string
  sourceUrl: string
  duration: number
}

const KNOWN_VIDEOS: KnownVideoConfig[] = [
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
    sourceUrl: 'https://www.youtube.com/watch?v=HWGieW9zwso', // Default stream fallback
    duration: 300,
  },
]

function escapeSqlString(str: string | null | undefined): string {
  if (str === null || str === undefined) return 'NULL'
  return `'${String(str).replace(/'/g, "''")}'`
}

export async function runMigration() {
  console.log('====================================================')
  console.log('🎬 Video Transcripts -> PostgreSQL Migration Pipeline')
  console.log('====================================================\n')

  const sqlStatements: string[] = []
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

  const recordsToInsert: Array<{
    transcriptRecord: typeof schema.videoTranscripts.$inferInsert
    wordsRecords: Array<typeof schema.videoWords.$inferInsert>
  }> = []

  for (const config of KNOWN_VIDEOS) {
    const transcriptPath = path.join(DOWNLOADS_DIR, `${config.videoId}_transcript.json`)
    let sentences: any[] = []

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

    const allWords = sentences.flatMap((s: any) => s.words || [])
    console.log(`[+] Found transcript for ${config.videoId}: ${sentences.length} sentences, ${allWords.length} words`)

    const transcriptRecord: typeof schema.videoTranscripts.$inferInsert = {
      videoId: config.videoId,
      title: config.title,
      sourceUrl: config.sourceUrl,
      duration: config.duration,
      language: 'ar',
      totalSentences: sentences.length,
      totalWords: allWords.length,
      sentences: sentences,
      metadata: {
        sourceType: 'youtube',
        indexedAt: new Date().toISOString(),
      },
    }

    const wordsRecords: Array<typeof schema.videoWords.$inferInsert> = []

    for (const sentence of sentences) {
      for (const w of sentence.words || []) {
        wordsRecords.push({
          videoId: config.videoId,
          sentenceId: sentence.sentenceId,
          wordId: w.id,
          arabicRaw: w.ar || '',
          arabicVocalized: w.vocalized || w.ar || '',
          transliteration: w.transliteration || '',
          meaningEn: w.en || '',
          meaningBn: w.bn || null,
          root: w.root || null,
          pos: w.pos || 'word',
          startTime: Number(w.start) || 0,
          endTime: Number(w.end) || 0,
        })
      }
    }

    recordsToInsert.push({ transcriptRecord, wordsRecords })

    // Generate SQL Insert statement for video_transcripts
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
  }

  // 1. Write the compiled SQL seed script
  const sqlFilePath = path.join(ROOT_DIR, 'scripts', 'seed_video_transcripts.sql')
  fs.writeFileSync(sqlFilePath, sqlStatements.join('\n'), 'utf-8')
  console.log(`\n[✓] Generated SQL seed file: ${sqlFilePath} (${Math.round(fs.statSync(sqlFilePath).size / 1024)} KB)`)

  // 2. Direct PostgreSQL insertion if DATABASE_URL is defined
  const dbUrl = process.env.DATABASE_URL
  if (dbUrl) {
    console.log(`\n[*] Connecting to PostgreSQL at ${dbUrl.replace(/:[^:@]+@/, ':****@')}...`)
    const pool = new pg.Pool({ connectionString: dbUrl })
    const db = drizzle(pool, { schema })

    try {
      // Execute schema creation
      await pool.query(sqlStatements[1])

      for (const { transcriptRecord, wordsRecords } of recordsToInsert) {
        // Upsert transcript
        await db
          .insert(schema.videoTranscripts)
          .values(transcriptRecord)
          .onConflictDoUpdate({
            target: schema.videoTranscripts.videoId,
            set: {
              title: transcriptRecord.title,
              sourceUrl: transcriptRecord.sourceUrl,
              sentences: transcriptRecord.sentences,
              totalSentences: transcriptRecord.totalSentences,
              totalWords: transcriptRecord.totalWords,
              updatedAt: new Date(),
            },
          })

        // Delete old words for this video before re-indexing
        await pool.query('DELETE FROM video_words WHERE video_id = $1', [transcriptRecord.videoId])

        // Batch insert words
        if (wordsRecords.length > 0) {
          const batchSize = 100
          for (let i = 0; i < wordsRecords.length; i += batchSize) {
            const batch = wordsRecords.slice(i, i + batchSize)
            await db.insert(schema.videoWords).values(batch)
          }
        }
        console.log(`[✓] Seeded ${transcriptRecord.videoId} into PostgreSQL (${wordsRecords.length} words indexed)`)
      }
      console.log('\n🎉 PostgreSQL migration completed successfully!')
    } catch (err: any) {
      console.error('❌ Database insertion error:', err.message)
    } finally {
      await pool.end()
    }
  } else {
    console.log('\n💡 Note: DATABASE_URL not detected in current environment.')
    console.log('   The migration script has generated the complete SQL file:')
    console.log(`   👉 ${sqlFilePath}`)
    console.log('   When your Neon / PostgreSQL database is connected, run:')
    console.log('   pnpm run db:seed-transcripts')
  }
}

// Execute if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runMigration().catch(console.error)
}
