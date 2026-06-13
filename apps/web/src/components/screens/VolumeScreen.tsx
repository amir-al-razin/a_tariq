import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import * as m from '#/paraglide/messages.js'

import { ChapterBanner } from '../learning-path/ChapterBanner'
import { LessonNode, type NodeStatus } from '../learning-path/LessonNode'
import { WaveLayout, WAVE } from '../learning-path/WaveLayout'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { useProgressStore } from '../../state/progressStore'

const ProgressRing = ({ progress, size = 56, strokeWidth = 4, color = '#34D3AA' }: { progress: number, size?: number, strokeWidth?: number, color?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-neutral-200 dark:text-neutral-700"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-english-semibold text-[13px]" style={{ color }}>
        {Math.round(progress * 100)}%
      </div>
    </div>
  )
}

type VolumeAccent = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

const neutral = {
  50: '#F8F7F4',
  100: '#F0EEE8',
  200: '#E5E1D8',
  300: '#D5CEBF',
  400: '#B9AF9C',
  500: '#9A8F7B',
  600: '#7D7463',
  700: '#4F4A40',
  800: '#22201B',
  900: '#1A1815',
}

const vol1Colors: VolumeAccent = {
  50: '#ECFDF8',
  100: '#D1FAEF',
  200: '#A7F3DE',
  300: '#6EE7C8',
  400: '#34D3AA',
  500: '#16B78E',
  600: '#0F9373',
  700: '#0D775F',
  800: '#0F5F4D',
  900: '#0A4134',
}

const vol2Colors: VolumeAccent = {
  50: '#FFFBEB',
  100: '#FEF3C7',
  200: '#FDE68A',
  300: '#FCD34D',
  400: '#FBBF24',
  500: '#F59E0B',
  600: '#D97706',
  700: '#B45309',
  800: '#92400E',
  900: '#78350F',
}

const vol3Colors: VolumeAccent = {
  50: '#F5F3FF',
  100: '#EDE9FE',
  200: '#DDD6FE',
  300: '#C4B5FD',
  400: '#A78BFA',
  500: '#8B5CF6',
  600: '#7C3AED',
  700: '#6D28D9',
  800: '#5B21B6',
  900: '#4C1D95',
}

type Props = {
  volumeId: 1 | 2 | 3
}

export const VolumeScreen: React.FC<Props> = ({ volumeId }) => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)
  const [trackWidth, setTrackWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800,
  )

  const progressStore = useProgressStore((state) => state.progress)

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true })

    const handleResize = () => setTrackWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const lastLessonStr = sessionStorage.getItem('last_volume_lesson')
    if (lastLessonStr) {
      try {
        const { volumeId: savedVol, chapterId: savedChap, darsNum: savedDars } = JSON.parse(lastLessonStr)
        if (savedVol === volumeId) {
          // Add a small delay to ensure rendering is complete
          setTimeout(() => {
            const el = document.getElementById(`lesson-${savedChap}-${savedDars}`)
            if (el) {
              el.scrollIntoView({ behavior: 'auto', block: 'center' })
            }
          }, 100)
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

  const colorMap = {
    1: vol1Colors,
    2: vol2Colors,
    3: vol3Colors,
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
  const colors = colorMap[volumeId]

  const totalChunks = useMemo(() => {
    return chapters.reduce((acc, c) => acc + c.lessons.reduce((lAcc, l) => lAcc + l.chunks.length, 0), 0)
  }, [chapters])

  const completedChunks = useMemo(() => {
    let count = 0
    chapters.forEach(c => {
      c.lessons.forEach(l => {
        l.chunks.forEach(ch => {
          if (progressStore[`progress.v${volumeId}.c${c.id}.d${l.darsNumber}.${ch.id}`] === 'completed') {
            count++
          }
        })
      })
    })
    return count
  }, [chapters, progressStore, volumeId])

  const volumeProgress = totalChunks === 0 ? 0 : completedChunks / totalChunks

  const getLessonStatus = (chapterId: number, darsNum: number): NodeStatus => {
    const chapter = chapters.find(c => c.id === chapterId)
    const lesson = chapter?.lessons.find(l => l.darsNumber === darsNum)
    if (!lesson) return 'open'

    const chunks = lesson.chunks
    const completedCount = chunks.filter(ch => progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${ch.id}`] === 'completed').length

    if (completedCount === chunks.length && chunks.length > 0) return 'completed'
    // To make it engaging, any lesson that has at least 1 chunk done, or is the immediately next open lesson, could be "current".
    // For simplicity, we just mark open.
    return 'open'
  }

  const NODE_SIZE = 72
  const H_PAD = 16

  const getMessage = (_key: string, fnMap: Record<number, any>, fallback: string) => {
    const fn = fnMap[volumeId]
    return fn ? fn() : fallback
  }

  const renderLessonRow = (
    num: number,
    status: NodeStatus,
    idx: number,
    chapterId: number,
  ) => {
    const waveX = WAVE[idx % WAVE.length]

    // Web specific max width for the winding path
    const containerWidth = Math.min(trackWidth, 600)
    const usable = containerWidth - 2 * H_PAD
    const nodeLeft = Math.round(H_PAD + waveX * usable - NODE_SIZE / 2)
    const nodeRight = containerWidth - nodeLeft - NODE_SIZE

    const isCurrent = status === 'current'
    const isCompleted = status === 'completed'
    const isLocked = status === 'locked'
    const labelOnRight = waveX <= 0.5

    const circleBg =
      isCurrent || isCompleted
        ? colors[500]
        : isLocked
          ? isDark
            ? neutral[700]
            : neutral[300]
          : isDark
            ? colors[800]
            : colors[100]

    const circleBorder =
      isCurrent || isCompleted
        ? isDark
          ? colors[700]
          : colors[600]
        : isLocked
          ? isDark
            ? neutral[600]
            : neutral[500]
          : isDark
            ? colors[900]
            : colors[200]

    const iconColor =
      isCurrent || isCompleted
        ? '#fff'
        : isLocked
          ? isDark
            ? neutral[500]
            : neutral[700]
          : isDark
            ? colors[300]
            : colors[600]

    const labelColor = isCurrent
      ? isDark
        ? colors[300]
        : colors[700]
      : isLocked
        ? isDark
          ? neutral[600]
          : neutral[500]
        : isDark
          ? neutral[400]
          : neutral[600]

    return (
      <div
        key={num}
        id={`lesson-${chapterId}-${num}`}
        className="mb-7 flex"
        style={{
          flexDirection: labelOnRight ? 'row' : 'row-reverse',
          alignItems: 'center',
          paddingLeft: labelOnRight ? nodeLeft : 0,
          paddingRight: !labelOnRight ? nodeRight : 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 600,
          width: '100%',
        }}
      >
        <LessonNode
          number={num}
          status={status}
          faceColor={circleBg}
          shadowColor={circleBorder}
          textColor={iconColor}
          entryDelay={idx * 30}
          onPress={() => {
            sessionStorage.setItem('last_volume_lesson', JSON.stringify({ volumeId, chapterId, darsNum: num }))
            navigate({
              to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum',
              params: {
                // @ts-ignore - The router types don't realize these are valid stringable params
                volumeId: volumeId,
                // @ts-ignore
                chapterId: chapterId,
                // @ts-ignore
                darsNum: num,
              },
            })
          }}
        />
        <div className="px-3">
          <span
            className="font-english-semibold text-[13px]"
            style={{ color: labelColor }}
          >
            {m['lesson.dars'] ? m['lesson.dars']({ number: num }) : `Dars ${num}`}
          </span>
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col flex-1 min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-20 pt-7">
      {/* Volume header */}
      <div className="px-5 mb-6 max-w-[600px] mx-auto w-full">
        <div className="flex flex-row items-end justify-between">
          <div>
            <h1
              className="font-english-semibold text-[28px] leading-[34px]"
              style={{
                color: isDark ? colors[200] : colors[700],
              }}
            >
              {getMessage(`volume_vol${volumeId}title1`, titleMap, `Volume ${volumeId}`)}
            </h1>
            <p className="font-english mt-1 text-[14px] text-neutral-600 dark:text-neutral-400">
              {getMessage(`volume_vol${volumeId}meta1`, metaMap, 'Chapters · Lessons')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ProgressRing progress={volumeProgress} color={isDark ? colors[400] : colors[600]} />
            <h2
              className={`font-arabic-semibold text-[22px] text-right`}
              style={{
                color: isDark ? colors[300] : colors[700],
              }}
            >
              {arTitleMap[volumeId]}
            </h2>
          </div>
        </div>
        <div className="h-px bg-neutral-200 dark:bg-neutral-700 mt-4" />
      </div>

      {/* Chapters */}
      <div className="max-w-[600px] mx-auto w-full">
        {chapters.map((chapter, chapterIdx) => {
          const lessons = chapter.lessons.map((lesson) => ({
            num: lesson.darsNumber,
            status: getLessonStatus(chapter.id, lesson.darsNumber),
          }))

          return (
            <div key={chapter.id}>
              <ChapterBanner
                chapterId={chapter.id}
                lessonCount={chapter.lessons.length}
                titleEn={chapter.titleEn}
                titleAr={chapter.titleAr}
                subtitleI18nKey={`vol${volumeId}chapters.${chapter.id}subtitle`}
                accentColor={isDark ? colors[300] : colors[700]}
              />
              <WaveLayout>
                {lessons.map(({ num, status }, idx) =>
                  renderLessonRow(num, status, idx, chapter.id),
                )}
              </WaveLayout>
              {chapterIdx < chapters.length - 1 && (
                <div className="h-px bg-neutral-200 dark:bg-neutral-700 mx-8 mb-2" />
              )}
            </div>
          )
        })}
      </div>

      {/* End banner */}
      <div className="mx-5 mt-6 max-w-[600px] sm:mx-auto rounded-2xl bg-neutral-100 dark:bg-neutral-800">
        <div className="flex flex-col items-center px-6 py-8">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{
              backgroundColor: isDark ? `${colors[600]}20` : `${colors[500]}20`,
            }}
          >
            <Star
              size={24}
              color={isDark ? colors[400] : colors[600]}
              strokeWidth={2}
            />
          </div>
          <h3 className="font-arabic-semibold text-[18px] text-neutral-900 dark:text-neutral-100 text-center">
            {getMessage(`volume_vol${volumeId}end1`, endMap, `تم الجزء بفضل الله`)}
          </h3>
          <p className="font-english mt-2 text-[14px] text-neutral-600 dark:text-neutral-400 text-center">
            {m['volume.endOfPart']
              ? m['volume.endOfPart']({ number: volumeId })
              : `End of Part ${volumeId} · by the grace of Allah`}
          </p>
        </div>
      </div>
    </div>
  )
}
