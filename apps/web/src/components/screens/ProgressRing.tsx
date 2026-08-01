import React from 'react'
import { motion } from 'framer-motion'

export const ProgressRing = ({ progress, size = 56, strokeWidth = 4, color = '#34D3AA' }: { progress: number, size?: number, strokeWidth?: number, color?: string }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - progress * circumference

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
          transition={{ duration: 1.5, ease: 'easeOut' }}
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
