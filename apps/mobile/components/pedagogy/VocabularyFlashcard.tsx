import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useThemeTokens } from '../../theme/colors';
import { playArabicAudio } from '../../lib/arabicAudio';
import { playTapSound } from '../../lib/sound';

export interface VocabItem {
  id: number;
  ar: string;
  roman?: string;
  romanized?: string;
  en: string;
  bn?: string;
  emoji?: string;
}

export interface VocabularyFlashcardProps {
  item: VocabItem;
  index: number;
  isRevealed?: boolean;
  audioEnabled?: boolean;
  onTap?: (item: VocabItem) => void;
}

export const VocabularyFlashcard: React.FC<VocabularyFlashcardProps> = ({
  item,
  index,
  isRevealed = false,
  audioEnabled = true,
  onTap,
}) => {
  const theme = useThemeTokens();

  const handlePress = () => {
    playTapSound();
    if (audioEnabled) {
      playArabicAudio(item.ar);
    }
    onTap?.(item);
  };

  const formattedIndex = String(index + 1).padStart(2, '0');
  const roman = item.roman || item.romanized || '';

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        borderRadius: 24,
        backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
        padding: 18,
        minHeight: 140,
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: pressed ? 0.9 : 1,
      })}>
      {/* Top index and checkmark */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 11,
            color: theme.isDark ? theme.neutral[500] : theme.neutral[400],
          }}>
          Card {formattedIndex}
        </Text>
        {isRevealed && (
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 12,
              color: theme.accentPrimary,
            }}>
            ✓
          </Text>
        )}
      </View>

      {/* Main Arabic word */}
      <View style={{ marginVertical: 8, alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_700Bold',
            fontSize: 32,
            color: theme.isDark ? theme.neutral[100] : theme.neutral[900],
            textAlign: 'center',
            writingDirection: 'rtl',
            lineHeight: 46,
          }}>
          {item.ar}
        </Text>
      </View>

      {/* Bottom translation / romanization */}
      <View
        style={{
          width: '100%',
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: theme.isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          alignItems: 'center',
          gap: 2,
        }}>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 13,
            color: theme.isDark ? theme.neutral[300] : theme.neutral[700],
            textAlign: 'center',
          }}>
          {item.en}
        </Text>
        {isRevealed && roman ? (
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 11,
              color: theme.accentPrimary,
              textAlign: 'center',
            }}>
            {roman}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
};
