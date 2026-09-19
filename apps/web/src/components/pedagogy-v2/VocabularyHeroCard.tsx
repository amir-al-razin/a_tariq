import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { audioService } from '@/lib/audioService';
import { cn } from '@/lib/utils';
import type { VocabWord } from '@tariq/shared';

export interface VocabularyHeroCardProps {
  words: VocabWord[];
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

const DEFAULT_SAMPLE_WORDS: VocabWord[] = [
  {
    id: 1,
    ar: 'كِتَابٌ',
    romanized: 'kitābun',
    en: 'A book',
    bn: 'একটি বই',
    emoji: '📖',
    gender: 'masculine',
    category: 'noun',
  },
  {
    id: 2,
    ar: 'قَلَمٌ',
    romanized: 'qalamun',
    en: 'A pen',
    bn: 'একটি কলম',
    emoji: '🖊️',
    gender: 'masculine',
    category: 'noun',
  },
  {
    id: 3,
    ar: 'مَدْرَسَةٌ',
    romanized: 'madrasatun',
    en: 'A school',
    bn: 'একটি বিদ্যালয়',
    emoji: '🏫',
    gender: 'feminine',
    category: 'noun',
  },
  {
    id: 4,
    ar: 'بَابٌ',
    romanized: 'bābun',
    en: 'A door',
    bn: 'একটি দরজা',
    emoji: '🚪',
    gender: 'masculine',
    category: 'noun',
  },
];

export const VocabularyHeroCard: React.FC<VocabularyHeroCardProps> = ({
  words = DEFAULT_SAMPLE_WORDS,
  onComplete,
  onProgress,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const total = words.length;
  const currentWord = words[currentIndex] || DEFAULT_SAMPLE_WORDS[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  // Track progress
  useEffect(() => {
    if (isCompleted) {
      onProgress?.(1);
    } else {
      const p = Math.min((currentIndex + 1) / total, 0.99);
      onProgress?.(p);
    }
  }, [currentIndex, total, isCompleted, onProgress]);

  const playWordAudio = useCallback(() => {
    setIsPlayingAudio(true);
    audioService.speakArabic(currentWord.ar, true);
    setTimeout(() => setIsPlayingAudio(false), 900);
  }, [currentWord.ar]);

  const handleNext = useCallback(() => {
    if (isLast) {
      setIsCompleted(true);
      onComplete?.();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLast, onComplete]);

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      setIsCompleted(false);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isFirst]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        playWordAudio();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, playWordAudio]);

  const getGenderBadge = (gender?: string) => {
    if (gender === 'feminine') return { ar: 'مُؤَنَّث', en: 'Feminine' };
    return { ar: 'مُذَكَّر', en: 'Masculine' };
  };

  const getCategoryBadge = (category?: string) => {
    if (category === 'verb') return { ar: 'فِعْل', en: 'Verb' };
    if (category === 'particle') return { ar: 'حَرْف', en: 'Particle' };
    return { ar: 'اِسْم', en: 'Noun' };
  };

  const genderInfo = getGenderBadge(currentWord.gender);
  const categoryInfo = getCategoryBadge(currentWord.category);

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      {/* Phone-like Squircle Viewport Card (good.png Inspired) */}
      <div className="bg-[#fcfbf9] dark:bg-neutral-950 rounded-[36px] p-6 sm:p-7 flex flex-col justify-between min-h-[600px] border-none shadow-none transition-all">
        
        {/* Top Floating App Bar */}
        <div className="flex items-center justify-between w-full mb-6">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            aria-label="Previous Word"
            className={cn(
              'w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer outline-none',
              isFirst
                ? 'opacity-20 cursor-not-allowed bg-neutral-200/50 dark:bg-neutral-900 text-neutral-400'
                : 'bg-neutral-200/70 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 active:scale-95'
            )}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex flex-col items-center">
            <span className="text-xs font-english-medium tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
              Single Word Focus
            </span>
            <span className="text-sm font-arabic-medium text-neutral-700 dark:text-neutral-300" dir="rtl">
              كَلِمَةُ الدَّرْسِ ({currentIndex + 1}/{total})
            </span>
          </div>

          <button
            onClick={playWordAudio}
            aria-label="Listen Pronunciation"
            className={cn(
              'w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer outline-none',
              isPlayingAudio
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 scale-105'
                : 'bg-neutral-200/70 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 active:scale-95'
            )}
          >
            <Volume2 size={18} />
          </button>
        </div>

        {/* Hero Visual Area (Generous Squircle Display) */}
        <div className="relative w-full aspect-[4/3] rounded-[28px] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden mb-6 group">
          {currentWord.imageUrl ? (
            <img
              src={currentWord.imageUrl}
              alt={currentWord.en}
              className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="text-8xl select-none transform transition-transform duration-300 group-hover:scale-110">
              {currentWord.emoji || '📖'}
            </span>
          )}

          {/* Audio Tap Trigger inside Hero */}
          <button
            onClick={playWordAudio}
            className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-700 transition-all cursor-pointer"
            title="Pronounce Word"
          >
            <Volume2 size={16} />
          </button>
        </div>

        {/* Focal Word Typography */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex items-center justify-center gap-2">
            <h2
              className="font-arabic text-5xl sm:text-6xl font-bold text-neutral-950 dark:text-white leading-tight cursor-pointer hover:opacity-90 active:scale-[0.99] transition-all select-none"
              dir="rtl"
              onClick={playWordAudio}
            >
              {currentWord.ar}
            </h2>
          </div>

          <p className="font-mono text-sm tracking-wider text-neutral-400 dark:text-neutral-500">
            {currentWord.romanized}
          </p>

          <div className="pt-1">
            <p className="font-english-semibold text-2xl text-neutral-900 dark:text-neutral-100 m-0">
              {currentWord.en}
            </p>
            {currentWord.bn && (
              <p className="text-sm font-bengali text-neutral-500 dark:text-neutral-400 mt-0.5">
                {currentWord.bn}
              </p>
            )}
          </div>
        </div>

        {/* Morphological & Grammatical Spec Grid (Inspired by good.png attribute cards) */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-english text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Part of Speech
            </span>
            <span className="font-arabic-semibold text-base text-neutral-900 dark:text-neutral-100 mt-0.5" dir="rtl">
              {categoryInfo.ar}
            </span>
            <span className="text-[11px] font-english text-neutral-500 dark:text-neutral-400">
              {categoryInfo.en}
            </span>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-english text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Gender
            </span>
            <span className="font-arabic-semibold text-base text-neutral-900 dark:text-neutral-100 mt-0.5" dir="rtl">
              {genderInfo.ar}
            </span>
            <span className="text-[11px] font-english text-neutral-500 dark:text-neutral-400">
              {genderInfo.en}
            </span>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-english text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Number
            </span>
            <span className="font-arabic-semibold text-base text-neutral-900 dark:text-neutral-100 mt-0.5" dir="rtl">
              مُفْرَد
            </span>
            <span className="text-[11px] font-english text-neutral-500 dark:text-neutral-400">
              Singular
            </span>
          </div>
        </div>

        {/* Discrete Dot Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-5">
          {words.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                i === currentIndex
                  ? 'w-7 bg-accent-primary'
                  : i < currentIndex || isCompleted
                  ? 'w-2 bg-accent-secondary'
                  : 'w-1.5 bg-neutral-200 dark:bg-neutral-800'
              )}
              aria-label={`Go to word ${i + 1}`}
            />
          ))}
        </div>

        {/* Full-Width Pill Action Button (good.png Signature Pill CTA) */}
        <div>
          <button
            onClick={handleNext}
            className="w-full h-14 rounded-full bg-accent-primary text-white hover:bg-accent-primary-hover font-english-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer outline-none shadow-none"
          >
            {isLast ? (
              <>
                <span>أَتْمَمْتُ (Complete Drill)</span>
                <Check size={18} />
              </>
            ) : (
              <>
                <span>كَلِمَةٌ تَالِيَةٌ (Next Word)</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
