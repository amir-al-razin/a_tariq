import { describe, it, expect } from 'vitest'
import { cleanArabic, matchesLearnedWord, calculateQuranWordsUnlocked, QURAN_VOCAB_CATALOG } from '../data/quranVocabData'

describe('Quran Vocab & Arabic Normalization', () => {
  it('cleans diacritics and vocalization marks correctly', () => {
    expect(cleanArabic('كِتَابٌ')).toBe('كتاب')
    expect(cleanArabic('مَسْجِدٌ')).toBe('مسجد')
    expect(cleanArabic('ذَٰلِكَ')).toBe('ذلك')
    expect(cleanArabic('مَدْرَسَةٌ')).toBe('مدرسه')
  })

  it('matches learned words with prefixes and attached particles', () => {
    const learned = ['كتاب', 'مسجد', 'بيت']

    // Exact match
    expect(matchesLearnedWord('كتاب', learned)).toBe(true)

    // With definite article Al-
    expect(matchesLearnedWord('الْكِتَابُ', learned)).toBe(true)

    // With preposition/conjunction prefix
    expect(matchesLearnedWord('وَالْمَسْجِدُ', learned)).toBe(true)
    expect(matchesLearnedWord('فِي الْبَيْتِ', learned)).toBe(true)

    // Non-match
    expect(matchesLearnedWord('سيارة', learned)).toBe(false)
  })

  it('calculates Quran unlocked occurrences and percentages correctly', () => {
    const learnedWords = ['كتاب', 'بيت', 'باب']
    const stats = calculateQuranWordsUnlocked(learnedWords)

    expect(stats.totalWords).toBe(77430)
    expect(stats.unlockedCount).toBeGreaterThan(300)
    expect(stats.percentage).toBeGreaterThan(0.3)
  })

  it('contains valid catalog items with Quran frequency data', () => {
    expect(QURAN_VOCAB_CATALOG.length).toBeGreaterThan(20)
    const book = QURAN_VOCAB_CATALOG.find((w) => w.arClean === 'كتاب')
    expect(book).toBeDefined()
    expect(book?.quranFrequency).toBe(261)
  })
})
