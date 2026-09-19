import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3, getLessonSession } from '@tariq/shared';
import { useProgressStore, LESSON_KEY } from '../state/progressStore';
import { useRetentionStore } from '../state/retentionStore';
import { useLearningSettingsStore } from '../state/learningSettingsStore';
import { useThemeTokens } from '../theme/colors';
import { playTapSound } from '../lib/sound';
import { LessonSessionRunner } from '../components/runner/LessonSessionRunner';

type LessonScreenProps = {
  route: {
    params: {
      volumeNumber: number;
      chapterId: number;
      chapterTitleAr?: string;
      chapterTitleEn?: string;
      darsNumber: number;
      autoStart?: boolean;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params: any) => void;
  };
};

function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n
    .toString()
    .split('')
    .map((d) => digits[parseInt(d, 10)] || d)
    .join('');
}

export const LessonScreen: React.FC<LessonScreenProps> = ({ route, navigation }) => {
  const { volumeNumber = 1, chapterId, darsNumber, autoStart } = route.params;
  const theme = useThemeTokens();
  const [isRunningSession, setIsRunningSession] = useState(Boolean(autoStart));

  const progressStore = useProgressStore((state) => state.progress);
  const sessions = useRetentionStore((state) => state.sessions);
  const { showTransliteration, toggleTransliteration } = useLearningSettingsStore();

  const dataMap = {
    1: CHAPTERS,
    2: CHAPTERS_VOL2,
    3: CHAPTERS_VOL3,
  };

  const chapters = dataMap[volumeNumber as 1 | 2 | 3] || CHAPTERS;
  const chapter = useMemo(() => chapters.find((c) => c.id === chapterId), [chapters, chapterId]);
  const lesson = useMemo(
    () => chapter?.lessons.find((l) => l.darsNumber === darsNumber),
    [chapter, darsNumber]
  );
  const firstChunk = lesson?.chunks?.[0];

  const registeredSession = useMemo(() => {
    return getLessonSession(volumeNumber, chapterId, darsNumber);
  }, [volumeNumber, chapterId, darsNumber]);

  const isCompleted = useMemo(() => {
    const hasSession = sessions.some(
      (s) => s.volumeId === volumeNumber && s.chapterId === chapterId && s.lessonNum === darsNumber
    );
    if (hasSession) return true;
    return progressStore[LESSON_KEY(volumeNumber, chapterId, darsNumber)] === 'completed';
  }, [sessions, progressStore, volumeNumber, chapterId, darsNumber]);

  // If session is running, render the interactive runner!
  if (isRunningSession) {
    return (
      <LessonSessionRunner
        volumeId={volumeNumber}
        chapterId={chapterId}
        lessonNum={darsNumber}
        onExit={() => setIsRunningSession(false)}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      {/* Top Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 12,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="arrow-back" size={20} color={theme.textPrimary} />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 12 }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 16,
              color: theme.textPrimary,
            }}>
            Lesson {darsNumber} · {chapter?.titleEn || 'Curriculum'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={toggleTransliteration}
          accessibilityRole="button"
          accessibilityLabel="Toggle transliteration"
          style={{
            height: 36,
            paddingHorizontal: 12,
            borderRadius: 18,
            backgroundColor: showTransliteration ? theme.accentPrimarySubtle : theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 12,
              color: showTransliteration ? theme.accentPrimaryText : theme.textMuted,
            }}>
            {showTransliteration ? 'Aa ON' : 'Aa OFF'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Launch Stage Container */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 32,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            maxWidth: 420,
            borderRadius: 32,
            backgroundColor: theme.surfaceWell,
            padding: 32,
            alignItems: 'center',
          }}>
          {/* Central Commanding Lesson Node */}
          <View
            style={{
              width: 104,
              height: 104,
              borderRadius: 52,
              backgroundColor: isCompleted ? theme.accentPrimarySubtle : theme.accentPrimary,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
            }}>
            {isCompleted ? (
              <View style={{ alignItems: 'center' }}>
                <Ionicons name="checkmark" size={40} color={theme.accentPrimary} />
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 12,
                    color: theme.accentPrimary,
                    marginTop: 2,
                  }}>
                  {toArabicNumerals(darsNumber)}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  fontFamily: 'NotoSansArabic_600SemiBold',
                  fontSize: 48,
                  lineHeight: 60,
                  color: '#FFFFFF',
                }}>
                {toArabicNumerals(darsNumber)}
              </Text>
            )}
          </View>

          {/* Titles & Concepts */}
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: theme.accentPrimary,
              marginBottom: 6,
            }}>
            {isCompleted ? 'Mastered Lesson' : 'Interactive Session'}
          </Text>

          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 32,
              color: theme.textPrimary,
              textAlign: 'center',
              marginBottom: 6,
            }}>
            {registeredSession?.titleAr ||
              firstChunk?.titleAr ||
              `الدَّرْسُ ${toArabicNumerals(darsNumber)}`}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 18,
              color: theme.textSecondary,
              textAlign: 'center',
              marginBottom: 6,
            }}>
            {registeredSession?.titleEn || firstChunk?.titleEn || `Lesson ${darsNumber}`}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 13,
              color: theme.textMuted,
              textAlign: 'center',
              marginBottom: 24,
            }}>
            {registeredSession?.steps?.length || 10} Micro-Steps · 100% Mastery Drill
          </Text>

          {/* Words Preview Chips */}
          {registeredSession?.wordsLearned && registeredSession.wordsLearned.length > 0 && (
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 28 }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 11,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: theme.textMuted,
                  marginBottom: 10,
                }}>
                Key Vocabulary Covered
              </Text>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                {registeredSession.wordsLearned.slice(0, 6).map((word, idx) => (
                  <View
                    key={`word-${idx}`}
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 12,
                      backgroundColor: theme.surfaceRaised,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_500Medium',
                        fontSize: 14,
                        color: theme.textPrimary,
                      }}>
                      {word}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* 56px Action Button */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              playTapSound();
              setIsRunningSession(true);
            }}
            style={{
              width: '100%',
              height: 56,
              borderRadius: 9999,
              backgroundColor: theme.accentPrimary,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Ionicons name="play" size={18} color="#FFFFFF" />
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
              {isCompleted ? 'Practice Again' : 'Start Interactive Session'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
