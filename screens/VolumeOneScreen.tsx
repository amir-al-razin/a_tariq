import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

import type { HomeStackParamList } from './HomeNavigator';

import { CHAPTERS, ChapterData } from '../data/curriculum';
import { ChapterBanner } from '../components/LearningPath/ChapterBanner';
import { LessonNode } from '../components/LearningPath/LessonNode';
import { neutral, vol1 } from '../theme/colors';

// ─────────────────────────────────────────────
// Types & data
// ─────────────────────────────────────────────

type LessonStatus = 'completed' | 'current' | 'open' | 'locked';
type Nav = NativeStackNavigationProp<HomeStackParamList, 'VolumeOne'>;

// Numbering resets to 1 for every chapter
const getLessonStatus = (darsNum: number, chapterId: number): LessonStatus => {
  if (chapterId === 1 && darsNum === 1) return 'current';
  return 'open'; // Unlocked all for testing/development
};

// ─────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────

const NODE_SIZE = 72; // diameter of the circular node button
const V_SPACING = 28; // vertical gap between nodes (marginBottom)
const H_PAD = 16; // left/right inset of the winding track

// Horizontal wave: 0 = far left, 1 = far right
const WAVE = [0.27, 0.4, 0.56, 0.73, 0.56, 0.4] as const;

// ─────────────────────────────────────────────
// Lesson node row
//
// FIX: Use TouchableOpacity (not Pressable with function style).
//      The visual circle lives in an INNER View — separate from the
//      touch handler — so styles always render on Android.
//
// LAYOUT: Each row uses paddingLeft/paddingRight to push the
//         (circle + label) group to the correct horizontal position.
//         row-reverse flips the label to the left when node is on
//         the right half so nothing clips off-screen.
// ─────────────────────────────────────────────

type LessonRowProps = {
  darsNum: number;
  status: LessonStatus;
  waveX: number;
  trackWidth: number;
  isFirstInChapter: boolean;
  entryDelay: number;
  isDark: boolean;
  onPress: () => void;
};

const LessonRow: React.FC<LessonRowProps> = ({
  darsNum,
  status,
  waveX,
  trackWidth,
  isFirstInChapter,
  entryDelay,
  isDark,
  onPress,
}) => {
  const { t } = useTranslation();
  const usable = trackWidth - 2 * H_PAD;
  const nodeLeft = Math.round(H_PAD + waveX * usable - NODE_SIZE / 2);
  const nodeRight = trackWidth - nodeLeft - NODE_SIZE;

  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';
  const isLocked = status === 'locked';

  // Label to right when node is in left half, label to left otherwise
  const labelOnRight = waveX <= 0.5;

  // Node visual styles (Dark mode compatible)
  const circleBg =
    isCurrent || isCompleted
      ? vol1[500]
      : isLocked
        ? isDark
          ? neutral[700]
          : neutral[300]
        : isDark
          ? vol1[800]
          : vol1[100];

  const circleBorder =
    isCurrent || isCompleted
      ? isDark
        ? vol1[700]
        : vol1[600]
      : isLocked
        ? isDark
          ? neutral[900]
          : neutral[500]
        : isDark
          ? vol1[900]
          : vol1[200];

  const iconColor =
    isCurrent || isCompleted
      ? '#fff'
      : isLocked
        ? isDark
          ? neutral[600]
          : neutral[700]
        : isDark
          ? vol1[300]
          : vol1[600];

  const labelColor = isCurrent
    ? isDark
      ? vol1[300]
      : vol1[700]
    : isLocked
      ? isDark
        ? neutral[600]
        : neutral[500]
      : isDark
        ? neutral[400]
        : neutral[600];

  return (
    <View style={{ marginBottom: V_SPACING }}>
      {/* "Start Here" badge removed for minimalism */}

      {/* Row: padding shifts the (circle + label) group horizontally */}
      <View
        style={{
          flexDirection: labelOnRight ? 'row' : 'row-reverse',
          alignItems: 'center',
          paddingLeft: labelOnRight ? nodeLeft : 0,
          paddingRight: !labelOnRight ? nodeRight : 0,
        }}>
        {/*
          TouchableOpacity wraps an inner View that carries ALL visual styles.
          This is the reliable pattern for Android — visual styles never go
          on the touch handler itself.
        */}
        <LessonNode
          number={darsNum}
          status={status}
          isDark={isDark}
          faceColor={circleBg}
          shadowColor={circleBorder}
          textColor={iconColor}
          entryDelay={entryDelay}
          onPress={onPress}
        />

        {/* Label sits next to the circle */}
        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: labelColor }}>
            {t('lesson.dars', { number: darsNum })}
          </Text>
          {isCurrent && (
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 12,
                color: isDark ? vol1[400] : vol1[500],
                marginTop: 2,
              }}>
              {t('lesson.inProgress')}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

// ─────────────────────────────────────────────
// Screen
// ─────────────────────────────────────────────

export const VolumeOneScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<Nav>();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  const goToLesson = (chapter: ChapterData, darsNum: number) =>
    navigation.navigate('Lesson', {
      volumeNumber: 1,
      chapterId: chapter.id,
      chapterTitleAr: chapter.titleAr,
      chapterTitleEn: chapter.titleEn,
      darsNumber: darsNum,
    });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? neutral[900] : neutral[50] }}
      contentContainerStyle={{ paddingTop: 28, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}>
      {/* Volume header */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 28,
                lineHeight: 34,
                color: isDark ? vol1[100] : vol1[700],
              }}>
              {t('volume.vol1Title')}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 14,
                color: isDark ? neutral[400] : neutral[600],
                marginTop: 4,
              }}>
              {t('volume.vol1Meta')}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 22,
              color: isDark ? vol1[300] : vol1[700],
              textAlign: 'right',
            }}>
            الجزء الأول
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: isDark ? neutral[700] : neutral[200],
            marginTop: 16,
          }}
        />
      </View>

      {/* Chapters */}
      {CHAPTERS.map((chapter, chapterIdx) => {
        const lessons = chapter.lessons.map((lesson) => ({
          num: lesson.darsNumber,
          status: getLessonStatus(lesson.darsNumber, chapter.id),
        }));

        return (
          <View key={chapter.id}>
            <ChapterBanner
              chapterId={chapter.id}
              lessonCount={chapter.lessons.length}
              titleEn={chapter.titleEn}
              titleAr={chapter.titleAr}
              subtitleI18nKey={`vol1chapters.${chapter.id}subtitle`}
              isDark={isDark}
              accentColor={isDark ? vol1[400] : vol1[600]}
            />

            {/* Path nodes — top padding gives room for the "Start Here" badge */}
            <View style={{ paddingTop: 24, paddingBottom: 12 }}>
              {lessons.map(({ num, status }, idx) => (
                <LessonRow
                  key={num}
                  darsNum={num}
                  status={status}
                  waveX={WAVE[idx % WAVE.length]}
                  trackWidth={width}
                  isFirstInChapter={idx === 0}
                  entryDelay={idx * 40}
                  isDark={isDark}
                  onPress={() => goToLesson(chapter, num)}
                />
              ))}
            </View>

            {chapterIdx < CHAPTERS.length - 1 && (
              <View
                style={{
                  height: 1,
                  backgroundColor: isDark ? neutral[700] : neutral[200],
                  marginHorizontal: 32,
                  marginBottom: 8,
                }}
              />
            )}
          </View>
        );
      })}

      {/* Completion banner */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 16,
          backgroundColor: isDark ? neutral[800] : neutral[100],
        }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32 }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: isDark ? `${vol1[600]}20` : `${vol1[500]}20`,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
            <Ionicons name="trophy-outline" size={24} color={isDark ? vol1[400] : vol1[600]} />
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 18,
              color: isDark ? neutral[100] : neutral[900],
            }}>
            تم الجزء الثاني بفضل الله
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: isDark ? neutral[400] : neutral[600],
              marginTop: 8,
              textAlign: 'center',
            }}>
            {t('volume.endOfPart', { number: 1 })}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
