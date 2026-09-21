import React, { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Check, Trophy, ArrowRight, X, Sparkles, Clock, Play, RotateCcw, BookmarkCheck, Brain, BookMarked, Lock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import * as m from '#/paraglide/messages.js'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'
import { useRetentionStore } from '../../state/retentionStore'
import { useLessonCheckpointStore } from '../../state/lessonCheckpointStore'
import { useLanguage } from '../../hooks/useLanguage'
import { ProgressRing } from './ProgressRing'
import { getLessonSession, hasLessonSession } from '../../lib/lessonRegistry'
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

interface LessonMeta {
  titleEn: string
  arabicTopic: string
  conceptEn: string
}

// Welcoming, layman-friendly metadata for Volume 1 Chapter 1 lessons
const CHAPTER_1_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'Pointing Near: "This"',
    arabicTopic: 'هَٰذَا',
    conceptEn: 'Learn how to point to objects and people near you.',
  },
  2: {
    titleEn: 'Pointing Far: "That"',
    arabicTopic: 'ذَٰلِكَ',
    conceptEn: 'Learn how to point to objects and people in the distance.',
  },
  3: {
    titleEn: 'Asking "What" & "Who"',
    arabicTopic: 'مَا وَ مَنْ',
    conceptEn: 'Ask simple questions about things and people around you.',
  },
  4: {
    titleEn: 'Yes/No Questions & Sounds',
    arabicTopic: 'أَ وَ الْحُرُوفُ الشَّمْسِيَّةُ',
    conceptEn: 'Ask quick confirmation questions and pronounce words smoothly.',
  },
  5: {
    titleEn: 'Feminine Words & Pointing',
    arabicTopic: 'هَٰذِهِ وَ تِلْكَ',
    conceptEn: 'Identify feminine nouns and point to them accurately.',
  },
  6: {
    titleEn: 'The Definite Word ("The")',
    arabicTopic: 'أَلْ',
    conceptEn: 'Make everyday words specific with the prefix "Al-".',
  },
  7: {
    titleEn: 'Possession & Belonging',
    arabicTopic: 'الإِضَافَةُ',
    conceptEn: 'Express relationships like "the teacher\'s book" and "the house of Allah".',
  },
  8: {
    titleEn: 'The Location Word "In"',
    arabicTopic: 'حَرْفُ الْجَرِّ «فِي»',
    conceptEn: 'Describe where people and objects are located in places.',
  },
  9: {
    titleEn: 'Having & Being With',
    arabicTopic: 'عِنْدَ وَ مَعَ',
    conceptEn: 'Talk about what you have with you and who you are with.',
  },
}

// Welcoming, layman-friendly metadata for Volume 1 Chapter 2 lessons
const CHAPTER_2_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'General & Choice Questions',
    arabicTopic: 'هَلْ وَ أَ...أَمْ',
    conceptEn: 'Ask yes/no questions and choose between two alternatives.',
  },
  2: {
    titleEn: 'Attributes & Opposites',
    arabicTopic: 'الصِّفَةُ وَ الْمَوْصُوفُ',
    conceptEn: 'Describe everyday food and objects with qualities like fresh and pure.',
  },
  3: {
    titleEn: 'People, Roles & Character',
    arabicTopic: 'الأَوْصَافُ وَ غَيْرُ',
    conceptEn: 'Talk about professions, character, and opposite qualities with "ghayr".',
  },
  4: {
    titleEn: 'Building Complete Sentences',
    arabicTopic: 'تَرْكِيبُ الْجُمْلَةِ',
    conceptEn: 'Form meaningful Arabic statements by pairing subjects and descriptions.',
  },
  5: {
    titleEn: 'My, Your, His & Her',
    arabicTopic: 'الضَّمَائِرُ الْمُتَّصِلَةُ',
    conceptEn: 'Attach word endings to show who owns an item.',
  },
  6: {
    titleEn: 'Places & Landmarks',
    arabicTopic: 'الأَمَاكِنُ وَ الإِضَافَةُ',
    conceptEn: 'Describe cities, mosques, markets, and institutions in full sentences.',
  },
  7: {
    titleEn: 'Directions & Positions',
    arabicTopic: 'ظُرُوفُ الْمَكَانِ',
    conceptEn: 'Use words like above, below, in front of, and behind with ease.',
  },
  8: {
    titleEn: 'Classrooms & School Life',
    arabicTopic: 'الْفُصُولُ وَ الدِّرَاسَةُ',
    conceptEn: 'Describe classrooms, learning supplies, and everyday scenes.',
  },
}

// Welcoming, layman-friendly metadata for Volume 1 Chapter 3 lessons
const CHAPTER_3_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'Possession with Pointing',
    arabicTopic: 'إِمَامُ هَٰذَا الْمَسْجِدِ',
    conceptEn: 'Express ownership of pointed items and read the sacred text on Al-Kaaba.',
  },
  2: {
    titleEn: 'Definite Descriptive Phrases',
    arabicTopic: 'الْوَرْدَةُ الْكَبِيرَةُ',
    conceptEn: 'Progress from basic words to rich descriptive phrases and complete sentences.',
  },
  3: {
    titleEn: 'Reading Authentic Arabic',
    arabicTopic: 'قِرَاءَةُ النُّصُوصِ',
    conceptEn: 'Celebrate completing Volume 1 by reading complete classical Arabic stories.',
  },
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
  const [activeSessionLesson, setActiveSessionLesson] = useState<{
    chapterId: number
    darsNum: number
    stepIndex?: number
  } | null>(null)

  const { language } = useLanguage()
  const isBn = language === 'bn'

  const getCheckpoint = useLessonCheckpointStore((state) => state.getCheckpoint)
  const clearCheckpoint = useLessonCheckpointStore((state) => state.clearCheckpoint)
  const dueCount = useRetentionStore((state) => state.getDueItemsCount(volumeId))
  const learnedWordsCount = useRetentionStore((state) => state.getLearnedWords(volumeId).length)

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

  // Find current active lesson along the curriculum path (must be implemented)
  const nextLessonInfo = useMemo(() => {
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        if (
          hasLessonSession(volumeId, chapter.id, lesson.darsNumber) &&
          !isLessonCompleted(chapter.id, lesson.darsNumber)
        ) {
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
        initialStepIndex={activeSessionLesson.stepIndex}
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

        {/* Daily SRS Review & Lexical Vault Launchpad Banner */}
        <div className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent-primary-subtle flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-accent-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                {learnedWordsCount > 0
                  ? dueCount > 0
                    ? isBn ? `আজকের দৈনিক রিভিউ প্রস্তুত (${dueCount}টি শব্দ)` : `Daily Review Ready (${dueCount} Due)`
                    : isBn ? 'স্মৃতি সংরক্ষণ অনুশীলন' : 'Memory Retention Practice'
                  : isBn ? 'শব্দভাণ্ডার ও স্পেসড রিপিটিশন' : 'Lexical Vault & Spaced Repetition'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {learnedWordsCount > 0
                  ? dueCount > 0
                    ? isBn ? 'স্পেসড রিপিটিশন মেমোরি কিউ থেকে পড়া শব্দগুলো ঝালিয়ে নিন।' : 'Reinforce learned vocabulary before the Leitner memory curve decays.'
                    : isBn ? `${learnedWordsCount}টি শব্দ ট্র্যাক করা হয়েছে। দুর্বল শব্দগুলো অনুশীলন করুন।` : `${learnedWordsCount} words tracked. Strengthen lower-stability items.`
                  : isBn ? 'পাঠ সম্পন্ন করার সাথে সাথে শব্দগুলো স্বয়ংক্রিয়ভাবে আপনার শব্দকোষে যুক্ত হবে।' : 'As you learn, vocabulary automatically enters your Lexical Vault and Leitner review queue.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end shrink-0">
            <Link
              to="/words"
              onClick={() => playTapSound()}
              className="h-12 px-5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 bg-neutral-200/80 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors cursor-pointer"
            >
              <BookMarked className="w-4 h-4 opacity-70" />
              <span>{isBn ? 'শব্দকোষ' : 'Lexicon'}</span>
            </Link>

            {learnedWordsCount > 0 && (
              <Link
                to="/review"
                onClick={() => playTapSound()}
                className="h-12 px-5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer bg-accent-primary hover:bg-accent-primary-hover text-white"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {dueCount > 0
                    ? isBn ? `রিভিউ (${dueCount})` : `Daily Review (${dueCount})`
                    : isBn ? 'অনুশীলন' : 'Practice Review'}
                </span>
              </Link>
            )}
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
                    const isImplemented = hasLessonSession(volumeId, chapter.id, darsNum)
                    const isCompleted = isLessonCompleted(chapter.id, darsNum)
                    const checkpoint = getCheckpoint(volumeId, chapter.id, darsNum)
                    const hasCheckpoint = Boolean(checkpoint && checkpoint.currentStepIndex > 0)
                    const isCurrent =
                      isImplemented &&
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
                                  {hasCheckpoint ? 'RESUME' : (isFirst ? 'START' : 'CURRENT')}
                                </span>
                              </div>
                            </motion.div>
                          )}

                          {/* 3D Circular Stepping Stone Button */}
                          <button
                            type="button"
                            disabled={!isImplemented}
                            onClick={() => {
                              if (!isImplemented) return
                              playTapSound()
                              setSelectedNodeLesson({ chapterId: chapter.id, darsNum })
                            }}
                            className={`group relative select-none border-0 p-0 bg-transparent transition-transform duration-150 ${
                              isImplemented
                                ? 'cursor-pointer hover:scale-[1.04]'
                                : 'cursor-not-allowed opacity-75'
                            }`}
                            aria-label={
                              isImplemented
                                ? `Lesson ${darsNum}`
                                : `Lesson ${darsNum} (Locked - In Development)`
                            }
                            title={
                              isImplemented
                                ? `Lesson ${darsNum}`
                                : (isBn
                                  ? `পাঠ ${toArabicNumerals(darsNum)} (শীঘ্রই আসছে)`
                                  : `Lesson ${darsNum} (Coming Soon)`)
                            }
                          >
                            {/* Base Pedestal (3D Circular Bevel - Always Darker than Top Face) */}
                            <div
                              className={`w-20 h-20 rounded-full transition-all duration-150 relative overflow-hidden ${
                                isCurrent || isCompleted
                                  ? 'bg-accent-primary'
                                  : isImplemented
                                    ? 'bg-neutral-300 dark:bg-neutral-900'
                                    : 'bg-neutral-200 dark:bg-neutral-900'
                              }`}
                              style={{ transform: 'translateY(6px)' }}
                            >
                              {(isCurrent || isCompleted) && (
                                <div className="w-full h-full bg-black/30 dark:bg-black/25 pointer-events-none" />
                              )}
                            </div>

                            {/* Raised Circular Top Face (Depresses on Tap if implemented) */}
                            <div
                              className={`absolute inset-0 w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-100 ${
                                isImplemented ? 'group-active:translate-y-1.5' : ''
                              } ${
                                isCurrent || isCompleted
                                  ? 'bg-accent-primary hover:bg-accent-primary-hover text-white'
                                  : isImplemented
                                    ? 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                                    : 'bg-neutral-100 dark:bg-neutral-800/60 text-neutral-400 dark:text-neutral-400'
                              }`}
                            >
                              {!isImplemented ? (
                                <Lock size={26} className="stroke-[2.2] text-neutral-400 dark:text-neutral-400" />
                              ) : isCompleted ? (
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
            const sessionData = getLessonSession(volumeId, chapter.id, darsNum)
            const isImplemented = Boolean(sessionData)
            const isCompleted = isLessonCompleted(chapter.id, darsNum)
            const stepCount = sessionData?.steps.length || 10
            const estimatedMinutes = Math.max(2, Math.ceil((stepCount * 20) / 60))
            const checkpoint = getCheckpoint(volumeId, chapter.id, darsNum)
            const hasCheckpoint = Boolean(
              isImplemented &&
              checkpoint &&
              checkpoint.currentStepIndex > 0 &&
              checkpoint.currentStepIndex < stepCount
            )
            const isCurrent =
              isImplemented &&
              nextLessonInfo.chapterId === chapter.id &&
              nextLessonInfo.darsNum === darsNum &&
              !isCompleted
            const lessonMeta: LessonMeta =
              (chapter.id === 1
                ? CHAPTER_1_LESSONS_INFO[darsNum]
                : chapter.id === 2
                ? CHAPTER_2_LESSONS_INFO[darsNum]
                : chapter.id === 3
                ? CHAPTER_3_LESSONS_INFO[darsNum]
                : null) || {
                titleEn: `Lesson ${darsNum}`,
                arabicTopic: `الدرس ${toArabicNumerals(darsNum)}`,
                conceptEn: chapter.subtitle || 'Classical Arabic interactive drill',
              }

            return (
              <div
                className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedNodeLesson(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-sm rounded-4xl bg-white dark:bg-neutral-900 p-6 flex flex-col space-y-5 shadow-none border-0 select-auto"
                >
                  {/* Top Bar with Integrated Lesson Badge & Close Trigger */}
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-english font-extrabold text-base select-none ${
                        !isImplemented
                          ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'
                          : 'bg-accent-primary text-white'
                      }`}>
                        {!isImplemented ? (
                          <Lock size={16} />
                        ) : isCompleted ? (
                          <Check size={18} className="stroke-[3]" />
                        ) : (
                          darsNum
                        )}
                      </div>
                      <div className="text-start">
                        <div className="text-xs font-english-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                          Lesson {darsNum}
                        </div>
                        <div className="text-[11px] font-english text-neutral-500 dark:text-neutral-400">
                          {!isImplemented
                            ? (isBn ? 'শীঘ্রই আসছে' : 'Coming Soon')
                            : hasCheckpoint
                            ? (isCompleted
                              ? (isBn ? 'অনুশীলন চলমান' : 'Practice in Progress')
                              : (isBn ? 'সংরক্ষিত অগ্রগতি' : 'In Progress'))
                            : (isCompleted
                              ? (isBn ? 'সম্পন্ন' : 'Completed')
                              : (isCurrent
                                ? (isBn ? 'পরবর্তী' : 'Up Next')
                                : (isBn ? 'উপলব্ধ' : 'Available')))}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedNodeLesson(null)}
                      className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors shadow-none border-0"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Topic Discovery Surface (Raw Neutral Well) */}
                  <div className="w-full p-5 rounded-3xl bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center text-center space-y-2">
                    <div
                      className="font-arabic font-bold text-3xl sm:text-4xl text-neutral-950 dark:text-white leading-loose tracking-normal"
                      dir="rtl"
                    >
                      {lessonMeta.arabicTopic}
                    </div>
                    <h3 className="font-english-bold text-base sm:text-lg text-neutral-800 dark:text-neutral-100">
                      {lessonMeta.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
                      {lessonMeta.conceptEn}
                    </p>
                  </div>

                  {/* Lightweight Learning Stats */}
                  <div className="flex items-center justify-center gap-3 text-xs font-english text-neutral-500 dark:text-neutral-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={14} className="text-accent-secondary" />
                      <span>{stepCount} interactive steps</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>~{estimatedMinutes} min</span>
                    </span>
                  </div>

                  {/* Saved Checkpoint Progress Banner */}
                  {hasCheckpoint && checkpoint && (
                    <div className="w-full p-3.5 rounded-2xl bg-accent-primary-subtle text-accent-primary flex items-center justify-between text-xs font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <BookmarkCheck size={14} />
                        <span>
                          {isCompleted
                            ? (isBn ? 'অনুশীলন সংরক্ষিত' : 'Practice Saved')
                            : (isBn ? 'সংরক্ষিত অগ্রগতি' : 'Saved Progress')}
                        </span>
                      </span>
                      <span>
                        {isBn
                          ? `ধাপ ${toArabicNumerals(checkpoint.currentStepIndex + 1)} / ${toArabicNumerals(checkpoint.totalSteps)}`
                          : `Step ${checkpoint.currentStepIndex + 1} of ${checkpoint.totalSteps}`}
                      </span>
                    </div>
                  )}

                  {/* Dual Action Buttons (Resume vs Restart) if Checkpoint Exists */}
                  {hasCheckpoint && checkpoint ? (
                    <div className="w-full flex flex-col gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          playTapSound()
                          setSelectedNodeLesson(null)
                          setActiveSessionLesson({
                            chapterId: chapter.id,
                            darsNum,
                            stepIndex: checkpoint.currentStepIndex,
                          })
                        }}
                        className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-2 cursor-pointer shadow-none border-0 active:scale-[0.98] transition-all"
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
                          clearCheckpoint(volumeId, chapter.id, darsNum)
                          setSelectedNodeLesson(null)
                          setActiveSessionLesson({
                            chapterId: chapter.id,
                            darsNum,
                            stepIndex: 0,
                          })
                        }}
                        className="w-full h-14 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-english-semibold text-base flex items-center justify-center gap-2 cursor-pointer shadow-none border-0 active:scale-[0.98] transition-all"
                      >
                        <RotateCcw size={18} />
                        <span>
                          {isCompleted
                            ? (isBn ? 'শুরু থেকে অনুশীলন করুন' : 'Restart Practice')
                            : (isBn ? 'শুরু থেকে শুরু করুন' : 'Start from Beginning')}
                        </span>
                      </button>
                    </div>
                  ) : !isImplemented ? (
                    <button
                      type="button"
                      disabled
                      className="w-full h-14 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 font-english-semibold text-base flex items-center justify-center gap-2 cursor-not-allowed shadow-none border-0"
                    >
                      <Lock size={18} />
                      <span>
                        {isBn ? 'পাঠটি প্রস্তুত হচ্ছে (শীঘ্রই আসছে)' : 'Lesson in Development'}
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        playTapSound()
                        setSelectedNodeLesson(null)
                        setActiveSessionLesson({
                          chapterId: chapter.id,
                          darsNum,
                          stepIndex: 0,
                        })
                      }}
                      className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-2 cursor-pointer shadow-none border-0 active:scale-[0.98] transition-all"
                    >
                      <span>
                        {isCompleted
                          ? (isBn ? 'আবার অনুশীলন করুন' : 'Practice Again')
                          : (isBn ? 'পাঠ শুরু করুন' : 'Start Lesson')}
                      </span>
                      <ArrowRight size={18} />
                    </button>
                  )}
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
