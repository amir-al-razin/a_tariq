import React from 'react';
import { View } from 'react-native';
import type { VocabWord } from '@tariq/shared';
import { VocabularyHeroCard } from './VocabularyHeroCard';

const FALLBACK_WORDS: VocabWord[] = [
  { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
  { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
];

type Props = {
  isDark?: boolean;
  C?: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

export const VocabularyView: React.FC<Props> = ({ payload, onProgress, onComplete }) => {
  const words: VocabWord[] = payload?.words?.length ? payload.words : FALLBACK_WORDS;

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <VocabularyHeroCard words={words} onProgress={onProgress} onComplete={onComplete} />
    </View>
  );
};
