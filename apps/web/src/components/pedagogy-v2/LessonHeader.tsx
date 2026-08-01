
import {ArrowLeft, X} from 'lucide-react';
import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';
import {FontToggle} from '../FontToggle';

interface Props{
 title?: string;
 subtitle?: string;
 progress?: number; // 0 to 1
 onBack?: () => void;
 onClose?: () => void;
 showClose?: boolean;
 className?: string;
}

export function LessonHeader({
 title,
 subtitle,
 progress = 0,
 onBack,
 onClose,
 showClose = false,
 className
}: Props){
 const progressPercent = Math.round(Math.min(Math.max(progress, 0), 1) * 100);

 return (
 <div
 className={cn(
"sticky top-0 z-50 flex flex-col gap-4 bg-white/80 p-6 backdrop-blur-md dark:bg-black/80 transition-colors",
 className
 )}
 >
 <div className="flex items-center justify-between gap-4">
{onBack ? (
 <button
 onClick={onBack}
 className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-900 transition-colors outline-none"
 aria-label="Back"
 >
 <ArrowLeft size={18} className="text-neutral-900 dark:text-neutral-100" />
 </button>
 ) : <div className="h-10 w-10" />}

 <div className="flex flex-col items-center flex-1 overflow-hidden">
{title && (
 <span className="font-english-semibold text-sm tracking-wide text-neutral-900 dark:text-neutral-100 truncate w-full text-center">
{title}
 </span>
 )}
{subtitle && (
 <span className="font-english text-xs text-neutral-500 dark:text-neutral-400 truncate w-full text-center mt-0.5">
{subtitle}
 </span>
 )}
 </div>

 <div className="flex items-center gap-2">
  <FontToggle variant="toolbar" />
  {showClose && onClose ? (
  <button
  onClick={onClose}
  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-900 transition-colors outline-none"
  aria-label="Close"
  >
  <X size={18} className="text-neutral-900 dark:text-neutral-100" />
  </button>
  ) : (
  <div className="flex items-center justify-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900">
  <span className="font-english-semibold text-xs text-neutral-900 dark:text-neutral-100">
 {progressPercent}%
  </span>
  </div>
  )}
 </div>
 </div>

{/* Borderless Tone-on-Tone Progress Bar */}
 <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900">
 <motion.div
 className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
 initial={{width: 0}}
 animate={{width:`${progressPercent}%`}}
 transition={{type: 'spring', stiffness: 50, damping: 15}}
 />
 </div>
 </div>
 );
}
