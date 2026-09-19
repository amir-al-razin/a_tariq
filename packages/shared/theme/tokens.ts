/**
 * At-Tariq Design System - Foundational Tokens & Utilities
 *
 * Follows industry-standard design token tiered architecture:
 * Tier 1: Primitives (Neutral scales, Base spacing, Base radii, Base font stacks)
 * Tier 2: Semantic (Surfaces, Foreground/Text, Accents, Feedback Status)
 * Tier 3: Component (Buttons, Badges, Cards, Progress, Nodes)
 */

import {
  type AccentPaletteId,
  getPaletteCssVariables,
} from './palettes';

// ==========================================
// TIER 1: PRIMITIVES
// ==========================================

export const PRIMITIVE_NEUTRALS = {
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

export const PRIMITIVE_SPACING = {
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export const PRIMITIVE_RADII = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const;

export const PRIMITIVE_FONTS = {
  englishPrimary: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
  englishReading: '"Lexend", system-ui, -apple-system, sans-serif',
  arabicCairo: 'Cairo, sans-serif',
  arabicNoto: '"Noto Sans Arabic", sans-serif',
  arabicAmiri: 'Amiri, serif',
  arabicTajawal: 'Tajawal, sans-serif',
  arabicVazirmatn: 'Vazirmatn, sans-serif',
  arabicMushaf: 'UthmanicHafs, "KFGQPC Uthmanic Script HAFS", "Amiri Quran", Amiri, serif',
  bengali: '"Noto Sans Bengali", sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;

export const PRIMITIVE_MOTION = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: {
    stiffness: 350,
    damping: 25,
  },
} as const;

// ==========================================
// TIER 2: SEMANTIC TOKENS
// ==========================================

export interface SemanticStatusScale {
  base: string;
  subtle: string;
  text: string;
  border: string;
}

export interface SemanticModeTokens {
  surface: {
    canvas: string;
    subtle: string;
    raised: string;
    sunken: string;
    overlay: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    muted: string;
    inverse: string;
  };
  status: {
    success: SemanticStatusScale;
    warning: SemanticStatusScale;
    danger: SemanticStatusScale;
    info: SemanticStatusScale;
  };
}

export const SEMANTIC_TOKENS: { light: SemanticModeTokens; dark: SemanticModeTokens } = {
  light: {
    surface: {
      canvas: '#FFFFFF',
      subtle: '#F5F5F5', // neutral-100
      raised: '#FFFFFF', // card on subtle canvas
      sunken: '#E5E5E5', // neutral-200
      overlay: 'rgba(255, 255, 255, 0.88)',
    },
    text: {
      primary: '#0A0A0A', // neutral-950
      secondary: '#404040', // neutral-700
      tertiary: '#737373', // neutral-500
      muted: '#A3A3A3', // neutral-400
      inverse: '#FFFFFF',
    },
    status: {
      success: {
        base: '#15803D',
        subtle: '#DCFCE7',
        text: '#14532D',
        border: '#86EFAC',
      },
      warning: {
        base: '#B45309',
        subtle: '#FEF3C7',
        text: '#78350F',
        border: '#FCD34D',
      },
      danger: {
        base: '#DC2626',
        subtle: '#FEE2E2',
        text: '#7F1D1D',
        border: '#FCA5A5',
      },
      info: {
        base: '#1D4ED8',
        subtle: '#DBEAFE',
        text: '#1E3A8A',
        border: '#93C5FD',
      },
    },
  },
  dark: {
    surface: {
      canvas: '#0A0A0A',
      subtle: '#141414', // neutral-900
      raised: '#1C1C1C', // card on dark canvas
      sunken: '#171717',
      overlay: 'rgba(10, 10, 10, 0.88)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D4D4D4', // neutral-300
      tertiary: '#A3A3A3', // neutral-400
      muted: '#525252', // neutral-600
      inverse: '#0A0A0A',
    },
    status: {
      success: {
        base: '#22C55E',
        subtle: 'rgba(34, 197, 94, 0.16)',
        text: '#86EFAC',
        border: 'rgba(34, 197, 94, 0.3)',
      },
      warning: {
        base: '#F59E0B',
        subtle: 'rgba(245, 158, 11, 0.16)',
        text: '#FDE68A',
        border: 'rgba(245, 158, 11, 0.3)',
      },
      danger: {
        base: '#EF4444',
        subtle: 'rgba(239, 68, 68, 0.16)',
        text: '#FCA5A5',
        border: 'rgba(239, 68, 68, 0.3)',
      },
      info: {
        base: '#3B82F6',
        subtle: 'rgba(59, 130, 246, 0.16)',
        text: '#93C5FD',
        border: 'rgba(59, 130, 246, 0.3)',
      },
    },
  },
};

// ==========================================
// TIER 3: COMPONENT RULES & SPECIFICATIONS
// ==========================================

export const COMPONENT_SPECS = {
  button: {
    sizes: {
      sm: { height: '36px', paddingX: '14px', fontSize: '12px', radius: '9999px' },
      md: { height: '44px', paddingX: '20px', fontSize: '14px', radius: '9999px' },
      lg: { height: '56px', paddingX: '28px', fontSize: '16px', radius: '9999px' },
    },
  },
  card: {
    radii: {
      default: '24px', // rounded-3xl
      compact: '16px', // rounded-2xl
      large: '32px',   // rounded-[32px]
    },
    padding: {
      default: '24px',
      compact: '16px',
      large: '32px',
    },
  },
  chunkNode: {
    size: 72,
    sizeSm: 56,
  },
} as const;

// ==========================================
// THEME RUNTIME UTILITIES & CSS VAR ENGINE
// ==========================================

/**
 * Applies the given palette to the DOM root by setting inline CSS custom properties.
 */
export function applyPaletteToDocument(
  paletteId: AccentPaletteId,
  isDark?: boolean
): void {
  if (typeof document === 'undefined') return;

  const resolvedIsDark =
    typeof isDark === 'boolean'
      ? isDark
      : document.documentElement.classList.contains('dark');

  const cssVars = getPaletteCssVariables(paletteId, resolvedIsDark);
  const root = document.documentElement;

  for (const [key, value] of Object.entries(cssVars)) {
    root.style.setProperty(key, value);
  }

  // Persist preference for session / app continuity
  try {
    localStorage.setItem('tariq-accent-palette', paletteId);
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

/**
 * Calculates WCAG 2.1 contrast ratio between two hex colors.
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getRelativeLuminance(hex1);
  const lum2 = getRelativeLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function getRelativeLuminance(hex: string): number {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}
