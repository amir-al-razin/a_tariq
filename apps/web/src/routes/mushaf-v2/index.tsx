import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Sparkles,
  Volume2,
  X,
  CheckCircle,
} from 'lucide-react';
import { useVocabStore } from '../../state/vocabStore';
import { cleanArabic, QURAN_VOCAB_CATALOG } from '../../data/quranVocabData';
import { useRetentionStore } from '@/state/retentionStore';
import { buildKnownTokensSet, isWordMatch, calculatePageComprehension } from '@/lib/mushafMatcher';

export const Route = createFileRoute('/mushaf-v2/')({
  component: MushafV2Page,
});

interface Chapter {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: [number, number];
  translated_name: {
    language_name: string;
    name: string;
  };
}

interface WordAPI {
  id: number;
  position: number;
  audio_url?: string;
  char_type_name: 'word' | 'end';
  text_uthmani: string;
  code_v2?: string;
  line_number?: number;
  page_number?: number;
  location?: string;
}

interface EnrichedWord extends WordAPI {
  verse_key: string;
  verse_number: number;
  chapter_id: number;
}

interface VerseAPI {
  id: number;
  verse_number: number;
  verse_key: string;
  chapter_id: number;
  page_number: number;
  juz_number: number;
  hizb_number: number;
  rub_el_hizb_number?: number;
  text_uthmani: string;
  words: WordAPI[];
}



function getSurahGlyph(chapterId: number): string {
  return String(chapterId).padStart(3, '0');
}

// Pages where all text is center aligned in Madani Mushaf (King Fahd Complex QCF v2)
const CENTER_ALIGNED_PAGES = [1, 2];

// Specific concluding lines on pages that must be center-aligned to prevent word scattering (from Quran.com pageUtils.ts)
const CENTER_ALIGNED_PAGE_LINES: Record<number, number[]> = {
  255: [2], // 13(Ar-Ra'd), last ayah
  528: [9], // 67 (Al Qalam) last ayah
  534: [6], // 55(Ar-Rahman) last ayah
  545: [6], // 58(Al-Mujadila) last ayah
  586: [1], // 80('Abasa) last ayah
  593: [2], // 88(Al-Ghashiyah) last 2 ayah
  594: [5], // 89(Al-Fajr) last 2 ayah
  600: [10], // 100(Al-'Adiyat) last 2 ayah
  602: [5, 15], // 106(Quraysh) last ayah, 108(Al-Kawthar) last ayah
  603: [10, 15], // 110(An-Nasr) last ayah, 111(Al-Masad) last ayah
  604: [4, 9, 14, 15], // 112(Al-Ikhlas) last ayah, 113(Al-Falaq) last ayah, 114(An-Nas) last 2 ayah
};

function isCenterAlignedLine(pageNumber: number, lineNumber: number, wordCount: number): boolean {
  if (CENTER_ALIGNED_PAGES.includes(pageNumber)) return true;
  const centerLines = CENTER_ALIGNED_PAGE_LINES[pageNumber];
  if (centerLines && centerLines.includes(lineNumber)) return true;
  // Fallback safeguard against word scattering on very short concluding lines
  if (wordCount <= 4) return true;
  return false;
}

// In-memory cache for fetched pages to make pagination instantaneous
const pageCache = new Map<number, VerseAPI[]>();
let chaptersCache: Chapter[] | null = null;

function MushafV2Page() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [verses, setVerses] = useState<VerseAPI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Font scale follows Quran.com's code_v2 scale: 1=smallest ... 5=default ... 10=largest
  // Scale 3 = 3.2vh font / 56vh line-width on desktop, and proportional vw units on mobile.
  // These are derived from Quran.com's _utility.scss code_v2 map for seamless mobile reading.
  const FONT_SCALES = [
    { scale: 1, fontVh: 2.9, lineVh: 52, fontVw: 4.5 },
    { scale: 2, fontVh: 3.0, lineVh: 54, fontVw: 5.2 },
    { scale: 3, fontVh: 3.2, lineVh: 56, fontVw: 6.0 },
    { scale: 4, fontVh: 3.5, lineVh: 61, fontVw: 7.2 },
    { scale: 5, fontVh: 3.7, lineVh: 64.5, fontVw: 8.5 },
    { scale: 6, fontVh: 5.16, lineVh: 90.4, fontVw: 10.2 },
    { scale: 7, fontVh: 6.62, lineVh: 116.3, fontVw: 12.0 },
  ];

  const [fontScaleIndex, setFontScaleIndex] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mushaf_font_scale');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < 7) return parsed;
      }
    }
    return 2; // default scale 3 (index 2)
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mushaf_font_scale', fontScaleIndex.toString());
    }
  }, [fontScaleIndex]);

  const currentScale = FONT_SCALES[fontScaleIndex];

  const [highlightLearned, setHighlightLearned] = useState<boolean>(true);
  const [selectedLearnedWord, setSelectedLearnedWord] = useState<{
    rawText: string;
    catalogItem?: (typeof QURAN_VOCAB_CATALOG)[0];
    learnedEntry?: any;
  } | null>(null);

  const { isLearned, learnedWords } = useVocabStore();

  const playWordAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleIncreaseFontSize = () => {
    setFontScaleIndex((prev) => Math.min(FONT_SCALES.length - 1, prev + 1));
  };

  const handleDecreaseFontSize = () => {
    setFontScaleIndex((prev) => Math.max(0, prev - 1));
  };

  // Load QCF2 page font dynamically
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fontFaceName = `p${pageNumber}-v2`;
    const fontUrl = `/fonts/quran/hafs/v2/woff2/p${pageNumber}.woff2`;
    const fontFace = new FontFace(
      fontFaceName,
      `local('QCF2${String(pageNumber).padStart(3, '0')}'), url('${fontUrl}') format('woff2')`
    );
    fontFace.display = 'block';
    document.fonts.add(fontFace);
    fontFace.load().catch((err) => console.warn('Font load error:', err));
  }, [pageNumber]);

  // Map chapters by ID for quick lookup
  const chaptersMap = useMemo(() => {
    const map = new Map<number, Chapter>();
    chapters.forEach((ch) => map.set(ch.id, ch));
    return map;
  }, [chapters]);

  // Fetch chapters list on mount
  useEffect(() => {
    let isMounted = true;

    async function loadChapters() {
      if (chaptersCache) {
        setChapters(chaptersCache);
        return;
      }

      try {
        const res = await fetch('https://api.quran.com/api/v4/chapters');
        if (!res.ok) throw new Error('Failed to load chapters list');
        const data = await res.json();
        if (isMounted && data.chapters) {
          chaptersCache = data.chapters;
          setChapters(data.chapters);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Error loading Quran metadata');
      }
    }

    loadChapters();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch verses for the current page
  const fetchPage = useCallback(async (targetPage: number) => {
    setLoading(true);
    setError(null);

    if (pageCache.has(targetPage)) {
      setVerses(pageCache.get(targetPage)!);
      setLoading(false);
      return;
    }

    try {
      const url = `https://api.quran.com/api/v4/verses/by_page/${targetPage}?words=true&per_page=50&fields=text_uthmani,chapter_id,verse_key&word_fields=code_v2,text_uthmani,qpc_uthmani_hafs,line_number,location`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load Mushaf page ${targetPage}`);
      const data = await res.json();

      if (data.verses) {
        pageCache.set(targetPage, data.verses);
        setVerses(data.verses);
      }
    } catch (err: any) {
      setError(err.message || `Error loading page ${targetPage}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageNumber, fetchPage]);

  // Keyboard pagination navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        // Next page in RTL or LTR reading
        setPageNumber((p) => Math.min(604, p + 1));
      } else if (e.key === 'ArrowLeft') {
        // Previous page
        setPageNumber((p) => Math.max(1, p - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Flatten all words from all verses on this page and group by line_number (1..15)
  const lineGroups = useMemo(() => {
    const allWords: EnrichedWord[] = [];
    verses.forEach((verse) => {
      verse.words?.forEach((word) => {
        allWords.push({
          ...word,
          verse_key: verse.verse_key,
          verse_number: verse.verse_number,
          chapter_id: verse.chapter_id,
        });
      });
    });

    const groups: { [line: number]: EnrichedWord[] } = {};
    allWords.forEach((word) => {
      const line = word.line_number ?? 1;
      if (!groups[line]) {
        groups[line] = [];
      }
      groups[line].push(word);
    });

    return Object.entries(groups)
      .map(([lineStr, words]) => ({
        lineNumber: Number(lineStr),
        words,
      }))
      .sort((a, b) => a.lineNumber - b.lineNumber);
  }, [verses]);

  // Compute learned words stats on current page
  const allWordsOnPage = useMemo(() => {
    return verses.flatMap((v) => v.words || []);
  }, [verses]);

  const pageLearnedStats = useMemo(() => {
    const textWords = allWordsOnPage.filter((w) => w.char_type_name === 'word');
    const learnedOnPage = textWords.filter((w) => isLearned(w.text_uthmani));
    return {
      total: textWords.length,
      unlocked: learnedOnPage.length,
      percentage: textWords.length > 0 ? Math.round((learnedOnPage.length / textWords.length) * 100) : 0,
    };
  }, [allWordsOnPage, isLearned]);

  // Current page metadata
  const firstVerse = verses[0];
  const juzNumber = firstVerse?.juz_number ?? 1;
  const hizbNumber = firstVerse?.hizb_number ?? 1;
  const primaryChapterId = firstVerse?.chapter_id ?? 1;
  const primaryChapter = chaptersMap.get(primaryChapterId);

  // Retention & Mastered Token Illumination
  const items = useRetentionStore((state) => state.items);
  const learnedItems = useMemo(() => Object.values(items), [items]);
  const knownTokensSet = useMemo(() => buildKnownTokensSet(learnedItems), [learnedItems]);

  const pageComprehension = useMemo(() => {
    const allWordList: { text_uthmani: string; char_type_name: 'word' | 'end' }[] = [];
    verses.forEach((v) => {
      v.words.forEach((w) => {
        allWordList.push({ text_uthmani: w.text_uthmani, char_type_name: w.char_type_name });
      });
    });
    return calculatePageComprehension(allWordList, knownTokensSet);
  }, [verses, knownTokensSet]);

  // Jump to selected Surah's first page
  const handleSurahSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const startPage = parseInt(e.target.value, 10);
    if (!isNaN(startPage) && startPage >= 1 && startPage <= 604) {
      setPageNumber(startPage);
    }
  };

  // Jump to selected page number
  const handlePageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetPage = parseInt(e.target.value, 10);
    if (!isNaN(targetPage) && targetPage >= 1 && targetPage <= 604) {
      setPageNumber(targetPage);
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'p${pageNumber}-v2';
              src: local('QCF2${String(pageNumber).padStart(3, '0')}'), url('/fonts/quran/hafs/v2/woff2/p${pageNumber}.woff2') format('woff2');
              font-display: block;
            }
            :root {
              --mushaf-font-size: ${currentScale.fontVw}vw;
              --mushaf-line-height: ${currentScale.fontVw * 1.85}vw;
              --mushaf-container-width: 100%;
            }
            @media (min-width: 768px) {
              :root {
                --mushaf-font-size: ${currentScale.fontVh}vh;
                --mushaf-line-height: ${currentScale.fontVh * 2.2}vh;
                --mushaf-container-width: ${currentScale.lineVh}vh;
              }
            }
          `,
        }}
      />
      {/* Quran.com Replica Sticky Top Bar - Two-Tier Responsive Layout */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md px-4 sm:px-6 py-3 md:py-3.5 transition-all">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 md:gap-3">
          {/* Top Tier on Mobile / Left Section on Desktop: Surah & Page Selectors */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap flex-1 lg:flex-initial">
            {/* Surah Dropdown */}
            <div className="relative flex-1 sm:flex-initial min-w-[140px] sm:min-w-0">
              <select
                value={primaryChapter?.pages[0] ?? 1}
                onChange={handleSurahSelect}
                className="w-full appearance-none bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-english-semibold text-xs md:text-sm font-semibold py-2 pl-3.5 pr-8 rounded-2xl cursor-pointer outline-none transition-colors max-w-[200px] sm:max-w-[260px] truncate"
              >
                {chapters.map((ch) => (
                  <option key={ch.id} value={ch.pages[0]}>
                    {ch.id}. {ch.name_simple} ({ch.translated_name.name})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Page Jump Selector */}
            <div className="relative">
              <select
                value={pageNumber}
                onChange={handlePageSelect}
                className="appearance-none bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-english-semibold text-xs md:text-sm font-semibold py-2 pl-3 pr-7 rounded-2xl cursor-pointer outline-none transition-colors"
              >
                {Array.from({ length: 604 }, (_, i) => i + 1).map((pg) => (
                  <option key={pg} value={pg}>
                    Page {pg}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Tier on Mobile / Right Section on Desktop: Pagination Stepper & Font Size Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            {/* Real-time Quran Illumination Comprehension Badge */}
            {knownTokensSet.size > 0 && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-primary-subtle text-accent-primary text-xs font-bold font-mono mr-1 sm:mr-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {pageComprehension.percentage}% Comprehension ({pageComprehension.matchedWords}/{pageComprehension.totalWords})
                </span>
              </div>
            )}

            {/* Center: Page & Juz Metadata Badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-semibold mr-2">
              <Bookmark className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>
                Page {pageNumber} / 604 · Juz {juzNumber} / Hizb {hizbNumber}
              </span>
            </div>

            {/* Pagination Quick Controls */}
            <div className="flex items-center justify-center gap-1.5 bg-neutral-100/50 dark:bg-neutral-900/50 p-1 rounded-2xl flex-1 sm:flex-initial">
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-semibold px-2 text-neutral-700 dark:text-neutral-300 min-w-[58px] text-center select-none flex-1 sm:flex-initial">
                {pageNumber} / 604
              </span>

              <button
                type="button"
                disabled={pageNumber >= 604}
                onClick={() => setPageNumber((p) => Math.min(604, p + 1))}
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Font Size Adjustment Controls */}
            <div className="flex items-center justify-center gap-1 bg-neutral-100/50 dark:bg-neutral-900/50 p-1 rounded-2xl flex-1 sm:flex-initial">
              <button
                type="button"
                onClick={handleDecreaseFontSize}
                disabled={fontScaleIndex <= 0}
                className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
                title="Decrease Font Size"
              >
                -
              </button>
              <span className="bg-neutral-200/60 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-2.5 py-1.5 rounded-xl text-xs font-semibold select-none min-w-[44px] text-center flex-1 sm:flex-initial">
                A{currentScale.scale}
              </span>
              <button
                type="button"
                onClick={handleIncreaseFontSize}
                disabled={fontScaleIndex >= FONT_SCALES.length - 1}
                className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
                title="Increase Font Size"
              >
                +
              </button>
            </div>

            {/* Greenlit Highlights Toggle & Unlocked Counter */}
            <button
              type="button"
              onClick={() => setHighlightLearned((h) => !h)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-english-bold transition-all cursor-pointer flex-shrink-0 ${
                highlightLearned
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
              title="Toggle Greenlit Highlights for Learned Vocabulary"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Greenlit ({pageLearnedStats.unlocked}/{pageLearnedStats.total})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - width is uncapped so the vh-based line-width controls the book column */}
      <main className="w-full px-4 sm:px-6 pt-6 md:pt-10 space-y-6">
        {/* PHYSICAL MUSHAF MANUSCRIPT CONTAINER */}
        <div className="mushaf-page-container bg-white dark:bg-neutral-950 rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden transition-all max-w-4xl mx-auto">
          {/* Top Page Metadata Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            <span className="font-english text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Surah {primaryChapter ? primaryChapter.name_simple : ''}
            </span>
            <span className="font-english uppercase tracking-widest text-[11px] bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-neutral-700 dark:text-neutral-300">
              Page {pageNumber}
            </span>
            <span className="font-english text-[11px] text-neutral-600 dark:text-neutral-400">
              Juz {juzNumber}
            </span>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-semibold text-center my-4">
              {error}
            </div>
          )}

          {/* Loading Skeleton */}
          {loading ? (
            <div className="animate-pulse space-y-8 py-12 px-4">
              <div className="h-20 bg-neutral-100 dark:bg-neutral-900 rounded-2xl max-w-md mx-auto" />
              <div className="space-y-6">
                <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-full" />
                <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-11/12 mx-auto" />
                <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-full" />
                <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-4/5 mx-auto" />
                <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-full" />
              </div>
            </div>
          ) : (
            /* PHYSICAL MUSHAF - Quran.com architecture: responsive vw/inline on mobile, fixed vh/block on desktop */
            <div
              className="my-4 md:my-6 select-none text-center px-1.5 md:px-0"
              dir="rtl"
              style={{
                width: 'var(--mushaf-container-width)',
                maxWidth: '100%',
                margin: '0 auto',
              }}
            >
              {lineGroups.map((lineGroup) => {
                // Check if any word in this line is verse 1, position 1 of a chapter
                const surahStartWord = lineGroup.words.find(
                  (w) => w.verse_key?.endsWith(':1') && w.position === 1 && w.char_type_name === 'word'
                );
                const chapter = surahStartWord ? chaptersMap.get(surahStartWord.chapter_id) : null;


                return (
                  <React.Fragment key={lineGroup.lineNumber}>
                    {/* Surah Calligraphic Header Emblem Banner */}
                    {chapter && (
                      <div
                        className="block w-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl py-5 px-6 my-6 text-center"
                        dir="ltr"
                      >
                        <span className="font-surah text-5xl sm:text-6xl text-neutral-900 dark:text-neutral-100 select-none block my-1">
                          {getSurahGlyph(chapter.id)}
                        </span>
                        <div className="flex items-center justify-center gap-4 text-xs font-english text-neutral-600 dark:text-neutral-400 mt-2">
                          <span>{chapter.verses_count} Verses</span>
                          <span>·</span>
                          <span className="capitalize">
                            {chapter.revelation_place === 'makkah'
                              ? 'Meccan Revelation'
                              : 'Medinan Revelation'}
                          </span>
                        </div>
                      </div>
                    )}



                    {/*
                      Physical line block - Quran.com architecture:
                      - On mobile (< md): display: inline so lines flow continuously without forced broken wraps
                      - On desktop (>= md): display: flex without flex-wrap so word breaks (like isolated single words on new lines) are mathematically impossible!
                      - Standard full lines use justify-between for authentic Madani book alignment; short ending lines and Pages 1-2 use justify-center to prevent scattering.
                    */}
                    {(() => {
                      const isCenterAligned = isCenterAlignedLine(pageNumber, lineGroup.lineNumber, lineGroup.words.length);
                      return (
                        <div
                          className={`inline w-full text-center md:flex md:flex-row md:flex-nowrap md:items-center md:my-1 ${
                            isCenterAligned ? 'md:justify-center md:gap-3.5' : 'md:justify-between'
                          }`}
                          dir="rtl"
                          style={{ lineHeight: 'var(--mushaf-line-height)' }}
                        >
                          {lineGroup.words.map((word, wordIdx) => {
                            const isEndMarker = word.char_type_name === 'end';
                            const isWordLearned = !isEndMarker && highlightLearned && isLearned(word.text_uthmani);
                            const isMatched = !isEndMarker && (isWordMatch(word.text_uthmani, knownTokensSet) || isWordLearned);
                            return (
                              <React.Fragment key={word.id}>
                                <span
                                  style={{
                                    fontFamily: `p${pageNumber}-v2, 'UthmanicHafs', serif`,
                                    fontSize: 'var(--mushaf-font-size)',
                                  }}
                                  onClick={() => {
                                    if (isWordLearned) {
                                      const clean = cleanArabic(word.text_uthmani);
                                      const entry = learnedWords[clean];
                                      const catalog = QURAN_VOCAB_CATALOG.find((c) => c.arClean === clean);
                                      setSelectedLearnedWord({
                                        rawText: word.text_uthmani,
                                        learnedEntry: entry,
                                        catalogItem: catalog,
                                      });
                                      playWordAudio(word.text_uthmani);
                                    }
                                  }}
                                  className={
                                    isEndMarker
                                      ? 'font-mushaf text-neutral-500 dark:text-neutral-500 select-none mx-1 sm:mx-1.5 md:mx-2 inline-block md:flex-shrink-0'
                                      : isMatched
                                        ? 'font-mushaf text-accent-primary dark:text-accent-primary bg-accent-primary-subtle/90 rounded-lg px-1 transition-colors cursor-pointer inline md:inline-block md:flex-shrink-0 font-bold'
                                        : 'font-mushaf text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors cursor-pointer inline md:inline-block md:flex-shrink-0'
                                  }
                                  title={isMatched ? `Mastered vocabulary: ${word.text_uthmani}` : undefined}
                                >
                                  {word.code_v2 || word.text_uthmani}
                                </span>
                                {wordIdx < lineGroup.words.length - 1 ? ' ' : ''}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      );
                    })()}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Bottom Page Navigation Controls */}
          <div className="pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto gap-3 order-2 sm:order-1">
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm font-semibold hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>

              <button
                type="button"
                disabled={pageNumber >= 604}
                onClick={() => setPageNumber((p) => Math.min(604, p + 1))}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm font-semibold hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                Next Page <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="font-english text-xs font-bold text-neutral-600 dark:text-neutral-400 tracking-wider text-center order-1 sm:order-2">
              ❖ Page {pageNumber} of 604 ❖
            </span>
          </div>
        </div>
      </main>

      {/* Greenlit Word Inspector Popover Modal */}
      {selectedLearnedWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm font-english">
          <div className="relative w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-neutral-200/80 dark:border-neutral-700/80 text-center animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedLearnedWord(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs font-english-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Learned Vocabulary</span>
            </div>

            <div className="my-3">
              <h3 className="font-arabic text-4xl text-neutral-900 dark:text-neutral-50 mb-1" dir="rtl">
                {selectedLearnedWord.catalogItem?.ar || selectedLearnedWord.rawText}
              </h3>
              {selectedLearnedWord.catalogItem?.romanized && (
                <p className="text-xs text-neutral-400 italic">
                  {selectedLearnedWord.catalogItem.romanized}
                </p>
              )}
              <p className="text-base font-english-bold text-neutral-800 dark:text-neutral-200 mt-2">
                {selectedLearnedWord.catalogItem?.en || 'Word studied in curriculum'}
              </p>
            </div>

            <div className="p-3 my-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/50 text-xs space-y-1">
              <div className="flex justify-between text-neutral-500">
                <span>Curriculum Source:</span>
                <span className="font-english-bold text-neutral-800 dark:text-neutral-200">
                  Vol {selectedLearnedWord.learnedEntry?.volume || 1}, Lesson {selectedLearnedWord.learnedEntry?.lesson || 1}
                </span>
              </div>
              {selectedLearnedWord.catalogItem?.quranFrequency && (
                <div className="flex justify-between text-neutral-500">
                  <span>Quran Frequency:</span>
                  <span className="font-english-bold text-emerald-600 dark:text-emerald-400">
                    {selectedLearnedWord.catalogItem.quranFrequency.toLocaleString()}x occurrences
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => playWordAudio(selectedLearnedWord.rawText)}
                className="flex-1 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-english-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Audio</span>
              </button>
              <button
                onClick={() => setSelectedLearnedWord(null)}
                className="flex-1 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-english-bold text-xs hover:opacity-90 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MushafV2Page;

