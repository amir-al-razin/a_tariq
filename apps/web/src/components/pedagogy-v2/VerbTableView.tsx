import React,{useEffect} from 'react';
import type{VerbTableRow} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?:{
 verbTable?: VerbTableRow[];
 verbTense?: 'past' | 'present' | 'imperative';
 instruction?: string;
 sourceText?: string;
 text?: string;
 isPlural?: boolean;
 isDual?: boolean;
};
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent400?: string;
 accent700?: string;
}

const getTenseLabel = (tense: string) =>{
 switch (tense){
 case 'past':
 return{
 labelKey: m['verbTable.tense.past']?.() ?? 'Past Tense',
 ar: 'الْمَاضِي',
};
 case 'present':
 return{
 labelKey: m['verbTable.tense.present']?.() ?? 'Present Tense',
 ar: 'الْمُضَارِع',
};
 case 'imperative':
 return{
 labelKey: m['verbTable.tense.imperative']?.() ?? 'Command & Prohibition',
 ar: 'الْأَمْرُ وَالنَّهْيُ',
};
 default:
 return{
 labelKey: m['verbTable.tense.past']?.() ?? 'Past Tense',
 ar: 'الْمَاضِي',
};
}
};

const getColHeaders = (isPlural?: boolean, isDual?: boolean) =>{
 if (isDual){
 return [
{ar: 'هُمَا', labelKey: m['verbTable.pronoun.theyM']?.() ? m['verbTable.pronoun.theyM']() + ' (Dual)' : 'They (Dual, M)'},
{ar: 'هُمَا', labelKey: m['verbTable.pronoun.theyF']?.() ? m['verbTable.pronoun.theyF']() + ' (Dual)' : 'They (Dual, F)'},
{ar: 'أَنْتُمَا', labelKey: m['verbTable.pronoun.youM']?.() ? m['verbTable.pronoun.youM']() + ' (Dual)' : 'You (Dual, M)'},
{ar: 'أَنْتُمَا', labelKey: m['verbTable.pronoun.youF']?.() ? m['verbTable.pronoun.youF']() + ' (Dual)' : 'You (Dual, F)'},
{ar: 'نَحْنُ', labelKey: m['verbTable.pronoun.we']?.() ?? 'We'},
 ];
}
 if (isPlural){
 return [
{ar: 'هُمْ', labelKey: m['verbTable.pronoun.theyM']?.() ?? 'They (M)'},
{ar: 'هُنَّ', labelKey: m['verbTable.pronoun.theyF']?.() ?? 'They (F)'},
{ar: 'أَنْتُمْ', labelKey: m['verbTable.pronoun.youPluralM']?.() ?? 'You All (M)'},
{ar: 'أَنْتُنَّ', labelKey: m['verbTable.pronoun.youPluralF']?.() ?? 'You All (F)'},
{ar: 'نَحْنُ', labelKey: m['verbTable.pronoun.we']?.() ?? 'We'},
 ];
}
 return [
{ar: 'هُوَ', labelKey: m['verbTable.pronoun.he']?.() ?? 'He'},
{ar: 'هِيَ', labelKey: m['verbTable.pronoun.she']?.() ?? 'She'},
{ar: 'أَنْتَ', labelKey: m['verbTable.pronoun.youM']?.() ?? 'You (M)'},
{ar: 'أَنْتِ', labelKey: m['verbTable.pronoun.youF']?.() ?? 'You (F)'},
{ar: 'أَنَا', labelKey: m['verbTable.pronoun.i']?.() ?? 'I'},
 ];
};

export const VerbTableView: React.FC<Props> = ({payload, onProgress}) =>{
 const rows = payload?.verbTable ?? [];
 const tense = payload?.verbTense ?? 'past';
 const tenseLabel = getTenseLabel(tense);
 const isPlural = payload?.isPlural ?? false;
 const isDual = payload?.isDual ?? false;
 const COL_HEADERS = getColHeaders(isPlural, isDual);

 useEffect(() =>{
 onProgress?.(0);
}, [onProgress]);

 if (rows.length === 0){
 const fallbackText = payload?.sourceText || payload?.text || payload?.instruction;
 if (fallbackText){
 const lines = fallbackText.split('\n');
 return (
 <div className="w-full flex flex-col space-y-6">
{payload?.instruction && (
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <div className="font-english text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
{payload.instruction}
 </div>
 </div>
 )}

{payload?.verbTense && (
 <div className="flex flex-col items-center space-y-1">
 <span className="font-arabic-semibold text-2xl text-neutral-950 dark:text-white" dir="rtl">
{tenseLabel.ar}
 </span>
 <span className="font-english text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
{tenseLabel.labelKey}
 </span>
 </div>
 )}
 
 <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
 <div className="flex flex-col gap-3 min-w-max">
{lines.map((line, idx) =>{
 if (!line.trim()) return null;
 const parts = line.split('-').map(p => p.trim()).filter(Boolean);
 return (
 <div key={idx} className="flex flex-row justify-center gap-3" dir="rtl">
{parts.map((part, pIdx) => (
 <div 
 key={pIdx} 
 className="flex-1 flex items-center justify-center min-w-[95px] bg-neutral-100 dark:bg-neutral-900 rounded-3xl py-4 px-5"
 >
 <span className="font-arabic-semibold text-xl text-neutral-900 dark:text-neutral-100 text-center">
{part}
 </span>
 </div>
 ))}
 </div>
 );
})}
 </div>
 </div>
 </div>
 );
}
 return (
 <span className="text-neutral-400 dark:text-neutral-500 font-english text-center block p-8">
{m['verbTable.noData']?.() ?? 'No data available'}
 </span>
 );
}

 return (
 <div className="w-full flex flex-col space-y-6">
{/* Instruction block */}
{payload?.instruction && (
 <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-4">
 <div className="font-english text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
{payload.instruction}
 </div>
 </div>
 )}

{/* Tense title */}
 <div className="flex flex-col items-center space-y-1">
 <span
 className="font-arabic-semibold text-2xl text-neutral-950 dark:text-white leading-relaxed"
 dir="rtl"
 >
{tenseLabel.ar}
 </span>
 <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
{tenseLabel.labelKey}
 </span>
 </div>

{/* Borderless Tone-on-Tone Verb Table */}
 <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
 <div className="flex flex-col gap-3 min-w-max p-1">
{/* Column headers row */}
 <div className="flex flex-row gap-3">
{/* Root column header cell */}
 <div className="w-28 p-3 rounded-3xl bg-neutral-200/80 dark:bg-neutral-900 flex flex-col items-center justify-center shrink-0">
 <span className="font-english text-xs font-semibold uppercase text-neutral-700 dark:text-neutral-300">
{m['verbTable.root']?.() ?? 'Root'}
 </span>
 <span className="font-english text-[10px] text-neutral-500 dark:text-neutral-400">
{m['verbTable.meaning']?.() ?? 'Meaning'}
 </span>
 </div>
{COL_HEADERS.map((h, i) => (
 <div
 key={i}
 className="flex-1 min-w-[100px] p-3 rounded-3xl bg-neutral-200/80 dark:bg-neutral-900 flex flex-col items-center justify-center shrink-0 space-y-0.5"
 >
 <span
 className="font-arabic-semibold text-base text-neutral-950 dark:text-white"
 dir="rtl"
 >
{h.ar}
 </span>
 <span className="font-english text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
{h.labelKey}
 </span>
 </div>
 ))}
 </div>

{/* Table Rows */}
{rows.map((row, idx) => (
 <div
 key={idx}
 className="flex flex-row gap-3"
 >
{/* Root + meaning cell */}
 <div className="w-28 p-4 rounded-3xl bg-neutral-200/50 dark:bg-neutral-900/60 flex flex-col items-center justify-center shrink-0 space-y-1">
 <span
 className="font-arabic-semibold text-lg text-neutral-950 dark:text-white"
 dir="rtl"
 >
{row.root}
 </span>
 <span className="font-english text-[11px] text-neutral-500 dark:text-neutral-400 text-center leading-tight">
{row.meaning}
 </span>
 </div>
{(isDual || isPlural 
 ? [row.theyM, row.theyF, row.youPluralM, row.youPluralF, row.we] 
 : [row.he, row.she, row.youM, row.youF, row.i]
 ).map((form, i) => (
 <div
 key={i}
 className="flex-1 min-w-[100px] p-4 rounded-3xl bg-white dark:bg-[#141414] flex items-center justify-center shrink-0 transition-colors hover:bg-neutral-50 dark:hover:bg-[#181818]"
 >
 <span
 className="font-arabic-semibold text-lg text-neutral-900 dark:text-neutral-100 text-center leading-relaxed"
 dir="rtl"
 >
{form || '-'}
 </span>
 </div>
 ))}
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};
