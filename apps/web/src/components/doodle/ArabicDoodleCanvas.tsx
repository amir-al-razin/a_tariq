import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  RotateCcw,
  Sparkles,
  Volume2,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Undo2,
  Compass,
  Type,
  Hash,
  BookOpen,
} from 'lucide-react'
import confetti from 'canvas-confetti'

// Standalone XP persistence helper
const recordDoodleXp = (amount: number, _description?: string) => {
  if (typeof window === 'undefined') return
  try {
    const cur = Number(localStorage.getItem('tariq_doodle_xp') || 0)
    localStorage.setItem('tariq_doodle_xp', String(cur + amount))
    window.dispatchEvent(new CustomEvent('tariq:xp-earned', { detail: { amount } }))
  } catch {}
}

export type DoodleTab = 'alphabet' | 'numerals' | 'words'
export type DoodleCategory = DoodleTab

export interface AlphabetItem {
  id: string
  char: string
  nameAr: string
  nameEn: string
  transliteration: string
  bn: string
  soundGuide: string
  exampleWord: { ar: string; en: string; transliteration: string }
  tag: string
}

export interface NumeralItem {
  id: string
  char: string
  nameAr: string
  nameEn: string
  transliteration: string
  bn: string
  western: string
  tag: string
}

export interface DoodleWord {
  id: string
  ar: string
  transliteration: string
  en: string
  bn: string
  root: string
  grammar: string
  category: string
}

// 28 Classical Arabic Alphabet Letters
export const ARABIC_ALPHABET: AlphabetItem[] = [
  {
    id: 'alif',
    char: 'أ',
    nameAr: 'أَلِف',
    nameEn: 'Alif',
    transliteration: 'ā / ʾ',
    bn: 'আলিফ',
    soundGuide: 'Glottal stop or long vowel "aa". Drawn top to bottom.',
    exampleWord: { ar: 'أَسَدٌ', en: 'Lion', transliteration: 'asad' },
    tag: 'Letter 1 of 28',
  },
  {
    id: 'baa',
    char: 'ب',
    nameAr: 'بَاء',
    nameEn: 'Bāʾ',
    transliteration: 'b',
    bn: 'বা',
    soundGuide: 'Voiced bilabial plosive (English B). Curved basin with 1 dot below.',
    exampleWord: { ar: 'بَيْتٌ', en: 'House', transliteration: 'bayt' },
    tag: 'Letter 2 of 28',
  },
  {
    id: 'taa',
    char: 'ت',
    nameAr: 'تَاء',
    nameEn: 'Tāʾ',
    transliteration: 't',
    bn: 'তা',
    soundGuide: 'Voiceless dental plosive (English T). Curved basin with 2 dots above.',
    exampleWord: { ar: 'تُفَّاحٌ', en: 'Apple', transliteration: 'tuffāḥ' },
    tag: 'Letter 3 of 28',
  },
  {
    id: 'thaa',
    char: 'ث',
    nameAr: 'ثَاء',
    nameEn: 'Thāʾ',
    transliteration: 'th',
    bn: 'ছা',
    soundGuide: 'Voiceless dental fricative (English TH in thin). Basin with 3 dots above.',
    exampleWord: { ar: 'ثَوْبٌ', en: 'Garment', transliteration: 'thawb' },
    tag: 'Letter 4 of 28',
  },
  {
    id: 'jeem',
    char: 'ج',
    nameAr: 'جِيم',
    nameEn: 'Jīm',
    transliteration: 'j',
    bn: 'জীম',
    soundGuide: 'Voiced postalveolar affricate (English J). Horizontal crown, loop, 1 dot inside.',
    exampleWord: { ar: 'جَمَلٌ', en: 'Camel', transliteration: 'jamal' },
    tag: 'Letter 5 of 28',
  },
  {
    id: 'haa',
    char: 'ح',
    nameAr: 'حَاء',
    nameEn: 'Ḥāʾ',
    transliteration: 'ḥ',
    bn: 'হা',
    soundGuide: 'Voiceless pharyngeal fricative (deep friction from middle of throat).',
    exampleWord: { ar: 'حِصَانٌ', en: 'Horse', transliteration: 'ḥiṣān' },
    tag: 'Letter 6 of 28',
  },
  {
    id: 'khaa',
    char: 'خ',
    nameAr: 'خَاء',
    nameEn: 'Khāʾ',
    transliteration: 'kh',
    bn: 'খা',
    soundGuide: 'Voiceless uvular fricative (rough guttural KH). 1 dot above.',
    exampleWord: { ar: 'خُبْزٌ', en: 'Bread', transliteration: 'khubz' },
    tag: 'Letter 7 of 28',
  },
  {
    id: 'daal',
    char: 'د',
    nameAr: 'دَال',
    nameEn: 'Dāl',
    transliteration: 'd',
    bn: 'দাল',
    soundGuide: 'Voiced dental plosive (English D). Angled wedge sitting above baseline.',
    exampleWord: { ar: 'دَفْتَرٌ', en: 'Notebook', transliteration: 'daftar' },
    tag: 'Letter 8 of 28',
  },
  {
    id: 'dhaal',
    char: 'ذ',
    nameAr: 'ذَال',
    nameEn: 'Dhāl',
    transliteration: 'dh',
    bn: 'যাল',
    soundGuide: 'Voiced dental fricative (English TH in this). Angled wedge with 1 dot above.',
    exampleWord: { ar: 'ذَهَبٌ', en: 'Gold', transliteration: 'dhahab' },
    tag: 'Letter 9 of 28',
  },
  {
    id: 'raa',
    char: 'ر',
    nameAr: 'رَاء',
    nameEn: 'Rāʾ',
    transliteration: 'r',
    bn: 'রা',
    soundGuide: 'Alveolar trill / tap (rolled R). Curved arc dropping below baseline.',
    exampleWord: { ar: 'رَجُلٌ', en: 'Man', transliteration: 'rajul' },
    tag: 'Letter 10 of 28',
  },
  {
    id: 'zaay',
    char: 'ز',
    nameAr: 'زَاي',
    nameEn: 'Zāy',
    transliteration: 'z',
    bn: 'যা',
    soundGuide: 'Voiced alveolar fricative (English Z). Arc dropping below baseline with 1 dot.',
    exampleWord: { ar: 'زَهْرَةٌ', en: 'Flower', transliteration: 'zahrah' },
    tag: 'Letter 11 of 28',
  },
  {
    id: 'seen',
    char: 'س',
    nameAr: 'سِين',
    nameEn: 'Sīn',
    transliteration: 's',
    bn: 'সীন',
    soundGuide: 'Voiceless alveolar fricative (English S). Three teeth with a deep basin.',
    exampleWord: { ar: 'سَمَكٌ', en: 'Fish', transliteration: 'samak' },
    tag: 'Letter 12 of 28',
  },
  {
    id: 'sheen',
    char: 'ش',
    nameAr: 'شِين',
    nameEn: 'Shīn',
    transliteration: 'sh',
    bn: 'শীন',
    soundGuide: 'Voiceless postalveolar fricative (English SH). Three teeth with 3 dots above.',
    exampleWord: { ar: 'شَمْسٌ', en: 'Sun', transliteration: 'shams' },
    tag: 'Letter 13 of 28',
  },
  {
    id: 'saad',
    char: 'ص',
    nameAr: 'صَاد',
    nameEn: 'Ṣād',
    transliteration: 'ṣ',
    bn: 'সোয়াদ',
    soundGuide: 'Emphatic velarized voiceless dental fricative (deep, heavy S).',
    exampleWord: { ar: 'صُنْدُوقٌ', en: 'Box', transliteration: 'ṣundūq' },
    tag: 'Letter 14 of 28',
  },
  {
    id: 'daad',
    char: 'ض',
    nameAr: 'ضَاد',
    nameEn: 'Ḍād',
    transliteration: 'ḍ',
    bn: 'দোয়াদ',
    soundGuide: 'Emphatic voiced dental plosive (the signature Arabic letter, heavy D).',
    exampleWord: { ar: 'ضَوْءٌ', en: 'Light', transliteration: 'ḍawʾ' },
    tag: 'Letter 15 of 28',
  },
  {
    id: 'taa-emphatic',
    char: 'ط',
    nameAr: 'طَاء',
    nameEn: 'Ṭāʾ',
    transliteration: 'ṭ',
    bn: 'তোয়া',
    soundGuide: 'Emphatic voiceless dental plosive (heavy T with vertical mast).',
    exampleWord: { ar: 'طَالِبٌ', en: 'Student', transliteration: 'ṭālib' },
    tag: 'Letter 16 of 28',
  },
  {
    id: 'zhaa',
    char: 'ظ',
    nameAr: 'ظَاء',
    nameEn: 'Ẓāʾ',
    transliteration: 'ẓ',
    bn: 'যোয়া',
    soundGuide: 'Emphatic voiced dental fricative (heavy TH with vertical mast and 1 dot).',
    exampleWord: { ar: 'ظَرْفٌ', en: 'Envelope', transliteration: 'ẓarf' },
    tag: 'Letter 17 of 28',
  },
  {
    id: 'ayn',
    char: 'ع',
    nameAr: 'عَيْن',
    nameEn: 'ʿAyn',
    transliteration: 'ʿ',
    bn: 'আইন',
    soundGuide: 'Voiced pharyngeal fricative (vocal constriction deep in the pharynx).',
    exampleWord: { ar: 'عَيْنٌ', en: 'Eye', transliteration: 'ʿayn' },
    tag: 'Letter 18 of 28',
  },
  {
    id: 'ghayn',
    char: 'غ',
    nameAr: 'غَيْن',
    nameEn: 'Ghayn',
    transliteration: 'gh',
    bn: 'গাইন',
    soundGuide: 'Voiced uvular fricative (resembles French R or gargling sound). 1 dot above.',
    exampleWord: { ar: 'غُرْفَةٌ', en: 'Room', transliteration: 'ghurfah' },
    tag: 'Letter 19 of 28',
  },
  {
    id: 'faa',
    char: 'ف',
    nameAr: 'فَاء',
    nameEn: 'Fāʾ',
    transliteration: 'f',
    bn: 'ফা',
    soundGuide: 'Voiceless labiodental fricative (English F). Round loop on shallow basin.',
    exampleWord: { ar: 'فَمٌ', en: 'Mouth', transliteration: 'fam' },
    tag: 'Letter 20 of 28',
  },
  {
    id: 'qaaf',
    char: 'ق',
    nameAr: 'قَاف',
    nameEn: 'Qāf',
    transliteration: 'q',
    bn: 'ক্বাফ',
    soundGuide: 'Voiceless uvular plosive (deep throat K). Round loop on deep basin with 2 dots.',
    exampleWord: { ar: 'قَلَمٌ', en: 'Pen', transliteration: 'qalam' },
    tag: 'Letter 21 of 28',
  },
  {
    id: 'kaaf',
    char: 'ك',
    nameAr: 'كَاف',
    nameEn: 'Kāf',
    transliteration: 'k',
    bn: 'কাফ',
    soundGuide: 'Voiceless velar plosive (English K). Tall vertical with baseline and mini-kaf.',
    exampleWord: { ar: 'كِتَابٌ', en: 'Book', transliteration: 'kitāb' },
    tag: 'Letter 22 of 28',
  },
  {
    id: 'laam',
    char: 'ل',
    nameAr: 'لَام',
    nameEn: 'Lām',
    transliteration: 'l',
    bn: 'লাম',
    soundGuide: 'Alveolar lateral approximant (English L). Tall hook dipping below baseline.',
    exampleWord: { ar: 'لَحْمٌ', en: 'Meat', transliteration: 'laḥm' },
    tag: 'Letter 23 of 28',
  },
  {
    id: 'meem',
    char: 'م',
    nameAr: 'مِيم',
    nameEn: 'Mīm',
    transliteration: 'm',
    bn: 'মীম',
    soundGuide: 'Bilabial nasal (English M). Small head loop trailing downward.',
    exampleWord: { ar: 'مَسْجِدٌ', en: 'Mosque', transliteration: 'masjid' },
    tag: 'Letter 24 of 28',
  },
  {
    id: 'noon',
    char: 'ن',
    nameAr: 'نُون',
    nameEn: 'Nūn',
    transliteration: 'n',
    bn: 'নূন',
    soundGuide: 'Alveolar nasal (English N). Semicircular deep basin with 1 central dot.',
    exampleWord: { ar: 'نَجْمٌ', en: 'Star', transliteration: 'najm' },
    tag: 'Letter 25 of 28',
  },
  {
    id: 'haa-soft',
    char: 'هـ',
    nameAr: 'هَاء',
    nameEn: 'Hāʾ',
    transliteration: 'h',
    bn: 'হা',
    soundGuide: 'Voiceless glottal fricative (soft airy English H). Elegant dual loop.',
    exampleWord: { ar: 'هِلاَلٌ', en: 'Crescent', transliteration: 'hilāl' },
    tag: 'Letter 26 of 28',
  },
  {
    id: 'waaw',
    char: 'و',
    nameAr: 'وَاو',
    nameEn: 'Wāw',
    transliteration: 'w / ū',
    bn: 'ওয়াও',
    soundGuide: 'Voiced labio-velar approximant (English W or long vowel OO). Loop with tail.',
    exampleWord: { ar: 'وَلَدٌ', en: 'Boy', transliteration: 'walad' },
    tag: 'Letter 27 of 28',
  },
  {
    id: 'yaa',
    char: 'ي',
    nameAr: 'يَاء',
    nameEn: 'Yāʾ',
    transliteration: 'y / ī',
    bn: 'ইয়া',
    soundGuide: 'Palatal approximant (English Y or long vowel EE). Swan-like curve with 2 dots.',
    exampleWord: { ar: 'يَدٌ', en: 'Hand', transliteration: 'yad' },
    tag: 'Letter 28 of 28',
  },
]

// 10 Eastern Arabic Numerals (الأرقام العربية المشرقية)
export const ARABIC_NUMERALS: NumeralItem[] = [
  {
    id: 'num-0',
    char: '٠',
    nameAr: 'صِفْر',
    nameEn: 'Sifr (Zero)',
    transliteration: 'ṣifr',
    bn: 'শূন্য (০)',
    western: '0',
    tag: 'Eastern Arabic ٠',
  },
  {
    id: 'num-1',
    char: '١',
    nameAr: 'وَاحِد',
    nameEn: 'Wāḥid (One)',
    transliteration: 'wāḥid',
    bn: 'এক (১)',
    western: '1',
    tag: 'Eastern Arabic ١',
  },
  {
    id: 'num-2',
    char: '٢',
    nameAr: 'اثْنَان',
    nameEn: 'Ithnān (Two)',
    transliteration: 'ithnān',
    bn: 'দুই (২)',
    western: '2',
    tag: 'Eastern Arabic ٢',
  },
  {
    id: 'num-3',
    char: '٣',
    nameAr: 'ثَلَاثَة',
    nameEn: 'Thalāthah (Three)',
    transliteration: 'thalāthah',
    bn: 'তিন (৩)',
    western: '3',
    tag: 'Eastern Arabic ٣',
  },
  {
    id: 'num-4',
    char: '٤',
    nameAr: 'أَرْبَعَة',
    nameEn: 'Arbaʿah (Four)',
    transliteration: 'arbaʿah',
    bn: 'চার (৪)',
    western: '4',
    tag: 'Eastern Arabic ٤',
  },
  {
    id: 'num-5',
    char: '٥',
    nameAr: 'خَمْسَة',
    nameEn: 'Khamsah (Five)',
    transliteration: 'khamsah',
    bn: 'পাঁচ (৫)',
    western: '5',
    tag: 'Eastern Arabic ٥',
  },
  {
    id: 'num-6',
    char: '٦',
    nameAr: 'سِتَّة',
    nameEn: 'Sittah (Six)',
    transliteration: 'sittah',
    bn: 'ছয় (৬)',
    western: '6',
    tag: 'Eastern Arabic ٦',
  },
  {
    id: 'num-7',
    char: '٧',
    nameAr: 'سَبْعَة',
    nameEn: 'Sabʿah (Seven)',
    transliteration: 'sabʿah',
    bn: 'সাত (৭)',
    western: '7',
    tag: 'Eastern Arabic ٧',
  },
  {
    id: 'num-8',
    char: '٨',
    nameAr: 'ثَمَانِيَة',
    nameEn: 'Thamāniyah (Eight)',
    transliteration: 'thamāniyah',
    bn: 'আট (৮)',
    western: '8',
    tag: 'Eastern Arabic ٨',
  },
  {
    id: 'num-9',
    char: '٩',
    nameAr: 'تِسْعَة',
    nameEn: 'Tisʿah (Nine)',
    transliteration: 'tisʿah',
    bn: 'নয় (৯)',
    western: '9',
    tag: 'Eastern Arabic ٩',
  },
]

// 8 Curriculum Vocabulary Words
export const DOODLE_WORDS: DoodleWord[] = [
  {
    id: '1',
    ar: 'بَيْتٌ',
    transliteration: 'bayt',
    en: 'A House',
    bn: 'একটি বাড়ি',
    root: 'ب - ي - ت',
    grammar: 'Indefinite Noun (اسم نكرة)',
    category: 'Volume 1 · Lesson 1',
  },
  {
    id: '2',
    ar: 'كِتَابٌ',
    transliteration: 'kitāb',
    en: 'A Book',
    bn: 'একটি বই',
    root: 'ك - ت - ب',
    grammar: 'Indefinite Noun (اسم نكرة)',
    category: 'Volume 1 · Lesson 1',
  },
  {
    id: '3',
    ar: 'قَلَمٌ',
    transliteration: 'qalam',
    en: 'A Pen',
    bn: 'একটি কলম',
    root: 'ق - ل - م',
    grammar: 'Indefinite Noun (اسم نكرة)',
    category: 'Volume 1 · Lesson 1',
  },
  {
    id: '4',
    ar: 'بَابٌ',
    transliteration: 'bāb',
    en: 'A Door',
    bn: 'একটি দরজা',
    root: 'ب - و - ب',
    grammar: 'Indefinite Noun (اسم نكرة)',
    category: 'Volume 1 · Lesson 1',
  },
  {
    id: '5',
    ar: 'مَسْجِدٌ',
    transliteration: 'masjid',
    en: 'A Mosque',
    bn: 'একটি মসজিদ',
    root: 'س - ج - د',
    grammar: 'Noun of Place (اسم مكان)',
    category: 'Volume 1 · Lesson 2',
  },
  {
    id: '6',
    ar: 'نَجْمٌ',
    transliteration: 'najm',
    en: 'A Star',
    bn: 'একটি তারা',
    root: 'ن - ج - م',
    grammar: 'Indefinite Noun (اسم نكرة)',
    category: 'Volume 1 · Lesson 3',
  },
  {
    id: '7',
    ar: 'قَمَرٌ',
    transliteration: 'qamar',
    en: 'The Moon',
    bn: 'চাঁদ',
    root: 'ق - م - ر',
    grammar: 'Definite Solar (الاسم القمري)',
    category: 'Volume 1 · Lesson 3',
  },
  {
    id: '8',
    ar: 'شَمْسٌ',
    transliteration: 'shams',
    en: 'The Sun',
    bn: 'সূর্য',
    root: 'ش - م - س',
    grammar: 'Feminine Solar Noun (مؤنث سماعي)',
    category: 'Volume 1 · Lesson 3',
  },
]

type InkColor = 'obsidian' | 'indigo' | 'sepia' | 'emerald'
type NibSize = 'fine' | 'medium' | 'broad'

export interface StrokePoint {
  x: number
  y: number
  strokeIndex: number
}

export interface DoodleEvalInput {
  points: StrokePoint[]
  currentChar: string
  activeTab: DoodleTab
  canvasWidth: number
  canvasHeight: number
  watermarkBounds?: { centerX: number; centerY: number; width: number; height: number }
  targetPixels?: { x: number; y: number }[]
}

export interface DoodleEvalResult {
  score: number
  status: 'idle' | 'success' | 'retry'
  message: string
}

// 1. Interpolate sparse pointer events along strokes into dense continuous point cloud
export function interpolateStrokePoints(points: StrokePoint[], step = 3): { x: number; y: number }[] {
  const result: { x: number; y: number }[] = []
  for (let i = 0; i < points.length; i++) {
    result.push({ x: points[i].x, y: points[i].y })
    if (i > 0 && points[i].strokeIndex === points[i - 1].strokeIndex) {
      const p1 = points[i - 1]
      const p2 = points[i]
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      const steps = Math.floor(dist / step)
      for (let s = 1; s < steps; s++) {
        const t = s / steps
        result.push({
          x: p1.x + (p2.x - p1.x) * t,
          y: p1.y + (p2.y - p1.y) * t,
        })
      }
    }
  }
  return result
}

// 2. Offscreen Computer Vision Rasterizer: Extracts ground-truth pixel shape of glyph
export function rasterizeGlyphToPoints(
  char: string,
  width: number,
  height: number,
  fontStr: string,
  centerX: number,
  centerY: number,
  step = 4
): { x: number; y: number }[] {
  if (typeof document === 'undefined') return []
  try {
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(10, Math.round(width))
    canvas.height = Math.max(10, Math.round(height))
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return []

    ctx.font = fontStr
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.direction = 'rtl'
    ctx.fillStyle = '#000000'
    ctx.fillText(char, centerX, centerY)

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    const rawPoints: { x: number; y: number }[] = []
    let minX = canvas.width
    let maxX = 0
    let minY = canvas.height
    let maxY = 0

    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const idx = (y * canvas.width + x) * 4
        if (imgData[idx + 3] > 40) {
          rawPoints.push({ x, y })
          if (x < minX) minX = x
          if (x > maxX) maxX = x
          if (y < minY) minY = y
          if (y > maxY) maxY = y
        }
      }
    }

    if (rawPoints.length === 0) return []

    // Micro-align rasterized glyph to the exact visual center (centerX, centerY) of the DOM watermark
    const bboxCenterX = (minX + maxX) / 2
    const bboxCenterY = (minY + maxY) / 2
    const offsetX = centerX - bboxCenterX
    const offsetY = centerY - bboxCenterY

    if (Math.abs(offsetX) <= 35 && Math.abs(offsetY) <= 35) {
      return rawPoints.map((p) => ({ x: p.x + offsetX, y: p.y + offsetY }))
    }

    return rawPoints
  } catch {
    return []
  }
}

// 3. High-fidelity synthetic fallback when running in headless test runner without canvas
export function generateFallbackTargetPixels(
  char: string,
  centerX: number,
  centerY: number,
  width: number,
  height: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []
  const step = 4

  if (char === '٠') {
    points.push({ x: centerX, y: centerY })
    return points
  }

  // Vertical Letters: Alif family, Numeral 1
  if (['ا', 'أ', 'إ', 'آ', '١'].includes(char)) {
    const startY = centerY - height * 0.44
    const endY = centerY + height * 0.44
    for (let y = startY; y <= endY; y += step) {
      points.push({ x: centerX, y })
    }
    if (char === 'أ' || char === 'آ') {
      points.push({ x: centerX - 4, y: startY - 8 }, { x: centerX, y: startY - 10 }, { x: centerX + 4, y: startY - 8 })
    } else if (char === 'إ') {
      points.push({ x: centerX - 4, y: endY + 8 }, { x: centerX, y: endY + 10 }, { x: centerX + 4, y: endY + 8 })
    }
    return points
  }

  // Teeth + Basin: Seen (س), Sheen (ش)
  if (char === 'س' || char === 'ش') {
    // 3 teeth on the right half (x: centerX to centerX + width * 0.44)
    const teethStartX = centerX + width * 0.44
    const teethSpan = teethStartX - centerX
    for (let t = 0; t <= 1; t += 0.05) {
      const x = teethStartX - teethSpan * t
      // Three sharp tooth peaks
      const y = centerY - height * 0.12 - Math.abs(Math.sin(t * 3 * Math.PI)) * (height * 0.22)
      points.push({ x, y })
    }
    // Deep curved basin on the left half (x: centerX to centerX - width * 0.44)
    const basinSpan = width * 0.44
    for (let t = 0; t <= 1; t += 0.04) {
      const x = centerX - basinSpan * t
      const y = centerY + Math.sin(t * Math.PI) * (height * 0.42) - (t > 0.85 ? (t - 0.85) * (height * 0.5) : 0)
      points.push({ x, y })
    }
    return points
  }

  // Basin Letters: Baa (ب), Taa (ت), Thaa (ث)
  if (['ب', 'ت', 'ث'].includes(char)) {
    const startX = centerX + width * 0.44
    const endX = centerX - width * 0.44
    const span = startX - endX
    for (let t = 0; t <= 1; t += 0.03) {
      const x = startX - span * t
      let y = centerY + height * 0.16
      if (t < 0.18) {
        y -= (1 - t / 0.18) * (height * 0.32)
      } else if (t > 0.82) {
        y -= ((t - 0.82) / 0.18) * (height * 0.32)
      }
      points.push({ x, y })
    }
    return points
  }

  // Hook & Belly Letters: Jeem (ج), Haa (ح), Khaa (خ)
  if (['ج', 'ح', 'خ'].includes(char)) {
    // Top crown
    for (let t = 0; t <= 1; t += 0.08) {
      points.push({
        x: centerX + width * 0.35 - width * 0.45 * t,
        y: centerY - height * 0.28,
      })
    }
    // Lower C belly
    for (let angle = -Math.PI / 2; angle <= Math.PI / 2; angle += 0.08) {
      points.push({
        x: centerX + Math.cos(angle) * (width * 0.38),
        y: centerY + Math.sin(angle) * (height * 0.36) + height * 0.06,
      })
    }
    return points
  }

  // Wedge Letters: Dal (د), Dhal (ذ)
  if (['د', 'ذ'].includes(char)) {
    for (let t = 0; t <= 1; t += 0.06) {
      points.push({
        x: centerX + width * 0.16 + width * 0.08 * t,
        y: centerY - height * 0.24 + height * 0.44 * t,
      })
    }
    for (let t = 0; t <= 1; t += 0.06) {
      points.push({
        x: centerX + width * 0.24 - width * 0.50 * t,
        y: centerY + height * 0.20,
      })
    }
    return points
  }

  // Dropping Arc: Raa (ر), Zaay (ز)
  if (['ر', 'ز'].includes(char)) {
    for (let t = 0; t <= 1; t += 0.04) {
      points.push({
        x: centerX + width * 0.20 - width * 0.55 * t,
        y: centerY - height * 0.12 + Math.pow(t, 1.3) * (height * 0.52),
      })
    }
    return points
  }

  // Default wide horizontal/curved glyphs and words
  const startX = centerX + width * 0.44
  const endX = centerX - width * 0.44
  const span = Math.abs(startX - endX)
  const steps = Math.floor(span / step)
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = startX - span * t
    const y = centerY + Math.sin(t * Math.PI) * (height * 0.25)
    points.push({ x, y })
  }
  return points
}

// 4. Bidirectional Computer Vision Shape Correlation Matcher
export function computeBidirectionalShapeMatch(
  targetPoints: { x: number; y: number }[],
  userPoints: { x: number; y: number }[],
  covRadius = 22,
  precRadius = 26
): { coverage: number; precision: number; shapeScore: number } {
  if (targetPoints.length === 0 || userPoints.length === 0) {
    return { coverage: 0, precision: 0, shapeScore: 0 }
  }

  const covRadiusSq = covRadius * covRadius
  const precRadiusSq = precRadius * precRadius

  // Target Coverage (Recall): Did the user trace close to the target glyph points?
  let coveredCount = 0
  for (let i = 0; i < targetPoints.length; i++) {
    const tx = targetPoints[i].x
    const ty = targetPoints[i].y
    for (let j = 0; j < userPoints.length; j++) {
      const dx = tx - userPoints[j].x
      const dy = ty - userPoints[j].y
      if (dx * dx + dy * dy <= covRadiusSq) {
        coveredCount++
        break
      }
    }
  }
  const coverage = coveredCount / targetPoints.length

  // User Precision (Fidelity): Did the user's stroke stay near the character rather than scribbling wild marks?
  let validCount = 0
  for (let j = 0; j < userPoints.length; j++) {
    const ux = userPoints[j].x
    const uy = userPoints[j].y
    for (let i = 0; i < targetPoints.length; i++) {
      const dx = ux - targetPoints[i].x
      const dy = uy - targetPoints[i].y
      if (dx * dx + dy * dy <= precRadiusSq) {
        validCount++
        break
      }
    }
  }
  const precision = validCount / userPoints.length

  // Harmonic Mean (F1 Shape Score)
  const shapeScore =
    precision + coverage > 0 ? (2 * precision * coverage) / (precision + coverage) : 0

  return { coverage, precision, shapeScore }
}

// 5. Foolproof, AI-Grade Handwriting Recognition Pipeline
export function evaluateDoodleStroke({
  points,
  currentChar,
  activeTab,
  canvasWidth,
  canvasHeight,
  watermarkBounds,
  targetPixels,
}: DoodleEvalInput): DoodleEvalResult {
  if (points.length < 3) {
    return {
      score: 0,
      status: 'retry',
      message: 'Draw the character shape inside the atelier before evaluating!',
    }
  }

  // 1. Calculate total continuous drawn stroke arc length
  let totalDrawnLength = 0
  for (let i = 1; i < points.length; i++) {
    if (points[i].strokeIndex === points[i - 1].strokeIndex) {
      totalDrawnLength += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y)
    }
  }

  const isDotGlyph = currentChar === '٠'

  // 2. Anti-speck filter
  const minRequiredLength = isDotGlyph ? 5 : activeTab === 'words' ? 45 : 28
  if (totalDrawnLength < minRequiredLength) {
    return {
      score: 15,
      status: 'retry',
      message: `Stroke is too brief (${Math.round(totalDrawnLength)}px). Draw the full outline of '${currentChar}'.`,
    }
  }

  // 3. Resolve target reference metrics directly from DOM watermark
  const watermarkCenterX = watermarkBounds?.centerX ?? canvasWidth / 2
  const watermarkCenterY = watermarkBounds?.centerY ?? canvasHeight / 2
  const watermarkWidth = Math.max(30, watermarkBounds?.width ?? 80)
  const watermarkHeight = Math.max(30, watermarkBounds?.height ?? 80)

  // 4. Overall Centering & User Bounding Dimensions
  let uMinX = canvasWidth
  let uMaxX = 0
  let uMinY = canvasHeight
  let uMaxY = 0
  for (const p of points) {
    if (p.x < uMinX) uMinX = p.x
    if (p.x > uMaxX) uMaxX = p.x
    if (p.y < uMinY) uMinY = p.y
    if (p.y > uMaxY) uMaxY = p.y
  }
  const userCenterX = (uMinX + uMaxX) / 2
  const userCenterY = (uMinY + uMaxY) / 2
  const userWidth = Math.max(1, uMaxX - uMinX)
  const userHeight = Math.max(1, uMaxY - uMinY)

  // Anti-scribble / Chaos density filter (rejects dense tangle scribbles like Untitled3.png)
  const boundingDim = Math.max(userWidth, userHeight)
  const area = Math.max(10, userWidth * userHeight)
  const scribbleDensity = totalDrawnLength / Math.sqrt(area)
  if (!isDotGlyph && totalDrawnLength > Math.max(450, boundingDim * 6.0) && scribbleDensity > 6.2) {
    return {
      score: 12,
      status: 'retry',
      message: `Drawing is too dense and scribbled. Trace the clean shape of '${currentChar}'.`,
    }
  }

  const distFromTarget = Math.hypot(userCenterX - watermarkCenterX, userCenterY - watermarkCenterY)
  const maxAllowedDist = Math.max(canvasWidth, canvasHeight) * 0.40
  if (distFromTarget > maxAllowedDist) {
    return {
      score: 15,
      status: 'retry',
      message: `Drawn off-center (${Math.round(distFromTarget)}px away). Trace directly over or near '${currentChar}'.`,
    }
  }

  // 5. Sifr (٠) compact dot verification
  if (isDotGlyph) {
    const dotSpan = Math.max(userWidth, userHeight)
    if (dotSpan > 65 || totalDrawnLength > 120) {
      return {
        score: 25,
        status: 'retry',
        message: 'Sifr (٠) is a compact single dot. Avoid drawing large loops or lines.',
      }
    }
    if (distFromTarget > 65) {
      return {
        score: 20,
        status: 'retry',
        message: `Draw Sifr (٠) near the center of the guide.`,
      }
    }
    return {
      score: 95,
      status: 'success',
      message: `مَا شَاءَ اللَّه! Verified '٠' accurately (95%)! +30 XP awarded!`,
    }
  }

  // 6. Anti-Straight-Slash / Line Filter (Rejects single straight slash / bar across curved letters like Untitled2.png)
  const isSingleStroke = points.length > 0 && points.every((p) => p.strokeIndex === points[0].strokeIndex)
  if (isSingleStroke && totalDrawnLength > 30) {
    const startP = points[0]
    const endP = points[points.length - 1]
    const chordDist = Math.hypot(endP.x - startP.x, endP.y - startP.y)
    const straightness = chordDist / Math.max(1, totalDrawnLength)
    const straightLetters = new Set(['ا', 'أ', 'إ', 'آ', '١'])

    if (straightness > 0.88 && !straightLetters.has(currentChar)) {
      return {
        score: 18,
        status: 'retry',
        message: `'${currentChar}' is a curved or multi-part character. Trace its curves and distinctive shape, not a straight slash.`,
      }
    }
  }

  // 7. Structural Orientation & Endpoint Matching
  const verticalGlyphs = new Set(['ا', 'أ', 'إ', 'آ', '١', 'ل', 'ط', 'ظ'])
  const isVerticalGlyph = verticalGlyphs.has(currentChar)
  const horizontalGlyphs = new Set([
    'ب', 'ت', 'ث', 'د', 'ذ', 'س', 'ش', 'ص', 'ض', 'ك', 'ف', 'ن', 'هـ', 'ه',
  ])
  const isHorizontalGlyph = activeTab === 'words' || horizontalGlyphs.has(currentChar)

  if (isVerticalGlyph) {
    // Vertical letter must have significant height and predominantly vertical aspect
    const minHeight = Math.min(36, watermarkHeight * 0.40)
    const minRatio = currentChar === 'ط' || currentChar === 'ظ' ? 0.40 : 0.80
    if (userHeight < minHeight || userHeight < userWidth * minRatio) {
      return {
        score: 20,
        status: 'retry',
        message: `'${currentChar}' is a vertical letter. Draw downward from top to bottom, not horizontally.`,
      }
    }

    // Must reach upper and lower sections of the guide
    const colHalfWidth = Math.max(34, watermarkWidth * 0.55)
    const colPoints = points.filter((p) => Math.abs(p.x - watermarkCenterX) <= colHalfWidth)
    const hasTop = colPoints.some((p) => p.y < watermarkCenterY - watermarkHeight * 0.12)
    const hasBottom = colPoints.some((p) => p.y > watermarkCenterY + watermarkHeight * 0.12)
    if (!hasTop || !hasBottom) {
      return {
        score: 20,
        status: 'retry',
        message: `Trace '${currentChar}' completely from top to bottom through the guide.`,
      }
    }
  } else if (isHorizontalGlyph) {
    // Horizontal letter must have significant width and predominantly horizontal aspect
    const minWidth = Math.min(36, watermarkWidth * 0.40)
    if (userWidth < minWidth || userWidth < userHeight * 0.55) {
      return {
        score: 20,
        status: 'retry',
        message: `'${currentChar}' is a wide horizontal character. Trace the full basin from right to left.`,
      }
    }

    // Must reach right (start) and left (end) sections of the guide
    const rowHalfHeight = Math.max(32, watermarkHeight * 0.55)
    const rowPoints = points.filter((p) => Math.abs(p.y - watermarkCenterY) <= rowHalfHeight)
    const hasRight = rowPoints.some((p) => p.x > watermarkCenterX + watermarkWidth * 0.12)
    const hasLeft = rowPoints.some((p) => p.x < watermarkCenterX - watermarkWidth * 0.12)
    if (!hasRight || !hasLeft) {
      return {
        score: 20,
        status: 'retry',
        message: `Trace '${currentChar}' across the full width from right to left.`,
      }
    }

    // Specialized Seen / Sheen structural check: must have teeth (peaks) on right and basin dip on left
    if (currentChar === 'س' || currentChar === 'ش') {
      const hasBasinDip = points.some(
        (p) => p.x < watermarkCenterX + 12 && p.y > watermarkCenterY + watermarkHeight * 0.10
      )
      const hasTeethZone = points.some(
        (p) => p.x > watermarkCenterX - 12 && p.y < watermarkCenterY + watermarkHeight * 0.05
      )
      if (!hasBasinDip || !hasTeethZone) {
        return {
          score: 22,
          status: 'retry',
          message: `'${currentChar}' has teeth on the right and a deep basin on the left. Trace both parts.`,
        }
      }
    }

    // Specialized Baa / Taa / Thaa check: smooth basin, no serrated teeth
    if (['ب', 'ت', 'ث'].includes(currentChar)) {
      let teethPeaks = 0
      let goingUp = false
      for (let i = 1; i < points.length; i++) {
        const dy = points[i].y - points[i - 1].y
        if (dy < -6) goingUp = true
        else if (goingUp && dy > 6) {
          teethPeaks++
          goingUp = false
        }
      }
      if (teethPeaks >= 2) {
        return {
          score: 20,
          status: 'retry',
          message: `'${currentChar}' has a smooth flat basin without serrated teeth. Follow its flat baseline.`,
        }
      }
    }
  }

  // 8. Dense point clouds & Computer Vision Shape Correlation
  const userDensePoints = interpolateStrokePoints(points, 3)
  const targetDensePoints =
    targetPixels && targetPixels.length > 0
      ? targetPixels
      : generateFallbackTargetPixels(
          currentChar,
          watermarkCenterX,
          watermarkCenterY,
          watermarkWidth,
          watermarkHeight
        )

  const covRadius = Math.max(12, Math.min(18, Math.round(watermarkHeight * 0.20)))
  const precRadius = Math.max(14, Math.min(22, Math.round(watermarkHeight * 0.24)))

  const { coverage, precision, shapeScore } = computeBidirectionalShapeMatch(
    targetDensePoints,
    userDensePoints,
    covRadius,
    precRadius
  )

  // Dynamic thresholds
  const minCov = activeTab === 'words' ? 0.35 : 0.48
  const minPrec = activeTab === 'words' ? 0.38 : 0.48
  const minScore = activeTab === 'words' ? 0.36 : 0.48

  if (coverage < minCov) {
    return {
      score: Math.round(shapeScore * 100),
      status: 'retry',
      message: `Coverage too low (${Math.round(coverage * 100)}%). Trace the complete shape of '${currentChar}'.`,
    }
  }

  if (precision < minPrec) {
    return {
      score: Math.round(shapeScore * 100),
      status: 'retry',
      message: `Too many stray strokes outside '${currentChar}' (${Math.round(precision * 100)}% on-target). Stay on the guide.`,
    }
  }

  if (shapeScore < minScore) {
    return {
      score: Math.round(shapeScore * 100),
      status: 'retry',
      message: `Shape similarity is ${Math.round(shapeScore * 100)}%. Follow the character curves closer.`,
    }
  }

  // 9. Recognized & Validated!
  const displayScore = Math.min(99, Math.max(86, Math.round(72 + shapeScore * 26)))
  return {
    score: displayScore,
    status: 'success',
    message: `مَا شَاءَ اللَّه! Shape recognized accurately (${displayScore}%)! +30 XP awarded!`,
  }
}

export const ArabicDoodleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const historyRef = useRef<ImageData[]>([])
  const strokePointsRef = useRef<StrokePoint[]>([])
  const currentStrokeIdRef = useRef(0)

  // Tabs: alphabet | numerals | words
  const [activeTab, setActiveTab] = useState<DoodleTab>('alphabet')
  const [alphabetIndex, setAlphabetIndex] = useState(0)
  const [numeralIndex, setNumeralIndex] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  const [isDrawing, setIsDrawing] = useState(false)
  const [showTraceGuide, setShowTraceGuide] = useState(true)
  const [showGuidelines, setShowGuidelines] = useState(true)
  const [activeInk, setActiveInk] = useState<InkColor>('obsidian')
  const [activeNib, setActiveNib] = useState<NibSize>('medium')
  const [strokeCount, setStrokeCount] = useState(0)
  const [canUndo, setCanUndo] = useState(false)
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number
    status: 'idle' | 'success' | 'retry'
    message: string
  }>({ score: 0, status: 'idle', message: '' })

  const addXp = recordDoodleXp

  // Current item resolver depending on active tab
  const currentAlphabet = ARABIC_ALPHABET[alphabetIndex]
  const currentNumeral = ARABIC_NUMERALS[numeralIndex]
  const currentWord = DOODLE_WORDS[wordIndex]

  const currentChar =
    activeTab === 'alphabet'
      ? currentAlphabet.char
      : activeTab === 'numerals'
      ? currentNumeral.char
      : currentWord.ar

  const currentAudioText =
    activeTab === 'alphabet'
      ? currentAlphabet.nameAr
      : activeTab === 'numerals'
      ? currentNumeral.nameAr
      : currentWord.ar

  // Native audio playback
  const playItemAudio = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.85
    window.speechSynthesis.speak(utterance)
  }, [])

  // Clear Canvas
  const handleClear = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    historyRef.current = []
    strokePointsRef.current = []
    currentStrokeIdRef.current = 0
    setCanUndo(false)
    setStrokeCount(0)
    setEvaluationResult({ score: 0, status: 'idle', message: '' })
  }, [])

  // Undo Last Stroke
  const handleUndo = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx || historyRef.current.length === 0) return

    historyRef.current.pop() // remove current
    if (historyRef.current.length > 0) {
      const prev = historyRef.current[historyRef.current.length - 1]
      ctx.putImageData(prev, 0, 0)
      setCanUndo(historyRef.current.length > 1)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setCanUndo(false)
    }

    // Prune points belonging to the last stroke
    if (strokePointsRef.current.length > 0) {
      const lastStrokeId = strokePointsRef.current[strokePointsRef.current.length - 1].strokeIndex
      strokePointsRef.current = strokePointsRef.current.filter((p) => p.strokeIndex !== lastStrokeId)
    }
  }, [])

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (activeTab === 'alphabet') {
      setAlphabetIndex((prev) => (prev + 1) % ARABIC_ALPHABET.length)
    } else if (activeTab === 'numerals') {
      setNumeralIndex((prev) => (prev + 1) % ARABIC_NUMERALS.length)
    } else {
      setWordIndex((prev) => (prev + 1) % DOODLE_WORDS.length)
    }
    handleClear()
  }, [activeTab, handleClear])

  const handlePrev = useCallback(() => {
    if (activeTab === 'alphabet') {
      setAlphabetIndex((prev) => (prev - 1 + ARABIC_ALPHABET.length) % ARABIC_ALPHABET.length)
    } else if (activeTab === 'numerals') {
      setNumeralIndex((prev) => (prev - 1 + ARABIC_NUMERALS.length) % ARABIC_NUMERALS.length)
    } else {
      setWordIndex((prev) => (prev - 1 + DOODLE_WORDS.length) % DOODLE_WORDS.length)
    }
    handleClear()
  }, [activeTab, handleClear])

  const handleSwitchTab = useCallback(
    (tab: DoodleTab) => {
      setActiveTab(tab)
      handleClear()
    },
    [handleClear]
  )

  // Setup Canvas DPI
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
    }
  }, [currentChar])

  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  // Ink style resolver
  const getStrokeStyle = () => {
    const isDark = document.documentElement.classList.contains('dark')
    switch (activeInk) {
      case 'indigo':
        return isDark ? '#818cf8' : '#3730a3'
      case 'sepia':
        return isDark ? '#fbbf24' : '#92400e'
      case 'emerald':
        return isDark ? '#34d399' : '#065f46'
      case 'obsidian':
      default:
        return isDark ? '#f5f5f4' : '#1c1917'
    }
  }

  const getLineWidth = () => {
    switch (activeNib) {
      case 'fine':
        return 4
      case 'broad':
        return 14
      case 'medium':
      default:
        return 9
    }
  }

  // Pointer Down
  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.setPointerCapture(e.pointerId)
    setIsDrawing(true)
    const { x, y } = getCanvasCoords(e)

    currentStrokeIdRef.current += 1
    strokePointsRef.current.push({
      x,
      y,
      strokeIndex: currentStrokeIdRef.current,
    })

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.strokeStyle = getStrokeStyle()
    ctx.lineWidth = getLineWidth()
  }

  // Pointer Move
  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = getCanvasCoords(e)
    strokePointsRef.current.push({
      x,
      y,
      strokeIndex: currentStrokeIdRef.current,
    })

    ctx.lineTo(x, y)
    ctx.stroke()
    setStrokeCount((c) => c + 1)
  }

  // Pointer Up
  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (canvas) {
      canvas.releasePointerCapture(e.pointerId)
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
        historyRef.current.push(snapshot)
        if (historyRef.current.length > 20) historyRef.current.shift()
        setCanUndo(true)
      }
    }
    setIsDrawing(false)
  }

  const watermarkRef = useRef<HTMLSpanElement>(null)

  // Proper, Non-Cheatable & Forgiving Handwriting Verification Engine
  const handleCheckDoodle = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()

    let watermarkBounds: { centerX: number; centerY: number; width: number; height: number } | undefined
    let targetPixels: { x: number; y: number }[] | undefined

    if (watermarkRef.current) {
      const wRect = watermarkRef.current.getBoundingClientRect()
      watermarkBounds = {
        centerX: (wRect.left + wRect.right) / 2 - canvasRect.left,
        centerY: (wRect.top + wRect.bottom) / 2 - canvasRect.top,
        width: Math.max(20, wRect.width),
        height: Math.max(20, wRect.height),
      }

      // Computer Vision Rasterizer: Render actual glyph to extract exact 2D pixel shape
      const style = window.getComputedStyle(watermarkRef.current)
      const fontStr = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
      targetPixels = rasterizeGlyphToPoints(
        currentChar,
        canvasRect.width,
        canvasRect.height,
        fontStr,
        watermarkBounds.centerX,
        watermarkBounds.centerY,
        4
      )
    }

    const result = evaluateDoodleStroke({
      points: strokePointsRef.current,
      currentChar,
      activeTab,
      canvasWidth: canvasRect.width,
      canvasHeight: canvasRect.height,
      watermarkBounds,
      targetPixels,
    })

    setEvaluationResult(result)

    if (result.status === 'success') {
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
      })

      addXp(30, `Doodle Mastered: ${currentChar}`)
    }
  }

  return (
    <div className="w-full bg-[#FAF8F5] dark:bg-[#141311] rounded-3xl p-6 sm:p-8 border border-[#E7E2D9] dark:border-[#26231E] shadow-sm font-english space-y-6 transition-colors duration-300">
      {/* Atelier Header & Navigation */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E7E2D9] dark:border-[#26231E] pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F0ECE1] dark:bg-[#201D18] border border-[#DDD6C8] dark:border-[#332E27] text-stone-800 dark:text-stone-200 flex items-center justify-center font-arabic text-xl font-bold shadow-inner shrink-0">
            ق
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-english-bold text-lg text-stone-900 dark:text-stone-100 tracking-tight">
                Arabic Calligraphy Atelier
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-english-bold whitespace-nowrap shrink-0">
                ⚡ +30 XP
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-english">
              Fluid handwriting & orthography canvas with intelligent endpoint recognition.
            </p>
          </div>
        </div>

        {/* Global Toolbar (Prev, Next, Undo, Clear, Guidelines, Template) */}
        <div className="flex items-center gap-2 flex-wrap self-stretch sm:self-auto">
          {/* Ruling Guidelines Toggle */}
          <button
            onClick={() => setShowGuidelines((g) => !g)}
            className={`p-2 rounded-xl text-xs font-english-semibold transition-all cursor-pointer border shrink-0 ${
              showGuidelines
                ? 'bg-[#EAE4D9] dark:bg-[#28241F] border-[#DFD8CC] dark:border-[#3A342C] text-stone-900 dark:text-stone-100'
                : 'bg-transparent border-[#DFD8CC] dark:border-[#26231E] text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
            }`}
            title="Toggle Musattar (Manuscript Grid Guidelines)"
          >
            <Compass className="w-4 h-4" />
          </button>

          {/* Trace Guide Toggle */}
          <button
            onClick={() => setShowTraceGuide((g) => !g)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-english-semibold transition-all cursor-pointer border whitespace-nowrap shrink-0 ${
              showTraceGuide
                ? 'bg-[#EAE4D9] dark:bg-[#28241F] border-[#DFD8CC] dark:border-[#3A342C] text-stone-900 dark:text-stone-100'
                : 'bg-transparent border-[#DFD8CC] dark:border-[#26231E] text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
            }`}
            title="Toggle watermark trace template"
          >
            {showTraceGuide ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="whitespace-nowrap">{showTraceGuide ? 'Template' : 'Freehand'}</span>
          </button>

          {/* Undo */}
          <button
            onClick={handleUndo}
            disabled={!canUndo}
            className="p-2 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-700 dark:text-stone-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] shrink-0"
            title="Undo stroke"
          >
            <Undo2 className="w-4 h-4" />
          </button>

          {/* Clear */}
          <button
            onClick={handleClear}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-700 dark:text-stone-300 text-xs font-english-semibold transition-colors cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] whitespace-nowrap shrink-0"
            title="Clear canvas"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Clear</span>
          </button>

          {/* Prev Item */}
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F0ECE1] hover:bg-[#E4DDD0] dark:bg-[#201D18] dark:hover:bg-[#2A2620] text-stone-800 dark:text-stone-200 text-xs font-english-bold transition-all cursor-pointer border border-[#DDD6C8] dark:border-[#332E27] whitespace-nowrap shrink-0"
            title="Previous character"
          >
            <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Prev</span>
          </button>

          {/* Next Item */}
          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-950 text-xs font-english-bold transition-all cursor-pointer shadow-sm whitespace-nowrap shrink-0"
            title="Next character"
          >
            <span className="whitespace-nowrap">Next</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>

      {/* Category Tabs: Alphabet | Numerals | Words */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-1.5 p-1 bg-[#EAE4D9] dark:bg-[#1E1C18] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] overflow-x-auto max-w-full">
          <button
            onClick={() => handleSwitchTab('alphabet')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-english-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'alphabet'
                ? 'bg-white dark:bg-[#2E2B25] text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Type className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Alphabet (الحروف · 28)</span>
          </button>

          <button
            onClick={() => handleSwitchTab('numerals')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-english-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'numerals'
                ? 'bg-white dark:bg-[#2E2B25] text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Numerals (الأرقام · 10)</span>
          </button>

          <button
            onClick={() => handleSwitchTab('words')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-english-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'words'
                ? 'bg-white dark:bg-[#2E2B25] text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>Words (الكلمات · 8)</span>
          </button>
        </div>

        {/* Current position counter */}
        <div className="text-xs font-english-medium text-stone-500 dark:text-stone-400 whitespace-nowrap">
          {activeTab === 'alphabet' && `Letter ${alphabetIndex + 1} of ${ARABIC_ALPHABET.length}`}
          {activeTab === 'numerals' && `Digit ${numeralIndex + 1} of ${ARABIC_NUMERALS.length}`}
          {activeTab === 'words' && `Word ${wordIndex + 1} of ${DOODLE_WORDS.length}`}
        </div>
      </div>

      {/* Quick Selection Ribbon */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-thin">
        {activeTab === 'alphabet' &&
          ARABIC_ALPHABET.map((letter, idx) => (
            <button
              key={letter.id}
              onClick={() => {
                setAlphabetIndex(idx)
                handleClear()
              }}
              className={`px-3 py-1.5 rounded-xl font-arabic text-lg font-bold transition-all cursor-pointer shrink-0 border whitespace-nowrap ${
                alphabetIndex === idx
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-sm'
                  : 'bg-white dark:bg-[#1A1815] text-stone-700 dark:text-stone-300 border-[#DFD8CC] dark:border-[#2C2822] hover:bg-[#F5F1E8] dark:hover:bg-[#24211C]'
              }`}
              title={letter.nameEn}
            >
              {letter.char}
            </button>
          ))}

        {activeTab === 'numerals' &&
          ARABIC_NUMERALS.map((num, idx) => (
            <button
              key={num.id}
              onClick={() => {
                setNumeralIndex(idx)
                handleClear()
              }}
              className={`px-3.5 py-1 rounded-xl font-arabic text-lg font-bold transition-all cursor-pointer shrink-0 border whitespace-nowrap flex items-center gap-1.5 ${
                numeralIndex === idx
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-sm'
                  : 'bg-white dark:bg-[#1A1815] text-stone-700 dark:text-stone-300 border-[#DFD8CC] dark:border-[#2C2822] hover:bg-[#F5F1E8] dark:hover:bg-[#24211C]'
              }`}
              title={num.nameEn}
            >
              <span>{num.char}</span>
              <span className="text-[10px] opacity-70 font-english">({num.western})</span>
            </button>
          ))}

        {activeTab === 'words' &&
          DOODLE_WORDS.map((w, idx) => (
            <button
              key={w.id}
              onClick={() => {
                setWordIndex(idx)
                handleClear()
              }}
              className={`px-3.5 py-1 rounded-xl font-arabic text-base font-bold transition-all cursor-pointer shrink-0 border whitespace-nowrap ${
                wordIndex === idx
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-sm'
                  : 'bg-white dark:bg-[#1A1815] text-stone-700 dark:text-stone-300 border-[#DFD8CC] dark:border-[#2C2822] hover:bg-[#F5F1E8] dark:hover:bg-[#24211C]'
              }`}
              title={w.en}
            >
              {w.ar}
            </button>
          ))}
      </div>

      {/* Main Drafting Atelier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Calligraphy Canvas & Nib Controls */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          {/* Canvas Area with Classical Musattar Ruling Lines */}
          <div className="relative w-full h-[300px] sm:h-[340px] bg-white dark:bg-[#0C0B0A] rounded-2xl border-2 border-[#DFD8CC] dark:border-[#2C2822] overflow-hidden select-none touch-none shadow-inner">
            {/* Musattar (Manuscript Calligraphy Guidelines) */}
            {showGuidelines && (
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-12 px-6 opacity-35 dark:opacity-20">
                <div className="w-full border-b border-dashed border-sky-400" />
                <div className="w-full border-b-2 border-emerald-500" />
                <div className="w-full border-b border-dashed border-amber-400" />
              </div>
            )}

            {/* Trace Watermark Outline */}
            <div
              className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none text-stone-300/85 dark:text-stone-800 font-arabic font-bold transition-opacity ${
                activeTab === 'words' ? 'text-6xl sm:text-7xl' : 'text-8xl sm:text-9xl'
              } ${showTraceGuide ? 'opacity-100' : 'opacity-0'}`}
              dir="rtl"
            >
              <span ref={watermarkRef}>{currentChar}</span>
            </div>

            {/* HTML5 Canvas */}
            <canvas
              ref={canvasRef}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
              className="absolute inset-0 w-full h-full cursor-crosshair z-10"
            />

            {/* Canvas Footer Bar */}
            <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between pointer-events-none gap-2">
              <span className="text-[10px] font-english-medium text-stone-500 dark:text-stone-400 bg-stone-100/90 dark:bg-stone-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-stone-200 dark:border-stone-800 whitespace-nowrap">
                {strokeCount > 0 ? `${strokeCount} stroke nodes captured` : 'Touch or drag to draw loose curves'}
              </span>

              {/* Ink & Nib Status Indicator */}
              <span className="text-[10px] font-english-semibold text-stone-600 dark:text-stone-300 bg-stone-100/90 dark:bg-stone-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-stone-200 dark:border-stone-800 capitalize whitespace-nowrap">
                {activeNib} Qalam · {activeInk}
              </span>
            </div>
          </div>

          {/* Tool Palettes: Ink Colors & Nib Widths */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#F4EFE6] dark:bg-[#1A1815] rounded-2xl border border-[#E5DFD4] dark:border-[#2A2620]">
            {/* Ink Tones */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-english-bold text-stone-600 dark:text-stone-400 mr-1 whitespace-nowrap">
                Ink:
              </span>
              <button
                onClick={() => setActiveInk('obsidian')}
                className={`w-6 h-6 rounded-full bg-stone-900 dark:bg-stone-100 border-2 transition-transform cursor-pointer shrink-0 ${
                  activeInk === 'obsidian' ? 'scale-110 border-sky-500 ring-2 ring-sky-500/40' : 'border-transparent'
                }`}
                title="Carbon Black (حبر أسود)"
              />
              <button
                onClick={() => setActiveInk('indigo')}
                className={`w-6 h-6 rounded-full bg-indigo-700 border-2 transition-transform cursor-pointer shrink-0 ${
                  activeInk === 'indigo' ? 'scale-110 border-sky-500 ring-2 ring-sky-500/40' : 'border-transparent'
                }`}
                title="Lapislazuli Indigo (أزرق لازوردي)"
              />
              <button
                onClick={() => setActiveInk('sepia')}
                className={`w-6 h-6 rounded-full bg-amber-700 border-2 transition-transform cursor-pointer shrink-0 ${
                  activeInk === 'sepia' ? 'scale-110 border-sky-500 ring-2 ring-sky-500/40' : 'border-transparent'
                }`}
                title="Walnut Sepia (بني حناء)"
              />
              <button
                onClick={() => setActiveInk('emerald')}
                className={`w-6 h-6 rounded-full bg-emerald-700 border-2 transition-transform cursor-pointer shrink-0 ${
                  activeInk === 'emerald' ? 'scale-110 border-sky-500 ring-2 ring-sky-500/40' : 'border-transparent'
                }`}
                title="Emerald Hijazi (أخضر حجازي)"
              />
            </div>

            {/* Nib Widths */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-english-bold text-stone-600 dark:text-stone-400 mr-1 whitespace-nowrap">
                Nib:
              </span>
              <button
                onClick={() => setActiveNib('fine')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-english-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeNib === 'fine'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                Fine
              </button>
              <button
                onClick={() => setActiveNib('medium')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-english-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeNib === 'medium'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                Naskh
              </button>
              <button
                onClick={() => setActiveNib('broad')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-english-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeNib === 'broad'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                Thuluth
              </button>
            </div>
          </div>

          {/* Feedback & Evaluate Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex-1 w-full">
              {evaluationResult.status !== 'idle' && (
                <div
                  className={`flex items-center gap-2 text-xs font-english-semibold px-3.5 py-2 rounded-xl border ${
                    evaluationResult.status === 'success'
                      ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-900 dark:text-amber-300 border-amber-500/30'
                  }`}
                >
                  {evaluationResult.status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  )}
                  <span>{evaluationResult.message}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleCheckDoodle}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-950 font-english-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">Recognize & Evaluate (+30 XP)</span>
            </button>
          </div>
        </div>

        {/* Right Side: Manuscript Character / Word Dossier Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-white dark:bg-[#0C0B0A] rounded-2xl border border-[#DFD8CC] dark:border-[#2C2822] shadow-sm space-y-5">
          <div className="space-y-4">
            {/* Header / Category Tag */}
            <div className="flex items-center justify-between border-b border-[#EAE4D9] dark:border-[#221F1B] pb-3">
              <span className="text-[11px] font-english-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 whitespace-nowrap">
                {activeTab === 'alphabet' && currentAlphabet.tag}
                {activeTab === 'numerals' && currentNumeral.tag}
                {activeTab === 'words' && currentWord.category}
              </span>

              <button
                onClick={() => playItemAudio(currentAudioText)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1E8] hover:bg-[#EAE4D9] dark:bg-[#1C1A16] dark:hover:bg-[#25221E] text-stone-800 dark:text-stone-200 text-xs font-english-semibold transition-colors cursor-pointer border border-[#DFD8CC] dark:border-[#2C2822] whitespace-nowrap shrink-0"
                title="Listen to native Arabic pronunciation"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">Audio</span>
              </button>
            </div>

            {/* Vocalized Classical Amiri Display */}
            <div className="text-center py-6 bg-[#FAF7F2] dark:bg-[#14120F] rounded-xl border border-[#ECE6DB] dark:border-[#24211C]">
              <h3
                className={`font-arabic text-stone-900 dark:text-stone-50 mb-2 select-all leading-normal ${
                  activeTab === 'words' ? 'text-6xl' : 'text-7xl sm:text-8xl'
                }`}
                dir="rtl"
              >
                {currentChar}
              </h3>
              <p className="text-sm font-english-semibold text-stone-600 dark:text-stone-400 italic">
                {activeTab === 'alphabet' && `${currentAlphabet.nameEn} · ${currentAlphabet.transliteration}`}
                {activeTab === 'numerals' && `${currentNumeral.nameEn} · ${currentNumeral.transliteration}`}
                {activeTab === 'words' && currentWord.transliteration}
              </p>
            </div>

            {/* Lexical / Orthographic Breakdown */}
            <div className="space-y-2 pt-1 text-xs">
              {activeTab === 'alphabet' && (
                <>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Letter Name (Arabic):</span>
                    <span className="font-arabic text-base font-bold text-stone-900 dark:text-stone-100" dir="rtl">
                      {currentAlphabet.nameAr}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Bangla Name:</span>
                    <span className="font-english-bold text-stone-900 dark:text-stone-100">
                      {currentAlphabet.bn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Example Word:</span>
                    <span className="font-english-medium text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <span className="font-arabic font-bold text-base" dir="rtl">
                        {currentAlphabet.exampleWord.ar}
                      </span>
                      <span>({currentAlphabet.exampleWord.en})</span>
                    </span>
                  </div>
                  <div className="py-1.5">
                    <span className="text-stone-500 block mb-0.5">Sound & Articulation:</span>
                    <p className="text-stone-700 dark:text-stone-300 font-english-medium leading-relaxed">
                      {currentAlphabet.soundGuide}
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'numerals' && (
                <>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Numeral Name:</span>
                    <span className="font-arabic text-base font-bold text-stone-900 dark:text-stone-100" dir="rtl">
                      {currentNumeral.nameAr}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Western Value:</span>
                    <span className="font-english-bold text-base text-emerald-700 dark:text-emerald-400">
                      {currentNumeral.western}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Bangla Digit:</span>
                    <span className="font-english-bold text-stone-900 dark:text-stone-100">
                      {currentNumeral.bn}
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-stone-600 dark:text-stone-400 font-english leading-relaxed">
                      Eastern Arabic numerals are written left-to-right within numbers, matching the direction of Western mathematics.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'words' && (
                <>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Meaning (English):</span>
                    <span className="font-english-bold text-stone-900 dark:text-stone-100">{currentWord.en}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Meaning (Bangla):</span>
                    <span className="font-english-bold text-stone-900 dark:text-stone-100">{currentWord.bn}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Quranic Root:</span>
                    <span className="font-arabic font-bold text-amber-700 dark:text-amber-400 text-sm" dir="rtl">
                      {currentWord.root}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#EAE4D9] dark:border-[#221F1B]">
                    <span className="text-stone-500">Grammar Note:</span>
                    <span className="font-english-medium text-stone-700 dark:text-stone-300">{currentWord.grammar}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Step Guide */}
          <div className="p-3 bg-[#FAF7F2] dark:bg-[#14120F] rounded-xl border border-[#ECE6DB] dark:border-[#24211C] text-[11px] text-stone-500 dark:text-stone-400">
            <span className="font-english-bold text-stone-700 dark:text-stone-300 mr-1">Tariq Atelier Tip:</span>
            Draw the loose shape of <span className="font-arabic font-bold text-stone-900 dark:text-stone-100">{currentChar}</span>. The intelligent waypoint engine recognizes natural curves without strict line-tracing!
          </div>
        </div>
      </div>
    </div>
  )
}
