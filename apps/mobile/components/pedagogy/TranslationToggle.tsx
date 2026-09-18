import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useThemeTokens } from '../../theme/colors';

interface Props {
  translation: string;
  defaultOpen?: boolean;
}

export const TranslationToggle: React.FC<Props> = ({ translation, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { t } = useTranslation();
  const theme = useThemeTokens();

  return (
    <View style={{ width: '100%', gap: 8 }}>
      <Pressable
        onPress={() => setIsOpen((prev) => !prev)}
        style={({ pressed }) => ({
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 9999,
          backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
          paddingHorizontal: 20,
          paddingVertical: 14,
          opacity: pressed ? 0.9 : 1,
        })}>
        <Text
          style={{
            fontFamily: 'Lexend_500Medium',
            fontSize: 13,
            color: theme.textPrimary,
          }}>
          {isOpen
            ? (t('common.hideTranslation') ?? 'Hide Translation')
            : (t('common.showTranslation') ?? 'Show Translation')}
        </Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.textSecondary}
        />
      </Pressable>

      {isOpen && (
        <View
          style={{
            width: '100%',
            borderRadius: 24,
            backgroundColor: theme.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.03)',
            padding: 18,
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.isDark ? theme.neutral[300] : theme.neutral[700],
              lineHeight: 22,
            }}>
            {translation}
          </Text>
        </View>
      )}
    </View>
  );
};
