import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ChunkProgress = 'not_started' | 'in_progress' | 'completed';

const KEY = (vol: number, ch: number, dars: number, chunkId: string) =>
  `progress.v${vol}.c${ch}.d${dars}.${chunkId}`;

interface ProgressState {
  progress: Record<string, ChunkProgress>;
  setChunkProgressState: (key: string, status: ChunkProgress) => void;
  resetLessonState: (keys: string[]) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      progress: {},
      setChunkProgressState: (key, status) =>
        set((state) => ({
          progress: { ...state.progress, [key]: status },
        })),
      resetLessonState: (keys) =>
        set((state) => {
          const newProgress = { ...state.progress };
          keys.forEach((k) => delete newProgress[k]);
          return { progress: newProgress };
        }),
    }),
    {
      name: 'progress-storage',
    }
  )
);

// We keep the exact async functions to match mobile API

export async function getChunkProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkId: string
): Promise<ChunkProgress> {
  const state = useProgressStore.getState();
  return state.progress[KEY(vol, ch, dars, chunkId)] || 'not_started';
}

export async function setChunkProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkId: string,
  status: ChunkProgress
): Promise<void> {
  useProgressStore.getState().setChunkProgressState(KEY(vol, ch, dars, chunkId), status);
}

export async function getLessonProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkIds: string[]
): Promise<Record<string, ChunkProgress>> {
  const state = useProgressStore.getState();
  return Object.fromEntries(
    chunkIds.map((id) => [id, state.progress[KEY(vol, ch, dars, id)] || 'not_started'])
  );
}

export async function resetLesson(
  vol: number,
  ch: number,
  dars: number,
  chunkIds: string[]
): Promise<void> {
  useProgressStore.getState().resetLessonState(chunkIds.map((id) => KEY(vol, ch, dars, id)));
}
