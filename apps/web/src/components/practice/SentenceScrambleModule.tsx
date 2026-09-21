import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, RotateCcw, ArrowRight, Volume2, AlertCircle, Layers } from 'lucide-react'
import confetti from '../../lib/confetti'
import type { ScrambleChallenge } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'
import { useLanguage } from '../../hooks/useLanguage'

interface SentenceScrambleModuleProps {
  challenges: ScrambleChallenge[]
  onCompleteAll?: () => void
}

export const SentenceScrambleModule: React.FC<SentenceScrambleModuleProps> = ({
  challenges,
  onCompleteAll,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentChallenge = challenges[currentIndex]
  const { language } = useLanguage()
  const isBn = language === 'bn'

  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [availableWords, setAvailableWords] = useState<string[]>([
    ...currentChallenge.scrambledWords,
  ])
  const [isEvaluated, setIsEvaluated] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const recordPracticeResult = useGamificationStore((s) => s.recordPracticeResult)
  const addXp = useGamificationStore((s) => s.addXp)

  const totalSlots = currentChallenge.scrambledWords.length

  const playAudio = (text: string) => {
    if (typeof window === 'undefined') return
    try {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'ar-SA'
      u.rate = 0.88
      window.speechSynthesis.speak(u)
    } catch {
      // Audio optional
    }
  }

  const handleSelectWord = (word: string, index: number) => {
    if (isEvaluated) return
    setSelectedWords((prev) => [...prev, word])
    setAvailableWords((prev) => prev.filter((_, i) => i !== index))
  }

  const handleDeselectWord = (word: string, index: number) => {
    if (isEvaluated) return
    setSelectedWords((prev) => prev.filter((_, i) => i !== index))
    setAvailableWords((prev) => [...prev, word])
  }

  const handleReset = () => {
    setSelectedWords([])
    setAvailableWords([...currentChallenge.scrambledWords])
    setIsEvaluated(false)
    setIsCorrect(false)
  }

  const handleCheck = () => {
    const constructed = selectedWords.join(' ')
    const target = currentChallenge.arSentence.replace(/\s+/g, ' ').trim()
    const correct = constructed === target

    setIsEvaluated(true)
    setIsCorrect(correct)
    recordPracticeResult(correct)

    if (correct) {
      confetti({ particleCount: 55, spread: 60, origin: { y: 0.6 } })
      playAudio(currentChallenge.arSentence)
      addXp(25, 'Sentence Unscramble Completed!')
    }
  }

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      const nextIdx = currentIndex + 1
      setCurrentIndex(nextIdx)
      setSelectedWords([])
      setAvailableWords([...challenges[nextIdx].scrambledWords])
      setIsEvaluated(false)
      setIsCorrect(false)
    } else {
      if (onCompleteAll) onCompleteAll()
    }
  }

  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-4xl p-6 sm:p-10 border-0 shadow-none font-english space-y-8 transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 border-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-accent-primary flex items-center justify-center border-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500">
                {isBn ? 'বাক্য গঠন · تَرْتِيبُ الْجُمَلِ' : 'Syntactic Assembly · تَرْتِيبُ الْجُمَلِ'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-english-bold border-0">
                +25 XP
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              {isBn ? 'সঠিক বিন্যাসে শব্দগুলো সাজান' : 'Grammatical Sentence Scramble'}
            </h2>
          </div>
        </div>

        <span className="text-xs font-english-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">
          {currentIndex + 1} / {challenges.length}
        </span>
      </div>

      {/* Target Translation Plaque */}
      <div className="text-center py-6 px-6 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border-0 shadow-none space-y-2">
        <span className="text-[11px] font-english-bold uppercase tracking-wider text-neutral-400">
          {isBn ? 'লক্ষ্য অনুবাদ' : 'Target Meaning'}
        </span>
        <h3 className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          "{currentChallenge.enPrompt}"
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {isBn ? 'নিচের আরবি শব্দগুলো সঠিক ক্রমানুসারে সাজান।' : 'Arrange the Arabic word tokens below into correct syntactic word order.'}
        </p>
      </div>

      {/* Assembly Magnetic Tray */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
          <span className="font-english-semibold">{isBn ? 'বাক্য গঠনের স্থান:' : 'Sentence Construction Tray:'}</span>
          <span>{selectedWords.length} / {totalSlots}</span>
        </div>

        <div
          className={`min-h-[110px] p-5 sm:p-6 rounded-3xl transition-all flex flex-wrap items-center justify-center gap-3 relative border-0 ${
            isEvaluated
              ? isCorrect
                ? 'bg-emerald-500/10 text-emerald-900 dark:text-emerald-100'
                : 'bg-rose-500/10 text-rose-900 dark:text-rose-100'
              : selectedWords.length > 0
                ? 'bg-neutral-50 dark:bg-neutral-950'
                : 'bg-neutral-50/60 dark:bg-neutral-950/60 border-2 border-dashed border-neutral-300 dark:border-neutral-700'
          }`}
          dir="rtl"
        >
          <AnimatePresence>
            {selectedWords.length === 0 ? (
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-english select-none" dir="ltr">
                {isBn ? 'নিচ থেকে আরবি শব্দ নির্বাচন করে এখানে বসান' : 'Tap the Arabic word blocks below in order to place them on the tray'}
              </span>
            ) : (
              selectedWords.map((word, idx) => (
                <motion.button
                  key={`selected-${word}-${idx}`}
                  initial={{ scale: 0.85, opacity: 0, y: 4 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  onClick={() => handleDeselectWord(word, idx)}
                  disabled={isEvaluated}
                  className="px-5 py-3 rounded-2xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-arabic text-3xl transition-all cursor-pointer select-none border-0 shadow-none hover:scale-105 active:scale-95"
                >
                  {word}
                </motion.button>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Available Word Blocks Pool */}
      <div className="space-y-2">
        <span className="text-xs font-english-semibold text-neutral-500 px-1">
          {isBn ? 'উপলব্ধ শব্দসমূহ:' : 'Available Tokens:'}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 p-5 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border-0" dir="rtl">
          {availableWords.length === 0 ? (
            <span className="text-xs text-neutral-400 font-english italic py-2" dir="ltr">
              {isBn ? 'সব শব্দ সাজানো হয়েছে। যাচাই করতে নিচের বোতামে চাপুন।' : 'All tokens placed on tray. Click Verify below.'}
            </span>
          ) : (
            availableWords.map((word, idx) => (
              <button
                key={`available-${word}-${idx}`}
                onClick={() => handleSelectWord(word, idx)}
                disabled={isEvaluated}
                className="px-5 py-3 rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic text-3xl border-0 shadow-none transition-all cursor-pointer select-none hover:scale-105 active:scale-95"
              >
                {word}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Pedagogical Explanation Banner */}
      {isEvaluated && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-3xl border-0 text-sm shadow-none ${
            isCorrect
              ? 'bg-emerald-500/10 text-emerald-950 dark:text-emerald-100'
              : 'bg-amber-500/10 text-amber-950 dark:text-amber-100'
          }`}
        >
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2 font-english-bold text-sm">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isBn ? 'সঠিক বাক্য বিন্যাস · أَحْسَنْتَ! (+25 XP)' : 'Syntactic Order Verified · أَحْسَنْتَ! (+25 XP)'}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{isBn ? 'ব্যাকরণ পর্যালোচনা: বাক্যক্রম পরীক্ষা করুন' : 'Grammar Review: Check sequence'}</span>
                </>
              )}
            </div>

            <button
              onClick={() => playAudio(currentChallenge.arSentence)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-english-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer border-0"
              title="Listen to full correct Arabic sentence"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isBn ? 'উচ্চারণ শুনুন' : 'Pronounce Sentence'}</span>
            </button>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {currentChallenge.explanation}
          </p>
        </motion.div>
      )}

      {/* Actions (56px Action Button & Reset) */}
      <div className="flex items-center justify-between pt-4 border-0 gap-4">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors text-xs font-english-bold cursor-pointer border-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{isBn ? 'পুনরায় সাজান' : 'Reset Tray'}</span>
        </button>

        {!isEvaluated ? (
          <button
            onClick={handleCheck}
            disabled={selectedWords.length === 0}
            className="h-14 px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] border-0 shadow-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>{isBn ? 'যাচাই করুন' : 'Verify Syntax'}</span>
            <Check className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="h-14 px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] border-0 shadow-none cursor-pointer"
          >
            <span>{currentIndex < challenges.length - 1 ? (isBn ? 'পরবর্তী বাক্য' : 'Next Sentence') : (isBn ? 'সম্পন্ন করুন' : 'Finish Module')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
