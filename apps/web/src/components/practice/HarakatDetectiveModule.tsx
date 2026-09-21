import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight, Check, AlertCircle, BookOpen } from 'lucide-react'
import confetti from '../../lib/confetti'
import type { HarakatChallenge } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'
import { useLanguage } from '../../hooks/useLanguage'

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
  const { language } = useLanguage()
  const isBn = language === 'bn'

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
      setCurrentIndex((prev) => prev + 1)
      setSelectedIndex(null)
      setIsEvaluated(false)
    } else {
      if (onFinish) onFinish()
    }
  }

  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-4xl p-6 sm:p-10 border-0 shadow-none font-english space-y-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-accent-primary flex items-center justify-center border-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500">
                {isBn ? 'হরকত ও ব্যাকরণ বিশ্লেষণ' : "I'rab & Vowel Case Detection"}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-english-bold border-0">
                +30 XP
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              {isBn ? 'সঠিক শেষ হরকত নির্বাচন করুন' : 'Grammatical Role & Harakat Investigation'}
            </h2>
          </div>
        </div>

        <span className="text-xs font-english-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">
          {currentIndex + 1} / {challenges.length}
        </span>
      </div>

      {/* Target Sentence Plaque with Missing Diacritic Blank */}
      <div className="text-center py-8 px-6 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border-0 shadow-none space-y-4">
        <div className="text-4xl sm:text-5xl font-arabic text-neutral-900 dark:text-neutral-50 leading-relaxed py-2" dir="rtl">
          {current.sentenceWithBlank.split('___').map((part, i) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i === 0 && (
                <span className="inline-flex items-center justify-center px-4 py-1 mx-2 bg-accent-primary/10 rounded-2xl text-accent-primary font-arabic text-3xl animate-pulse">
                  {selectedIndex !== null ? current.options[selectedIndex].text : '...؟...'}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pt-2 border-0">
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400 italic">
            "{current.translationEn}"
          </p>
        </div>
      </div>

      {/* Diacritic Seal Stamp Options */}
      <div className="space-y-3">
        <span className="text-xs font-english-semibold text-neutral-500 px-1">
          {isBn ? 'সঠিক ব্যাকরণগত বিভক্তি হরকতটি নির্বাচন করুন:' : "Select the grammatically accurate case ending (I'rab):"}
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
                className={`p-5 rounded-3xl border-0 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 relative shadow-none ${
                  showCorrect
                    ? 'bg-emerald-500/15 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/40'
                    : showWrong
                      ? 'bg-rose-500/15 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/40'
                      : 'bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                }`}
              >
                <span className="font-arabic text-4xl text-neutral-900 dark:text-neutral-50" dir="rtl">
                  {option.text}
                </span>
                <span className="text-xs font-english-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {option.caseName}
                </span>

                {showCorrect && (
                  <span className="absolute top-3 right-3 text-emerald-600 dark:text-emerald-400">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                )}
                {showWrong && (
                  <span className="absolute top-3 right-3 text-rose-600 dark:text-rose-400">
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
          className={`p-5 rounded-3xl border-0 text-sm shadow-none ${
            current.options[selectedIndex!].isCorrect
              ? 'bg-emerald-500/10 text-emerald-950 dark:text-emerald-100'
              : 'bg-amber-500/10 text-amber-950 dark:text-amber-100'
          }`}
        >
          <div className="flex items-center gap-2 font-english-bold text-sm mb-1.5">
            <BookOpen className="w-4 h-4 text-accent-primary" />
            <span>{isBn ? 'ব্যাকরণগত নিয়ম · قَاعِدَةُ الإِعْرَابِ:' : "Classical I'rab Rule · قَاعِدَةُ الإِعْرَابِ:"}</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {current.pedagogicalGrammarRule}
          </p>
        </motion.div>
      )}

      {/* Single 56px Action Button */}
      {isEvaluated && (
        <div className="flex justify-end pt-4 border-0">
          <button
            onClick={handleNext}
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] border-0 shadow-none cursor-pointer"
          >
            <span>{currentIndex < challenges.length - 1 ? (isBn ? 'পরবর্তী প্রশ্ন' : 'Next Question') : (isBn ? 'অনুশীলন সম্পন্ন' : 'Finish Investigation')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
