import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Check } from 'lucide-react'

export type NodeStatus = 'completed' | 'current' | 'open' | 'locked'

type Props = {
  number: number
  status: NodeStatus
  faceColor: string
  shadowColor: string
  textColor: string
  entryDelay?: number
  onPress?: () => void
}

export const LessonNode: React.FC<Props> = ({
  number,
  status,
  faceColor,
  textColor,
  entryDelay = 0,
  onPress,
}) => {
  const [, setIsPressed] = useState(false)
  const SIZE = 72
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'

  const handlePointerDown = () => {
    if (!isLocked) setIsPressed(true)
  }

  const handlePointerUp = () => {
    if (!isLocked) {
      setIsPressed(false)
      onPress?.()
    }
  }

  const handlePointerLeave = () => {
    if (!isLocked) setIsPressed(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        delay: entryDelay / 1000,
        damping: 20,
        stiffness: 250,
      }}
      className="shrink-0"
    >
      <button
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        disabled={isLocked}
        className={`flex items-center justify-center rounded-full outline-none transition-transform duration-75 ${
          !isLocked ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'
        }`}
        style={{
          width: SIZE,
          height: SIZE,
          backgroundColor: faceColor,
        }}
        aria-label={`Lesson ${number}`}
      >
        {isLocked ? (
          <Lock size={24} color={textColor} />
        ) : isCompleted ? (
          <Check size={30} color={textColor} strokeWidth={3} />
        ) : (
          <span
            className="font-english-semibold text-[24px] leading-[30px]"
            style={{ color: textColor }}
          >
            {number}
          </span>
        )}
      </button>
    </motion.div>
  )
}
