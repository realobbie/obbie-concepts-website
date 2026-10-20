/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F15A24',
          'orange-hover': '#D94A18',
          navy: '#1E3A5F',
          'navy-dark': '#0F1E33',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        // Boost text-xs from 12px -> 14px
        xs: ['0.875rem', { lineHeight: '1.25rem' }],
        // Boost text-sm from 14px -> 16px
        sm: ['1rem', { lineHeight: '1.5rem' }],
        // Boost text-base from 16px -> 18px
        base: ['1.125rem', { lineHeight: '1.75rem' }],
        // Boost text-lg from 18px -> 20px
        lg: ['1.25rem', { lineHeight: '1.875rem' }],
      },
    },
  },
  plugins: [],
};