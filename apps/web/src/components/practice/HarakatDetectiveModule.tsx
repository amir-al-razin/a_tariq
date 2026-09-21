import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight, Check, AlertCircle, BookOpen } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { HarakatChallenge } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'

interface HarakatDetectiveModuleProps {
  challenges: HarakatChallenge[]
  onFinish?: () => void
}

export const HarakatDetectiveModule: React.FC<HarakatDetectiveModuleProps> = ({
  challenges,
  onFinish,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isEvaluated, setIsEvaluated] = useState(false)

  const recordPracticeResult = useGamificationStore((s) => s.recordPracticeResult)
  const addXp = useGamificationStore((s) => s.addXp)

  const current = challenges[currentIndex]

  const handleSelectOption = (index: number) => {
    if (isEvaluated) return
    setSelectedIndex(index)
    setIsEvaluated(true)

    const isCorrect = current.options[index].isCorrect
    recordPracticeResult(isCorrect)

    if (isCorrect) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } })
      addXp(30, 'Harakat Detective Solved!')
    }
  }

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedIndex(null)
      setIsEvaluated(false)
    } else {
      if (onFinish) onFinish()
    }
  }

  return (
    <div className="w-full bg-[#FAF8F5] dark:bg-[#141311] rounded-3xl p-6 sm:p-10 border border-[#E7E2D9] dark:border-[#26231E] shadow-xl font-english space-y-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E7E2D9] dark:border-[#26231E] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#F0ECE1] dark:bg-[#201D18] border border-[#DDD6C8] dark:border-[#332E27] text-teal-800 dark:text-teal-300 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500">
                I'rab & Vowel Case Detection · مُحَقِّقُ الإِعْرَابِ
              </span>
              <span className="px-2 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-700 dark:text-teal-400 text-[10px] font-english-bold">
                +30 XP
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              Grammatical Role & Harakat Investigation
            </h2>
          </div>
        </div>

        <span className="text-xs font-english-bold px-3 py-1 rounded-full bg-[#EFEAE0] dark:bg-[#201D19] border border-[#DDD6C8] dark:border-[#332E27] text-neutral-700 dark:text-neutral-300">
          {currentIndex + 1} of {challenges.length}
        </span>
      </div>

      {/* Target Sentence Plaque with Missing Diacritic Blank */}
      <div className="text-center py-8 px-6 bg-[#FFFFFF] dark:bg-[#0C0B0A] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] shadow-sm space-y-4">
        <div className="text-4xl sm:text-5xl font-arabic text-neutral-900 dark:text-neutral-50 leading-relaxed py-2" dir="rtl">
          {current.sentenceWithBlank.split('___').map((part, i) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i === 0 && (
                <span className="inline-flex items-center justify-center px-4 py-1 mx-2 border-b-2 border-teal-600 dark:border-teal-400 bg-teal-500/10 rounded-lg text-teal-800 dark:text-teal-300 font-arabic text-3xl animate-pulse">
                  {selectedIndex !== null ? current.options[selectedIndex].text : '...؟...'}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pt-2 border-t border-[#F0ECE1] dark:border-[#1E1B17]">
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400 italic">
            "{current.translationEn}"
          </p>
        </div>
      </div>

      {/* Diacritic Seal Stamp Options */}
      <div className="space-y-3">
        <span className="text-xs font-english-semibold text-neutral-500 px-1">
          Select the grammatically accurate case ending (I'rab):
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {current.options.map((option, idx) => {
            const isSelected = selectedIndex === idx
            const showCorrect = isEvaluated && option.isCorrect
            const showWrong = isEvaluated && isSelected && !option.isCorrect

            return (
              <motion.button
                key={idx}
                whileTap={{ scale: isEvaluated ? 1 : 0.98 }}
                onClick={() => handleSelectOption(idx)}
                disabled={isEvaluated}
                className={`p-5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 relative shadow-sm ${
                  showCorrect
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/40'
                    : showWrong
                      ? 'bg-red-500/15 border-red-500 text-red-950 dark:text-red-100 ring-2 ring-red-500/40'
                      : 'bg-[#FFFFFF] dark:bg-[#1E1B17] hover:border-neutral-400 dark:hover:border-neutral-500 border-[#DFD8CC] dark:border-[#2C2822]'
                }`}
              >
                <span className="font-arabic text-4xl text-neutral-900 dark:text-neutral-50" dir="rtl">
                  {option.text}
                </span>
                <span className="text-xs font-english-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-300">
                  {option.caseName}
                </span>

                {showCorrect && (
                  <span className="absolute top-3 right-3 text-emerald-600 dark:text-emerald-400">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                )}
                {showWrong && (
                  <span className="absolute top-3 right-3 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 stroke-[3]" />
                  </span>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Pedagogical Grammar Explanation */}
      {isEvaluated && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-2xl border text-sm ${
            current.options[selectedIndex!].isCorrect
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-100'
          }`}
        >
          <div className="flex items-center gap-2 font-english-bold text-sm mb-1.5">
            <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Classical I'rab Rule · قَاعِدَةُ الإِعْرَابِ:</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {current.pedagogicalGrammarRule}
          </p>
        </motion.div>
      )}

      {/* Actions */}
      {isEvaluated && (
        <div className="flex justify-end pt-4 border-t border-[#E7E2D9] dark:border-[#26231E]">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-xs shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>{currentIndex < challenges.length - 1 ? 'Next Question' : 'Finish Investigation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
