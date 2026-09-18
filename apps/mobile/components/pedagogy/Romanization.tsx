import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useThemeTokens } from '../../theme/colors';

export type RomanizationSize = 'xs' | 'sm' | 'base';

interface Props {
  children: React.ReactNode;
  size?: RomanizationSize;
  color?: string;
  style?: TextStyle;
}

const FONT_SIZES: Record<RomanizationSize, number> = {
  xs: 11,
  sm: 13,
  base: 15,
};

export const Romanization: React.FC<Props> = ({ children, size = 'sm', color, style }) => {
  const theme = useThemeTokens();
  const fontSize = FONT_SIZES[size];

  return (
    <Text
      style={[
        {
          fontFamily: 'Lexend_400Regular',
          fontSize,
          fontStyle: 'italic',
          color: color || theme.textSecondary,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
