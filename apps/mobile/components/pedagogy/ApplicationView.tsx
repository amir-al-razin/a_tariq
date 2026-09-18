import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { ApplicationItem } from '@tariq/shared';

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

export const ApplicationView: React.FC<Props> = ({ isDark, C, payload }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const items: ApplicationItem[] = payload?.items || [];
  const instruction = payload?.instruction
    ? t_content(payload.instruction, payload.instructionBn)
    : t('chunk.reviewThenContinue');

  const renderFormattedArabic = (text: string, isLarge = false) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <Text
        style={{
          fontFamily: 'NotoSansArabic_600SemiBold',
          fontSize: isLarge ? 26 : 22,
          color: isDark ? '#FFFFFF' : '#0A0A0A',
          textAlign: 'right',
          writingDirection: 'rtl',
          lineHeight: isLarge ? 42 : 36,
        }}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <Text
                key={index}
                style={{
                  fontFamily: 'NotoSansArabic_600SemiBold',
                  color: isDark ? '#FFFFFF' : '#000000',
                  textDecorationLine: 'underline',
                }}>
                {part.slice(2, -2)}
              </Text>
            );
          }
          return <Text key={index}>{part}</Text>;
        })}
      </Text>
    );
  };

  if (items.length === 0 && (payload?.text || payload?.instruction)) {
    const fallback = payload?.text || payload?.instruction;
    return (
      <View
        style={{
          width: '100%',
          borderRadius: 24,
          backgroundColor: isDark ? C.neutral900 : C.neutral100,
          padding: 24,
          alignItems: 'center',
        }}>
        {renderFormattedArabic(fallback, true)}
      </View>
    );
  }

  return (
    <View style={{ width: '100%', alignItems: 'center', gap: 16 }}>
      {instruction ? (
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 13,
            color: isDark ? C.neutral400 : C.neutral500,
            textAlign: 'center',
            fontStyle: 'italic',
            paddingHorizontal: 8,
          }}>
          {instruction}
        </Text>
      ) : null}

      <View style={{ width: '100%', gap: 14 }}>
        {items.map((item, i) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              gap: 16,
              backgroundColor: isDark ? C.neutral900 : C.neutral100,
              padding: 16,
              borderRadius: 24,
            }}>
            {/* 64x64 Squircle for Emoji / Image */}
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                backgroundColor: isDark ? '#161616' : '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              {item.imageUrl ? (
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ width: 44, height: 44 }}
                  resizeMode="contain"
                />
              ) : item.emoji ? (
                <Text style={{ fontSize: 32 }}>{item.emoji}</Text>
              ) : null}
            </View>

            {/* Arabic and English / Bengali texts */}
            <View style={{ flex: 1, gap: 4 }}>
              {renderFormattedArabic(item.ar)}
              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 14,
                  color: isDark ? C.neutral400 : C.neutral600,
                  textAlign: 'left',
                }}>
                {t_content(item.en, item.bn)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Text
        style={{
          fontFamily: 'Lexend_400Regular',
          fontSize: 13,
          color: isDark ? C.neutral400 : C.neutral500,
          textAlign: 'center',
          marginTop: 10,
          fontStyle: 'italic',
        }}>
        {t('chunk.reviewThenContinue')}
      </Text>
    </View>
  );
};
