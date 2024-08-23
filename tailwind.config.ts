import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite both',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0',
          },
          '30%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      colors: {
        light: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E8E8E8',
          400: '#E0E0E0',
        },
        dark: {
          500: '#252525',
          600: '#212121',
          700: '#171717',
        },
        ash: {
          100: '#B1B6A6',
          400: '#939A84',
        },
        cadet: '#8A95A5',
        eerie: '#212121',
        pumpkin: {
          100: '#F6781E',
          400: '#DF6108',
        },
      },
      boxShadow: {
        button: '0 0 0 3px #2f2e41, 0 6px 0 #2f2e41',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
