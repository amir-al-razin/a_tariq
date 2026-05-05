import 'react-native-gesture-handler';
import './i18n'; // must be imported before any component that uses useTranslation

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lexend_400Regular, Lexend_500Medium, Lexend_600SemiBold } from '@expo-google-fonts/lexend';
import {
  NotoSansArabic_400Regular,
  NotoSansArabic_500Medium,
  NotoSansArabic_600SemiBold,
} from '@expo-google-fonts/noto-sans-arabic';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from 'screens/HomeNavigator';
import { SettingsScreen } from 'screens/SettingsScreen';
import { LanguageProvider } from './i18n/LanguageContext';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

import './global.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { colorScheme as nwColorScheme, useColorScheme } from 'nativewind';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Appearance } from 'react-native';

const Tab = createBottomTabNavigator();
const THEME_STORAGE_KEY = 'app.theme.preference';

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [themeReady, setThemeReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    NotoSansArabic_400Regular,
    NotoSansArabic_500Medium,
    NotoSansArabic_600SemiBold,
  });

  // Load saved theme preference on app start
  useEffect(() => {
    const initTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        // Only apply if it's a valid value
        if (savedTheme === 'light' || savedTheme === 'dark') {
          nwColorScheme.set(savedTheme);
          if (setColorScheme) setColorScheme(savedTheme);
          Appearance.setColorScheme(savedTheme);
          console.log('[THEME] Restored saved theme:', savedTheme);
        } else {
          // Clear invalid values
          await AsyncStorage.removeItem(THEME_STORAGE_KEY);
          console.log('[THEME] Using system preference');
        }
      } catch (error) {
        console.warn('[THEME] Error loading theme:', error);
      } finally {
        setThemeReady(true);
      }
    };

    initTheme();
  }, []);

  if (!fontsLoaded || !themeReady) {
    return null;
  }

  const navigationTheme = {
    ...(isDark ? NavigationDarkTheme : NavigationDefaultTheme),
    colors: {
      ...(isDark ? NavigationDarkTheme.colors : NavigationDefaultTheme.colors),
      primary: isDark ? '#16B78E' : '#0D775F',
      background: isDark ? '#1A1815' : '#F8F7F4',
      card: isDark ? '#1A1815' : '#F8F7F4',
      text: isDark ? '#F0EEE8' : '#1A1815',
      border: isDark ? '#22201B' : '#E5E1D8',
    },
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-neutral-50 dark:bg-neutral-900"
        edges={['top', 'left', 'right']}>
        <LanguageProvider>
          <ErrorBoundary>
            <NavigationContainer theme={navigationTheme}>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  sceneStyle: {
                    backgroundColor: isDark ? '#1A1815' : '#F8F7F4',
                  },
                  tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: isDark ? '#22201B' : '#E5E1D8',
                    backgroundColor: isDark ? '#1A1815' : '#F8F7F4',
                    elevation: 0,
                    shadowOpacity: 0,
                  },
                  tabBarLabelStyle: {
                    fontFamily: 'Lexend_500Medium',
                    fontSize: 12,
                  },
                  tabBarActiveTintColor: isDark ? '#F0EEE8' : '#22201B',
                  tabBarInactiveTintColor: isDark ? '#4F4A40' : '#B9AF9C',
                }}>
                <Tab.Screen
                  name="Home"
                  component={HomeNavigator}
                  options={{
                    tabBarIcon: ({ color, focused, size }) => (
                      <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{
                    tabBarIcon: ({ color, focused, size }) => (
                      <Ionicons
                        name={focused ? 'settings' : 'settings-outline'}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </ErrorBoundary>
        </LanguageProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
