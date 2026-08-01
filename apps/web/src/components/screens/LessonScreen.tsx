import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, Check, ArrowDown } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { getLastVisitedChunk, setLastVisitedChunk } from '../../lib/progress'
import { useProgressStore } from '../../state/progressStore'

const ProgressRing = ({ progress, size = 40, strokeWidth = 3, color = 'currentColor' }: { progress: number, size?: number, strokeWidth?: number, color?: string }) => {
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
      <div className="absolute inset-0 flex items-center justify-center font-english-semibold text-[10px]" style={{ color }}>
        {Math.round(progress * 100)}%
      </div>
    </div>
  )
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

  const chapters = dataMap[volumeId]
  
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

  const completedChunks = useMemo(() => {
    let count = 0;
    chunks.forEach(ch => {
      if (progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${ch.id}`] === 'completed') {
        count++;
      }
    });
    return count;
  }, [chunks, progressStore, volumeId, chapterId, darsNum]);

  const lessonProgress = numChunks === 0 ? 0 : completedChunks / numChunks;

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-neutral-950 pb-20 pt-7">
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
          <ArrowLeft size={24} color={isDark ? "#e5e5e5" : "#171717"} />
        </button>
        <div className="flex-1 text-center font-english-semibold text-[17px] text-neutral-900 dark:text-neutral-100">
          Lesson {darsNum} · {chapter.titleEn}
        </div>
        <div className="w-10 flex justify-end items-center">
          <ProgressRing progress={lessonProgress} color={isDark ? "#a3a3a3" : "#525252"} />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center relative w-full max-w-[800px] mx-auto min-h-[500px]">
        {/* Desktop Circular Layout & Mobile Grid Wrapper */}
        <div className="hidden md:flex w-full h-full items-center justify-center relative">
          {chunks.map((chunk, idx) => {
            const isCompleted = progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunk.id}`] === 'completed'
            const status = isCompleted ? 'completed' : 'open'

            const isLastVisited = lastVisited === idx
            const isInteractive = true

            const dynamicRadius = Math.max(90, (numChunks * 85) / (2 * Math.PI))
            const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / numChunks
            const x = dynamicRadius * Math.cos(angle)
            const y = dynamicRadius * Math.sin(angle)

            const circleBg = isLastVisited
              ? (isDark ? '#e5e5e5' : '#171717')
              : isCompleted ? (isDark ? '#262626' : '#e5e5e5')
                : (isDark ? '#171717' : '#f5f5f5')

            const iconColor = isLastVisited || isCompleted 
              ? (isDark ? '#171717' : '#ffffff')
              : (isDark ? '#a3a3a3' : '#525252')

            return (
              <div
                key={chunk.id}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  width: CHUNK_SIZE,
                  height: CHUNK_SIZE + 6,
                  zIndex: (isLastVisited || (lastVisited === null && idx === 0)) ? 100 : 5,
                }}
                className="flex items-end justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 + idx * 0.04, damping: 20, stiffness: 250 }}
                  className="flex items-center justify-center"
                >
                  <ChunkNode
                    idx={idx}
                    status={status}
                    isLastVisited={isLastVisited}
                    circleBg={circleBg}
                    iconColor={iconColor}
                    isDark={isDark}
                    onPress={() => isInteractive && handleChunkPress(chunk.id, idx)}
                  />
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-3 gap-6 p-6 content-center">
          {chunks.map((chunk, idx) => {
             const isCompleted = progressStore[`progress.v${volumeId}.c${chapterId}.d${darsNum}.${chunk.id}`] === 'completed'
             const status = isCompleted ? 'completed' : 'open'

             const isLastVisited = lastVisited === idx
             const isInteractive = true

             const circleBg = isLastVisited
               ? (isDark ? '#e5e5e5' : '#171717')
               : isCompleted ? (isDark ? '#262626' : '#e5e5e5')
                 : (isDark ? '#171717' : '#f5f5f5')

             const iconColor = isLastVisited || isCompleted 
               ? (isDark ? '#171717' : '#ffffff')
               : (isDark ? '#a3a3a3' : '#525252')

             return (
              <motion.div
                key={chunk.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 + idx * 0.04, damping: 20, stiffness: 250 }}
                style={{
                  width: CHUNK_SIZE,
                  height: CHUNK_SIZE,
                  zIndex: (isLastVisited || (lastVisited === null && idx === 0)) ? 100 : 5,
                }}
                className="flex items-center justify-center"
              >
                <ChunkNode
                  idx={idx}
                  status={status}
                  isLastVisited={isLastVisited}
                  circleBg={circleBg}
                  iconColor={iconColor}
                  isDark={isDark}
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
  iconColor,
  isDark,
  onPress,
}: {
  idx: number
  status: string
  isLastVisited: boolean
  circleBg: string
  iconColor: string
  isDark: boolean
  onPress: () => void
}) => {
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'
  
  const arrowBg = isLastVisited 
    ? (isDark ? '#e5e5e5' : '#171717')
    : (isDark ? '#262626' : '#f5f5f5')
    
  const arrowColor = isLastVisited 
    ? (isDark ? '#171717' : '#ffffff')
    : (isDark ? '#a3a3a3' : '#525252')

  return (
    <motion.button
      disabled={isLocked}
      whileTap={isLocked ? {} : { scale: 0.95 }}
      whileHover={isLocked ? {} : { scale: 1.05 }}
      onClick={onPress}
      className="relative focus:outline-none rounded-full flex items-center justify-center transition-colors"
      style={{
        width: CHUNK_SIZE,
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

        {(isLastVisited || (status === 'open' && !isLastVisited && idx === 0)) && (
          <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 1.03, y: -3 }}
            transition={{
              type: 'tween',
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -top-[30px] flex items-center justify-center rounded-full w-7 h-7"
            style={{
              backgroundColor: arrowBg,
            }}
          >
            <ArrowDown
              size={16}
              color={arrowColor}
              strokeWidth={2.5}
            />
            <div
              className="absolute -bottom-[4px] w-[8px] h-[8px] rounded-sm"
              style={{
                backgroundColor: arrowBg,
                transform: 'rotate(45deg)',
              }}
            />
          </motion.div>
        )}
    </motion.button>
  )
}
