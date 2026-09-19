import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useThemeTokens } from '../theme/colors';
import { playTapSound } from '../lib/sound';

type HomeScreenProps = {
  navigation: {
    navigate: (screen: 'VolumeOne' | 'VolumeTwo' | 'VolumeThree') => void;
  };
};

type VolumeKey = 'VolumeOne' | 'VolumeTwo' | 'VolumeThree';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useThemeTokens();

  const VOLUMES: {
    key: VolumeKey;
    volumeId: number;
    titleKey: string;
    subtitleKey: string;
    titleAr: string;
    locked: boolean;
  }[] = [
    {
      key: 'VolumeOne',
      volumeId: 1,
      titleKey: 'home.volume1',
      subtitleKey: 'home.volume1Subtitle',
      titleAr: 'الجزء الأول',
      locked: false,
    },
    {
      key: 'VolumeTwo',
      volumeId: 2,
      titleKey: 'home.volume2',
      subtitleKey: 'home.volume2Subtitle',
      titleAr: 'الجزء الثاني',
      locked: false,
    },
    {
      key: 'VolumeThree',
      volumeId: 3,
      titleKey: 'home.volume3',
      subtitleKey: 'home.volume3Subtitle',
      titleAr: 'الجزء الثالث',
      locked: false,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.canvas }}
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 36, paddingBottom: 48 }}
      showsVerticalScrollIndicator={false}>
      {/* Hero Welcome Header */}
      <View style={{ marginBottom: 28 }}>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: theme.accentPrimary,
            marginBottom: 6,
          }}>
          Curriculum Volumes
        </Text>
        <Text
          style={{
            fontFamily: 'Lexend_600SemiBold',
            fontSize: 32,
            color: theme.textPrimary,
            marginBottom: 6,
          }}>
          {t('home.title')}
        </Text>
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 15,
            color: theme.textSecondary,
            lineHeight: 22,
          }}>
          {t('home.subtitle')}
        </Text>
      </View>

      {/* Volume Cards (Level 1 Surface Well, rounded-3xl) */}
      <View style={{ gap: 16 }}>
        {VOLUMES.map((vol) => {
          if (vol.locked) {
            return (
              <View
                key={vol.key}
                style={{
                  width: '100%',
                  borderRadius: 24,
                  backgroundColor: theme.surfaceWell,
                  padding: 24,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: 0.6,
                }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 20,
                      color: theme.textMuted,
                    }}>
                    {t(vol.titleKey)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lexend_400Regular',
                      fontSize: 13,
                      color: theme.textMuted,
                      marginTop: 4,
                    }}>
                    {t('home.locked')}
                  </Text>
                </View>
                <Ionicons name="lock-closed" size={20} color={theme.textMuted} />
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={vol.key}
              activeOpacity={0.85}
              onPress={() => {
                playTapSound();
                navigation.navigate(vol.key);
              }}
              style={{
                width: '100%',
                borderRadius: 24,
                backgroundColor: theme.surfaceWell,
                padding: 24,
                position: 'relative',
                overflow: 'hidden',
              }}>
              {/* Subtle Arabic Watermark */}
              <View
                style={{
                  position: 'absolute',
                  right: -10,
                  top: -10,
                  opacity: 0.04,
                  transform: [{ rotate: '-8deg' }],
                }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 84,
                    color: theme.textPrimary,
                  }}>
                  {vol.titleAr}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    color: theme.accentPrimary,
                  }}>
                  Volume {vol.volumeId}
                </Text>
                <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
              </View>

              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 22,
                  color: theme.textPrimary,
                  marginBottom: 6,
                }}>
                {t(vol.titleKey)}
              </Text>

              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 13,
                  color: theme.textSecondary,
                  lineHeight: 20,
                }}>
                {t(vol.subtitleKey)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
