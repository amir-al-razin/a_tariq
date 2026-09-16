import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'

export interface TranscriptWord {
  id: string
  ar: string
  transliteration: string
  en: string
  start: number
  end: number
  vocalized?: string
  root?: string | null
  pos?: string
}

export interface TranscriptSentence {
  sentenceId: string
  words: TranscriptWord[]
}

interface InteractiveVideoPlayerProps {
  videoUrl: string
  transcript: TranscriptSentence[]
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

export function InteractiveVideoPlayer({ videoUrl, transcript }: InteractiveVideoPlayerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [clickedWord, setClickedWord] = useState<TranscriptWord | null>(null)
  
  const playerRef = useRef<HTMLVideoElement>(null)
  const transcriptContainerRef = useRef<HTMLDivElement>(null)
  
  // Prevent SSR hydration mismatch with ReactPlayer
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 60fps smooth timestamp synchronization (avoids sluggish 250ms onTimeUpdate lag)
  useEffect(() => {
    let animId: number
    const checkTime = () => {
      if (playerRef.current && !playerRef.current.paused) {
        setCurrentTime(playerRef.current.currentTime)
      }
      animId = requestAnimationFrame(checkTime)
    }
    animId = requestAnimationFrame(checkTime)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Close popover if clicked outside word
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.word-container')) {
        setClickedWord(null)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Find currently active sentence
  const activeSentenceIndex = transcript.findIndex((s, sIdx) => {
    if (!s.words || s.words.length === 0) return false
    const sStart = s.words[0].start
    const nextSentence = transcript[sIdx + 1]
    const sEnd = nextSentence && nextSentence.words.length > 0 
      ? nextSentence.words[0].start 
      : s.words[s.words.length - 1].end + 0.6
    return currentTime >= sStart - 0.1 && currentTime < sEnd
  })

  const activeSentence = activeSentenceIndex !== -1 ? transcript[activeSentenceIndex] : null

  // Flatten all words to find currently active word based on millisecond timestamp
  const allWords = transcript.flatMap((s) => s.words)
  const activeWord = allWords.find((w, idx) => {
    const nextWord = allWords[idx + 1]
    const wordEnd = nextWord ? Math.min(nextWord.start, w.end + 0.5) : w.end + 0.5
    return currentTime >= w.start && currentTime < wordEnd
  })

  // Detect if video is currently in an instrumental/music interlude (> 2.5s until next speech)
  const nextSpokenWord = allWords.find((w) => w.start > currentTime)
  const isMusicInterlude = !activeWord && nextSpokenWord && (nextSpokenWord.start - currentTime > 2.5)

  // Scoped internal container scroll to follow active line (NEVER scrolls window, preventing top bar obstruction)
  useEffect(() => {
    if (activeSentence && transcriptContainerRef.current) {
      const container = transcriptContainerRef.current
      const activeElement = container.querySelector(`[data-sentence-id="${activeSentence.sentenceId}"]`) as HTMLElement
      if (activeElement) {
        const targetScroll = activeElement.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2)
        container.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' })
      }
    }
  }, [activeSentence?.sentenceId])

  const handleWordClick = (w: TranscriptWord) => {
    setClickedWord(clickedWord?.id === w.id ? null : w)
    if (playerRef.current) {
      playerRef.current.currentTime = w.start
    }
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-12 w-full">
      
      {/* 1. Video Player (Landscape, Top) */}
      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 dark:border-neutral-800 relative flex-shrink-0">
        {isMounted && (
          videoUrl.startsWith('/') || videoUrl.endsWith('.mp4') ? (
            <video
              ref={playerRef}
              src={videoUrl}
              className="w-full h-full object-cover absolute top-0 left-0"
              controls
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            />
          ) : (
            <ReactPlayer
              ref={playerRef}
              src={videoUrl}
              width="100%"
              height="100%"
              controls
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          )
        )}
      </div>

      {/* 2. Top Status Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">
            {formatTime(currentTime)}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {transcript.length} lines • {allWords.length} words
          </span>
        </div>

        {/* Music / scene transition notice */}
        {isMusicInterlude && nextSpokenWord && (
          <div className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 animate-pulse border border-amber-200 dark:border-amber-800">
            <span>🎵</span>
            <span>Music / Scene transition — next speech at {formatTime(nextSpokenWord.start)}</span>
          </div>
        )}
      </div>

      {/* 3. The Whole Big White Box (Line-by-line separated, natural text without boxes on words) */}
      <div 
        ref={transcriptContainerRef}
        className="w-full max-h-[500px] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 text-right custom-scrollbar relative"
        dir="rtl"
      >
        {transcript.map((sentence) => {
          const isLineActive = activeSentence?.sentenceId === sentence.sentenceId

          return (
            <div 
              key={sentence.sentenceId}
              data-sentence-id={sentence.sentenceId}
              className={`py-2 px-3 rounded-2xl transition-all duration-200 flex items-center justify-start flex-wrap gap-x-2.5 gap-y-1 font-arabic text-2xl sm:text-3xl leading-[2.6] sm:leading-[2.8] ${
                isLineActive 
                  ? 'bg-emerald-50/80 dark:bg-emerald-950/30' 
                  : 'hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40'
              }`}
            >
              {/* Line Timestamp */}
              <span 
                onClick={() => {
                  if (playerRef.current && sentence.words[0]) {
                    playerRef.current.currentTime = sentence.words[0].start
                  }
                }}
                className="text-xs font-sans font-mono text-neutral-400 dark:text-neutral-500 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer select-none me-3 self-center shrink-0"
                dir="ltr"
              >
                {formatTime(sentence.words[0]?.start || 0)}
              </span>

              {/* Natural Arabic Words (No box around inactive words!) */}
              {sentence.words.map((word) => {
                const isActive = word.id === activeWord?.id
                const isClicked = clickedWord?.id === word.id

                return (
                  <span key={word.id} className="relative word-container inline-block">
                    {/* Live Floating Green Box Caption (Current spoken word) */}
                    {isActive && !isClicked && (
                      <span 
                        className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none animate-in fade-in zoom-in-95 duration-100"
                        dir="ltr"
                      >
                        <span className="relative flex items-center justify-center px-3 py-1 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white font-english-bold text-xs sm:text-sm shadow-xl whitespace-nowrap">
                          {word.en}
                          {/* Downward triangle arrow */}
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-emerald-600 dark:border-t-emerald-500" />
                        </span>
                      </span>
                    )}

                    {/* Word text: Clean natural text without box, highlights in emerald only when active */}
                    <span
                      onClick={() => handleWordClick(word)}
                      className={`
                        cursor-pointer transition-all duration-150 px-1.5 py-0.5 rounded-lg select-none
                        ${isActive 
                          ? 'bg-emerald-500 text-white font-bold shadow-md ring-2 ring-emerald-300/50 scale-105' 
                          : 'text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}
                      `}
                    >
                      {word.vocalized || word.ar}
                    </span>

                    {/* Rich Popover Dictionary (On-Click) */}
                    {isClicked && (
                      <span 
                        className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max min-w-[180px] max-w-[290px] z-50 shadow-2xl rounded-2xl p-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col items-center gap-1.5 leading-normal cursor-default select-none animate-in fade-in zoom-in-95 duration-150"
                        dir="ltr"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Vocalized Arabic */}
                        <span className="text-2xl font-arabic text-neutral-900 dark:text-neutral-50 font-bold mb-0.5" dir="rtl">
                          {word.vocalized || word.ar}
                        </span>

                        {/* Root & POS Badge */}
                        <div className="flex items-center gap-1.5 flex-wrap justify-center mb-0.5">
                          {word.pos && (
                            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400">
                              {word.pos}
                            </span>
                          )}
                          {word.root && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                              Root: {word.root}
                            </span>
                          )}
                        </div>

                        {/* Romanized Transliteration */}
                        <span className="text-xs font-english-medium text-emerald-600 dark:text-emerald-400 italic">
                          {word.transliteration}
                        </span>

                        {/* English Meaning */}
                        <span className="text-sm font-english-bold text-neutral-800 dark:text-neutral-100 text-center">
                          {word.en}
                        </span>

                        {/* Audio Timestamp Jump Link */}
                        <button
                          onClick={() => {
                            if (playerRef.current) {
                              playerRef.current.currentTime = word.start
                            }
                          }}
                          className="mt-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          ▶ Replay from {formatTime(word.start)}
                        </button>
                      </span>
                    )}
                  </span>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
