import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import { ParagraphBlock } from '../../data/curriculum';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: { paragraphs?: ParagraphBlock[]; instruction?: string };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

export const ParagraphView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const blocks = payload?.paragraphs ?? [];
    const [revealed, setRevealed] = useState<Record<number, boolean>>({});

    useEffect(() => { onProgress(0); }, []);

    if (blocks.length === 0) return null;

    return (
        <View className="w-full gap-6">
            {payload?.instruction && (
                <View className="rounded-xl bg-primary-50 dark:bg-primary-900/30 p-3">
                    <Text className="font-english text-caption text-primary-700 dark:text-primary-200 text-center">
                        {payload.instruction}
                    </Text>
                </View>
            )}

            {blocks.map((block, bi) => (
                <View key={bi} className="gap-3">
                    {block.title && (
                        <View className="items-center gap-1">
                            <Text className="font-arabic-semibold text-h2 text-primary-700 dark:text-primary-200 text-center">
                                {block.title}
                            </Text>
                            {block.titleEn && (
                                <Text className="font-english text-caption text-neutral-600 dark:text-neutral-300 text-center">
                                    {block.titleEn}
                                </Text>
                            )}
                        </View>
                    )}

                    <View className="rounded-2xl border border-neutral-200 bg-neutral-100 p-4 gap-3 dark:border-neutral-700 dark:bg-neutral-800">
                        {block.lines.map((line, li) => (
                            <Text
                                key={li}
                                className="font-arabic-semibold text-arabic-body text-neutral-800 dark:text-neutral-100 text-right leading-8"
                                style={{ writingDirection: 'rtl' }}
                            >
                                {line}
                            </Text>
                        ))}
                    </View>

                    {/* Show translation if available — picks bn when Bangla active */}
                    {(block.translationEn || block.translationBn) && (
                        <View className="gap-3">
                            <Pressable
                                accessibilityRole="button"
                                onPress={() => setRevealed(prev => ({ ...prev, [bi]: !prev[bi] }))}
                                className="w-full rounded-2xl border border-primary-200 bg-primary-50 p-4 items-center dark:border-primary-700 dark:bg-primary-900/30"
                            >
                                <Text className="font-english-semibold text-body text-primary-800 dark:text-primary-100">
                                    {revealed[bi] ? t('paragraph.hideTranslation') : t('paragraph.revealTranslation')}
                                </Text>
                            </Pressable>

                            {revealed[bi] && (
                                <View className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                                    <Text className="font-english text-body text-neutral-700 dark:text-neutral-200 leading-7">
                                        {t_content(block.translationEn ?? '', block.translationBn)}
                                    </Text>
                                </View>
                            )}
                        </View>
                    )}

                    {bi < blocks.length - 1 && (
                        <View className="h-px bg-neutral-200 dark:bg-neutral-700 mt-1" />
                    )}
                </View>
            ))}
        </View>
    );
};
