import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, X, Check } from 'lucide-react';
import { useFontStore, ARABIC_FONT_LIST, type ArabicFontId } from '../state/fontStore';

interface FontSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FontSettingsModal: React.FC<FontSettingsModalProps> = ({ isOpen, onClose }) => {
  const { arabicFont, setArabicFont } = useFontStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with Backdrop Blur & Zero Shadows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/40 dark:bg-neutral-950/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card - 100% Raw Neutral Aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-6 md:p-8 space-y-6 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <Type className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-english-semibold text-lg md:text-xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Arabic Pedagogical Font
                  </h2>
                  <p className="font-english text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    Select your preferred font script for Arabic lessons & reading.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200/60 dark:bg-neutral-800 dark:hover:bg-neutral-800/90 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer outline-none"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Font Selector Cards List */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {ARABIC_FONT_LIST.map((font) => {
                const isSelected = arabicFont === font.id;
                return (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => {
                      setArabicFont(font.id as ArabicFontId);
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'
                        : 'bg-neutral-100/90 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-english-semibold text-sm tracking-tight">
                          {font.name}
                        </span>
                        {isSelected && (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                              isSelected
                                ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                : ''
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            Active
                          </span>
                        )}
                      </div>
                      <p
                        className={`font-english text-xs ${
                          isSelected
                            ? 'text-neutral-300 dark:text-neutral-600'
                            : 'text-neutral-500 dark:text-neutral-400'
                        }`}
                      >
                        {font.description}
                      </p>
                    </div>

                    {/* Live Arabic Font Sample Preview */}
                    <div
                      dir="rtl"
                      className={`text-2xl md:text-3xl leading-relaxed whitespace-nowrap ${font.className}`}
                    >
                      {font.sample}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Information */}
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-english">
              <span>Dynamic rendering active across all lessons</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
