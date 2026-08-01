
import{ArabicText} from './ArabicText';
import{Romanization} from './Romanization';
import{useLanguageContent} from '@/hooks/useLanguageContent';
import{cn} from '@/lib/utils';

interface Props{
 arabic: string;
 romanized?: string;
 english: string;
 bangla?: string;
 showRomanization?: boolean;
 className?: string;
}

export function ExampleCard({
 arabic,
 romanized,
 english,
 bangla,
 showRomanization = true,
 className
}: Props){
 const{getContent} = useLanguageContent();
 const translation = getContent({english, bangla});

 return (
 <div
 className={cn(
"flex flex-col rounded-3xl bg-neutral-100 p-8 dark:bg-neutral-900 space-y-6 transition-colors",
 className
 )}
 >
 <div className="flex flex-col gap-2 items-end">
 <ArabicText size="xl">{arabic}</ArabicText>
{showRomanization && romanized && (
 <Romanization size="sm">{romanized}</Romanization>
 )}
 </div>

 <div className="w-full h-[2px] bg-neutral-200/50 dark:bg-neutral-900/50 rounded-full" />

 <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-200 font-english">
{translation}
 </div>
 </div>
 );
}
