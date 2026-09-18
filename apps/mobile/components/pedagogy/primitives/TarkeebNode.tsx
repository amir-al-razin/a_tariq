import React from 'react';
import { View, Text } from 'react-native';
import { useThemeTokens } from '../../../theme/colors';

export interface TarkeebNodeProps {
  role: string;
  arabicRole: string;
  word: string;
  harakahState: 'Marfoo' | 'Mansub' | 'Majroor' | 'Majzoom';
}

export const TarkeebNodePrimitive: React.FC<TarkeebNodeProps> = ({
  role,
  arabicRole,
  word,
  harakahState,
}) => {
  const theme = useThemeTokens();

  const harakahColor = {
    Marfoo: {
      bg: theme.isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
      text: theme.isDark ? '#6ee7b7' : '#065f46',
    },
    Mansub: {
      bg: theme.accentPrimarySubtle,
      text: theme.accentPrimaryText,
    },
    Majroor: {
      bg: theme.isDark ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0.1)',
      text: theme.isDark ? '#fcd34d' : '#92400e',
    },
    Majzoom: {
      bg: theme.isDark ? 'rgba(244, 63, 94, 0.15)' : 'rgba(244, 63, 94, 0.1)',
      text: theme.isDark ? '#fda4af' : '#9f1239',
    },
  }[harakahState];

  return (
    <View
      style={{
        borderRadius: 24,
        backgroundColor: theme.isDark ? theme.neutral[800] : theme.neutral[200],
        padding: 18,
        alignItems: 'center',
        gap: 6,
      }}>
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 11,
          color: theme.isDark ? theme.neutral[400] : theme.neutral[500],
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}>
        {role}
      </Text>
      <Text
        style={{
          fontFamily: 'NotoSansArabic_600SemiBold',
          fontSize: 16,
          color: theme.isDark ? theme.neutral[300] : theme.neutral[600],
          writingDirection: 'rtl',
        }}>
        {arabicRole}
      </Text>
      <Text
        style={{
          fontFamily: 'NotoSansArabic_700Bold',
          fontSize: 28,
          color: theme.textPrimary,
          marginVertical: 4,
          writingDirection: 'rtl',
          lineHeight: 40,
        }}>
        {word}
      </Text>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 9999,
          backgroundColor: harakahColor.bg,
        }}>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 11,
            color: harakahColor.text,
          }}>
          {harakahState}
        </Text>
      </View>
    </View>
  );
};
