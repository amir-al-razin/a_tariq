import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView } from 'moti';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CHAPTERS } from '../data/curriculum';
import { CHAPTERS_VOL2 } from '../data/curriculum_vol2';
import { CHAPTERS_VOL3 } from '../data/vol3/curriculum_vol3';

const C = {
  primary50: '#ECFDF8',
  primary100: '#D1FAEF',
  primary200: '#A7F3DE',
  primary300: '#6EE7C8',
  primary400: '#34D3AA',
  primary500: '#16B78E',
  primary600: '#0F9373',
  primary700: '#0D775F',
  primary800: '#0F5F4D',
  primary900: '#0A4134',
  neutral50: '#F8F7F4',
  neutral100: '#F0EEE8',
  neutral200: '#E5E1D8',
  neutral300: '#D5CEBF',
  neutral400: '#B9AF9C',
  neutral500: '#9A8F7B',
  neutral600: '#7D7463',
  neutral700: '#4F4A40',
  neutral800: '#22201B',
  neutral900: '#1A1815',
};

// Volume accent palettes — matches VolumeOneScreen / VolumeTwoScreen / VolumeThreeScreen
const VOLUME_ACCENT = {
  1: {
    // teal
    accent100: '#D1FAEF',
    accent300: '#6EE7C8',
    accent400: '#34D3AA',
    accent500: '#16B78E',
    accent600: '#0F9373',
    accent700: '#0D775F',
    accent800: '#0F5F4D',
    accent900: '#0A4134',
  },
  2: {
    // amber
    accent100: '#FEF3C7',
    accent300: '#FCD34D',
    accent400: '#FBBF24',
    accent500: '#F59E0B',
    accent600: '#D97706',
    accent700: '#B45309',
    accent800: '#92400E',
    accent900: '#78350F',
  },
  3: {
    // violet
    accent100: '#EDE9FE',
    accent300: '#C4B5FD',
    accent400: '#A78BFA',
    accent500: '#8B5CF6',
    accent600: '#7C3AED',
    accent700: '#6D28D9',
    accent800: '#5B21B6',
    accent900: '#4C1D95',
  },
} as const;

type LessonScreenProps = {
  route: {
    params: {
      volumeNumber: number;
      chapterId: number;
      chapterTitleAr: string;
      chapterTitleEn: string;
      darsNumber: number;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params: any) => void;
  };
};

type ChunkStatus = 'current' | 'completed' | 'locked' | 'open';

// Circular layout constants
const CHUNK_SIZE = 64;

const progressKey = (chapterId: number, darsNumber: number) =>
  `lesson_progress_${chapterId}_${darsNumber}`;

export const LessonScreen: React.FC<LessonScreenProps> = ({ route, navigation }) => {
  const { chapterId, chapterTitleAr, chapterTitleEn, darsNumber, volumeNumber = 1 } = route.params;
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  const accent = VOLUME_ACCENT[volumeNumber as 1 | 2 | 3] ?? VOLUME_ACCENT[1];
  const allChapters =
    volumeNumber === 2 ? CHAPTERS_VOL2 : volumeNumber === 3 ? CHAPTERS_VOL3 : CHAPTERS;

  // Last-visited chunk index (persisted)
  const [lastVisited, setLastVisited] = useState<number | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(progressKey(chapterId, darsNumber)).then((val) => {
      if (val !== null) setLastVisited(parseInt(val, 10));
    });
  }, [chapterId, darsNumber]);

  const chapterData = allChapters.find((c) => c.id === chapterId);
  const lessonData = chapterData?.lessons.find((l) => l.darsNumber === darsNumber);
  const rawChunks = lessonData?.chunks || [];

  // Fallback if chunks are empty (e.g. for lessons not yet filled out)
  const displayChunks =
    rawChunks.length > 0
      ? rawChunks
      : Array.from({ length: 3 }, (_, i) => ({
          id: `mock-${i}`,
          type: 'mixed',
          titleEn: 'Pending lesson data',
          titleAr: 'جاري العمل',
        }));

  const numChunks = displayChunks.length;

  const chunks = displayChunks.map((chunkItem, idx) => {
    const status = 'open' as ChunkStatus;
    return { ...chunkItem, status };
  });

  const handleChunkPress = (chunkId: string, idx: number) => {
    // Persist last-visited index
    setLastVisited(idx);
    AsyncStorage.setItem(progressKey(chapterId, darsNumber), String(idx));
    navigation.navigate('ChunkEngine', { chunkId, volumeNumber, chapterId, darsNumber });
  };

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}>
      {/* ── Custom Header ── */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          borderBottomWidth: 1,
          borderBottomColor: isDark ? C.neutral800 : C.neutral200,
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={{ padding: 8, marginLeft: -8, marginRight: 4 }}>
          <Ionicons name="arrow-back" size={24} color={isDark ? C.neutral200 : C.neutral800} />
        </Pressable>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 17,
              color: isDark ? C.neutral100 : C.neutral900,
            }}>
            Lesson {darsNumber} · {chapterTitleEn}
          </Text>
        </View>
      </View>

      {/* ── Circular Chunks Layout ── */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Removed redundant dot legend */}

        {/* Orbiting Chunks */}
        {chunks.map((chunk, idx) => {
          const isCurrent = chunk.status === 'current';
          const isCompleted = chunk.status === 'completed';
          const isLocked = chunk.status === 'locked';
          const isLastVisited = lastVisited === idx;
          const isInteractive = !isLocked;

          const dynamicRadius = Math.max(90, (numChunks * 85) / (2 * Math.PI));
          const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / numChunks;
          const x = dynamicRadius * Math.cos(angle);
          const y = dynamicRadius * Math.sin(angle);

          const circleBg = isLastVisited
            ? accent.accent500
            : isCurrent || isCompleted
              ? accent.accent500
              : isLocked
                ? isDark
                  ? C.neutral700
                  : C.neutral300
                : isDark
                  ? accent.accent800
                  : accent.accent100;

          const circleBorder = isLastVisited
            ? accent.accent700
            : isCurrent || isCompleted
              ? isDark
                ? accent.accent700
                : accent.accent600
              : isLocked
                ? isDark
                  ? C.neutral600
                  : C.neutral500
                : isDark
                  ? accent.accent900
                  : accent.accent300;

          const iconColor =
            isLastVisited || isCurrent || isCompleted
              ? '#fff'
              : isLocked
                ? isDark
                  ? C.neutral800
                  : C.neutral700
                : isDark
                  ? accent.accent300
                  : accent.accent600;

          return (
            <View
              key={chunk.id}
              style={{
                position: 'absolute',
                transform: [{ translateX: x }, { translateY: y }],
                width: CHUNK_SIZE,
                height: CHUNK_SIZE + 6,
                alignItems: 'center',
                justifyContent: 'flex-end',
                zIndex:
                  isLastVisited || (isCurrent && lastVisited === null && idx === 0)
                    ? 100
                    : isInteractive
                      ? 5
                      : 1,
              }}>
              <MotiView
                from={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 100 + idx * 40, damping: 20, stiffness: 250 }}
                style={{ width: '100%', height: '100%' }}>
                <Pressable
                  disabled={isLocked}
                  onPress={() => handleChunkPress(chunk.id, idx)}
                  style={{ width: '100%', height: '100%', justifyContent: 'flex-end' }}>
                  {({ pressed }) => {
                    const pushDepth = pressed && isInteractive ? 0 : -6;
                    return (
                      <View
                        style={{
                          width: CHUNK_SIZE,
                          height: CHUNK_SIZE + 6,
                          justifyContent: 'flex-end',
                        }}>
                        {/* Shadow Base Layer (True Cylinder Wall) */}
                        <View
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            width: CHUNK_SIZE,
                            height: CHUNK_SIZE + (pressed && isInteractive ? 0 : 6),
                            borderRadius: CHUNK_SIZE / 2,
                            backgroundColor: circleBorder,
                          }}
                        />

                        {/* Top Face Layer */}
                        <View
                          style={{
                            width: CHUNK_SIZE,
                            height: CHUNK_SIZE,
                            borderRadius: CHUNK_SIZE / 2,
                            backgroundColor: circleBg,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateY: pushDepth }],
                          }}>
                          {isLocked ? (
                            <Ionicons name="lock-closed" size={24} color={iconColor} />
                          ) : isCompleted ? (
                            <Ionicons name="checkmark" size={28} color={iconColor} />
                          ) : (
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 28,
                                color: iconColor,
                                marginTop: 4,
                              }}>
                              {idx + 1}
                            </Text>
                          )}

                          {/* Dot indicator removed for clarity */}

                          {/* "RESUME" badge for last-visited, "START" for first chunk with no history */}
                          {(isLastVisited || (isCurrent && lastVisited === null && idx === 0)) && (
                            <MotiView
                              from={{ scale: 1, translateY: 0 }}
                              animate={{ scale: 1.03, translateY: -3 }}
                              transition={{
                                type: 'timing',
                                duration: 1000,
                                loop: true,
                                repeatReverse: true,
                              }}
                              style={{
                                position: 'absolute',
                                top: -30,
                                alignSelf: 'center',
                                backgroundColor: isLastVisited
                                  ? accent.accent700
                                  : accent.accent100,
                                borderColor: isLastVisited ? accent.accent400 : accent.accent400,
                                borderWidth: 1.5,
                                borderRadius: 8,
                                paddingHorizontal: 8,
                                paddingVertical: 3,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 10,
                                  color: isLastVisited ? '#fff' : accent.accent700,
                                }}>
                                {isLastVisited ? 'RESUME' : 'START'}
                              </Text>
                              <View
                                style={{
                                  position: 'absolute',
                                  bottom: -4,
                                  alignSelf: 'center',
                                  width: 6,
                                  height: 6,
                                  backgroundColor: isLastVisited
                                    ? accent.accent700
                                    : accent.accent100,
                                  borderRightWidth: 1.5,
                                  borderBottomWidth: 1.5,
                                  borderColor: accent.accent400,
                                  transform: [{ rotate: '45deg' }],
                                }}
                              />
                            </MotiView>
                          )}
                        </View>
                      </View>
                    );
                  }}
                </Pressable>
              </MotiView>
            </View>
          );
        })}
      </View>
    </View>
  );
};
