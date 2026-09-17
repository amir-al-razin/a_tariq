import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
}) => {
  const isSm = size === 'sm';
  const trackWidth = isSm ? 'w-10' : 'w-12';
  const trackHeight = isSm ? 'h-6' : 'h-7';
  const thumbSize = isSm ? 'w-4 h-4' : 'w-5 h-5';
  const thumbOffset = isSm ? (checked ? 18 : 3) : checked ? 22 : 3;

  return (
    <label
      className={`inline-flex items-start gap-3 select-none cursor-pointer ${
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
      }`}
    >
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (!disabled) onChange(!checked);
          }
        }}
        className={`relative inline-flex items-center shrink-0 ${trackWidth} ${trackHeight} rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 ${
          checked ? 'bg-accent-primary' : 'bg-neutral-300 dark:bg-neutral-800'
        }`}
      >
        <motion.span
          animate={{ x: thumbOffset }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`${thumbSize} rounded-full bg-white shadow-none pointer-events-none block`}
        />
      </div>

      {(label || description) && (
        <div className="space-y-1 pt-0.5">
          {label && (
            <span className="block text-base font-english-bold text-neutral-950 dark:text-white">
              {label}
            </span>
          )}
          {description && (
            <span className="block text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}) => {
  return (
    <label
      className={`inline-flex items-start gap-3 select-none cursor-pointer font-english ${
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
      }`}
    >
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (!disabled) onChange(!checked);
          }
        }}
        className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${
          checked
            ? 'bg-accent-primary text-white'
            : 'bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700'
        }`}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 600, damping: 30 }}
          >
            <Check size={16} className="stroke-[3.5]" />
          </motion.div>
        )}
      </div>

      {(label || description) && (
        <div className="space-y-1 pt-0.5">
          {label && (
            <span className="block text-base font-english-bold text-neutral-950 dark:text-white">
              {label}
            </span>
          )}
          {description && (
            <span className="block text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`space-y-3 font-english ${className}`} role="radiogroup" aria-label={name}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        const isDisabled = !!opt.disabled;

        return (
          <label
            key={opt.value}
            className={`flex items-start gap-3 select-none cursor-pointer p-3.5 rounded-2xl transition-colors ${
              isSelected
                ? 'bg-neutral-100 dark:bg-neutral-900/70'
                : 'hover:bg-neutral-50 dark:hover:bg-neutral-900/30'
            } ${isDisabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''}`}
          >
            <div
              role="radio"
              aria-checked={isSelected}
              tabIndex={isDisabled ? -1 : 0}
              onClick={() => !isDisabled && onChange(opt.value)}
              className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-200 ${
                isSelected
                  ? 'bg-neutral-200 dark:bg-neutral-800 ring-2 ring-accent-primary'
                  : 'bg-neutral-200 dark:bg-neutral-800'
              }`}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                  className="w-3.5 h-3.5 rounded-full bg-accent-primary"
                />
              )}
            </div>

            <div className="space-y-1 pt-0.5">
              <span className="block text-base font-english-bold text-neutral-950 dark:text-white">
                {opt.label}
              </span>
              {opt.description && (
                <span className="block text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
                  {opt.description}
                </span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (val: number) => void;
  label?: string;
  showValue?: boolean;
  valueFormatter?: (val: number) => string;
  disabled?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  showValue = true,
  valueFormatter = (val) => `${val}%`,
  disabled = false,
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className="w-full space-y-2.5 font-english select-none">
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && (
            <span className="font-english-bold text-neutral-900 dark:text-neutral-100">
              {label}
            </span>
          )}
          {showValue && (
            <span className="font-mono font-black text-accent-primary text-base">
              {valueFormatter(value)}
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center h-6 cursor-pointer">
        {/* Track Well */}
        <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          {/* Filled Accent Track */}
          <div
            className="h-full bg-accent-primary transition-all duration-75"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Hidden native input for full a11y & touch handling */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          aria-label={label || 'Slider'}
        />

        {/* Custom Visual Thumb */}
        <div
          className="absolute w-5 h-5 rounded-full bg-white dark:bg-neutral-100 pointer-events-none transition-transform ring-2 ring-accent-primary"
          style={{
            left: `calc(${percentage}% - 10px)`,
          }}
        />
      </div>
    </div>
  );
};
