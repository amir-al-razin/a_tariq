import React from 'react';
import { View, Text } from 'react-native';
import { useLanguage } from '../../i18n/LanguageContext';
import { useThemeTokens } from '../../theme/colors';
import { ArabicText } from './ArabicText';
import { Romanization } from './Romanization';

interface Props {
  arabic: string;
  romanized?: string;
  english: string;
  bangla?: string;
  showRomanization?: boolean;
}

export const ExampleCard: React.FC<Props> = ({
  arabic,
  romanized,
  english,
  bangla,
  showRomanization = true,
}) => {
  const { t_content } = useLanguage();
  const theme = useThemeTokens();
  const translation = t_content(english, bangla);

  return (
    <View
      style={{
        borderRadius: 24,
        backgroundColor: theme.isDark ? theme.neutral[900] : theme.neutral[100],
        padding: 24,
        gap: 16,
      }}>
      <View style={{ alignItems: 'flex-end', gap: 4 }}>
        <ArabicText size="xl">{arabic}</ArabicText>
        {showRomanization && romanized ? <Romanization size="sm">{romanized}</Romanization> : null}
      </View>

      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: theme.isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          borderRadius: 1,
        }}
      />

      <Text
        style={{
          fontFamily: 'Lexend_400Regular',
          fontSize: 15,
          color: theme.isDark ? theme.neutral[200] : theme.neutral[700],
          lineHeight: 22,
        }}>
        {translation}
      </Text>
    </View>
  );
};
