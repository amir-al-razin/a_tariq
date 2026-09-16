import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InteractiveVideoPlayer, type TranscriptSentence } from '../../../components/curriculum/shared/InteractiveVideoPlayer'
import { transcribeVideoServerFn } from '../../../server/transcribe'
import parsedTranscript from '../../../data/peppa_parsed_transcript.json'

export const Route = createFileRoute('/practice/demo/video')({
  component: PracticeVideoDemoRoute,
})

interface HistoryItem {
  id: string
  title: string
  url: string
  date?: string
}

const LIBRARY_PRESETS: HistoryItem[] = [
  {
    id: 'HWGieW9zwso',
    title: '📖 Arabic Speech & Wisdom (الخطبة والموعظة)',
    url: 'https://www.youtube.com/watch?v=HWGieW9zwso',
  },
  {
    id: 'cObnEdY_gOY',
    title: '💬 Arabic Story & Narration (قصة عربية معبرة)',
    url: 'https://www.youtube.com/watch?v=cObnEdY_gOY',
  },
  {
    id: 'dinQIb4ZFXY',
    title: '🗣️ Spoken Arabic Dialogue (حوار باللغة العربية)',
    url: 'https://www.youtube.com/watch?v=dinQIb4ZFXY',
  },
  {
    id: 'peppa_pig_arabic',
    title: '🐷 Peppa Pig Arabic (بيبا بيغ التسوق)',
    url: 'https://www.youtube.com/watch?v=HWGieW9zwso',
  },
]

const HISTORY_STORAGE_KEY = 'tariq_video_history'

function PracticeVideoDemoRoute() {
  // Start with no video loaded by default (clean search prompt)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [transcript, setTranscript] = useState<TranscriptSentence[]>([])
  const [videoTitle, setVideoTitle] = useState<string>('')
  const [inputUrl, setInputUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forceReTranscribe, setForceReTranscribe] = useState<boolean>(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [userHistory, setUserHistory] = useState<HistoryItem[]>([])

  // Load history from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setUserHistory(parsed)
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, [])

  const saveToHistory = (item: { title: string; url: string; id?: string }) => {
    try {
      const newItem: HistoryItem = {
        id: item.id || `v_${Date.now()}`,
        title: item.title,
        url: item.url,
        date: new Date().toLocaleDateString(),
      }
      setUserHistory((prev) => {
        const filtered = prev.filter((p) => p.url !== item.url)
        const updated = [newItem, ...filtered].slice(0, 15) // Keep last 15
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    } catch {
      // Ignore storage errors
    }
  }

  const handleTranscribe = async (e?: React.FormEvent, overrideUrl?: string, overrideTitle?: string, overrideForce?: boolean) => {
    if (e) e.preventDefault()
    const targetUrl = (overrideUrl || inputUrl).trim()
    if (!targetUrl) return

    // Special local preset: Peppa Pig Arabic with pre-verified JSON transcript
    if (overrideTitle?.includes('Peppa Pig') || targetUrl.includes('peppa')) {
      setVideoUrl(targetUrl)
      setTranscript(parsedTranscript as TranscriptSentence[])
      setVideoTitle('Peppa Pig Arabic (بيبا بيغ التسوق)')
      setInputUrl(targetUrl)
      setStatusMessage('Loaded Peppa Pig Arabic episode with verified synchronized vocabulary.')
      setErrorMessage(null)
      saveToHistory({ title: 'Peppa Pig Arabic (بيبا بيغ التسوق)', url: targetUrl, id: 'peppa_pig_arabic' })
      return
    }

    const shouldForce = overrideForce !== undefined ? overrideForce : forceReTranscribe

    setIsLoading(true)
    setErrorMessage(null)
    setStatusMessage(shouldForce ? 'Re-transcribing video pipeline...' : 'Querying PostgreSQL database cache...')

    try {
      const result = await transcribeVideoServerFn({
        data: {
          url: targetUrl,
          maxDuration: 300,
          force: shouldForce,
        },
      })

      if (result.success && result.transcript && result.transcript.length > 0) {
        const finalUrl = result.videoUrl || targetUrl
        const finalTitle = overrideTitle || result.title || 'Transcribed Arabic Video'
        setVideoUrl(finalUrl)
        setTranscript(result.transcript)
        setVideoTitle(finalTitle)
        setInputUrl(targetUrl)

        saveToHistory({ title: finalTitle, url: targetUrl, id: result.videoId })

        if (result.cached) {
          setStatusMessage(`⚡ Instant Cache: Loaded transcript from PostgreSQL database (${result.transcript.length} lines)!`)
        } else {
          setStatusMessage(`✓ Successfully transcribed in ${result.processingTimeSec || 0}s and saved to database (${result.transcript.length} lines)!`)
        }
      } else {
        setErrorMessage(result.error || 'Failed to transcribe video. Please check the URL and try again.')
        setStatusMessage(null)
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred while communicating with the server.')
      setStatusMessage(null)
    } finally {
      setIsLoading(false)
    }
  }

  const loadPreset = (url: string, title?: string) => {
    setInputUrl(url)
    if (title) setVideoTitle(title)
    handleTranscribe(undefined, url, title, false)
  }

  const handleSelectHistory = (url: string) => {
    if (!url) return
    const matchedPreset = LIBRARY_PRESETS.find((p) => p.url === url)
    const matchedUser = userHistory.find((h) => h.url === url)
    const title = matchedPreset?.title || matchedUser?.title
    loadPreset(url, title)
  }

  const handleResetSearch = () => {
    setVideoUrl(null)
    setTranscript([])
    setVideoTitle('')
    setInputUrl('')
    setStatusMessage(null)
    setErrorMessage(null)
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4 sm:px-8">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 mb-2.5">
          AI-Powered Live Video Practice
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 tracking-tight">
          Arabic Video Practice Player
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
          Enter any Arabic YouTube link or select from your history to stream video with live, word-by-word Tashkeel subtitles and vocabulary meanings.
        </p>
      </div>

      {/* Main Search & Control Bar */}
      <form onSubmit={(e) => handleTranscribe(e)} className="w-full max-w-4xl mx-auto flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-2 shadow-lg focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste YouTube or Arabic video URL (e.g. https://www.youtube.com/watch?v=HWGieW9zwso)..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputUrl.trim()}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-medium text-sm transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
          >
            {isLoading ? (
              <>
                <span className="animate-spin text-xs">⏳</span>
                <span>Transcribing...</span>
              </>
            ) : (
              <>
                <span>Transcribe & Play</span>
                <span>➔</span>
              </>
            )}
          </button>
        </div>

        {/* History Dropdown & Quick Library Presets */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-1 text-xs">
          <div className="flex items-center gap-2.5 flex-wrap flex-1">
            {/* History Dropdown */}
            <div className="relative">
              <select
                onChange={(e) => handleSelectHistory(e.target.value)}
                value={videoUrl || ''}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium shadow-sm hover:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
              >
                <option value="">📜 Select from Video History & Library...</option>
                {userHistory.length > 0 && (
                  <optgroup label="🕒 Your Recent Videos">
                    {userHistory.map((item) => (
                      <option key={item.id} value={item.url}>
                        {item.title} ({item.date || 'Recent'})
                      </option>
                    ))}
                  </optgroup>
                )}
                <optgroup label="📚 Pre-Transcribed Arabic Library">
                  {LIBRARY_PRESETS.map((preset) => (
                    <option key={preset.id} value={preset.url}>
                      {preset.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Quick preset buttons */}
            <button
              type="button"
              onClick={() => loadPreset(LIBRARY_PRESETS[3].url, LIBRARY_PRESETS[3].title)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              🐷 Peppa Pig
            </button>
            <button
              type="button"
              onClick={() => loadPreset(LIBRARY_PRESETS[0].url, LIBRARY_PRESETS[0].title)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              📖 Khutbah
            </button>
            <button
              type="button"
              onClick={() => loadPreset(LIBRARY_PRESETS[1].url, LIBRARY_PRESETS[1].title)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              💬 Story
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={forceReTranscribe}
                onChange={(e) => setForceReTranscribe(e.target.checked)}
                className="rounded border-neutral-300 dark:border-neutral-700 text-emerald-600 focus:ring-emerald-500"
              />
              <span>Force re-transcribe</span>
            </label>

            {videoUrl && (
              <button
                type="button"
                onClick={handleResetSearch}
                className="text-neutral-500 hover:text-red-500 font-medium cursor-pointer"
              >
                ✕ Close Player
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Processing Banner */}
      {isLoading && (
        <div className="max-w-4xl mx-auto mb-8 p-6 rounded-3xl bg-emerald-50/90 dark:bg-emerald-950/40 border-2 border-emerald-300/80 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-100 flex flex-col gap-3 shadow-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-4">
            <span className="text-3xl animate-spin">⚙️</span>
            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg">Processing Video Pipeline...</h3>
              <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                1. Extracting ephemeral speech audio ➔ 2. Isolating dialogue with DSP ➔ 3. Transcribing with Whisper Large v3 ➔ 4. Enriching vocabulary with Tashkeel & English definitions.
              </p>
            </div>
          </div>
          <div className="w-full bg-emerald-200/60 dark:bg-emerald-900/60 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-400 h-full rounded-full animate-pulse w-3/4" />
          </div>
        </div>
      )}

      {/* Success Notification */}
      {!isLoading && statusMessage && (
        <div className="max-w-4xl mx-auto mb-6 p-4 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-between">
          <span>{statusMessage}</span>
          <button 
            onClick={() => setStatusMessage(null)}
            className="text-emerald-600 dark:text-emerald-400 hover:opacity-75 text-xs font-semibold px-2 py-0.5 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Error Alert */}
      {!isLoading && errorMessage && (
        <div className="max-w-4xl mx-auto mb-6 p-4 rounded-2xl bg-red-100/80 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-center justify-between">
          <span>{errorMessage}</span>
          <button 
            onClick={() => setErrorMessage(null)}
            className="text-red-600 dark:text-red-400 hover:opacity-75 text-xs font-semibold px-2 py-0.5 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Content Area: Video Player OR Initial Empty State Prompt */}
      {videoUrl && transcript.length > 0 ? (
        <>
          {/* Active Video Header */}
          <div className="max-w-4xl mx-auto mb-4 px-1 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 truncate max-w-md">
              Now Playing: {videoTitle}
            </span>
            <span>{transcript.length} lines</span>
          </div>

          {/* Interactive Video Player */}
          <InteractiveVideoPlayer 
            videoUrl={videoUrl} 
            transcript={transcript}
          />
        </>
      ) : !isLoading ? (
        /* Initial Empty State: Clean Search Prompt */
        <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl text-center flex flex-col items-center gap-6 my-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl shadow-inner">
            🎬
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Ready to Transcribe & Learn
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
              Paste any YouTube Arabic video link above, or choose an episode from the history and library dropdown to start watching with interactive Arabic subtitles.
            </p>
          </div>

          {/* Featured Presets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-start mt-2">
            {LIBRARY_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => loadPreset(preset.url, preset.title)}
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-neutral-200 dark:border-neutral-700/80 transition-all text-left group cursor-pointer flex flex-col gap-1"
              >
                <div className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {preset.title}
                </div>
                <div className="text-xs text-neutral-400 truncate">
                  {preset.url}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
