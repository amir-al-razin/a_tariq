import React,{useState, useEffect, useCallback} from 'react';
import type{QAItem} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import{cn} from '@/lib/utils';

interface Props{
 payload?: any;
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent400?: string;
}

export const QAndAView: React.FC<Props> = ({payload, onProgress, onComplete}) =>{
 const questions: QAItem[] = payload?.questions || [];
 const instruction: string = payload?.instruction || '';
 const [currentIndex, setCurrentIndex] = useState(0);
 const [selected, setSelected] = useState<string | null>(null);
 const [revealed, setRevealed] = useState(false);

 if (questions.length === 0){
 const fallbackText = payload?.text || payload?.instruction;
 if (fallbackText){
 return (
 <div className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8">
 <span
 className="font-arabic-semibold text-2xl text-neutral-900 dark:text-neutral-100 text-right leading-loose block"
 dir="rtl"
 >
{fallbackText}
 </span>
 </div>
 );
}
 return (
 <span className="text-neutral-500 dark:text-neutral-400 font-english text-center block p-8">
{m['qanda.noQuestions']?.() ?? 'No questions available'}
 </span>
 );
}

 const q = questions[currentIndex];
 const isCorrect = selected === q.correct_ar;
 const isLastQ = currentIndex === questions.length - 1;

 const handleSelect = (opt: string) =>{
 if (revealed) return;
 setSelected(opt);
 setRevealed(true);
 const newProgress = (currentIndex + 1) / questions.length;
 onProgress?.(newProgress);
 if (isLastQ){
 onComplete?.();
}
};

 const handleNext = useCallback(() =>{
 setSelected(null);
 setRevealed(false);
 setCurrentIndex((prev) => prev + 1);
}, []);

 useEffect(() =>{
 const handleKeyDown = (e: KeyboardEvent) =>{
 if (e.code === 'Space' && revealed && !isLastQ){
 e.preventDefault();
 handleNext();
}
};
 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
}, [revealed, isLastQ, handleNext]);

 return (
 <div className="w-full flex flex-col items-center space-y-6">
{instruction ? (
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center italic">
{instruction}
 </span>
 ) : null}

{/* Tone-on-Tone Progress dots */}
 <div className="flex flex-row gap-2 flex-wrap justify-center">
{questions.map((_, i) => (
 <div
 key={i}
 className={cn(
"h-1.5 rounded-full transition-all duration-300",
 i === currentIndex ?"w-6 bg-accent-primary" : i < currentIndex ?"w-2 bg-accent-secondary" :"w-1.5 bg-neutral-200 dark:bg-neutral-800"
 )}
 />
 ))}
 </div>

{/* Emoji / Image container */}
 <div className="w-28 h-28 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden p-4">
{q.imageUrl ? (
 <img src={q.imageUrl} alt={q.question_en} className="w-20 h-20 object-contain" />
 ) : q.emoji ? (
 <span className="text-6xl">{q.emoji}</span>
 ) : null}
 </div>

 <div className="flex flex-col items-center space-y-2 text-center max-w-lg">
 <span
 className="font-arabic-semibold text-3xl md:text-4xl text-neutral-950 dark:text-white leading-relaxed"
 dir="rtl"
 >
{q.question_ar}
 </span>
 <span className="font-english text-base text-neutral-500 dark:text-neutral-400">
{q.question_en}
 </span>
 </div>

{/* Option pills / squircles */}
 <div className="w-full flex flex-col space-y-3.5 max-w-xl">
{q.options_ar.map((opt) =>{
 const isChosen = selected === opt;
 const isThisCorrect = opt === q.correct_ar;

 let cardClasses = 'bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100';

 if (revealed){
 if (isThisCorrect){
 cardClasses = 'bg-accent-primary text-white font-semibold';
} else if (isChosen && !isCorrect){
 cardClasses = 'bg-neutral-200/60 dark:bg-neutral-900/60 text-neutral-400 dark:text-neutral-500 opacity-60 line-through';
} else{
 cardClasses = 'bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-400 dark:text-neutral-600 opacity-40';
}
}

 return (
 <button
 key={opt}
 onClick={() => handleSelect(opt)}
 disabled={revealed}
 className={cn(
"p-6 rounded-3xl flex items-center justify-center transition-all cursor-pointer outline-none",
 cardClasses
 )}
 >
 <span className="font-arabic-semibold text-2xl leading-relaxed text-center" dir="rtl">
{opt}
 </span>
 </button>
 );
})}
 </div>

{/* Explanation / Answer Review Block (Borderless Tone-on-Tone) */}
{revealed && (
 <div className="mt-4 p-8 rounded-3xl w-full max-w-xl bg-neutral-100 dark:bg-neutral-900 flex flex-col space-y-3">
 <div className="font-english text-sm font-semibold uppercase tracking-wider text-accent-primary dark:text-accent-primary-text">
{isCorrect
 ? m['qanda.correct']?.() ?? 'Correct'
 : m['qanda.notQuite']?.() ?? 'Not quite'}
 </div>
 <div
 className="font-arabic-semibold text-2xl text-neutral-950 dark:text-white leading-relaxed"
 dir="rtl"
 >
{q.correct_ar}
 </div>
 <div className="font-english text-base text-neutral-600 dark:text-neutral-300">
{q.correct_en}
 </div>
{q.explanation && (
 <div className="mt-4 pt-4 -transparent bg-white/60 dark:bg-black/40 p-4 rounded-3xl font-english text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
 <span className="font-semibold text-neutral-900 dark:text-neutral-100 mr-1.5">
 💡{m['qanda.hint']?.() ?? 'Hint:'}
 </span>
{q.explanation}
 </div>
 )}
 </div>
 )}

{/* Next button pill */}
{revealed && !isLastQ && (
 <button
 onClick={handleNext}
 className="mt-6 px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white transition-all active:scale-95 flex items-center justify-center w-full max-w-xl cursor-pointer outline-none font-english text-base font-semibold"
 >
 <span>
{m['qanda.nextQuestion']?.() ?? 'Next Question'}
 </span>
 </button>
 )}
 </div>
 );
};
