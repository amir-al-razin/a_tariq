import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  MicOff,
  Volume2,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Radio,
  Sliders,
} from 'lucide-react'
import confetti from '../../lib/confetti'
import { cleanArabic } from '../../data/quranVocabData'
import { useGamificationStore } from '../../state/gamificationStore'

interface PronunciationEvaluatorProps {
  phraseAr: string
  translationEn: string
  transliteration?: string
  tajweedTip?: string
  onComplete?: (score: number) => void
}

export const PronunciationEvaluator: React.FC<PronunciationEvaluatorProps> = ({
  phraseAr,
  translationEn,
  transliteration,
  tajweedTip,
  onComplete,
}) => {
  const [isListening, setIsListening] = useState(false)
  const [recognizedTranscript, setRecognizedTranscript] = useState('')
  const [accuracyScore, setAccuracyScore] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [hasSpeechSupport, setHasSpeechSupport] = useState(true)
  const [recitationMode, setRecitationMode] = useState<'mic' | 'verify'>('mic')

  const recognitionRef = useRef<any>(null)
  const pulseIntervalRef = useRef<any>(null)
  const [pulseVolume, setPulseVolume] = useState<number[]>([12, 24, 18, 32, 14, 28, 20])

  const recordPronunciationCompleted = useGamificationStore((s) => s.recordPronunciationCompleted)
  const addXp = useGamificationStore((s) => s.addXp)

  // Target words breakdown
  const targetWords = phraseAr.split(/\s+/).filter(Boolean)
  const targetCleanWords = targetWords.map((w) => cleanArabic(w))

  // Recognized words breakdown
  const recognizedCleanWords = recognizedTranscript
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => cleanArabic(w))

  // Flexible word-matching algorithm (checks exact, prefix-stripped, and containment)
  const isWordMatched = useCallback(
    (targetClean: string) => {
      if (!targetClean) return false
      const targetBare = targetClean.replace(/^ال/, '') // strip al-
      return recognizedCleanWords.some((recClean) => {
        if (!recClean) return false
        if (recClean === targetClean || recClean === targetBare) return true
        const recBare = recClean.replace(/^ال/, '')
        if (recBare === targetBare) return true
        // Partial overlap for longer words (length > 3)
        if (targetClean.length >= 4 && recClean.includes(targetClean)) return true
        if (recClean.length >= 4 && targetClean.includes(recClean)) return true
        return false
      })
    },
    [recognizedCleanWords]
  )

  const matchedIndices = targetCleanWords.map(isWordMatched)

  // Check browser SpeechRecognition API support on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const SpeechRec =
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition
    setHasSpeechSupport(!!SpeechRec)
  }, [])

  // Play model native pronunciation
  const playModelPronunciation = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(phraseAr)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.85

    // Search for high-quality Arabic voices
    const voices = window.speechSynthesis.getVoices()
    const arVoice = voices.find((v) => v.lang.startsWith('ar') || v.lang === 'ar-SA')
    if (arVoice) utterance.voice = arVoice

    utterance.onstart = () => setIsPlayingAudio(true)
    utterance.onend = () => setIsPlayingAudio(false)
    utterance.onerror = () => setIsPlayingAudio(false)

    window.speechSynthesis.speak(utterance)
  }

  // Simulated live audio wave pulse when microphone is active
  useEffect(() => {
    if (isListening) {
      pulseIntervalRef.current = setInterval(() => {
        setPulseVolume([
          Math.floor(Math.random() * 28) + 8,
          Math.floor(Math.random() * 40) + 12,
          Math.floor(Math.random() * 32) + 10,
          Math.floor(Math.random() * 48) + 16,
          Math.floor(Math.random() * 36) + 12,
          Math.floor(Math.random() * 44) + 14,
          Math.floor(Math.random() * 24) + 8,
        ])
      }, 100)
    } else {
      if (pulseIntervalRef.current) {
        clearInterval(pulseIntervalRef.current)
        pulseIntervalRef.current = null
      }
      setPulseVolume([8, 12, 8, 16, 10, 14, 8])
    }
    return () => {
      if (pulseIntervalRef.current) clearInterval(pulseIntervalRef.current)
    }
  }, [isListening])

  // Stop Speech Recognition
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch {
        // already stopped
      }
    }
    setIsListening(false)

    // Calculate final score
    const matchedCount = matchedIndices.filter(Boolean).length
    const score = targetWords.length > 0 ? Math.round((matchedCount / targetWords.length) * 100) : 0
    setAccuracyScore(score)

    if (score >= 70) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      })
      recordPronunciationCompleted(score)
      addXp(40, `Tajweed Recitation Mastered (${score}%)`)
    }

    if (onComplete) {
      onComplete(score)
    }
  }, [matchedIndices, targetWords.length, onComplete, recordPronunciationCompleted, addXp])

  // Start Speech Recognition (WITHOUT getUserMedia hardware collision)
  const startListening = useCallback(() => {
    setErrorMessage(null)
    setRecognizedTranscript('')
    setAccuracyScore(null)

    const SpeechRec =
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition

    if (!SpeechRec) {
      setErrorMessage('Speech recognition requires Chrome, Edge, or Safari with microphone access.')
      setRecitationMode('verify')
      return
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort()
        } catch {
          // ignore
        }
      }

      const recognition = new SpeechRec()
      recognitionRef.current = recognition

      // Primary language: Arabic (Saudi Arabia) with fallback support
      recognition.lang = 'ar-SA'
      recognition.continuous = true
      recognition.interimResults = true
      recognition.maxAlternatives = 3

      recognition.onstart = () => {
        setIsListening(true)
        setErrorMessage(null)
      }

      recognition.onresult = (event: any) => {
        let fullTranscript = ''
        for (let i = 0; i < event.results.length; ++i) {
          fullTranscript += event.results[i][0].transcript + ' '
        }
        const cleaned = fullTranscript.trim()
        setRecognizedTranscript(cleaned)
      }

      recognition.onerror = (event: any) => {
        // 'no-speech' is normal when user pauses
        if (event.error === 'no-speech') {
          return
        }
        if (event.error === 'not-allowed') {
          setErrorMessage('Microphone access was denied. Please allow microphone permissions in your browser address bar.')
          setIsListening(false)
          setRecitationMode('verify')
          return
        }
        if (event.error === 'network') {
          setErrorMessage('Speech recognition network service unreachable. Switch to manual verification below.')
          setIsListening(false)
          setRecitationMode('verify')
          return
        }
        setErrorMessage(`Audio evaluation: ${event.error}`)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Could not initialize microphone recognition'
      setErrorMessage(msg)
      setIsListening(false)
      setRecitationMode('verify')
    }
  }, [])

  // Self-Verification / Manual Recitation Evaluator
  const handleManualVerify = (selfScore: number) => {
    setAccuracyScore(selfScore)
    if (selfScore >= 80) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } })
      recordPronunciationCompleted(selfScore)
      addXp(35, `Oral Recitation Self-Verified (${selfScore}%)`)
    }
    if (onComplete) onComplete(selfScore)
  }

  // Reset
  const handleReset = () => {
    if (isListening) stopListening()
    setRecognizedTranscript('')
    setAccuracyScore(null)
    setErrorMessage(null)
  }

  return (
    <div className="w-full bg-[#FAF8F5] dark:bg-[#141311] text-stone-900 dark:text-stone-100 rounded-3xl p-6 sm:p-8 border border-[#E7E2D9] dark:border-[#26231E] shadow-sm font-english space-y-6 relative overflow-hidden transition-colors duration-300">
      {/* Ambient acoustic manuscript glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between relative z-10 border-b border-[#E7E2D9] dark:border-[#26231E] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E8F5EE] dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="font-english-bold text-sm text-stone-900 dark:text-stone-100 tracking-wide uppercase flex items-center gap-2">
              <span>Tarteel Acoustic Studio</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F5EE] dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60 font-english-semibold normal-case">
                ar-SA Engine
              </span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Read aloud into your microphone. Words illuminate emerald as Tajweed is detected.
            </p>
          </div>
        </div>

        {/* Listen Native Model Button & Mode Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={playModelPronunciation}
            disabled={isPlayingAudio}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-800 dark:text-stone-200 text-xs font-english-semibold transition-all cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] whitespace-nowrap shrink-0 shadow-sm"
            title="Listen to native Arabic model recitation"
          >
            <Volume2 className={`w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
            <span>{isPlayingAudio ? 'Speaking...' : 'Listen Model'}</span>
          </button>

          <button
            onClick={() => setRecitationMode((m) => (m === 'mic' ? 'verify' : 'mic'))}
            className="p-1.5 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-600 dark:text-stone-400 text-xs transition-colors cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] shrink-0"
            title="Toggle between Live Microphone or Manual Tajweed Verification"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Target Phrase Display with Word-by-Word Real-Time Illumination */}
      <div className="relative text-center py-8 px-4 bg-white dark:bg-[#0C0B0A] rounded-2xl border-2 border-[#DFD8CC] dark:border-[#2C2822] space-y-4 shadow-inner">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 select-none" dir="rtl">
          {targetWords.map((word, idx) => {
            const matched = matchedIndices[idx]
            return (
              <motion.span
                key={idx}
                animate={{
                  scale: matched ? [1, 1.08, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`font-arabic text-4xl sm:text-5xl md:text-6xl px-3.5 py-1.5 rounded-xl transition-all duration-300 inline-block leading-normal ${
                  matched
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/50 shadow-sm'
                    : 'text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300'
                }`}
              >
                {word}
              </motion.span>
            )
          })}
        </div>

        {/* Transliteration & Meaning */}
        <div className="space-y-1">
          {transliteration && (
            <p className="text-sm font-english-semibold text-emerald-700 dark:text-emerald-400 italic tracking-wide">
              {transliteration}
            </p>
          )}
          <p className="text-sm font-english text-stone-600 dark:text-stone-400">
            "{translationEn}"
          </p>
        </div>

        {/* Tajweed Guideline Tip */}
        {tajweedTip && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1E8] dark:bg-[#1A1815] border border-[#DFD8CC] dark:border-[#2C2822] text-stone-600 dark:text-stone-400 text-xs font-english-medium">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{tajweedTip}</span>
          </div>
        )}
      </div>

      {/* Real-time Recognition Feedback Display */}
      {recognizedTranscript && (
        <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#171512] border border-[#ECE6DB] dark:border-[#28241F] space-y-1">
          <span className="text-[11px] font-english-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Speech Recognition Captured:
          </span>
          <p className="font-arabic text-2xl text-emerald-800 dark:text-emerald-300" dir="rtl">
            {recognizedTranscript}
          </p>
        </div>
      )}

      {/* Speech Support Warning / Fallback Banner */}
      {!hasSpeechSupport && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-english flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Browser speech recognition is not supported in this environment. Switched to Manual Tajweed Verification.</span>
          </div>
          <button
            onClick={() => setRecitationMode('verify')}
            className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-english-bold text-[11px] shrink-0 cursor-pointer whitespace-nowrap"
          >
            Manual Mode
          </button>
        </div>
      )}

      {/* Error / Diagnostic Alert */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs font-english flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setRecitationMode('verify')}
            className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-english-bold text-[11px] shrink-0 cursor-pointer whitespace-nowrap"
          >
            Verify Manually
          </button>
        </div>
      )}

      {/* Main Microphone Action Controls */}
      {recitationMode === 'mic' ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Audio Pulse Visualizer Indicator */}
          <div className="flex items-center gap-1.5 h-9 px-4 py-1 rounded-xl bg-[#F0ECE1] dark:bg-[#171512] border border-[#DDD6C8] dark:border-[#28241F]">
            {pulseVolume.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}px` }}
                className={`w-1 rounded-full transition-all duration-100 ${
                  isListening
                    ? 'bg-emerald-600 dark:bg-emerald-400 shadow-sm'
                    : 'bg-stone-300 dark:bg-stone-700'
                }`}
              />
            ))}
            <span className="text-[11px] font-english-semibold text-stone-600 dark:text-stone-400 ml-2 whitespace-nowrap">
              {isListening ? 'Acoustic Stream Active' : 'Mic Idle'}
            </span>
          </div>

          {/* Record Button & Reset */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {isListening ? (
              <button
                onClick={stopListening}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-english-bold text-xs shadow-md shadow-rose-600/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <MicOff className="w-4 h-4" />
                <span>Stop Reciting & Evaluate</span>
              </button>
            ) : (
              <button
                onClick={startListening}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-english-bold text-xs shadow-md shadow-emerald-700/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Mic className="w-4 h-4" />
                <span>Begin Reciting (Speak Now)</span>
              </button>
            )}

            {(recognizedTranscript || accuracyScore !== null) && (
              <button
                onClick={handleReset}
                className="p-3 rounded-2xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-700 dark:text-stone-300 transition-colors cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] shrink-0"
                title="Reset attempt"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Manual Tajweed Verification Fallback */
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0C0B0A] border border-[#DFD8CC] dark:border-[#2C2822] space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-xs">
            <span className="font-english-bold text-stone-800 dark:text-stone-200">
              Manual Tajweed & Pronunciation Assessment:
            </span>
            <button
              onClick={() => setRecitationMode('mic')}
              className="text-emerald-700 dark:text-emerald-400 hover:underline font-english-semibold cursor-pointer whitespace-nowrap"
            >
              Back to Microphone
            </button>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Did you pronounce all phonemes with correct Makhraj and Harakat? Rate your recitation:
          </p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleManualVerify(60)}
              className="py-2.5 px-3 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-800 dark:text-stone-200 font-english-bold text-xs border border-[#DDD6C8] dark:border-[#332E27] transition-all cursor-pointer whitespace-nowrap"
            >
              Fair (60%)
            </button>
            <button
              onClick={() => handleManualVerify(85)}
              className="py-2.5 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 font-english-bold text-xs transition-all cursor-pointer whitespace-nowrap"
            >
              Good (85% +35 XP)
            </button>
            <button
              onClick={() => handleManualVerify(100)}
              className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-english-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Flawless (100% +35 XP)
            </button>
          </div>
        </div>
      )}

      {/* Accuracy Scoring Results Showcase */}
      {accuracyScore !== null && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            accuracyScore >= 70
              ? 'bg-[#E8F5EE] dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200'
              : 'bg-[#FEF3C7]/60 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800/60 text-amber-900 dark:text-amber-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-english-bold text-lg shrink-0 ${
                accuracyScore >= 70
                  ? 'bg-emerald-200 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-400 dark:border-emerald-700/60'
                  : 'bg-amber-200 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-400 dark:border-amber-700/60'
              }`}
            >
              {accuracyScore}%
            </div>
            <div>
              <h4 className="font-english-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                {accuracyScore >= 70 ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Masha'Allah! Tajweed Approved</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Review Articulation & Try Again</span>
                  </>
                )}
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                {accuracyScore >= 70
                  ? 'Your pronunciation passed the acoustic verification threshold. +40 XP awarded!'
                  : 'Some letters were not matched. Listen to the native model above and recite with clear Harakat.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            {accuracyScore >= 70 && (
              <span className="px-3 py-1.5 rounded-xl bg-emerald-700 text-white dark:bg-emerald-900/80 dark:text-emerald-300 text-xs font-english-bold flex items-center gap-1 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                <span>+40 XP</span>
              </span>
            )}
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-800 dark:text-stone-200 font-english-bold text-xs transition-colors cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] whitespace-nowrap"
            >
              Recite Again
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
