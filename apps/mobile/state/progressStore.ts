// state/progressStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = (vol: number, ch: number, dars: number, chunkId: string) =>
  `progress.v${vol}.c${ch}.d${dars}.${chunkId}`;

export type ChunkProgress = 'not_started' | 'in_progress' | 'completed';

export async function getChunkProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkId: string
): Promise<ChunkProgress> {
  const val = await AsyncStorage.getItem(KEY(vol, ch, dars, chunkId));
  return (val as ChunkProgress) || 'not_started';
}

export async function setChunkProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkId: string,
  status: ChunkProgress
): Promise<void> {
  await AsyncStorage.setItem(KEY(vol, ch, dars, chunkId), status);
}

export async function getLessonProgress(
  vol: number,
  ch: number,
  dars: number,
  chunkIds: string[]
): Promise<Record<string, ChunkProgress>> {
  const pairs = await AsyncStorage.multiGet(chunkIds.map((id) => KEY(vol, ch, dars, id)));
  return Object.fromEntries(
    pairs.map(([k, v], i) => [chunkIds[i], (v as ChunkProgress) || 'not_started'])
  );
}

export async function resetLesson(
  vol: number,
  ch: number,
  dars: number,
  chunkIds: string[]
): Promise<void> {
  await AsyncStorage.multiRemove(chunkIds.map((id) => KEY(vol, ch, dars, id)));
}
