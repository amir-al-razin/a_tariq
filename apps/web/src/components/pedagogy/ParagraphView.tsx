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

export const ParagraphView: React.FC<Props> = ({payload, onProgress, accent400 = '#34D3AA', accent700 = '#0D775F'}) =>{
 const blocks = payload?.paragraphs ?? [];
 const [revealed, setRevealed] = useState<Record<number, boolean>>({});

 useEffect(() =>{
 // Scroll-based completion handled by parent
 onProgress?.(0);
}, [onProgress]);

 if (blocks.length === 0){
 const fallbackText = payload?.text || payload?.instruction;
 if (!fallbackText) return null;
 return (
 <div className="w-full flex flex-col gap-4">
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <p
 className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8"
 dir="rtl"
 >
{fallbackText}
 </p>
 </div>
 </div>
 );
}

 return (
 <div className="w-full flex flex-col gap-6">
{payload?.instruction && (
 <div className="rounded-3xl p-3" style={{backgroundColor:`${accent400}22`}}>
 <p className="font-english text-sm text-center" style={{color: accent700}}>
{payload.instruction}
 </p>
 </div>
 )}

{blocks.map((block, bi) => (
 <div key={bi} className="flex flex-col gap-3">
{/* Block title */}
{block.title && (
 <div className="flex flex-col items-center gap-1">
 <span className="font-arabic-semibold text-2xl text-center" style={{color: accent700}}>
{block.title}
 </span>
{block.titleEn && (
 <span className="font-english text-sm text-neutral-600 dark:text-neutral-300 text-center">
{block.titleEn}
 </span>
 )}
 </div>
 )}

{/* Paragraph lines */}
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4 flex flex-col gap-3">
{block.lines.map((line, li) => (
 <p
 key={li}
 className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8 m-0"
 dir="rtl"
 >
{line}
 </p>
 ))}
 </div>

{/* Reveal translation button + English translation (hidden by default) */}
{block.translationEn && (
 <div className="flex flex-col gap-3">
 <button
 onClick={() => setRevealed((prev) => ({...prev, [bi]: !prev[bi]}))}
 className="w-full rounded-3xl p-4 flex items-center justify-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
 style={{
 borderColor: accent700,
 backgroundColor:`${accent400}22`
}}
 >
 <span className="font-english text-base font-semibold" style={{color: accent700}}>
{revealed[bi]
 ? m['paragraph.hideTranslation']?.() ?? 'Hide Translation'
 : m['paragraph.revealTranslation']?.() ?? 'Reveal Translation'}
 </span>
 </button>

{revealed[bi] && (
 <div className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <p className="font-english text-base text-neutral-700 dark:text-neutral-200 leading-7 m-0">
{block.translationEn}
 </p>
 </div>
 )}
 </div>
 )}

{/* Divider between blocks */}
{bi < blocks.length - 1 && (
 <div className="h-px bg-neutral-200 dark:bg-neutral-800 mt-1 w-full" />
 )}
 </div>
 ))}
 </div>
 );
};
