import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, Check } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { getLastVisitedChunk, setLastVisitedChunk } from '../../lib/progress'
import { useProgressStore } from '../../state/progressStore'

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
  chapterId: number
  darsNum: number
}

const CHUNK_SIZE = 64

export const LessonScreen: React.FC<Props> = ({ volumeId, chapterId, darsNum }) => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)
  const [lastVisited, setLastVisited] = useState<number | null>(null)

  const progressStore = useProgressStore((state) => state.progress)

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true })

    setLastVisited(getLastVisitedChunk(chapterId, darsNum))

    return () => {
      observer.disconnect()
    }
  }, [chapterId, darsNum])

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

  const chapters = dataMap[volumeId]
  const colors = colorMap[volumeId]

  const chapter = useMemo(() => chapters.find((c) => c.id === chapterId), [chapters, chapterId])
  const lesson = useMemo(() => chapter?.lessons.find((l) => l.darsNumber === darsNum), [chapter, darsNum])
  const chunks = useMemo(() => lesson?.chunks || [], [lesson])

  if (!chapter || !lesson) {
    return <div className="p-4">Lesson not found</div>
  }

  const handleChunkPress = (chunkId: string, idx: number) => {
    setLastVisitedChunk(chapterId, darsNum, idx)
    setLastVisited(idx)
    navigate({
      to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/chunk/$chunkId',
      params: {
        volumeId: volumeId as any,
        chapterId: chapterId as any,
        darsNum: darsNum as any,
        chunkId: chunkId as any,
      },
    })
  }

  const numChunks = chunks.length

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-20 pt-7">
      <div className="px-5 mb-6 max-w-[600px] mx-auto w-full flex items-center justify-between">
        <button
          onClick={() => {
            navigate({
              to: '/volume/$volumeId',
              params: { volumeId: volumeId as any },
            })
          }}
          className="p-2 -ml-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} color={isDark ? neutral[200] : neutral[800]} />
        </button>
        <div className="flex-1 text-center font-english-semibold text-[17px] text-neutral-900 dark:text-neutral-100">
          Lesson {darsNum} · {chapter.titleEn}
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 flex items-center justify-center relative w-full max-w-[800px] mx-auto min-h-[500px]">
        {/* Desktop Circular Layout & Mobile Grid Wrapper */}
        <div className="hidden md:flex w-full h-full items-center justify-center relative">
          {chunks.map((chunk, idx) => {
            // Re-eval status logic based strictly on requirements
            const isCompleted = progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunk.id}`] === 'completed'
            const isCurrent = idx === 0 || progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunks[idx-1]?.id}`] === 'completed'
            const status = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'

            const isLastVisited = lastVisited === idx
            const isInteractive = status !== 'locked'

            const dynamicRadius = Math.max(90, (numChunks * 85) / (2 * Math.PI))
            const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / numChunks
            const x = dynamicRadius * Math.cos(angle)
            const y = dynamicRadius * Math.sin(angle)

            const circleBg = isLastVisited
              ? colors[500]
              : (status === 'current' || status === 'completed') ? colors[500]
                : status === 'locked' ? (isDark ? neutral[700] : neutral[300])
                  : (isDark ? colors[800] : colors[100])

            const circleBorder = isLastVisited
              ? colors[700]
              : (status === 'current' || status === 'completed') ? (isDark ? colors[700] : colors[600])
                : status === 'locked' ? (isDark ? neutral[600] : neutral[500])
                  : (isDark ? colors[900] : colors[300])

            const iconColor = isLastVisited || status === 'current' || status === 'completed' ? '#fff'
              : status === 'locked' ? (isDark ? neutral[800] : neutral[700])
                : (isDark ? colors[300] : colors[600])

            return (
              <motion.div
                key={chunk.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 + idx * 0.04, damping: 20, stiffness: 250 }}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  width: CHUNK_SIZE,
                  height: CHUNK_SIZE + 6,
                  zIndex: (isLastVisited || (status === 'current' && lastVisited === null && idx === 0)) ? 100 : (isInteractive ? 5 : 1),
                }}
                className="flex items-end justify-center"
              >
                <ChunkNode
                  idx={idx}
                  status={status}
                  isLastVisited={isLastVisited}
                  circleBg={circleBg}
                  circleBorder={circleBorder}
                  iconColor={iconColor}
                  accent={colors}
                  onPress={() => isInteractive && handleChunkPress(chunk.id, idx)}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-3 gap-6 p-6 content-center">
          {chunks.map((chunk, idx) => {
             const isCompleted = progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunk.id}`] === 'completed'
             const isCurrent = idx === 0 || progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunks[idx-1]?.id}`] === 'completed'
             const status = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'

             const isLastVisited = lastVisited === idx
             const isInteractive = status !== 'locked'

             const circleBg = isLastVisited
               ? colors[500]
               : (status === 'current' || status === 'completed') ? colors[500]
                 : status === 'locked' ? (isDark ? neutral[700] : neutral[300])
                   : (isDark ? colors[800] : colors[100])

             const circleBorder = isLastVisited
               ? colors[700]
               : (status === 'current' || status === 'completed') ? (isDark ? colors[700] : colors[600])
                 : status === 'locked' ? (isDark ? neutral[600] : neutral[500])
                   : (isDark ? colors[900] : colors[300])

             const iconColor = isLastVisited || status === 'current' || status === 'completed' ? '#fff'
               : status === 'locked' ? (isDark ? neutral[800] : neutral[700])
                 : (isDark ? colors[300] : colors[600])

             return (
              <motion.div
                key={chunk.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 + idx * 0.04, damping: 20, stiffness: 250 }}
                style={{
                  width: CHUNK_SIZE,
                  height: CHUNK_SIZE + 6,
                  zIndex: (isLastVisited || (status === 'current' && lastVisited === null && idx === 0)) ? 100 : (isInteractive ? 5 : 1),
                }}
                className="flex items-end justify-center"
              >
                <ChunkNode
                  idx={idx}
                  status={status}
                  isLastVisited={isLastVisited}
                  circleBg={circleBg}
                  circleBorder={circleBorder}
                  iconColor={iconColor}
                  accent={colors}
                  onPress={() => isInteractive && handleChunkPress(chunk.id, idx)}
                />
              </motion.div>
             )
          })}
        </div>
      </div>
    </div>
  )
}

const ChunkNode = ({
  idx,
  status,
  isLastVisited,
  circleBg,
  circleBorder,
  iconColor,
  accent,
  onPress,
}: {
  idx: number
  status: string
  isLastVisited: boolean
  circleBg: string
  circleBorder: string
  iconColor: string
  accent: VolumeAccent
  onPress: () => void
}) => {
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'
  const isCurrent = status === 'current'

  return (
    <motion.button
      disabled={isLocked}
      whileTap={isLocked ? {} : { translateY: 6 }}
      onClick={onPress}
      className="relative w-full h-full focus:outline-none"
      style={{ width: CHUNK_SIZE, height: CHUNK_SIZE + 6 }}
    >
      <div
        className="absolute bottom-0 w-full rounded-full"
        style={{
          height: CHUNK_SIZE + 6,
          backgroundColor: circleBorder,
        }}
      />
      <div
        className="absolute top-0 w-full flex items-center justify-center rounded-full"
        style={{
          height: CHUNK_SIZE,
          backgroundColor: circleBg,
        }}
      >
        {isLocked ? (
          <Lock size={24} color={iconColor} />
        ) : isCompleted ? (
          <Check size={28} color={iconColor} strokeWidth={3} />
        ) : (
          <span
            className="font-english-semibold mt-1"
            style={{ fontSize: 28, color: iconColor }}
          >
            {idx + 1}
          </span>
        )}

        {(isLastVisited || (isCurrent && !isLastVisited && idx === 0)) && (
          <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 1.03, y: -3 }}
            transition={{
              type: 'tween',
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -top-[30px] flex items-center justify-center border-[1.5px] rounded-lg px-2 py-[3px]"
            style={{
              backgroundColor: isLastVisited ? accent[700] : accent[100],
              borderColor: accent[400],
            }}
          >
            <span
              className="font-english-semibold text-[10px]"
              style={{
                color: isLastVisited ? '#fff' : accent[700],
              }}
            >
              {isLastVisited ? 'RESUME' : 'START'}
            </span>
            <div
              className="absolute -bottom-1 w-[6px] h-[6px] border-r-[1.5px] border-b-[1.5px]"
              style={{
                backgroundColor: isLastVisited ? accent[700] : accent[100],
                borderColor: accent[400],
                transform: 'rotate(45deg)',
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}
