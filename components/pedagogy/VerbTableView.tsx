import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import { VerbTableRow } from '../../data/curriculum';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: { verbTable?: VerbTableRow[]; verbTense?: 'past' | 'present' | 'imperative'; instruction?: string };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

const TENSE_LABELS = {
    past: { labelKey: 'verbTable.tense.past', ar: 'الْمَاضِي' },
    present: { labelKey: 'verbTable.tense.present', ar: 'الْمُضَارِع' },
    imperative: { labelKey: 'verbTable.tense.imperative', ar: 'الْأَمْرُ وَالنَّهْيُ' },
};

const COL_HEADERS = [
    { ar: 'هُوَ', labelKey: 'verbTable.pronoun.he' },
    { ar: 'هِيَ', labelKey: 'verbTable.pronoun.she' },
    { ar: 'أَنْتَ', labelKey: 'verbTable.pronoun.youM' },
    { ar: 'أَنْتِ', labelKey: 'verbTable.pronoun.youF' },
    { ar: 'أَنَا', labelKey: 'verbTable.pronoun.i' },
];

export const VerbTableView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const rows = payload?.verbTable ?? [];
    const tense = payload?.verbTense ?? 'past';
    const tenseLabel = TENSE_LABELS[tense];

    useEffect(() => {
        onProgress(0);
    }, []);

    if (rows.length === 0) {
        const fallbackText = payload?.sourceText || payload?.text || payload?.instruction;
        if (fallbackText) {
            return (
                <View style={{ width: '100%', paddingVertical: 8 }}>
                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.neutral100 : C.neutral800, textAlign: 'right', lineHeight: 30 }}>
                        {fallbackText}
                    </Text>
                </View>
            );
        }
        return <Text style={{ color: isDark ? C.neutral400 : C.neutral500 }}>{t('verbTable.noData')}</Text>;
    }

    const cellBg = isDark ? C.neutral800 : '#fff';
    const headerBg = isDark ? C.neutral700 : C.neutral200;
    const border = isDark ? C.neutral700 : C.neutral200;
    const textMain = isDark ? C.neutral100 : C.neutral900;
    const textSub = isDark ? C.neutral400 : C.neutral500;

    return (
        <View style={{ width: '100%', gap: 16 }}>
            {/* Instruction note */}
            {payload?.instruction && (
                <View style={{ backgroundColor: isDark ? '#0D775F22' : '#D1FAF0', borderRadius: 8, padding: 10 }}>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                        {payload.instruction}
                    </Text>
                </View>
            )}

            {/* Tense header */}
            <View style={{ alignItems: 'center', marginBottom: 4 }}>
                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.primary400 : C.primary700 }}>
                    {tenseLabel.ar}
                </Text>
                <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: isDark ? C.neutral300 : C.neutral600 }}>
                    {t(tenseLabel.labelKey)}
                </Text>
            </View>

            {/* Verb Table Scrollable Container */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -24 }} contentContainerStyle={{ paddingHorizontal: 24 }}>
                <View style={{ gap: 16, paddingBottom: 8 }}>
                    {/* Column headers */}
                    <View style={{ flexDirection: 'row', borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: border }}>
                        {/* Root column header */}
                        <View style={{ width: 80, backgroundColor: headerBg, padding: 6, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: border }}>
                            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 10, color: textSub }}>{t('verbTable.root')}</Text>
                            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 9, color: textSub }}>{t('verbTable.meaning')}</Text>
                        </View>
                        {COL_HEADERS.map((h, i) => (
                            <View key={i} style={{ width: 85, backgroundColor: headerBg, padding: 4, alignItems: 'center', borderRightWidth: i < COL_HEADERS.length - 1 ? 1 : 0, borderRightColor: border }}>
                                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 14, color: textMain }}>{h.ar}</Text>
                                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 8, color: textSub }}>{t(h.labelKey)}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Rows */}
                    {rows.map((row, idx) => (
                        <View key={idx} style={{ flexDirection: 'row', borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: border }}>
                            {/* Root + meaning */}
                            <View style={{ width: 80, backgroundColor: cellBg, padding: 6, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: border }}>
                                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 15, color: isDark ? C.primary400 : C.primary700 }}>{row.root}</Text>
                                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 9, color: textSub, textAlign: 'center' }}>{t_content(row.meaning, row.meaningBn)}</Text>
                            </View>
                            {[row.he, row.she, row.youM, row.youF, row.i].map((form, i) => (
                                <View key={i} style={{ width: 85, backgroundColor: cellBg, padding: 6, alignItems: 'center', justifyContent: 'center', borderRightWidth: i < 4 ? 1 : 0, borderRightColor: border }}>
                                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 14, color: textMain, textAlign: 'center' }}>{form}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
