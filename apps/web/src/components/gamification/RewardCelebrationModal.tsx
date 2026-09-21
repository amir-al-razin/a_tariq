import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import confetti from '../../lib/confetti'
import { useGamificationStore } from '../../state/gamificationStore'
import { useLanguage } from '../../hooks/useLanguage'

export const RewardCelebrationModal: React.FC = () => {
  const pendingReward = useGamificationStore((s) => s.pendingReward)
  const clearPendingReward = useGamificationStore((s) => s.clearPendingReward)
  const { language } = useLanguage()
  const isBn = language === 'bn'

  useEffect(() => {
    if (pendingReward) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.5 },
      })
    }
  }, [pendingReward])

  if (!pendingReward || typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          className="relative w-full max-w-sm bg-neutral-50 dark:bg-neutral-900 rounded-4xl p-6 text-center font-english overflow-hidden border-0 shadow-none"
        >
          {/* Close button */}
          <button
            onClick={clearPendingReward}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center justify-center transition-colors border-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="mx-auto w-16 h-16 rounded-3xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl mb-4 border-0">
            {pendingReward.badge ? pendingReward.badge.icon : '🎉'}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-accent-primary text-xs font-english-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{isBn ? 'পুরস্কার অর্জিত' : 'Reward Unlocked'}</span>
          </div>

          <h3 className="text-xl font-english-bold text-neutral-900 dark:text-neutral-50 mb-2">
            {pendingReward.title}
          </h3>

          {pendingReward.badge && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {pendingReward.badge.description}
            </p>
          )}

          {/* Reward Badges */}
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-300 font-english-bold text-sm border-0">
              <span>⚡</span>
              <span>+{pendingReward.xp} XP</span>
            </div>

            {pendingReward.coins > 0 && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 font-english-bold text-sm border-0">
                <span>🪙</span>
                <span>+{pendingReward.coins} {isBn ? 'কয়েন' : 'Coins'}</span>
              </div>
            )}
          </div>

          {/* 56px Action Button */}
          <button
            onClick={clearPendingReward}
            className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center transition-all active:scale-[0.98] border-0 shadow-none cursor-pointer"
          >
            {isBn ? 'চালিয়ে যান' : 'Awesome, Continue!'}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}
