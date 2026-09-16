import {
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  doublePrecision,
  integer,
  jsonb,
  index,
} from 'drizzle-orm/pg-core'
import type { TranscriptSentence } from '../components/curriculum/shared/InteractiveVideoPlayer'

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

// Master Video Transcripts Table
export const videoTranscripts = pgTable(
  'video_transcripts',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    videoId: text('video_id').notNull().unique(), // e.g. "HWGieW9zwso", "peppa_pig_arabic"
    title: text('title').notNull(),
    sourceUrl: text('source_url').notNull(), // YouTube URL or external streaming URL
    duration: doublePrecision('duration').notNull().default(0),
    language: text('language').notNull().default('ar'),
    totalSentences: integer('total_sentences').notNull().default(0),
    totalWords: integer('total_words').notNull().default(0),
    sentences: jsonb('sentences').notNull().$type<TranscriptSentence[]>(),
    metadata: jsonb('metadata').default({}),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('video_transcripts_video_id_idx').on(table.videoId),
    index('video_transcripts_source_url_idx').on(table.sourceUrl),
  ]
)

// Inverted Word-Level Index Table (for cross-video vocabulary / root search)
export const videoWords = pgTable(
  'video_words',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    videoId: text('video_id')
      .notNull()
      .references(() => videoTranscripts.videoId, { onDelete: 'cascade' }),
    sentenceId: text('sentence_id').notNull(),
    wordId: text('word_id').notNull(),
    arabicRaw: text('arabic_raw').notNull(),
    arabicVocalized: text('arabic_vocalized'),
    transliteration: text('transliteration'),
    meaningEn: text('meaning_en'),
    meaningBn: text('meaning_bn'),
    root: text('root'),
    pos: text('pos'),
    startTime: doublePrecision('start_time').notNull(),
    endTime: doublePrecision('end_time').notNull(),
  },
  (table) => [
    index('video_words_arabic_raw_idx').on(table.arabicRaw),
    index('video_words_root_idx').on(table.root),
    index('video_words_video_id_idx').on(table.videoId),
  ]
)

