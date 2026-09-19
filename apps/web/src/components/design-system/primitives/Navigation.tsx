import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Lock } from 'lucide-react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: 'sovereign' | 'accent';
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  items,
  activeId,
  onChange,
  className = '',
  variant = 'sovereign',
}) => {
  const activeBg =
    variant === 'accent'
      ? 'bg-accent-primary text-white'
      : 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950';

  return (
    <div
      className={`inline-flex items-center p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-english-bold transition-colors duration-200 cursor-pointer outline-none flex items-center gap-2 select-none ${
              isActive
                ? activeBg
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="segmented-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className={`absolute inset-0 rounded-full ${activeBg} -z-0`}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
              {item.count !== undefined && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold ${
                    isActive
                      ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                      : 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  {item.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export interface UnderlineTabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const UnderlineTabs: React.FC<UnderlineTabsProps> = ({
  items,
  activeId,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center gap-8 border-b border-neutral-200 dark:border-neutral-800 font-english ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={`relative pb-3.5 text-base font-english-bold transition-colors cursor-pointer outline-none select-none flex items-center gap-2.5 ${
              isActive
                ? 'text-accent-primary'
                : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
            {isActive && (
              <motion.div
                layoutId="underline-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  onNavigate,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-xs font-english ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1 || item.isCurrent;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600 shrink-0" />
            )}
            {isLast ? (
              <span className="px-2.5 py-1 rounded-full bg-accent-primary-subtle text-accent-primary-text font-english-bold select-none">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => item.href && onNavigate?.(item.href)}
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export interface StepItem {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: StepItem[];
  currentStepIndex: number;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStepIndex,
  className = '',
}) => {
  return (
    <div className={`w-full flex items-center justify-between font-english ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isCurrent = index === currentStepIndex;

        return (
          <React.Fragment key={step.id}>
            {/* Step Node */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-english-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent-primary text-white'
                    : isCurrent
                    ? 'bg-accent-primary-subtle text-accent-primary'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'
                }`}
              >
                {isCompleted ? (
                  <Check size={16} className="stroke-[3]" />
                ) : isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              <div className="text-center">
                <span
                  className={`text-xs block font-english-semibold ${
                    isCurrent
                      ? 'text-neutral-950 dark:text-white font-english-bold'
                      : isCompleted
                      ? 'text-neutral-700 dark:text-neutral-300'
                      : 'text-neutral-400'
                  }`}
                >
                  {step.title}
                </span>
                {step.description && (
                  <span className="text-[10px] text-neutral-400 hidden sm:block">
                    {step.description}
                  </span>
                )}
              </div>
            </div>

            {/* Connecting Bar */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-3 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden mb-6">
                <div
                  className={`h-full transition-all duration-300 ${
                    index < currentStepIndex ? 'bg-accent-primary w-full' : 'w-0'
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export type PathNodeState = 'active' | 'completed' | 'locked';

export interface PathNodeProps {
  title: string;
  state: PathNodeState;
  onClick?: () => void;
  icon?: React.ReactNode;
  arabicTitle?: string;
  className?: string;
}

export const PathNode: React.FC<PathNodeProps> = ({
  title,
  state,
  onClick,
  icon,
  arabicTitle,
  className = '',
}) => {
  const isInteractive = state !== 'locked';

  const surfaceClasses = {
    active: 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white cursor-pointer',
    completed: 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 cursor-pointer',
    locked: 'bg-white/50 dark:bg-neutral-800/40 text-neutral-400 dark:text-neutral-500 cursor-not-allowed opacity-70',
  }[state];

  const beaconClasses = {
    active: 'bg-accent-primary text-white',
    completed: 'bg-accent-secondary-subtle text-accent-secondary',
    locked: 'bg-neutral-100 dark:bg-neutral-700 text-neutral-400',
  }[state];

  return (
    <div
      onClick={isInteractive ? onClick : undefined}
      className={`relative p-5 rounded-2xl transition-all duration-200 select-none flex flex-col justify-between space-y-3 font-english ${surfaceClasses} ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${beaconClasses}`}>
          {state === 'active' ? (
            icon || <ChevronRight size={18} className="stroke-[2.5]" />
          ) : state === 'completed' ? (
            <Check size={16} className="stroke-[3]" />
          ) : (
            <Lock size={16} />
          )}
        </div>

        {state === 'active' && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-english-bold bg-accent-primary text-white">
            Current
          </span>
        )}
        {state === 'completed' && (
          <span className="text-xs font-english-bold text-accent-secondary">
            Completed
          </span>
        )}
        {state === 'locked' && (
          <span className="text-xs font-english-medium text-neutral-400">
            Locked
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h5 className="font-english-bold text-sm leading-snug">{title}</h5>
        {arabicTitle && (
          <span className="text-xs font-arabic text-neutral-500 dark:text-neutral-400 block" dir="rtl">
            {arabicTitle}
          </span>
        )}
      </div>
    </div>
  );
};
