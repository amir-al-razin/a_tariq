import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, colorScheme as nwColorScheme } from 'nativewind';
import { TouchableOpacity, ScrollView, Text, View, Appearance } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '../theme/colors';
import { usePaletteStore, ACCENT_PALETTES, type AccentPaletteId } from '../state/paletteStore';
import { playTapSound } from '../lib/sound';

const THEME_STORAGE_KEY = 'app.theme.preference';

export const SettingsScreen: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const theme = useThemeTokens();
  const { paletteId, setPalette } = usePaletteStore();

  const selectTheme = async (newTheme: 'light' | 'dark') => {
    try {
      playTapSound();
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
      nwColorScheme.set(newTheme);
      if (setColorScheme) setColorScheme(newTheme);
      Appearance.setColorScheme(newTheme);
    } catch (error) {
      console.warn('[THEME] Failed to set theme:', error);
    }
  };

  const palettesList = Object.values(ACCENT_PALETTES);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.canvas }}
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 36, paddingBottom: 64 }}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 32,
          color: theme.textPrimary,
          marginBottom: 4,
        }}>
        {t('settings.title')}
      </Text>
      <Text
        style={{
          fontFamily: 'Lexend_400Regular',
          fontSize: 15,
          color: theme.textSecondary,
          marginBottom: 32,
        }}>
        {t('settings.subtitle')}
      </Text>

      {/* ── Heritage Accent Palettes ── */}
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: theme.accentPrimary,
          marginBottom: 12,
        }}>
        Heritage Accent Palette
      </Text>

      <View style={{ gap: 12, marginBottom: 32 }}>
        {palettesList.map((pal) => {
          const isActive = paletteId === pal.id;
          const primaryColor = theme.isDark ? pal.dark.primary.main : pal.light.primary.main;
          const secondaryColor = theme.isDark ? pal.dark.secondary.main : pal.light.secondary.main;

          return (
            <TouchableOpacity
              key={pal.id}
              activeOpacity={0.8}
              onPress={() => {
                playTapSound();
                setPalette(pal.id as AccentPaletteId);
              }}
              style={{
                width: '100%',
                borderRadius: 24,
                backgroundColor: theme.surfaceWell,
                padding: 18,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1, paddingRight: 12 }}>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 16,
                      color: theme.textPrimary,
                    }}>
                    {pal.name}
                  </Text>
                  {isActive && (
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 8,
                        backgroundColor: theme.accentPrimarySubtle,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 10,
                          letterSpacing: 0.5,
                          textTransform: 'uppercase',
                          color: theme.accentPrimaryText,
                        }}>
                        Active
                      </Text>
                    </View>
                  )}
                </View>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textSecondary,
                  }}>
                  {pal.tagline}
                </Text>
              </View>

              {/* Color swatch previews */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: primaryColor,
                  }}
                />
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: secondaryColor,
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ── Appearance (Light / Dark) ── */}
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: theme.accentPrimary,
          marginBottom: 12,
        }}>
        {t('settings.appearance')}
      </Text>

      <View style={{ gap: 12, marginBottom: 32 }}>
        {(['light', 'dark'] as const).map((mode) => {
          const isActive = colorScheme === mode;
          const label = mode === 'light' ? t('settings.lightTheme') : t('settings.darkTheme');
          const desc =
            mode === 'light' ? t('settings.lightThemeDesc') : t('settings.darkThemeDesc');

          return (
            <TouchableOpacity
              key={mode}
              activeOpacity={0.8}
              onPress={() => selectTheme(mode)}
              style={{
                width: '100%',
                borderRadius: 24,
                backgroundColor: theme.surfaceWell,
                padding: 18,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1, paddingRight: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 16,
                    color: theme.textPrimary,
                  }}>
                  {label}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textSecondary,
                    marginTop: 2,
                  }}>
                  {desc}
                </Text>
              </View>
              {isActive && (
                <Ionicons name="checkmark-circle" size={24} color={theme.accentPrimary} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ── Language ── */}
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: theme.accentPrimary,
          marginBottom: 12,
        }}>
        {t('settings.language')}
      </Text>

      <View style={{ gap: 12, marginBottom: 32 }}>
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <TouchableOpacity
              key={lang.code}
              activeOpacity={0.8}
              onPress={() => {
                playTapSound();
                setLanguage(lang.code);
              }}
              style={{
                width: '100%',
                borderRadius: 24,
                backgroundColor: theme.surfaceWell,
                padding: 18,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1, paddingRight: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 16,
                    color: theme.textPrimary,
                  }}>
                  {lang.nativeLabel}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textSecondary,
                    marginTop: 2,
                  }}>
                  {isActive ? t('settings.active') : t('settings.tapToActivate')}
                </Text>
              </View>
              {isActive && (
                <Ionicons name="checkmark-circle" size={24} color={theme.accentPrimary} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
