import React, { useState } from 'react'
import { Flame, Zap } from 'lucide-react'
import { useGamificationStore } from '../../state/gamificationStore'
import { DailyTasksDrawer } from './DailyTasksDrawer'

export const GamificationHeaderWidget: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { streak, xp, dailyTasks } = useGamificationStore()

  const completedCount = dailyTasks.filter((t) => t.isCompleted).length
  const totalTasks = dailyTasks.length
  const unclaimedCount = dailyTasks.filter((t) => t.isCompleted && !t.isClaimed).length

  return (
    <>
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 transition-all cursor-pointer select-none text-xs font-english-bold outline-none group"
        title={`View Daily Quests (${completedCount}/${totalTasks}) & Rewards`}
      >
        {/* Streak Pill */}
        <div className="flex items-center gap-1 text-orange-500">
          <Flame className="w-3.5 h-3.5 fill-orange-500 group-hover:scale-110 transition-transform" />
          <span>{streak}</span>
        </div>

        <span className="text-neutral-300 dark:text-neutral-600">|</span>

        {/* XP Pill */}
        <div className="flex items-center gap-1 text-amber-500">
          <Zap className="w-3.5 h-3.5 fill-amber-500 group-hover:scale-110 transition-transform" />
          <span>{xp}</span>
        </div>

        {/* Daily Quests Indicator */}
        <div className="relative pl-1">
          <div className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-[9px] text-neutral-600 dark:text-neutral-300">
            {completedCount}
          </div>
          {unclaimedCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          )}
        </div>
      </button>

      <DailyTasksDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
