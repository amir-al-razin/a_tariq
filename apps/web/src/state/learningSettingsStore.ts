import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LearningSettingsState {
  showTransliteration: boolean;
  autoPlayAudio: boolean;
  toggleTransliteration: () => void;
  setShowTransliteration: (val: boolean) => void;
  toggleAutoPlayAudio: () => void;
  setAutoPlayAudio: (val: boolean) => void;
}

export const useLearningSettingsStore = create<LearningSettingsState>()(
  persist(
    (set) => ({
      showTransliteration: true, // Enabled by default
      autoPlayAudio: true,       // Audio always on by default

      toggleTransliteration: () =>
        set((state) => ({ showTransliteration: !state.showTransliteration })),

      setShowTransliteration: (val: boolean) =>
        set({ showTransliteration: val }),

      toggleAutoPlayAudio: () =>
        set((state) => ({ autoPlayAudio: !state.autoPlayAudio })),

      setAutoPlayAudio: (val: boolean) =>
        set({ autoPlayAudio: val }),
    }),
    {
      name: 'tariq-learning-settings',
    }
  )
);
