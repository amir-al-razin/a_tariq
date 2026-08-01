import{cn} from '@/lib/utils';

interface Props{
 children: string;
 size?: 'xs' | 'sm' | 'base';
 className?: string;
}

const sizeClasses ={
 xs: 'text-xs',
 sm: 'text-sm',
 base: 'text-base',
};

export function Romanization({children, size = 'sm', className}: Props){
 return (
 <span
 className={cn(
 'font-english italic text-neutral-500 dark:text-neutral-400',
 sizeClasses[size],
 className
 )}
 >
{children}
 </span>
 );
}
