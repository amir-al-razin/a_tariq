# Theming Architecture (NativeWind v4 + Expo)

This document outlines the theming system used in this application. It is crucial to follow these guidelines to prevent NativeWind v4 and Android's native Appearance APIs from breaking or overriding each other.

## Core Technologies
- **NativeWind v4** (`nativewind`): Manages the translation of Tailwind CSS classes to React Native stylesheets natively.
- **Expo System UI** (`expo-system-ui`): Required for Expo to properly apply the `userInterfaceStyle` to the native Android window.
- **React Native Appearance API**: Used as a robust fallback to ensure manual theme toggles register with the OS.

## Configuration & Setup

### 1. Tailwind Configuration (`tailwind.config.js`)
- **CRITICAL**: Do **NOT** use `darkMode: 'class'`. 
  - NativeWind v4 relies on native media queries (`@media (prefers-color-scheme)`) rather than DOM class manipulation. Adding `darkMode: 'class'` breaks NativeWind's ability to sync with the OS and manual toggles on mobile.
- Custom tokens for colors (`neutral`, `primary`), fonts, and text sizes are defined in the `theme.extend` object.

### 2. Expo Configuration (`app.json`)
- `"userInterfaceStyle": "automatic"` must be set to allow NativeWind to handle both light and dark states dynamically.
- **Custom Config Plugin**: The app uses a custom plugin (`plugins/withDisableForcedDarkModeAndroid.js`) mapped in `app.json`.
  - **Why**: Some Android devices (like Xiaomi or MIUI) have a "Force Dark" feature that aggressively inverts light colors to dark if the system is in Dark Mode, even if the app specifies its own dark mode colors. This plugin injects `android:forceDarkAllowed="false"` into the active `AppTheme` inside Android's `styles.xml`.
  - **Important**: Because this relies on a native plugin, **theming fixes will NOT work in Expo Go**. The app must be tested via a Development Build (`npx expo run:android`) or a locally compiled APK (`pnpm android:apk:local`).

## Theme Toggling Logic

To manually switch between Light and Dark mode, the app uses a dual-trigger approach to bypass known bugs in the React Native / Expo Go sandbox lifecycle:

```typescript
import { colorScheme as nwColorScheme } from 'nativewind';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = 'app.theme.preference';

// 1. Save preference to storage
await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);

// 2. Trigger NativeWind's internal state
nwColorScheme.set(theme);

// 3. Trigger React Native's core API (Crucial fallback)
Appearance.setColorScheme(theme);
```

### Where to Find Theme Logic
- **Initialization**: `App.tsx` reads `THEME_STORAGE_KEY` from `AsyncStorage` on mount and applies the saved scheme using the dual-trigger approach. It also configures the React Navigation theme colors dynamically based on `colorScheme === 'dark'`.
- **User Interface**: `screens/SettingsScreen.tsx` provides the manual UI toggle for the user.
- **Styling**: All components use standard Tailwind variants (e.g., `className="bg-neutral-50 dark:bg-neutral-900"`). Do not attempt to manually append a `'dark'` string to class names.
