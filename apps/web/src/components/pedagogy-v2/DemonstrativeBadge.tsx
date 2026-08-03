export interface DemonstrativeBadgeProps {

  text: string;
  direction?: 'rtl' | 'ltr';
  variant?: 'neutral' | 'light' | 'dark';
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

export function DemonstrativeBadge({
  text,
  direction = 'rtl',
  variant = 'neutral',
  className = '',
  textClassName = 'text-lg sm:text-2xl',
  onClick,
}: DemonstrativeBadgeProps) {
  const baseShapeClass =
    direction === 'rtl'
      ? 'price-tag-rtl rounded-r-xl sm:rounded-r-2xl'
      : 'price-tag-ltr rounded-l-xl sm:rounded-l-2xl';

  const variantClass = {
    neutral: 'bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100',
    light: 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100',
    dark: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950',
  }[variant];

  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 sm:px-6 sm:py-3.5 shrink-0 transition-colors ${baseShapeClass} ${variantClass} ${className}`}
    >
      <span className={`font-arabic font-bold break-words leading-tight ${textClassName}`}>
        {text}
      </span>
    </div>
  );
}
