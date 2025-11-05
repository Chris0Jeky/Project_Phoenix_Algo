/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Premium palette: Steel + Electric Cyan
        midnight: '#0B111A',        // Deep background
        graphite: {
          DEFAULT: '#121A24',       // Panels and cards
          light: '#1A2332',         // Hover states
          dark: '#0E1520',          // Deeper sections
        },
        steel: {
          DEFAULT: '#8B95A7',       // UI chrome/lines
          light: '#A4ACBA',         // Hover states
          dark: '#6B7585',          // Pressed states
        },
        platinum: {
          DEFAULT: '#DDE3EA',       // Neutral accent/highlights
          light: '#EEF2F6',         // Bright highlights
          dark: '#C5CDD6',          // Subtle text
        },
        electric: {
          DEFAULT: '#00E5FF',       // Interactive accent
          light: '#6FF3FF',         // Hover states
          dark: '#00B8CC',          // Pressed states
          glow: 'rgba(0, 229, 255, 0.25)',  // Glow effects
        },
        // Legacy names for backward compatibility
        primary: {
          700: '#1A2332',
          800: '#121A24',
          900: '#0B111A',
          950: '#080D14',
        },
        secondary: {
          700: '#1F3A57',
        },
        accent: {
          400: '#00E5FF',
          500: '#00B8CC',
        },
        // Success/danger remain vibrant
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        danger: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
