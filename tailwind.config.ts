import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        paper: 'var(--color-paper)',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        'primary-contrast': 'var(--color-primary-contrast)'
      }
    },
  },
  plugins: [],
} satisfies Config;
