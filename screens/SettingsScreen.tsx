import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { Appearance, Pressable, ScrollView, Text, View } from 'react-native';

const THEME_STORAGE_KEY = 'app.theme.preference';

export const SettingsScreen: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const selectTheme = async (theme: 'light' | 'dark') => {
    // Force both NativeWind and the RN Appearance API so OS dark mode is overridden
    Appearance.setColorScheme(theme);
    setColorScheme(theme);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  return (
    <ScrollView
      className="flex-1 bg-neutral-50 dark:bg-neutral-900"
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}>
      <View className="gap-4">
        <Text className="font-english-semibold text-display text-primary-800 dark:text-primary-200">
          Settings
        </Text>
        <Text className="font-english text-body text-neutral-700 dark:text-neutral-200">
          Appearance preferences for reading comfort.
        </Text>

        <View className="gap-3">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Use light theme"
            onPress={() => {
              void selectTheme('light');
            }}
            className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <Text className="font-english-semibold text-h2 text-primary-700 dark:text-primary-200">
              Light Theme
            </Text>
            <Text className="mt-2 font-english text-body-sm text-neutral-700 dark:text-neutral-200">
              Bright background, high readability, ideal for daylight study sessions.
            </Text>
            <Text className="mt-3 font-english-medium text-caption text-primary-700 dark:text-primary-300">
              {colorScheme === 'light' ? 'Currently active' : 'Tap to activate'}
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Use dark theme"
            onPress={() => {
              void selectTheme('dark');
            }}
            className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <Text className="font-english-semibold text-h2 text-primary-700 dark:text-primary-200">
              Dark Theme
            </Text>
            <Text className="mt-2 font-english text-body-sm text-neutral-700 dark:text-neutral-200">
              Low-glare mode, calmer contrast, best for evening or low-light reading.
            </Text>
            <Text className="mt-3 font-english-medium text-caption text-primary-700 dark:text-primary-300">
              {colorScheme === 'dark' ? 'Currently active' : 'Tap to activate'}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
