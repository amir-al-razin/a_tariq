import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ItemRetention {
  itemId: string;
  itemType: 'word' | 'phrase' | 'pattern';
  arabic: string;
  lemma: string;
  meaningEn: string;
  meaningBn: string;
  volume: number;
  chapter: number;
  lesson: number;

  box: number; // 0 = New, 1 = Learning (1d), 2 = Familiar (3d), 3 = Proficient (7d), 4 = Mastered (16d+)
  consecutiveCorrect: number;
  totalAttempts: number;
  totalErrors: number;
  lastPracticedAt: number;
  nextReviewDue: number;
  stability: number; // Days
}

export interface SessionRecord {
  id: string;
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  completedAt: number;
  totalQuestions: number;
  firstTryCorrect: number;
  recycledErrorsResolved: number;
  accuracyRate: number;
  timeSpentSeconds: number;
  wordsLearned: string[];
}

interface RetentionState {
  items: Record<string, ItemRetention>;
  sessions: SessionRecord[];
  
  // Actions
  recordItemResult: (
    itemData: {
      itemId: string;
      itemType: 'word' | 'phrase' | 'pattern';
      arabic: string;
      lemma: string;
      meaningEn: string;
      meaningBn: string;
      volume: number;
      chapter: number;
      lesson: number;
    },
    isCorrect: boolean
  ) => void;

  recordSessionComplete: (session: Omit<SessionRecord, 'id' | 'completedAt'>) => void;

  getItem: (itemId: string) => ItemRetention | undefined;
  getDueItemsCount: (volumeId?: number) => number;
  getLessonMastery: (volumeId: number, chapterId: number, lessonNum: number) => {
    totalItems: number;
    masteredItems: number;
    learningItems: number;
    averageAccuracy: number;
  };
  resetAllRetention: () => void;
}

// Spaced repetition interval schedule (in days)
const BOX_INTERVALS = [1, 3, 7, 16, 35];

export const useRetentionStore = create<RetentionState>()(
  persist(
    (set, get) => ({
      items: {},
      sessions: [],

      recordItemResult: (itemData, isCorrect) => {
        set((state) => {
          const now = Date.now();
          const existing = state.items[itemData.itemId];

          let newBox = 1;
          let newStreak = 0;
          let totalAttempts = 1;
          let totalErrors = 0;

          if (existing) {
            totalAttempts = existing.totalAttempts + 1;
            totalErrors = isCorrect ? existing.totalErrors : existing.totalErrors + 1;

            if (isCorrect) {
              newStreak = existing.consecutiveCorrect + 1;
              newBox = Math.min(BOX_INTERVALS.length - 1, existing.box + 1);
            } else {
              newStreak = 0;
              // On error, step down to learning box
              newBox = Math.max(1, existing.box - 1);
            }
          } else {
            if (isCorrect) {
              newStreak = 1;
              newBox = 1;
            } else {
              newStreak = 0;
              totalErrors = 1;
              newBox = 1;
            }
          }

          const intervalDays = BOX_INTERVALS[newBox] || 1;
          const nextReviewDue = now + intervalDays * 24 * 60 * 60 * 1000;

          const updatedItem: ItemRetention = {
            ...itemData,
            box: newBox,
            consecutiveCorrect: newStreak,
            totalAttempts,
            totalErrors,
            lastPracticedAt: now,
            nextReviewDue,
            stability: intervalDays,
          };

          return {
            items: {
              ...state.items,
              [itemData.itemId]: updatedItem,
            },
          };
        });
      },

      recordSessionComplete: (sessionData) => {
        set((state) => {
          const newSession: SessionRecord = {
            ...sessionData,
            id: `session_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            completedAt: Date.now(),
          };
          return {
            sessions: [newSession, ...state.sessions].slice(0, 100), // Keep last 100 sessions
          };
        });
      },

      getItem: (itemId) => {
        return get().items[itemId];
      },

      getDueItemsCount: (volumeId) => {
        const now = Date.now();
        const items = Object.values(get().items);
        return items.filter((item) => {
          if (volumeId !== undefined && item.volume !== volumeId) return false;
          return item.nextReviewDue <= now;
        }).length;
      },

      getLessonMastery: (volumeId, chapterId, lessonNum) => {
        const items = Object.values(get().items).filter(
          (item) => item.volume === volumeId && item.chapter === chapterId && item.lesson === lessonNum
        );

        if (items.length === 0) {
          return {
            totalItems: 0,
            masteredItems: 0,
            learningItems: 0,
            averageAccuracy: 0,
          };
        }

        const mastered = items.filter((i) => i.box >= 3).length;
        const learning = items.filter((i) => i.box < 3).length;
        const totalAttempts = items.reduce((acc, i) => acc + i.totalAttempts, 0);
        const totalErrors = items.reduce((acc, i) => acc + i.totalErrors, 0);
        const averageAccuracy = totalAttempts > 0 ? Math.round(((totalAttempts - totalErrors) / totalAttempts) * 100) : 0;

        return {
          totalItems: items.length,
          masteredItems: mastered,
          learningItems: learning,
          averageAccuracy,
        };
      },

      resetAllRetention: () => {
        set({ items: {}, sessions: [] });
      },
    }),
    {
      name: 'tariq-retention-storage',
    }
  )
);
