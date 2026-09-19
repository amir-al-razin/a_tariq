import { useColorScheme } from 'nativewind';
import {
  PRIMITIVE_NEUTRALS,
  ACCENT_PALETTES,
  DEFAULT_ACCENT_PALETTE,
  type AccentPaletteId,
} from '@tariq/shared';
import { usePaletteStore } from '../state/paletteStore';

// Tier 1: Primitives
export const neutral = PRIMITIVE_NEUTRALS;

// Status Invariants (Fixed across all themes)
export const STATUS_COLORS = {
  light: {
    success: '#15803D',
    successSubtle: '#DCFCE7',
    successText: '#14532D',
    danger: '#DC2626',
    dangerSubtle: '#FEE2E2',
    dangerText: '#7F1D1D',
    warning: '#B45309',
    warningSubtle: '#FEF3C7',
    warningText: '#78350F',
    info: '#1D4ED8',
    infoSubtle: '#DBEAFE',
    infoText: '#1E3A8A',
  },
  dark: {
    success: '#22C55E',
    successSubtle: 'rgba(34, 197, 94, 0.16)',
    successText: '#86EFAC',
    danger: '#EF4444',
    dangerSubtle: 'rgba(239, 68, 68, 0.16)',
    dangerText: '#FCA5A5',
    warning: '#F59E0B',
    warningSubtle: 'rgba(245, 158, 11, 0.16)',
    warningText: '#FCD34D',
    info: '#3B82F6',
    infoSubtle: 'rgba(59, 130, 246, 0.16)',
    infoText: '#93C5FD',
  },
} as const;

export interface StatusTokens {
  success: string;
  successSubtle: string;
  successText: string;
  danger: string;
  dangerSubtle: string;
  dangerText: string;
  warning: string;
  warningSubtle: string;
  warningText: string;
  info: string;
  infoSubtle: string;
  infoText: string;
}

export interface ThemeTokens {
  isDark: boolean;
  paletteId: AccentPaletteId;
  paletteName: string;
  // Accent Primary
  accentPrimary: string;
  accentPrimaryHover: string;
  accentPrimarySubtle: string;
  accentPrimaryText: string;
  accentPrimaryGlow: string;
  // Accent Secondary
  accentSecondary: string;
  accentSecondaryHover: string;
  accentSecondarySubtle: string;
  accentSecondaryText: string;
  accentSecondaryGlow: string;
  // Luminance Elevation Levels
  canvas: string; // Level 0: App background
  surfaceWell: string; // Level 1: Container / card well
  surfaceRaised: string; // Level 2: Focused card inside well
  surfaceOverlay: string; // Level 3: Modals / bottom sheets
  // Semantic Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderSubtle: string;
  // Status
  status: StatusTokens;
  neutral: typeof PRIMITIVE_NEUTRALS;
}

export function getThemeTokens(
  isDark: boolean,
  paletteId: AccentPaletteId = DEFAULT_ACCENT_PALETTE
): ThemeTokens {
  const palette = ACCENT_PALETTES[paletteId] || ACCENT_PALETTES[DEFAULT_ACCENT_PALETTE];
  const modeTokens = isDark ? palette.dark : palette.light;
  const statusTokens = isDark ? STATUS_COLORS.dark : STATUS_COLORS.light;

  return {
    isDark,
    paletteId,
    paletteName: palette.name,
    accentPrimary: modeTokens.primary.main,
    accentPrimaryHover: modeTokens.primary.hover,
    accentPrimarySubtle: modeTokens.primary.subtle,
    accentPrimaryText: modeTokens.primary.text,
    accentPrimaryGlow: modeTokens.primary.glow,
    accentSecondary: modeTokens.secondary.main,
    accentSecondaryHover: modeTokens.secondary.hover,
    accentSecondarySubtle: modeTokens.secondary.subtle,
    accentSecondaryText: modeTokens.secondary.text,
    accentSecondaryGlow: modeTokens.secondary.glow,
    canvas: isDark ? neutral[950] : '#FFFFFF',
    surfaceWell: isDark ? neutral[900] : neutral[100],
    surfaceRaised: isDark ? '#1F1F1F' : '#FFFFFF',
    surfaceOverlay: isDark ? neutral[900] : '#FFFFFF',
    textPrimary: isDark ? neutral[100] : neutral[900],
    textSecondary: isDark ? neutral[400] : neutral[600],
    textMuted: isDark ? neutral[500] : neutral[400],
    borderSubtle: isDark ? neutral[800] : neutral[200],
    status: statusTokens,
    neutral,
  };
}

export function useThemeTokens(): ThemeTokens {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const paletteId = usePaletteStore((s) => s.paletteId);
  return getThemeTokens(isDark, paletteId);
}

// Backward-compatibility aliases for legacy code
export const vol1 = {
  50: '#ECFDF8',
  100: '#D1FAEF',
  200: '#A7F3DE',
  300: '#6EE7C8',
  400: '#34D3AA',
  500: '#16B78E',
  600: '#0F9373',
  700: '#0D775F',
  800: '#0F5F4D',
  900: '#0A4134',
} as const;

export const vol2 = {
  50: '#FFFBEB',
  100: '#FEF3C7',
  200: '#FDE68A',
  300: '#FCD34D',
  400: '#FBBF24',
  500: '#F59E0B',
  600: '#D97706',
  700: '#B45309',
  800: '#92400E',
  900: '#78350F',
} as const;

export const vol3 = {
  50: '#F5F3FF',
  100: '#EDE9FE',
  200: '#DDD6FE',
  300: '#C4B5FD',
  400: '#A78BFA',
  500: '#8B5CF6',
  600: '#7C3AED',
  700: '#6D28D9',
  800: '#5B21B6',
  900: '#4C1D95',
} as const;

export const feedback = {
  correct: '#22c55e',
  correctBg: '#f0fdf4',
  correctBgDark: '#052e16',
  wrong: '#ef4444',
  wrongBg: '#fef2f2',
  wrongBgDark: '#3f0c0c',
} as const;

export type VolumeAccent = typeof vol1 | typeof vol2 | typeof vol3;
export const VOLUME_ACCENT = { 1: vol1, 2: vol2, 3: vol3 } as const;
