import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useThemeTokens } from '../../../theme/colors';

export interface WordAssemblySlotProps {
  word?: {
    arabic?: string;
    word?: string;
    translation?: string;
  };
  placeholder?: string;
  onRemove?: () => void;
}

export const WordAssemblySlot: React.FC<WordAssemblySlotProps> = ({
  word,
  placeholder = '...',
  onRemove,
}) => {
  const theme = useThemeTokens();
  const textContent = word?.arabic || word?.word || '';
  const isArabic = /[\u0600-\u06FF]/.test(textContent);

  if (word && textContent) {
    return (
      <Pressable
        onPress={onRemove}
        style={({ pressed }) => ({
          minWidth: 80,
          minHeight: 52,
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: theme.accentPrimarySubtle,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{ scale: pressed ? 0.96 : 1 }],
        })}>
        <Text
          style={{
            fontFamily: isArabic ? 'NotoSansArabic_600SemiBold' : 'Lexend_600SemiBold',
            fontSize: isArabic ? 20 : 15,
            lineHeight: isArabic ? 30 : 20,
            color: theme.accentPrimaryText,
            textAlign: 'center',
          }}>
          {textContent}
        </Text>
        {word.translation ? (
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 10,
              color: theme.accentPrimaryText,
              opacity: 0.8,
              marginTop: 2,
            }}>
            {word.translation}
          </Text>
        ) : null}
      </Pressable>
    );
  }

  return (
    <View
      style={{
        minWidth: 80,
        minHeight: 52,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: theme.isDark ? '#404040' : '#D4D4D4',
        backgroundColor: theme.surfaceWell,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Lexend_500Medium',
          fontSize: 13,
          color: theme.textMuted,
        }}>
        {placeholder}
      </Text>
    </View>
  );
};
