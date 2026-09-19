import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      showTransliteration: true,
      autoPlayAudio: true,

      toggleTransliteration: () =>
        set((state) => ({ showTransliteration: !state.showTransliteration })),

      setShowTransliteration: (val: boolean) => set({ showTransliteration: val }),

      toggleAutoPlayAudio: () => set((state) => ({ autoPlayAudio: !state.autoPlayAudio })),

      setAutoPlayAudio: (val: boolean) => set({ autoPlayAudio: val }),
    }),
    {
      name: 'tariq-mobile-learning-settings',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
