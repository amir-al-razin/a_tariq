import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '../../theme/colors';

interface Props {
  title?: string;
  subtitle?: string;
  progress?: number; // 0 to 1
  onBack?: () => void;
  onClose?: () => void;
  showClose?: boolean;
}

export const LessonHeader: React.FC<Props> = ({
  title,
  subtitle,
  progress = 0,
  onBack,
  onClose,
  showClose = false,
}) => {
  const theme = useThemeTokens();
  const progressPercent = Math.round(Math.min(Math.max(progress, 0), 1) * 100);

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: theme.canvas,
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
        gap: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* Left: Back or empty spacer */}
        {onBack ? (
          <Pressable
            onPress={onBack}
            style={({ pressed }) => ({
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pressed ? 0.8 : 1,
            })}>
            <Ionicons name="arrow-back" size={20} color={theme.textPrimary} />
          </Pressable>
        ) : (
          <View style={{ width: 40, height: 40 }} />
        )}

        {/* Center: Title + Subtitle */}
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 8 }}>
          {title && (
            <Text
              numberOfLines={1}
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 14,
                color: theme.textPrimary,
                textAlign: 'center',
              }}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              numberOfLines={1}
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 11,
                color: theme.textSecondary,
                textAlign: 'center',
                marginTop: 2,
              }}>
              {subtitle}
            </Text>
          )}
        </View>

        {/* Right: Close or Percentage pill */}
        {showClose && onClose ? (
          <Pressable
            onPress={onClose}
            style={({ pressed }) => ({
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pressed ? 0.8 : 1,
            })}>
            <Ionicons name="close" size={20} color={theme.textPrimary} />
          </Pressable>
        ) : (
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 9999,
              backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                color: theme.accentPrimary,
              }}>
              {progressPercent}%
            </Text>
          </View>
        )}
      </View>

      {/* Borderless Tone-on-Tone Progress Bar */}
      <View
        style={{
          height: 6,
          width: '100%',
          borderRadius: 3,
          backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
          overflow: 'hidden',
        }}>
        <View
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            borderRadius: 3,
            backgroundColor: theme.accentPrimary,
          }}
        />
      </View>
    </View>
  );
};
