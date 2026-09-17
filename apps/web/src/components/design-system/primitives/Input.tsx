import React, { forwardRef, useId } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
  pill?: boolean;
  surface?: 'elevated' | 'recessed';
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      onClear,
      pill = false,
      surface = 'elevated',
      disabled = false,
      value,
      className = '',
      id,
      ...inputProps
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const baseRadius = pill ? 'rounded-full' : 'rounded-2xl';
    const surfaceClass =
      surface === 'recessed'
        ? 'bg-neutral-100 hover:bg-neutral-200/50 focus:bg-white dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:focus:bg-neutral-950'
        : 'bg-white hover:bg-neutral-50 focus:bg-white dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:focus:bg-neutral-950';

    return (
      <div className="w-full space-y-2 font-english">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-english-bold text-neutral-900 dark:text-neutral-100 select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-4 text-neutral-400 dark:text-neutral-500 pointer-events-none flex items-center">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            value={value}
            className={`w-full h-14 ${surfaceClass} text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-base font-english-semibold transition-all duration-200 outline-none border-0 shadow-none ${
              leftIcon ? 'pl-12' : 'pl-5'
            } ${rightIcon || onClear ? 'pr-12' : 'pr-5'} ${baseRadius} ${
              error
                ? 'ring-2 ring-rose-500/70'
                : 'focus:ring-2 focus:ring-accent-primary'
            } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
            {...inputProps}
          />

          {onClear && value && !disabled && (
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear input"
              className="absolute right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
            >
              <X size={14} />
            </button>
          )}

          {!onClear && rightIcon && (
            <span className="absolute right-4 text-neutral-400 dark:text-neutral-500 pointer-events-none flex items-center">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="text-[11px] font-english-semibold text-rose-600 dark:text-rose-400">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  shortcut?: string;
  onClear?: () => void;
  surface?: 'elevated' | 'recessed';
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      placeholder = 'Search curriculum, roots, vocabulary...',
      shortcut = '⌘K',
      value,
      onClear,
      surface = 'elevated',
      className = '',
      ...props
    },
    ref
  ) => {
    const surfaceClass =
      surface === 'recessed'
        ? 'bg-neutral-100 hover:bg-neutral-200/50 focus:bg-white dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:focus:bg-neutral-950'
        : 'bg-white hover:bg-neutral-50 focus:bg-white dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:focus:bg-neutral-950';

    return (
      <div className={`relative flex items-center w-full font-english ${className}`}>
        <Search
          size={16}
          className="absolute left-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
        />

        <input
          ref={ref}
          type="search"
          value={value}
          placeholder={placeholder}
          className={`w-full h-14 pl-12 pr-16 rounded-full ${surfaceClass} text-base font-english-semibold text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none border-0 shadow-none transition-all duration-200 focus:ring-2 focus:ring-accent-primary`}
          {...props}
        />

        {value && onClear ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="absolute right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X size={14} />
          </button>
        ) : shortcut ? (
          <kbd className="absolute right-4 px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 pointer-events-none select-none">
            {shortcut}
          </kbd>
        ) : null}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      maxLength,
      value = '',
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full space-y-2 font-english">
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-sm font-english-bold text-neutral-900 dark:text-neutral-100 select-none"
            >
              {label}
            </label>
          )}
          {maxLength && (
            <span className="text-xs font-mono font-bold text-neutral-500">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          rows={3}
          className={`w-full p-4 rounded-2xl bg-neutral-100 hover:bg-neutral-200/50 focus:bg-white dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:focus:bg-neutral-950 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-base font-english-medium transition-all duration-200 outline-none border-0 shadow-none resize-none ${
            error
              ? 'ring-2 ring-rose-500/70'
              : 'focus:ring-2 focus:ring-accent-primary'
          } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />

        {error ? (
          <p className="text-xs font-english-bold text-rose-600 dark:text-rose-400">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, helperText, error, disabled = false, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full space-y-2 font-english">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-english-bold text-neutral-900 dark:text-neutral-100 select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={`w-full h-14 pl-5 pr-12 rounded-2xl bg-neutral-100 hover:bg-neutral-200/50 focus:bg-white dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:focus:bg-neutral-950 text-neutral-950 dark:text-white text-base font-english-semibold appearance-none outline-none border-0 shadow-none transition-all duration-200 cursor-pointer ${
              error
                ? 'ring-2 ring-rose-500/70'
                : 'focus:ring-2 focus:ring-accent-primary'
            } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="absolute right-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
          />
        </div>

        {error ? (
          <p className="text-[11px] font-english-semibold text-rose-600 dark:text-rose-400">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = 'Select';
