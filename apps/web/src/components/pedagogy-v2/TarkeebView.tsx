import React,{useEffect} from 'react';
import type{TarkeebItem, TarkeebNode} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?:{tarkeeb?: TarkeebItem[]; text?: string; instruction?: string};
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent700?: string;
}

const TreeNode: React.FC<{node: TarkeebNode; depth?: number}> = ({node, depth = 0}) =>{
 const isLeaf = !node.children || node.children.length === 0;

 return (
 <div className="flex flex-col items-center mx-3">
{/* Arabic text box - borderless tone-on-tone squircle */}
 <div className="rounded-3xl px-5 py-3.5 bg-white dark:bg-[#151515] min-w-[90px] flex items-center justify-center transition-colors">
 <span
 className="font-arabic-semibold text-xl text-neutral-950 dark:text-white text-center leading-relaxed"
 dir="rtl"
 >
{node.text}
 </span>
 </div>
{/* Grammatical labels */}
 <span className="font-english text-xs font-semibold text-neutral-600 dark:text-neutral-300 mt-2 text-center">
{node.label}
 </span>
 <span className="font-english text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 text-center mt-0.5">
{node.labelEn}
 </span>

{/* Branch lines + children */}
{!isLeaf && (
 <>
 <div className="w-[2px] h-6 bg-neutral-300 dark:bg-neutral-800 my-1 rounded-full" />
{node.children!.length === 1 ? (
 <TreeNode node={node.children![0]} depth={depth + 1} />
 ) : (
 <div className="flex flex-row items-start relative pt-2">
{/* Horizontal connecting line */}
 <div className="absolute left-[50%] right-[50%] h-[2px] bg-neutral-300 dark:bg-neutral-800 top-0 -translate-x-1/2 w-[calc(100%-48px)] rounded-full" />
{node.children!.map((child, i) => (
 <div key={i} className="flex flex-col items-center flex-1 relative">
{/* Vertical connector from branch */}
 <div className="w-[2px] h-4 bg-neutral-300 dark:bg-neutral-800 absolute -top-2 left-1/2 -translate-x-1/2 rounded-full" />
 <TreeNode node={child} depth={depth + 1} />
 </div>
 ))}
 </div>
 )}
 </>
 )}
 </div>
 );
};

export const TarkeebView: React.FC<Props> = ({payload, onProgress}) =>{
 const items = payload?.tarkeeb ?? [];

 useEffect(() =>{
 onProgress?.(0);
}, [onProgress]);

 if (items.length === 0){
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
 <span className="text-neutral-400 dark:text-neutral-500 font-english text-center block p-8">
{m['tarkeeb.noData']?.() ?? 'No data available'}
 </span>
 );
}

 return (
 <div className="w-full flex flex-col space-y-8">
{items.map((item, idx) => (
 <div
 key={idx}
 className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 flex flex-col items-center space-y-6"
 >
{/* Monochrome Type pill badge */}
 <div className="rounded-full bg-neutral-200/80 dark:bg-neutral-900 px-5 py-1.5">
 <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
{item.type === 'complete'
 ? m['tarkeeb.completeSentence']?.() ?? 'Complete Sentence'
 : m['tarkeeb.incompletePhrase']?.() ?? 'Incomplete Phrase'}
 </span>
 </div>

{/* Full sentence */}
 <div className="flex flex-col items-center space-y-1 max-w-xl text-center">
 <span
 className="font-arabic-semibold text-3xl md:text-4xl text-neutral-950 dark:text-white leading-relaxed"
 dir="rtl"
 >
{item.sentence}
 </span>
 <span className="font-english text-base text-neutral-500 dark:text-neutral-400">
{item.sentenceEn}
 </span>
 </div>

{/* Tree diagram container */}
 <div className="w-full overflow-x-auto overflow-y-hidden pt-4 pb-2 scrollbar-hide">
 <div className="flex flex-row items-start justify-center gap-6 min-h-[100px] min-w-max px-4">
{item.tree.map((node, i) => (
 <TreeNode key={i} node={node} />
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 );
};
