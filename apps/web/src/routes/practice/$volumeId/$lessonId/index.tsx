import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Zap, Search, Mic } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import confetti from '../../../../lib/confetti'
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
import { useLanguage } from '../../../../hooks/useLanguage'

export const Route = createFileRoute('/practice/$volumeId/$lessonId/')({
  component: PracticeRoute,
})

type PracticeMode = 'paragraph' | 'scramble' | 'blitz' | 'detective' | 'pronounce'

function PracticeRoute() {
  const { volumeId, lessonId } = Route.useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const isBn = language === 'bn'

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
      addXp(50, isBn ? `পাঠ ${darsNum} অনুচ্ছেদ সম্পূর্ণ!` : `Lesson ${darsNum} Paragraph Mastered!`)
    }
  }, [solvedIds.size, allWords.length, darsNum, recordPracticeResult, addXp, isBn])

  const handleWordClick = (word: any) => {
    if (solvedIds.has(word.id)) return
    setSelectedId(word.id)
    setInputValue('')
    setError(false)
  }

  const handleInputSubmit = (e: React.FormEvent, word: any) => {
    e.preventDefault()

    const answer = inputValue.toLowerCase().trim()
    const expectedEn = (word.enClean || '').toLowerCase().trim()
    const expectedEnBase = expectedEn.replace(/\s*\([^)]*\)/g, '').trim()
    const expectedBn = (word.bnClean || '').trim()

    const isMatch =
      answer === expectedEn ||
      answer === expectedEnBase ||
      (expectedBn && answer === expectedBn)

    if (isMatch) {
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
    title: i === 0 ? (isBn ? 'অদেখা অনুচ্ছেদ' : 'Unseen Paragraph') : (isBn ? `অনুশীলন ${i + 1}` : `Practice ${i + 1}`),
  }))

  const modes: { id: PracticeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'paragraph', label: isBn ? 'অনুচ্ছেদ রচনা' : 'Paragraph Composition', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'scramble', label: isBn ? 'বাক্য বিন্যাস' : 'Sentence Scramble', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'blitz', label: isBn ? 'শব্দভাণ্ডার ব্লিৎজ' : 'Vocab Blitz Match', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'detective', label: isBn ? 'হরকত গোয়েন্দা' : 'Harakat Detective', icon: <Search className="w-3.5 h-3.5" /> },
    { id: 'pronounce', label: isBn ? 'তিলাওয়াত ও উচ্চারণ' : 'Recite & Pronounce', icon: <Mic className="w-3.5 h-3.5" /> },
  ]

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pb-24 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
      <RewardCelebrationModal />

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
        <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-x-auto">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-english-bold whitespace-nowrap transition-all cursor-pointer ${
                activeMode === mode.id
                  ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
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
                {isBn ? `উচ্চারণ অনুশীলন (পাঠ ${darsNum})` : `Pronunciation Practice (Lesson ${darsNum})`}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {isBn
                  ? 'এই পাঠের বাক্যাংশগুলো তিলাওয়াত করুন এবং সরাসরি সঠিকতা মূল্যায়ন পান।'
                  : 'Recite target phrases from this lesson and receive instant speech-to-text accuracy feedback.'}
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
          <section className="bg-neutral-100 dark:bg-neutral-900 rounded-4xl p-6 sm:p-10 flex flex-col gap-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-white">
                {isBn ? 'অনুবাদ অনুশীলন' : 'Translational Practice'}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {isBn
                  ? 'শব্দগুলোতে ক্লিক করে অনুবাদ পূরণ করুন। নিচের শূন্যস্থানগুলো লক্ষ্য করুন!'
                  : 'Translate the words by clicking on them. Use the English blanks below as a guide!'}
              </p>
            </div>

            <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2.5 rounded-full mb-6 flex overflow-hidden">
              {allWords.map((w, i) => (
                <div
                  key={`progress-${w.id}-${i}`}
                  className={`flex-1 transition-colors duration-500 ${
                    solvedIds.has(w.id) ? 'bg-emerald-500' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>

            {/* Paragraph Display */}
            <div className="bg-neutral-200/50 dark:bg-neutral-800/60 p-4 sm:p-5 rounded-4xl mb-4" dir="rtl">
              <div className="flex flex-col gap-8 bg-neutral-50 dark:bg-neutral-950 p-6 sm:p-10 rounded-3xl">
                {practiceData.map((line) => (
                  <div key={`ar-line-${line.id}`} className="flex flex-wrap gap-4 justify-center items-center leading-[2.5] text-4xl font-arabic">
                    {line.words.map((word) => {
                      const isSolved = solvedIds.has(word.id)
                      const isSelected = selectedId === word.id

                      return (
                        <div key={word.id} className="relative group inline-block">
                          <button
                            title={isSolved ? (isBn ? (word.hintBn || word.bnClean || word.hint) : (word.hint || word.enClean)) : undefined}
                            onClick={() => handleWordClick(word)}
                            disabled={isSolved}
                            className={`
                              px-3 py-1.5 rounded-2xl transition-all
                              ${isSolved ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 cursor-help' : ''}
                              ${!isSolved ? 'cursor-pointer hover:bg-neutral-200/70 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : ''}
                              ${isSelected ? 'bg-accent-primary/20 text-accent-primary' : ''}
                            `}
                          >
                            {word.ar}
                          </button>

                          {isSelected && (
                            <div
                              ref={popoverRef}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 p-3 rounded-2xl min-w-[220px]"
                              dir="ltr"
                            >
                              <form onSubmit={(e) => handleInputSubmit(e, word)} className="relative flex flex-col gap-2 z-10">
                                <div className="relative flex items-center">
                                  <input
                                    type="text"
                                    autoFocus
                                    value={inputValue}
                                    onChange={(e) => {
                                      setInputValue(e.target.value)
                                      setError(false)
                                    }}
                                    placeholder={isBn ? 'অনুবাদ লিখুন...' : 'Translation...'}
                                    className={`
                                      w-full pl-3 pr-10 py-2.5 text-sm rounded-xl bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-900 outline-none
                                      ${error ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-accent-primary'}
                                    `}
                                  />
                                  <button
                                    type="submit"
                                    className="absolute right-1.5 p-1.5 bg-accent-primary hover:bg-accent-primary-hover text-white rounded-lg transition-opacity flex items-center justify-center cursor-pointer shadow-none border-0"
                                  >
                                    <ArrowRight className="w-4 h-4 text-white" />
                                  </button>
                                </div>
                                {error && (
                                  <div className="text-red-400 dark:text-red-600 text-xs font-english-medium px-1 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 dark:bg-red-600" />
                                    {isBn ? 'ভুল হয়েছে, আবার চেষ্টা করুন!' : 'Incorrect, try again!'}
                                  </div>
                                )}
                              </form>
                            </div>
                          )}
                        </div>
                      )
                    })}
                    <span className="text-neutral-400 dark:text-neutral-600 select-none -mr-2 text-xl px-2">❖</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Translation with Inline Blanks */}
            <div className="bg-neutral-200/50 dark:bg-neutral-800/60 p-4 sm:p-5 rounded-4xl">
              <div className="bg-neutral-50 dark:bg-neutral-950 p-6 sm:p-8 rounded-3xl flex flex-col gap-4">
                <h3 className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider text-center">
                  {isBn ? 'অনুবাদ' : 'Translation'}
                </h3>

                {practiceData.map((line, lineIndex) => {
                  const sentenceText = isBn && line.bnSentence ? line.bnSentence : line.enSentence
                  let parts: React.ReactNode[] = [sentenceText]
                  const sortedWords = [...line.words].sort((a, b) => {
                    const lenA = isBn && a.bnClean ? a.bnClean.length : a.enClean.length
                    const lenB = isBn && b.bnClean ? b.bnClean.length : b.enClean.length
                    return lenB - lenA
                  })

                  sortedWords.forEach((w) => {
                    const targetClean = isBn && w.bnClean ? w.bnClean : w.enClean
                    if (!solvedIds.has(w.id) && targetClean !== '???') {
                      const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                      const regex = new RegExp(`(${escapeRegExp(targetClean)})`, 'gi')

                      parts = parts.flatMap((part, partIndex) => {
                        if (typeof part === 'string') {
                          const split = part.split(regex)
                          return split.map((s, i) => {
                            if (i % 2 === 1) {
                              const len = Math.max(s.length, 4)
                              return (
                                <span
                                  key={`blank-${w.id}-${lineIndex}-${partIndex}-${i}`}
                                  className="inline-block h-5 bg-neutral-200 dark:bg-neutral-800 rounded-md mx-1 align-middle animate-pulse"
                                  style={{ width: `${len * 0.7}rem` }}
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
                    <div key={line.id} className={`text-xl leading-relaxed ${isBn ? 'font-bengali' : 'font-english-medium'} text-neutral-800 dark:text-neutral-200 text-center`} dir="ltr">
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
                  {isBn ? 'মাশাআল্লাহ! চমৎকার!' : "Masha'Allah! Perfect!"}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {isBn
                    ? 'আপনি সম্পূর্ণ অনুচ্ছেদটি সফলভাবে অনুবাদ করেছেন।'
                    : "You've successfully translated the entire paragraph."}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Lesson Bottom Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() =>
              navigate({
                to: '/practice/$volumeId/$lessonId',
                params: { volumeId: `vol${volNum}`, lessonId: `lesson${darsNum > 1 ? darsNum - 1 : 1}` },
              })
            }
            disabled={darsNum === 1}
            className={`h-14 px-8 rounded-full font-english-bold text-sm transition-all inline-flex items-center justify-center gap-2 ${
              darsNum === 1
                ? 'bg-neutral-200/50 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 pointer-events-none'
                : 'bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isBn ? 'পূর্ববর্তী' : 'Previous'}</span>
          </button>

          <div className="flex flex-wrap justify-center items-center gap-2 max-w-[200px] sm:max-w-none mx-auto py-2 sm:py-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
              <Link
                key={step}
                to="/practice/$volumeId/$lessonId"
                params={{ volumeId: `vol${volNum}`, lessonId: `lesson${step}` }}
                activeProps={{ className: '' }}
                className={`w-3 h-3 rounded-full transition-all ${
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
            className={`h-14 px-8 rounded-full font-english-bold text-sm transition-all inline-flex items-center justify-center gap-2 shadow-none border-0 ${
              darsNum === 9 || volNum !== 1
                ? 'bg-neutral-200/50 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 pointer-events-none'
                : 'bg-accent-primary hover:bg-accent-primary-hover text-white cursor-pointer'
            }`}
          >
            <span className="text-white">{isBn ? 'পরবর্তী' : 'Next'}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </main>
  )
}
