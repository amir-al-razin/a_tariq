import React,{useEffect} from 'react';
import type{MasdarRow} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

export interface MasdarPayload{
 masdarRows?: MasdarRow[];
 masdarColumnOverrides?:{
 imperativeAr?: string;
 imperativeEn?: string;
 prohibitiveAr?: string;
 prohibitiveEn?: string;
};
 baabLabel?: string;
 instruction?: string;
 instructionBn?: string;
}

interface Props{
 payload?: MasdarPayload;
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent400?: string;
 accent700?: string;
}

const getCols = (overrides?: MasdarPayload['masdarColumnOverrides']) => [
{key: 'past' as const, arLabel: 'مَاضٍ', labelKey: m['masdar.past']?.() ?? 'Past'},
{key: 'present' as const, arLabel: 'مُضَارِع', labelKey: m['masdar.present']?.() ?? 'Present'},
{key: 'imperative' as const, arLabel: overrides?.imperativeAr ?? 'أَمْر', labelKey: overrides?.imperativeEn ?? (m['masdar.command']?.() ?? 'Command')},
{key: 'prohibitive' as const, arLabel: overrides?.prohibitiveAr ?? 'نَهْي', labelKey: overrides?.prohibitiveEn ?? (m['masdar.prohibit']?.() ?? 'Prohibition')},
];

export const MasdarFactoryView: React.FC<Props> = ({payload, onProgress}) =>{
 const rows: MasdarRow[] = payload?.masdarRows ?? [];
 const COLS = getCols(payload?.masdarColumnOverrides);

 useEffect(() =>{
 onProgress?.(0);
}, [onProgress]);

 if (rows.length === 0){
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
{/* Optional Baab label - tone-on-tone pill */}
{payload?.baabLabel && (
 <div className="self-center rounded-full bg-neutral-200/80 dark:bg-neutral-900 px-6 py-2.5">
 <span className="font-arabic-semibold text-lg text-center text-neutral-950 dark:text-white block" dir="rtl">
{payload.baabLabel}
 </span>
 </div>
 )}

{/* Optional instruction */}
{payload?.instruction && (
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center italic block">
{payload.instruction}
 </span>
 )}

{/* Horizontally scrollable borderless grid table */}
 <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
 <div className="flex flex-col gap-3 min-w-max p-1">
{/* Column headers */}
 <div className="flex flex-row gap-3">
{/* Masdar header cell */}
 <div className="w-[130px] rounded-3xl bg-neutral-200/80 dark:bg-neutral-900 p-3.5 flex flex-col items-center justify-center shrink-0 space-y-1">
 <span className="font-arabic-semibold text-base text-neutral-950 dark:text-white">
 مَصْدَر
 </span>
 <span className="font-english text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
{m['masdar.verbalNoun']?.() ?? 'Verbal Noun'}
 </span>
 </div>

{/* Tense header cells */}
{COLS.map((col) => (
 <div
 key={col.key}
 className="flex-1 min-w-[110px] rounded-3xl bg-neutral-200/80 dark:bg-neutral-900 p-3.5 flex flex-col items-center justify-center shrink-0 space-y-1"
 >
 <span className="font-arabic-semibold text-base text-neutral-950 dark:text-white">
{col.arLabel}
 </span>
 <span className="font-english text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
{col.labelKey}
 </span>
 </div>
 ))}
 </div>

{/* Data rows */}
{rows.map((row, ri) => (
 <div key={ri} className="flex flex-row gap-3">
{/* Masdar cell */}
 <div className="w-[130px] p-4 rounded-3xl bg-neutral-200/50 dark:bg-neutral-900/60 flex flex-col items-center justify-center shrink-0 space-y-1.5">
 <span className="font-arabic-semibold text-xl text-center leading-relaxed text-neutral-950 dark:text-white" dir="rtl">
{row.masdar}
 </span>
 <span className="font-english text-xs text-neutral-500 dark:text-neutral-400 text-center leading-tight">
{row.masdarEn}
 </span>
 </div>

{/* Derived form cells */}
{COLS.map((col) => (
 <div
 key={col.key}
 className="flex-1 min-w-[110px] bg-white dark:bg-[#141414] rounded-3xl p-4 flex items-center justify-center shrink-0 transition-colors hover:bg-neutral-50 dark:hover:bg-[#181818]"
 >
 <span className="font-arabic-semibold text-xl text-neutral-900 dark:text-neutral-100 text-center leading-relaxed" dir="rtl">
{row[col.key]}
 </span>
 </div>
 ))}
 </div>
 ))}
 </div>
 </div>

{/* Legend */}
 <div className="flex flex-row flex-wrap gap-4 justify-center pt-2">
{COLS.map((col) => (
 <div key={col.key} className="flex flex-row items-center gap-2">
 <span className="font-arabic-semibold text-sm text-neutral-900 dark:text-neutral-100" dir="rtl">
{col.arLabel}
 </span>
 <span className="font-english text-xs text-neutral-400 dark:text-neutral-500">
 ={col.labelKey}
 </span>
 </div>
 ))}
 </div>
 </div>
 );
};
