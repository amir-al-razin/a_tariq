import React,{useState, useEffect, useCallback} from 'react';
import{ArrowLeft, ArrowRight, Check, Eye} from 'lucide-react';
import * as m from '#/paraglide/messages.js';
import{cn} from '@/lib/utils';

type VocabWord ={
 id: number;
 ar: string;
 romanized: string;
 en: string;
 bn?: string;
 emoji?: string;
 imageUrl?: string;
};

const FALLBACK_WORDS: VocabWord[] = [
{id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖'},
{id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️'},
];

type Props ={payload?: any; onProgress?: (v: number) => void; onComplete?: () => void; accent400?: string; accent700?: string};

export const VocabularyView: React.FC<Props> = ({payload, onProgress, onComplete}) =>{
 const [currentIndex, setCurrentIndex] = useState(0);
 const [flipped, setFlipped] = useState(false);
 const [done, setDone] = useState(false);

 const words: VocabWord[] = payload?.words?.length ? payload.words : FALLBACK_WORDS;
 const word = words[currentIndex];
 const isLast = currentIndex === words.length - 1;
 const isFirst = currentIndex === 0;
 const total = words.length;
 const meaning = word ? word.en : '';

 useEffect(() =>{
 if (done){
 onProgress?.(1);
 return;
}
 const steps = total * 2;
 const completed = currentIndex * 2 + (flipped ? 1 : 0);
 onProgress?.(Math.min(completed / steps, 0.99));
}, [currentIndex, flipped, total, onProgress, done]);

 const handleCardPress = () =>{
 if (done) return;
 if (!flipped){
 setFlipped(true);
} else{
 if (isLast){
 setDone(true);
 onComplete?.();
} else{
 setFlipped(false);
 setCurrentIndex((prev) => prev + 1);
}
}
};

 const handlePrev = useCallback(() =>{
 if (isFirst && !flipped) return;
 if (flipped){
 setFlipped(false);
} else{
 setCurrentIndex((prev) => prev - 1);
 setFlipped(false);
 if (done) setDone(false);
}
}, [isFirst, flipped, done]);

 const handleNext = useCallback(() =>{
 if (done) return;
 if (!flipped){
 setFlipped(true);
} else if (!isLast){
 setFlipped(false);
 setCurrentIndex((prev) => prev + 1);
} else{
 setDone(true);
 onComplete?.();
}
}, [done, flipped, isLast, onComplete]);

 useEffect(() =>{
 const handleKeyDown = (e: KeyboardEvent) =>{
 if (e.key === 'ArrowRight'){
 handleNext();
} else if (e.key === 'ArrowLeft'){
 handlePrev();
}
};

 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
}, [handleNext, handlePrev]);

 return (
 <div className="w-full flex flex-col items-center space-y-6">
 <p className="font-english text-sm tracking-wide text-neutral-500 dark:text-neutral-400 text-center m-0">
{done
 ? m['vocabulary.allReviewed']()
 : !flipped
 ? m['vocabulary.tapCard']()
 : isLast
 ? m['vocabulary.tapToFinish']()
 : m['vocabulary.tapForNext']()}
 </p>

{/* Borderless Tone-on-Tone Flashcard Squircle */}
 <button
 onClick={handleCardPress}
 disabled={done}
 className="w-full max-w-lg min-h-[280px] rounded-3xl overflow-hidden transition-all duration-300 active:scale-[0.98] outline-none cursor-pointer"
 >
{!flipped ? (
 <div className="w-full h-full min-h-[280px] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center p-8 space-y-4">
 <div className="w-20 h-20 rounded-3xl bg-white dark:bg-[#161616] flex items-center justify-center mb-2 overflow-hidden">
{word.imageUrl ? (
 <img src={word.imageUrl} alt={word.en} className="w-14 h-14 object-contain" />
 ) : word.emoji ? (
 <span className="text-5xl">{word.emoji}</span>
 ) : null}
 </div>
 <h2 className="font-arabic-semibold text-5xl md:text-6xl text-neutral-950 dark:text-white leading-relaxed text-center" dir="rtl">
{word.ar}
 </h2>
 <p className="font-english text-base text-neutral-500 dark:text-neutral-400 m-0 tracking-wide">
{word.romanized}
 </p>
 </div>
 ) : (
 <div className="w-full h-full min-h-[280px] bg-neutral-200/80 dark:bg-neutral-900 flex flex-col items-center justify-center p-8">
 <h3 className="font-english-semibold text-3xl md:text-4xl leading-relaxed text-neutral-900 dark:text-neutral-100 text-center">
{meaning}
 </h3>
 </div>
 )}
 </button>

{/* Tone-on-Tone Progress Dots */}
 <div className="flex flex-row items-center gap-2 flex-wrap justify-center pt-2">
{words.map((_, i) => (
  <div
  key={i}
  className={cn(
 "h-1.5 rounded-full transition-all duration-300",
  i === currentIndex ?"w-6 bg-accent-primary" : i < currentIndex || done ?"w-2 bg-accent-secondary" :"w-1.5 bg-neutral-200 dark:bg-neutral-800"
  )}
  />
  ))}
  </div>
  <p className="font-english text-xs tracking-wider text-neutral-400 dark:text-neutral-500 m-0">
{done ?`${total} / ${total}`:`${currentIndex + 1} / ${total}`}
  </p>

{/* High-Contrast Pill Buttons */}
  <div className="flex flex-row gap-4 w-full max-w-lg pt-2">
  <button
  onClick={handlePrev}
  disabled={isFirst && !flipped}
  className={cn(
 "flex-1 h-14 rounded-full flex items-center justify-center gap-2 transition-all outline-none font-english-medium text-sm",
  isFirst && !flipped
  ?"bg-neutral-100 dark:bg-neutral-900 text-neutral-300 dark:text-neutral-700 cursor-not-allowed opacity-40"
  :"bg-neutral-200 hover:bg-neutral-300/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 cursor-pointer active:scale-95"
  )}
  >
  <ArrowLeft size={18} />
  <span>{flipped ? m['vocabulary.flipBack']() : m['vocabulary.previous']()}</span>
  </button>

  <button
  onClick={handleNext}
  disabled={done}
  className={cn(
 "flex-1 h-14 rounded-full flex items-center justify-center gap-2 transition-all outline-none font-english-semibold text-sm",
  done
  ?"bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600 cursor-not-allowed opacity-40"
  :"bg-accent-primary hover:bg-accent-primary-hover text-white cursor-pointer active:scale-95"
  )}
  >
 <span>
{!flipped ? m['vocabulary.reveal']() : isLast ? m['vocabulary.finish']() : m['vocabulary.next']()}
 </span>
{!flipped ? (
 <Eye size={18} />
 ) : isLast ? (
 <Check size={18} />
 ) : (
 <ArrowRight size={18} />
 )}
 </button>
 </div>
 </div>
 );
};
