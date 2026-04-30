import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { GrammarRule } from '../../data/curriculum';

type Props = { isDark: boolean; C: any; payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const GrammarRuleView: React.FC<Props> = ({ isDark, C, payload }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const rules: GrammarRule[] = payload?.rules || [];

    return (
        <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 12 }}>
                <Ionicons name="information-circle" size={24} color={C.primary400} />
                <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: isDark ? C.neutral100 : C.neutral800 }}>{t('chunk.grammarFocus')}</Text>
            </View>

            {rules.map((rule, i) => (
                <View key={i} style={{ marginBottom: 16, backgroundColor: i === 0 ? (isDark ? `${C.primary800}40` : '#ECFDF8') : (isDark ? `${C.neutral800}40` : C.neutral100), padding: 16, borderRadius: 12, borderWidth: 1, borderColor: i === 0 ? (isDark ? C.primary800 : '#A7F3DE') : (isDark ? C.neutral700 : C.neutral200) }}>
                    <Text style={{ fontFamily: 'Lexend_500Medium', fontSize: 11, color: i === 0 ? C.primary700 : (isDark ? C.neutral400 : C.neutral500), marginBottom: 8, letterSpacing: 0.5 }}>
                        {rule.label.toUpperCase()}
                    </Text>
                    <View style={{ alignItems: 'center', marginBottom: 12 }}>
                        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 32, color: i === 0 ? C.primary700 : (isDark ? C.neutral300 : C.neutral700), marginBottom: 6 }}>{rule.arabic}</Text>
                        <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: isDark ? C.neutral100 : C.neutral800 }}>{rule.romanized}</Text>
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, marginTop: 2, textAlign: 'center' }}>{rule.meaning}</Text>
                    </View>

                    {rule.examples?.map((ex, j) => (
                        <View key={j} style={{ borderTopWidth: 1, borderTopColor: isDark ? C.neutral700 : C.neutral200, paddingTop: 10, marginTop: j === 0 ? 0 : 8 }}>
                            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: i === 0 ? C.primary700 : (isDark ? C.neutral300 : C.neutral700), textAlign: 'right' }}>{ex.ar}</Text>
                            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, marginTop: 2 }}>{t_content(ex.en, ex.bn)}</Text>
                        </View>
                    ))}
                </View>
            ))}

            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, textAlign: 'center', marginTop: 8, fontStyle: 'italic' }}>
                {t('chunk.studyThenContinue')}
            </Text>
        </View>
    );
};
