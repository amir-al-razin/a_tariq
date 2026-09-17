import React, { useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { ArrowLeft, Play, Check } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'
import { useRetentionStore } from '../../state/retentionStore'
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
  const [isRunningSession, setIsRunningSession] = useState(false)

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

  // If in interactive session, render the runner
  if (isRunningSession) {
    return (
      <LessonSessionRunner
        volumeId={volumeId}
        chapterId={chapterId}
        lessonNum={darsNum}
        onExit={() => setIsRunningSession(false)}
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
              {isCompleted ? 'Mastered Lesson' : 'Interactive Session'}
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
                Key Vocabulary Covered
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

          {/* 56px Action Button */}
          <button
            type="button"
            onClick={() => {
              playTapSound()
              setIsRunningSession(true)
            }}
            className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
          >
            <Play size={18} className="fill-white" />
            <span>{isCompleted ? 'Practice Again' : 'Start Interactive Session'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
