import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import { TarkeebItem, TarkeebNode } from '@tariq/shared';

interface Props {
    isDark: boolean;
    C: Record<string, string>;
    payload?: { tarkeeb?: TarkeebItem[], text?: string, instruction?: string };
    onProgress: (v: number) => void;
    onComplete: () => void;
}

/** Recursively render a tree node and its children */
const TreeNode: React.FC<{ node: TarkeebNode; isDark: boolean; C: Record<string, string>; depth?: number }> = ({
    node, isDark, C, depth = 0,
}) => {
    const { t_content } = useLanguage();
    const isLeaf = !node.children || node.children.length === 0;
    return (
        <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
            {/* Arabic text box */}
            <View style={{
                borderWidth: 1.5,
                borderColor: isDark ? C.primary400 : C.primary700,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 8,
                backgroundColor: isDark ? C.neutral800 : '#fff',
                minWidth: 80,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.neutral100 : C.neutral900, textAlign: 'center', lineHeight: 24 }}>
                    {node.text}
                </Text>
            </View>
            {/* Grammatical label */}
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 10, color: isDark ? C.neutral400 : C.neutral500, marginTop: 3, textAlign: 'center' }}>
                {node.label}
            </Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 9, color: isDark ? C.neutral500 : C.neutral400, textAlign: 'center' }}>
                {t_content(node.labelEn, node.labelBn)}
            </Text>
            {/* Branch line + children */}
            {!isLeaf && (
                <>
                    <View style={{ width: 1.5, height: 20, backgroundColor: isDark ? C.neutral600 : C.neutral300 }} />
                    {node.children!.length === 1 ? (
                        // Single child - just connect directly
                        <TreeNode node={node.children![0]} isDark={isDark} C={C} depth={depth + 1} />
                    ) : (
                        // Multiple children - create horizontal branch
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Horizontal connecting line */}
                            <View style={{ 
                                position: 'absolute', 
                                left: 0, 
                                right: 0, 
                                height: 1.5, 
                                backgroundColor: isDark ? C.neutral600 : C.neutral300,
                                top: 0 
                            }} />
                            {node.children!.map((child, i) => (
                                <View key={i} style={{ alignItems: 'center', flex: 1 }}>
                                    {/* Vertical line from horizontal branch to child */}
                                    <View style={{ 
                                        width: 1.5, 
                                        height: 12, 
                                        backgroundColor: isDark ? C.neutral600 : C.neutral300,
                                        marginTop: -1.5 // Align with horizontal line
                                    }} />
                                    <TreeNode node={child} isDark={isDark} C={C} depth={depth + 1} />
                                </View>
                            ))}
                        </View>
                    )}
                </>
            )}
        </View>
    );
};

export const TarkeebView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const { t } = useTranslation();
    const { t_content } = useLanguage();
    const items = payload?.tarkeeb ?? [];

    useEffect(() => {
        // Scroll-based completion is handled by ChunkEngineScreen
        onProgress(0);
    }, []);

    if (items.length === 0) {
        const fallbackText = payload?.text || payload?.instruction;
        if (fallbackText) {
            return (
                <View style={{ width: '100%', paddingVertical: 8 }}>
                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: isDark ? C.neutral100 : C.neutral800, textAlign: 'right', lineHeight: 32 }}>
                        {fallbackText}
                    </Text>
                </View>
            );
        }
        return <Text style={{ color: isDark ? C.neutral400 : C.neutral500 }}>{t('tarkeeb.noData')}</Text>;
    }

    return (
        <View style={{ width: '100%', gap: 28 }}>
            {items.map((item, idx) => (
                <View key={idx} style={{
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: isDark ? C.neutral700 : C.neutral200,
                    padding: 16,
                    backgroundColor: isDark ? C.neutral900 : C.neutral50,
                }}>
                    {/* Type badge */}
                    <View style={{
                        alignSelf: 'flex-start',
                        backgroundColor: item.type === 'complete'
                            ? (isDark ? '#0D775F33' : '#D1FAF0')
                            : (isDark ? '#7D746333' : '#F5F0E8'),
                        borderRadius: 6,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        marginBottom: 10,
                    }}>
                        <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 10, color: isDark ? C.primary400 : C.primary700 }}>
                            {item.type === 'complete' ? t('tarkeeb.completeSentence') : t('tarkeeb.incompletePhrase')}
                        </Text>
                    </View>

                    {/* Full sentence */}
                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 22, color: isDark ? C.neutral100 : C.neutral900, textAlign: 'center', marginBottom: 4 }}>
                        {item.sentence}
                    </Text>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral300 : C.neutral600, textAlign: 'center', marginBottom: 2 }}>
                        {t_content(item.sentenceEn, item.sentenceBn)}
                    </Text>


                    {/* Tree diagram */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingVertical: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 16, minHeight: 80 }}>
                            {item.tree.map((node, i) => (
                                <View key={i} style={{ alignItems: 'center' }}>
                                    <TreeNode node={node} isDark={isDark} C={C} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            ))}
        </View>
    );
};
