import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, colorScheme as nwColorScheme } from 'nativewind';
import { Pressable, Text } from 'react-native';

const THEME_STORAGE_KEY = 'app.theme.preference';

export const ThemeToggle: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleTheme = async () => {
    const newTheme = isDark ? 'light' : 'dark';
    try {
      // Save to persistent storage
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
      
      // Apply color scheme - this will automatically update useColorScheme hook
      nwColorScheme.set(newTheme);
      
      console.log('[THEME] Toggled to:', newTheme);
    } catch (error) {
      console.warn('[THEME] Failed to toggle theme:', error);
    }
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Toggle theme"
      onPress={toggleTheme}
      className="rounded-xl border border-primary-200 bg-primary-50 px-3 py-2 dark:border-primary-700 dark:bg-primary-900/40">
      <Text className="font-english-semibold text-caption text-primary-800 dark:text-primary-100">
        {isDark ? 'Dark' : 'Light'}
      </Text>
    </Pressable>
  );
};
