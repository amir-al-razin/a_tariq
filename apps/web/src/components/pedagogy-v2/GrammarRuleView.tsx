import React from 'react';
import type{GrammarRule} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?: any;
 accent400?: string;
 accent700?: string;
}

export const GrammarRuleView: React.FC<Props> = ({payload}) =>{
 const rules: GrammarRule[] = payload?.rules || [];

 return (
 <div className="w-full flex flex-col space-y-6">
 <div className="flex items-center gap-3 px-2">
 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
 i
 </div>
 <span className="font-english text-base font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">
{m['chunk.grammarFocus']?.() ?? 'Grammar Focus'}
 </span>
 </div>

 <div className="flex flex-col space-y-6">
{rules.map((rule, i) =>{
 const isFirst = i === 0;
 const labelText = rule.labelBn ? rule.labelBn : rule.label.toUpperCase();

 return (
 <div
 key={i}
 className={`flex flex-col rounded-3xl p-8 transition-colors ${
 isFirst
 ? 'bg-neutral-200/70 dark:bg-neutral-900'
 : 'bg-neutral-100 dark:bg-neutral-900'
}`}
 >
 <div className="font-english text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-4">
{labelText}
 </div>

 <div className="flex flex-col items-center justify-center py-4 space-y-2 bg-white/60 dark:bg-black/40 rounded-3xl p-6">
 <span
 className="font-arabic-semibold text-3xl md:text-4xl text-neutral-950 dark:text-white leading-relaxed text-center"
 dir="rtl"
 >
{rule.arabic}
 </span>
 <span className="font-english text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center">
{rule.romanized}
 </span>
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center">
{rule.meaning}
 </span>
 </div>

{rule.examples && rule.examples.length > 0 && (
 <div className="flex flex-col mt-6 space-y-4">
{rule.examples.map((ex, j) => (
 <div
 key={j}
 className="flex flex-col items-end sm:items-start rounded-3xl bg-white/40 dark:bg-[#141414]/60 p-5 space-y-1.5"
 >
 <div
 className="font-arabic-semibold text-xl text-right text-neutral-900 dark:text-neutral-100 w-full"
 dir="rtl"
 >
{ex.ar}
 </div>
 <div className="font-english text-sm text-neutral-600 dark:text-neutral-300 text-right sm:text-left w-full">
{ex.en}
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 );
})}
 </div>

 <div className="font-english text-sm text-neutral-400 dark:text-neutral-500 text-center italic pt-2">
{m['chunk.studyThenContinue']?.() ?? 'Review these rules, then continue'}
 </div>
 </div>
 );
};
