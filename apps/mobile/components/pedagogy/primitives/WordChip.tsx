import React from 'react';
import { Pressable, Text } from 'react-native';
import { useThemeTokens } from '../../../theme/colors';

export type WordChipState = 'idle' | 'selected' | 'placed' | 'correct' | 'error';

export interface WordChipProps {
  arabic?: string;
  word?: string;
  transliteration?: string;
  translation?: string;
  state?: WordChipState;
  onPress?: () => void;
  disabled?: boolean;
}

export const WordChip: React.FC<WordChipProps> = ({
  arabic,
  word,
  transliteration,
  translation,
  state = 'idle',
  onPress,
  disabled = false,
}) => {
  const theme = useThemeTokens();
  const textContent = arabic || word || '';
  const isArabic = /[\u0600-\u06FF]/.test(textContent);
  const isInteractive = !disabled && state !== 'placed';

  const getBackgroundColor = (pressed: boolean) => {
    switch (state) {
      case 'selected':
        return theme.accentPrimary;
      case 'placed':
        return theme.isDark ? '#262626' : '#E5E5E5';
      case 'correct':
        return theme.status.success;
      case 'error':
        return theme.status.dangerSubtle;
      case 'idle':
      default:
        return pressed
          ? theme.isDark
            ? '#262626'
            : '#E5E5E5'
          : theme.isDark
            ? '#1F1F1F'
            : '#FFFFFF';
    }
  };

  const getTextColor = () => {
    switch (state) {
      case 'selected':
      case 'correct':
        return '#FFFFFF';
      case 'placed':
        return theme.textMuted;
      case 'error':
        return theme.status.dangerText;
      case 'idle':
      default:
        return theme.textPrimary;
    }
  };

  return (
    <Pressable
      onPress={isInteractive ? onPress : undefined}
      disabled={!isInteractive}
      style={({ pressed }) => ({
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: getBackgroundColor(pressed),
        alignItems: 'center',
        justifyContent: 'center',
        opacity: state === 'placed' ? 0.4 : disabled ? 0.35 : 1,
        transform: [{ scale: pressed && isInteractive ? 0.96 : 1 }],
      })}>
      <Text
        style={{
          fontFamily: isArabic ? 'NotoSansArabic_600SemiBold' : 'Lexend_600SemiBold',
          fontSize: isArabic ? 22 : 16,
          lineHeight: isArabic ? 34 : 22,
          color: getTextColor(),
          textAlign: 'center',
        }}>
        {textContent}
      </Text>
      {transliteration ? (
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 11,
            color: state === 'selected' || state === 'correct' ? '#FFFFFF' : theme.textMuted,
            marginTop: 2,
          }}>
          {transliteration}
        </Text>
      ) : null}
      {translation ? (
        <Text
          style={{
            fontFamily: 'Lexend_500Medium',
            fontSize: 12,
            color: state === 'selected' || state === 'correct' ? '#FFFFFF' : theme.textSecondary,
            marginTop: 2,
          }}>
          {translation}
        </Text>
      ) : null}
    </Pressable>
  );
};
