import React,{useEffect, useState} from 'react';
import type{ParagraphBlock} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?:{
 paragraphs?: ParagraphBlock[];
 instruction?: string;
 instructionBn?: string;
 text?: string;
};
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent400?: string;
 accent700?: string;
}

export const ParagraphView: React.FC<Props> = ({payload, onProgress}) =>{
 const blocks = payload?.paragraphs ?? [];
 const [revealed, setRevealed] = useState<Record<number, boolean>>({});

 useEffect(() =>{
 onProgress?.(0);
}, [onProgress]);

 if (blocks.length === 0){
 const fallbackText = payload?.text || payload?.instruction;
 if (!fallbackText) return null;
 return (
 <div className="w-full flex flex-col space-y-6">
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8">
 <p
 className="font-arabic-semibold text-2xl text-neutral-900 dark:text-neutral-100 text-right leading-loose m-0"
 dir="rtl"
 >
{fallbackText}
 </p>
 </div>
 </div>
 );
}

 return (
 <div className="w-full flex flex-col space-y-8">
{payload?.instruction && (
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <p className="font-english text-sm text-center text-neutral-600 dark:text-neutral-300 m-0">
{payload.instruction}
 </p>
 </div>
 )}

{blocks.map((block, bi) => (
 <div key={bi} className="flex flex-col rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 space-y-6">
{/* Block title */}
{block.title && (
 <div className="flex flex-col items-center space-y-1">
 <span className="font-arabic-semibold text-2xl md:text-3xl text-center text-neutral-950 dark:text-white leading-relaxed">
{block.title}
 </span>
{block.titleEn && (
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center">
{block.titleEn}
 </span>
 )}
 </div>
 )}

{/* Paragraph lines */}
 <div className="rounded-3xl bg-white dark:bg-[#141414] p-6 md:p-8 flex flex-col space-y-4">
{block.lines.map((line, li) => (
 <p
 key={li}
 className="font-arabic-semibold text-2xl text-neutral-900 dark:text-neutral-100 text-right leading-[2.4] m-0"
 dir="rtl"
 >
{line}
 </p>
 ))}
 </div>

{/* Reveal translation toggle pill */}
{block.translationEn && (
 <div className="flex flex-col space-y-4">
 <button
 onClick={() => setRevealed((prev) => ({...prev, [bi]: !prev[bi]}))}
 className="w-full rounded-full bg-neutral-200/80 hover:bg-neutral-200 dark:bg-neutral-900/80 dark:hover:bg-neutral-900 p-4 flex items-center justify-center cursor-pointer transition-colors outline-none"
 >
 <span className="font-english text-sm font-semibold text-neutral-900 dark:text-neutral-100">
{revealed[bi]
 ? m['paragraph.hideTranslation']?.() ?? 'Hide Translation'
 : m['paragraph.revealTranslation']?.() ?? 'Reveal Translation'}
 </span>
 </button>

{revealed[bi] && (
 <div className="w-full rounded-3xl bg-white/70 dark:bg-black/40 p-6 transition-all">
 <p className="font-english text-base text-neutral-700 dark:text-neutral-200 leading-relaxed m-0">
{block.translationEn}
 </p>
 </div>
 )}
 </div>
 )}
 </div>
 ))}
 </div>
 );
};
