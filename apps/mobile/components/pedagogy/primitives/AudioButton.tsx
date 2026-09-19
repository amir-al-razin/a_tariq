import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '../../../theme/colors';
import { playTapSound } from '../../../lib/sound';

export interface AudioButtonProps {
  onPress?: () => void;
  isPlaying?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  onPress,
  isPlaying = false,
  size = 'md',
  label = 'Pronounce',
}) => {
  const theme = useThemeTokens();

  const dimensions = {
    sm: { size: 36, icon: 16 },
    md: { size: 48, icon: 22 },
    lg: { size: 56, icon: 26 },
  }[size];

  const handlePress = () => {
    playTapSound();
    onPress?.();
  };

  return (
    <Pressable
      accessibilityLabel={label}
      onPress={handlePress}
      style={({ pressed }) => ({
        width: dimensions.size,
        height: dimensions.size,
        borderRadius: dimensions.size / 2,
        backgroundColor: isPlaying
          ? theme.accentPrimary
          : theme.isDark
            ? theme.neutral[800]
            : theme.neutral[100],
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.85 : 1,
      })}>
      <Ionicons
        name={isPlaying ? 'volume-high' : 'volume-medium-outline'}
        size={dimensions.icon}
        color={isPlaying ? '#FFFFFF' : theme.textPrimary}
      />
    </Pressable>
  );
};
