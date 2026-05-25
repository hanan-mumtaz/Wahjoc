/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary scale builds around your main background color: Warm Cream (#fef6f3)
        primary: {
          50: '#ffffff',
          100: '#fef6f3', // <-- Your exact background cream
          200: '#FEFEFE',
          300: '#fbd4c6',
          400: '#f7b49f',
          500: '#e09882', // Darker shades for clean text readability on cream backgrounds
          600: '#c57861',
          700: '#a75c47',
          800: '#8b4735',
          900: '#733c2d',
          950: '#3e1d15',
        },
        // Accent scale builds around your rich logo red (#8b0809)
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#8b0809', // <-- Your exact logo red
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Semantic brand shortcuts to keep your code clean
        brand: {
          cream: '#fef6f3',     // Main Background
          red: '#8b0809',       // Brand/Logo Red Accent
          dark: '#1e110e',      // A deep, rich warm black for readable text over cream
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 8, 9, 0.15)',
        'glow-lg': '0 0 40px rgba(139, 8, 9, 0.25)',
        'glow-xl': '0 0 60px rgba(139, 8, 9, 0.35)',
      },
    },
  },
  plugins: [],
};