import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

import { ChapterBanner } from '../components/LearningPath/ChapterBanner';
import { LessonNode } from '../components/LearningPath/LessonNode';
import { VOLUME_ACCENT, neutral, vol2 } from '../theme/colors';
import type { HomeStackParamList } from './HomeNavigator';

// ─────────────────────────────────────────────
// Volume 2 chapter structure
// ─────────────────────────────────────────────
const VOL2_CHAPTERS = [
  {
    id: 1,
    titleAr: 'الباب الأول',
    titleEn: 'Chapter One',
    subtitle: 'Applying verbs to build real Arabic sentences',
    lessonCount: 22,
  },
  {
    id: 2,
    titleAr: 'الباب الثاني',
    titleEn: 'Chapter Two',
    subtitle: 'Transitioning into conversational Arabic',
    lessonCount: 9,
  },
  {
    id: 3,
    titleAr: 'الباب الثالث',
    titleEn: 'Chapter Three',
    subtitle: 'Spiritual guidance for the sincere student',
    lessonCount: 3,
  },
] as const;

type LessonStatus = 'completed' | 'current' | 'open' | 'locked';
type Nav = NativeStackNavigationProp<HomeStackParamList, 'VolumeTwo'>;

const getLessonStatus = (darsNum: number, chapterId: number): LessonStatus => {
  if (chapterId === 1 && darsNum <= 22) return 'open'; // Ch1: all 22 lessons populated
  if (chapterId === 2 && darsNum <= 9) return 'open';  // Ch2: all 9 lessons populated
  if (chapterId === 3 && darsNum <= 3) return 'open';  // Ch3: all 3 lessons populated
  return 'locked';
};

// ─────────────────────────────────────────────
// Layout constants
// ─────────────────────────────────────────────
const NODE_SIZE = 72;
const V_SPACING = 28;
const H_PAD = 16;
const WAVE = [0.27, 0.40, 0.56, 0.73, 0.56, 0.40] as const;

// ─────────────────────────────────────────────
// Lesson node row
// ─────────────────────────────────────────────
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

  const isCurrent  = status === 'current';
  const isCompleted = status === 'completed';
  const isLocked   = status === 'locked';
  const labelOnRight = waveX <= 0.5;

  const circleBg = (isCurrent || isCompleted)
    ? vol2[500]
    : isLocked
      ? (isDark ? neutral[700] : neutral[300])
      : (isDark ? vol2[800] : vol2[100]);

  const circleBorder = (isCurrent || isCompleted)
    ? (isDark ? vol2[700] : vol2[600])
    : isLocked
      ? (isDark ? neutral[800] : neutral[500])
      : (isDark ? vol2[900] : vol2[200]);

  const iconColor = isCurrent || isCompleted
    ? '#fff'
    : isLocked
      ? (isDark ? neutral[600] : neutral[700])
      : (isDark ? vol2[300] : vol2[600]);

  const labelColor = isCurrent
    ? (isDark ? vol2[300] : vol2[700])
    : isLocked
      ? (isDark ? neutral[600] : neutral[500])
      : (isDark ? neutral[400] : neutral[600]);

  return (
    <View style={{ marginBottom: V_SPACING }}>
      <View style={{
        flexDirection: labelOnRight ? 'row' : 'row-reverse',
        alignItems: 'center',
        paddingLeft:  labelOnRight ? nodeLeft : 0,
        paddingRight: !labelOnRight ? nodeRight : 0,
      }}>
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

        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: labelColor }}>
            {t('lesson.dars', { number: darsNum })}
          </Text>
          {isCurrent && (
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? vol2[400] : vol2[500], marginTop: 2 }}>
              {t('lesson.comingSoon')}
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
export const VolumeTwoScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<Nav>();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isDark ? neutral[900] : neutral[50] }}
      contentContainerStyle={{ paddingTop: 28, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}>

      {/* Volume header */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 28, lineHeight: 34, color: isDark ? vol2[200] : vol2[700] }}>
              {t('volume.vol2Title')}
            </Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? neutral[400] : neutral[600], marginTop: 4 }}>
              {t('volume.vol2Meta')}
            </Text>
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 22, color: isDark ? vol2[300] : vol2[700], textAlign: 'right' }}>
            الجزء الثاني
          </Text>
        </View>
        <View style={{ height: 1, backgroundColor: isDark ? neutral[700] : neutral[200], marginTop: 16 }} />
      </View>

      {/* Chapters */}
      {VOL2_CHAPTERS.map((chapter, chapterIdx) => {
        const lessons = Array.from({ length: chapter.lessonCount }, (_, i) => ({
          num: i + 1,
          status: getLessonStatus(i + 1, chapter.id),
        }));

        return (
          <View key={chapter.id}>
            <ChapterBanner
              chapterId={chapter.id}
              lessonCount={chapter.lessonCount}
              titleEn={chapter.titleEn}
              titleAr={chapter.titleAr}
              subtitleI18nKey={`vol2chapters.${chapter.id}subtitle`}
              isDark={isDark}
              accentColor={isDark ? vol2[400] : vol2[600]}
            />

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
                  onPress={() => {
                    navigation.navigate('Lesson', {
                      volumeNumber: 2,
                      chapterId: chapter.id,
                      chapterTitleAr: chapter.titleAr,
                      chapterTitleEn: chapter.titleEn,
                      darsNumber: num,
                    });
                  }}
                />
              ))}
            </View>

            {chapterIdx < VOL2_CHAPTERS.length - 1 && (
              <View style={{ height: 1, backgroundColor: isDark ? neutral[700] : neutral[200], marginHorizontal: 32, marginBottom: 8 }} />
            )}
          </View>
        );
      })}

      {/* End banner */}
      <View style={{
        marginHorizontal: 20,
        marginTop: 24,
        borderRadius: 16,
        backgroundColor: isDark ? neutral[800] : neutral[100],
      }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32 }}>
          <View style={{
            width: 48, height: 48, borderRadius: 24,
            backgroundColor: isDark ? `${vol2[600]}20` : `${vol2[500]}20`,
            alignItems: 'center', justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Ionicons name="flash-outline" size={24} color={isDark ? vol2[400] : vol2[600]} />
          </View>
          <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? neutral[100] : neutral[900] }}>
            تم الجزء الثاني بفضل الله
          </Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? neutral[400] : neutral[600], marginTop: 8, textAlign: 'center' }}>
            {t('volume.endOfPart', { number: 2 })}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
