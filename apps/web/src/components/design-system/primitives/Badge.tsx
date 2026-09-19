import React from 'react';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'subtle'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  direction?: 'none' | 'rtl' | 'ltr';
  dot?: boolean;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: 'bg-accent-primary text-white',
  secondary: 'bg-accent-secondary text-white',
  subtle: 'bg-accent-primary-subtle text-accent-primary-text',
  neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200',
  success: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300',
  warning: 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300',
  danger: 'bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300',
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-3 py-1 text-xs font-english-extrabold tracking-wider uppercase',
  md: 'px-4 py-1.5 text-sm font-english-bold tracking-wide',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  pill = true,
  direction = 'none',
  dot = false,
  className = '',
  children,
  ...props
}) => {
  const shapeClass =
    direction === 'rtl'
      ? 'price-tag-rtl rounded-r-full sm:rounded-r-2xl pr-4 pl-3'
      : direction === 'ltr'
      ? 'price-tag-ltr rounded-l-full sm:rounded-l-2xl pl-4 pr-3'
      : pill
      ? 'rounded-full'
      : 'rounded-xl';

  return (
    <div
      className={`inline-flex items-center gap-1.5 leading-none transition-colors border-0 select-none ${shapeClass} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'primary' || variant === 'secondary'
              ? 'bg-white animate-pulse'
              : 'bg-current'
          }`}
        />
      )}
      <span>{children}</span>
    </div>
  );
};
