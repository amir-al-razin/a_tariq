import { describe, it, expect } from 'vitest'
import { evaluateDoodleStroke } from '../components/doodle/ArabicDoodleCanvas'

describe('Arabic Doodle Handwriting Verification Engine', () => {
  const canvasWidth = 500
  const canvasHeight = 340
  const watermarkBounds = {
    centerX: 250,
    centerY: 170,
    width: 90,
    height: 90,
  }

  it('rejects empty drawing or fewer than 3 points', () => {
    const res = evaluateDoodleStroke({
      points: [],
      currentChar: 'أ',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('retry')
    expect(res.score).toBe(0)
  })

  it('anti-cheat: rejects tiny specks or accidental taps on full letters', () => {
    // 3 points close together (speck)
    const speckPoints = [
      { x: 250, y: 170, strokeIndex: 1 },
      { x: 251, y: 171, strokeIndex: 1 },
      { x: 252, y: 170, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: speckPoints,
      currentChar: 'ب',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('retry')
    expect(res.message).toMatch(/too brief|too small/i)
  })

  it('rejects drawings completely off-center in the corner', () => {
    // Drawn near top-left corner (x: 20, y: 20)
    const offCenterPoints = [
      { x: 20, y: 20, strokeIndex: 1 },
      { x: 20, y: 60, strokeIndex: 1 },
      { x: 20, y: 100, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: offCenterPoints,
      currentChar: 'أ',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('retry')
    expect(res.message).toMatch(/off-center/i)
  })

  it('rejects flat horizontal lines for vertical letter Alif', () => {
    // Horizontal line: width = 80, height = 2
    const flatPoints = [
      { x: 210, y: 170, strokeIndex: 1 },
      { x: 250, y: 170, strokeIndex: 1 },
      { x: 290, y: 170, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: flatPoints,
      currentChar: 'أ',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('retry')
    expect(res.message).toMatch(/vertical|completely from top to bottom/i)
  })

  it('rejects bottom bar and top-right tick hack (as in Untitled.png)', () => {
    // User draws horizontal line across bottom + mark at top right, missing Alif
    const untitledPoints = [
      { x: 150, y: 250, strokeIndex: 1 },
      { x: 200, y: 250, strokeIndex: 1 },
      { x: 250, y: 250, strokeIndex: 1 },
      { x: 300, y: 250, strokeIndex: 1 },
      { x: 350, y: 250, strokeIndex: 1 },
      { x: 400, y: 250, strokeIndex: 1 },
      { x: 380, y: 80, strokeIndex: 2 },
      { x: 390, y: 80, strokeIndex: 2 },
    ]
    const res = evaluateDoodleStroke({
      points: untitledPoints,
      currentChar: 'أ',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds: { centerX: 250, centerY: 150, width: 35, height: 130 },
    })
    expect(res.status).toBe('retry')
    expect(res.message).toMatch(/outside|vertical|completely from top to bottom/i)
  })

  it('rejects thin vertical stick for wide basin letter Baa', () => {
    // Vertical line: width = 2, height = 70
    const stickPoints = [
      { x: 250, y: 135, strokeIndex: 1 },
      { x: 250, y: 170, strokeIndex: 1 },
      { x: 250, y: 205, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: stickPoints,
      currentChar: 'ب',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('retry')
    expect(res.message).toMatch(/wide/i)
  })

  it('accepts genuine vertical stroke for Alif', () => {
    // Vertical line down center: height = 80, width = 6
    const alifPoints = [
      { x: 250, y: 130, strokeIndex: 1 },
      { x: 252, y: 155, strokeIndex: 1 },
      { x: 250, y: 180, strokeIndex: 1 },
      { x: 248, y: 210, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: alifPoints,
      currentChar: 'أ',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('success')
    expect(res.score).toBeGreaterThanOrEqual(85)
    expect(res.message).toMatch(/Verified 'أ'/i)
  })

  it('accepts genuine wide basin stroke for Baa', () => {
    // Basin curve right to left: width = 90, height = 30
    const baaPoints = [
      { x: 295, y: 160, strokeIndex: 1 },
      { x: 280, y: 185, strokeIndex: 1 },
      { x: 250, y: 185, strokeIndex: 1 },
      { x: 215, y: 180, strokeIndex: 1 },
      { x: 205, y: 160, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: baaPoints,
      currentChar: 'ب',
      activeTab: 'alphabet',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(res.status).toBe('success')
    expect(res.score).toBeGreaterThanOrEqual(85)
    expect(res.message).toMatch(/Verified 'ب'/i)
  })

  it('handles Eastern Arabic Numeral Sifr (٠) dot correctly', () => {
    // Legitimate dot for ٠: length ~ 15px, compact box
    const dotPoints = [
      { x: 250, y: 170, strokeIndex: 1 },
      { x: 254, y: 174, strokeIndex: 1 },
      { x: 252, y: 172, strokeIndex: 1 },
    ]
    const dotRes = evaluateDoodleStroke({
      points: dotPoints,
      currentChar: '٠',
      activeTab: 'numerals',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(dotRes.status).toBe('success')
    expect(dotRes.score).toBeGreaterThanOrEqual(85)

    // Huge scribble on Sifr (٠) should be rejected
    const bigScribble = [
      { x: 200, y: 120, strokeIndex: 1 },
      { x: 300, y: 120, strokeIndex: 1 },
      { x: 300, y: 220, strokeIndex: 1 },
      { x: 200, y: 220, strokeIndex: 1 },
    ]
    const scribbleRes = evaluateDoodleStroke({
      points: bigScribble,
      currentChar: '٠',
      activeTab: 'numerals',
      canvasWidth,
      canvasHeight,
      watermarkBounds,
    })
    expect(scribbleRes.status).toBe('retry')
    expect(scribbleRes.message).toMatch(/compact single dot/i)
  })

  it('accepts genuine multi-letter Arabic word', () => {
    // Trace across word width = 140, height = 45
    const wordPoints = [
      { x: 320, y: 155, strokeIndex: 1 },
      { x: 290, y: 175, strokeIndex: 1 },
      { x: 260, y: 175, strokeIndex: 1 },
      { x: 230, y: 150, strokeIndex: 1 },
      { x: 200, y: 175, strokeIndex: 1 },
      { x: 180, y: 170, strokeIndex: 1 },
    ]
    const res = evaluateDoodleStroke({
      points: wordPoints,
      currentChar: 'كِتَابٌ',
      activeTab: 'words',
      canvasWidth,
      canvasHeight,
      watermarkBounds: { centerX: 250, centerY: 170, width: 150, height: 80 },
    })
    expect(res.status).toBe('success')
    expect(res.score).toBeGreaterThanOrEqual(85)
    expect(res.message).toMatch(/Verified 'كِتَابٌ'/i)
  })
})
