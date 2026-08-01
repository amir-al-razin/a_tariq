import{useState} from 'react';
import{ChevronDown, ChevronUp} from 'lucide-react';
import * as m from '#/paraglide/messages.js';
import{cn} from '@/lib/utils';
import{AnimatePresence, motion} from 'framer-motion';

interface Props{
 translation: string;
 defaultOpen?: boolean;
 className?: string;
}

export function TranslationToggle({translation, defaultOpen = false, className}: Props){
 const [isOpen, setIsOpen] = useState(defaultOpen);

 return (
 <div className={cn('flex flex-col w-full space-y-2', className)}>
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="flex w-full items-center justify-between rounded-full bg-neutral-100 px-6 py-4 text-sm font-english-medium text-neutral-900 transition-colors hover:bg-neutral-200/70 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-900/80 outline-none"
 >
 <span>
{isOpen ? m['common.hideTranslation']() : m['common.showTranslation']()}
 </span>
{isOpen ? (
 <ChevronUp className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
 ) : (
 <ChevronDown className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
 )}
 </button>

 <AnimatePresence initial={false}>
{isOpen && (
 <motion.div
 initial={{height: 0, opacity: 0}}
 animate={{height: 'auto', opacity: 1}}
 exit={{height: 0, opacity: 0}}
 transition={{duration: 0.2, ease: 'easeInOut'}}
 className="overflow-hidden rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50"
 >
 <div className="p-6 text-base text-neutral-700 dark:text-neutral-300 font-english leading-relaxed">
{translation}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}
