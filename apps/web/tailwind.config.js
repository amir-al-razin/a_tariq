/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Lexend', 'system-ui', 'sans-serif'],
        english: ['"Plus Jakarta Sans"', 'Lexend', 'system-ui', 'sans-serif'],
        'english-medium': ['"Plus Jakarta Sans"', 'Lexend', 'system-ui', 'sans-serif'],
        'english-semibold': ['"Plus Jakarta Sans"', 'Lexend', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        arabic: ['var(--font-arabic-family, Cairo)', 'sans-serif'],
        'arabic-medium': ['var(--font-arabic-family, Cairo)', 'sans-serif'],
        'arabic-semibold': ['var(--font-arabic-family, Cairo)', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        vazirmatn: ['Vazirmatn', 'sans-serif'],
        noto: ['"Noto Sans Arabic"', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        mushaf: ['UthmanicHafs', '"KFGQPC Uthmanic Script HAFS"', '"Amiri Quran"', 'Amiri', 'serif'],
        surah: ['surahnames', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'], // Added Noto Sans Bengali font for Bangla text
      },
      fontSize: {
        display: ['34px', { lineHeight: '40px', letterSpacing: '-0.4px' }],
        h1: ['28px', { lineHeight: '34px', letterSpacing: '-0.2px' }],
        h2: ['22px', { lineHeight: '28px', letterSpacing: '-0.1px' }],
        body: ['16px', { lineHeight: '26px' }],
        'body-sm': ['14px', { lineHeight: '22px' }],
        caption: ['12px', { lineHeight: '18px' }],
        'arabic-display': ['44px', { lineHeight: '60px' }],
        'arabic-body': ['18px', { lineHeight: '34px' }],
      },
      colors: {
        accent: {
          primary: {
            DEFAULT: 'var(--accent-primary)',
            hover: 'var(--accent-primary-hover)',
            subtle: 'var(--accent-primary-subtle)',
            text: 'var(--accent-primary-text)',
            glow: 'var(--accent-primary-glow)',
          },
          secondary: {
            DEFAULT: 'var(--accent-secondary)',
            hover: 'var(--accent-secondary-hover)',
            subtle: 'var(--accent-secondary-subtle)',
            text: 'var(--accent-secondary-text)',
            glow: 'var(--accent-secondary-glow)',
          },
        },
        primary: {
          50: '#ECFDF8',
          100: '#D1FAEF',
          200: '#A7F3DE',
          300: '#6EE7C8',
          400: '#34D3AA',
          500: '#16B78E',
          600: '#0F9373',
          700: '#0D775F',
          800: '#0F5F4D',
          900: '#124E41',
        },

        status: {
          success: '#2E7D32',
          warning: '#C77D00',
          danger: '#C62828',
          info: '#1565C0',
        },
      },
    },
  },
  plugins: [],
};
