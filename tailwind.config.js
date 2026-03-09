/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#040211',
        primary: {
          DEFAULT: '#8b5cf6', // Violet
          glow: 'rgba(139, 92, 246, 0.5)'
        },
        secondary: {
          DEFAULT: '#3b82f6', // Blue
          glow: 'rgba(59, 130, 246, 0.5)'
        },
        accent: {
          DEFAULT: '#10b981', // Emerald
          glow: 'rgba(16, 185, 129, 0.5)'
        }
      },
      animation: {
        'blob': 'blob 12s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.85)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}