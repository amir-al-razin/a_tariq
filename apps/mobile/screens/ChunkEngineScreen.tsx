import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { CHAPTERS, CHAPTERS_VOL2, CHAPTERS_VOL3 } from '@tariq/shared';

import { VocabularyView } from '../components/pedagogy/VocabularyView';
import { GrammarRuleView } from '../components/pedagogy/GrammarRuleView';
import { ApplicationView } from '../components/pedagogy/ApplicationView';
import { QAndAView } from '../components/pedagogy/QAndAView';
import { TarkeebView } from '../components/pedagogy/TarkeebView';
import { VerbTableView } from '../components/pedagogy/VerbTableView';
import { IdafahDrillView } from '../components/pedagogy/IdafahDrillView';
import { ParagraphView } from '../components/pedagogy/ParagraphView';
import { MasdarFactoryView } from '../components/pedagogy/MasdarFactoryView';
import { WordChipExercise, type QAExerciseItem } from '../components/pedagogy/WordChipExercise';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useThemeTokens } from '../theme/colors';
import { setChunkProgress } from '../state/progressStore';

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
  'grammar_rule',
  'application',
  'mixed',
  'tarkeeb',
  'verb_table',
  'paragraph',
  'masdar_factory',
  'idafah_drill',
];

export const ChunkEngineScreen: React.FC<ChunkEngineProps> = ({ route }) => {
  const { chunkId, chapterId, darsNumber, volumeNumber = 1 } = route.params;
  const navigation = useNavigation();
  const { t } = useTranslation();
  const theme = useThemeTokens();

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
    setChunkProgress(volumeNumber, chapterId, darsNumber, chunkId, 'completed');
  }, [volumeNumber, chapterId, darsNumber, chunkId]);

  // Neutral token map for backward compatibility with pedagogy views
  const C = {
    neutral50: theme.neutral[50],
    neutral100: theme.neutral[100],
    neutral200: theme.neutral[200],
    neutral300: theme.neutral[300],
    neutral400: theme.neutral[400],
    neutral500: theme.neutral[500],
    neutral600: theme.neutral[600],
    neutral700: theme.neutral[700],
    neutral800: theme.neutral[800],
    neutral900: theme.neutral[900],
    neutral950: theme.neutral[950],
    primary300: theme.accentPrimarySubtle,
    primary400: theme.accentPrimary,
    primary600: theme.accentPrimaryHover,
    primary700: theme.accentPrimary,
    primary800: theme.accentPrimaryHover,
  };

  const allChapters =
    volumeNumber === 2 ? CHAPTERS_VOL2 : volumeNumber === 3 ? CHAPTERS_VOL3 : CHAPTERS;
  const chapter = allChapters.find((c) => c.id === chapterId);
  const lesson = chapter?.lessons.find((l) => l.darsNumber === darsNumber);
  const chunk = lesson?.chunks.find((c) => c.id === chunkId);

  const isScrollCompletionType = chunk ? SCROLL_COMPLETE_TYPES.includes(chunk.type) : false;

  const checkScrollCompletion = useCallback(() => {
    if (!isScrollCompletionType || completeFiredRef.current) return;
    const remaining = contentHeightRef.current - scrollYRef.current - containerHeightRef.current;
    if (remaining < 80) {
      handleComplete();
    } else {
      const pct = Math.min(
        (scrollYRef.current + containerHeightRef.current) / contentHeightRef.current,
        0.99
      );
      setProgress(pct);
    }
  }, [isScrollCompletionType, handleComplete]);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollYRef.current = e.nativeEvent.contentOffset.y;
      checkScrollCompletion();
    },
    [checkScrollCompletion]
  );

  const onLayout = useCallback(
    (e: any) => {
      containerHeightRef.current = e.nativeEvent.layout.height;
      checkScrollCompletion();
    },
    [checkScrollCompletion]
  );

  const onContentSizeChange = useCallback(
    (_: number, h: number) => {
      contentHeightRef.current = h;
      if (isScrollCompletionType && h <= containerHeightRef.current) {
        handleComplete();
      }
    },
    [isScrollCompletionType, handleComplete]
  );

  if (!chunk) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.canvas,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: theme.textPrimary }}>Chunk not found</Text>
      </View>
    );
  }

  const sharedProps = {
    isDark: theme.isDark,
    C,
    payload: chunk.payload,
    onProgress: handleProgress,
    onComplete: handleComplete,
  };

  const renderContent = () => {
    switch (chunk.type) {
      case 'vocabulary':
        return <VocabularyView {...sharedProps} />;
      case 'grammar_rule':
        return <GrammarRuleView {...sharedProps} />;
      case 'application':
        return <ApplicationView {...sharedProps} />;
      case 'q_and_a':
        return <QAndAView {...sharedProps} />;
      case 'assessment':
        return <QAndAView {...sharedProps} />;
      case 'mixed':
        return <VocabularyView {...sharedProps} />;
      case 'tarkeeb':
        return <TarkeebView {...sharedProps} />;
      case 'verb_table':
        return <VerbTableView {...sharedProps} />;
      case 'idafah_drill':
        return <IdafahDrillView {...sharedProps} />;
      case 'phrase_building': {
        const phraseExercises: QAExerciseItem[] = (chunk.payload?.phraseBuilderItems || []).map(
          (pb, idx) => {
            const parts = pb.completePhraseAr.split(' ').filter(Boolean);
            return {
              id: pb.id || idx + 1,
              questionAr: pb.completePhraseAr,
              emoji: pb.emoji || '📝',
              expectedAnswer: parts,
              chips: parts,
            };
          }
        );
        return (
          <WordChipExercise
            exercises={phraseExercises}
            onFinish={handleComplete}
            onProgress={handleProgress}
          />
        );
      }
      case 'paragraph':
        return <ParagraphView {...sharedProps} />;
      case 'masdar_factory':
        return <MasdarFactoryView {...sharedProps} />;
      default:
        return <Text style={{ color: theme.textPrimary }}>Coming soon</Text>;
    }
  };

  const barWidth = `${Math.round(progress * 100)}%` as `${number}%`;

  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 48,
          paddingBottom: 16,
          gap: 12,
        }}>
        <Pressable onPress={() => navigation.goBack()} style={{ padding: 8 }}>
          <Ionicons name="close" size={24} color={theme.textPrimary} />
        </Pressable>
        <View
          style={{
            flex: 1,
            height: 8,
            backgroundColor: theme.surfaceWell,
            borderRadius: 4,
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: barWidth,
              height: '100%',
              backgroundColor: theme.accentPrimary,
              borderRadius: 4,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 13,
            color: theme.accentPrimary,
            minWidth: 36,
            textAlign: 'right',
          }}>
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
        scrollEventThrottle={16}>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 16,
            color: theme.accentPrimary,
            marginBottom: 6,
            textAlign: 'center',
          }}>
          {chunk.titleEn}
        </Text>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 24,
            color: theme.textPrimary,
            marginBottom: 24,
            textAlign: 'center',
          }}>
          {chunk.titleAr}
        </Text>

        {isScrollCompletionType && !isComplete && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginBottom: 16,
              opacity: 0.6,
            }}>
            <Ionicons name="arrow-down" size={14} color={theme.textMuted} />
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: theme.textMuted }}>
              {t('chunk.scrollToContinue')}
            </Text>
          </View>
        )}

        {/* Level 1 Well Card Container - Zero 1px borders */}
        <View
          style={{
            padding: 24,
            borderRadius: 24,
            backgroundColor: theme.surfaceWell,
            width: '100%',
            alignItems: 'center',
          }}>
          <ErrorBoundary onReset={() => navigation.goBack()}>{renderContent()}</ErrorBoundary>
        </View>
      </ScrollView>

      {/* 56px Action Pill - only shown when complete */}
      {isComplete && (
        <View style={{ padding: 24, paddingBottom: 48, backgroundColor: theme.canvas }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              width: '100%',
              height: 56,
              borderRadius: 9999,
              backgroundColor: theme.accentPrimary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
              {t('chunk.continue')}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
