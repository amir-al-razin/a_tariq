import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

export type CardSurface = 'base' | 'raised' | 'sunken' | 'accent' | 'transparent';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardRadius = 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: CardSurface;
  padding?: CardPadding;
  radius?: CardRadius;
  interactive?: boolean;
  children: React.ReactNode;
}

const SURFACE_CLASSES: Record<CardSurface, string> = {
  base: 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100',
  raised: 'bg-white dark:bg-[#141414] text-neutral-900 dark:text-neutral-100',
  sunken: 'bg-neutral-200/70 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100',
  accent: 'bg-accent-primary-subtle text-accent-primary-text',
  transparent: 'bg-transparent',
};

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const RADIUS_CLASSES: Record<CardRadius, string> = {
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-[20px]',
  '2xl': 'rounded-3xl',
  '3xl': 'rounded-[32px]',
};

export const Card: React.FC<CardProps> = ({
  surface = 'base',
  padding = 'md',
  radius = '2xl',
  interactive = false,
  className = '',
  children,
  ...props
}) => {
  const interactiveClasses = interactive
    ? 'cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]'
    : '';

  return (
    <div
      className={`relative overflow-hidden transition-colors border-0 shadow-none ${SURFACE_CLASSES[surface]} ${PADDING_CLASSES[padding]} ${RADIUS_CLASSES[radius]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend = 'up',
  icon,
  subtitle,
  className = '',
}) => {
  return (
    <div
      className={`p-6 rounded-[28px] bg-neutral-100 dark:bg-neutral-900 flex flex-col justify-between space-y-4 font-english ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-neutral-800 text-accent-primary flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <span className="text-4xl sm:text-5xl font-english-extrabold tracking-tight text-neutral-950 dark:text-white">
            {value}
          </span>
          {change && (
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-english-extrabold ${
                trend === 'down'
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  : 'bg-accent-primary-subtle text-accent-primary-text'
              }`}
            >
              {trend === 'down' ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
              {change}
            </span>
          )}
        </div>
        {subtitle && (
          <span className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 block pt-1">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export interface AccordionItem {
  id: string;
  title: string;
  arabicTitle?: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-2.5 font-english ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full p-5 flex items-center justify-between text-left cursor-pointer outline-none select-none hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-base font-english-bold text-neutral-950 dark:text-white">
                  {item.title}
                </span>
                {item.arabicTitle && (
                  <span className="text-sm font-arabic font-bold text-neutral-400" dir="rtl">
                    {item.arabicTitle}
                  </span>
                )}
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-neutral-400"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="p-5 pt-1 text-sm font-english-medium text-neutral-700 dark:text-neutral-300 leading-relaxed border-t border-black/5 dark:border-white/5">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  isOnline?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  isOnline = false,
}) => {
  const sizeClass = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
  }[size];

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClass}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover select-none"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-accent-primary-subtle text-accent-primary-text font-english-bold flex items-center justify-center select-none">
          {initials}
        </div>
      )}

      {isOnline && (
        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-950" />
      )}
    </div>
  );
};

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        className={`w-[1px] self-stretch bg-neutral-200 dark:bg-neutral-800 ${className}`}
      />
    );
  }

  return (
    <div
      role="separator"
      className={`h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 ${className}`}
    />
  );
};
