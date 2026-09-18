import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Timer, Zap, Check, RotateCcw, Sparkles, Trophy, Play } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { BlitzPair } from './practiceLessonData'
import { useGamificationStore } from '../../state/gamificationStore'

interface VocabSpeedBlitzModuleProps {
  pairs: BlitzPair[]
  onFinish?: () => void
}

interface TileItem {
  id: string
  pairId: string
  text: string
  type: 'ar' | 'en'
  isMatched: boolean
  emoji?: string
}

export const VocabSpeedBlitzModule: React.FC<VocabSpeedBlitzModuleProps> = ({
  pairs,
  onFinish,
}) => {
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
        id: `en-${pair.id}`,
        pairId: pair.id,
        text: pair.en,
        type: 'en',
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
  }, [pairs])

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
      addXp(bonusXp, 'Vocab Speed Blitz Mastered!')
      if (onFinish) onFinish()
    }
  }, [tiles, gameState, score, onFinish, recordPracticeResult, addXp])

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

    // Both same type (both Arabic or both English) -> switch selection
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

  return (
    <div className="w-full bg-[#FAF8F5] dark:bg-[#141311] rounded-3xl p-6 sm:p-10 border border-[#E7E2D9] dark:border-[#26231E] shadow-xl font-english space-y-8 transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#E7E2D9] dark:border-[#26231E] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#F0ECE1] dark:bg-[#201D18] border border-[#DDD6C8] dark:border-[#332E27] text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-english-bold text-xs uppercase tracking-widest text-neutral-500">
                Rapid Recall · مُطَابَقَةُ الْمُفْرَدَاتِ
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] font-english-bold">
                Combo Multipliers
              </span>
            </div>
            <h2 className="font-english-bold text-base text-neutral-900 dark:text-neutral-100">
              Vocabulary Speed Blitz
            </h2>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="flex items-center gap-2.5">
          {/* Countdown Clock */}
          <div className="flex items-center gap-1.5 text-xs font-english-bold px-3 py-1.5 rounded-xl bg-[#EFEAE0] dark:bg-[#201D19] border border-[#DDD6C8] dark:border-[#332E27] text-neutral-800 dark:text-neutral-200">
            <Timer className={`w-3.5 h-3.5 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-neutral-500'}`} />
            <span>{timeLeft}s</span>
          </div>

          {/* Combo Multiplier */}
          <div className="flex items-center gap-1 text-xs font-english-bold px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{combo}x Streak</span>
          </div>

          {/* Points */}
          <span className="text-xs font-english-bold px-3.5 py-1.5 rounded-xl bg-[#1C1917] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#1C1917] shadow-sm">
            {score} pts
          </span>
        </div>
      </div>

      {gameState === 'idle' ? (
        <div className="text-center py-12 px-6 bg-[#FFFFFF] dark:bg-[#0C0B0A] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] dark:bg-[#181613] border border-[#ECE6DB] dark:border-[#28241E] text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl shadow-inner">
            ⚡
          </div>
          <h3 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Rapid Lexical Match Challenge
          </h3>
          <p className="text-xs max-w-md mx-auto text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Match Arabic vocabulary with their English equivalents before the 45-second timer runs out. Consecutive correct matches activate combo multipliers!
          </p>
          <button
            onClick={setupGame}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-xs shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Begin Speed Blitz</span>
          </button>
        </div>
      ) : gameState === 'completed' ? (
        <div className="text-center py-10 px-6 bg-[#FFFFFF] dark:bg-[#0C0B0A] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-english-bold text-neutral-900 dark:text-neutral-50">
            Speed Blitz Finished!
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Final Score: <span className="font-english-bold text-neutral-900 dark:text-neutral-100">{score} points</span> with peak streak of {combo}x.
          </p>
          <button
            onClick={setupGame}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-bold text-xs shadow-md mx-auto transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Play Another Round</span>
          </button>
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
                  className="h-24 rounded-2xl border border-dashed border-[#DFD8CC]/60 dark:border-[#2C2822] bg-neutral-100/20 dark:bg-neutral-900/10 flex items-center justify-center opacity-25 select-none"
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
                className={`h-24 p-3 rounded-2xl border text-center flex flex-col items-center justify-center transition-all cursor-pointer select-none shadow-sm relative ${
                  isWrong
                    ? 'bg-red-500/15 border-red-500 text-red-900 dark:text-red-100 ring-2 ring-red-500/30'
                    : isSelected
                      ? 'bg-[#1C1917] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#1C1917] border-transparent scale-[1.03] shadow-md'
                      : 'bg-[#FFFFFF] dark:bg-[#1A1815] hover:border-neutral-400 dark:hover:border-neutral-600 border-[#DFD8CC] dark:border-[#2C2822]'
                }`}
              >
                {tile.type === 'ar' ? (
                  <span className="font-arabic text-3xl sm:text-4xl" dir="rtl">
                    {tile.text}
                  </span>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1 font-english-bold text-sm">
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
