import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ParagraphBlock } from '../../data/curriculum';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: { paragraphs?: ParagraphBlock[]; instruction?: string };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

export const ParagraphView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const blocks = payload?.paragraphs ?? [];

    // Scroll-based completion handled by ChunkEngineScreen
    useEffect(() => { onProgress(0); }, []);

    if (blocks.length === 0) return null;

    const textMain = isDark ? C.neutral100 : C.neutral900;
    const textSub = isDark ? C.neutral400 : C.neutral500;
    const border = isDark ? C.neutral700 : C.neutral200;

    return (
        <View style={{ width: '100%', gap: 24 }}>
            {payload?.instruction && (
                <View style={{ backgroundColor: isDark ? '#0D775F22' : '#D1FAF0', borderRadius: 8, padding: 10 }}>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                        {payload.instruction}
                    </Text>
                </View>
            )}

            {blocks.map((block, bi) => (
                <View key={bi} style={{ gap: 12 }}>
                    {/* Block title */}
                    {block.title && (
                        <View style={{ alignItems: 'center', gap: 2 }}>
                            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.primary400 : C.primary700, textAlign: 'center' }}>
                                {block.title}
                            </Text>
                            {block.titleEn && (
                                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: textSub, textAlign: 'center' }}>
                                    {block.titleEn}
                                </Text>
                            )}
                        </View>
                    )}

                    {/* Paragraph lines */}
                    <View style={{ borderRadius: 12, borderWidth: 1, borderColor: border, padding: 16, gap: 10, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}>
                        {block.lines.map((line, li) => (
                            <Text
                                key={li}
                                style={{
                                    fontFamily: 'NotoSansArabic_600SemiBold',
                                    fontSize: 18,
                                    color: textMain,
                                    textAlign: 'right',
                                    lineHeight: 32,
                                    writingDirection: 'rtl',
                                }}
                            >
                                {line}
                            </Text>
                        ))}
                    </View>

                    {/* English translation if provided */}
                    {block.translationEn && (
                        <View style={{ borderLeftWidth: 3, borderLeftColor: isDark ? C.primary400 : C.primary700, paddingLeft: 12 }}>
                            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: textSub, lineHeight: 20 }}>
                                {block.translationEn}
                            </Text>
                        </View>
                    )}

                    {/* Divider between blocks */}
                    {bi < blocks.length - 1 && (
                        <View style={{ height: 1, backgroundColor: border, marginTop: 4 }} />
                    )}
                </View>
            ))}
        </View>
    );
};
