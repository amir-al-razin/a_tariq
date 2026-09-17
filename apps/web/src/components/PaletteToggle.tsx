import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, ChevronDown } from 'lucide-react';
import {
  usePaletteStore,
  ACCENT_PALETTES,
  type AccentPaletteId,
} from '../state/paletteStore';

interface PaletteToggleProps {
  className?: string;
}

export const PaletteToggle: React.FC<PaletteToggleProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { paletteId, setPalette } = usePaletteStore();

  const isDark =
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark');

  const activePalette = ACCENT_PALETTES[paletteId] || ACCENT_PALETTES.kairouan_indigo;
  const primaryColor = isDark
    ? activePalette.dark.primary.main
    : activePalette.light.primary.main;
  const secondaryColor = isDark
    ? activePalette.dark.secondary.main
    : activePalette.light.secondary.main;

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: AccentPaletteId) => {
    setPalette(id);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-3 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 outline-none cursor-pointer ${
          isOpen ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : ''
        }`}
        title={`Active Palette: ${activePalette.name}`}
        aria-label="Change theme accent palette"
      >
        <span className="flex items-center -space-x-1">
          <span
            className="w-2.5 h-2.5 rounded-full z-10 border border-white dark:border-neutral-900"
            style={{ backgroundColor: primaryColor }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full border border-white dark:border-neutral-900"
            style={{ backgroundColor: secondaryColor }}
          />
        </span>
        <span className="hidden sm:inline font-english">{activePalette.name}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.14 }}
            className="absolute right-0 top-full mt-2 w-64 bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-2.5 z-50 flex flex-col gap-1 backdrop-blur-md"
          >
            <div className="px-3 py-1.5 flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Palette size={13} className="text-accent-primary" />
                <span>Heritage Themes</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-400">6 Palettes</span>
            </div>

            {(Object.keys(ACCENT_PALETTES) as AccentPaletteId[]).map((id) => {
              const pal = ACCENT_PALETTES[id];
              const isSelected = paletteId === id;
              const pColor = isDark ? pal.dark.primary.main : pal.light.primary.main;
              const sColor = isDark ? pal.dark.secondary.main : pal.light.secondary.main;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleSelect(id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-2xl text-left transition-all cursor-pointer outline-none ${
                    isSelected
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-bold'
                      : 'hover:bg-neutral-50 dark:hover:bg-neutral-850 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center -space-x-1 shrink-0">
                      <span
                        className="w-3 h-3 rounded-full z-10 border border-white dark:border-neutral-900"
                        style={{ backgroundColor: pColor }}
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-white dark:border-neutral-900"
                        style={{ backgroundColor: sColor }}
                      />
                    </span>
                    <div>
                      <div className="text-xs leading-none font-english">{pal.name}</div>
                      <div className="text-[10px] text-neutral-400 font-mono mt-0.5 leading-none">
                        {pal.tagline}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check size={14} className="stroke-[3] text-accent-primary shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaletteToggle;
