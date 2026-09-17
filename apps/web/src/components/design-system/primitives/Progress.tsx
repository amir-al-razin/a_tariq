import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  progress: number; // 0 to 1
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const clamped = Math.max(0, Math.min(1, progress));
  const percent = Math.round(clamped * 100);

  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  }[size];

  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      <div className={`flex-1 ${heightClass} bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden`}>
        <motion.div
          className="h-full bg-accent-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <span className="font-mono text-xs font-bold text-accent-primary min-w-[36px] text-right">
          {percent}%
        </span>
      )}
    </div>
  );
};

export interface ProgressRingProps {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 36,
  strokeWidth = 3.5,
  color = 'var(--accent-primary)',
  className = '',
}) => {
  const clamped = Math.max(0, Math.min(1, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - clamped * circumference;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          className="text-neutral-200 dark:text-neutral-800"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <span className="absolute font-mono text-[10px] font-bold text-accent-primary">
        {Math.round(clamped * 100)}%
      </span>
    </div>
  );
};

export interface StepDotsProps {
  total: number;
  current: number;
  completed?: number;
  onSelect?: (index: number) => void;
  className?: string;
}

export const StepDots: React.FC<StepDotsProps> = ({
  total,
  current,
  completed = 0,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 justify-center flex-wrap ${className}`}>
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        const isPast = i < current || i < completed;

        return (
          <button
            key={i}
            type="button"
            disabled={!onSelect}
            onClick={() => onSelect?.(i)}
            aria-label={`Step ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              onSelect ? 'cursor-pointer' : 'cursor-default'
            } ${
              isActive
                ? 'w-6 bg-accent-primary'
                : isPast
                ? 'w-2 bg-accent-secondary'
                : 'w-1.5 bg-neutral-200 dark:bg-neutral-800'
            }`}
          />
        );
      })}
    </div>
  );
};
