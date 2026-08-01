import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ThemeToggle from '../../components/ThemeToggle';
import FontToggle from '../../components/FontToggle';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from 'lucide-react';

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

function toArabicNumeral(num: number): string {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num
    .toString()
    .split('')
    .map((digit) => arabicDigits[parseInt(digit, 10)] || digit)
    .join('');
}

function getSurahGlyph(chapterId: number): string {
  return String(chapterId).padStart(3, '0');
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
  const [fontSize, setFontSize] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mushaf_font_size');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 24 && parsed <= 50) {
          return parsed;
        }
      }
    }
    return 34;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mushaf_font_size', fontSize.toString());
    }
  }, [fontSize]);

  const handleIncreaseFontSize = () => {
    setFontSize((prev) => Math.min(50, prev + 2));
  };

  const handleDecreaseFontSize = () => {
    setFontSize((prev) => Math.max(24, prev - 2));
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

  // Current page metadata
  const firstVerse = verses[0];
  const juzNumber = firstVerse?.juz_number ?? 1;
  const hizbNumber = firstVerse?.hizb_number ?? 1;
  const primaryChapterId = firstVerse?.chapter_id ?? 1;
  const primaryChapter = chaptersMap.get(primaryChapterId);

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
          `,
        }}
      />
      {/* Quran.com Replica Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md px-4 md:px-8 py-3.5">
        <div className="max-w-[1024px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Surah & Page Selectors */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Surah Dropdown */}
            <div className="relative">
              <select
                value={primaryChapter?.pages[0] ?? 1}
                onChange={handleSurahSelect}
                className="appearance-none bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-english-semibold text-xs md:text-sm font-semibold py-2 pl-3.5 pr-8 rounded-2xl cursor-pointer outline-none transition-colors max-w-[220px] md:max-w-[280px] truncate"
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

          {/* Center: Page & Juz Metadata Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-semibold">
            <Bookmark className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>
              Page {pageNumber} / 604 · Juz {juzNumber} / Hizb {hizbNumber}
            </span>
          </div>

          {/* Right: Pagination Quick Controls & Toggles */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              className="p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-semibold px-1 text-neutral-600 dark:text-neutral-400 min-w-[50px] text-center">
              {pageNumber} / 604
            </span>

            <button
              type="button"
              disabled={pageNumber >= 604}
              onClick={() => setPageNumber((p) => Math.min(604, p + 1))}
              className="p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Font Size Adjustment Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleDecreaseFontSize}
                disabled={fontSize <= 24}
                className="px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-2xl text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Decrease Font Size"
              >
                -
              </button>
              <span className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-2.5 py-1.5 rounded-2xl text-xs font-semibold select-none min-w-[36px] text-center">
                A {fontSize}px
              </span>
              <button
                type="button"
                onClick={handleIncreaseFontSize}
                disabled={fontSize >= 50}
                className="px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-2xl text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Increase Font Size"
              >
                +
              </button>
            </div>

            <FontToggle variant="toolbar" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[920px] mx-auto px-4 sm:px-6 pt-6 md:pt-10 space-y-6">
        {/* PHYSICAL MUSHAF MANUSCRIPT CONTAINER */}
        <div className="mushaf-page-container bg-white dark:bg-neutral-950 rounded-3xl p-4 sm:p-8 md:p-10 relative overflow-hidden transition-all">
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
            /* CONTINUOUS PHYSICAL MUSHAF MANUSCRIPT BODY (LINE-BY-LINE 15-LINE FORMAT) */
            <div className="my-4" dir="rtl">
              <div className="space-y-2 sm:space-y-3 select-none">
                {lineGroups.map((lineGroup) => {
                  // Check if any word in this line is verse 1, position 1 of a chapter
                  const surahStartWord = lineGroup.words.find(
                    (w) => w.verse_key?.endsWith(':1') && w.position === 1 && w.char_type_name === 'word'
                  );
                  const chapter = surahStartWord ? chaptersMap.get(surahStartWord.chapter_id) : null;
                  const showBismillah = chapter && chapter.bismillah_pre && chapter.id !== 1 && chapter.id !== 9;

                  const isCenteredPage = pageNumber === 1 || pageNumber === 2;
                  // A line with fewer than 10 words is almost certainly a short concluding
                  // line or a special ornamental line - center it so words stay tight.
                  // Only apply justify-between on dense full-width standard lines (10+ words)
                  // on pages 3-604 to replicate the crisp flush-justified physical page look.
                  const isShortLine = lineGroup.words.length < 10;
                  const justifyClass = (isCenteredPage || isShortLine)
                    ? 'justify-center gap-1.5 sm:gap-2'
                    : 'justify-between';

                  return (
                    <React.Fragment key={lineGroup.lineNumber}>
                      {/* Surah Calligraphic Header Emblem Banner */}
                      {chapter && (
                        <div
                          className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl py-5 px-6 my-6 text-center"
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

                      {/* Bismillah Header Banner */}
                      {showBismillah && (
                        <div className="my-6 text-center" dir="ltr">
                          <div className="inline-flex items-center justify-center gap-4 w-full">
                            <span className="text-neutral-400 dark:text-neutral-600 text-xs">
                              ❖ ❖ ❖
                            </span>
                            <span
                              className="font-mushaf text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100 inline-block px-4"
                              dir="rtl"
                            >
                              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                            </span>
                            <span className="text-neutral-400 dark:text-neutral-600 text-xs">
                              ❖ ❖ ❖
                            </span>
                          </div>
                        </div>
                      )}

                      {/* 15-Line Physical Line Block */}
                      <div
                        className={`w-full flex flex-wrap ${justifyClass} items-center my-1 sm:my-1.5 px-1 direction-rtl text-center`}
                        dir="rtl"
                      >
                        {lineGroup.words.map((word) => {
                          const isEndMarker = word.char_type_name === 'end';

                          if (isEndMarker) {
                            return (
                              <span
                                key={word.id}
                                style={{
                                  fontFamily: `p${pageNumber}-v2, 'UthmanicHafs', serif`,
                                  fontSize: `${fontSize}px`,
                                  lineHeight: `${fontSize * 1.8}px`,
                                }}
                                className="inline-flex items-center justify-center font-mushaf text-neutral-600 dark:text-neutral-400 select-none mx-0"
                              >
                                {word.code_v2 || `﴿${toArabicNumeral(word.verse_number)}﴾`}
                              </span>
                            );
                          }

                          return (
                            <span
                              key={word.id}
                              style={{
                                fontFamily: `p${pageNumber}-v2, 'UthmanicHafs', serif`,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${fontSize * 1.8}px`,
                              }}
                              className="font-mushaf text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors cursor-pointer mx-0"
                            >
                              {word.code_v2 || word.text_uthmani}
                            </span>
                          );
                        })}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Page Navigation Controls */}
          <div className="pt-6 mt-8 flex items-center justify-between">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs font-semibold hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Page
            </button>

            <span className="font-english text-xs font-bold text-neutral-600 dark:text-neutral-400 tracking-wider">
              ❖ Page {pageNumber} of 604 ❖
            </span>

            <button
              type="button"
              disabled={pageNumber >= 604}
              onClick={() => setPageNumber((p) => Math.min(604, p + 1))}
              className="px-4 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs font-semibold hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
            >
              Next Page <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MushafV2Page;

