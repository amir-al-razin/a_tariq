import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, colorScheme as nwColorScheme } from 'nativewind';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n';
import Ionicons from '@expo/vector-icons/Ionicons';

const THEME_STORAGE_KEY = 'app.theme.preference';

export const SettingsScreen: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const selectTheme = async (theme: 'light' | 'dark') => {
    try {
      // Save to persistent storage
      await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
      
      // Apply color scheme - this will automatically update useColorScheme hook
      nwColorScheme.set(theme);
      
      console.log('[THEME] Set to:', theme);
    } catch (error) {
      console.warn('[THEME] Failed to set theme:', error);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-neutral-50 dark:bg-neutral-900"
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 48 }}
      showsVerticalScrollIndicator={false}>

      <Text className="font-english-semibold text-display text-neutral-900 dark:text-neutral-100 mb-1">
        {t('settings.title')}
      </Text>
      <Text className="font-english text-body text-neutral-500 dark:text-neutral-400 mb-8">
        {t('settings.subtitle')}
      </Text>

      {/* ── Language ── */}
      <Text className="font-english-semibold text-caption text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
        {t('settings.language')}
      </Text>
      <View className="gap-3 mb-8">
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <Pressable
              key={lang.code}
              accessibilityRole="button"
              accessibilityLabel={`Switch to ${lang.label}`}
              onPress={() => setLanguage(lang.code)}
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-5 active:opacity-70 dark:border-neutral-700 dark:bg-neutral-800">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="font-english-semibold text-h2 text-neutral-900 dark:text-neutral-100">
                    {lang.nativeLabel}
                  </Text>
                  <Text className="mt-1 font-english text-body-sm text-neutral-500 dark:text-neutral-400">
                    {isActive ? t('settings.active') : t('settings.tapToActivate')}
                  </Text>
                </View>
                {isActive && (
                  <Ionicons name="checkmark-circle" size={22} color="#34D3AA" />
                )}
              </View>
            </Pressable>
          );
        })}
        <Text className="font-english text-caption text-neutral-400 dark:text-neutral-600 px-1">
          {t('settings.languageNote')}
        </Text>
      </View>

      {/* ── Appearance ── */}
      <Text className="font-english-semibold text-caption text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
        {t('settings.appearance')}
      </Text>
      <View className="gap-3">
        {(['light', 'dark'] as const).map((theme) => {
          const isActive = colorScheme === theme;
          const label = theme === 'light' ? t('settings.lightTheme') : t('settings.darkTheme');
          const desc = theme === 'light' ? t('settings.lightThemeDesc') : t('settings.darkThemeDesc');
          return (
            <Pressable
              key={theme}
              accessibilityRole="button"
              accessibilityLabel={`Use ${theme} theme`}
              onPress={() => selectTheme(theme)}
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-5 active:opacity-70 dark:border-neutral-700 dark:bg-neutral-800">
              <View className="flex-row items-center justify-between">
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text className="font-english-semibold text-h2 text-neutral-900 dark:text-neutral-100">
                    {label}
                  </Text>
                  <Text className="mt-1 font-english text-body-sm text-neutral-500 dark:text-neutral-400">
                    {desc}
                  </Text>
                  <Text className="mt-2 font-english text-caption text-neutral-400 dark:text-neutral-600">
                    {isActive ? t('settings.active') : t('settings.tapToActivate')}
                  </Text>
                </View>
                {isActive && (
                  <Ionicons name="checkmark-circle" size={22} color="#34D3AA" />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};
