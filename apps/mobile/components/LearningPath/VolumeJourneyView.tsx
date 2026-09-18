import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, ScrollView, Modal, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3, getLessonSession } from '@tariq/shared';
import { useProgressStore, LESSON_KEY } from '../../state/progressStore';
import { useRetentionStore } from '../../state/retentionStore';
import { useThemeTokens } from '../../theme/colors';
import { playTapSound } from '../../lib/sound';
import type { HomeStackParamList } from '../../screens/HomeNavigator';

type VolumeId = 1 | 2 | 3;

interface Props {
  volumeId: VolumeId;
}

interface LessonMeta {
  titleEn: string;
  arabicTopic: string;
  conceptEn: string;
}

function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n
    .toString()
    .split('')
    .map((d) => digits[parseInt(d, 10)] || d)
    .join('');
}

const CHAPTER_1_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'Pointing Near: "This"',
    arabicTopic: 'هَٰذَا',
    conceptEn: 'Learn how to point to objects and people near you.',
  },
  2: {
    titleEn: 'Pointing Far: "That"',
    arabicTopic: 'ذَٰلِكَ',
    conceptEn: 'Learn how to point to objects and people in the distance.',
  },
  3: {
    titleEn: 'Asking "What" & "Who"',
    arabicTopic: 'مَا وَ مَنْ',
    conceptEn: 'Ask simple questions about things and people around you.',
  },
  4: {
    titleEn: 'Yes/No Questions & Sounds',
    arabicTopic: 'أَ وَ الْحُرُوفُ الشَّمْسِيَّةُ',
    conceptEn: 'Ask quick confirmation questions and pronounce words smoothly.',
  },
  5: {
    titleEn: 'Feminine Words & Pointing',
    arabicTopic: 'هَٰذِهِ وَ تِلْكَ',
    conceptEn: 'Identify feminine nouns and point to them accurately.',
  },
  6: {
    titleEn: 'The Definite Word ("The")',
    arabicTopic: 'أَلْ',
    conceptEn: 'Make everyday words specific with the prefix "Al-".',
  },
  7: {
    titleEn: 'Possession & Belonging',
    arabicTopic: 'الإِضَافَةُ',
    conceptEn: 'Express relationships like "the teacher\'s book" and "the house of Allah".',
  },
  8: {
    titleEn: 'The Location Word "In"',
    arabicTopic: 'حَرْفُ الْجَرِّ «فِي»',
    conceptEn: 'Describe where people and objects are located in places.',
  },
  9: {
    titleEn: 'Having & Being With',
    arabicTopic: 'عِنْدَ وَ مَعَ',
    conceptEn: 'Talk about what you have with you and who you are with.',
  },
};

const CHAPTER_2_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'General & Choice Questions',
    arabicTopic: 'هَلْ وَ أَ...أَمْ',
    conceptEn: 'Ask yes/no questions and choose between two alternatives.',
  },
  2: {
    titleEn: 'Attributes & Opposites',
    arabicTopic: 'الصِّفَةُ وَ الْمَوْصُوفُ',
    conceptEn: 'Describe everyday food and objects with qualities like fresh and pure.',
  },
  3: {
    titleEn: 'People, Roles & Character',
    arabicTopic: 'الأَوْصَافُ وَ غَيْرُ',
    conceptEn: 'Talk about professions, character, and opposite qualities with "ghayr".',
  },
  4: {
    titleEn: 'Building Complete Sentences',
    arabicTopic: 'تَرْكِيبُ الْجُمْلَةِ',
    conceptEn: 'Form meaningful Arabic statements by pairing subjects and descriptions.',
  },
  5: {
    titleEn: 'My, Your, His & Her',
    arabicTopic: 'الضَّمَائِرُ الْمُتَّصِلَةُ',
    conceptEn: 'Attach word endings to show who owns an item.',
  },
  6: {
    titleEn: 'Places & Landmarks',
    arabicTopic: 'الأَمَاكِنُ وَ الإِضَافَةُ',
    conceptEn: 'Describe cities, mosques, markets, and institutions in full sentences.',
  },
  7: {
    titleEn: 'Directions & Positions',
    arabicTopic: 'ظُرُوفُ الْمَكَانِ',
    conceptEn: 'Use words like above, below, in front of, and behind with ease.',
  },
  8: {
    titleEn: 'Classrooms & School Life',
    arabicTopic: 'الْفُصُولُ وَ الدِّرَاسَةُ',
    conceptEn: 'Describe classrooms, learning supplies, and everyday scenes.',
  },
};

const CHAPTER_3_LESSONS_INFO: Record<number, LessonMeta> = {
  1: {
    titleEn: 'Possession with Pointing',
    arabicTopic: 'إِمَامُ هَٰذَا الْمَسْجِدِ',
    conceptEn: 'Express ownership of pointed items and read the sacred text on Al-Kaaba.',
  },
  2: {
    titleEn: 'Definite Descriptive Phrases',
    arabicTopic: 'الْوَرْدَةُ الْكَبِيرَةُ',
    conceptEn: 'Progress from basic words to rich descriptive phrases and complete sentences.',
  },
  3: {
    titleEn: 'Reading Authentic Arabic',
    arabicTopic: 'قِرَاءَةُ النُّصُوصِ',
    conceptEn: 'Celebrate completing Volume 1 by reading complete classical Arabic stories.',
  },
};

const SINE_OFFSETS = [0, 48, 72, 48, 0, -48, -72, -48, 0];
const ROW_HEIGHT = 160;

export const VolumeJourneyView: React.FC<Props> = ({ volumeId }) => {
  const theme = useThemeTokens();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const progressStore = useProgressStore((state) => state.progress);
  const sessions = useRetentionStore((state) => state.sessions);

  const [selectedLesson, setSelectedLesson] = useState<{
    chapterId: number;
    darsNum: number;
  } | null>(null);

  const dataMap = {
    1: CHAPTERS,
    2: CHAPTERS_VOL2,
    3: CHAPTERS_VOL3,
  };

  const arTitleMap = {
    1: 'الجزء الأول',
    2: 'الجزء الثاني',
    3: 'الجزء الثالث',
  };

  const chapters = dataMap[volumeId] || CHAPTERS;

  const isLessonCompleted = useCallback(
    (chapterId: number, darsNum: number) => {
      const hasSession = sessions.some(
        (s) => s.volumeId === volumeId && s.chapterId === chapterId && s.lessonNum === darsNum
      );
      if (hasSession) return true;
      return progressStore[LESSON_KEY(volumeId, chapterId, darsNum)] === 'completed';
    },
    [sessions, progressStore, volumeId]
  );

  // Volume wide progress
  const { totalLessons, completedLessons } = useMemo(() => {
    let total = 0;
    let completed = 0;
    chapters.forEach((ch) => {
      ch.lessons.forEach((l) => {
        total++;
        if (isLessonCompleted(ch.id, l.darsNumber)) {
          completed++;
        }
      });
    });
    return { totalLessons: total, completedLessons: completed };
  }, [chapters, isLessonCompleted]);

  // Next uncompleted lesson along curriculum path
  const nextLessonInfo = useMemo(() => {
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        if (!isLessonCompleted(chapter.id, lesson.darsNumber)) {
          return { chapterId: chapter.id, darsNum: lesson.darsNumber };
        }
      }
    }
    return { chapterId: chapters[0].id, darsNum: chapters[0].lessons[0].darsNumber };
  }, [chapters, isLessonCompleted]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      {/* Top App Bar with back navigation */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 12,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Back to volumes"
          style={({ pressed }) => ({
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: pressed
              ? theme.isDark
                ? theme.neutral[700]
                : theme.neutral[200]
              : theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          })}>
          <Ionicons name="arrow-back" size={20} color={theme.textPrimary} />
        </Pressable>

        <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: theme.textPrimary }}>
          Volume {volumeId}
        </Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 64 }}
        showsVerticalScrollIndicator={false}>
        {/* Top Volume Hero Banner - Raw Neutral Plane */}
        <View
          style={{
            width: '100%',
            borderRadius: 32,
            backgroundColor: theme.surfaceWell,
            padding: 24,
            marginBottom: 32,
            position: 'relative',
            overflow: 'hidden',
          }}>
          {/* Subtle Majestic Arabic Watermark */}
          <View
            style={{
              position: 'absolute',
              right: -10,
              top: -20,
              opacity: 0.05,
              transform: [{ rotate: '-12deg' }],
            }}>
            <Text
              style={{
                fontFamily: 'NotoSansArabic_600SemiBold',
                fontSize: 160,
                color: theme.textPrimary,
              }}>
              {arTitleMap[volumeId]}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: theme.accentPrimary,
              marginBottom: 4,
            }}>
            Pedagogical Curriculum
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 28,
              color: theme.textPrimary,
              marginBottom: 6,
            }}>
            Volume {volumeId}
          </Text>

          <Text
            style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: theme.textSecondary }}>
            {completedLessons} of {totalLessons} Lessons Mastered
          </Text>
        </View>

        {/* Chapters & Winding Journey Paths */}
        {chapters.map((chapter) => {
          const chapterCompletedCount = chapter.lessons.filter((l) =>
            isLessonCompleted(chapter.id, l.darsNumber)
          ).length;

          return (
            <View
              key={`chapter-${chapter.id}`}
              style={{ width: '100%', alignItems: 'center', marginBottom: 32 }}>
              {/* Chapter Header Card */}
              <View
                style={{
                  width: '100%',
                  borderRadius: 24,
                  backgroundColor: theme.surfaceWell,
                  padding: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 24,
                }}>
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: theme.accentPrimary,
                      marginBottom: 2,
                    }}>
                    Chapter {chapter.id}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 18,
                      color: theme.textPrimary,
                    }}>
                    {chapter.titleEn}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lexend_400Regular',
                      fontSize: 12,
                      color: theme.textMuted,
                      marginTop: 2,
                    }}>
                    {chapter.subtitle}
                  </Text>
                </View>

                <View
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 14,
                    backgroundColor: theme.surfaceRaised,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 12,
                      color: theme.textSecondary,
                    }}>
                    {chapterCompletedCount} / {chapter.lessons.length}
                  </Text>
                </View>
              </View>

              {/* Serpentine Stepping Stones */}
              <View style={{ width: '100%', alignItems: 'center' }}>
                {chapter.lessons.map((lesson, idx) => {
                  const darsNum = lesson.darsNumber;
                  const isCompleted = isLessonCompleted(chapter.id, darsNum);
                  const isCurrent =
                    nextLessonInfo.chapterId === chapter.id &&
                    nextLessonInfo.darsNum === darsNum &&
                    !isCompleted;
                  const isFirst = idx === 0;
                  const xOffset = SINE_OFFSETS[idx % SINE_OFFSETS.length];

                  return (
                    <View
                      key={`node-${darsNum}`}
                      style={{
                        height: ROW_HEIGHT,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          transform: [{ translateX: xOffset }],
                          alignItems: 'center',
                          position: 'relative',
                        }}>
                        {/* 3D Speech Bubble Beacon for Active Node */}
                        {isCurrent && (
                          <View
                            style={{
                              position: 'absolute',
                              top: -38,
                              alignItems: 'center',
                              zIndex: 20,
                            }}>
                            <View
                              style={{
                                backgroundColor: theme.accentSecondary,
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                                borderRadius: 8,
                                shadowOpacity: 0,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 10,
                                  letterSpacing: 1,
                                  color: '#FFFFFF',
                                  textTransform: 'uppercase',
                                }}>
                                {isFirst ? 'START' : 'CURRENT'}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: 8,
                                height: 8,
                                backgroundColor: theme.accentSecondary,
                                transform: [{ rotate: '45deg' }],
                                marginTop: -4,
                              }}
                            />
                          </View>
                        )}

                        {/* 3D Circular Stepping Stone Button */}
                        <Pressable
                          onPress={() => {
                            playTapSound();
                            setSelectedLesson({ chapterId: chapter.id, darsNum });
                          }}
                          style={{
                            width: 76,
                            height: 82,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          }}>
                          {({ pressed, hovered }: any) => {
                            const isSpecial = isCurrent || isCompleted;

                            // Theme-calibrated solid colors (No opacity reduction!)
                            let faceBg: string;
                            let pedestalBg: string;
                            let textColor: string;

                            if (isSpecial) {
                              faceBg =
                                pressed || hovered ? theme.accentPrimaryHover : theme.accentPrimary;
                              pedestalBg = theme.accentPrimaryHover;
                              textColor = '#FFFFFF';
                            } else {
                              if (theme.isDark) {
                                // Dark mode: Clean nocturnal surface #262626, deep dark pedestal #0A0A0A
                                faceBg =
                                  pressed || hovered ? theme.neutral[700] : theme.neutral[800];
                                pedestalBg = theme.neutral[950];
                                textColor = theme.neutral[200];
                              } else {
                                // Light mode: Clean paper surface #F5F5F5, subtle pedestal #D4D4D4
                                faceBg =
                                  pressed || hovered ? theme.neutral[200] : theme.neutral[100];
                                pedestalBg = theme.neutral[300];
                                textColor = theme.neutral[700];
                              }
                            }

                            // Tactile displacement:
                            // Depress down to 0 on press; slight 1px lift on hover
                            const translateY = pressed ? 0 : hovered ? -7 : -6;

                            return (
                              <View
                                style={{
                                  width: 76,
                                  height: 82,
                                  justifyContent: 'flex-end',
                                  alignItems: 'center',
                                }}>
                                {/* Base Pedestal (3D Cylinder Bevel - Solid Opaque) */}
                                <View
                                  style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: 76,
                                    height: 76,
                                    borderRadius: 38,
                                    backgroundColor: pedestalBg,
                                    overflow: 'hidden',
                                  }}>
                                  {isSpecial && (
                                    <View
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: theme.isDark
                                          ? 'rgba(0,0,0,0.35)'
                                          : 'rgba(0,0,0,0.22)',
                                      }}
                                    />
                                  )}
                                </View>

                                {/* Raised Top Face (100% Solid Opaque, ZERO opacity reduction) */}
                                <View
                                  style={{
                                    width: 76,
                                    height: 76,
                                    borderRadius: 38,
                                    backgroundColor: faceBg,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transform: [{ translateY }],
                                  }}>
                                  {isCompleted ? (
                                    <Ionicons name="checkmark" size={32} color="#FFFFFF" />
                                  ) : (
                                    <Text
                                      style={{
                                        fontFamily: 'Lexend_600SemiBold',
                                        fontSize: 24,
                                        color: textColor,
                                      }}>
                                      {darsNum}
                                    </Text>
                                  )}
                                </View>
                              </View>
                            );
                          }}
                        </Pressable>
                      </View>
                    </View>
                  );
                })}

                {/* Chapter Completion Milestone Trophy */}
                <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 16 }}>
                  <View
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 36,
                      backgroundColor: theme.accentSecondarySubtle,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 8,
                    }}>
                    <Ionicons name="trophy" size={32} color={theme.accentSecondary} />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: theme.accentSecondary,
                      marginBottom: 2,
                    }}>
                    Chapter Completion
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 14,
                      color: theme.textPrimary,
                    }}>
                    Foundations Milestone
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Selected Lesson Launchpad Modal (Level 3 Overlay) */}
      <Modal
        visible={selectedLesson !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedLesson(null)}>
        <Pressable
          onPress={() => setSelectedLesson(null)}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
          }}>
          {selectedLesson && (
            <Pressable
              onPress={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: 400,
                borderRadius: 32,
                backgroundColor: theme.surfaceOverlay,
                padding: 24,
              }}>
              {(() => {
                const chapter = chapters.find((c) => c.id === selectedLesson.chapterId);
                const lesson = chapter?.lessons.find(
                  (l) => l.darsNumber === selectedLesson.darsNum
                );
                const firstChunk = lesson?.chunks?.[0];
                const darsNum = selectedLesson.darsNum;
                const isCompleted = isLessonCompleted(selectedLesson.chapterId, darsNum);
                const session = getLessonSession(volumeId, selectedLesson.chapterId, darsNum);
                const stepCount = session?.steps?.length || 10;
                const estMinutes = Math.max(2, Math.ceil((stepCount * 20) / 60));

                const meta = (chapter?.id === 1
                  ? CHAPTER_1_LESSONS_INFO[darsNum]
                  : chapter?.id === 2
                    ? CHAPTER_2_LESSONS_INFO[darsNum]
                    : chapter?.id === 3
                      ? CHAPTER_3_LESSONS_INFO[darsNum]
                      : null) || {
                  titleEn: firstChunk?.titleEn || `Lesson ${darsNum}`,
                  arabicTopic: firstChunk?.titleAr || `الدرس ${toArabicNumerals(darsNum)}`,
                  conceptEn: chapter?.subtitle || 'Classical Arabic interactive drill',
                };

                return (
                  <View style={{ width: '100%' }}>
                    {/* Top Modal Header */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                      }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: theme.accentPrimary,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 16,
                              color: '#FFFFFF',
                            }}>
                            {darsNum}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 14,
                              color: theme.textPrimary,
                            }}>
                            Lesson {darsNum}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 12,
                              color: theme.textMuted,
                            }}>
                            {isCompleted ? 'Completed' : 'Available'}
                          </Text>
                        </View>
                      </View>

                      <Pressable
                        onPress={() => setSelectedLesson(null)}
                        style={({ pressed }) => ({
                          width: 32,
                          height: 32,
                          borderRadius: 16,
                          backgroundColor: pressed
                            ? theme.isDark
                              ? theme.neutral[700]
                              : theme.neutral[200]
                            : theme.surfaceWell,
                          alignItems: 'center',
                          justifyContent: 'center',
                        })}>
                        <Ionicons name="close" size={18} color={theme.textMuted} />
                      </Pressable>
                    </View>

                    {/* Topic Discovery Surface */}
                    <View
                      style={{
                        width: '100%',
                        borderRadius: 24,
                        backgroundColor: theme.surfaceWell,
                        padding: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 32,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 6,
                        }}>
                        {meta.arabicTopic}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 4,
                        }}>
                        {meta.titleEn}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_400Regular',
                          fontSize: 13,
                          color: theme.textSecondary,
                          textAlign: 'center',
                        }}>
                        {meta.conceptEn}
                      </Text>
                    </View>

                    {/* Lightweight Stats */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 16,
                        marginBottom: 20,
                      }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Ionicons name="sparkles" size={14} color={theme.accentSecondary} />
                        <Text
                          style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 12,
                            color: theme.textSecondary,
                          }}>
                          {stepCount} interactive steps
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: theme.neutral[400],
                        }}
                      />
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Ionicons name="time-outline" size={14} color={theme.textMuted} />
                        <Text
                          style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 12,
                            color: theme.textSecondary,
                          }}>
                          ~{estMinutes} min
                        </Text>
                      </View>
                    </View>

                    {/* 56px Action Button */}
                    <Pressable
                      onPress={() => {
                        playTapSound();
                        const target = selectedLesson;
                        setSelectedLesson(null);
                        navigation.navigate('Lesson', {
                          volumeNumber: volumeId,
                          chapterId: target.chapterId,
                          chapterTitleAr: chapter?.titleAr || '',
                          chapterTitleEn: chapter?.titleEn || '',
                          darsNumber: target.darsNum,
                          autoStart: true,
                        });
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        {isCompleted ? 'Practice Again' : 'Start Lesson'}
                      </Text>
                      <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                    </Pressable>
                  </View>
                );
              })()}
            </Pressable>
          )}
        </Pressable>
      </Modal>
    </View>
  );
};
