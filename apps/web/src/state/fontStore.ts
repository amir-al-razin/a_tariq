import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ArabicFontId = 'cairo' | 'noto' | 'amiri' | 'tajawal' | 'vazirmatn' | 'mushaf';

export interface ArabicFontConfig {
  id: ArabicFontId;
  name: string;
  family: string;
  className: string;
  sample: string;
  description: string;
}

export const ARABIC_FONTS: Record<ArabicFontId, ArabicFontConfig> = {
  cairo: {
    id: 'cairo',
    name: 'Cairo',
    family: 'Cairo, sans-serif',
    className: 'font-cairo',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Modern geometric Naskh with high clarity & legibility',
  },
  noto: {
    id: 'noto',
    name: 'Noto Sans Arabic',
    family: '"Noto Sans Arabic", sans-serif',
    className: 'font-noto',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Clean universal reading font designed for multi-device readability',
  },
  amiri: {
    id: 'amiri',
    name: 'Amiri',
    family: 'Amiri, serif',
    className: 'font-amiri',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Classic scholarly Naskh font based on Bulaq Press typography',
  },
  tajawal: {
    id: 'tajawal',
    name: 'Tajawal',
    family: 'Tajawal, sans-serif',
    className: 'font-tajawal',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Sleek contemporary low-contrast Arabic typeface',
  },
  vazirmatn: {
    id: 'vazirmatn',
    name: 'Vazirmatn',
    family: 'Vazirmatn, sans-serif',
    className: 'font-vazirmatn',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Balanced, highly clear pedagogical reading font',
  },
  mushaf: {
    id: 'mushaf',
    name: 'Uthmanic Hafs',
    family: 'UthmanicHafs, "KFGQPC Uthmanic Script HAFS", "Amiri Quran", Amiri, serif',
    className: 'font-mushaf',
    sample: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    description: 'Traditional King Fahd Quran Complex Mus\'haf script',
  },
};

export const ARABIC_FONT_LIST: ArabicFontConfig[] = Object.values(ARABIC_FONTS);

interface FontState {
  arabicFont: ArabicFontId;
  setArabicFont: (font: ArabicFontId) => void;
}

export function applyArabicFontToDOM(fontId: ArabicFontId) {
  if (typeof document === 'undefined') return;
  const fontConfig = ARABIC_FONTS[fontId] || ARABIC_FONTS.cairo;
  document.documentElement.style.setProperty('--font-arabic-family', fontConfig.family);
  document.documentElement.setAttribute('data-arabic-font', fontId);
}

export const useFontStore = create<FontState>()(
  persist(
    (set) => ({
      arabicFont: 'cairo',
      setArabicFont: (font: ArabicFontId) => {
        set({ arabicFont: font });
        applyArabicFontToDOM(font);
      },
    }),
    {
      name: 'tariq-font-preference-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.arabicFont) {
          applyArabicFontToDOM(state.arabicFont);
        }
      },
    }
  )
);
