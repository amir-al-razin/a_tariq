import { cn } from '@/lib/utils';

interface Props {
  children: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | 'display';
  className?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const sizeClasses = {
  sm: 'text-sm leading-relaxed',
  base: 'text-arabic-body', // 18px line-height 34px
  lg: 'text-lg leading-loose',
  xl: 'text-xl leading-loose',
  '2xl': 'text-2xl leading-loose',
  '3xl': 'text-3xl leading-loose',
  display: 'text-arabic-display', // 44px line-height 60px
};

const weightClasses = {
  normal: 'font-arabic',
  medium: 'font-arabic-medium',
  semibold: 'font-arabic-semibold',
  bold: 'font-arabic-semibold',
};

export function ArabicText({
  children,
  size = 'base',
  className,
  weight = 'normal'
}: Props) {
  return (
    <div
      dir="rtl"
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        className
      )}
    >
      {children}
    </div>
  );
}
