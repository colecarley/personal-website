import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'dark': '#0A192F',
        'dark-blue': '#112240',
        'light-blue': '#233554',
        'yellow': '#FFD700',
        'light': '#F8F8F8',
      }
    }
  },

  plugins: []
} satisfies Config;
