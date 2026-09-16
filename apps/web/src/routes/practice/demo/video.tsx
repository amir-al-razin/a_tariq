import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InteractiveVideoPlayer, type TranscriptSentence } from '../../../components/curriculum/shared/InteractiveVideoPlayer'
import { transcribeVideoServerFn } from '../../../server/transcribe'
import parsedTranscript from '../../../data/peppa_parsed_transcript.json'

export const Route = createFileRoute('/practice/demo/video')({
  component: PracticeVideoDemoRoute,
})

const defaultTranscript: TranscriptSentence[] = parsedTranscript as TranscriptSentence[]

function PracticeVideoDemoRoute() {
  const [videoUrl, setVideoUrl] = useState<string>('/peppa_pig_arabic.mp4')
  const [transcript, setTranscript] = useState<TranscriptSentence[]>(defaultTranscript)
  const [videoTitle, setVideoTitle] = useState<string>('Peppa Pig Arabic (بيبا بيغ التسوق)')
  const [inputUrl, setInputUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forceReTranscribe, setForceReTranscribe] = useState<boolean>(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleTranscribe = async (e?: React.FormEvent, overrideUrl?: string, overrideForce?: boolean) => {
    if (e) e.preventDefault()
    const targetUrl = (overrideUrl || inputUrl).trim()
    if (!targetUrl) return

    const shouldForce = overrideForce !== undefined ? overrideForce : forceReTranscribe

    setIsLoading(true)
    setErrorMessage(null)
    setStatusMessage(shouldForce ? 'Re-transcribing video pipeline...' : 'Checking cache & analyzing video...')

    try {
      const result = await transcribeVideoServerFn({
        data: {
          url: targetUrl,
          maxDuration: 300, // 5 minutes cap
          force: shouldForce,
        },
      })

      if (result.success && result.transcript && result.transcript.length > 0) {
        setVideoUrl(result.videoUrl || targetUrl)
        setTranscript(result.transcript)
        setVideoTitle(result.title || 'Transcribed Arabic Video')
        if (result.cached) {
          setStatusMessage(
            `⚡ Instant Cache: Video was already transcribed! Playing immediately (${result.transcript.length} lines).`
          )
        } else {
          setStatusMessage(
            `✓ Successfully transcribed in ${result.processingTimeSec || 0}s (${result.transcript.length} lines)!`
          )
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
    handleTranscribe(undefined, url, false)
  }


  const loadDefaultPreset = () => {
    setVideoUrl('/peppa_pig_arabic.mp4')
    setTranscript(defaultTranscript)
    setVideoTitle('Peppa Pig Arabic (بيبا بيغ التسوق)')
    setInputUrl('')
    setErrorMessage(null)
    setStatusMessage('Loaded pre-verified Peppa Pig episode.')
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 mb-2.5">
          AI-Powered Live Video Transcription
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 tracking-tight">
          Arabic Video Practice Player
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
          Enter any Arabic video URL. If previously transcribed, it plays instantly from cache. Otherwise, it downloads and transcribes in real-time with Groq Whisper & LLM vocabulary enrichment.
        </p>
      </div>

      {/* URL Input & Pipeline Control Bar */}
      <form onSubmit={(e) => handleTranscribe(e)} className="w-full max-w-4xl mx-auto flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-2 shadow-lg focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
          <span className="text-xl px-2 text-neutral-400 select-none">🔗</span>
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste any Arabic video URL (e.g. YouTube, direct MP4)..."
            className="flex-1 bg-transparent border-none outline-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 text-sm sm:text-base px-2 py-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputUrl.trim()}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="animate-spin text-sm">⏳</span>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>▶️</span>
                <span>Play / Transcribe</span>
              </>
            )}
          </button>
        </div>

        {/* Presets & Cache Options */}
        <div className="flex items-center justify-between flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400 px-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Ready Transcripts:</span>
            <button
              type="button"
              onClick={loadDefaultPreset}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              🐷 Peppa Pig (Master)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('https://www.youtube.com/watch?v=HWGieW9zwso', 'Arabic Speech & Wisdom')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              📖 Arabic Khutbah (HWGieW9zwso)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('https://www.youtube.com/watch?v=cObnEdY_gOY', 'Arabic Dialogue')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all cursor-pointer"
            >
              💬 Dialogue (cObnEdY_gOY)
            </button>
          </div>

          <label className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={forceReTranscribe}
              onChange={(e) => setForceReTranscribe(e.target.checked)}
              className="rounded border-neutral-300 dark:border-neutral-700 text-emerald-600 focus:ring-emerald-500"
            />
            <span>Force re-transcription</span>
          </label>
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
                1. Downloading video with yt-dlp ➔ 2. Isolating dialogue with speech DSP ➔ 3. Transcribing with Whisper Large v3 ➔ 4. Enriching vocabulary with Tashkeel & English definitions.
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
            className="text-emerald-600 dark:text-emerald-400 hover:opacity-75 text-xs font-semibold px-2 py-0.5"
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
            className="text-red-600 dark:text-red-400 hover:opacity-75 text-xs font-semibold px-2 py-0.5"
          >
            Dismiss
          </button>
        </div>
      )}

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
    </div>
  )
}
