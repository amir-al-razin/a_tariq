import React,{useEffect} from 'react';
import type{TarkeebItem, TarkeebNode} from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props{
 payload?:{tarkeeb?: TarkeebItem[]; text?: string; instruction?: string};
 onProgress?: (v: number) => void;
 onComplete?: () => void;
 accent700?: string;
}

const TreeNode: React.FC<{node: TarkeebNode; depth?: number; accent700?: string}> = ({node, depth = 0, accent700 = '#0D775F'}) =>{
 const isLeaf = !node.children || node.children.length === 0;

 return (
 <div className="flex flex-col items-center mx-2">
{/* Arabic text box */}
 <div className="rounded-lg px-3 py-2 bg-white dark:bg-neutral-900 min-w-[80px] flex items-center justify-center" style={{borderColor: accent700}}>
 <span
 className="font-arabic-semibold text-lg text-neutral-900 dark:text-neutral-100 text-center leading-6"
 dir="rtl"
 >
{node.text}
 </span>
 </div>
{/* Grammatical label */}
 <span className="font-english text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 text-center">
{node.label}
 </span>
 <span className="font-english text-[9px] text-neutral-400 dark:text-neutral-500 text-center">
{node.labelEn}
 </span>

{/* Branch line + children */}
{!isLeaf && (
 <>
 <div className="w-[1.5px] h-5 bg-neutral-300 dark:bg-neutral-600" />
{node.children!.length === 1 ? (
 // Single child - just connect directly
 <TreeNode node={node.children![0]} depth={depth + 1} />
 ) : (
 // Multiple children - create horizontal branch
 <div className="flex flex-row items-start relative">
{/* Horizontal connecting line */}
 <div className="absolute left-0 right-0 h-[1.5px] bg-neutral-300 dark:bg-neutral-600 top-0" />
{node.children!.map((child, i) => (
 <div key={i} className="flex flex-col items-center flex-1">
{/* Vertical line from horizontal branch to child */}
 <div className="w-[1.5px] h-3 bg-neutral-300 dark:bg-neutral-600 -mt-[1.5px]" />
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

export const TarkeebView: React.FC<Props> = ({payload, onProgress, accent700 = '#0D775F'}) =>{
 const items = payload?.tarkeeb ?? [];

 useEffect(() =>{
 // Scroll-based completion is handled by parent
 onProgress?.(0);
}, [onProgress]);

 if (items.length === 0){
 const fallbackText = payload?.text || payload?.instruction;
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
 return (
 <span className="text-neutral-500 dark:text-neutral-400">
{m['tarkeeb.noData']?.() ?? 'No data available'}
 </span>
 );
}

 return (
 <div className="w-full flex flex-col gap-7">
{items.map((item, idx) => (
 <div
 key={idx}
 className="rounded-3xl p-4 bg-white dark:bg-neutral-950 flex flex-col items-center"
 >
{/* Type badge */}
 <div
 className="self-start rounded-md px-2 py-1 mb-2.5"
 style={{
 backgroundColor: item.type === 'complete' ? '#D1FAF0' : '#F5F0E8',
 color: accent700
}}
 >
 <span className="font-english text-[10px] font-semibold">
{item.type === 'complete'
 ? m['tarkeeb.completeSentence']?.() ?? 'Complete Sentence'
 : m['tarkeeb.incompletePhrase']?.() ?? 'Incomplete Phrase'}
 </span>
 </div>

{/* Full sentence */}
 <span
 className="font-arabic-semibold text-2xl text-neutral-900 dark:text-neutral-100 text-center mb-1"
 dir="rtl"
 >
{item.sentence}
 </span>
 <span className="font-english text-sm text-neutral-600 dark:text-neutral-300 text-center mb-0.5">
{item.sentenceEn}
 </span>

{/* Tree diagram */}
 <div className="w-full overflow-x-auto overflow-y-hidden mt-3 py-3 scrollbar-hide">
 <div className="flex flex-row items-start justify-center gap-4 min-h-[80px] min-w-max px-2">
{item.tree.map((node, i) => (
 <TreeNode key={i} node={node} accent700={accent700} />
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 );
};
