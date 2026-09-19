import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { type AccentPaletteId, DEFAULT_ACCENT_PALETTE, ACCENT_PALETTES } from '@tariq/shared';

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
      },
    }),
    {
      name: 'tariq-mobile-palette-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { ACCENT_PALETTES, DEFAULT_ACCENT_PALETTE, type AccentPaletteId };
