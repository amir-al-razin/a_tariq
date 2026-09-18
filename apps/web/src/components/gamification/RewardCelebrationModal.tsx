import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useGamificationStore } from '../../state/gamificationStore'

export const RewardCelebrationModal: React.FC = () => {
  const pendingReward = useGamificationStore((s) => s.pendingReward)
  const clearPendingReward = useGamificationStore((s) => s.clearPendingReward)

  useEffect(() => {
    if (pendingReward) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
      })
    }
  }, [pendingReward])

  if (!pendingReward || typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          className="relative w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-neutral-200/80 dark:border-neutral-700/80 text-center font-english overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={clearPendingReward}
            className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Animated glow background */}
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-400/20 dark:bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-emerald-400/20 dark:bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center text-3xl mb-4 shadow-inner">
            {pendingReward.badge ? pendingReward.badge.icon : '🎉'}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-english-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Reward Unlocked</span>
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
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-amber-700 dark:text-amber-300 font-english-bold text-sm">
              <span>⚡</span>
              <span>+{pendingReward.xp} XP</span>
            </div>

            {pendingReward.coins > 0 && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200/50 dark:border-yellow-800/40 text-yellow-700 dark:text-yellow-300 font-english-bold text-sm">
                <span>🪙</span>
                <span>+{pendingReward.coins} Coins</span>
              </div>
            )}
          </div>

          <button
            onClick={clearPendingReward}
            className="w-full py-3 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-english-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
          >
            Awesome, Continue!
          </button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}
