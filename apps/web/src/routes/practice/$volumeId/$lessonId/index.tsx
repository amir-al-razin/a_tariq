import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Zap, Search, Mic } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import confetti from 'canvas-confetti'
import { CurriculumHeader } from '../../../../components/curriculum/shared/CurriculumHeader'
import { VOL1_PRACTICE, type PracticeLine } from '../../../../lib/practice-data'
import { getLessonPracticeSuite } from '../../../../components/practice/practiceLessonData'
import { SentenceScrambleModule } from '../../../../components/practice/SentenceScrambleModule'
import { VocabSpeedBlitzModule } from '../../../../components/practice/VocabSpeedBlitzModule'
import { HarakatDetectiveModule } from '../../../../components/practice/HarakatDetectiveModule'
import { PronunciationEvaluator } from '../../../../components/pronunciation/PronunciationEvaluator'
import { GamificationHeaderWidget } from '../../../../components/gamification/GamificationHeaderWidget'
import { RewardCelebrationModal } from '../../../../components/gamification/RewardCelebrationModal'
import { useGamificationStore } from '../../../../state/gamificationStore'
import { useVocabStore } from '../../../../state/vocabStore'

export const Route = createFileRoute('/practice/$volumeId/$lessonId/')({
  component: PracticeRoute,
})

type PracticeMode = 'paragraph' | 'scramble' | 'blitz' | 'detective' | 'pronounce'

function PracticeRoute() {
  const { volumeId, lessonId } = Route.useParams()
  const navigate = useNavigate()

  const darsNum = parseInt(lessonId.replace('lesson', '')) || 1
  const volNum = parseInt(volumeId.replace('vol', '')) || 1

  const [activeMode, setActiveMode] = useState<PracticeMode>('paragraph')

  // Lesson practice suite for variations
  const practiceSuite = getLessonPracticeSuite(darsNum)

  const practiceData = (volNum === 1 && VOL1_PRACTICE[darsNum] 
    ? VOL1_PRACTICE[darsNum] 
    : VOL1_PRACTICE[1]) as PracticeLine[]

  const allWords = practiceData.flatMap((l) => l.words)

  const [solvedIds, setSolvedIds] = useState<Set<number>>(() => {
    const initial = new Set<number>()
    allWords.forEach((w) => {
      if (w.revealed) {
        allWords.forEach((ww) => {
          if (ww.ar === w.ar) {
            initial.add(ww.id)
          }
        })
      }
    })
    return initial
  })

  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const hasAwardedRef = useRef(false)

  const recordPracticeResult = useGamificationStore((s) => s.recordPracticeResult)
  const addXp = useGamificationStore((s) => s.addXp)
  const learnWord = useVocabStore((s) => s.learnWord)

  useEffect(() => {
    // Reset solved state on lesson change
    hasAwardedRef.current = false
    const initial = new Set<number>()
    allWords.forEach((w) => {
      if (w.revealed) {
        allWords.forEach((ww) => {
          if (ww.ar === w.ar) {
            initial.add(ww.id)
          }
        })
      }
    })
    setSolvedIds(initial)
    setSelectedId(null)
    setInputValue('')
    setError(false)
  }, [darsNum, volNum])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setSelectedId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (solvedIds.size === allWords.length && allWords.length > 0 && !hasAwardedRef.current) {
      hasAwardedRef.current = true
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      recordPracticeResult(true)
      addXp(50, `Lesson ${darsNum} Paragraph Mastered!`)
    }
  }, [solvedIds.size, allWords.length, darsNum, recordPracticeResult, addXp])

  const handleWordClick = (word: any) => {
    if (solvedIds.has(word.id)) return
    setSelectedId(word.id)
    setInputValue('')
    setError(false)
  }

  const handleInputSubmit = (e: React.FormEvent, word: any) => {
    e.preventDefault()

    const answer = inputValue.toLowerCase().trim()
    const expected = word.enClean
    const expectedBase = expected.replace(/\s*\([^)]*\)/g, '').trim()

    if (answer === expected || answer === expectedBase) {
      setSolvedIds((prev) => {
        const newSet = new Set(prev)
        allWords.forEach((w) => {
          if (w.ar === word.ar) {
            newSet.add(w.id)
          }
        })
        return newSet
      })
      learnWord(word.ar, volNum, darsNum, 'mastered')
      recordPracticeResult(true)
      setSelectedId(null)
      setError(false)
    } else {
      setError(true)
      recordPracticeResult(false)
    }
  }

  const practiceSteps = Array.from({ length: 10 }, (_, i) => ({
    id: `practice-step-${i + 1}`,
    title: i === 0 ? 'Unseen Paragraph' : `Practice ${i + 1}`,
  }))

  const modes: { id: PracticeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'paragraph', label: 'Paragraph Composition', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'scramble', label: 'Sentence Scramble', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'blitz', label: 'Vocab Blitz Match', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'detective', label: 'Harakat Detective', icon: <Search className="w-3.5 h-3.5" /> },
    { id: 'pronounce', label: 'Recite & Pronounce', icon: <Mic className="w-3.5 h-3.5" /> },
  ]

  return (
    <main className="min-h-screen bg-[#FAF8F5] dark:bg-[#12110F] text-neutral-900 dark:text-neutral-100 pb-24 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
      <RewardCelebrationModal />
      <Tooltip id="practice-tooltip" className="!rounded-xl !bg-neutral-800 dark:!bg-neutral-700 !text-white !font-english-medium !text-sm !z-[100]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* Header with Gamification Widget */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <CurriculumHeader
            volume={volNum}
            lesson={darsNum}
            steps={practiceSteps}
            currentStep={0}
          />
          <div className="shrink-0">
            <GamificationHeaderWidget />
          </div>
        </div>

        {/* Practice Module Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#EFEAE0] dark:bg-[#1C1A16] border border-[#DDD6C8] dark:border-[#2C2822] rounded-2xl overflow-x-auto shadow-inner">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-english-bold whitespace-nowrap transition-all cursor-pointer ${
                activeMode === mode.id
                  ? 'bg-[#1C1917] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#1C1917] shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Mode Content */}
        {activeMode === 'scramble' ? (
          <SentenceScrambleModule
            challenges={practiceSuite.scrambleChallenges}
            onCompleteAll={() => setActiveMode('blitz')}
          />
        ) : activeMode === 'blitz' ? (
          <VocabSpeedBlitzModule
            pairs={practiceSuite.blitzPairs}
            onFinish={() => setActiveMode('detective')}
          />
        ) : activeMode === 'detective' ? (
          <HarakatDetectiveModule
            challenges={practiceSuite.harakatChallenges}
            onFinish={() => setActiveMode('pronounce')}
          />
        ) : activeMode === 'pronounce' ? (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-english-bold text-neutral-900 dark:text-neutral-50">
                Pronunciation Practice (Lesson {darsNum})
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Recite target phrases from this lesson and receive instant speech-to-text accuracy feedback.
              </p>
            </div>
            {practiceSuite.recitationPhrases.map((phrase, idx) => (
              <PronunciationEvaluator
                key={idx}
                phraseAr={phrase.phraseAr}
                translationEn={phrase.translationEn}
                transliteration={phrase.transliteration}
                tajweedTip={phrase.tajweedTip}
              />
            ))}
          </div>
        ) : (
          /* Default: Paragraph Composition */
          <section className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200/60 dark:border-neutral-700/50 flex flex-col gap-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-white">
                Translational Practice
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 font-english">
                Translate the words by clicking on them. Use the English blanks below as a guide!
              </p>
            </div>

            <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2.5 rounded-full mb-6 flex overflow-hidden">
              {allWords.map((w, i) => (
                <div
                  key={`progress-${w.id}-${i}`}
                  className={`flex-1 border-r border-white/30 dark:border-neutral-800/30 last:border-0 transition-colors duration-500 ${
                    solvedIds.has(w.id) ? 'bg-emerald-500' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>

            {/* Paragraph Display */}
            <div className="bg-neutral-100 dark:bg-neutral-800/80 p-4 sm:p-5 rounded-[2.5rem] mb-4" dir="rtl">
              <div className="flex flex-col gap-8 bg-white dark:bg-neutral-900 p-6 sm:p-10 rounded-[2rem] shadow-sm">
                {practiceData.map((line) => (
                  <div key={`ar-line-${line.id}`} className="flex flex-wrap gap-4 justify-center items-center leading-[2.5] text-4xl font-arabic">
                    {line.words.map((word) => {
                      const isSolved = solvedIds.has(word.id)
                      const isSelected = selectedId === word.id

                      return (
                        <div key={word.id} className="relative group inline-block">
                          <button
                            data-tooltip-id="practice-tooltip"
                            data-tooltip-content={isSolved ? word.hint || word.enClean : undefined}
                            onClick={() => handleWordClick(word)}
                            disabled={isSolved}
                            className={`
                              px-2 py-1 rounded-lg transition-colors
                              ${isSolved ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-solid border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-help' : ''}
                              ${!isSolved ? 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 border-b-2 border-dashed border-neutral-300 dark:border-neutral-600' : ''}
                              ${isSelected ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500' : ''}
                            `}
                          >
                            {word.ar}
                          </button>

                          {isSelected && (
                            <div
                              ref={popoverRef}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-100 dark:border-neutral-700 min-w-[220px]"
                              dir="ltr"
                            >
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-neutral-800 border-t border-l border-neutral-100 dark:border-neutral-700 rotate-45" />

                              <form onSubmit={(e) => handleInputSubmit(e, word)} className="relative flex flex-col gap-2 z-10">
                                <div className="relative">
                                  <input
                                    type="text"
                                    autoFocus
                                    value={inputValue}
                                    onChange={(e) => {
                                      setInputValue(e.target.value)
                                      setError(false)
                                    }}
                                    placeholder="Translation..."
                                    className={`
                                      w-full pl-3 pr-10 py-2.5 text-sm rounded-lg border bg-transparent font-english-medium transition-colors
                                      focus:outline-none focus:ring-2 
                                      ${error 
                                        ? 'border-red-300 dark:border-red-500/50 focus:ring-red-500 bg-red-50/50 dark:bg-red-900/10 text-red-900 dark:text-red-100 placeholder-red-300 dark:placeholder-red-700' 
                                        : 'border-neutral-200 dark:border-neutral-600 focus:ring-primary-500 text-neutral-900 dark:text-neutral-100'}
                                    `}
                                  />
                                  <button
                                    type="submit"
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
                                  >
                                    <ArrowRight className="w-4 h-4" />
                                  </button>
                                </div>
                                {error && (
                                  <div className="text-red-500 dark:text-red-400 text-xs font-english-medium px-1 flex items-center gap-1.5 animate-in slide-in-from-top-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />
                                    Incorrect, try again!
                                  </div>
                                )}
                              </form>
                            </div>
                          )}
                        </div>
                      )
                    })}
                    <span className="text-neutral-400 dark:text-neutral-500 select-none -mr-2 text-xl px-2">❖</span>
                  </div>
                ))}
              </div>
            </div>

            {/* English Translation with Inline Blanks */}
            <div className="bg-neutral-100 dark:bg-neutral-800/80 p-4 sm:p-5 rounded-[2.5rem]">
              <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-[2rem] flex flex-col gap-4 shadow-sm border border-transparent">
                <h3 className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider text-center">
                  Translation
                </h3>

                {practiceData.map((line, lineIndex) => {
                  let parts: React.ReactNode[] = [line.enSentence]
                  const sortedWords = [...line.words].sort((a, b) => b.enClean.length - a.enClean.length)

                  sortedWords.forEach((w) => {
                    if (!solvedIds.has(w.id) && w.enClean !== '???') {
                      const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                      const regex = new RegExp(`\\b(${escapeRegExp(w.enClean)})\\b`, 'gi')

                      parts = parts.flatMap((part, partIndex) => {
                        if (typeof part === 'string') {
                          const split = part.split(regex)
                          return split.map((s, i) => {
                            if (i % 2 === 1) {
                              const len = Math.max(s.length, 4)
                              return (
                                <span
                                  key={`blank-${w.id}-${lineIndex}-${partIndex}-${i}`}
                                  className="inline-block h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md mx-1 align-middle animate-pulse"
                                  style={{ width: `${len * 0.6}rem` }}
                                />
                              )
                            }
                            return s
                          })
                        }
                        return part
                      })
                    }
                  })

                  return (
                    <div key={line.id} className="text-xl leading-relaxed font-english-medium text-neutral-800 dark:text-neutral-200 text-center" dir="ltr">
                      {parts}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Completion Message */}
            {solvedIds.size === allWords.length && (
              <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50 mb-2">
                  Masha'Allah! Perfect!
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400">
                  You've successfully translated the entire paragraph.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Lesson Bottom Navigation */}
        <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() =>
              navigate({
                to: '/practice/$volumeId/$lessonId',
                params: { volumeId: `vol${volNum}`, lessonId: `lesson${darsNum > 1 ? darsNum - 1 : 1}` },
              })
            }
            disabled={darsNum === 1}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-full font-english-bold text-sm transition-all flex items-center justify-center gap-2 ${
              darsNum === 1
                ? 'bg-neutral-200/50 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 pointer-events-none'
                : 'bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-[200px] sm:max-w-none mx-auto py-2 sm:py-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
              <Link
                key={step}
                to="/practice/$volumeId/$lessonId"
                params={{ volumeId: `vol${volNum}`, lessonId: `lesson${step}` }}
                activeProps={{ className: '' }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  step === darsNum
                    ? 'bg-neutral-900 dark:bg-neutral-100 scale-125 pointer-events-none'
                    : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                }`}
                title={`Lesson ${step}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              navigate({
                to: '/practice/$volumeId/$lessonId',
                params: { volumeId: `vol${volNum}`, lessonId: `lesson${darsNum < 9 ? darsNum + 1 : 9}` },
              })
            }
            disabled={darsNum === 9 || volNum !== 1}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-full font-english-bold text-sm transition-all flex items-center justify-center gap-2 ${
              darsNum === 9 || volNum !== 1
                ? 'bg-neutral-900/50 text-white/50 pointer-events-none'
                : 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 cursor-pointer'
            }`}
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  )
}
