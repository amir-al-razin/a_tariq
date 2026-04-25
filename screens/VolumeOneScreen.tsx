import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import { useColorScheme } from 'nativewind';
import { ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import type { HomeStackParamList } from './HomeNavigator';

// ─────────────────────────────────────────────
// Design-system colours (from tailwind.config.js)
// ─────────────────────────────────────────────

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
  neutral700: '#645C4E',
  neutral800: '#4F4A40',
  neutral900: '#3E3A33',
};

// ─────────────────────────────────────────────
// Types & data
// ─────────────────────────────────────────────

type LessonStatus = 'completed' | 'current' | 'open' | 'locked';
type Nav = NativeStackNavigationProp<HomeStackParamList, 'VolumeOne'>;

type ChapterData = {
  id: number;
  titleAr: string;
  titleEn: string;
  subtitle: string;
  lessonsCount: number;
};

const CHAPTERS: ChapterData[] = [
  { id: 1, titleAr: 'الباب الأول', titleEn: 'Chapter One', subtitle: 'Beginner-friendly foundations', lessonsCount: 9 },
  { id: 2, titleAr: 'الباب الثاني', titleEn: 'Chapter Two', subtitle: 'Core lesson expansion', lessonsCount: 8 },
  { id: 3, titleAr: 'الباب الثالث', titleEn: 'Chapter Three', subtitle: 'Completion lessons', lessonsCount: 3 },
];

// Numbering resets to 1 for every chapter
const getLessonStatus = (darsNum: number, chapterId: number): LessonStatus => {
  if (chapterId === 1 && darsNum === 1) return 'current';
  return 'locked';
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

const BANNER_COLORS = [C.primary500, C.primary600, C.primary700];

const ChapterBanner: React.FC<{ chapter: ChapterData; idx: number; isDark: boolean }> = ({ chapter, idx, isDark }) => {
  const accentColor = BANNER_COLORS[idx] ?? C.primary500;

  return (
    <View style={{
      marginHorizontal: 16,
      marginTop: 20,
      marginBottom: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDark ? C.primary800 : C.primary200,
      backgroundColor: isDark ? `${C.primary900}80` : C.primary50, // 80 is 50% opacity in hex
      overflow: 'hidden',
    }}>
      {/* Accent strip */}
      <View style={{ height: 3, backgroundColor: accentColor }} />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 16 }}>
        {/* Left side */}
        <View style={{ flex: 1, paddingRight: 12 }}>
          {/* Pill */}
          <View style={{ alignSelf: 'flex-start', backgroundColor: accentColor, borderRadius: 100, paddingHorizontal: 12, paddingVertical: 4, marginBottom: 10 }}>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 12, color: '#fff' }}>
              Chapter {chapter.id}  ·  {chapter.lessonsCount} lessons
            </Text>
          </View>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 22, lineHeight: 28, color: isDark ? C.primary100 : C.primary800 }}>
            {chapter.titleEn}
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.primary300 : C.primary600, marginTop: 3 }}>
            {chapter.subtitle}
          </Text>
        </View>

        {/* Arabic title */}
        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.primary300 : C.primary700, textAlign: 'right' }}>
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
  const circleBg = isCurrent ? C.primary500
    : isCompleted ? (isDark ? C.primary500 : C.primary400)
      : isLocked ? (isDark ? C.neutral800 : C.neutral300)
        : (isDark ? `${C.primary900}80` : C.primary100);

  const circleBorder = isCurrent ? (isDark ? C.primary400 : C.primary300)
    : isCompleted ? (isDark ? C.primary500 : C.primary200)
      : isLocked ? (isDark ? C.neutral700 : C.neutral500)
        : (isDark ? C.primary700 : C.primary200);

  const iconColor = isCurrent || isCompleted ? '#fff'
    : isLocked ? (isDark ? C.neutral600 : C.neutral700)
      : C.primary600;

  const labelColor = isCurrent ? (isDark ? C.primary300 : C.primary700)
    : isLocked ? (isDark ? C.neutral600 : C.neutral500)
      : (isDark ? C.neutral400 : C.neutral600);

  return (
    <View style={{ marginBottom: V_SPACING }}>

      {/* "Start Here" pulsing badge */}
      {isCurrent && isFirstInChapter && (
        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ type: 'timing', duration: 700, loop: true, repeatReverse: true }}
          style={{
            flexDirection: 'row',
            paddingLeft: labelOnRight ? nodeLeft : 0,
            paddingRight: !labelOnRight ? nodeRight : 0,
            justifyContent: labelOnRight ? 'flex-start' : 'flex-end',
            marginBottom: 8,
          }}>
          <View style={{
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: isDark ? C.primary600 : C.primary400,
            backgroundColor: isDark ? `${C.primary900}E6` : C.primary100, // E6 is 90% opacity
            paddingHorizontal: 12,
            paddingVertical: 5,
          }}>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 12, color: isDark ? C.primary200 : C.primary700 }}>
              ▶  Start Here
            </Text>
          </View>
        </MotiView>
      )}

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
        <TouchableOpacity
          onPress={isInteractive ? onPress : undefined}
          disabled={isLocked}
          activeOpacity={0.7}
          style={{ flexShrink: 0 }}>
          {/* MotiView handles entrance — inner element so TouchableOpacity stays unstyled */}
          <MotiView
            from={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: entryDelay, damping: 16, stiffness: 180 }}
            style={{
              width: NODE_SIZE,
              height: NODE_SIZE,
              borderRadius: NODE_SIZE / 2,
              borderWidth: 3,
              borderColor: circleBorder,
              backgroundColor: circleBg,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {isLocked ? (
              <Ionicons name="lock-closed" size={24} color={iconColor} />
            ) : isCompleted ? (
              <Ionicons name="checkmark" size={30} color={iconColor} />
            ) : (
              <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 24, color: '#fff', lineHeight: 30 }}>
                {darsNum}
              </Text>
            )}
          </MotiView>
        </TouchableOpacity>

        {/* Label sits next to the circle */}
        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: labelColor }}>
            Dars {darsNum}
          </Text>
          {isCurrent && (
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.primary400 : C.primary500, marginTop: 2 }}>
              In progress
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

  const goToLesson = (chapter: ChapterData, darsNum: number) =>
    navigation.navigate('Lesson', {
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
              Volume One
            </Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginTop: 4 }}>
              3 chapters · 20 lessons
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
        const lessons = Array.from({ length: chapter.lessonsCount }, (_, i) => ({
          num: i + 1,
          status: getLessonStatus(i + 1, chapter.id),
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
                  entryDelay={idx * 80}
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
        borderWidth: 1,
        borderColor: isDark ? C.primary800 : C.primary200,
        backgroundColor: isDark ? `${C.primary900}80` : C.primary50,
        overflow: 'hidden',
      }}>
        <View style={{ height: 3, backgroundColor: isDark ? C.primary600 : C.primary500 }} />
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 28 }}>
          <View style={{
            width: 60, height: 60, borderRadius: 30,
            borderWidth: 2, borderColor: isDark ? C.primary700 : C.primary300,
            backgroundColor: isDark ? `${C.primary900}99` : C.primary100,
            alignItems: 'center', justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Ionicons name="trophy" size={30} color={C.primary500} />
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.primary100 : C.primary700 }}>
            تم الجزء الأول بفضل الله
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.primary300 : C.primary600, marginTop: 8, textAlign: 'center' }}>
            End of Part One · by the grace of Allah
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
