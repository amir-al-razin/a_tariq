import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Timer, Zap, Check, RotateCcw, Sparkles, Trophy, Play } from 'lucide-react'
import confetti from '../../lib/confetti'
import type { BlitzPair } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'
import { useLanguage } from '../../hooks/useLanguage'

interface VocabSpeedBlitzModuleProps {
  pairs: BlitzPair[]
  onFinish?: () => void
}

interface TileItem {
  id: string
  pairId: string
  text: string
  type: 'ar' | 'meaning'
  isMatched: boolean
  emoji?: string
}

export const VocabSpeedBlitzModule: React.FC<VocabSpeedBlitzModuleProps> = ({
  pairs,
  onFinish,
}) => {
  const { language } = useLanguage()
  const isBn = language === 'bn'

  const [gameState, setGameState] = useState<'idle' | 'playing' | 'completed'>('idle')
  const [tiles, setTiles] = useState<TileItem[]>([])
  const [selectedTile, setSelectedTile] = useState<TileItem | null>(null)
  const [wrongPairIds, setWrongPairIds] = useState<string[]>([])
  const [combo, setCombo] = useState(1)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(45)

  const recordPracticeResult = useGamificationStore((s) => s.recordPracticeResult)
  const addXp = useGamificationStore((s) => s.addXp)

  // Shuffle and setup game
  const setupGame = useCallback(() => {
    const generatedTiles: TileItem[] = []
    pairs.slice(0, 6).forEach((pair) => {
      generatedTiles.push({
        id: `ar-${pair.id}`,
        pairId: pair.id,
        text: pair.ar,
        type: 'ar',
        isMatched: false,
      })
      generatedTiles.push({
        id: `meaning-${pair.id}`,
        pairId: pair.id,
        text: isBn && pair.bn ? pair.bn : pair.en,
        type: 'meaning',
        emoji: pair.emoji,
        isMatched: false,
      })
    })

    // Shuffle tiles
    setTiles(generatedTiles.sort(() => Math.random() - 0.5))
    setSelectedTile(null)
    setWrongPairIds([])
    setCombo(1)
    setScore(0)
    setTimeLeft(45)
    setGameState('playing')
  }, [pairs, isBn])

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing') return

    if (timeLeft <= 0) {
      setGameState('completed')
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, timeLeft])

  // Check completion
  useEffect(() => {
    if (gameState === 'playing' && tiles.length > 0 && tiles.every((t) => t.isMatched)) {
      setGameState('completed')
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.5 } })
      recordPracticeResult(true)
      const bonusXp = Math.min(100, Math.round(score / 10))
      addXp(bonusXp, isBn ? 'স্পিড ব্লিৎজ আয়ত্ত হয়েছে!' : 'Vocab Speed Blitz Mastered!')
      if (onFinish) onFinish()
    }
  }, [tiles, gameState, score, onFinish, recordPracticeResult, addXp, isBn])

  const playAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
  }

  const handleTileClick = (tile: TileItem) => {
    if (tile.isMatched || gameState !== 'playing') return

    if (tile.type === 'ar') {
      playAudio(tile.text)
    }

    if (!selectedTile) {
      setSelectedTile(tile)
      return
    }

    // Clicked same tile
    if (selectedTile.id === tile.id) {
      setSelectedTile(null)
      return
    }

    // Both same type (both Arabic or both meanings) -> switch selection
    if (selectedTile.type === tile.type) {
      setSelectedTile(tile)
      return
    }

    // Check Match
    if (selectedTile.pairId === tile.pairId) {
      const points = 10 * combo
      setScore((s) => s + points)
      setCombo((c) => Math.min(4, c + 1))

      setTiles((prev) =>
        prev.map((t) => (t.pairId === tile.pairId ? { ...t, isMatched: true } : t))
      )
      setSelectedTile(null)
    } else {
      // Mismatch
      setWrongPairIds([selectedTile.id, tile.id])
      setCombo(1)
      setSelectedTile(null)
      setTimeout(() => {
        setWrongPairIds([])
      }, 500)
    }
  }

  const t = {
    rapidRecall: isBn ? 'দ্রুত স্মৃতিপরীক্ষা · مُطَابَقَةُ الْمُفْرَدَاتِ' : 'Rapid Recall · مُطَابَقَةُ الْمُفْرَدَاتِ',
    comboMultipliers: isBn ? 'কম্বো মাল্টিপ্লায়ার' : 'Combo Multipliers',
    title: isBn ? 'শব্দভাণ্ডার স্পিড ব্লিৎজ' : 'Vocabulary Speed Blitz',
    streak: isBn ? 'গুণিতক ধারা' : 'Streak',
    pts: isBn ? 'পয়েন্ট' : 'pts',
    challengeTitle: isBn ? 'দ্রুত শব্দ মেলানোর চ্যালেঞ্জ' : 'Rapid Lexical Match Challenge',
    challengeDesc: isBn
      ? '৪৫ সেকেন্ড সময় শেষ হওয়ার আগেই আরবি শব্দের সাথে সঠিক বাংলা অর্থ মিলিয়ে নিন। প্রতিটি সঠিক মিললে কম্বো বোনাস স্কোর পাবেন!'
      : 'Match Arabic vocabulary with their English equivalents before the 45-second timer runs out. Consecutive correct matches activate combo multipliers!',
    beginButton: isBn ? 'স্পিড ব্লিৎজ শুরু করুন' : 'Begin Speed Blitz',
    finishedTitle: isBn ? 'স্পিড ব্লিৎজ সমাপ্ত!' : 'Speed Blitz Finished!',
    finalScore: isBn ? 'চূড়ান্ত স্কোর:' : 'Final Score:',
    pointsLabel: isBn ? 'পয়েন্ট' : 'points',
    withPeak: isBn ? ', সর্বোচ্চ ধারা ছিল ' : ' with peak streak of ',
    playAgain: isBn ? 'পুনরায় খেলুন' : 'Play Another Round',
  }

  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-4xl p-6 sm:p-10 font-english space-y-8 transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                {t.rapidRecall}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-english-bold">
                {t.comboMultipliers}
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              {t.title}
            </h2>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="flex items-center gap-2.5">
          {/* Countdown Clock */}
          <div className="flex items-center gap-1.5 text-xs font-english-bold px-3 py-1.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <Timer className={`w-3.5 h-3.5 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-neutral-500'}`} />
            <span>{timeLeft}s</span>
          </div>

          {/* Combo Multiplier */}
          <div className="flex items-center gap-1 text-xs font-english-bold px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{combo}x {t.streak}</span>
          </div>

          {/* Points */}
          <span className="text-xs font-english-bold px-3.5 py-1.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900">
            {score} {t.pts}
          </span>
        </div>
      </div>

      {gameState === 'idle' ? (
        <div className="text-center py-12 px-6 bg-neutral-50 dark:bg-neutral-950 rounded-3xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl">
            ⚡
          </div>
          <h3 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {t.challengeTitle}
          </h3>
          <p className="text-xs max-w-md mx-auto text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {t.challengeDesc}
          </p>
          <div className="pt-2">
            <button
              onClick={setupGame}
              className="h-14 px-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-bold text-sm active:scale-95 transition-all cursor-pointer shadow-none border-0"
            >
              <Play className="w-4 h-4 text-white fill-current" />
              <span className="text-white">{t.beginButton}</span>
            </button>
          </div>
        </div>
      ) : gameState === 'completed' ? (
        <div className="text-center py-10 px-6 bg-neutral-50 dark:bg-neutral-950 rounded-3xl space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50">
            {t.finishedTitle}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {t.finalScore} <span className="font-english-bold text-neutral-900 dark:text-neutral-100">{score} {t.pointsLabel}</span>{t.withPeak}{combo}x.
          </p>
          <div className="pt-2">
            <button
              onClick={setupGame}
              className="h-14 px-8 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-sm mx-auto transition-all cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.playAgain}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Game Grid: Tactile Lexical Tiles */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-1">
          {tiles.map((tile) => {
            const isSelected = selectedTile?.id === tile.id
            const isWrong = wrongPairIds.includes(tile.id)

            if (tile.isMatched) {
              return (
                <div
                  key={tile.id}
                  className="h-24 rounded-3xl bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center opacity-30 select-none"
                >
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              )
            }

            return (
              <motion.button
                key={tile.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleTileClick(tile)}
                className={`h-24 p-3 rounded-3xl text-center flex flex-col items-center justify-center transition-all cursor-pointer select-none relative ${
                  isWrong
                    ? 'bg-red-500/20 text-red-900 dark:text-red-100 ring-2 ring-red-500/40'
                    : isSelected
                      ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 scale-[1.03]'
                      : 'bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                }`}
              >
                {tile.type === 'ar' ? (
                  <span className="font-arabic text-3xl sm:text-4xl" dir="rtl">
                    {tile.text}
                  </span>
                ) : (
                  <div className={`flex flex-col items-center justify-center gap-1 ${isBn ? 'font-bengali' : 'font-english-bold'} text-sm`}>
                    {tile.emoji && <span className="text-lg">{tile.emoji}</span>}
                    <span className="leading-tight">{tile.text}</span>
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      )}
    </div>
  )
}
