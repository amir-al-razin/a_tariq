import { useColorScheme } from 'nativewind';
import { Pressable, Text } from 'react-native';

export const ThemeToggle: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleTheme = () => {
    setColorScheme(isDark ? 'light' : 'dark');
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
