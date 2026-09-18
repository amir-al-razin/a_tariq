import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  cleanArabic,
  matchesLearnedWord,
  calculateQuranWordsUnlocked,
} from '../data/quranVocabData'
import { useGamificationStore } from './gamificationStore'

export type MasteryLevel = 'learning' | 'familiar' | 'mastered'

export interface LearnedWordEntry {
  wordAr: string
  wordClean: string
  volume: number
  lesson: number
  mastery: MasteryLevel
  learnedAt: string
  reviewCount: number
}

interface VocabState {
  learnedWords: Record<string, LearnedWordEntry> // keyed by wordClean

  quranStats: { unlockedCount: number; totalWords: number; percentage: number }
  // Actions
  learnWord: (wordAr: string, volume: number, lesson: number, mastery?: MasteryLevel) => void
  toggleMastery: (wordClean: string) => void
  isLearned: (rawArabic: string) => boolean
  getLearnedCleanList: () => string[]
  getQuranStats: () => { unlockedCount: number; totalWords: number; percentage: number }
}

// Initial seed: Lesson 1 & 2 core foundation
const INITIAL_LEARNED_SEED: Record<string, LearnedWordEntry> = {
  [cleanArabic('كتاب')]: {
    wordAr: 'كِتَابٌ',
    wordClean: cleanArabic('كتاب'),
    volume: 1,
    lesson: 1,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 3,
  },
  [cleanArabic('بيت')]: {
    wordAr: 'بَيْتٌ',
    wordClean: cleanArabic('بيت'),
    volume: 1,
    lesson: 1,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 4,
  },
  [cleanArabic('باب')]: {
    wordAr: 'بَابٌ',
    wordClean: cleanArabic('باب'),
    volume: 1,
    lesson: 1,
    mastery: 'familiar',
    learnedAt: new Date().toISOString(),
    reviewCount: 2,
  },
  [cleanArabic('قلم')]: {
    wordAr: 'قَلَمٌ',
    wordClean: cleanArabic('قلم'),
    volume: 1,
    lesson: 1,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 5,
  },
  [cleanArabic('كرسي')]: {
    wordAr: 'كُرْسِيٌّ',
    wordClean: cleanArabic('كرسي'),
    volume: 1,
    lesson: 1,
    mastery: 'familiar',
    learnedAt: new Date().toISOString(),
    reviewCount: 1,
  },
  [cleanArabic('هذا')]: {
    wordAr: 'هَٰذَا',
    wordClean: cleanArabic('هذا'),
    volume: 1,
    lesson: 1,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 8,
  },
  [cleanArabic('ذلك')]: {
    wordAr: 'ذَٰلِكَ',
    wordClean: cleanArabic('ذلك'),
    volume: 1,
    lesson: 1,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 6,
  },
  [cleanArabic('مسجد')]: {
    wordAr: 'مَسْجِدٌ',
    wordClean: cleanArabic('مسجد'),
    volume: 1,
    lesson: 2,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 4,
  },
  [cleanArabic('كبير')]: {
    wordAr: 'كَبِيرٌ',
    wordClean: cleanArabic('كبير'),
    volume: 1,
    lesson: 2,
    mastery: 'familiar',
    learnedAt: new Date().toISOString(),
    reviewCount: 2,
  },
  [cleanArabic('صغير')]: {
    wordAr: 'صَغِيرٌ',
    wordClean: cleanArabic('صغير'),
    volume: 1,
    lesson: 2,
    mastery: 'familiar',
    learnedAt: new Date().toISOString(),
    reviewCount: 2,
  },
  [cleanArabic('في')]: {
    wordAr: 'فِي',
    wordClean: cleanArabic('في'),
    volume: 1,
    lesson: 5,
    mastery: 'mastered',
    learnedAt: new Date().toISOString(),
    reviewCount: 10,
  },
}

export const useVocabStore = create<VocabState>()(
  persist(
    (set, get) => ({
      learnedWords: INITIAL_LEARNED_SEED,
      quranStats: calculateQuranWordsUnlocked(Object.keys(INITIAL_LEARNED_SEED)),

      learnWord: (wordAr, volume, lesson, mastery = 'learning') => {
        const clean = cleanArabic(wordAr)
        if (!clean) return

        const existing = get().learnedWords[clean]
        const isNew = !existing

        const updatedLearned = {
          ...get().learnedWords,
          [clean]: {
            wordAr,
            wordClean: clean,
            volume,
            lesson,
            mastery: existing ? existing.mastery : mastery,
            learnedAt: existing ? existing.learnedAt : new Date().toISOString(),
            reviewCount: (existing?.reviewCount || 0) + 1,
          },
        }

        set({
          learnedWords: updatedLearned,
          quranStats: calculateQuranWordsUnlocked(Object.keys(updatedLearned)),
        })

        if (isNew) {
          useGamificationStore.getState().recordWordLearned(1)
        }
      },

      toggleMastery: (wordClean) => {
        const entry = get().learnedWords[wordClean]
        if (!entry) return

        const nextMastery: MasteryLevel =
          entry.mastery === 'learning'
            ? 'familiar'
            : entry.mastery === 'familiar'
              ? 'mastered'
              : 'learning'

        const updatedLearned = {
          ...get().learnedWords,
          [wordClean]: {
            ...entry,
            mastery: nextMastery,
            reviewCount: entry.reviewCount + 1,
          },
        }

        set({
          learnedWords: updatedLearned,
          quranStats: calculateQuranWordsUnlocked(Object.keys(updatedLearned)),
        })

        if (nextMastery === 'mastered') {
          useGamificationStore.getState().addXp(15, `Mastered ${entry.wordAr}`)
        }
      },

      isLearned: (rawArabic: string) => {
        const cleanList = Object.keys(get().learnedWords)
        return matchesLearnedWord(rawArabic, cleanList)
      },

      getLearnedCleanList: () => {
        return Object.keys(get().learnedWords)
      },

      getQuranStats: () => {
        return get().quranStats
      },
    }),
    {
      name: 'tariq_vocab_store',
    }
  )
)
