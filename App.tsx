import 'react-native-gesture-handler';

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
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

import './global.css';
import { useColorScheme } from 'nativewind';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

      if (savedTheme === 'light' || savedTheme === 'dark') {
        setColorScheme(savedTheme);
      } else {
        setColorScheme('light');
      }

      setThemeReady(true);
    };

    void loadTheme();
  }, [setColorScheme]);

  if (!fontsLoaded || !themeReady) {
    return null;
  }

  const navigationTheme = {
    ...(isDark ? NavigationDarkTheme : NavigationDefaultTheme),
    colors: {
      ...(isDark ? NavigationDarkTheme.colors : NavigationDefaultTheme.colors),
      primary: isDark ? '#A7F3DE' : '#0D775F',
      background: isDark ? '#3E3A33' : '#F8F7F4',
      card: isDark ? '#3E3A33' : '#F8F7F4',
      text: isDark ? '#F0EEE8' : '#3E3A33',
      border: isDark ? '#645C4E' : '#E5E1D8',
    },
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-neutral-50 dark:bg-neutral-900"
        edges={['top', 'left', 'right']}>
        <NavigationContainer theme={navigationTheme}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              sceneStyle: {
                backgroundColor: isDark ? '#3E3A33' : '#F8F7F4',
              },
              tabBarStyle: {
                borderTopWidth: 1,
                borderTopColor: isDark ? '#645C4E' : '#E5E1D8',
                backgroundColor: isDark ? '#3E3A33' : '#F8F7F4',
                elevation: 0,
                shadowOpacity: 0,
              },
              tabBarLabelStyle: {
                fontFamily: 'Lexend_500Medium',
                fontSize: 12,
              },
              tabBarActiveTintColor: isDark ? '#A7F3DE' : '#0D775F',
              tabBarInactiveTintColor: isDark ? '#B9AF9C' : '#7D7463',
            }}>
            <Tab.Screen
              name="Home"
              component={HomeNavigator}
              options={{
                tabBarIcon: ({ color, focused, size }) => (
                  <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
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
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
