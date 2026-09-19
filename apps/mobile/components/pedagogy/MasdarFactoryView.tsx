import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MasdarRow } from '@tariq/shared';

export interface MasdarPayload {
  masdarRows?: MasdarRow[];
  rows?: MasdarRow[];
  masdarColumnOverrides?: {
    imperativeAr?: string;
    imperativeEn?: string;
    prohibitiveAr?: string;
    prohibitiveEn?: string;
  };
  baabLabel?: string;
  instruction?: string;
  instructionBn?: string;
}

type Props = {
  isDark: boolean;
  C: any;
  payload?: MasdarPayload;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

const getCols = (overrides?: MasdarPayload['masdarColumnOverrides'], t?: any) => [
  { key: 'past' as const, arLabel: 'مَاضٍ', labelKey: t?.('masdar.past') ?? 'Past' },
  { key: 'present' as const, arLabel: 'مُضَارِع', labelKey: t?.('masdar.present') ?? 'Present' },
  {
    key: 'imperative' as const,
    arLabel: overrides?.imperativeAr ?? 'أَمْر',
    labelKey: overrides?.imperativeEn ?? t?.('masdar.command') ?? 'Command',
  },
  {
    key: 'prohibitive' as const,
    arLabel: overrides?.prohibitiveAr ?? 'نَهْي',
    labelKey: overrides?.prohibitiveEn ?? t?.('masdar.prohibit') ?? 'Prohibition',
  },
];

export const MasdarFactoryView: React.FC<Props> = ({
  isDark,
  C,
  payload,
  onProgress,
  onComplete,
}) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();

  const rows: MasdarRow[] = payload?.masdarRows ?? payload?.rows ?? [];
  const COLS = getCols(payload?.masdarColumnOverrides, t);

  useEffect(() => {
    onProgress?.(1);
    onComplete?.();
  }, [onProgress, onComplete]);

  if (rows.length === 0) {
    const fallbackText = payload?.instruction;
    if (fallbackText) {
      return (
        <View
          style={{
            width: '100%',
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 24,
          }}>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 20,
              color: isDark ? C.neutral100 : C.neutral900,
              textAlign: 'right',
              writingDirection: 'rtl',
              lineHeight: 34,
            }}>
            {fallbackText}
          </Text>
        </View>
      );
    }
    return (
      <View style={{ width: '100%', padding: 24, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Lexend_400Regular', color: C.neutral400, fontSize: 14 }}>
          {t('masdar.noData') ?? 'No data available'}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ width: '100%', gap: 18 }}>
      {/* Optional Baab label - tone-on-tone pill */}
      {payload?.baabLabel && (
        <View
          style={{
            alignSelf: 'center',
            borderRadius: 9999,
            backgroundColor: isDark ? C.neutral800 : C.neutral200,
            paddingHorizontal: 20,
            paddingVertical: 8,
          }}>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 16,
              color: isDark ? '#FFFFFF' : '#0A0A0A',
              textAlign: 'center',
              writingDirection: 'rtl',
            }}>
            {payload.baabLabel}
          </Text>
        </View>
      )}

      {/* Optional instruction */}
      {payload?.instruction && (
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 13,
            color: isDark ? C.neutral400 : C.neutral500,
            textAlign: 'center',
            fontStyle: 'italic',
          }}>
          {t_content(payload.instruction, payload.instructionBn)}
        </Text>
      )}

      {/* Horizontally scrollable borderless grid table */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 4 }}>
        <View style={{ gap: 10 }}>
          {/* Header Row */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {/* Masdar header cell */}
            <View
              style={{
                width: 120,
                borderRadius: 20,
                backgroundColor: isDark ? C.neutral800 : C.neutral200,
                paddingVertical: 12,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}>
              <Text
                style={{
                  fontFamily: 'NotoSansArabic_600SemiBold',
                  fontSize: 16,
                  color: isDark ? '#FFFFFF' : '#0A0A0A',
                  writingDirection: 'rtl',
                }}>
                مَصْدَر
              </Text>
              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 10,
                  color: isDark ? C.neutral400 : C.neutral500,
                  textTransform: 'uppercase',
                }}>
                {t('masdar.verbalNoun') ?? 'Verbal Noun'}
              </Text>
            </View>

            {/* Derived column headers */}
            {COLS.map((col) => (
              <View
                key={col.key}
                style={{
                  minWidth: 105,
                  borderRadius: 20,
                  backgroundColor: isDark ? C.neutral800 : C.neutral200,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 16,
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    writingDirection: 'rtl',
                  }}>
                  {col.arLabel}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 10,
                    color: isDark ? C.neutral400 : C.neutral500,
                    textTransform: 'uppercase',
                  }}>
                  {col.labelKey}
                </Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {rows.map((row, ri) => (
            <View key={ri} style={{ flexDirection: 'row', gap: 10 }}>
              {/* Masdar cell */}
              <View
                style={{
                  width: 120,
                  borderRadius: 20,
                  backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : C.neutral200,
                  paddingVertical: 14,
                  paddingHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 18,
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    textAlign: 'center',
                    writingDirection: 'rtl',
                  }}>
                  {row.masdar}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 11,
                    color: isDark ? C.neutral400 : C.neutral500,
                    textAlign: 'center',
                  }}>
                  {t_content(row.masdarEn, row.masdarBn)}
                </Text>
              </View>

              {/* Form cells */}
              {COLS.map((col) => {
                const val = (row as any)[col.key] as string | undefined;
                return (
                  <View
                    key={col.key}
                    style={{
                      minWidth: 105,
                      borderRadius: 20,
                      backgroundColor: isDark ? '#141414' : '#FFFFFF',
                      paddingVertical: 14,
                      paddingHorizontal: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 18,
                        color: isDark ? C.neutral100 : C.neutral900,
                        textAlign: 'center',
                        writingDirection: 'rtl',
                        lineHeight: 26,
                      }}>
                      {val || '-'}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Legend */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          paddingTop: 6,
        }}>
        {COLS.map((col) => (
          <View key={col.key} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text
              style={{
                fontFamily: 'NotoSansArabic_600SemiBold',
                fontSize: 13,
                color: isDark ? C.neutral300 : C.neutral700,
                writingDirection: 'rtl',
              }}>
              {col.arLabel}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 11,
                color: isDark ? C.neutral500 : C.neutral400,
              }}>
              = {col.labelKey}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
