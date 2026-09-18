import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, RotateCcw, ArrowRight, Volume2, AlertCircle, Layers } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { ScrambleChallenge } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'

interface SentenceScrambleModuleProps {
  challenges: ScrambleChallenge[]
  onCompleteAll?: () => void
}

export const SentenceScrambleModule: React.FC<SentenceScrambleModuleProps> = ({
  challenges,
  onCompleteAll,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [availableWords, setAvailableWords] = useState<string[]>(() => [
    ...challenges[0].scrambledWords,
  ])
  const [isEvaluated, setIsEvaluated] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const recordPracticeResult = useGamificationStore((s) => s.recordPracticeResult)
  const addXp = useGamificationStore((s) => s.addXp)

  const currentChallenge = challenges[currentIndex]
  const totalSlots = currentChallenge.arSentence.split(/\s+/).length

  // Audio speech synthesis
  const playAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.85
    window.speechSynthesis.speak(utterance)
  }

  const handleSelectWord = (word: string, indexInAvailable: number) => {
    if (isEvaluated) return
    playAudio(word)
    setSelectedWords((prev) => [...prev, word])
    setAvailableWords((prev) => prev.filter((_, i) => i !== indexInAvailable))
  }

  const handleDeselectWord = (word: string, indexInSelected: number) => {
    if (isEvaluated) return
    setSelectedWords((prev) => prev.filter((_, i) => i !== indexInSelected))
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
    <div className="w-full bg-[#FAF8F5] dark:bg-[#141311] rounded-3xl p-6 sm:p-10 border border-[#E7E2D9] dark:border-[#26231E] shadow-xl font-english space-y-8 transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#E7E2D9] dark:border-[#26231E] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#F0ECE1] dark:bg-[#201D18] border border-[#DDD6C8] dark:border-[#332E27] text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500">
                Syntactic Assembly · تَرْتِيبُ الْجُمَلِ
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] font-english-bold">
                +25 XP
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              Grammatical Sentence Scramble
            </h2>
          </div>
        </div>

        <span className="text-xs font-english-bold px-3 py-1 rounded-full bg-[#EFEAE0] dark:bg-[#201D19] border border-[#DDD6C8] dark:border-[#332E27] text-neutral-700 dark:text-neutral-300">
          {currentIndex + 1} of {challenges.length}
        </span>
      </div>

      {/* Target Translation Plaque */}
      <div className="text-center py-5 px-6 bg-[#FFFFFF] dark:bg-[#0C0B0A] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] shadow-sm space-y-2">
        <span className="text-[11px] font-english-bold uppercase tracking-wider text-neutral-400">
          Target English Meaning
        </span>
        <h3 className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          "{currentChallenge.enPrompt}"
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Arrange the Arabic word tokens below into correct syntactic word order.
        </p>
      </div>

      {/* Assembly Magnetic Tray */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
          <span className="font-english-semibold">Sentence Construction Tray:</span>
          <span>{selectedWords.length} / {totalSlots} tokens placed</span>
        </div>

        <div
          className={`min-h-[105px] p-5 sm:p-6 rounded-2xl border-2 transition-all flex flex-wrap items-center justify-center gap-3 relative shadow-inner ${
            isEvaluated
              ? isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-900 dark:text-emerald-100'
                : 'bg-red-500/10 border-red-500/40 text-red-900 dark:text-red-100'
              : selectedWords.length > 0
                ? 'bg-[#FFFFFF] dark:bg-[#0C0B0A] border-[#C8BFB0] dark:border-[#3D372F]'
                : 'bg-[#F2ECE1]/60 dark:bg-[#181613] border-dashed border-[#DDD5C5] dark:border-[#2D2821]'
          }`}
          dir="rtl"
        >
          <AnimatePresence>
            {selectedWords.length === 0 ? (
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-english select-none" dir="ltr">
                Tap the Arabic word blocks below in order to place them on the tray
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
                  className="px-5 py-3 rounded-xl bg-[#1C1917] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#1C1917] font-arabic text-3xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer select-none border border-black/10 dark:border-white/10"
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
          Available Tokens:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-[#F2ECE1]/50 dark:bg-[#181613] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822]" dir="rtl">
          {availableWords.length === 0 ? (
            <span className="text-xs text-neutral-400 font-english italic py-2" dir="ltr">
              All tokens placed on tray. Click "Check Word Order" below.
            </span>
          ) : (
            availableWords.map((word, idx) => (
              <button
                key={`available-${word}-${idx}`}
                onClick={() => handleSelectWord(word, idx)}
                disabled={isEvaluated}
                className="px-5 py-3 rounded-xl bg-[#FFFFFF] dark:bg-[#201D19] text-neutral-900 dark:text-neutral-100 font-arabic text-3xl border border-[#DFD8CC] dark:border-[#38332A] shadow-sm hover:border-neutral-400 dark:hover:border-neutral-500 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
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
          className={`p-4 sm:p-5 rounded-2xl border text-sm ${
            isCorrect
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-100'
          }`}
        >
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2 font-english-bold text-sm">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Syntactic Order Verified · أَحْسَنْتَ! (+25 XP)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Grammar Review: Check sequence</span>
                </>
              )}
            </div>

            <button
              onClick={() => playAudio(currentChallenge.arSentence)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-black/30 text-xs font-english-semibold hover:bg-white dark:hover:bg-black/50 transition-colors cursor-pointer border border-black/10 dark:border-white/10"
              title="Listen to full correct Arabic sentence"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Pronounce Sentence</span>
            </button>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {currentChallenge.explanation}
          </p>
        </motion.div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-[#E7E2D9] dark:border-[#26231E]">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors text-xs font-english-bold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Tray</span>
        </button>

        {!isEvaluated ? (
          <button
            onClick={handleCheck}
            disabled={selectedWords.length === 0}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-xs shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-95"
          >
            <span>Verify Syntax</span>
            <Check className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-xs shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>{currentIndex < challenges.length - 1 ? 'Next Sentence' : 'Finish Module'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
