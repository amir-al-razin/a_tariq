import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MasdarRow } from '@tariq/shared';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: {
        masdarRows?: MasdarRow[];
        baabLabel?: string;
        instruction?: string;
        instructionBn?: string;
    };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

// Column header config
const COLS = [
    { key: 'past', arLabel: 'مَاضٍ', labelKey: 'masdar.past' },
    { key: 'present', arLabel: 'مُضَارِع', labelKey: 'masdar.present' },
    { key: 'imperative', arLabel: 'أَمْر', labelKey: 'masdar.command' },
    { key: 'prohibitive', arLabel: 'نَهْي', labelKey: 'masdar.prohibit' },
] as const;

export const MasdarFactoryView: React.FC<Props> = ({
    isDark, C, payload, onProgress, onComplete,
}) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const rows: MasdarRow[] = payload?.masdarRows ?? [];

    // Scroll-based completion handled by ChunkEngineScreen
    useEffect(() => { onProgress(0); }, []);

    if (rows.length === 0) {
        const fallbackText = payload?.instruction;
        if (fallbackText) {
            return (
                <View style={{ width: '100%', paddingVertical: 8 }}>
                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.neutral100 : C.neutral800, textAlign: 'right', lineHeight: 32 }}>
                        {fallbackText}
                    </Text>
                </View>
            );
        }
        return null;
    }

    const border = isDark ? C.neutral700 : C.neutral200;
    const headerBg = isDark ? C.neutral700 : C.neutral200;
    const cellBg = isDark ? C.neutral800 : '#fff';
    const textMain = isDark ? C.neutral100 : C.neutral900;
    const textSub = isDark ? C.neutral400 : C.neutral500;
    const accentAr = isDark ? C.primary400 : C.primary700;

    return (
        <View style={{ width: '100%', gap: 20 }}>
            {/* Optional Baab label */}
            {payload?.baabLabel && (
                <View style={{
                    alignSelf: 'center',
                    backgroundColor: isDark ? `${C.primary800}40` : '#ECFDF8',
                    borderRadius: 10,
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: isDark ? C.primary800 : '#A7F3DE',
                }}>
                    <Text style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 16,
                        color: accentAr,
                        textAlign: 'center',
                    }}>
                        {payload.baabLabel}
                    </Text>
                </View>
            )}

            {/* Optional instruction */}
            {payload?.instruction && (
                <Text style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 13,
                    color: textSub,
                    textAlign: 'center',
                    fontStyle: 'italic',
                }}>
                    {t_content(payload.instruction, payload.instructionBn)}
                </Text>
            )}

            {/* Horizontally scrollable table */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 4 }}
            >
                <View style={{ gap: 0 }}>
                    {/* ── Column headers ── */}
                    <View style={{
                        flexDirection: 'row',
                        borderRadius: 10,
                        overflow: 'hidden',
                        borderWidth: 1,
                        borderColor: border,
                        marginBottom: 2,
                    }}>
                        {/* Masdar header cell */}
                        <View style={{
                            width: 110,
                            backgroundColor: headerBg,
                            padding: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRightWidth: 1,
                            borderRightColor: border,
                        }}>
                            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 13, color: accentAr }}>
                                مَصْدَر
                            </Text>
                            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 10, color: textSub }}>
                                {t('masdar.verbalNoun')}
                            </Text>
                        </View>

                        {/* Tense header cells */}
                        {COLS.map((col, ci) => (
                            <View key={col.key} style={{
                                width: 90,
                                backgroundColor: headerBg,
                                padding: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRightWidth: ci < COLS.length - 1 ? 1 : 0,
                                borderRightColor: border,
                            }}>
                                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 13, color: textMain }}>
                                    {col.arLabel}
                                </Text>
                                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 10, color: textSub }}>
                                    {t(col.labelKey)}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* ── Data rows ── */}
                    {rows.map((row, ri) => (
                        <View
                            key={ri}
                            style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: border,
                                borderRadius: 10,
                                overflow: 'hidden',
                                marginBottom: ri < rows.length - 1 ? 6 : 0,
                            }}
                        >
                            {/* Masdar cell */}
                            <View style={{
                                width: 110,
                                backgroundColor: isDark ? `${C.primary800}30` : '#ECFDF8',
                                padding: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRightWidth: 1,
                                borderRightColor: border,
                                gap: 3,
                            }}>
                                <Text style={{
                                    fontFamily: 'NotoSansArabic_600SemiBold',
                                    fontSize: 16,
                                    color: accentAr,
                                    textAlign: 'center',
                                }}>
                                    {row.masdar}
                                </Text>
                                <Text style={{
                                    fontFamily: 'Lexend_400Regular',
                                    fontSize: 10,
                                    color: textSub,
                                    textAlign: 'center',
                                }}>
                                    {t_content(row.masdarEn, row.masdarBn)}
                                </Text>
                            </View>

                            {/* Derived form cells */}
                            {COLS.map((col, ci) => (
                                <View key={col.key} style={{
                                    width: 90,
                                    backgroundColor: cellBg,
                                    padding: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRightWidth: ci < COLS.length - 1 ? 1 : 0,
                                    borderRightColor: border,
                                }}>
                                    <Text style={{
                                        fontFamily: 'NotoSansArabic_600SemiBold',
                                        fontSize: 16,
                                        color: textMain,
                                        textAlign: 'center',
                                    }}>
                                        {row[col.key]}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Legend */}
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginTop: 4,
            }}>
                {COLS.map(col => (
                    <View key={col.key} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 11, color: accentAr }}>
                            {col.arLabel}
                        </Text>
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 11, color: textSub }}>
                            = {t(col.labelKey)}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};
