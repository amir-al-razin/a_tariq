import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  type AccentPaletteId,
  DEFAULT_ACCENT_PALETTE,
  ACCENT_PALETTES,
  applyPaletteToDocument,
} from '@tariq/shared';

interface PaletteStoreState {
  paletteId: AccentPaletteId;
  setPalette: (id: AccentPaletteId) => void;
}

export const usePaletteStore = create<PaletteStoreState>()(
  persist(
    (set) => ({
      paletteId: DEFAULT_ACCENT_PALETTE,
      setPalette: (id: AccentPaletteId) => {
        set({ paletteId: id });
        if (typeof document !== 'undefined') {
          const isDark = document.documentElement.classList.contains('dark');
          applyPaletteToDocument(id, isDark);
        }
      },
    }),
    {
      name: 'tariq-palette-storage',
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== 'undefined') {
          const isDark = document.documentElement.classList.contains('dark');
          applyPaletteToDocument(state.paletteId, isDark);
        }
      },
    }
  )
);

export { ACCENT_PALETTES, DEFAULT_ACCENT_PALETTE, type AccentPaletteId };
