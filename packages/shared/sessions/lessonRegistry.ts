import type { LessonSessionData } from './lessonSessionTypes';
import { LESSON_01_SESSION } from './lesson1Session';
import { LESSON_02_SESSION } from './lesson2Session';
import { LESSON_03_SESSION } from './lesson3Session';
import { LESSON_04_SESSION } from './lesson4Session';
import { LESSON_05_SESSION } from './lesson5Session';
import { LESSON_06_SESSION } from './lesson6Session';
import { LESSON_07_SESSION } from './lesson7Session';
import { LESSON_08_SESSION } from './lesson8Session';
import { LESSON_09_SESSION } from './lesson9Session';
import { CH2_LESSON_01_SESSION } from './ch2Lesson1Session';
import { CH2_LESSON_02_SESSION } from './ch2Lesson2Session';
import { CH2_LESSON_03_SESSION } from './ch2Lesson3Session';
import { CH2_LESSON_04_SESSION } from './ch2Lesson4Session';
import { CH2_LESSON_05_SESSION } from './ch2Lesson5Session';
import { CH2_LESSON_06_SESSION } from './ch2Lesson6Session';
import { CH2_LESSON_07_SESSION } from './ch2Lesson7Session';
import { CH2_LESSON_08_SESSION } from './ch2Lesson8Session';
import { CH3_LESSON_01_SESSION } from './ch3Lesson1Session';
import { CH3_LESSON_02_SESSION } from './ch3Lesson2Session';
import { CH3_LESSON_03_SESSION } from './ch3Lesson3Session';
import { VOL2_CH1_LESSON_01_SESSION } from './vol2Ch1Lesson1Session';
import { VOL2_CH1_LESSON_02_SESSION } from './vol2Ch1Lesson2Session';
import { VOL2_CH1_LESSON_03_SESSION } from './vol2Ch1Lesson3Session';
import { VOL2_CH1_LESSON_04_SESSION } from './vol2Ch1Lesson4Session';
import { VOL2_CH1_LESSON_05_SESSION } from './vol2Ch1Lesson5Session';
import { VOL2_CH1_LESSON_06_SESSION } from './vol2Ch1Lesson6Session';
import { VOL2_CH1_LESSON_07_SESSION } from './vol2Ch1Lesson7Session';
import { VOL2_CH1_LESSON_08_SESSION } from './vol2Ch1Lesson8Session';
import { VOL2_CH1_LESSON_09_SESSION } from './vol2Ch1Lesson9Session';
import { VOL2_CH1_LESSON_10_SESSION } from './vol2Ch1Lesson10Session';
import { VOL2_CH1_LESSON_11_SESSION } from './vol2Ch1Lesson11Session';
import { VOL2_CH1_LESSON_12_SESSION } from './vol2Ch1Lesson12Session';

const SESSION_REGISTRY: Record<string, LessonSessionData> = {
  // Volume 1 Chapter 1
  '1-1-1': LESSON_01_SESSION,
  '1-1-2': LESSON_02_SESSION,
  '1-1-3': LESSON_03_SESSION,
  '1-1-4': LESSON_04_SESSION,
  '1-1-5': LESSON_05_SESSION,
  '1-1-6': LESSON_06_SESSION,
  '1-1-7': LESSON_07_SESSION,
  '1-1-8': LESSON_08_SESSION,
  '1-1-9': LESSON_09_SESSION,
  // Volume 1 Chapter 2
  '1-2-1': CH2_LESSON_01_SESSION,
  '1-2-2': CH2_LESSON_02_SESSION,
  '1-2-3': CH2_LESSON_03_SESSION,
  '1-2-4': CH2_LESSON_04_SESSION,
  '1-2-5': CH2_LESSON_05_SESSION,
  '1-2-6': CH2_LESSON_06_SESSION,
  '1-2-7': CH2_LESSON_07_SESSION,
  '1-2-8': CH2_LESSON_08_SESSION,
  // Volume 1 Chapter 3
  '1-3-1': CH3_LESSON_01_SESSION,
  '1-3-2': CH3_LESSON_02_SESSION,
  '1-3-3': CH3_LESSON_03_SESSION,
  // Volume 2 Chapter 1
  '2-1-1': VOL2_CH1_LESSON_01_SESSION,
  '2-1-2': VOL2_CH1_LESSON_02_SESSION,
  '2-1-3': VOL2_CH1_LESSON_03_SESSION,
  '2-1-4': VOL2_CH1_LESSON_04_SESSION,
  '2-1-5': VOL2_CH1_LESSON_05_SESSION,
  '2-1-6': VOL2_CH1_LESSON_06_SESSION,
  '2-1-7': VOL2_CH1_LESSON_07_SESSION,
  '2-1-8': VOL2_CH1_LESSON_08_SESSION,
  '2-1-9': VOL2_CH1_LESSON_09_SESSION,
  '2-1-10': VOL2_CH1_LESSON_10_SESSION,
  '2-1-11': VOL2_CH1_LESSON_11_SESSION,
  '2-1-12': VOL2_CH1_LESSON_12_SESSION,
};

/**
 * Retrieve the interactive micro-step session for a specific lesson.
 */
export function getLessonSession(
  volumeId: number,
  chapterId: number,
  lessonNum: number
): LessonSessionData | null {
  const key = `${volumeId}-${chapterId}-${lessonNum}`;
  return SESSION_REGISTRY[key] || null;
}

/**
 * Check whether an interactive micro-step session exists for a specific lesson.
 */
export function hasLessonSession(
  volumeId: number,
  chapterId: number,
  lessonNum: number
): boolean {
  const key = `${volumeId}-${chapterId}-${lessonNum}`;
  return Boolean(SESSION_REGISTRY[key]);
}
