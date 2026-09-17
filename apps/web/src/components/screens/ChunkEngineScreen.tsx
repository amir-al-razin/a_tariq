import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, Check } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { SCROLL_COMPLETE_TYPES } from '../../lib/pedagogy'
import * as m from '#/paraglide/messages.js'

import {
  VocabularyView,
  GrammarRuleView,
  ApplicationView,
  QAndAView,
  TarkeebView,
  VerbTableView,
  IdafahView,
  ParagraphView,
  MasdarFactoryView
} from '../pedagogy-v2'
import { setChunkProgress } from '../../state/progressStore'
import TransliterationToggle from '../TransliterationToggle'

type Props = {
  volumeId: 1 | 2 | 3
  chapterId: number
  darsNum: number
  chunkId: string
}

export const ChunkEngineScreen: React.FC<Props> = ({
  volumeId,
  chapterId,
  darsNum,
  chunkId,
}) => {
  const navigate = useNavigate()
  const [, setIsDark] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const completeFiredRef = useRef(false)

  useEffect(() => {
    setProgress(0)
    setIsComplete(false)
    completeFiredRef.current = false
  }, [chunkId])

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const dataMap = {
    1: CHAPTERS,
    2: CHAPTERS_VOL2,
    3: CHAPTERS_VOL3,
  }
  const allChapters = dataMap[volumeId]
  const chapter = allChapters.find((c) => c.id === chapterId)
  const lesson = chapter?.lessons.find((l) => l.darsNumber === darsNum)
  const chunk = lesson?.chunks.find((c) => c.id === chunkId)

  const isScrollCompletionType = chunk
    ? SCROLL_COMPLETE_TYPES.includes(chunk.type)
    : false

  const currentChunkIndex = lesson?.chunks.findIndex((c) => c.id === chunkId) ?? -1
  const nextChunk = currentChunkIndex !== -1 && currentChunkIndex < (lesson?.chunks.length ?? 0) - 1 
    ? lesson?.chunks[currentChunkIndex + 1] 
    : null

  const handleComplete = useCallback(() => {
    if (completeFiredRef.current) return
    completeFiredRef.current = true
    setProgress(1)
    setIsComplete(true)
    setChunkProgress(volumeId, chapterId, darsNum, chunkId, 'completed')
  }, [volumeId, chapterId, darsNum, chunkId])

  const checkScrollCompletion = useCallback(() => {
    if (!isScrollCompletionType || completeFiredRef.current || !contentRef.current)
      return

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const remaining = scrollHeight - scrollTop - clientHeight

    if (remaining < 80) {
      handleComplete()
    } else {
      const pct = Math.min((scrollTop + clientHeight) / scrollHeight, 0.99)
      setProgress(pct)
    }
  }, [isScrollCompletionType, handleComplete])

  useEffect(() => {
    if (!isScrollCompletionType) return

    // Initial check in case content is smaller than viewport
    setTimeout(checkScrollCompletion, 100)

    window.addEventListener('scroll', checkScrollCompletion)
    window.addEventListener('resize', checkScrollCompletion)

    return () => {
      window.removeEventListener('scroll', checkScrollCompletion)
      window.removeEventListener('resize', checkScrollCompletion)
    }
  }, [isScrollCompletionType, checkScrollCompletion])

  const goBack = useCallback(() => {
    navigate({
      to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum',
      params: {
        volumeId: volumeId.toString(),
        chapterId: chapterId,
        darsNum: darsNum,
      },
    })
  }, [navigate, volumeId, chapterId, darsNum])

  const handleContinue = useCallback(() => {
    if (nextChunk) {
      navigate({
        to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/chunk/$chunkId',
        params: {
          volumeId: volumeId.toString(),
          chapterId: chapterId.toString(),
          darsNum: darsNum.toString(),
          chunkId: nextChunk.id,
        },
      })
    } else {
      goBack()
    }
  }, [nextChunk, navigate, volumeId, chapterId, darsNum, goBack])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && isComplete) {
        e.preventDefault()
        handleContinue()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isComplete, handleContinue])

  if (!chunk) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-neutral-950 min-h-screen">
        <p className="text-neutral-800 dark:text-neutral-100 font-english">
          Chunk not found
        </p>
      </div>
    )
  }

  const renderContent = () => {
    switch (chunk.type.toUpperCase()) {
      case 'VOCABULARY':
      case 'MIXED':
        return <VocabularyView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'GRAMMAR_RULE':
        return <GrammarRuleView key={chunk.id} payload={chunk.payload} />
      case 'APPLICATION':
        return <ApplicationView key={chunk.id} payload={chunk.payload} />
      case 'Q_AND_A':
      case 'ASSESSMENT':
        return <QAndAView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'TARKEEB':
        return <TarkeebView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'VERB_TABLE':
        return <VerbTableView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'IDAFAH_DRILL':
        return <IdafahView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'PARAGRAPH':
        return <ParagraphView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      case 'MASDAR_FACTORY':
        return <MasdarFactoryView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} />
      default:
        return (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-english-semibold mb-2">Unknown Type</h3>
            <p className="text-neutral-500 font-english">{chunk.type} is not supported yet.</p>
            {!isScrollCompletionType && !isComplete && (
              <button
                onClick={handleComplete}
                className="mt-4 px-5 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-full font-english-medium text-sm"
              >
                Mark Complete
              </button>
            )}
          </div>
        )
    }
  }

  const barWidth = `${Math.round(progress * 100)}%`

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col font-english">
      {/* Raw Neutral Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md flex flex-row items-center px-6 py-4 gap-4 transition-colors">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-colors cursor-pointer outline-none shrink-0"
          aria-label="Back to lesson"
        >
          <X size={20} />
        </button>

        <div className="flex-1 h-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-primary rounded-full"
            style={{ width: barWidth }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <TransliterationToggle compact />
        <span className="text-xs font-mono text-accent-primary font-bold min-w-[32px] text-right">
          {Math.round(progress * 100)}%
        </span>
      </div>

      {/* Main Pedagogical Flow Content */}
      <div className="flex-1 flex flex-col items-center justify-start p-6 max-w-4xl mx-auto w-full" ref={contentRef}>
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 text-center">
          {chunk.titleEn}
        </h2>
        <h1
          className="font-arabic-semibold text-2xl mb-6 text-center text-neutral-950 dark:text-white"
          dir="rtl"
        >
          {chunk.titleAr}
        </h1>

        {/* Scroll Indicator Pill */}
        {isScrollCompletionType && !isComplete && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{ y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 mb-6 text-neutral-600 dark:text-neutral-400"
          >
            <ChevronDown size={14} className="text-neutral-500 dark:text-neutral-400 stroke-[2.5]" />
            <span className="font-english-medium text-xs tracking-wide">
              {/* @ts-ignore */}
              {m['chunk.scrollToContinue']
                ? m['chunk.scrollToContinue']()
                : 'Scroll to continue'}
            </span>
          </motion.div>
        )}

        <div className="w-full max-w-2xl p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center">
          {renderContent()}
        </div>
      </div>

      {/* CONTINUE Button Pill */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-6 pb-8 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md z-40 flex justify-center border-0"
          >
            <button
              onClick={handleContinue}
              className="w-full max-w-md h-14 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 bg-accent-primary hover:bg-accent-primary-hover text-white cursor-pointer shadow-none border-0"
            >
              <span className="font-english-semibold text-base tracking-wide">
                {/* @ts-ignore */}
                {m['chunk.continue'] ? m['chunk.continue']() : 'CONTINUE'}
              </span>
              <Check size={18} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
