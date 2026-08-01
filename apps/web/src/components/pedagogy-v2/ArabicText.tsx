
import{cn} from '@/lib/utils';

interface Props{
 children: string;
 size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | 'display';
 className?: string;
 weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const sizeClasses ={
 sm: 'text-sm leading-loose py-1',
 base: 'text-arabic-body leading-loose py-1.5',
 lg: 'text-lg leading-loose py-1.5',
 xl: 'text-xl leading-loose py-2',
 '2xl': 'text-2xl leading-loose py-2',
 '3xl': 'text-3xl leading-loose py-3',
 display: 'text-arabic-display leading-loose py-4',
};

const weightClasses ={
 normal: 'font-arabic',
 medium: 'font-arabic-medium',
 semibold: 'font-arabic-semibold',
 bold: 'font-arabic-semibold',
};

export function ArabicText({
 children,
 size = 'base',
 className,
 weight = 'normal',
}: Props){
 return (
 <div
 dir="rtl"
 className={cn(
 'tracking-wide text-neutral-900 dark:text-neutral-50',
 sizeClasses[size],
 weightClasses[weight],
 className
 )}
 >
{children}
 </div>
 );
}
