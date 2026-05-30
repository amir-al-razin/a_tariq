import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowDown } from 'lucide-react'

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared'
import { SCROLL_COMPLETE_TYPES, VOLUME_ACCENT } from '../../lib/pedagogy'
import * as m from '#/paraglide/messages.js'

import { VocabularyView } from '../pedagogy/VocabularyView'
import { GrammarRuleView } from '../pedagogy/GrammarRuleView'
import { ApplicationView } from '../pedagogy/ApplicationView'
import { QAndAView } from '../pedagogy/QAndAView'
import { TarkeebView } from '../pedagogy/TarkeebView'
import { VerbTableView } from '../pedagogy/VerbTableView'
import { IdafahDrillView } from '../pedagogy/IdafahDrillView'
import { ParagraphView } from '../pedagogy/ParagraphView'
import { MasdarFactoryView } from '../pedagogy/MasdarFactoryView'
import { setChunkProgress } from '../../state/progressStore'

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
  const [isDark, setIsDark] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const completeFiredRef = useRef(false)

  useEffect(() => {
    setProgress(0)
    setIsComplete(false)
    completeFiredRef.current = false
  }, [chunkId])

  const accent = VOLUME_ACCENT[volumeId] || VOLUME_ACCENT[1]

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
    // Also check the specific container if it scrolls, but typically web uses window scroll
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

  const goBack = () => {
    navigate({
      to: '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum',
      params: {
        volumeId: volumeId.toString(),
        chapterId: chapterId,
        darsNum: darsNum,
      },
    })
  }

  const handleContinue = () => {
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
  }

  if (!chunk) {
    return (
      <div className="flex-1 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 min-h-screen">
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
        return <VocabularyView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} accent700={accent.accent700} />
      case 'GRAMMAR_RULE':
        return <GrammarRuleView key={chunk.id} payload={chunk.payload} accent400={accent.accent400} accent700={accent.accent700} />
      case 'APPLICATION':
        return <ApplicationView key={chunk.id} payload={chunk.payload} accent700={accent.accent700} />
      case 'Q_AND_A':
      case 'ASSESSMENT':
        return <QAndAView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} />
      case 'TARKEEB':
        return <TarkeebView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent700={accent.accent700} />
      case 'VERB_TABLE':
        return <VerbTableView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} accent700={accent.accent700} />
      case 'IDAFAH_DRILL':
        return <IdafahDrillView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} accent700={accent.accent700} />
      case 'PARAGRAPH':
        return <ParagraphView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} accent700={accent.accent700} />
      case 'MASDAR_FACTORY':
        return <MasdarFactoryView key={chunk.id} payload={chunk.payload} onProgress={setProgress} onComplete={handleComplete} accent400={accent.accent400} accent700={accent.accent700} />
      default:
        return (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-english-semibold mb-2">Unknown Type</h3>
            <p className="text-neutral-500 font-english">{chunk.type} is not supported yet.</p>
            {!isScrollCompletionType && !isComplete && (
              <button
                onClick={handleComplete}
                className="mt-4 px-4 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg"
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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col font-english">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-neutral-50 dark:bg-neutral-900 flex flex-row items-center px-4 pt-6 pb-4 gap-3 border-b border-neutral-200 dark:border-neutral-800">
        <button
          onClick={goBack}
          className="p-2 -ml-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <X size={24} className="text-neutral-800 dark:text-neutral-200" />
        </button>

        <div className="flex-1 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: accent.accent400 }}
            initial={{ width: 0 }}
            animate={{ width: barWidth }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          />
        </div>

        <span
          className="font-english-semibold text-sm min-w-[36px] text-right"
          style={{ color: isDark ? accent.accent400 : accent.accent700 }}
        >
          {Math.round(progress * 100)}%
        </span>
      </div>

      {/* Body */}
      <div
        className="flex-1 flex flex-col items-center p-6 pb-24"
        ref={contentRef}
      >
        <h2
          className="font-english-semibold text-base mb-1.5 text-center"
          style={{ color: isDark ? accent.accent400 : accent.accent700 }}
        >
          {chunk.titleEn}
        </h2>
        <h1
          className="font-arabic-semibold text-2xl mb-7 text-center"
          style={{ color: isDark ? '#F0EEE8' : accent.accent800 }}
          dir="rtl"
        >
          {chunk.titleAr}
        </h1>

        {isScrollCompletionType && !isComplete && (
          <div className="flex flex-row items-center gap-1.5 mb-4 opacity-60">
            <ArrowDown
              size={14}
              className="text-neutral-500 dark:text-neutral-400"
            />
            <span className="font-english text-xs text-neutral-500 dark:text-neutral-400">
              {/* Using optional chaining / bracket notation for paraglide to handle missing key errors */}
              {/* @ts-ignore */}
              {m['chunk.scrollToContinue']
                ? m['chunk.scrollToContinue']()
                : 'Scroll to continue'}
            </span>
          </div>
        )}

        <div className="w-full max-w-2xl p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center">
          {renderContent()}
        </div>
      </div>

      {/* CONTINUE Button */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-6 pb-12 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 z-40 flex justify-center"
          >
            <button
              onClick={handleContinue}
              className="w-full max-w-md h-14 rounded-2xl flex items-center justify-center transition-transform active:scale-95"
              style={{ backgroundColor: accent.accent400 }}
            >
              <span className="font-english-semibold text-base text-white">
                {/* @ts-ignore */}
                {m['chunk.continue'] ? m['chunk.continue']() : 'CONTINUE ✓'}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
