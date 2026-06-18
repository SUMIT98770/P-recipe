import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0F172A',
        darkSurface: '#1E293B',
        lightBg: '#F8FAFC',
        lightSurface: '#FFFFFF',
        accentTeal: '#00D9F5',
        accentPurple: '#7B61FF',
        accentGreen: '#00F5A0',
        bodyTextDark: '#FFFFFF',
        mutedTextDark: '#CBD5E1',
        bodyTextLight: '#0F172A',
        mutedTextLight: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 8px rgba(0, 217, 245, 0.1), 0 0 16px rgba(123, 97, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 217, 245, 0.35), 0 0 32px rgba(123, 97, 255, 0.35)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
