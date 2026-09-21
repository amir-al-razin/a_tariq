import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  date,
  real,
  doublePrecision,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import type { TranscriptSentence } from '../components/curriculum/shared/InteractiveVideoPlayer'

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

// ─────────────────────────────────────────────
// 1. Users Table (Streaks, XP, Coins, Badges)
// ─────────────────────────────────────────────
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  username: text('username').notNull(),
  email: text('email'),
  xp: integer('xp').notNull().default(0),
  coins: integer('coins').notNull().default(0),
  streak: integer('streak').notNull().default(1),
  bestStreak: integer('best_streak').notNull().default(1),
  lastActiveDate: date('last_active_date'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

// ─────────────────────────────────────────────
// 2. Daily Quests Table
// ─────────────────────────────────────────────
export const dailyQuests = pgTable(
  'daily_quests',
  {
    id: serial('id').primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    questDate: date('quest_date').notNull(),
    taskId: text('task_id').notNull(), // 'learn_10_words' | 'practice_5_streak' | 'tarteel_pronunciation' | 'lesson_comprehension'
    title: text('title').notNull(),
    currentCount: integer('current_count').notNull().default(0),
    targetCount: integer('target_count').notNull().default(1),
    isCompleted: boolean('is_completed').notNull().default(false),
    isClaimed: boolean('is_claimed').notNull().default(false),
    xpReward: integer('xp_reward').notNull().default(50),
    coinReward: integer('coin_reward').notNull().default(10),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('user_quest_date_task_idx').on(table.userId, table.questDate, table.taskId),
    index('quest_date_idx').on(table.questDate),
  ]
)

// ─────────────────────────────────────────────
// 3. User Learned Vocabulary (SRS & Quran Link)
// ─────────────────────────────────────────────
export const userLearnedVocab = pgTable(
  'user_learned_vocab',
  {
    id: serial('id').primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    wordAr: text('word_ar').notNull(), // with full harakat e.g. كِتَابٌ
    wordClean: text('word_clean').notNull(), // normalized without diacritics e.g. كتاب
    meaningEn: text('meaning_en').notNull(),
    volumeId: integer('volume_id').notNull(),
    lessonId: integer('lesson_id').notNull(),
    masteryLevel: text('mastery_level').notNull().default('learning'), // 'learning' | 'familiar' | 'mastered'
    srsInterval: integer('srs_interval').notNull().default(1), // Spaced repetition interval in days
    srsEaseFactor: real('srs_ease_factor').notNull().default(2.5),
    reviewCount: integer('review_count').notNull().default(0),
    nextReviewAt: timestamp('next_review_at', { withTimezone: true }),
    lastReviewedAt: timestamp('last_reviewed_at', { withTimezone: true }).defaultNow(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('user_word_clean_idx').on(table.userId, table.wordClean),
    index('word_clean_idx').on(table.wordClean),
    index('user_lesson_idx').on(table.userId, table.volumeId, table.lessonId),
  ]
)

// ─────────────────────────────────────────────
// 4. Quran Word Mapping Index (Mushaf Frequency)
// ─────────────────────────────────────────────
export const quranWordIndex = pgTable(
  'quran_word_index',
  {
    id: serial('id').primaryKey(),
    surah: integer('surah').notNull(),
    ayah: integer('ayah').notNull(),
    position: integer('position').notNull(),
    pageNumber: integer('page_number').notNull(),
    lineNumber: integer('line_number').notNull(),
    textUthmani: text('text_uthmani').notNull(),
    textClean: text('text_clean').notNull(),
    root: text('root'),
    lemma: text('lemma'),
    translationEn: text('translation_en'),
    frequencyInQuran: integer('frequency_in_quran').notNull().default(1),
  },
  (table) => [
    index('quran_text_clean_idx').on(table.textClean),
    index('quran_page_line_idx').on(table.pageNumber, table.lineNumber),
    index('quran_surah_ayah_idx').on(table.surah, table.ayah),
  ]
)

// ─────────────────────────────────────────────
// 5. User Quran Unlocked Stats Cache
// ─────────────────────────────────────────────
export const userQuranStats = pgTable(
  'user_quran_stats',
  {
    id: serial('id').primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' })
      .unique(),
    totalWordsUnlocked: integer('total_words_unlocked').notNull().default(0),
    percentageUnlocked: real('percentage_unlocked').notNull().default(0),
    masteredWordsCount: integer('mastered_words_count').notNull().default(0),
    lastSyncedAt: timestamp('last_synced_at', { withTimezone: true }).defaultNow().notNull(),
  }
)

// ─────────────────────────────────────────────
// 6. Pronunciation Evaluator History
// ─────────────────────────────────────────────
export const pronunciationEvaluations = pgTable(
  'pronunciation_evaluations',
  {
    id: serial('id').primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    targetPhraseAr: text('target_phrase_ar').notNull(),
    spokenTranscriptAr: text('spoken_transcript_ar').notNull(),
    accuracyScore: real('accuracy_score').notNull(),
    lessonId: integer('lesson_id'),
    volumeId: integer('volume_id'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('user_pronunciation_idx').on(table.userId, table.createdAt),
  ]
)

// ─────────────────────────────────────────────
// 7. Master Video Transcripts Table
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// 8. Inverted Word-Level Index Table
// ─────────────────────────────────────────────
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
