/**
 * At-Tariq Pedagogical Design System - Theme Palettes & Accent Tokens
 *
 * Architecture:
 * - Zero hardcoded hex colors in UI components.
 * - Components consume semantic tokens (accent-primary, accent-secondary).
 * - 6 curated palettes calibrated for cognitive endurance and Quranic manuscript heritage.
 * - 100% hue consistency between Light Paper and Nocturnal Obsidian modes.
 */

export interface AccentColorScale {
  main: string;
  hover: string;
  subtle: string;
  text: string;
  glow: string;
}

export interface PaletteModeTokens {
  primary: AccentColorScale;
  secondary: AccentColorScale;
}

export interface AccentPalette {
  id: AccentPaletteId;
  name: string;
  tagline: string;
  description: string;
  light: PaletteModeTokens;
  dark: PaletteModeTokens;
}

export type AccentPaletteId =
  | 'kairouan_indigo'
  | 'academic_lapis'
  | 'andalusian_jade'
  | 'persian_teal'
  | 'hijazi_olive'
  | 'monastic_cobalt';

export const DEFAULT_ACCENT_PALETTE: AccentPaletteId = 'kairouan_indigo';

export const ACCENT_PALETTES: Record<AccentPaletteId, AccentPalette> = {
  kairouan_indigo: {
    id: 'kairouan_indigo',
    name: 'Kairouan Indigo',
    tagline: '9th-C Fatimid Manuscript',
    description: 'Direct homage to the Blue Quran of Kairouan. Royal indigo with burnished dune sand gold.',
    light: {
      primary: {
        main: '#4338CA',
        hover: '#3730A3',
        subtle: '#EEF2FF',
        text: '#3730A3',
        glow: 'rgba(67, 56, 202, 0.08)',
      },
      secondary: {
        main: '#C28135',
        hover: '#9A6321',
        subtle: '#FDF8F0',
        text: '#7C4A14',
        glow: 'rgba(194, 129, 53, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#6366F1',
        hover: '#4F46E5',
        subtle: 'rgba(67, 56, 202, 0.16)',
        text: '#A5B4FC',
        glow: 'rgba(99, 102, 241, 0.24)',
      },
      secondary: {
        main: '#D99B4B',
        hover: '#C28135',
        subtle: 'rgba(194, 129, 53, 0.16)',
        text: '#FDE68A',
        glow: 'rgba(217, 155, 75, 0.24)',
      },
    },
  },

  academic_lapis: {
    id: 'academic_lapis',
    name: 'Academic Lapis',
    tagline: 'Tezhip · Focus',
    description: 'Classical Lapis Lazuli with solar amber. High academic focus and clarity.',
    light: {
      primary: {
        main: '#2563EB',
        hover: '#1D4ED8',
        subtle: '#EFF6FF',
        text: '#1E40AF',
        glow: 'rgba(37, 99, 235, 0.08)',
      },
      secondary: {
        main: '#D97706',
        hover: '#B45309',
        subtle: '#FFFBEB',
        text: '#92400E',
        glow: 'rgba(217, 119, 6, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#3B82F6',
        hover: '#2563EB',
        subtle: 'rgba(37, 99, 235, 0.16)',
        text: '#93C5FD',
        glow: 'rgba(59, 130, 246, 0.24)',
      },
      secondary: {
        main: '#F59E0B',
        hover: '#D97706',
        subtle: 'rgba(217, 119, 6, 0.16)',
        text: '#FCD34D',
        glow: 'rgba(245, 158, 11, 0.24)',
      },
    },
  },

  andalusian_jade: {
    id: 'andalusian_jade',
    name: 'Andalusian Jade',
    tagline: 'Cordoba Garden · Growth',
    description: 'Forest jade with honey gold. Connects to Arabic growth traditions without neon tropes.',
    light: {
      primary: {
        main: '#059669',
        hover: '#047857',
        subtle: '#ECFDF5',
        text: '#065F46',
        glow: 'rgba(5, 150, 105, 0.08)',
      },
      secondary: {
        main: '#D97706',
        hover: '#B45309',
        subtle: '#FFFBEB',
        text: '#92400E',
        glow: 'rgba(217, 119, 6, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#10B981',
        hover: '#059669',
        subtle: 'rgba(5, 150, 105, 0.16)',
        text: '#6EE7B7',
        glow: 'rgba(16, 185, 129, 0.24)',
      },
      secondary: {
        main: '#F59E0B',
        hover: '#D97706',
        subtle: 'rgba(217, 119, 6, 0.16)',
        text: '#FCD34D',
        glow: 'rgba(245, 158, 11, 0.24)',
      },
    },
  },

  persian_teal: {
    id: 'persian_teal',
    name: 'Persian Teal',
    tagline: 'Silk Road · Agility',
    description: 'Persian teal with clay terracotta. Harmonizes blue serenity with warm energy.',
    light: {
      primary: {
        main: '#0D9488',
        hover: '#0F766E',
        subtle: '#F0FDFA',
        text: '#115E59',
        glow: 'rgba(13, 148, 136, 0.08)',
      },
      secondary: {
        main: '#C2410C',
        hover: '#9A3412',
        subtle: '#FFF7ED',
        text: '#7C2D12',
        glow: 'rgba(194, 65, 12, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#14B8A6',
        hover: '#0D9488',
        subtle: 'rgba(13, 148, 136, 0.16)',
        text: '#5EEAD4',
        glow: 'rgba(20, 184, 166, 0.24)',
      },
      secondary: {
        main: '#EA580C',
        hover: '#C2410C',
        subtle: 'rgba(194, 65, 12, 0.16)',
        text: '#FDBA74',
        glow: 'rgba(234, 88, 12, 0.24)',
      },
    },
  },

  hijazi_olive: {
    id: 'hijazi_olive',
    name: 'Hijazi Olive',
    tagline: 'Calm · Zero Glare',
    description: 'Olive grove with desert ochre. Restful mindfulness for extended nocturnal study.',
    light: {
      primary: {
        main: '#4D5B44',
        hover: '#3E4A37',
        subtle: '#F4F5F3',
        text: '#2E3728',
        glow: 'rgba(77, 91, 68, 0.08)',
      },
      secondary: {
        main: '#C28135',
        hover: '#9A6321',
        subtle: '#FDF8F0',
        text: '#7C4A14',
        glow: 'rgba(194, 129, 53, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#65775A',
        hover: '#4D5B44',
        subtle: 'rgba(77, 91, 68, 0.18)',
        text: '#A3B19B',
        glow: 'rgba(101, 119, 90, 0.24)',
      },
      secondary: {
        main: '#D99B4B',
        hover: '#C28135',
        subtle: 'rgba(194, 129, 53, 0.16)',
        text: '#FDE68A',
        glow: 'rgba(217, 155, 75, 0.24)',
      },
    },
  },

  monastic_cobalt: {
    id: 'monastic_cobalt',
    name: 'Monastic Cobalt',
    tagline: 'Apple · 1-Accent',
    description: 'Cobalt solo with carbon slate. Strict minimalist discipline with surgical accent focus.',
    light: {
      primary: {
        main: '#1D4ED8',
        hover: '#1E40AF',
        subtle: '#EFF6FF',
        text: '#1E40AF',
        glow: 'rgba(29, 78, 216, 0.08)',
      },
      secondary: {
        main: '#475569',
        hover: '#334155',
        subtle: '#F8FAFC',
        text: '#1E293B',
        glow: 'rgba(71, 85, 105, 0.08)',
      },
    },
    dark: {
      primary: {
        main: '#2563EB',
        hover: '#1D4ED8',
        subtle: 'rgba(29, 78, 216, 0.16)',
        text: '#93C5FD',
        glow: 'rgba(37, 99, 235, 0.24)',
      },
      secondary: {
        main: '#64748B',
        hover: '#475569',
        subtle: 'rgba(71, 85, 105, 0.16)',
        text: '#CBD5E1',
        glow: 'rgba(100, 116, 139, 0.24)',
      },
    },
  },
};

/**
 * Returns CSS custom properties for a given palette and theme mode.
 */
export function getPaletteCssVariables(
  paletteId: AccentPaletteId = DEFAULT_ACCENT_PALETTE,
  isDark = false
): Record<string, string> {
  const palette = ACCENT_PALETTES[paletteId] || ACCENT_PALETTES[DEFAULT_ACCENT_PALETTE];
  const tokens = isDark ? palette.dark : palette.light;

  return {
    '--accent-primary': tokens.primary.main,
    '--accent-primary-hover': tokens.primary.hover,
    '--accent-primary-subtle': tokens.primary.subtle,
    '--accent-primary-text': tokens.primary.text,
    '--accent-primary-glow': tokens.primary.glow,

    '--accent-secondary': tokens.secondary.main,
    '--accent-secondary-hover': tokens.secondary.hover,
    '--accent-secondary-subtle': tokens.secondary.subtle,
    '--accent-secondary-text': tokens.secondary.text,
    '--accent-secondary-glow': tokens.secondary.glow,
  };
}
