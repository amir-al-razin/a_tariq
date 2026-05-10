import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

import { ChapterBanner } from '../components/LearningPath/ChapterBanner';
import { LessonNode } from '../components/LearningPath/LessonNode';
import { CHAPTERS_VOL3 } from '@tariq/shared';
import { neutral, vol3 } from '../theme/colors';
import type { HomeStackParamList } from './HomeNavigator';

type LessonStatus = 'completed' | 'current' | 'open' | 'locked';
type Nav = NativeStackNavigationProp<HomeStackParamList, 'VolumeThree'>;

const getLessonStatus = (darsNum: number, chapterId: number): LessonStatus => {
  if (chapterId === 1 && darsNum === 1) return 'current';
  return 'open';
};

const NODE_SIZE = 72;
const V_SPACING = 28;
const H_PAD = 16;
const WAVE = [0.27, 0.4, 0.56, 0.73, 0.56, 0.4] as const;

type ChapterInfo = (typeof CHAPTERS_VOL3)[number];

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
  darsNum,
  status,
  waveX,
  trackWidth,
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
  const labelOnRight = waveX <= 0.5;

  const circleBg =
    isCurrent || isCompleted
      ? vol3[500]
      : isLocked
        ? isDark
          ? neutral[700]
          : neutral[300]
        : isDark
          ? vol3[800]
          : vol3[100];

  const circleBorder =
    isCurrent || isCompleted
      ? isDark
        ? vol3[700]
        : vol3[600]
      : isLocked
        ? isDark
          ? neutral[600]
          : neutral[500]
        : isDark
          ? vol3[900]
          : vol3[200];

  const iconColor =
    isCurrent || isCompleted
      ? '#fff'
      : isLocked
        ? isDark
          ? neutral[500]
          : neutral[700]
        : isDark
          ? vol3[300]
          : vol3[600];

  const labelColor = isCurrent
    ? isDark
      ? vol3[300]
      : vol3[700]
    : isLocked
      ? isDark
        ? neutral[600]
        : neutral[500]
      : isDark
        ? neutral[400]
        : neutral[600];

  return (
    <View style={{ marginBottom: V_SPACING }}>
      <View
        style={{
          flexDirection: labelOnRight ? 'row' : 'row-reverse',
          alignItems: 'center',
          paddingLeft: labelOnRight ? nodeLeft : 0,
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
        </View>
      </View>
    </View>
  );
};

export const VolumeThreeScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<Nav>();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  const goToLesson = (chapter: ChapterInfo, darsNum: number) =>
    navigation.navigate('Lesson', {
      volumeNumber: 3,
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
                color: isDark ? vol3[200] : vol3[700],
              }}>
              {t('volume.vol3Title')}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 14,
                color: isDark ? neutral[400] : neutral[600],
                marginTop: 4,
              }}>
              {t('volume.vol3Meta')}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 22,
              color: isDark ? vol3[300] : vol3[700],
              textAlign: 'right',
            }}>
            الجزء الثالث
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
      {CHAPTERS_VOL3.map((chapter, chapterIdx) => {
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
              subtitleI18nKey={`vol3chapters.${chapter.id}subtitle`}
              isDark={isDark}
              accentColor={isDark ? vol3[400] : vol3[600]}
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
                  onPress={() => goToLesson(chapter, num)}
                />
              ))}
            </View>
            {chapterIdx < CHAPTERS_VOL3.length - 1 && (
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

      {/* End banner */}
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
              backgroundColor: isDark ? `${vol3[600]}20` : `${vol3[500]}20`,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
            <Ionicons name="star-outline" size={24} color={isDark ? vol3[400] : vol3[600]} />
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 18,
              color: isDark ? neutral[100] : neutral[900],
            }}>
            تم الجزء الثالث بفضل الله
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: isDark ? neutral[400] : neutral[600],
              marginTop: 8,
              textAlign: 'center',
            }}>
            {t('volume.endOfPart', { number: 3 })}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
