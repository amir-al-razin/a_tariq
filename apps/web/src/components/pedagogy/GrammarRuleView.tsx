import React,{useState, useEffect} from 'react';
import type{GrammarRule} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?: any;
 accent400?: string;
 accent700?: string;
}

export const GrammarRuleView: React.FC<Props> = ({payload, accent400 = '#34D3AA', accent700 = '#0D775F'}) =>{
 const rules: GrammarRule[] = payload?.rules || [];
 const [isDark, setIsDark] = useState(false);

 useEffect(() =>{
 const checkDark = () =>{
 setIsDark(document.documentElement.classList.contains('dark'));
};
 checkDark();
 const observer = new MutationObserver(checkDark);
 observer.observe(document.documentElement,{attributes: true});
 return () => observer.disconnect();
}, []);

 return (
 <div className="w-full">
 <div className="flex flex-row items-center mb-4 gap-3">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width="24"
 height="24"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 style={{color: accent400}}
 >
 <circle cx="12" cy="12" r="10" />
 <path d="M12 16v-4" />
 <path d="M12 8h.01" />
 </svg>
 <span className="font-english text-base font-semibold text-neutral-800 dark:text-neutral-100">
{m['chunk.grammarFocus']?.() ?? 'Grammar Focus'}
 </span>
 </div>

{rules.map((rule, i) =>{
 const isFirst = i === 0;
 const labelText = rule.labelBn ? rule.labelBn : rule.label.toUpperCase();

 return (
 <div
 key={i}
 className={`mb-4 p-4 rounded-3xl ${
 isFirst
 ? ''
 : 'bg-neutral-100 dark:bg-neutral-900/40 '
}`}
 style={isFirst ?{
 backgroundColor: isDark ?`${accent700}40`:`${accent400}22`,
 borderColor: isDark ? accent700 : accent400
} : undefined}
 >
 <div
 className={`font-english text-xs font-medium mb-2 tracking-wide ${
 isFirst
 ? ''
 : 'text-neutral-500 dark:text-neutral-400'
}`}
 style={isFirst ?{color: isDark ? accent400 : accent700} : undefined}
 >
{labelText}
 </div>

 <div className="flex flex-col items-center mb-3">
 <span
 className={`font-arabic-semibold text-3xl mb-1.5 ${
 isFirst
 ? ''
 : 'text-neutral-700 dark:text-neutral-300'
}`}
 dir="rtl"
 style={isFirst ?{color: isDark ? accent400 : accent700} : undefined}
 >
{rule.arabic}
 </span>
 <span className="font-english text-base font-semibold text-neutral-800 dark:text-neutral-100">
{rule.romanized}
 </span>
 <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 text-center">
{rule.meaning}
 </span>
 </div>

{rule.examples?.map((ex, j) => (
 <div
 key={j}
 className={`pt-2.5 ${
 j === 0 ? 'mt-0' : 'mt-2'
}`}
 >
 <div
 className={`font-arabic-semibold text-lg text-right ${
 isFirst
 ? ''
 : 'text-neutral-700 dark:text-neutral-300'
}`}
 dir="rtl"
 style={isFirst ?{color: isDark ? accent400 : accent700} : undefined}
 >
{ex.ar}
 </div>
 <div className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 text-right sm:text-left">
{ex.en}
 </div>
 </div>
 ))}
 </div>
 );
})}

 <div className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 italic">
{m['chunk.studyThenContinue']?.() ?? 'Review these rules, then continue'}
 </div>
 </div>
 );
};
