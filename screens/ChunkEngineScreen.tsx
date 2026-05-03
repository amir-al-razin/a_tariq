import React, { useState, useCallback, useRef } from 'react';
import { View, Text, Pressable, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { CHAPTERS } from '../data/curriculum';
import { CHAPTERS_VOL2 } from '../data/curriculum_vol2';
import { CHAPTERS_VOL3 } from '../data/vol3/curriculum_vol3';

import { VocabularyView } from '../components/pedagogy/VocabularyView';
import { GrammarRuleView } from '../components/pedagogy/GrammarRuleView';
import { ApplicationView } from '../components/pedagogy/ApplicationView';
import { QAndAView } from '../components/pedagogy/QAndAView';
import { TarkeebView } from '../components/pedagogy/TarkeebView';
import { VerbTableView } from '../components/pedagogy/VerbTableView';
import { IdafahDrillView } from '../components/pedagogy/IdafahDrillView';
import { ParagraphView } from '../components/pedagogy/ParagraphView';
import { MasdarFactoryView } from '../components/pedagogy/MasdarFactoryView';

// Volume accent colours — teal / amber / violet
const VOLUME_ACCENT = {
    1: { accent400: '#34D3AA', accent700: '#0D775F', accent800: '#0F5F4D' },
    2: { accent400: '#FBBF24', accent700: '#B45309', accent800: '#92400E' },
    3: { accent400: '#A78BFA', accent700: '#6D28D9', accent800: '#5B21B6' },
} as const;

type ChunkEngineProps = {
    route: {
        params: {
            chunkId: string;
            volumeNumber: number;
            chapterId: number;
            darsNumber: number;
        };
    };
};

const SCROLL_COMPLETE_TYPES = [
    'grammar_rule', 'application', 'mixed',
    'tarkeeb', 'verb_table', 'paragraph', 'masdar_factory',
];

export const ChunkEngineScreen: React.FC<ChunkEngineProps> = ({ route }) => {
    const { chunkId, chapterId, darsNumber, volumeNumber = 1 } = route.params;
    const navigation = useNavigation();
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const { t } = useTranslation();

    const accent = VOLUME_ACCENT[(volumeNumber as 1 | 2 | 3)] ?? VOLUME_ACCENT[1];

    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const scrollYRef = useRef(0);
    const containerHeightRef = useRef(0);
    const contentHeightRef = useRef(0);
    const completeFiredRef = useRef(false);

    const handleProgress = useCallback((value: number) => {
        if (completeFiredRef.current) return;
        setProgress(value);
    }, []);

    const handleComplete = useCallback(() => {
        if (completeFiredRef.current) return;
        completeFiredRef.current = true;
        setProgress(1);
        setIsComplete(true);
    }, []);

    // Neutral token map (shared across all volumes)
    const C = {
        neutral50:  '#F8F7F4',
        neutral100: '#F0EEE8',
        neutral200: '#E5E1D8',
        neutral300: '#D5CEBF',
        neutral400: '#B9AF9C',
        neutral500: '#9A8F7B',
        neutral600: '#7D7463',
        neutral700: '#4F4A40',
        neutral800: '#22201B',
        neutral900: '#1A1815',
        // accent aliases so pedagogy views keep working with C.primary*
        primary300: accent.accent400,
        primary400: accent.accent400,
        primary600: accent.accent700,
        primary700: accent.accent700,
        primary800: accent.accent800,
    };

    // Pick the right data source
    const allChapters = volumeNumber === 2 ? CHAPTERS_VOL2 : volumeNumber === 3 ? CHAPTERS_VOL3 : CHAPTERS;
    const chapter = allChapters.find(c => c.id === chapterId);
    const lesson  = chapter?.lessons.find(l => l.darsNumber === darsNumber);
    const chunk   = lesson?.chunks.find(c => c.id === chunkId);

    const isScrollCompletionType = chunk ? SCROLL_COMPLETE_TYPES.includes(chunk.type) : false;

    const checkScrollCompletion = useCallback(() => {
        if (!isScrollCompletionType || completeFiredRef.current) return;
        const remaining = contentHeightRef.current - scrollYRef.current - containerHeightRef.current;
        if (remaining < 80) {
            handleComplete();
        } else {
            const pct = Math.min(
                (scrollYRef.current + containerHeightRef.current) / contentHeightRef.current,
                0.99,
            );
            setProgress(pct);
        }
    }, [isScrollCompletionType, handleComplete]);

    const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollYRef.current = e.nativeEvent.contentOffset.y;
        checkScrollCompletion();
    }, [checkScrollCompletion]);

    const onLayout = useCallback((e: any) => {
        containerHeightRef.current = e.nativeEvent.layout.height;
        checkScrollCompletion();
    }, [checkScrollCompletion]);

    const onContentSizeChange = useCallback((_: number, h: number) => {
        contentHeightRef.current = h;
        if (isScrollCompletionType && h <= containerHeightRef.current) {
            handleComplete();
        }
    }, [isScrollCompletionType, handleComplete]);

    if (!chunk) {
        return (
            <View style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: isDark ? C.neutral100 : C.neutral800 }}>Chunk not found</Text>
            </View>
        );
    }

    const sharedProps = {
        isDark,
        C,
        payload: chunk.payload,
        onProgress: handleProgress,
        onComplete: handleComplete,
    };

    const renderContent = () => {
        switch (chunk.type) {
            case 'vocabulary':      return <VocabularyView {...sharedProps} />;
            case 'grammar_rule':    return <GrammarRuleView {...sharedProps} />;
            case 'application':     return <ApplicationView {...sharedProps} />;
            case 'q_and_a':         return <QAndAView {...sharedProps} />;
            case 'assessment':      return <QAndAView {...sharedProps} />;
            case 'mixed':           return <VocabularyView {...sharedProps} />;
            case 'tarkeeb':         return <TarkeebView {...sharedProps} />;
            case 'verb_table':      return <VerbTableView {...sharedProps} />;
            case 'idafah_drill':    return <IdafahDrillView {...sharedProps} />;
            case 'paragraph':       return <ParagraphView {...sharedProps} />;
            case 'masdar_factory':  return <MasdarFactoryView {...sharedProps} />;
            default:
                return <Text style={{ color: isDark ? C.neutral100 : C.neutral800 }}>Coming soon</Text>;
        }
    };

    const barWidth = `${Math.round(progress * 100)}%` as `${number}%`;

    return (
        <View style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 48, paddingBottom: 16, gap: 12 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ padding: 8 }}>
                    <Ionicons name="close" size={28} color={isDark ? C.neutral200 : C.neutral800} />
                </Pressable>
                <View style={{ flex: 1, height: 12, backgroundColor: isDark ? C.neutral800 : C.neutral200, borderRadius: 8, overflow: 'hidden' }}>
                    <View style={{ width: barWidth, height: '100%', backgroundColor: accent.accent400, borderRadius: 8 }} />
                </View>
                <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: isDark ? accent.accent400 : accent.accent700, minWidth: 36, textAlign: 'right' }}>
                    {Math.round(progress * 100)}%
                </Text>
            </View>

            {/* Body */}
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ alignItems: 'center', padding: 20, paddingBottom: 40 }}
                onLayout={onLayout}
                onContentSizeChange={onContentSizeChange}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: isDark ? accent.accent400 : accent.accent700, marginBottom: 6, textAlign: 'center' }}>
                    {chunk.titleEn}
                </Text>
                <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 22, color: isDark ? C.neutral100 : accent.accent800, marginBottom: 28, textAlign: 'center' }}>
                    {chunk.titleAr}
                </Text>

                {isScrollCompletionType && !isComplete && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16, opacity: 0.6 }}>
                        <Ionicons name="arrow-down" size={14} color={isDark ? C.neutral400 : C.neutral500} />
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: isDark ? C.neutral400 : C.neutral500 }}>
                            {t('chunk.scrollToContinue')}
                        </Text>
                    </View>
                )}

                <View style={{ padding: 24, borderRadius: 16, borderWidth: 1, borderColor: isDark ? C.neutral800 : C.neutral200, backgroundColor: isDark ? C.neutral800 : C.neutral100, width: '100%', alignItems: 'center' }}>
                    {renderContent()}
                </View>
            </ScrollView>

            {/* CONTINUE — only shown when complete */}
            {isComplete && (
                <View style={{ padding: 24, paddingBottom: 48, borderTopWidth: 1, borderTopColor: isDark ? C.neutral800 : C.neutral200 }}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={{ width: '100%', height: 56, borderRadius: 16, backgroundColor: accent.accent400, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#fff' }}>
                            {t('chunk.continue')}
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};
