import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

type Props = {
  chapterId: number;
  lessonCount: number;
  titleEn: string;
  titleAr: string;
  subtitleI18nKey: string; // e.g. 'vol1chapters.1subtitle'
  isDark: boolean;
  accentColor: string;    // e.g. '#0F9373'
};

export const ChapterBanner: React.FC<Props> = ({
  chapterId, lessonCount, titleEn, titleAr,
  subtitleI18nKey, isDark, accentColor,
}) => {
  const { t } = useTranslation();
  const bg   = isDark ? '#22201B' : '#F0EEE8';
  const text = isDark ? '#F0EEE8' : '#1A1815';
  const sub  = isDark ? '#B9AF9C' : '#7D7463';
  return (
    <View style={{ marginHorizontal: 16, marginTop: 20, marginBottom: 12,
      borderRadius: 16, backgroundColor: bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }}>
        <View style={{ flex: 1, paddingRight: 12 }}>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13,
            color: accentColor, marginBottom: 6 }}>
            {t('volume.chapterMeta', { id: chapterId, count: lessonCount })}
          </Text>
          <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 20,
            lineHeight: 28, color: text }}>{titleEn}</Text>
          <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13,
            color: sub, marginTop: 2 }}>{t(subtitleI18nKey)}</Text>
        </View>
        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20,
          color: sub, textAlign: 'right' }}>{titleAr}</Text>
      </View>
    </View>
  );
};
