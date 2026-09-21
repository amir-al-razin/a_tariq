import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Sparkles, PenTool, ArrowRight } from 'lucide-react'
import * as m from '#/paraglide/messages.js'
import { ArabicDoodleCanvas } from '../doodle/ArabicDoodleCanvas'
import { RewardCelebrationModal } from '../gamification/RewardCelebrationModal'
import { useLanguage } from '@/hooks/useLanguage'

export const HomeScreen = () => {
  const [isAtelierOpen, setIsAtelierOpen] = useState(false)
  const { language } = useLanguage()
  const isBn = language === 'bn'

  const volumes = [
    {
      id: 1,
      title: m['home.volume1'](),
      subtitle: m['home.volume1Subtitle'](),
      locked: false,
    },
    {
      id: 2,
      title: m['home.volume2'](),
      subtitle: m['home.volume2Subtitle'](),
      locked: false,
    },
    {
      id: 3,
      title: m['home.volume3'](),
      subtitle: m['home.volume3Subtitle'](),
      locked: false,
    },
  ]

  return (
    <div className="flex-1 bg-white px-6 py-8 dark:bg-neutral-950 min-h-screen">
      <div className="max-w-[1024px] mx-auto w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="font-english-semibold text-[34px] leading-[40px] tracking-[-0.4px] text-neutral-900 dark:text-neutral-100">
            {m['home.title']()}
          </h1>
          <p className="font-english text-[16px] leading-[26px] text-neutral-500 dark:text-neutral-400">
            {m['home.subtitle']()}
          </p>
        </div>

        {/* Volume Journey Selection Cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volumes.map((vol) => {
            if (vol.locked) {
              return (
                <div
                  key={vol.id}
                  className="w-full flex flex-row items-center justify-between rounded-3xl bg-neutral-100 p-6 dark:bg-neutral-900"
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="font-english-semibold text-[22px] leading-[28px] tracking-[-0.1px] text-neutral-400 dark:text-neutral-500">
                      {vol.title}
                    </h2>
                    <p className="font-english text-[14px] leading-[22px] text-neutral-400 dark:text-neutral-600">
                      {m['home.locked']()}
                    </p>
                  </div>
                  <Lock size={18} color="#737373" />
                </div>
              )
            }

            return (
              <motion.div
                key={vol.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Link
                  to="/volume/$volumeId"
                  params={{ volumeId: vol.id }}
                  className="block w-full rounded-3xl bg-neutral-100 p-6 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors"
                >
                  <h2 className="font-english-semibold text-[22px] leading-[28px] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
                    {vol.title}
                  </h2>
                  <p className="mt-1 font-english text-[14px] leading-[22px] text-neutral-500 dark:text-neutral-400">
                    {vol.subtitle}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>
        
        {/* Clean Calligraphy Atelier Launcher */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setIsAtelierOpen(true)}
          className="mt-2 w-full rounded-4xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 p-6 sm:p-8 cursor-pointer transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group select-none"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Calligraphy Pen Icon Badge */}
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-16 h-16 rounded-3xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-accent-primary shrink-0 transition-transform group-hover:scale-105"
            >
              <PenTool className="w-7 h-7 stroke-[2]" />
            </motion.div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-accent-primary/15 text-accent-primary text-[10px] font-english-bold uppercase tracking-wider">
                  {isBn ? 'হাতের লেখা অনুশীলন' : 'Handwriting Practice'}
                </span>
                <span className="text-xs font-english-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>+30 XP</span>
                </span>
              </div>
              <h2 className="font-english-semibold text-[22px] leading-[28px] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
                {isBn ? 'ক্যালিগ্রাফি স্টুডিও' : 'Calligraphy Atelier'}
              </h2>
              <p className="font-english text-[14px] leading-[22px] text-neutral-500 dark:text-neutral-400 max-w-xl">
                {isBn
                  ? 'সঠিক নিয়মে আরবি হরফ, সংখ্যা ও শব্দ লেখার অনুশীলন করুন।'
                  : 'Practice writing Arabic letters, numerals, and words with guided strokes.'}
              </p>
            </div>
          </div>

          {/* 56px Action Button with White Text */}
          <div className="w-full md:w-auto shrink-0">
            <button
              type="button"
              className="w-full md:w-auto h-14 px-7 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-bold text-sm inline-flex items-center justify-center gap-2 transition-all pointer-events-none shadow-none border-0"
            >
              <span className="text-white">{isBn ? 'স্টুডিও খুলুন' : 'Open Atelier'}</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Dedicated Calligraphy Atelier Modal Dialog */}
        <AnimatePresence>
          {isAtelierOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
              onClick={() => setIsAtelierOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-5xl my-auto max-h-[94vh] overflow-y-auto rounded-4xl bg-neutral-100 dark:bg-neutral-900"
                onClick={(e) => e.stopPropagation()}
              >
                <ArabicDoodleCanvas onClose={() => setIsAtelierOpen(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <RewardCelebrationModal />
      </div>
    </div>
  )
}
