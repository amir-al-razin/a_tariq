import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ApplicationItem } from '../../data/curriculum';

type Props = { isDark: boolean; C: any; payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const ApplicationView: React.FC<Props> = ({ isDark, C, payload }) => {
    const { t } = useTranslation();
    const items: ApplicationItem[] = payload?.items || [];

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral300 : C.neutral600, marginBottom: 20, textAlign: 'center' }}>
                {payload?.instruction ?? t('chunk.reviewThenContinue')}
            </Text>

            {items.map((item, i) => (
                <View key={i} style={{ flexDirection: 'row', width: '100%', alignItems: 'center', gap: 16, backgroundColor: isDark ? C.neutral900 : C.neutral50, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: isDark ? C.neutral700 : C.neutral200, marginBottom: 12 }}>
                    <View style={{ width: 56, height: 56, borderRadius: 10, backgroundColor: isDark ? C.neutral800 : C.neutral200, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26 }}>{item.emoji}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: C.primary700, textAlign: 'right' }}>{item.ar}</Text>
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, marginTop: 2 }}>{item.en}</Text>
                    </View>
                </View>
            ))}

            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral500, textAlign: 'center', marginTop: 8, fontStyle: 'italic' }}>
                {t('chunk.reviewThenContinue')}
            </Text>
        </View>
    );
};
