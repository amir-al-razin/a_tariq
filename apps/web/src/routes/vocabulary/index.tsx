import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import {
  Search,
  Volume2,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import {
  QURAN_VOCAB_CATALOG,
  TOTAL_QURAN_WORDS,
} from '../../data/quranVocabData'
import { useVocabStore, type MasteryLevel } from '../../state/vocabStore'
import { GamificationHeaderWidget } from '../../components/gamification/GamificationHeaderWidget'
import { RewardCelebrationModal } from '../../components/gamification/RewardCelebrationModal'

export const Route = createFileRoute('/vocabulary/')({
  component: VocabDictionaryPage,
})

function VocabDictionaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVolume, setSelectedVolume] = useState<number | 'all'>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedMastery, setSelectedMastery] = useState<string>('all')
  const [expandedWordId, setExpandedWordId] = useState<string | null>(null)

  const { learnedWords, toggleMastery, getQuranStats } = useVocabStore()
  const quranStats = getQuranStats()

  // Audio pronunciation
  const playAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.85
    window.speechSynthesis.speak(utterance)
  }

  // Filtered list
  const filteredWords = useMemo(() => {
    return QURAN_VOCAB_CATALOG.filter((item) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchesAr = item.ar.includes(q) || item.arClean.includes(q)
        const matchesEn = item.en.toLowerCase().includes(q)
        const matchesRom = item.romanized.toLowerCase().includes(q)
        const matchesBn = item.bn ? item.bn.includes(q) : false
        if (!matchesAr && !matchesEn && !matchesRom && !matchesBn) return false
      }

      // Volume filter
      if (selectedVolume !== 'all' && item.volume !== selectedVolume) {
        return false
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false
      }

      // Mastery filter
      if (selectedMastery !== 'all') {
        const entry = learnedWords[item.arClean]
        const currentMastery = entry ? entry.mastery : 'unlearned'
        if (currentMastery !== selectedMastery) return false
      }

      return true
    })
  }, [searchQuery, selectedVolume, selectedCategory, selectedMastery, learnedWords])

  // Count metrics
  const masteredCount = useMemo(() => {
    return Object.values(learnedWords).filter((w) => w.mastery === 'mastered').length
  }, [learnedWords])

  const totalCatalogWords = QURAN_VOCAB_CATALOG.length

  return (
    <main className="min-h-screen bg-[#FAF8F5] dark:bg-[#12110F] text-neutral-900 dark:text-neutral-100 pb-24 font-english transition-colors duration-300">
      <RewardCelebrationModal />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-english-bold text-neutral-900 dark:text-white tracking-tight">
              Vocabulary & Quran Lexicon
            </h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Curriculum lexical repository with live Quranic frequency and comprehension tracking.
            </p>
          </div>

          <GamificationHeaderWidget />
        </div>

        {/* Live Quran Words Unlocked Progress Card */}
        <div className="bg-[#FFFFFF] dark:bg-[#141311] rounded-3xl p-6 sm:p-8 border border-[#E7E2D9] dark:border-[#26231E] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-english-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Live Quranic Comprehension Meter</span>
              </div>
              <h2 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50">
                {quranStats.unlockedCount.toLocaleString()} of {TOTAL_QURAN_WORDS.toLocaleString()} Quran Words Unlocked
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Based on frequency analysis of the vocabulary you have studied in the curriculum.
              </p>
            </div>

            <div className="flex items-baseline gap-1 text-emerald-600 dark:text-emerald-400">
              <span className="text-4xl font-english-bold">{quranStats.percentage}%</span>
              <span className="text-xs font-english-semibold text-neutral-500">of Quran text</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-[#F0ECE1] dark:bg-[#1E1C18] rounded-full overflow-hidden p-0.5 border border-[#DDD6C8] dark:border-[#332E27]">
              <div
                className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all duration-700 shadow-sm"
                style={{ width: `${Math.max(2, quranStats.percentage)}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-english-medium text-neutral-400 dark:text-neutral-500">
              <span>Foundation (Vol 1)</span>
              <span>Intermediate (Vol 2)</span>
              <span>Advanced (Vol 3)</span>
              <span>Complete Mushaf</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A16] border border-[#E7E2D9] dark:border-[#26231E]">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Mastered Words</span>
              <div className="text-xl font-english-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                {masteredCount}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/50">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Studied in Catalog</span>
              <div className="text-xl font-english-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                {Object.keys(learnedWords).length} / {totalCatalogWords}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/50">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Quran Occurrences</span>
              <div className="text-xl font-english-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {quranStats.unlockedCount.toLocaleString()}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/50">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Mushaf Pages Impacted</span>
              <div className="text-xl font-english-bold text-teal-600 dark:text-teal-400 mt-0.5">
                604 / 604
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Arabic, English (e.g. book, masjid), or romanization..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 text-sm font-english-medium text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all shadow-sm"
              />
            </div>

            {/* Volume Filter */}
            <select
              value={selectedVolume}
              onChange={(e) =>
                setSelectedVolume(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              aria-label="Filter by volume"
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 text-xs font-english-bold text-neutral-700 dark:text-neutral-300 focus:outline-none cursor-pointer"
            >
              <option value="all">All Volumes</option>
              <option value="1">Volume 1</option>
              <option value="2">Volume 2</option>
              <option value="3">Volume 3</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by word category"
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 text-xs font-english-bold text-neutral-700 dark:text-neutral-300 focus:outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="noun">Nouns</option>
              <option value="adjective">Adjectives</option>
              <option value="verb">Verbs</option>
              <option value="pronoun">Pronouns</option>
              <option value="particle">Particles</option>
              <option value="number">Numbers</option>
            </select>

            {/* Mastery Filter */}
            <select
              value={selectedMastery}
              onChange={(e) => setSelectedMastery(e.target.value)}
              aria-label="Filter by mastery status"
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 text-xs font-english-bold text-neutral-700 dark:text-neutral-300 focus:outline-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="mastered">Mastered</option>
              <option value="familiar">Familiar</option>
              <option value="learning">Learning</option>
            </select>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
            <span>Showing {filteredWords.length} words</span>
            <span>Click any card to toggle mastery level</span>
          </div>
        </div>

        {/* Word Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((item) => {
            const entry = learnedWords[item.arClean]
            const mastery: MasteryLevel = entry ? entry.mastery : 'learning'
            const isExpanded = expandedWordId === item.id

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-5 border transition-all flex flex-col justify-between bg-white dark:bg-neutral-900 shadow-sm ${
                  mastery === 'mastered'
                    ? 'border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/20'
                    : 'border-neutral-200/80 dark:border-neutral-700/60'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-english-bold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                      Vol {item.volume} · Lesson {item.lesson}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => playAudio(item.ar)}
                        className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                        title="Listen"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Mastery Toggle */}
                      <button
                        onClick={() => toggleMastery(item.arClean)}
                        className={`text-[10px] font-english-bold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                          mastery === 'mastered'
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                            : mastery === 'familiar'
                              ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                        }`}
                        title="Click to toggle: Learning -> Familiar -> Mastered"
                      >
                        {mastery === 'mastered' ? '✓ Mastered' : mastery === 'familiar' ? 'Familiar' : 'Learning'}
                      </button>
                    </div>
                  </div>

                  {/* Arabic Word Display */}
                  <div className="text-center py-2">
                    <h3 className="text-3xl font-arabic text-neutral-900 dark:text-neutral-50 mb-1" dir="rtl">
                      {item.ar}
                    </h3>
                    <p className="text-xs text-neutral-400 italic">
                      {item.romanized}
                    </p>
                    <p className="text-sm font-english-bold text-neutral-800 dark:text-neutral-200 mt-1">
                      {item.en}
                    </p>
                    {item.bn && (
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {item.bn}
                      </p>
                    )}
                  </div>
                </div>

                {/* Quran Frequency & Ayah Info */}
                <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Quran Occurrences:</span>
                    <span className="font-english-bold text-emerald-600 dark:text-emerald-400">
                      {item.quranFrequency.toLocaleString()}x
                    </span>
                  </div>

                  {item.sampleAyah && (
                    <div>
                      <button
                        onClick={() => setExpandedWordId(isExpanded ? null : item.id)}
                        className="w-full flex items-center justify-between text-[11px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 py-1 transition-colors cursor-pointer"
                      >
                        <span>Sample Ayah ({item.sampleAyah.surahName} {item.sampleAyah.surahNumber}:{item.sampleAyah.ayahNumber})</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 text-xs space-y-1.5 animate-in fade-in">
                          <p className="font-arabic text-base text-neutral-800 dark:text-neutral-200 leading-relaxed text-center" dir="rtl">
                            {item.sampleAyah.textAr}
                          </p>
                          <p className="font-english text-[11px] text-neutral-500 dark:text-neutral-400 text-center italic">
                            "{item.sampleAyah.translationEn}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
