import 'react-native-gesture-handler';
import './i18n'; // must be imported before any component that uses useTranslation

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import {
  NotoSansArabic_400Regular,
  NotoSansArabic_500Medium,
  NotoSansArabic_600SemiBold,
  NotoSansArabic_700Bold,
} from '@expo-google-fonts/noto-sans-arabic';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { HomeNavigator } from 'screens/HomeNavigator';
import { ReviewScreen } from 'screens/ReviewScreen';
import { VocabularyScreen } from 'screens/VocabularyScreen';
import { MushafScreen } from 'screens/MushafScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import { LanguageProvider } from './i18n/LanguageContext';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

import './global.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { colorScheme as nwColorScheme, useColorScheme } from 'nativewind';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Appearance } from 'react-native';
import { useThemeTokens } from './theme/colors';

const Tab = createBottomTabNavigator();
const THEME_STORAGE_KEY = 'app.theme.preference';

function MainAppTabs() {
  const theme = useThemeTokens();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const navigationTheme = {
    ...(theme.isDark ? NavigationDarkTheme : NavigationDefaultTheme),
    colors: {
      ...(theme.isDark ? NavigationDarkTheme.colors : NavigationDefaultTheme.colors),
      primary: theme.accentPrimary,
      background: theme.canvas,
      card: theme.canvas,
      text: theme.textPrimary,
      border: theme.borderSubtle,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: theme.canvas,
          },
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: theme.canvas,
            elevation: 0,
            shadowOpacity: 0,
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontFamily: 'Lexend_500Medium',
            fontSize: 11,
          },
          tabBarItemStyle: {
            paddingVertical: 2,
          },
          tabBarActiveTintColor: theme.accentPrimary,
          tabBarInactiveTintColor: theme.textMuted,
        }}>
        <Tab.Screen
          name="LearnTab"
          component={HomeNavigator}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeMain';
            const hideTabBar = routeName === 'Lesson' || routeName === 'ChunkEngine';
            return {
              tabBarLabel: t('nav.learn', { defaultValue: 'Learn' }),
              tabBarStyle: hideTabBar
                ? { display: 'none' }
                : {
                    borderTopWidth: 0,
                    backgroundColor: theme.canvas,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
                    paddingTop: 8,
                  },
              tabBarIcon: ({ color, focused, size }) => (
                <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />
              ),
            };
          }}
        />
        <Tab.Screen
          name="ReviewTab"
          component={ReviewScreen}
          options={{
            tabBarLabel: t('nav.review', { defaultValue: 'Review' }),
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons name={focused ? 'flash' : 'flash-outline'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="VocabularyTab"
          component={VocabularyScreen}
          options={{
            tabBarLabel: t('nav.vocabulary', { defaultValue: 'Vocabulary' }),
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons name={focused ? 'layers' : 'layers-outline'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MushafTab"
          component={MushafScreen}
          options={{
            tabBarLabel: t('nav.mushaf', { defaultValue: 'Mushaf' }),
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons name={focused ? 'reader' : 'reader-outline'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsScreen}
          options={{
            tabBarLabel: t('nav.settings', { defaultValue: 'Settings' }),
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
  );
}

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [themeReady, setThemeReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    NotoSansArabic_400Regular,
    NotoSansArabic_500Medium,
    NotoSansArabic_600SemiBold,
    NotoSansArabic_700Bold,
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
  }, [setColorScheme]);

  if (!fontsLoaded || !themeReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-white dark:bg-neutral-950"
        edges={['top', 'left', 'right']}>
        <LanguageProvider>
          <ErrorBoundary>
            <MainAppTabs />
          </ErrorBoundary>
        </LanguageProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
