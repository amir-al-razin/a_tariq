import React from 'react';
import { View, Text } from 'react-native';
import { useThemeTokens } from '../../../theme/colors';

export interface DemonstrativeBadgeProps {
  arabic: string;
  type: 'near' | 'far';
  meaning: string;
  variant?: 'sovereign' | 'accent';
}

export const DemonstrativeBadge: React.FC<DemonstrativeBadgeProps> = ({
  arabic,
  type,
  meaning,
  variant = 'accent',
}) => {
  const theme = useThemeTokens();
  const isAccent = variant === 'accent';

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: isAccent ? theme.accentPrimary : theme.isDark ? '#FFFFFF' : '#0A0A0A',
      }}>
      <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 22,
            lineHeight: 32,
            color: isAccent ? '#FFFFFF' : theme.isDark ? '#0A0A0A' : '#FFFFFF',
          }}>
          {arabic}
        </Text>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 10,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: isAccent ? '#FFFFFF' : theme.isDark ? '#0A0A0A' : '#FFFFFF',
            opacity: 0.85,
          }}>
          {type === 'near' ? 'Near (Qareeb)' : 'Far (Baeed)'} · {meaning}
        </Text>
      </View>
    </View>
  );
};
