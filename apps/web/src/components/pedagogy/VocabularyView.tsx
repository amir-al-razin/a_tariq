import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Eye } from 'lucide-react';
import * as m from '#/paraglide/messages.js';
import { useLanguageContent } from '../../hooks/useLanguageContent';

type VocabWord = {
    id: number;
    ar: string;
    romanized: string;
    en: string;
    bn?: string;
    emoji?: string;
};

const FALLBACK_WORDS: VocabWord[] = [
    { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
    { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
];

type Props = { payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const VocabularyView: React.FC<Props> = ({ payload, onProgress, onComplete }) => {
    const { t_content } = useLanguageContent();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [done, setDone] = useState(false);

    const words: VocabWord[] = payload?.words?.length ? payload.words : FALLBACK_WORDS;
    const word = words[currentIndex];
    const isLast = currentIndex === words.length - 1;
    const isFirst = currentIndex === 0;
    const total = words.length;
    const meaning = t_content(word.en, word.bn);

    useEffect(() => {
        if (done) {
            onProgress?.(1);
            return;
        }
        const steps = total * 2;
        const completed = currentIndex * 2 + (flipped ? 1 : 0);
        onProgress?.(Math.min(completed / steps, 0.99));
    }, [currentIndex, flipped, total, onProgress, done]);

    const handleCardPress = () => {
        if (done) return;
        if (!flipped) {
            setFlipped(true);
        } else {
            if (isLast) {
                setDone(true);
                onComplete?.();
            } else {
                setFlipped(false);
                setCurrentIndex((prev) => prev + 1);
            }
        }
    };

    const handlePrev = () => {
        if (isFirst && !flipped) return;
        if (flipped) {
            setFlipped(false);
        } else {
            setCurrentIndex((prev) => prev - 1);
            setFlipped(false);
            if (done) setDone(false);
        }
    };

    const handleNext = () => {
        if (done) return;
        if (!flipped) {
            setFlipped(true);
        } else if (!isLast) {
            setFlipped(false);
            setCurrentIndex((prev) => prev + 1);
        } else {
            setDone(true);
            onComplete?.();
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-english text-sm text-neutral-600 dark:text-neutral-400 mb-5">
                {done
                    ? m['vocabulary.allReviewed']()
                    : !flipped
                        ? m['vocabulary.tapCard']()
                        : isLast
                            ? m['vocabulary.tapToFinish']()
                            : m['vocabulary.tapForNext']()}
            </p>

            <button
                onClick={handleCardPress}
                disabled={done}
                className="w-full min-h-[200px] rounded-[20px] border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all active:scale-[0.98] outline-none"
            >
                {!flipped ? (
                    <div className="w-full h-full min-h-[200px] bg-primary-50 dark:bg-neutral-900 flex flex-col items-center justify-center p-6">
                        <span className="text-5xl mb-3">{word.emoji}</span>
                        <h2 className="font-arabic-semibold text-[44px] leading-tight text-primary-700 dark:text-primary-400 text-center">{word.ar}</h2>
                        <p className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-2">{word.romanized}</p>
                    </div>
                ) : (
                    <div className="w-full h-full min-h-[200px] bg-neutral-50 dark:bg-neutral-800 flex flex-col items-center justify-center p-6">
                        <h3 className="font-english-semibold text-[28px] leading-tight text-neutral-800 dark:text-neutral-100 text-center">{meaning}</h3>
                    </div>
                )}
            </button>

            <div className="flex flex-row mt-5 gap-1.5 flex-wrap justify-center">
                {words.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'w-5' : 'w-1.5'
                        } ${
                            i < currentIndex || done ? 'bg-primary-400' : i === currentIndex ? 'bg-primary-400' : 'bg-neutral-200 dark:bg-neutral-700'
                        }`}
                    />
                ))}
            </div>
            <p className="font-english text-[13px] text-neutral-400 dark:text-neutral-500 mt-2.5">
                {done ? `${total} / ${total}` : `${currentIndex + 1} / ${total}`}
            </p>

            <div className="flex flex-row gap-4 mt-5 w-full">
                <button
                    onClick={handlePrev}
                    disabled={isFirst && !flipped}
                    className={`flex-1 h-12 rounded-xl border-[1.5px] flex items-center justify-center gap-1.5 transition-all outline-none ${
                        (isFirst && !flipped)
                            ? 'border-neutral-200 dark:border-neutral-800 opacity-30 cursor-not-allowed'
                            : 'border-neutral-400 dark:border-neutral-600 active:bg-neutral-50 dark:active:bg-neutral-800'
                    }`}
                >
                    <ArrowLeft size={18} className="text-neutral-600 dark:text-neutral-300" />
                    <span className="font-english-medium text-sm text-neutral-600 dark:text-neutral-300">
                        {flipped ? m['vocabulary.flipBack']() : m['vocabulary.previous']()}
                    </span>
                </button>

                <button
                    onClick={handleNext}
                    disabled={done}
                    className={`flex-1 h-12 rounded-xl flex items-center justify-center gap-1.5 transition-all outline-none ${
                        done
                            ? 'bg-neutral-200 dark:bg-neutral-800 opacity-40 cursor-not-allowed'
                            : 'bg-primary-400 active:bg-primary-500'
                    }`}
                >
                    <span className={`font-english-semibold text-sm ${done ? 'text-neutral-500' : 'text-white'}`}>
                        {!flipped ? m['vocabulary.reveal']() : isLast ? m['vocabulary.finish']() : m['vocabulary.next']()}
                    </span>
                    {!flipped ? (
                        <Eye size={18} className={done ? 'text-neutral-500' : 'text-white'} />
                    ) : isLast ? (
                        <Check size={18} className={done ? 'text-neutral-500' : 'text-white'} />
                    ) : (
                        <ArrowRight size={18} className={done ? 'text-neutral-500' : 'text-white'} />
                    )}
                </button>
            </div>
        </div>
    );
};
