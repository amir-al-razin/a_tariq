import React, { useMemo, useState } from 'react'
import { Check, Trophy, ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import * as m from '#/paraglide/messages.js'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'
import { useRetentionStore } from '../../state/retentionStore'
import { ProgressRing } from './ProgressRing'
import { getLessonSession } from '../../lib/lessonRegistry'
import { LessonSessionRunner } from '../runner/LessonSessionRunner'
import { playTapSound } from '../../lib/sound'

type Props = {
  volumeId: 1 | 2 | 3
}

// Convert English numbers to Arabic-Indic digits
function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return n.toString().split('').map(d => digits[parseInt(d, 10)] || d).join('')
}

// Rich pedagogical metadata for Volume 1 Chapter 1 lessons
const CHAPTER_1_LESSONS_INFO: Record<number, { titleEn: string; titleAr: string; conceptEn: string }> = {
  1: { titleEn: 'The Demonstrative: This', titleAr: 'الدَّرْسُ الأَوَّلُ · هَٰذَا', conceptEn: 'Masculine nouns, pointing near' },
  2: { titleEn: 'The Far Demonstrative: That', titleAr: 'الدَّرْسُ الثَّانِي · ذَٰلِكَ', conceptEn: 'Masculine nouns, pointing far' },
  3: { titleEn: 'Interrogatives: What & Who', titleAr: 'الدَّرْسُ الثَّالِثُ · مَا وَمَنْ', conceptEn: 'Questions with مَا and مَنْ' },
  4: { titleEn: 'Questions & Sun Letters', titleAr: 'الدَّرْسُ الرَّابِعُ · أَ وَالشَّمْسِيَّةُ', conceptEn: 'Particle أَ & Sun/Moon phonetics' },
  5: { titleEn: 'Feminine Demonstratives', titleAr: 'الدَّرْسُ الخَامِسُ · هَٰذِهِ وَتِلْكَ', conceptEn: 'Ta-Marbutah & feminine pointing' },
  6: { titleEn: 'The Definite Article', titleAr: 'الدَّرْسُ السَّادِسُ · أَلْ', conceptEn: 'Tanween drops with Alif-Lam' },
  7: { titleEn: 'The Possession Formula', titleAr: 'الدَّرْسُ السَّابِعُ · الإِضَافَةُ', conceptEn: 'Idafah: Mudaf & Mudaf Ilayh' },
  8: { titleEn: 'The Preposition In', titleAr: 'الدَّرْسُ الثَّامِنُ · فِي', conceptEn: 'Kasrah shift after Harf Jarr فِي' },
  9: { titleEn: 'Locatives & Prepositions', titleAr: 'الدَّرْسُ التَّاسِعُ · عِنْدَ وَمَعَ', conceptEn: 'Adverbs عِنْدَ, مَعَ, and preposition لِـ' },
}

// Sinusoidal meandering offsets for the vertical journey path (repeats rhythmically)
const SINE_OFFSETS = [0, 56, 84, 56, 0, -56, -84, -56, 0]
const ROW_HEIGHT = 176
const CONTAINER_WIDTH = 380

export const VolumeScreen: React.FC<Props> = ({ volumeId }) => {
  const progressStore = useProgressStore((state) => state.progress)
  const sessions = useRetentionStore((state) => state.sessions)

  // Selected node for modal launchpad
  const [selectedNodeLesson, setSelectedNodeLesson] = useState<{ chapterId: number; darsNum: number } | null>(null)

  // Active interactive session runner (in-place modal execution)
  const [activeSessionLesson, setActiveSessionLesson] = useState<{ chapterId: number; darsNum: number } | null>(null)

  const dataMap = {
    1: CHAPTERS,
    2: CHAPTERS_VOL2,
    3: CHAPTERS_VOL3,
  }

  const titleMap = {
    1: m['volume.vol1Title'],
    2: m['volume.vol2Title'],
    3: m['volume.vol3Title'],
  }

  const metaMap = {
    1: m['volume.vol1Meta'],
    2: m['volume.vol2Meta'],
    3: m['volume.vol3Meta'],
  }

  const endMap = {
    1: m['volume.vol1End'],
    2: m['volume.vol2End'],
    3: m['volume.vol3End'],
  }

  const arTitleMap = {
    1: 'الجزء الأول',
    2: 'الجزء الثاني',
    3: 'الجزء الثالث',
  }

  const chapters = dataMap[volumeId]

  // Check if a specific lesson is completed (via RetentionStore session record or ProgressStore)
  const isLessonCompleted = (chapterId: number, darsNum: number) => {
    const hasSession = sessions.some(
      (s) => s.volumeId === volumeId && s.chapterId === chapterId && s.lessonNum === darsNum
    )
    if (hasSession) return true
    return progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}`] === 'completed'
  }

  // Calculate volume-wide lesson progress
  const { totalLessons, completedLessons } = useMemo(() => {
    let total = 0
    let completed = 0
    chapters.forEach((ch) => {
      ch.lessons.forEach((l) => {
        total++
        if (isLessonCompleted(ch.id, l.darsNumber)) {
          completed++
        }
      })
    })
    return { totalLessons: total, completedLessons: completed }
  }, [chapters, sessions, progressStore, volumeId])

  const volumeProgress = totalLessons === 0 ? 0 : completedLessons / totalLessons

  const getMessage = (_key: string, fnMap: Record<number, any>, fallback: string) => {
    const fn = fnMap[volumeId]
    return fn ? fn() : fallback
  }

  // Find current active lesson along the curriculum path
  const nextLessonInfo = useMemo(() => {
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        if (!isLessonCompleted(chapter.id, lesson.darsNumber)) {
          return { chapterId: chapter.id, darsNum: lesson.darsNumber }
        }
      }
    }
    return { chapterId: chapters[0].id, darsNum: chapters[0].lessons[0].darsNumber }
  }, [chapters, sessions, progressStore, volumeId])

  // In-place Fullscreen Interactive Session Runner
  if (activeSessionLesson) {
    return (
      <LessonSessionRunner
        volumeId={volumeId}
        chapterId={activeSessionLesson.chapterId}
        lessonNum={activeSessionLesson.darsNum}
        onExit={() => setActiveSessionLesson(null)}
      />
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-neutral-950 pb-28 font-english">
      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 flex flex-col gap-8">
        
        {/* Top Volume Hero Banner - Raw Neutral Plane Architecture */}
        <div className="rounded-4xl relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between p-7 sm:p-8 mt-6">
          <div className="flex flex-col gap-1.5 z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
              Pedagogical Curriculum
            </span>
            <h1 className="font-english-bold text-3xl sm:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100">
              {getMessage(`volume_vol${volumeId}title1`, titleMap, `Volume ${volumeId}`)}
            </h1>
            <p className="font-english text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
              {completedLessons} of {totalLessons} Lessons Mastered · {getMessage(`volume_vol${volumeId}meta1`, metaMap, 'Chapters · Lessons')}
            </p>
          </div>

          <div className="w-20 h-20 sm:w-22 sm:h-22 z-10 shrink-0">
            <ProgressRing progress={volumeProgress} size={80} color="var(--accent-primary)" />
          </div>

          {/* Majestic Watermark */}
          <div className="absolute right-[-30px] top-[-40px] opacity-5 dark:opacity-[0.03] pointer-events-none transform -rotate-12 select-none">
            <span className="font-mushaf text-[260px] leading-none text-neutral-900 dark:text-white">
              {arTitleMap[volumeId]}
            </span>
          </div>
        </div>

        {/* Chapters & Winding Journey Paths */}
        {chapters.map((chapter) => {
          const chapterCompletedCount = chapter.lessons.filter((l) =>
            isLessonCompleted(chapter.id, l.darsNumber)
          ).length

          return (
            <div key={chapter.id} className="flex flex-col items-center w-full">
              {/* Chapter Unit Card Header */}
              <div className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-7 flex items-center justify-between mb-12">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                    Chapter {chapter.id}
                  </span>
                  <h2 className="font-english-bold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
                    {chapter.titleEn}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    {chapter.subtitle}
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300">
                  {chapterCompletedCount} / {chapter.lessons.length}
                </span>
              </div>

              {/* Duolingo-Styled Serpentine Journey Path */}
              <div
                className="relative w-full flex flex-col items-center py-4"
                style={{
                  maxWidth: `${CONTAINER_WIDTH}px`,
                }}
              >
                {/* Nodes Stack */}
                <div className="w-full flex flex-col">
                  {chapter.lessons.map((lesson, idx) => {
                    const darsNum = lesson.darsNumber
                    const isCompleted = isLessonCompleted(chapter.id, darsNum)
                    const isCurrent =
                      nextLessonInfo.chapterId === chapter.id &&
                      nextLessonInfo.darsNum === darsNum &&
                      !isCompleted
                    const isFirst = idx === 0
                    const xOffset = SINE_OFFSETS[idx % SINE_OFFSETS.length]

                    return (
                      <div
                        key={darsNum}
                        className="relative flex items-center justify-center w-full"
                        style={{ height: ROW_HEIGHT }}
                      >
                        {/* Node Container Shifted by S-Curve Offset */}
                        <div
                          style={{ transform: `translateX(${xOffset}px)` }}
                          className="relative flex flex-col items-center"
                        >
                          {/* Pointing Beacon for Current Active Lesson */}
                          {isCurrent && (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: [0, -6, 0] }}
                              transition={{
                                opacity: { duration: 0.2 },
                                y: {
                                  duration: 1.2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                },
                              }}
                              className="absolute -top-11 z-30 flex flex-col items-center pointer-events-none select-none"
                            >
                              <div className="relative flex items-center justify-center filter drop-shadow-none">
                                {/* Unified 3D Speech Bubble SVG */}
                                <svg
                                  width={isFirst ? 76 : 88}
                                  height={36}
                                  viewBox={`0 0 ${isFirst ? 76 : 88} 36`}
                                  className="overflow-visible"
                                >
                                  {/* Base Pedestal (3D Bevel Layer shifted down 3px) */}
                                  <g transform="translate(0, 3)">
                                    <path
                                      d={
                                        isFirst
                                          ? 'M 10 0 H 66 A 10 10 0 0 1 76 10 V 16 A 10 10 0 0 1 66 26 H 44 L 38 32 L 32 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                          : 'M 10 0 H 78 A 10 10 0 0 1 88 10 V 16 A 10 10 0 0 1 78 26 H 50 L 44 32 L 38 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                      }
                                      className="fill-accent-secondary"
                                    />
                                    <path
                                      d={
                                        isFirst
                                          ? 'M 10 0 H 66 A 10 10 0 0 1 76 10 V 16 A 10 10 0 0 1 66 26 H 44 L 38 32 L 32 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                          : 'M 10 0 H 78 A 10 10 0 0 1 88 10 V 16 A 10 10 0 0 1 78 26 H 50 L 44 32 L 38 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                      }
                                      className="fill-black/25 dark:fill-black/35"
                                    />
                                  </g>

                                  {/* Top Face */}
                                  <path
                                    d={
                                      isFirst
                                        ? 'M 10 0 H 66 A 10 10 0 0 1 76 10 V 16 A 10 10 0 0 1 66 26 H 44 L 38 32 L 32 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                        : 'M 10 0 H 78 A 10 10 0 0 1 88 10 V 16 A 10 10 0 0 1 78 26 H 50 L 44 32 L 38 26 H 10 A 10 10 0 0 1 0 16 V 10 A 10 10 0 0 1 10 0 Z'
                                    }
                                    className="fill-accent-secondary"
                                  />
                                </svg>

                                {/* Label Text Centered on Top Face Bubble */}
                                <span className="absolute top-0 inset-x-0 h-[26px] flex items-center justify-center font-english font-extrabold text-[12px] tracking-wider uppercase leading-none text-white select-none">
                                  {isFirst ? 'START' : 'CURRENT'}
                                </span>
                              </div>
                            </motion.div>
                          )}

                          {/* 3D Circular Stepping Stone Button */}
                          <button
                            type="button"
                            onClick={() => {
                              playTapSound()
                              setSelectedNodeLesson({ chapterId: chapter.id, darsNum })
                            }}
                            className="group relative cursor-pointer border-0 p-0 bg-transparent select-none focus:outline-none transition-transform duration-150 hover:scale-[1.04]"
                            aria-label={`Lesson ${darsNum}`}
                          >
                            {/* Base Pedestal (3D Circular Bevel - Always Darker than Top Face) */}
                            <div
                              className={`w-20 h-20 rounded-full transition-all duration-150 relative overflow-hidden ${
                                isCurrent || isCompleted
                                  ? 'bg-accent-primary'
                                  : 'bg-neutral-300 dark:bg-neutral-900'
                              }`}
                              style={{ transform: 'translateY(6px)' }}
                            >
                              {(isCurrent || isCompleted) && (
                                <div className="w-full h-full bg-black/30 dark:bg-black/25 pointer-events-none" />
                              )}
                            </div>

                            {/* Raised Circular Top Face (Depresses on Tap) */}
                            <div
                              className={`absolute inset-0 w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-100 group-active:translate-y-1.5 ${
                                isCurrent || isCompleted
                                  ? 'bg-accent-primary hover:bg-accent-primary-hover text-white'
                                  : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-400 dark:text-neutral-500'
                              }`}
                            >
                              {isCompleted ? (
                                <Check size={32} className="stroke-[3.5] text-white" />
                              ) : (
                                <span className="font-english-bold text-3xl leading-none">
                                  {darsNum}
                                </span>
                              )}
                            </div>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Chapter Mastery Trophy Milestone */}
                <div className="pt-10 pb-8 flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-4xl bg-accent-secondary-subtle dark:bg-neutral-900 text-accent-secondary flex items-center justify-center">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-secondary font-bold block">
                      Chapter Completion
                    </span>
                    <h4 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
                      Foundations Mastery Milestone
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Selected Lesson Launchpad Modal (Level 3 Overlay) */}
        <AnimatePresence>
          {selectedNodeLesson && (() => {
            const chapter = chapters.find(c => c.id === selectedNodeLesson.chapterId)
            const lesson = chapter?.lessons.find(l => l.darsNumber === selectedNodeLesson.darsNum)
            if (!chapter || !lesson) return null

            const darsNum = lesson.darsNumber
            const isCompleted = isLessonCompleted(chapter.id, darsNum)
            const isCurrent =
              nextLessonInfo.chapterId === chapter.id &&
              nextLessonInfo.darsNum === darsNum &&
              !isCompleted
            const lessonMeta = (chapter.id === 1 ? CHAPTER_1_LESSONS_INFO[darsNum] : null) || {
              titleEn: `Lesson ${darsNum}`,
              titleAr: `الدرس ${toArabicNumerals(darsNum)}`,
              conceptEn: chapter.subtitle || 'Classical Arabic Drills',
            }
            const sessionData = getLessonSession(volumeId, chapter.id, darsNum)

            return (
              <div
                className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedNodeLesson(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-sm rounded-4xl bg-white dark:bg-neutral-900 p-6 sm:p-7 flex flex-col items-center text-center space-y-5 shadow-none border-0 select-auto"
                >
                  {/* Header with Close */}
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                      Lesson {darsNum} · {isCompleted ? 'Mastered' : isCurrent ? 'Up Next' : 'Available'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedNodeLesson(null)}
                      className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer shadow-none border-0"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Node Medallion (Tactile Circular 3D) */}
                  <div className="relative select-none my-2">
                    <div
                      className="w-20 h-20 rounded-full transition-all duration-150 relative overflow-hidden bg-accent-primary"
                      style={{ transform: 'translateY(6px)' }}
                    >
                      <div className="w-full h-full bg-black/30 dark:bg-black/25 pointer-events-none" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-accent-primary text-white flex items-center justify-center font-english-bold text-3xl">
                      {isCompleted ? <Check size={32} className="stroke-[3.5] text-white" /> : darsNum}
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="space-y-1">
                    <h3 className="font-arabic font-bold text-2xl text-neutral-900 dark:text-white" dir="rtl">
                      {lessonMeta.titleAr}
                    </h3>
                    <h4 className="font-english-bold text-base text-neutral-700 dark:text-neutral-200">
                      {lessonMeta.titleEn}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-0.5">
                      {lessonMeta.conceptEn}
                    </p>
                  </div>

                  {/* Badge Pill */}
                  <div className="w-full py-2.5 px-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500 dark:text-neutral-400">Mastery Target</span>
                    <span className="text-accent-primary font-bold">{sessionData?.steps.length || 13} Micro-Steps</span>
                  </div>

                  {/* 56px Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      playTapSound()
                      setSelectedNodeLesson(null)
                      setActiveSessionLesson({ chapterId: chapter.id, darsNum })
                    }}
                    className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-2 cursor-pointer shadow-none border-0 active:scale-[0.98] transition-all"
                  >
                    <span>{isCompleted ? 'Practice Again' : 'Start Interactive Session'}</span>
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              </div>
            )
          })()}
        </AnimatePresence>

        {/* Footer End of Part */}
        <div className="flex justify-center pt-8 pb-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="font-english text-[14px] text-neutral-400 dark:text-neutral-500">
              {getMessage(`volume_vol${volumeId}end1`, endMap, `تم الجزء بفضل الله`)}
            </span>
            <span className="font-english-semibold text-[11px] text-neutral-300 dark:text-neutral-600 uppercase tracking-widest">
              {m['volume.endOfPart'] 
                ? m['volume.endOfPart']({ number: volumeId }) 
                : `End of Part ${volumeId} · by the grace of Allah`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
