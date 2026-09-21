import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { ArrowLeft, Play, Check, RotateCcw, BookmarkCheck, Lock } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'
import { ComprehensionCheckModal } from '../comprehension/ComprehensionCheckModal'
import { RewardCelebrationModal } from '../gamification/RewardCelebrationModal'
import { useRetentionStore } from '../../state/retentionStore'
import { useLessonCheckpointStore } from '../../state/lessonCheckpointStore'
import { useLanguage } from '../../hooks/useLanguage'
import { LessonSessionRunner } from '../runner/LessonSessionRunner'
import { getLessonSession } from '../../lib/lessonRegistry'
import TransliterationToggle from '../TransliterationToggle'
import { playTapSound } from '../../lib/sound'

type Props = {
  volumeId: 1 | 2 | 3
  chapterId: number
  darsNum: number
}

// Convert English numbers to Arabic-Indic digits
function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return n.toString().split('').map(d => digits[parseInt(d, 10)] || d).join('')
}

export const LessonScreen: React.FC<Props> = ({ volumeId, chapterId, darsNum }) => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const [showComprehensionModal, setShowComprehensionModal] = useState(false)

  const initialStepParam = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('step') : null
  const initialStepIndex = initialStepParam !== null ? parseInt(initialStepParam, 10) : undefined

  const checkpoint = useLessonCheckpointStore((state) =>
    state.getCheckpoint(volumeId, chapterId, darsNum)
  )
  const clearCheckpoint = useLessonCheckpointStore((state) => state.clearCheckpoint)

  const [activeStepIndex, setActiveStepIndex] = useState<number | undefined>(initialStepIndex)
  const [isRunningSession, setIsRunningSession] = useState(() => initialStepIndex !== undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stepParam = new URLSearchParams(window.location.search).get('step')
      if (stepParam !== null) {
        const idx = parseInt(stepParam, 10)
        if (!isNaN(idx)) {
          setActiveStepIndex(idx)
          setIsRunningSession(true)
        }
      }
    }
  }, [])

  const progressStore = useProgressStore((state) => state.progress)
  const sessions = useRetentionStore((state) => state.sessions)

  const dataMap = {
    1: CHAPTERS,
    2: CHAPTERS_VOL2,
    3: CHAPTERS_VOL3,
  }

  const chapters = dataMap[volumeId]
  const chapter = useMemo(() => chapters.find((c) => c.id === chapterId), [chapters, chapterId])
  const lesson = useMemo(() => chapter?.lessons.find((l) => l.darsNumber === darsNum), [chapter, darsNum])

  const registeredSession = useMemo(() => {
    return getLessonSession(volumeId, chapterId, darsNum)
  }, [volumeId, chapterId, darsNum])

  const isCompleted = useMemo(() => {
    const hasSession = sessions.some(
      (s) => s.volumeId === volumeId && s.chapterId === chapterId && s.lessonNum === darsNum
    )
    if (hasSession) return true
    return progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}`] === 'completed'
  }, [sessions, progressStore, volumeId, chapterId, darsNum])

  const hasCheckpoint = Boolean(
    checkpoint &&
    checkpoint.currentStepIndex > 0 &&
    registeredSession &&
    checkpoint.currentStepIndex < registeredSession.steps.length
  )

  // If in interactive session, render the runner
  if (isRunningSession) {
    return (
      <LessonSessionRunner
        volumeId={volumeId}
        chapterId={chapterId}
        lessonNum={darsNum}
        initialStepIndex={activeStepIndex}
        onExit={() => {
          setActiveStepIndex(undefined)
          setIsRunningSession(false)
        }}
      />
    )
  }

  if (!chapter || !lesson) {
    return <div className="p-4 text-center">Lesson not found</div>
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-neutral-950 pb-20 pt-7 font-english">
      {/* Top Header */}
      <div className="px-5 mb-8 max-w-[600px] mx-auto w-full flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            navigate({
              to: '/volume/$volumeId',
              params: { volumeId: volumeId as any },
            })
          }}
          className="p-2 -ml-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer border-0 shadow-none text-neutral-800 dark:text-neutral-200"
          aria-label="Go back to volume"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="flex-1 text-center font-english-semibold text-[17px] text-neutral-900 dark:text-neutral-100">
          Lesson {darsNum} · {chapter.titleEn}
        </div>
        <div className="flex items-center gap-2">
          <TransliterationToggle compact />
        </div>
      </div>
      {/* Interactive Comprehension Check Action */}
      <div className="flex items-center justify-center gap-2 mb-6 px-4">
        <button
          type="button"
          onClick={() => setShowComprehensionModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-english-bold transition-all shadow-sm cursor-pointer border-0"
        >
          <span className="font-arabic text-sm" dir="rtl">هَلْ فَهِمْتَ؟</span>
          <span>{isBn ? 'বোঝার পরীক্ষা' : 'Check Understanding'}</span>
        </button>
      </div>

      {/* Main Single-Focus Launch Stage */}
      <div className="flex-1 flex items-center justify-center px-4 w-full max-w-md mx-auto">
        <div className="w-full rounded-4xl bg-neutral-100 dark:bg-neutral-900 p-8 sm:p-10 flex flex-col items-center text-center space-y-6">
          {/* Central Commanding Lesson Node */}
          <div className="relative flex items-center justify-center">
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all shadow-none border-0 select-none ${
                isCompleted
                  ? 'bg-accent-primary-subtle text-accent-primary dark:bg-neutral-800'
                  : 'bg-accent-primary text-white ring-8 ring-accent-primary/20'
              }`}
            >
              {isCompleted ? (
                <div className="flex flex-col items-center">
                  <Check size={36} className="stroke-[3]" />
                  <span className="text-xs font-mono font-bold mt-1 opacity-80">
                    {toArabicNumerals(darsNum)}
                  </span>
                </div>
              ) : (
                <span className="font-arabic-bold text-5xl leading-none" dir="rtl">
                  {toArabicNumerals(darsNum)}
                </span>
              )}
            </div>
          </div>

          {/* Titles & Pedagogical Concepts */}
          <div className="space-y-1.5 w-full">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold block">
              {hasCheckpoint
                ? (isCompleted
                  ? (isBn ? 'অনুশীলন চলমান' : 'Practice in Progress')
                  : (isBn ? 'সংরক্ষিত অগ্রগতি' : 'Lesson in Progress'))
                : (isCompleted
                  ? (isBn ? 'সম্পন্ন পাঠ' : 'Mastered Lesson')
                  : (isBn ? 'ইন্টারেক্টিভ সেশন' : 'Interactive Session'))}
            </span>
            <h2 className="font-arabic-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white" dir="rtl">
              {registeredSession?.titleAr || `الدَّرْسُ ${toArabicNumerals(darsNum)}`}
            </h2>
            <h3 className="font-english-semibold text-lg text-neutral-700 dark:text-neutral-200">
              {registeredSession?.titleEn || `Lesson ${darsNum}`}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto pt-1">
              {registeredSession?.steps.length || 13} Micro-Steps · 100% Mastery Drill
            </p>
          </div>

          {/* Words Preview Pills */}
          {registeredSession?.wordsLearned && registeredSession.wordsLearned.length > 0 && (
            <div className="w-full pt-1">
              <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-2">
                {isBn ? 'মূল শব্দভাণ্ডার' : 'Key Vocabulary Covered'}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {registeredSession.wordsLearned.slice(0, 6).map((word, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 text-xs font-arabic text-neutral-800 dark:text-neutral-200"
                    dir="rtl"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* In-Progress Checkpoint Status Banner */}
          {hasCheckpoint && checkpoint && (
            <div className="w-full p-4 rounded-3xl bg-accent-primary-subtle text-accent-primary flex flex-col gap-2 text-left">
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <BookmarkCheck size={14} />
                  <span>
                    {isCompleted
                      ? (isBn ? 'অনুশীলন সংরক্ষিত' : 'Practice Saved')
                      : (isBn ? 'সংরক্ষিত অগ্রগতি' : 'Progress Saved')}
                  </span>
                </span>
                <span>
                  {isBn
                    ? `ধাপ ${toArabicNumerals(checkpoint.currentStepIndex + 1)} / ${toArabicNumerals(checkpoint.totalSteps)}`
                    : `Step ${checkpoint.currentStepIndex + 1} of ${checkpoint.totalSteps}`}
                </span>
              </div>
              <div className="w-full h-1.5 bg-accent-primary/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-primary rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, Math.round(((checkpoint.currentStepIndex) / checkpoint.totalSteps) * 100))}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Action Buttons: Dual (Resume + Restart) vs Single */}
          {!registeredSession ? (
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-2 text-sm font-medium text-center">
                <Lock size={16} />
                <span>
                  {isBn
                    ? 'এই পাঠটির ইন্টারেক্টিভ সেশন বর্তমানে প্রস্তুত হচ্ছে।'
                    : 'This interactive lesson session is currently in development.'}
                </span>
              </div>
              <button
                type="button"
                disabled
                className="w-full h-14 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 font-english-semibold text-base flex items-center justify-center gap-3 cursor-not-allowed shadow-none border-0"
              >
                <Lock size={18} />
                <span>
                  {isBn ? 'শীঘ্রই আসছে' : 'Coming Soon'}
                </span>
              </button>
            </div>
          ) : hasCheckpoint && checkpoint ? (
            <div className="w-full flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  playTapSound()
                  setActiveStepIndex(checkpoint.currentStepIndex)
                  setIsRunningSession(true)
                }}
                className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
              >
                <Play size={18} className="fill-white" />
                <span>
                  {isCompleted
                    ? (isBn
                      ? `অনুশীলন চালিয়ে যান (ধাপ ${toArabicNumerals(checkpoint.currentStepIndex + 1)})`
                      : `Resume Practice (Step ${checkpoint.currentStepIndex + 1})`)
                    : (isBn
                      ? `পাঠ চালিয়ে যান (ধাপ ${toArabicNumerals(checkpoint.currentStepIndex + 1)})`
                      : `Resume Lesson (Step ${checkpoint.currentStepIndex + 1})`)}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playTapSound()
                  clearCheckpoint(volumeId, chapterId, darsNum)
                  setActiveStepIndex(0)
                  setIsRunningSession(true)
                }}
                className="w-full h-14 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
              >
                <RotateCcw size={18} />
                <span>
                  {isCompleted
                    ? (isBn ? 'শুরু থেকে অনুশীলন করুন' : 'Restart Practice')
                    : (isBn ? 'শুরু থেকে শুরু করুন' : 'Start from Beginning')}
                </span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                playTapSound()
                setActiveStepIndex(0)
                setIsRunningSession(true)
              }}
              className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
            >
              <Play size={18} className="fill-white" />
              <span>
                {isCompleted
                  ? (isBn ? 'আবার অনুশীলন করুন' : 'Practice Again')
                  : (isBn ? 'ইন্টারেক্টিভ সেশন শুরু করুন' : 'Start Interactive Session')}
              </span>
            </button>
          )}
        </div>
      </div>

      <RewardCelebrationModal />

      <ComprehensionCheckModal
        isOpen={showComprehensionModal}
        onClose={() => setShowComprehensionModal(false)}
        darsNum={darsNum}
        volumeId={volumeId}
        chapterId={chapterId}
        chunks={lesson.chunks.map((c) => ({ id: c.id, titleEn: c.titleEn, titleAr: c.titleAr }))}
        onRedirectToChunk={(_targetChunkId) => {
          setShowComprehensionModal(false)
          setActiveStepIndex(0)
          setIsRunningSession(true)
        }}
        onLessonMastered={() => {
          setShowComprehensionModal(false)
        }}
      />
    </div>
  )
}
