// theme/colors.ts
export const neutral = {
  50: '#F8F7F4', 100: '#F0EEE8', 200: '#E5E1D8',
  300: '#D5CEBF', 400: '#B9AF9C', 500: '#9A8F7B',
  600: '#7D7463', 700: '#4F4A40', 800: '#22201B',
  900: '#1A1815',
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
  100: '#EDE9FE', 300: '#C4B5FD', 400: '#A78BFA',
  500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9',
  800: '#5B21B6', 900: '#4C1D95',
} as const;
export const feedback = {
  correct: '#22c55e', correctBg: '#f0fdf4', correctBgDark: '#052e16',
  wrong: '#ef4444', wrongBg: '#fef2f2', wrongBgDark: '#3f0c0c',
} as const;
export type VolumeAccent = typeof vol1 | typeof vol2 | typeof vol3;
export const VOLUME_ACCENT = { 1: vol1, 2: vol2, 3: vol3 } as const;
