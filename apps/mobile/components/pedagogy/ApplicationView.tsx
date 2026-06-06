import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { ApplicationItem } from '@tariq/shared';

type Props = { isDark: boolean; C: any; payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const ApplicationView: React.FC<Props> = ({ isDark, C, payload }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const items: ApplicationItem[] = payload?.items || [];
    const instruction = payload?.instruction
        ? t_content(payload.instruction, payload.instructionBn)
        : t('chunk.reviewThenContinue');

    const renderFormattedArabic = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return (
            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.neutral100 : C.neutral900, textAlign: 'right', lineHeight: 32 }}>
                {parts.map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                            <Text key={index} style={{ color: C.primary700 }}>
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
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                {renderFormattedArabic(payload?.text || payload?.instruction)}
            </View>
        );
    }

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral300 : C.neutral600, marginBottom: 20, textAlign: 'center' }}>
                {instruction}
            </Text>

            {items.map((item, i) => (
                <View key={i} style={{ flexDirection: 'row', width: '100%', alignItems: 'center', gap: 16, backgroundColor: isDark ? C.neutral900 : C.neutral50, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: isDark ? C.neutral700 : C.neutral200, marginBottom: 12 }}>
                    <View style={{ width: 56, height: 56, borderRadius: 10, backgroundColor: isDark ? C.neutral800 : C.neutral200, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26 }}>{item.emoji}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {renderFormattedArabic(item.ar)}
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, marginTop: 2 }}>{t_content(item.en, item.bn)}</Text>
                    </View>
                </View>
            ))}

            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, textAlign: 'center', marginTop: 8, fontStyle: 'italic' }}>
                {t('chunk.reviewThenContinue')}
            </Text>
        </View>
    );
};
