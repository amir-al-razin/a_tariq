// theme/colors.ts
export const neutral = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#E5E5E5',
  300: '#D4D4D4',
  400: '#A3A3A3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0A0A0A',
} as const;
export const vol1 = {  // emerald teal
  50: '#ECFDF8', 100: '#D1FAEF', 200: '#A7F3DE',
  300: '#6EE7C8', 400: '#34D3AA', 500: '#16B78E',
  600: '#0F9373', 700: '#0D775F', 800: '#0F5F4D',
  900: '#0A4134',
} as const;
export const vol2 = {  // amber gold
  50: '#FFFBEB', 100: '#FEF3C7', 200: '#FDE68A',
  300: '#FCD34D', 400: '#FBBF24', 500: '#F59E0B',
  600: '#D97706', 700: '#B45309', 800: '#92400E',
  900: '#78350F',
} as const;
export const vol3 = {  // violet indigo
  50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FE',
  300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6',
  600: '#7C3AED', 700: '#6D28D9', 800: '#5B21B6',
  900: '#4C1D95',
} as const;
export const feedback = {
  correct: '#22c55e', correctBg: '#f0fdf4', correctBgDark: '#052e16',
  wrong: '#ef4444', wrongBg: '#fef2f2', wrongBgDark: '#3f0c0c',
} as const;
export type VolumeAccent = typeof vol1 | typeof vol2 | typeof vol3;
export const VOLUME_ACCENT = { 1: vol1, 2: vol2, 3: vol3 } as const;
