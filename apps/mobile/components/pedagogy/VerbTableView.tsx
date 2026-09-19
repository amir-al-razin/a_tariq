import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { VerbTableRow } from '@tariq/shared';

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

const getTenseLabel = (tense: string, t: any) => {
  switch (tense) {
    case 'past':
      return {
        label: t('verbTable.tense.past') ?? 'Past Tense',
        ar: 'الْمَاضِي',
      };
    case 'present':
      return {
        label: t('verbTable.tense.present') ?? 'Present Tense',
        ar: 'الْمُضَارِع',
      };
    case 'imperative':
      return {
        label: t('verbTable.tense.imperative') ?? 'Command & Prohibition',
        ar: 'الْأَمْرُ وَالنَّهْيُ',
      };
    default:
      return {
        label: t('verbTable.tense.past') ?? 'Past Tense',
        ar: 'الْمَاضِي',
      };
  }
};

const getColHeaders = (isPlural?: boolean, isDual?: boolean, t?: any) => {
  if (isDual) {
    return [
      { ar: 'هُمَا', label: (t?.('verbTable.pronoun.theyM') ?? 'They') + ' (Dual, M)' },
      { ar: 'هُمَا', label: (t?.('verbTable.pronoun.theyF') ?? 'They') + ' (Dual, F)' },
      { ar: 'أَنْتُمَا', label: (t?.('verbTable.pronoun.youM') ?? 'You') + ' (Dual, M)' },
      { ar: 'أَنْتُمَا', label: (t?.('verbTable.pronoun.youF') ?? 'You') + ' (Dual, F)' },
      { ar: 'نَحْنُ', label: t?.('verbTable.pronoun.we') ?? 'We' },
    ];
  }
  if (isPlural) {
    return [
      { ar: 'هُمْ', label: t?.('verbTable.pronoun.theyM') ?? 'They (M)' },
      { ar: 'هُنَّ', label: t?.('verbTable.pronoun.theyF') ?? 'They (F)' },
      { ar: 'أَنْتُمْ', label: t?.('verbTable.pronoun.youPluralM') ?? 'You All (M)' },
      { ar: 'أَنْتُنَّ', label: t?.('verbTable.pronoun.youPluralF') ?? 'You All (F)' },
      { ar: 'نَحْنُ', label: t?.('verbTable.pronoun.we') ?? 'We' },
    ];
  }
  return [
    { ar: 'هُوَ', label: t?.('verbTable.pronoun.he') ?? 'He' },
    { ar: 'هِيَ', label: t?.('verbTable.pronoun.she') ?? 'She' },
    { ar: 'أَنْتَ', label: t?.('verbTable.pronoun.youM') ?? 'You (M)' },
    { ar: 'أَنْتِ', label: t?.('verbTable.pronoun.youF') ?? 'You (F)' },
    { ar: 'أَنَا', label: t?.('verbTable.pronoun.i') ?? 'I' },
  ];
};

export const VerbTableView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();

  const rows: VerbTableRow[] = payload?.verbTable ?? payload?.verbs ?? [];
  const tense = payload?.verbTense ?? payload?.tense ?? 'past';
  const isDual = payload?.isDual ?? payload?.number === 'dual';
  const isPlural = payload?.isPlural ?? payload?.number === 'plural';

  const tenseLabel = getTenseLabel(tense, t);
  const COL_HEADERS = getColHeaders(isPlural, isDual, t);

  useEffect(() => {
    onProgress?.(1);
    onComplete?.();
  }, [onProgress, onComplete]);

  if (rows.length === 0) {
    const fallbackText = payload?.sourceText || payload?.text || payload?.instruction;
    if (fallbackText) {
      const lines = fallbackText.split('\n').filter((l: string) => l.trim().length > 0);
      return (
        <View style={{ width: '100%', gap: 16 }}>
          {payload?.instruction && (
            <View
              style={{
                borderRadius: 24,
                backgroundColor: isDark ? C.neutral900 : C.neutral100,
                padding: 16,
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 13,
                  color: isDark ? C.neutral300 : C.neutral700,
                  textAlign: 'center',
                }}>
                {t_content(payload.instruction, payload.instructionBn)}
              </Text>
            </View>
          )}

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ gap: 10 }}>
              {lines.map((line: string, idx: number) => {
                const parts = line
                  .split('-')
                  .map((p) => p.trim())
                  .filter(Boolean);
                return (
                  <View key={idx} style={{ flexDirection: 'row', gap: 10 }}>
                    {parts.map((part, pIdx) => (
                      <View
                        key={pIdx}
                        style={{
                          minWidth: 100,
                          borderRadius: 20,
                          backgroundColor: isDark ? C.neutral900 : C.neutral100,
                          paddingVertical: 14,
                          paddingHorizontal: 16,
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
                          }}>
                          {part}
                        </Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={{ width: '100%', padding: 24, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Lexend_400Regular', color: C.neutral400, fontSize: 14 }}>
          {t('verbTable.noData') ?? 'No data available'}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ width: '100%', gap: 18 }}>
      {/* Instruction block */}
      {payload?.instruction && (
        <View
          style={{
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 16,
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 13,
              color: isDark ? C.neutral300 : C.neutral700,
              textAlign: 'center',
            }}>
            {t_content(payload.instruction, payload.instructionBn)}
          </Text>
        </View>
      )}

      {/* Tense header */}
      <View style={{ alignItems: 'center', gap: 4 }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 24,
            color: isDark ? '#FFFFFF' : '#0A0A0A',
            textAlign: 'center',
            writingDirection: 'rtl',
          }}>
          {tenseLabel.ar}
        </Text>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 12,
            color: isDark ? C.neutral400 : C.neutral500,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          {tenseLabel.label}
        </Text>
      </View>

      {/* Borderless Tone-on-Tone Verb Table Scroll View */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 4 }}>
        <View style={{ gap: 10 }}>
          {/* Header Row */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {/* Root column header cell */}
            <View
              style={{
                width: 100,
                borderRadius: 20,
                backgroundColor: isDark ? C.neutral800 : C.neutral200,
                paddingVertical: 12,
                paddingHorizontal: 8,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 11,
                  color: isDark ? C.neutral300 : C.neutral700,
                  textTransform: 'uppercase',
                }}>
                {t('verbTable.root') ?? 'Root'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 10,
                  color: isDark ? C.neutral400 : C.neutral500,
                }}>
                {t('verbTable.meaning') ?? 'Meaning'}
              </Text>
            </View>

            {/* Conjugation column headers */}
            {COL_HEADERS.map((h, i) => (
              <View
                key={i}
                style={{
                  minWidth: 100,
                  borderRadius: 20,
                  backgroundColor: isDark ? C.neutral800 : C.neutral200,
                  paddingVertical: 12,
                  paddingHorizontal: 12,
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
                  {h.ar}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 10,
                    color: isDark ? C.neutral400 : C.neutral500,
                    textTransform: 'uppercase',
                  }}>
                  {h.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Table Data Rows */}
          {rows.map((row, idx) => {
            const forms =
              isDual || isPlural
                ? [row.theyM, row.theyF, row.youPluralM, row.youPluralF, row.we]
                : [row.he, row.she, row.youM, row.youF, row.i];

            return (
              <View key={idx} style={{ flexDirection: 'row', gap: 10 }}>
                {/* Root + meaning cell */}
                <View
                  style={{
                    width: 100,
                    borderRadius: 20,
                    backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : C.neutral200,
                    paddingVertical: 14,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'NotoSansArabic_600SemiBold',
                      fontSize: 18,
                      color: isDark ? '#FFFFFF' : '#0A0A0A',
                      writingDirection: 'rtl',
                    }}>
                    {row.root}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lexend_400Regular',
                      fontSize: 11,
                      color: isDark ? C.neutral400 : C.neutral500,
                      textAlign: 'center',
                    }}>
                    {t_content(row.meaning, row.meaningBn)}
                  </Text>
                </View>

                {/* Forms */}
                {forms.map((form, fIdx) => (
                  <View
                    key={fIdx}
                    style={{
                      minWidth: 100,
                      borderRadius: 20,
                      backgroundColor: isDark ? '#141414' : '#FFFFFF',
                      paddingVertical: 14,
                      paddingHorizontal: 12,
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
                      {form || '-'}
                    </Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
