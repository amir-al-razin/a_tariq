import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Lightbulb,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import {
  generateSocraticExplanation,
  type ChunkExplanationGuide,
} from './comprehensionTutor'
import { useGamificationStore } from '../../state/gamificationStore'

interface ChunkItem {
  id: string
  titleEn: string
  titleAr: string
}

interface ComprehensionCheckModalProps {
  isOpen: boolean
  onClose: () => void
  darsNum: number
  volumeId: number
  chapterId: number
  chunks: ChunkItem[]
  onRedirectToChunk: (chunkId: string) => void
  onLessonMastered?: () => void
}

type Step = 'prompt' | 'which_part' | 'ai_explanation'

export const ComprehensionCheckModal: React.FC<ComprehensionCheckModalProps> = ({
  isOpen,
  onClose,
  darsNum,
  volumeId: _volumeId,
  chapterId: _chapterId,
  chunks,
  onRedirectToChunk,
  onLessonMastered,
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('prompt')
  const [selectedChunk, setSelectedChunk] = useState<ChunkItem | null>(null)
  const [customQuestion, setCustomQuestion] = useState('')
  const [explanation, setExplanation] = useState<ChunkExplanationGuide | null>(null)

  useEffect(() => {
    if (isOpen) {
      setCurrentStep('prompt')
      setSelectedChunk(null)
      setCustomQuestion('')
      setExplanation(null)
    }
  }, [isOpen])

  const recordComprehensionCheck = useGamificationStore((s) => s.recordComprehensionCheck)
  const addXp = useGamificationStore((s) => s.addXp)

  if (!isOpen) return null

  const handleUnderstoodYes = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    recordComprehensionCheck(true)
    addXp(50, `Lesson ${darsNum} Comprehension Mastered!`)
    if (onLessonMastered) onLessonMastered()
    onClose()
  }

  const handleUnderstoodNo = () => {
    setCurrentStep('which_part')
  }

  const handleSelectPart = (chunk: ChunkItem) => {
    setSelectedChunk(chunk)
    const guide = generateSocraticExplanation(chunk.titleEn, customQuestion)
    setExplanation(guide)
    setCurrentStep('ai_explanation')
  }

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customQuestion.trim()) return
    const guide = generateSocraticExplanation(selectedChunk?.titleEn || 'General Grammar', customQuestion)
    setExplanation(guide)
    setCurrentStep('ai_explanation')
  }

  const handleRestart = () => {
    setCurrentStep('prompt')
    setSelectedChunk(null)
    setCustomQuestion('')
    setExplanation(null)
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm font-english">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200/80 dark:border-neutral-700/80 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* STEP 1: Hal Fahimta? (Did you understand?) */}
          {currentStep === 'prompt' && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-3xl shadow-inner">
                <HelpCircle className="w-8 h-8" />
              </div>

              <div>
                <div className="flex items-center justify-center gap-1.5 text-xs font-english-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Comprehension Check · Lesson {darsNum}</span>
                </div>

                <h2 className="text-3xl font-arabic text-neutral-900 dark:text-neutral-50 mb-1" dir="rtl">
                  هَلْ فَهِمْتَ الدَّرْسَ؟
                </h2>
                <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-300">
                  Did you understand the lesson and its core rules?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {/* YES (Na'am, fahimtu) */}
                <button
                  onClick={handleUnderstoodYes}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-english-bold text-sm shadow-md flex flex-col items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <span className="font-arabic text-lg leading-tight" dir="rtl">
                    نَعَمْ، فَهِمْتُ
                  </span>
                  <span className="text-xs opacity-90 font-english">
                    Yes, I understood! (+50 XP)
                  </span>
                </button>

                {/* NO (La, ma fahimtu) */}
                <button
                  onClick={handleUnderstoodNo}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-2xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-english-bold text-sm flex flex-col items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <span className="font-arabic text-lg leading-tight" dir="rtl">
                    لَا، مَا فَهِمْتُ
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-english">
                    No, I need help
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Ayyu Juz'in? (Which part?) */}
          {currentStep === 'which_part' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-english-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                  <Lightbulb className="w-4 h-4" />
                  <span>Targeted Pedagogy</span>
                </div>

                <h2 className="text-3xl font-arabic text-neutral-900 dark:text-neutral-50 mb-1" dir="rtl">
                  أَيُّ جُزْءٍ لَمْ تَفْهَمْهُ؟
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Which part did you find challenging? Select a section below:
                </p>
              </div>

              {/* Chunk Options List */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {chunks.map((chunk) => (
                  <button
                    key={chunk.id}
                    onClick={() => handleSelectPart(chunk)}
                    className="w-full p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800/60 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-between text-left transition-all cursor-pointer group"
                  >
                    <div>
                      <h4 className="font-english-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {chunk.titleEn}
                      </h4>
                      <span className="font-arabic text-xs text-neutral-500" dir="rtl">
                        {chunk.titleAr}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>

              {/* Freeform Question Form */}
              <form onSubmit={handleAskQuestion} className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <label className="block text-xs font-english-bold text-neutral-600 dark:text-neutral-400">
                  Or ask a specific question:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="e.g. Why does this end with kasrah?"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/60 text-xs font-english-medium text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    disabled={!customQuestion.trim()}
                    className="px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-english-bold text-xs disabled:opacity-40 transition-all cursor-pointer"
                  >
                    Ask AI
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: Targeted Socratic AI Explanation & Redirect */}
          {currentStep === 'ai_explanation' && explanation && (
            <div className="space-y-5 animate-in fade-in">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-english-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Socratic Pedagogical Assistant</span>
                </div>
                <h3 className="text-xl font-english-bold text-neutral-900 dark:text-neutral-50">
                  {selectedChunk?.titleEn || 'Intuition Breakdown'}
                </h3>
              </div>

              {/* Intuition Card */}
              <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/40 text-xs space-y-2">
                <span className="font-english-bold text-teal-800 dark:text-teal-300 block">
                  💡 The Mental Model:
                </span>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {explanation.coreIntuition}
                </p>
              </div>

              {/* Analogy Card */}
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-700/60 text-xs space-y-1">
                <span className="font-english-bold text-neutral-800 dark:text-neutral-200 block">
                  🔍 Visual Analogy:
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                  "{explanation.analogy}"
                </p>
              </div>

              {/* Common Pitfall & Socratic Hint */}
              <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/30 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-english-bold text-amber-800 dark:text-amber-300">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Think about this:</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {explanation.socraticHint}
                </p>
              </div>

              {/* Action Buttons: Redirect to Chunk or Finish */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                {selectedChunk && (
                  <button
                    onClick={() => {
                      onRedirectToChunk(selectedChunk.id)
                      onClose()
                    }}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-english-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Review This Part Now</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    handleUnderstoodYes()
                  }}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-english-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>I Understand Now!</span>
                </button>

                <button
                  onClick={handleRestart}
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  title="Back to start"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}
