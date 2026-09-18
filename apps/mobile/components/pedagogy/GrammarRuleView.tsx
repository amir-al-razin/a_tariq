import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { GrammarRule } from '@tariq/shared';

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

export const GrammarRuleView: React.FC<Props> = ({ isDark, C, payload }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const rules: GrammarRule[] = payload?.rules || [];

  return (
    <View style={{ width: '100%' }}>
      {/* Header with circular 'i' badge */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 10 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: isDark ? C.neutral800 : C.neutral200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 14,
              color: isDark ? C.neutral100 : C.neutral900,
            }}>
            i
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 15,
            color: isDark ? C.neutral100 : C.neutral900,
          }}>
          {t('chunk.grammarFocus')}
        </Text>
      </View>

      {/* Rules stack */}
      <View style={{ gap: 20 }}>
        {rules.map((rule, i) => {
          const isFirst = i === 0;
          const labelText = rule.label ? rule.label.toUpperCase() : rule.labelBn || '';
          const cardBg = isFirst
            ? isDark
              ? C.neutral900
              : C.neutral200
            : isDark
              ? C.neutral900
              : C.neutral100;

          return (
            <View
              key={i}
              style={{
                borderRadius: 24,
                backgroundColor: cardBg,
                padding: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 11,
                  color: isDark ? C.neutral400 : C.neutral500,
                  marginBottom: 14,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                {labelText}
              </Text>

              {/* Center Raised Block (Tone-on-tone luminance depth) */}
              <View
                style={{
                  alignItems: 'center',
                  paddingVertical: 18,
                  paddingHorizontal: 16,
                  borderRadius: 24,
                  backgroundColor: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.65)',
                  gap: 6,
                }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 32,
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    textAlign: 'center',
                    writingDirection: 'rtl',
                    lineHeight: 48,
                  }}>
                  {rule.arabic}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 16,
                    color: isDark ? C.neutral200 : C.neutral800,
                    textAlign: 'center',
                  }}>
                  {rule.romanized}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 13,
                    color: isDark ? C.neutral400 : C.neutral500,
                    textAlign: 'center',
                  }}>
                  {t_content(rule.meaning, rule.meaningBn)}
                </Text>
              </View>

              {/* Example Sentences */}
              {rule.examples && rule.examples.length > 0 && (
                <View style={{ marginTop: 16, gap: 10 }}>
                  {rule.examples.map((ex, j) => (
                    <View
                      key={j}
                      style={{
                        borderRadius: 20,
                        backgroundColor: isDark ? 'rgba(20,20,20,0.6)' : 'rgba(255,255,255,0.5)',
                        padding: 14,
                        gap: 4,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 18,
                          color: isDark ? C.neutral100 : C.neutral900,
                          textAlign: 'right',
                          writingDirection: 'rtl',
                          lineHeight: 28,
                        }}>
                        {ex.ar}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_400Regular',
                          fontSize: 13,
                          color: isDark ? C.neutral400 : C.neutral600,
                          textAlign: 'left',
                        }}>
                        {t_content(ex.en, ex.bn)}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>

      <Text
        style={{
          fontFamily: 'Lexend_400Regular',
          fontSize: 13,
          color: isDark ? C.neutral400 : C.neutral500,
          textAlign: 'center',
          marginTop: 20,
          fontStyle: 'italic',
        }}>
        {t('chunk.studyThenContinue')}
      </Text>
    </View>
  );
};
