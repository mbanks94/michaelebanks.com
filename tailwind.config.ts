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
      boxShadow: {
        'project-card':
          '15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)',
      },
      colors: {
        eerie: '#212121',
        ash: '#B1B6A6',
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
