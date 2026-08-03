import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Check, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import * as m from '#/paraglide/messages.js'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'
import { ProgressRing } from './ProgressRing'

type Props = {
  volumeId: 1 | 2 | 3
}

export const VolumeScreen: React.FC<Props> = ({ volumeId }) => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)
  const progressStore = useProgressStore((state) => state.progress)

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const lastLessonStr = sessionStorage.getItem('last_volume_lesson')
    if (lastLessonStr) {
      try {
        const { volumeId: savedVol, chapterId: savedChap, darsNum: savedDars } = JSON.parse(lastLessonStr)
        if (savedVol === volumeId) {
          setTimeout(() => {
            const el = document.getElementById(`lesson-${savedChap}-${savedDars}`)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 150)
        }
      } catch (e) {
        // ignore parse error
      }
    }
  }, [volumeId])

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

  const { totalChunks, completedChunks } = useMemo(() => {
    let t = 0
    let c = 0
    chapters.forEach((ch) => {
      ch.lessons.forEach((l) => {
        l.chunks.forEach((chunk) => {
          t++
          if (progressStore[`progress.v${volumeId}.c${ch.id}.d${l.darsNumber}.${chunk.id}`] === 'completed') {
            c++
          }
        })
      })
    })
    return { totalChunks: t, completedChunks: c }
  }, [chapters, progressStore, volumeId])

  const volumeProgress = totalChunks === 0 ? 0 : completedChunks / totalChunks

  const getMessage = (_key: string, fnMap: Record<number, any>, fallback: string) => {
    const fn = fnMap[volumeId]
    return fn ? fn() : fallback
  }

  // To find the next available lesson
  const nextLessonInfo = useMemo(() => {
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        const completedCount = lesson.chunks.filter(
          (ch) => progressStore[`progress.v${volumeId}.c${chapter.id}.d${lesson.darsNumber}.${ch.id}`] === 'completed'
        ).length
        if (completedCount < lesson.chunks.length) {
          return { chapterId: chapter.id, darsNum: lesson.darsNumber }
        }
      }
    }
    return { chapterId: chapters[0].id, darsNum: chapters[0].lessons[0].darsNumber }
  }, [chapters, progressStore, volumeId])

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-neutral-950 pb-20">
      <div className="max-w-[800px] mx-auto w-full px-6 flex flex-col gap-6">
        
        {/* Banner - Raw Neutral Style */}
        <div 
          className="h-40 rounded-3xl relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between p-8 mt-6"
        >
          <div className="flex flex-col gap-2 z-10">
            <h1 className="font-english-bold text-[36px] tracking-tight text-neutral-900 dark:text-neutral-100">
              {getMessage(`volume_vol${volumeId}title1`, titleMap, `Volume ${volumeId}`)}
            </h1>
            <p className="font-english text-[16px] text-neutral-500 dark:text-neutral-400">
              {getMessage(`volume_vol${volumeId}meta1`, metaMap, 'Chapters · Lessons')}
            </p>
          </div>
          <div className="w-[84px] h-[84px] z-10 shrink-0 hidden sm:block">
            <ProgressRing progress={volumeProgress} size={84} color={isDark ? '#e5e5e5' : '#171717'} />
          </div>

          <div className="absolute right-[-40px] top-[-50px] opacity-5 dark:opacity-[0.03] pointer-events-none transform -rotate-12 select-none">
            <span className="font-mushaf text-[280px] leading-none text-neutral-900 dark:text-white">
              {arTitleMap[volumeId]}
            </span>
          </div>
        </div>

        {/* Chapters List */}
        <div className="flex flex-col gap-8 mt-4">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-2">
                <div className="flex-1">
                  <h2 className="font-english-semibold text-[22px] text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {m[`vol${volumeId}chapters.${chapter.id}title` as keyof typeof m]
                      ? (m[`vol${volumeId}chapters.${chapter.id}title` as keyof typeof m] as any)()
                      : chapter.titleEn}
                  </h2>
                  <p className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {m[`vol${volumeId}chapters.${chapter.id}subtitle` as keyof typeof m]
                      ? (m[`vol${volumeId}chapters.${chapter.id}subtitle` as keyof typeof m] as any)()
                      : chapter.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {chapter.lessons.map((lesson) => {
                  const chunks = lesson.chunks
                  const total = chunks.length
                  const completedCount = chunks.filter(ch => progressStore[`progress.v${volumeId}.c${chapter.id}.d${lesson.darsNumber}.${ch.id}`] === 'completed').length
                  const isComplete = total > 0 && completedCount === total
                  const isNext = nextLessonInfo.chapterId === chapter.id && nextLessonInfo.darsNum === lesson.darsNumber
                  
                  // For UI demonstration, assume unlocked unless explicitly handled
                  const isLocked = false 

                  return (
                    <motion.div
                      key={lesson.darsNumber}
                      whileHover={!isLocked ? { scale: 1.01 } : {}}
                      whileTap={!isLocked ? { scale: 0.99 } : {}}
                    >
                      <button
                        id={`lesson-${chapter.id}-${lesson.darsNumber}`}
                        onClick={() => {
                          if (isLocked) return
                          sessionStorage.setItem('last_volume_lesson', JSON.stringify({ volumeId, chapterId: chapter.id, darsNum: lesson.darsNumber }))
                          navigate({
                            to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum',
                            params: {
                              // @ts-ignore
                              volumeId: volumeId.toString(),
                              // @ts-ignore
                              chapterId: chapter.id,
                              // @ts-ignore
                              darsNum: lesson.darsNumber.toString(),
                            },
                          })
                        }}
                        className={`
                          w-full relative flex flex-row items-center justify-between p-5 rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
                          ${isLocked 
                            ? 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-900/50' 
                            : 'cursor-pointer bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors'
                          }
                          ${isNext ? '' : ''}
                        `}
                      >
                        <div className="flex flex-row items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                            isComplete ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400' :
                            isNext ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' :
                            'bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-500 dark:text-neutral-500'
                          }`}>
                            {isComplete ? <Check size={20} strokeWidth={2.5} /> : <span className="font-english-bold text-[16px]">{lesson.darsNumber}</span>}
                          </div>
                          <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-2">
                              <span className={`font-english-semibold text-[17px] ${isComplete ? 'text-neutral-500 dark:text-neutral-400' : 'text-neutral-900 dark:text-neutral-100'}`}>
                                Lesson {lesson.darsNumber}
                              </span>
                              {isNext && !isComplete && (
                                <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-english-bold text-[10px] uppercase tracking-wider leading-none">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <span className="font-english text-[13px] text-neutral-500 dark:text-neutral-500 mt-0.5">
                              {completedCount} / {total} sections completed
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row items-center gap-3">
                          {isLocked ? (
                            <Lock size={18} className="text-neutral-400 mr-2" />
                          ) : (
                            <div className="hidden sm:flex flex-row gap-1.5 mr-2">
                              {chunks.map((ch, idx) => {
                                const st = progressStore[`progress.v${volumeId}.c${chapter.id}.d${lesson.darsNumber}.${ch.id}`]
                                return (
                                  <div 
                                    key={idx} 
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      st === 'completed' 
                                        ? 'bg-neutral-400 dark:bg-neutral-600' 
                                        : 'bg-neutral-200 dark:bg-neutral-800'
                                    }`}
                                  />
                                )
                              })}
                            </div>
                          )}
                        </div>
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12 pb-16">
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
