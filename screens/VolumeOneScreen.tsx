import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import type { HomeStackParamList } from './HomeNavigator';

// ─────────────────────────────────────────────
// Design-system colours (from tailwind.config.js)
// ─────────────────────────────────────────────

import { CHAPTERS, ChapterData } from '../data/curriculum';

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

const NODE_SIZE = 72;   // diameter of the circular node button
const V_SPACING = 28;   // vertical gap between nodes (marginBottom)
const H_PAD = 16;   // left/right inset of the winding track

// Horizontal wave: 0 = far left, 1 = far right
const WAVE = [0.27, 0.40, 0.56, 0.73, 0.56, 0.40] as const;

// ─────────────────────────────────────────────
// Chapter banner
// ─────────────────────────────────────────────

const ChapterBanner: React.FC<{ chapter: ChapterData; idx: number; isDark: boolean }> = ({ chapter, idx, isDark }) => {
  const { t } = useTranslation();
  return (
    <View style={{
      marginHorizontal: 16,
      marginTop: 20,
      marginBottom: 12,
      borderRadius: 16,
      backgroundColor: isDark ? C.neutral800 : C.neutral100,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }}>
        {/* Left side */}
        <View style={{ flex: 1, paddingRight: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: isDark ? C.primary400 : C.primary600, marginBottom: 6 }}>
            {t('volume.chapterMeta', { id: chapter.id, count: chapter.lessons.length })}
          </Text>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 20, lineHeight: 28, color: isDark ? C.neutral100 : C.neutral900 }}>
            {chapter.titleEn}
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral600, marginTop: 2 }}>
            {t(`vol1chapters.${chapter.id}subtitle`)}
          </Text>
        </View>

        {/* Arabic title */}
        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.neutral300 : C.neutral700, textAlign: 'right' }}>
          {chapter.titleAr}
        </Text>
      </View>
    </View>
  );
};

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
  darsNum, status, waveX, trackWidth, isFirstInChapter, entryDelay, isDark, onPress,
}) => {
  const { t } = useTranslation();
  const usable = trackWidth - 2 * H_PAD;
  const nodeLeft = Math.round(H_PAD + waveX * usable - NODE_SIZE / 2);
  const nodeRight = trackWidth - nodeLeft - NODE_SIZE;

  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';
  const isLocked = status === 'locked';
  const isInteractive = !isLocked;

  // Label to right when node is in left half, label to left otherwise
  const labelOnRight = waveX <= 0.5;

  // Node visual styles (Dark mode compatible)
  const circleBg = (isCurrent || isCompleted) ? C.primary500
    : isLocked ? (isDark ? C.neutral700 : C.neutral300)
      : (isDark ? C.primary800 : C.primary100);

  const circleBorder = (isCurrent || isCompleted) ? (isDark ? C.primary700 : C.primary600)
    : isLocked ? (isDark ? C.neutral900 : C.neutral500)
      : (isDark ? C.primary900 : C.primary200);

  const iconColor = isCurrent || isCompleted ? '#fff'
    : isLocked ? (isDark ? C.neutral600 : C.neutral700)
      : (isDark ? C.primary300 : C.primary600);

  const labelColor = isCurrent ? (isDark ? C.primary300 : C.primary700)
    : isLocked ? (isDark ? C.neutral600 : C.neutral500)
      : (isDark ? C.neutral400 : C.neutral600);

  return (
    <View style={{ marginBottom: V_SPACING }}>

      {/* "Start Here" badge removed for minimalism */}

      {/* Row: padding shifts the (circle + label) group horizontally */}
      <View style={{
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
        <MotiView
          from={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: entryDelay, damping: 20, stiffness: 250 }}
          style={{ flexShrink: 0 }}
        >
          <Pressable
            onPress={isInteractive ? onPress : undefined}
            disabled={isLocked}
            style={{ width: NODE_SIZE, height: NODE_SIZE + 6, justifyContent: 'flex-end' }}>
            {({ pressed }) => {
              const pushDepth = pressed && isInteractive ? 0 : -6;
              return (
                <View style={{ width: NODE_SIZE, height: NODE_SIZE + 6, justifyContent: 'flex-end' }}>
                  {/* Shadow Base Layer (True Cylinder Wall) */}
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: NODE_SIZE,
                    height: NODE_SIZE + (pressed && isInteractive ? 0 : 6),
                    borderRadius: NODE_SIZE / 2,
                    backgroundColor: circleBorder,
                  }} />

                  {/* Top Face Layer */}
                  <View style={{
                    width: NODE_SIZE,
                    height: NODE_SIZE,
                    borderRadius: NODE_SIZE / 2,
                    backgroundColor: circleBg,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{ translateY: pushDepth }],
                  }}>
                    {isLocked ? (
                      <Ionicons name="lock-closed" size={24} color={iconColor} />
                    ) : isCompleted ? (
                      <Ionicons name="checkmark" size={30} color={iconColor} />
                    ) : (
                      <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 24, color: iconColor, lineHeight: 30 }}>
                        {darsNum}
                      </Text>
                    )}
                  </View>
                </View>
              );
            }}
          </Pressable>
        </MotiView>

        {/* Label sits next to the circle */}
        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: labelColor }}>
            {t('lesson.dars', { number: darsNum })}
          </Text>
          {isCurrent && (
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.primary400 : C.primary500, marginTop: 2 }}>
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
      chapterId: chapter.id,
      chapterTitleAr: chapter.titleAr,
      chapterTitleEn: chapter.titleEn,
      darsNumber: darsNum,
    });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}
      contentContainerStyle={{ paddingTop: 28, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}>

      {/* Volume header */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 28, lineHeight: 34, color: isDark ? C.primary100 : C.primary700 }}>
              {t('volume.vol1Title')}
            </Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginTop: 4 }}>
              {t('volume.vol1Meta')}
            </Text>
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 22, color: isDark ? C.primary300 : C.primary700, textAlign: 'right' }}>
            الجزء الأول
          </Text>
        </View>
        <View style={{ height: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, marginTop: 16 }} />
      </View>

      {/* Chapters */}
      {CHAPTERS.map((chapter, chapterIdx) => {
        const lessons = chapter.lessons.map((lesson) => ({
          num: lesson.darsNumber,
          status: getLessonStatus(lesson.darsNumber, chapter.id),
        }));

        return (
          <View key={chapter.id}>
            <ChapterBanner chapter={chapter} idx={chapterIdx} isDark={isDark} />

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
              <View style={{ height: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, marginHorizontal: 32, marginBottom: 8 }} />
            )}
          </View>
        );
      })}

      {/* Completion banner */}
      <View style={{
        marginHorizontal: 20,
        marginTop: 24,
        borderRadius: 16,
        backgroundColor: isDark ? C.neutral800 : C.neutral100,
      }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32 }}>
          <View style={{
            width: 48, height: 48, borderRadius: 24,
            backgroundColor: isDark ? `${C.primary600}20` : `${C.primary500}20`,
            alignItems: 'center', justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Ionicons name="trophy-outline" size={24} color={isDark ? C.primary400 : C.primary600} />
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.neutral100 : C.neutral900 }}>
            {t('volume.vol1End')}
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginTop: 8, textAlign: 'center' }}>
            {t('volume.endOfPart', { number: 1 })}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
