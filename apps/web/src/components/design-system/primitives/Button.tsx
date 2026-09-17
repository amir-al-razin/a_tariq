import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'sovereign'
  | 'secondary'
  | 'subtle'
  | 'ghost'
  | 'destructive'
  | 'tonal-dark';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  // Sovereign: Solid commanding black/white CTA directly from good.png reference
  sovereign:
    'bg-neutral-950 text-white hover:bg-neutral-900 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-none border-0',
  // Primary: Heritage Accent Primary (e.g. Kairouan Indigo, Academic Lapis)
  primary:
    'bg-accent-primary hover:bg-accent-primary-hover text-white shadow-none border-0',
  // Secondary: Heritage Accent Secondary (e.g. Dune Gold, Terracotta, Coral)
  secondary:
    'bg-accent-secondary hover:bg-accent-secondary-hover text-white shadow-none border-0',
  // Subtle: Tone-on-tone tinted wash with crisp accent text
  subtle:
    'bg-accent-primary-subtle text-accent-primary-text hover:bg-accent-primary-hover/15 shadow-none border-0',
  // Ghost: Neutral well capsule
  ghost:
    'bg-neutral-100 hover:bg-neutral-200/90 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-none border-0',
  // Destructive: Rose red for dangerous actions
  destructive:
    'bg-rose-600 hover:bg-rose-700 text-white shadow-none border-0',
  // Tonal dark: High contrast neutral chip
  'tonal-dark':
    'bg-neutral-900 text-neutral-100 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-none border-0',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm font-english-bold gap-2',
  md: 'h-12 px-5 sm:px-6 text-base font-english-extrabold gap-2.5 tracking-tight',
  lg: 'h-16 px-5 sm:px-7 text-base sm:text-lg font-english-extrabold gap-3 tracking-tight',
  xl: 'h-20 px-7 sm:px-9 text-lg sm:text-xl font-english-black gap-3.5 tracking-tight',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      pill = true,
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      disabled = false,
      className = '',
      children,
      ...motionProps
    },
    ref
  ) => {
    const isInteractive = !disabled && !isLoading;
    const baseRadius = pill ? 'rounded-full' : 'rounded-2xl';

    return (
      <motion.button
        ref={ref}
        disabled={!isInteractive}
        whileTap={isInteractive ? { scale: 0.97 } : undefined}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className={`inline-flex items-center justify-center font-english transition-all duration-200 outline-none select-none cursor-pointer tracking-wide ${
          fullWidth ? 'w-full' : ''
        } ${
          isInteractive
            ? 'active:opacity-95 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950'
            : 'opacity-40 cursor-not-allowed pointer-events-none'
        } ${baseRadius} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
        {...motionProps}
      >
        {isLoading ? (
          <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>
        )}
        {children && <span className="truncate">{children}</span>}
        {!isLoading && rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  icon: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  pill?: boolean;
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'ghost',
      size = 'md',
      pill = true,
      label,
      disabled = false,
      className = '',
      ...motionProps
    },
    ref
  ) => {
    const dimensions = {
      sm: 'w-8 h-8',
      md: 'w-11 h-11',
      lg: 'w-14 h-14',
      xl: 'w-16 h-16',
    }[size];

    const baseRadius = pill ? 'rounded-full' : 'rounded-2xl';

    return (
      <motion.button
        ref={ref}
        disabled={disabled}
        aria-label={label}
        title={label}
        whileTap={!disabled ? { scale: 0.93 } : undefined}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className={`inline-flex items-center justify-center transition-all duration-200 outline-none cursor-pointer select-none ${dimensions} ${baseRadius} ${
          disabled
            ? 'opacity-40 cursor-not-allowed pointer-events-none'
            : 'focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950'
        } ${VARIANT_CLASSES[variant]} ${className}`}
        {...motionProps}
      >
        {icon}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 gap-1 ${className}`}
    >
      {children}
    </div>
  );
};

export interface CounterStepperProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (val: number) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const CounterStepper: React.FC<CounterStepperProps> = ({
  value,
  min = 0,
  max = 99,
  step = 1,
  onChange,
  className = '',
  size = 'md',
}) => {
  const canDec = value > min;
  const canInc = value < max;

  const btnSize = size === 'sm' ? 'w-8 h-8 text-sm' : 'w-11 h-11 text-base';
  const containerPadding = size === 'sm' ? 'p-1.5' : 'p-2';
  const valWidth = size === 'sm' ? 'w-10 text-base font-english-bold' : 'w-12 text-xl font-english-extrabold';

  return (
    <div
      className={`inline-flex items-center ${containerPadding} rounded-full bg-neutral-100 dark:bg-neutral-900 select-none ${className}`}
    >
      <button
        type="button"
        disabled={!canDec}
        onClick={() => canDec && onChange(value - step)}
        aria-label="Decrease"
        className={`${btnSize} rounded-full flex items-center justify-center transition-colors cursor-pointer ${
          canDec
            ? 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-700'
            : 'opacity-30 cursor-not-allowed text-neutral-400'
        }`}
      >
        <Minus size={14} />
      </button>

      <span className={`${valWidth} text-center font-english-bold text-neutral-900 dark:text-white`}>
        {value}
      </span>

      <button
        type="button"
        disabled={!canInc}
        onClick={() => canInc && onChange(value + step)}
        aria-label="Increase"
        className={`${btnSize} rounded-full flex items-center justify-center transition-colors cursor-pointer ${
          canInc
            ? 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-700'
            : 'opacity-30 cursor-not-allowed text-neutral-400'
        }`}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};
