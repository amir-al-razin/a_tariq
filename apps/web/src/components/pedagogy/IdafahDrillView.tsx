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

export const IdafahDrillView: React.FC<Props> = ({payload, onProgress, onComplete, accent400 = '#34D3AA', accent700 = '#0D775F'}) =>{
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
 <div className="w-full py-2">
 <span
 className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8"
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
 <div className="w-full flex flex-col gap-3">
{payload?.instruction && (
 <div className="rounded-lg p-2.5 mb-1" style={{backgroundColor:`${accent400}22`}}>
 <div className="font-english text-xs text-center" style={{color: accent700}}>
{payload.instruction}
 </div>
 </div>
 )}

{/* Header row */}
 <div className="flex flex-row gap-2">
 <div className="flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-2 flex items-center justify-center">
 <span className="font-english text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
{m['idafah.basePhrase']?.() ?? 'Base Phrase'}
 </span>
 </div>
 <div className="flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-2 flex items-center justify-center">
 <span className="font-english text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
{m['idafah.possessionPhrase']?.() ?? 'Possession Phrase'}
 </span>
 </div>
 </div>

{pairs.map((pair, i) => (
 <button
 key={i}
 onClick={() => toggle(i)}
 className="w-full flex flex-row gap-2 text-left cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
 >
{/* Base */}
 <div className="flex-1 rounded-3xl bg-white dark:bg-neutral-900 p-3 flex flex-col items-center justify-center gap-1">
 <span
 className="font-arabic-semibold text-base text-center"
 style={{color: accent700}}
 dir="rtl"
 >
{pair.baseAr}
 </span>
 <span className="font-english text-[11px] text-neutral-500 dark:text-neutral-400 text-center">
{pair.baseEn}
 </span>
 </div>
{/* Expanded - tap to reveal */}
 <div
 className={`flex-1 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-colors ${
 revealed[i]
 ? ''
 : ' bg-neutral-100 dark:bg-neutral-800'
}`}
 style={revealed[i] ?{
 borderColor: accent700,
 backgroundColor:`${accent400}22`
} : undefined}
 >
{revealed[i] ? (
 <>
 <span
 className="font-arabic-semibold text-base text-center"
 style={{color: accent700}}
 dir="rtl"
 >
{pair.expandedAr}
 </span>
 <span className="font-english text-[11px] text-neutral-500 dark:text-neutral-400 text-center">
{pair.expandedEn}
 </span>
 </>
 ) : (
 <span className="font-english text-xs text-neutral-500 dark:text-neutral-400 text-center">
{m['idafah.tapToReveal']?.() ?? 'Tap to reveal'}
 </span>
 )}
 </div>
 </button>
 ))}

{/* Reveal all shortcut */}
{revealed.some((r) => !r) && (
 <button
 onClick={revealAll}
 className="self-center mt-1 px-4 py-2 rounded-full bg-transparent cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
 >
 <span className="font-english text-xs text-neutral-500 dark:text-neutral-400">
{m['idafah.revealAll']?.() ?? 'Reveal All'}
 </span>
 </button>
 )}
 </div>
 );
};
