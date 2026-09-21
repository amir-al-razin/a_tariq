import { createServerFn } from '@tanstack/react-start'
import { spawn } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'
import type { TranscriptSentence } from '../components/curriculum/shared/InteractiveVideoPlayer'
import { db } from '../db/index'
import { videoTranscripts } from '../db/schema'

export interface TranscribeResult {
  success: boolean
  videoId?: string
  title?: string
  duration?: number
  videoUrl?: string
  transcript?: TranscriptSentence[]
  processingTimeSec?: number
  cached?: boolean
  error?: string
}

export interface CachedVideoMeta {
  videoId: string
  title: string
  duration: number
  videoUrl: string
  sourceUrl?: string
}

function extractVideoId(url: string): string | null {
  if (!url) return null
  const trimmed = url.trim()

  // 1. YouTube URLs
  const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([a-zA-Z0-9_-]{11})/i)
  if (ytMatch) return ytMatch[1]

  // 2. Local download filenames or slugs
  const dlMatch = trimmed.match(/\/downloads\/([a-zA-Z0-9_-]+)\.(?:mp4|webm|mkv|json)/i)
  if (dlMatch) return dlMatch[1]

  // 3. Simple ID or filename without extension
  const fileMatch = trimmed.match(/([a-zA-Z0-9_-]+)\.(?:mp4|webm|mkv|mov|mp3|json)$/i)
  if (fileMatch) return fileMatch[1]

  return null
}

export const transcribeVideoServerFn = createServerFn({
  method: 'POST',
})
  .inputValidator((data: { url: string; maxDuration?: number; force?: boolean }) => data)
  .handler(async ({ data }): Promise<TranscribeResult> => {
    const { url, maxDuration = 300, force = false } = data

    if (!url || typeof url !== 'string') {
      return { success: false, error: 'Please provide a valid video URL.' }
    }

    try {
      // Find workspace project root
      let rootDir = process.cwd()
      while (!fs.existsSync(path.join(rootDir, 'pnpm-workspace.yaml')) && path.dirname(rootDir) !== rootDir) {
        rootDir = path.dirname(rootDir)
      }

      const downloadsDir = path.join(rootDir, 'apps', 'web', 'public', 'downloads')
      const knownId = extractVideoId(url)

      // 1. PostgreSQL Cache Check (Primary: Instant DB lookup)
      if (!force && process.env.DATABASE_URL) {
        try {
          const row = await db.query.videoTranscripts.findFirst({
            where: (t, { eq, or }) =>
              knownId ? or(eq(t.videoId, knownId), eq(t.sourceUrl, url)) : eq(t.sourceUrl, url),
          })

          if (row && Array.isArray(row.sentences) && row.sentences.length > 0) {
            console.log(`[transcribeVideoServerFn] PostgreSQL Cache Hit for ${row.videoId} (${row.sentences.length} lines)`)
            return {
              success: true,
              videoId: row.videoId,
              title: row.title,
              duration: row.duration,
              videoUrl: row.sourceUrl || url, // Direct cloud stream!
              transcript: row.sentences as TranscriptSentence[],
              processingTimeSec: 0,
              cached: true,
            }
          }
        } catch (dbErr: any) {
          console.warn('[transcribeVideoServerFn] PostgreSQL lookup notice:', dbErr.message)
        }
      }

      // 2. Secondary Cache Check: JSON fallback if offline
      if (!force && knownId && fs.existsSync(downloadsDir)) {
        const transcriptPath = path.join(downloadsDir, `${knownId}_transcript.json`)
        const metaPath = path.join(downloadsDir, `${knownId}_meta.json`)

        if (fs.existsSync(transcriptPath)) {
          try {
            const transcriptRaw = fs.readFileSync(transcriptPath, 'utf-8')
            const transcript: TranscriptSentence[] = JSON.parse(transcriptRaw)

            if (Array.isArray(transcript) && transcript.length > 0) {
              let title = `Arabic Video (${knownId})`
              let duration = 0
              let streamUrl = url
              if (fs.existsSync(metaPath)) {
                try {
                  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
                  title = meta.title || title
                  duration = meta.duration || 0
                  streamUrl = meta.sourceUrl || streamUrl
                } catch {
                  // ignore
                }
              }

              // Always return streaming URL (never local .mp4)
              if (knownId.length === 11 && !streamUrl.startsWith('http')) {
                streamUrl = `https://www.youtube.com/watch?v=${knownId}`
              }

              console.log(`[transcribeVideoServerFn] JSON Cache Hit for ${knownId} (${transcript.length} lines)`)
              return {
                success: true,
                videoId: knownId,
                title,
                duration,
                videoUrl: streamUrl,
                transcript,
                processingTimeSec: 0,
                cached: true,
              }
            }
          } catch (e: any) {
            console.warn(`[transcribeVideoServerFn] Failed to parse cached transcript for ${knownId}:`, e.message)
          }
        }
      }

      const scriptPath = path.join(rootDir, 'scripts', 'arabic_transcriber', 'process_url.py')
      if (!fs.existsSync(scriptPath)) {
        return { success: false, error: `Pipeline script not found at ${scriptPath}` }
      }

      console.log(`[transcribeVideoServerFn] Running ephemeral audio pipeline for: ${url} (force: ${force})`)

      const pyArgs = ['-u', scriptPath, url, '--max-duration', String(maxDuration)]
      if (force) {
        pyArgs.push('--force')
      }

      return await new Promise<TranscribeResult>((resolve) => {
        const pythonProcess = spawn('python', pyArgs, {
          cwd: rootDir,
          env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
        })

        let stdoutData = ''
        let stderrData = ''

        pythonProcess.stdout.on('data', (chunk) => {
          stdoutData += chunk.toString('utf-8')
        })

        pythonProcess.stderr.on('data', (chunk) => {
          stderrData += chunk.toString('utf-8')
        })

        pythonProcess.on('close', async (code) => {
          if (code !== 0) {
            console.error('[transcribeVideoServerFn] Error code:', code, stderrData)
            resolve({
              success: false,
              error: `Transcription failed (code ${code}): ${stderrData || 'Unknown error'}`,
            })
            return
          }

          // Parse JSON result from stdout
          const marker = '--- PIPELINE RESULT JSON ---'
          const markerIndex = stdoutData.lastIndexOf(marker)
          if (markerIndex === -1) {
            console.error('[transcribeVideoServerFn] Marker not found in output:', stdoutData)
            resolve({
              success: false,
              error: 'Invalid response format from transcription pipeline.',
            })
            return
          }

          try {
            const jsonText = stdoutData.slice(markerIndex + marker.length).trim()
            const result = JSON.parse(jsonText)

            const finalStreamUrl = result.sourceUrl || result.videoUrl || url
            const vId = result.videoId || knownId || `video_${Date.now()}`

            // Async background insert into PostgreSQL if connected
            if (result.success && Array.isArray(result.transcript) && process.env.DATABASE_URL) {
              const allWords = result.transcript.flatMap((s: any) => s.words || [])
              db.insert(videoTranscripts)
                .values({
                  videoId: vId,
                  title: result.title || 'Transcribed Arabic Video',
                  sourceUrl: finalStreamUrl,
                  duration: result.duration || 0,
                  language: 'ar',
                  totalSentences: result.transcript.length,
                  totalWords: allWords.length,
                  sentences: result.transcript,
                  metadata: { sourceType: 'youtube', autoTranscribed: true },
                })
                .onConflictDoUpdate({
                  target: videoTranscripts.videoId,
                  set: {
                    title: result.title || 'Transcribed Arabic Video',
                    sourceUrl: finalStreamUrl,
                    sentences: result.transcript,
                    totalSentences: result.transcript.length,
                    totalWords: allWords.length,
                    updatedAt: new Date(),
                  },
                })
                .then(() => {
                  console.log(`[transcribeVideoServerFn] Successfully saved ${vId} transcript to PostgreSQL!`)
                })
                .catch((e: any) => {
                  console.warn('[transcribeVideoServerFn] PostgreSQL async insert warning:', e.message)
                })
            }

            resolve({
              ...result,
              videoUrl: finalStreamUrl, // Pure streaming!
            })
          } catch (e: any) {
            console.error('[transcribeVideoServerFn] JSON parse error:', e, stdoutData)
            resolve({
              success: false,
              error: `Failed to parse transcription output: ${e.message}`,
            })
          }
        })

        pythonProcess.on('error', (err) => {
          console.error('[transcribeVideoServerFn] Process error:', err)
          resolve({
            success: false,
            error: `Failed to launch python process: ${err.message}`,
          })
        })
      })
    } catch (err: any) {
      return { success: false, error: err.message || 'Server error' }
    }
  })

