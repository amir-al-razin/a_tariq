import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Flame, Zap, CheckCircle2, Gift, Coins } from 'lucide-react'
import { useGamificationStore } from '../../state/gamificationStore'
import { useVocabStore } from '../../state/vocabStore'
import { useLanguage } from '../../hooks/useLanguage'

interface DailyTasksDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const DailyTasksDrawer: React.FC<DailyTasksDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'badges'>('tasks')
  const { language } = useLanguage()
  const isBn = language === 'bn'

  const {
    streak,
    xp,
    coins,
    dailyTasks,
    badges,
    claimDailyTaskReward,
  } = useGamificationStore()

  const quranStats = useVocabStore((s) => s.quranStats)

  const completedCount = dailyTasks.filter((t) => t.isCompleted).length
  const totalTasks = dailyTasks.length

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-english">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-neutral-50 dark:bg-neutral-950 flex flex-col h-full border-0 shadow-none"
            >
              {/* Header */}
              <div className="p-6 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-english-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-accent-primary" />
                    {isBn ? 'দৈনিক লক্ষ্য ও পুরস্কার' : 'Daily Goals & Rewards'}
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {isBn
                      ? 'পুরস্কার এবং এক্সপি পেতে লক্ষ্যগুলো সম্পন্ন করুন'
                      : 'Complete quests to unlock badges and XP rewards'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-2xl text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors border-0 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-2 p-3.5 mx-6 my-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 text-center border-0">
                <div className="p-1.5">
                  <div className="flex items-center justify-center gap-1 text-orange-500 font-english-bold text-base">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    <span>{streak}</span>
                  </div>
                  <span className="text-[10px] font-english-medium text-neutral-500 dark:text-neutral-400">
                    {isBn ? 'ধারাবাহিকতা' : 'Streak'}
                  </span>
                </div>

                <div className="p-1.5">
                  <div className="flex items-center justify-center gap-1 text-amber-500 font-english-bold text-base">
                    <Zap className="w-4 h-4 fill-amber-500" />
                    <span>{xp}</span>
                  </div>
                  <span className="text-[10px] font-english-medium text-neutral-500 dark:text-neutral-400">
                    XP
                  </span>
                </div>

                <div className="p-1.5">
                  <div className="flex items-center justify-center gap-1 text-yellow-600 dark:text-yellow-400 font-english-bold text-base">
                    <Coins className="w-4 h-4" />
                    <span>{coins}</span>
                  </div>
                  <span className="text-[10px] font-english-medium text-neutral-500 dark:text-neutral-400">
                    {isBn ? 'কয়েন' : 'Coins'}
                  </span>
                </div>

                <div className="p-1.5">
                  <div className="flex items-center justify-center gap-0.5 text-emerald-500 font-english-bold text-base">
                    <span>📖</span>
                    <span>{quranStats.percentage}%</span>
                  </div>
                  <span className="text-[10px] font-english-medium text-neutral-500 dark:text-neutral-400">
                    {isBn ? 'কুরআন' : 'Quran'}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex p-1 mx-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-0 gap-1">
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`flex-1 py-2 px-3 text-xs font-english-bold rounded-xl transition-all cursor-pointer border-0 ${
                    activeTab === 'tasks'
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 bg-transparent'
                  }`}
                >
                  {isBn ? 'দৈনিক লক্ষ্য' : 'Daily Quests'} ({completedCount}/{totalTasks})
                </button>
                <button
                  onClick={() => setActiveTab('badges')}
                  className={`flex-1 py-2 px-3 text-xs font-english-bold rounded-xl transition-all cursor-pointer border-0 ${
                    activeTab === 'badges'
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 bg-transparent'
                  }`}
                >
                  {isBn ? 'ব্যাজ ও ট্রফি' : 'Badges'} ({badges.filter((b) => b.unlockedAt).length}/{badges.length})
                </button>
              </div>

              {/* Content List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {activeTab === 'tasks' ? (
                  <>
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-english-medium mb-1">
                      <span>{isBn ? 'আজকের অগ্রগতি' : "Today's Progress"}</span>
                      <span>{Math.round((completedCount / totalTasks) * 100)}% {isBn ? 'সম্পন্ন' : 'Completed'}</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mb-6">
                      <div
                        className="h-full bg-accent-primary rounded-full transition-all duration-500"
                        style={{ width: `${(completedCount / totalTasks) * 100}%` }}
                      />
                    </div>

                    {dailyTasks.map((task) => {
                      const pct = Math.min(100, Math.round((task.currentCount / task.targetCount) * 100))

                      return (
                        <div
                          key={task.id}
                          className={`p-4 rounded-3xl border-0 transition-all ${
                            task.isCompleted
                              ? 'bg-emerald-500/10 dark:bg-emerald-950/30'
                              : 'bg-neutral-100 dark:bg-neutral-900'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl mt-0.5">{task.icon}</span>
                              <div>
                                <h4 className="font-english-bold text-sm text-neutral-900 dark:text-neutral-100">
                                  {task.title}
                                </h4>
                                <span className="font-arabic text-xs text-neutral-500 dark:text-neutral-400 block" dir="rtl">
                                  {task.titleAr}
                                </span>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                  {task.description}
                                </p>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <div className="flex items-center gap-1 text-xs font-english-bold text-accent-primary">
                                <span>⚡</span>
                                <span>+{task.xpReward}</span>
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar & Action */}
                          <div className="mt-3 pt-3 flex items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-[11px] font-english-medium text-neutral-500 dark:text-neutral-400 mb-1">
                                <span>{isBn ? 'অগ্রগতি' : 'Progress'}</span>
                                <span>
                                  {task.currentCount} / {task.targetCount}
                                </span>
                              </div>
                              <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    task.isCompleted ? 'bg-emerald-500' : 'bg-neutral-900 dark:bg-neutral-200'
                                  }`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>

                            {task.isCompleted && !task.isClaimed && (
                              <button
                                onClick={() => claimDailyTaskReward(task.id)}
                                className="px-3.5 py-2 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-white font-english-bold text-xs border-0 shadow-none cursor-pointer active:scale-95 transition-all shrink-0"
                              >
                                {isBn ? 'পুরস্কার নিন' : 'Claim Reward'}
                              </button>
                            )}

                            {task.isClaimed && (
                              <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-english-bold shrink-0">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>{isBn ? 'গৃহীত' : 'Claimed'}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {badges.map((badge) => {
                      const isUnlocked = Boolean(badge.unlockedAt)
                      return (
                        <div
                          key={badge.id}
                          className={`p-4 rounded-3xl border-0 flex items-center gap-4 transition-all ${
                            isUnlocked
                              ? 'bg-neutral-100 dark:bg-neutral-900'
                              : 'bg-neutral-100/50 dark:bg-neutral-900/40 opacity-60'
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                              isUnlocked
                                ? 'bg-accent-primary/10 text-accent-primary'
                                : 'bg-neutral-200 dark:bg-neutral-800 grayscale'
                            }`}
                          >
                            {badge.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-english-bold text-sm text-neutral-900 dark:text-neutral-100">
                                {badge.title}
                              </h4>
                              {isUnlocked && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-english-semibold">
                                  {isBn ? 'আনলক করা' : 'Unlocked'}
                                </span>
                              )}
                            </div>
                            <span className="font-arabic text-xs text-neutral-500 block" dir="rtl">
                              {badge.titleAr}
                            </span>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                              {badge.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
