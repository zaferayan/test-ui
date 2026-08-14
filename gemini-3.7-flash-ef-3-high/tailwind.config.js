/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        react: {
          blue: '#00d8ff',
          dark: '#23272f',
          navy: '#0f172a',
          brand: '#61dafb',
          accent: '#0284c7',
          light: '#f0f7ff',
          border: '#e2e8f0',
          card: '#eef6fc',
          cardAlt: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'Menlo', 'monospace']
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(14, 165, 233, 0.08), 0 8px 10px -6px rgba(14, 165, 233, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'float': '0 20px 35px -5px rgba(2, 132, 199, 0.15)',
        'glow': '0 0 25px rgba(97, 218, 251, 0.45)'
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
