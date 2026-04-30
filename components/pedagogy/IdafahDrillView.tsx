import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import { IdafahPair } from '../../data/curriculum';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: { idafahPairs?: IdafahPair[]; instruction?: string };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

export const IdafahDrillView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const pairs = payload?.idafahPairs ?? [];
    const [revealed, setRevealed] = useState<boolean[]>(Array(pairs.length).fill(false));

    // Report initial progress on mount — never call setState during render
    useEffect(() => { onProgress(0); }, []);

    const revealAll = useCallback(() => {
        setRevealed(Array(pairs.length).fill(true));
        onProgress(1);
        onComplete();
    }, [pairs.length, onProgress, onComplete]);

    const toggle = useCallback((i: number) => {
        setRevealed(prev => {
            const next = [...prev];
            next[i] = !next[i];
            const doneCount = next.filter(Boolean).length;
            onProgress(doneCount / pairs.length);
            if (doneCount === pairs.length) onComplete();
            return next;
        });
    }, [pairs.length, onProgress, onComplete]);

    if (pairs.length === 0) return null;

    const textSub = isDark ? C.neutral400 : C.neutral500;
    const cardBg = isDark ? C.neutral800 : '#fff';
    const border = isDark ? C.neutral700 : C.neutral200;

    return (
        <View style={{ width: '100%', gap: 12 }}>
            {payload?.instruction && (
                <View style={{ backgroundColor: isDark ? '#0D775F22' : '#D1FAF0', borderRadius: 8, padding: 10, marginBottom: 4 }}>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                        {payload.instruction}
                    </Text>
                </View>
            )}

            {/* Header row */}
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <View style={{ flex: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, borderRadius: 8, padding: 8, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 11, color: textSub }}>{t('idafah.basePhrase')}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: isDark ? C.neutral700 : C.neutral200, borderRadius: 8, padding: 8, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 11, color: textSub }}>{t('idafah.possessionPhrase')}</Text>
                </View>
            </View>

            {pairs.map((pair, i) => (
                <Pressable key={i} onPress={() => toggle(i)}>
                    <View style={{ flexDirection: 'row', gap: 8 }}>
                        {/* Base */}
                        <View style={{ flex: 1, borderRadius: 10, borderWidth: 1, borderColor: border, backgroundColor: cardBg, padding: 12, alignItems: 'center', gap: 4 }}>
                            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 16, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                                {pair.baseAr}
                            </Text>
                            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 11, color: textSub, textAlign: 'center' }}>
                                {t_content(pair.baseEn, pair.baseBn)}
                            </Text>
                        </View>
                        {/* Expanded — tap to reveal */}
                        <View style={{
                            flex: 1, borderRadius: 10, borderWidth: 1.5,
                            borderColor: revealed[i] ? (isDark ? C.primary400 : C.primary700) : border,
                            backgroundColor: revealed[i] ? (isDark ? '#0D775F22' : '#D1FAF0') : (isDark ? C.neutral700 : C.neutral100),
                            padding: 12, alignItems: 'center', justifyContent: 'center', gap: 4,
                        }}>
                            {revealed[i] ? (
                                <>
                                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 16, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                                        {pair.expandedAr}
                                    </Text>
                                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 11, color: textSub, textAlign: 'center' }}>
                                        {t_content(pair.expandedEn, pair.expandedBn)}
                                    </Text>
                                </>
                            ) : (
                                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: textSub }}>
                                    {t('idafah.tapToReveal')}
                                </Text>
                            )}
                        </View>
                    </View>
                </Pressable>
            ))}

            {/* Reveal all shortcut */}
            {revealed.some(r => !r) && (
                <Pressable onPress={revealAll} style={{ alignSelf: 'center', marginTop: 4, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: isDark ? C.neutral600 : C.neutral300 }}>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: textSub }}>{t('idafah.revealAll')}</Text>
                </Pressable>
            )}
        </View>
    );
};
