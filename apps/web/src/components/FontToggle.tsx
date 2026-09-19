import React, { useState } from 'react';
import { Type } from 'lucide-react';
import { useFontStore, ARABIC_FONTS } from '../state/fontStore';
import { FontSettingsModal } from './FontSettingsModal';

interface FontToggleProps {
  variant?: 'pill' | 'icon' | 'toolbar';
  className?: string;
}

export const FontToggle: React.FC<FontToggleProps> = ({ variant = 'pill', className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { arabicFont } = useFontStore();
  const currentFontConfig = ARABIC_FONTS[arabicFont] || ARABIC_FONTS.cairo;

  if (variant === 'icon') {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={`p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer outline-none ${className}`}
          title={`Arabic Font: ${currentFontConfig.name}`}
          aria-label="Change Arabic font settings"
        >
          <Type size={18} />
        </button>
        <FontSettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  if (variant === 'toolbar') {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-english-semibold transition-colors cursor-pointer bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 ${className}`}
          aria-label="Change Arabic font settings"
        >
          <Type className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
          <span className="font-english">{currentFontConfig.name}</span>
          <span className={`text-sm leading-none ml-1 ${currentFontConfig.className}`} dir="rtl">
            أ
          </span>
        </button>
        <FontSettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  // Default 'pill' variant for headers and navbars
  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2 sm:px-3 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 outline-none cursor-pointer ${
          isModalOpen ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : ''
        } ${className}`}
        aria-label="Change Arabic font settings"
      >
        <Type size={16} />
        <span className="hidden sm:inline font-english">{currentFontConfig.name}</span>
        <span className={`text-sm leading-none text-neutral-500 dark:text-neutral-400 hidden sm:inline ${currentFontConfig.className}`} dir="rtl">
          خط
        </span>
      </button>
      <FontSettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FontToggle;
