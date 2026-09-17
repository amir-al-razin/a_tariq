/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        english: ['Lexend_400Regular'],
        'english-medium': ['Lexend_500Medium'],
        'english-semibold': ['Lexend_600SemiBold'],
        arabic: ['NotoSansArabic_400Regular'],
        'arabic-medium': ['NotoSansArabic_500Medium'],
        'arabic-semibold': ['NotoSansArabic_600SemiBold'],
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
        neutral: {
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
