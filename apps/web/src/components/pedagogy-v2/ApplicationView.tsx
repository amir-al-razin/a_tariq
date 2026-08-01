import React from 'react';
import type{ApplicationItem} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import{cn} from '@/lib/utils';

interface Props{
 payload?: any;
 accent700?: string;
}

export const ApplicationView: React.FC<Props> = ({payload}) =>{
 const items: ApplicationItem[] = payload?.items || [];
 const instruction = payload?.instruction || (m['chunk.reviewThenContinue']?.() ?? 'Review these examples, then continue');

 const renderFormattedArabic = (text: string, isItems: boolean) =>{
 if (!text) return null;
 const parts = text.split(/(\*\*.*?\*\*)/g);
 return (
 <span
 className={cn(
"font-arabic-semibold text-neutral-900 dark:text-neutral-100 text-right tracking-wide",
 isItems ?"text-2xl leading-relaxed" :"text-3xl leading-loose whitespace-pre-wrap"
 )}
 dir="rtl"
 >
{parts.map((part, index) =>{
 if (part.startsWith('**') && part.endsWith('**')){
 return (
 <span key={index} className="underline decoration-neutral-400 dark:decoration-neutral-600 font-arabic-semibold text-neutral-950 dark:text-white">
{part.slice(2, -2)}
 </span>
 );
}
 return <span key={index}>{part}</span>;
})}
 </span>
 );
};

 if (items.length === 0 && (payload?.text || payload?.instruction)){
 return (
 <div className="w-full flex flex-col items-center space-y-6 p-6">
{payload?.instruction && (
 <div className="font-english text-sm tracking-wide text-neutral-500 dark:text-neutral-400 text-center">
{payload.instruction}
 </div>
 )}
{payload?.text && (
 <div className="w-full rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900 flex justify-center">
{renderFormattedArabic(payload.text, false)}
 </div>
 )}
 </div>
 );
}

 return (
 <div className="w-full flex flex-col items-center space-y-6">
 <div className="font-english text-sm tracking-wide text-neutral-500 dark:text-neutral-400 text-center px-4">
{instruction}
 </div>

 <div className="w-full flex flex-col space-y-4">
{items.map((item, i) => (
 <div
 key={i}
 className="flex flex-row w-full items-center gap-6 bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl transition-colors"
 >
 <div className="w-16 h-16 shrink-0 rounded-3xl bg-white dark:bg-[#161616] flex items-center justify-center text-3xl overflow-hidden">
{item.imageUrl ? (
 <img src={item.imageUrl} alt={item.en} className="w-10 h-10 object-contain" />
 ) : item.emoji ? (
 <span>{item.emoji}</span>
 ) : null}
 </div>
 <div className="flex-1 flex flex-col items-end sm:items-start text-right sm:text-left gap-2">
{renderFormattedArabic(item.ar, true)}
 <span className="font-english text-sm md:text-base text-neutral-600 dark:text-neutral-300">
{item.en}
 </span>
 </div>
 </div>
 ))}
 </div>

 <div className="font-english text-sm text-neutral-400 dark:text-neutral-500 text-center italic pt-2">
{m['chunk.reviewThenContinue']?.() ?? 'Review these examples, then continue'}
 </div>
 </div>
 );
};
