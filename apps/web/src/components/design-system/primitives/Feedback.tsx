import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  X,
  Sparkles,
} from 'lucide-react';
import { Button } from './Button';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertBannerProps {
  variant?: AlertVariant;
  title: string;
  description?: string;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  surface?: 'elevated' | 'recessed';
}

const ALERT_CONFIG: Record<
  AlertVariant,
  { iconBg: string; iconColor: string; icon: React.ReactNode }
> = {
  info: {
    iconBg: 'bg-accent-primary-subtle text-accent-primary',
    iconColor: 'text-accent-primary',
    icon: <Info size={16} className="shrink-0" />,
  },
  success: {
    iconBg: 'bg-accent-secondary-subtle text-accent-secondary',
    iconColor: 'text-accent-secondary',
    icon: <CheckCircle2 size={16} className="shrink-0" />,
  },
  warning: {
    iconBg: 'bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
    iconColor: 'text-amber-600 dark:text-amber-400',
    icon: <AlertTriangle size={16} className="shrink-0" />,
  },
  danger: {
    iconBg: 'bg-rose-500/15 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
    iconColor: 'text-rose-600 dark:text-rose-400',
    icon: <AlertOctagon size={16} className="shrink-0" />,
  },
};

export const AlertBanner: React.FC<AlertBannerProps> = ({
  variant = 'info',
  title,
  description,
  onDismiss,
  action,
  surface = 'elevated',
  className = '',
}) => {
  const config = ALERT_CONFIG[variant];
  const surfaceClass = surface === 'recessed' ? 'bg-neutral-100 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950';

  return (
    <div
      role="alert"
      className={`p-4 rounded-2xl ${surfaceClass} flex items-start justify-between gap-3 font-english ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${config.iconBg}`}>
          {config.icon}
        </div>
        <div className="space-y-0.5 pt-0.5">
          <h5 className="text-sm font-english-bold text-neutral-950 dark:text-white">{title}</h5>
          {description && (
            <p className="text-xs font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {description}
            </p>
          )}
          {action && (
            <div className="pt-2">
              <button
                type="button"
                onClick={action.onClick}
                className="text-xs font-english-bold underline cursor-pointer hover:opacity-80 text-accent-primary"
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer text-neutral-400"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export interface ToastProps {
  title: string;
  message?: string;
  variant?: AlertVariant;
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  message,
  variant = 'info',
  isOpen,
  onClose,
}) => {
  const config = ALERT_CONFIG[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-2xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 flex items-start justify-between gap-3 shadow-none border-0"
        >
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${config.iconBg}`}>
              {config.icon}
            </div>
            <div className="space-y-0.5 pt-0.5">
              <span className="text-sm font-english-bold text-neutral-950 dark:text-white block">{title}</span>
              {message && (
                <span className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 block leading-relaxed">{message}</span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close toast"
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer text-neutral-400 shrink-0"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'top',
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClass =
    side === 'top'
      ? 'bottom-full mb-2 left-1/2 -translate-x-1/2'
      : 'top-full mt-2 left-1/2 -translate-x-1/2';

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className={`absolute z-50 px-3 py-1.5 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[11px] font-english-semibold pointer-events-none whitespace-nowrap ${positionClass}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
}) => {
  const variantClass = {
    text: 'h-4 w-full rounded-md',
    circular: 'w-10 h-10 rounded-full',
    rectangular: 'h-24 w-full rounded-2xl',
  }[variant];

  return (
    <div
      className={`animate-pulse bg-neutral-200/70 dark:bg-neutral-800 ${variantClass} ${className}`}
    />
  );
};

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`p-10 rounded-[32px] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center text-center space-y-4 font-english ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-800 text-accent-primary flex items-center justify-center">
        {icon || <Sparkles size={24} />}
      </div>

      <div className="space-y-1 max-w-sm">
        <h4 className="text-base font-english-bold text-neutral-950 dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>

      {actionLabel && onAction && (
        <Button variant="sovereign" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
