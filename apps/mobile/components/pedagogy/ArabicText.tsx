import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useThemeTokens } from '../../theme/colors';

export type ArabicTextSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | 'display';
export type ArabicTextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

interface Props {
  children: React.ReactNode;
  size?: ArabicTextSize;
  weight?: ArabicTextWeight;
  color?: string;
  style?: TextStyle;
}

const FONT_SIZES: Record<ArabicTextSize, { fontSize: number; lineHeight: number }> = {
  sm: { fontSize: 16, lineHeight: 28 },
  base: { fontSize: 18, lineHeight: 32 },
  lg: { fontSize: 22, lineHeight: 38 },
  xl: { fontSize: 26, lineHeight: 44 },
  '2xl': { fontSize: 32, lineHeight: 52 },
  '3xl': { fontSize: 38, lineHeight: 60 },
  display: { fontSize: 46, lineHeight: 72 },
};

const FONT_FAMILIES: Record<ArabicTextWeight, string> = {
  normal: 'NotoSansArabic_400Regular',
  medium: 'NotoSansArabic_500Medium',
  semibold: 'NotoSansArabic_600SemiBold',
  bold: 'NotoSansArabic_700Bold',
};

export const ArabicText: React.FC<Props> = ({
  children,
  size = 'base',
  weight = 'semibold',
  color,
  style,
}) => {
  const theme = useThemeTokens();
  const sizeConfig = FONT_SIZES[size];
  const fontFamily = FONT_FAMILIES[weight];

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: sizeConfig.fontSize,
          lineHeight: sizeConfig.lineHeight,
          color: color || theme.textPrimary,
          writingDirection: 'rtl',
          textAlign: 'right',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
