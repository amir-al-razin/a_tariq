import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, colorScheme as nwColorScheme } from 'nativewind';
import { Pressable, Text } from 'react-native';

const THEME_STORAGE_KEY = 'app.theme.preference';

export const ThemeToggle: React.FC = () => {
  const { colorScheme } = useColorScheme();
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
      style={{
        borderRadius: 9999,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: isDark ? '#262626' : '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 12,
          color: isDark ? '#FAFAFA' : '#171717',
        }}>
        {isDark ? 'Dark' : 'Light'}
      </Text>
    </Pressable>
  );
};
