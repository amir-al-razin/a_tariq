import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '../../theme/colors';
import { playArabicAudio } from '../../lib/arabicAudio';
import { playTapSound } from '../../lib/sound';
import type { VocabWord } from '@tariq/shared';

export interface VocabularyHeroCardProps {
  words: VocabWord[];
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

const DEFAULT_SAMPLE_WORDS: VocabWord[] = [
  {
    id: 1,
    ar: 'كِتَابٌ',
    romanized: 'kitābun',
    en: 'A book',
    bn: 'একটি বই',
    emoji: '📖',
    gender: 'masculine',
    category: 'noun',
  },
  {
    id: 2,
    ar: 'قَلَمٌ',
    romanized: 'qalamun',
    en: 'A pen',
    bn: 'একটি কলম',
    emoji: '🖊️',
    gender: 'masculine',
    category: 'noun',
  },
];

export const VocabularyHeroCard: React.FC<VocabularyHeroCardProps> = ({
  words = DEFAULT_SAMPLE_WORDS,
  onComplete,
  onProgress,
}) => {
  const theme = useThemeTokens();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const total = words.length;
  const currentWord = words[currentIndex] || DEFAULT_SAMPLE_WORDS[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  useEffect(() => {
    if (isCompleted) {
      onProgress?.(1);
    } else {
      const p = Math.min((currentIndex + 1) / total, 0.99);
      onProgress?.(p);
    }
  }, [currentIndex, total, isCompleted, onProgress]);

  const handlePlayAudio = useCallback(() => {
    playArabicAudio(currentWord.ar);
  }, [currentWord.ar]);

  const handleNext = useCallback(() => {
    playTapSound();
    if (isLast) {
      setIsCompleted(true);
      onComplete?.();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLast, onComplete]);

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      playTapSound();
      setIsCompleted(false);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isFirst]);

  const getGenderBadge = (gender?: string) => {
    if (gender === 'feminine') return { ar: 'مُؤَنَّث', en: 'Feminine' };
    return { ar: 'مُذَكَّر', en: 'Masculine' };
  };

  const getCategoryBadge = (category?: string) => {
    if (category === 'verb') return { ar: 'فِعْل', en: 'Verb' };
    if (category === 'particle') return { ar: 'حَرْف', en: 'Particle' };
    return { ar: 'اِسْم', en: 'Noun' };
  };

  const genderInfo = getGenderBadge(currentWord.gender);
  const categoryInfo = getCategoryBadge(currentWord.category);

  return (
    <View
      style={{
        width: '100%',
        maxWidth: 420,
        backgroundColor: theme.surfaceWell,
        borderRadius: 36,
        padding: 24,
        alignItems: 'center',
      }}>
      {/* Top Floating Bar */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={handlePrev}
          disabled={isFirst}
          accessibilityRole="button"
          accessibilityLabel="Previous word"
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.isDark ? '#262626' : '#E5E5E5',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isFirst ? 0.3 : 1,
          }}>
          <Ionicons name="arrow-back" size={18} color={theme.textPrimary} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: theme.textMuted,
            }}>
            Single Word Focus
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 14,
              color: theme.textPrimary,
              marginTop: 2,
            }}>
            كَلِمَةُ الدَّرْسِ ({currentIndex + 1}/{total})
          </Text>
        </View>

        <TouchableOpacity
          onPress={handlePlayAudio}
          accessibilityRole="button"
          accessibilityLabel="Listen pronunciation"
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.isDark ? '#262626' : '#E5E5E5',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="volume-medium" size={20} color={theme.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Hero Visual Area */}
      <View
        style={{
          width: '100%',
          height: 160,
          borderRadius: 28,
          backgroundColor: theme.isDark ? '#141414' : '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          position: 'relative',
        }}>
        {currentWord.imageUrl ? (
          <Image
            source={{ uri: currentWord.imageUrl }}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        ) : (
          <Text style={{ fontSize: 72 }}>{currentWord.emoji || '📖'}</Text>
        )}

        <TouchableOpacity
          onPress={handlePlayAudio}
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="volume-medium" size={18} color={theme.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Focal Word Typography */}
      <TouchableOpacity
        onPress={handlePlayAudio}
        activeOpacity={0.8}
        style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 48,
            lineHeight: 70,
            color: theme.textPrimary,
            textAlign: 'center',
          }}>
          {currentWord.ar}
        </Text>

        {currentWord.romanized ? (
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textMuted,
              marginTop: 4,
            }}>
            {currentWord.romanized}
          </Text>
        ) : null}

        {/* Direct Translation - Never Hidden Behind a Flip! */}
        <View style={{ marginTop: 8, alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 22,
              color: theme.textPrimary,
              textAlign: 'center',
            }}>
            {currentWord.en}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Morphological Spec Grid */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          gap: 8,
          marginBottom: 20,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.isDark ? '#141414' : '#FFFFFF',
            borderRadius: 18,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 10,
              textTransform: 'uppercase',
              color: theme.textMuted,
            }}>
            Part of Speech
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 14,
              color: theme.textPrimary,
              marginTop: 2,
            }}>
            {categoryInfo.ar}
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_500Medium',
              fontSize: 10,
              color: theme.textSecondary,
            }}>
            {categoryInfo.en}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: theme.isDark ? '#141414' : '#FFFFFF',
            borderRadius: 18,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 10,
              textTransform: 'uppercase',
              color: theme.textMuted,
            }}>
            Gender
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 14,
              color: theme.textPrimary,
              marginTop: 2,
            }}>
            {genderInfo.ar}
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_500Medium',
              fontSize: 10,
              color: theme.textSecondary,
            }}>
            {genderInfo.en}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: theme.isDark ? '#141414' : '#FFFFFF',
            borderRadius: 18,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 10,
              textTransform: 'uppercase',
              color: theme.textMuted,
            }}>
            Number
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 14,
              color: theme.textPrimary,
              marginTop: 2,
            }}>
            مُفْرَد
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_500Medium',
              fontSize: 10,
              color: theme.textSecondary,
            }}>
            Singular
          </Text>
        </View>
      </View>

      {/* Discrete Dot Progress Indicator */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          marginBottom: 20,
        }}>
        {words.map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setCurrentIndex(i)}
            style={{
              height: 6,
              width: i === currentIndex ? 24 : 6,
              borderRadius: 3,
              backgroundColor:
                i === currentIndex
                  ? theme.accentPrimary
                  : i < currentIndex || isCompleted
                    ? theme.accentSecondary
                    : theme.isDark
                      ? '#404040'
                      : '#D4D4D4',
            }}
          />
        ))}
      </View>

      {/* Full-Width 56px Action Button Pill */}
      <TouchableOpacity
        onPress={handleNext}
        style={{
          width: '100%',
          height: 56,
          borderRadius: 28,
          backgroundColor: theme.accentPrimary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 16,
            color: '#FFFFFF',
          }}>
          {isLast ? 'أَتْمَمْتُ (Complete Drill)' : 'كَلِمَةٌ تَالِيَةٌ (Next Word)'}
        </Text>
        <Ionicons name={isLast ? 'checkmark' : 'arrow-forward'} size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
