import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';

import type { HomeStackParamList } from './HomeNavigator';

// ─────────────────────────────────────────────
// Volume 3 colour palette — Violet / Indigo
// Signals mastery, advanced grammar, Quranic immersion
// ─────────────────────────────────────────────
const C = {
  accent50:  '#F5F3FF',
  accent100: '#EDE9FE',
  accent200: '#DDD6FE',
  accent300: '#C4B5FD',
  accent400: '#A78BFA',
  accent500: '#8B5CF6',
  accent600: '#7C3AED',
  accent700: '#6D28D9',
  accent800: '#5B21B6',
  accent900: '#4C1D95',
  neutral50:  '#F8F7F4',
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

const VOL3_CHAPTERS = [
  {
    id: 1,
    titleAr: 'الباب الأول',
    titleEn: 'Chapter One',
    subtitle: 'Plural verb forms for groups — masculine & feminine',
    lessonCount: 9,
  },
  {
    id: 2,
    titleAr: 'الباب الثاني',
    titleEn: 'Chapter Two',
    subtitle: 'Irregular verbs & verbal nouns (Masdars)',
    lessonCount: 8,
  },
  {
    id: 3,
    titleAr: 'الباب الثالث',
    titleEn: 'Chapter Three',
    subtitle: 'Numerals, comparatives & advanced verb families',
    lessonCount: 7,
  },
  {
    id: 4,
    titleAr: 'الباب الرابع',
    titleEn: 'Chapter Four',
    subtitle: 'Quranic & Hadith readings — direct Arabic immersion',
    lessonCount: 2,
  },
] as const;

type LessonStatus = 'completed' | 'current' | 'open' | 'locked';
type Nav = NativeStackNavigationProp<HomeStackParamList, 'VolumeThree'>;

const getLessonStatus = (_darsNum: number, _chapterId: number): LessonStatus => 'locked';

const NODE_SIZE = 72;
const V_SPACING = 28;
const H_PAD = 16;
const WAVE = [0.27, 0.40, 0.56, 0.73, 0.56, 0.40] as const;

type ChapterInfo = typeof VOL3_CHAPTERS[number];

const ChapterBanner: React.FC<{ chapter: ChapterInfo; isDark: boolean }> = ({ chapter, isDark }) => {
  const { t } = useTranslation();
  return (
    <View style={{ marginHorizontal: 16, marginTop: 20, marginBottom: 12, borderRadius: 16, backgroundColor: isDark ? C.neutral800 : C.neutral100 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }}>
        <View style={{ flex: 1, paddingRight: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: isDark ? C.accent400 : C.accent600, marginBottom: 6 }}>
            {t('volume.chapterMeta', { id: chapter.id, count: chapter.lessonCount })}
          </Text>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 20, lineHeight: 28, color: isDark ? C.neutral100 : C.neutral900 }}>
            {chapter.titleEn}
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral600, marginTop: 2 }}>
            {t(`vol3chapters.${chapter.id}subtitle`)}
          </Text>
        </View>
        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.neutral300 : C.neutral700, textAlign: 'right' }}>
          {chapter.titleAr}
        </Text>
      </View>
    </View>
  );
};

type LessonRowProps = {
  darsNum: number;
  status: LessonStatus;
  waveX: number;
  trackWidth: number;
  entryDelay: number;
  isDark: boolean;
  onPress: () => void;
};

const LessonRow: React.FC<LessonRowProps> = ({
  darsNum, status, waveX, trackWidth, entryDelay, isDark, onPress,
}) => {
  const { t } = useTranslation();
  const usable = trackWidth - 2 * H_PAD;
  const nodeLeft = Math.round(H_PAD + waveX * usable - NODE_SIZE / 2);
  const nodeRight = trackWidth - nodeLeft - NODE_SIZE;

  const isCurrent   = status === 'current';
  const isCompleted = status === 'completed';
  const isLocked    = status === 'locked';
  const isInteractive = !isLocked;
  const labelOnRight  = waveX <= 0.5;

  const circleBg = (isCurrent || isCompleted)
    ? C.accent500
    : isLocked
      ? (isDark ? C.neutral700 : C.neutral300)
      : (isDark ? C.accent800 : C.accent100);

  const circleBorder = (isCurrent || isCompleted)
    ? (isDark ? C.accent700 : C.accent600)
    : isLocked
      ? (isDark ? C.neutral600 : C.neutral500)
      : (isDark ? C.accent900 : C.accent200);

  const iconColor = isCurrent || isCompleted
    ? '#fff'
    : isLocked
      ? (isDark ? C.neutral500 : C.neutral700)
      : (isDark ? C.accent300 : C.accent600);

  const labelColor = isCurrent
    ? (isDark ? C.accent300 : C.accent700)
    : isLocked
      ? (isDark ? C.neutral600 : C.neutral500)
      : (isDark ? C.neutral400 : C.neutral600);

  return (
    <View style={{ marginBottom: V_SPACING }}>
      <View style={{
        flexDirection: labelOnRight ? 'row' : 'row-reverse',
        alignItems: 'center',
        paddingLeft:  labelOnRight ? nodeLeft : 0,
        paddingRight: !labelOnRight ? nodeRight : 0,
      }}>
        <MotiView
          from={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: entryDelay, damping: 20, stiffness: 250 }}
          style={{ flexShrink: 0 }}>
          <Pressable
            onPress={isInteractive ? onPress : undefined}
            disabled={isLocked}
            style={{ width: NODE_SIZE, height: NODE_SIZE + 6, justifyContent: 'flex-end' }}>
            {({ pressed }) => {
              const pushDepth = pressed && isInteractive ? 0 : -6;
              return (
                <View style={{ width: NODE_SIZE, height: NODE_SIZE + 6, justifyContent: 'flex-end' }}>
                  <View style={{
                    position: 'absolute', bottom: 0,
                    width: NODE_SIZE,
                    height: NODE_SIZE + (pressed && isInteractive ? 0 : 6),
                    borderRadius: NODE_SIZE / 2,
                    backgroundColor: circleBorder,
                  }} />
                  <View style={{
                    width: NODE_SIZE, height: NODE_SIZE,
                    borderRadius: NODE_SIZE / 2,
                    backgroundColor: circleBg,
                    alignItems: 'center', justifyContent: 'center',
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

        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: labelColor }}>
            {t('lesson.dars', { number: darsNum })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const VolumeThreeScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}
      contentContainerStyle={{ paddingTop: 28, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}>

      {/* Volume header */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 28, lineHeight: 34, color: isDark ? C.accent200 : C.accent700 }}>
              {t('volume.vol3Title')}
            </Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginTop: 4 }}>
              {t('volume.vol3Meta')}
            </Text>
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 22, color: isDark ? C.accent300 : C.accent700, textAlign: 'right' }}>
            الجزء الثالث
          </Text>
        </View>
        <View style={{ height: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, marginTop: 16 }} />
      </View>

      {/* Chapters */}
      {VOL3_CHAPTERS.map((chapter, chapterIdx) => {
        const lessons = Array.from({ length: chapter.lessonCount }, (_, i) => ({
          num: i + 1,
          status: getLessonStatus(i + 1, chapter.id),
        }));

        return (
          <View key={chapter.id}>
            <ChapterBanner chapter={chapter} isDark={isDark} />
            <View style={{ paddingTop: 24, paddingBottom: 12 }}>
              {lessons.map(({ num, status }, idx) => (
                <LessonRow
                  key={num}
                  darsNum={num}
                  status={status}
                  waveX={WAVE[idx % WAVE.length]}
                  trackWidth={width}
                  entryDelay={idx * 30}
                  isDark={isDark}
                  onPress={() => {}}
                />
              ))}
            </View>
            {chapterIdx < VOL3_CHAPTERS.length - 1 && (
              <View style={{ height: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, marginHorizontal: 32, marginBottom: 8 }} />
            )}
          </View>
        );
      })}

      {/* End banner */}
      <View style={{ marginHorizontal: 20, marginTop: 24, borderRadius: 16, backgroundColor: isDark ? C.neutral800 : C.neutral100 }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32 }}>
          <View style={{
            width: 48, height: 48, borderRadius: 24,
            backgroundColor: isDark ? `${C.accent600}20` : `${C.accent500}20`,
            alignItems: 'center', justifyContent: 'center', marginBottom: 16,
          }}>
            <Ionicons name="star-outline" size={24} color={isDark ? C.accent400 : C.accent600} />
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.neutral100 : C.neutral900 }}>
            تم الجزء الثالث بفضل الله
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginTop: 8, textAlign: 'center' }}>
            {t('volume.endOfPart', { number: 3 })}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
