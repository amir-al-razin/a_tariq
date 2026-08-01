import React,{useState, useCallback, useEffect} from 'react';
import type{IdafahPair} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?:{idafahPairs?: IdafahPair[]; instruction?: string; instructionBn?: string};
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent400?: string;
 accent700?: string;
}

export const IdafahView: React.FC<Props> = ({payload, onProgress, onComplete}) =>{
 const pairs = payload?.idafahPairs ?? [];
 const [revealed, setRevealed] = useState<boolean[]>(Array(pairs.length).fill(false));

 useEffect(() =>{
 onProgress?.(0);
 // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

 const revealAll = useCallback(() =>{
 setRevealed(Array(pairs.length).fill(true));
 onProgress?.(1);
 onComplete?.();
}, [pairs.length, onProgress, onComplete]);

 const toggle = useCallback(
 (i: number) =>{
 setRevealed((prev) =>{
 const next = [...prev];
 next[i] = !next[i];
 const doneCount = next.filter(Boolean).length;
 onProgress?.(doneCount / pairs.length);
 if (doneCount === pairs.length) onComplete?.();
 return next;
});
},
 [pairs.length, onProgress, onComplete]
 );

 if (pairs.length === 0){
 const fallbackText = payload?.instruction;
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
 return null;
}

 return (
 <div className="w-full flex flex-col space-y-6">
{payload?.instruction && (
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <div className="font-english text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
{payload.instruction}
 </div>
 </div>
 )}

{/* Header labels */}
 <div className="flex flex-row gap-4 px-2">
 <div className="flex-1 text-center">
 <span className="font-english text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
{m['idafah.basePhrase']?.() ?? 'Base Phrase'}
 </span>
 </div>
 <div className="flex-1 text-center">
 <span className="font-english text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
{m['idafah.possessionPhrase']?.() ?? 'Possession Phrase'}
 </span>
 </div>
 </div>

 <div className="flex flex-col space-y-4">
{pairs.map((pair, i) => (
 <button
 key={i}
 onClick={() => toggle(i)}
 className="w-full flex flex-col sm:flex-row items-stretch gap-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 text-left cursor-pointer transition-transform hover:scale-[1.005] active:scale-[0.995] outline-none"
 >
{/* Base Phrase Card */}
 <div className="flex-1 rounded-3xl bg-white dark:bg-[#141414] p-6 flex flex-col items-center justify-center space-y-2">
 <span
 className="font-arabic-semibold text-2xl text-center text-neutral-900 dark:text-neutral-100 leading-relaxed"
 dir="rtl"
 >
{pair.baseAr}
 </span>
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center">
{pair.baseEn}
 </span>
 </div>

{/* Possession Phrase Card — tap to reveal */}
 <div
 className={`flex-1 rounded-3xl p-6 flex flex-col items-center justify-center space-y-2 transition-colors ${
 revealed[i]
 ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
 : 'bg-neutral-200/70 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-900/80'
}`}
 >
{revealed[i] ? (
 <>
 <span
 className={`font-arabic-semibold text-2xl text-center leading-relaxed ${
 revealed[i] ? 'text-white dark:text-black' : 'text-neutral-900 dark:text-neutral-100'
}`}
 dir="rtl"
 >
{pair.expandedAr}
 </span>
 <span
 className={`font-english text-sm text-center ${
 revealed[i] ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'
}`}
 >
{pair.expandedEn}
 </span>
 </>
 ) : (
 <span className="font-english text-sm font-semibold tracking-wide text-neutral-600 dark:text-neutral-300 text-center">
{m['idafah.tapToReveal']?.() ?? 'Tap to reveal'}
 </span>
 )}
 </div>
 </button>
 ))}
 </div>

{/* Reveal all pill shortcut */}
{revealed.some((r) => !r) && (
 <button
 onClick={revealAll}
 className="self-center mt-2 px-8 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity cursor-pointer outline-none"
 >
 <span className="font-english text-sm font-semibold">
{m['idafah.revealAll']?.() ?? 'Reveal All'}
 </span>
 </button>
 )}
 </div>
 );
};

// Also export as IdafahDrillView for naming compatibility
export{IdafahView as IdafahDrillView};
