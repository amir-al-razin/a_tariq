import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface LessonCheckpoint {
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  currentStepIndex: number;
  totalSteps: number;
  lastUpdated: number;
}

interface LessonCheckpointState {
  checkpoints: Record<string, LessonCheckpoint>;
  saveCheckpoint: (
    volumeId: number,
    chapterId: number,
    lessonNum: number,
    currentStepIndex: number,
    totalSteps: number
  ) => void;
  clearCheckpoint: (volumeId: number, chapterId: number, lessonNum: number) => void;
  getCheckpoint: (
    volumeId: number,
    chapterId: number,
    lessonNum: number
  ) => LessonCheckpoint | undefined;
  clearAllCheckpoints: () => void;
}

const getCheckpointKey = (volumeId: number, chapterId: number, lessonNum: number): string =>
  `v${volumeId}_c${chapterId}_d${lessonNum}`;

export const useLessonCheckpointStore = create<LessonCheckpointState>()(
  persist(
    (set, get) => ({
      checkpoints: {},

      saveCheckpoint: (volumeId, chapterId, lessonNum, currentStepIndex, totalSteps) => {
        const key = getCheckpointKey(volumeId, chapterId, lessonNum);

        // If at step 0 or finished all steps, remove stale checkpoint
        if (currentStepIndex <= 0 || currentStepIndex >= totalSteps) {
          set((state) => {
            if (!state.checkpoints[key]) return state;
            const next = { ...state.checkpoints };
            delete next[key];
            return { checkpoints: next };
          });
          return;
        }

        set((state) => ({
          checkpoints: {
            ...state.checkpoints,
            [key]: {
              volumeId,
              chapterId,
              lessonNum,
              currentStepIndex,
              totalSteps,
              lastUpdated: Date.now(),
            },
          },
        }));
      },

      clearCheckpoint: (volumeId, chapterId, lessonNum) => {
        const key = getCheckpointKey(volumeId, chapterId, lessonNum);
        set((state) => {
          if (!state.checkpoints[key]) return state;
          const next = { ...state.checkpoints };
          delete next[key];
          return { checkpoints: next };
        });
      },

      getCheckpoint: (volumeId, chapterId, lessonNum) => {
        const key = getCheckpointKey(volumeId, chapterId, lessonNum);
        return get().checkpoints[key];
      },

      clearAllCheckpoints: () => {
        set({ checkpoints: {} });
      },
    }),
    {
      name: 'tariq-lesson-checkpoints',
    }
  )
);
