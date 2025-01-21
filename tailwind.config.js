/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        paper: 'var(--color-paper)',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        'primary-contrast': 'var(--color-primary-contrast)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        '98': '430px',
      }
    },
  },
  plugins: [],
}

