/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'meadow': {
          50: '#f4f7f4',
          100: '#e6ede5',
          200: '#cddccc',
          300: '#adc4ab',
          400: '#8ba888', // Main soft green
          500: '#6b8d68',
          600: '#547152',
          700: '#445a43',
          800: '#394a38',
          900: '#303d30',
        },
        'sky': {
          50: '#f5f9fb',
          100: '#e8f1f6',
          200: '#d4e5ed',
          300: '#a8c5d9', // Main sky blue
          400: '#7bafc9',
          500: '#5a97b7',
          600: '#467c9a',
          700: '#3a657e',
          800: '#345569',
          900: '#2f4858',
        },
        'cream': {
          50: '#fdfcfa',
          100: '#f5f0e8', // Main warm cream
          200: '#ede5d8',
          300: '#e0d4c2',
          400: '#d0bfa6',
          500: '#bfa88a',
          600: '#a98f72',
          700: '#8d765f',
          800: '#746251',
          900: '#605244',
        },
        'gold': {
          50: '#fdf9f3',
          100: '#f9f0e0',
          200: '#e8d4a8', // Main soft gold
          300: '#dfc28a',
          400: '#d4ac69',
          500: '#c9964d',
          600: '#b87e3e',
          700: '#996535',
          800: '#7c5230',
          900: '#66442a',
        },
        // Accent colors
        'lavender': {
          50: '#f9f8fb',
          100: '#f1eff6',
          200: '#e5e1ed',
          300: '#b8a9c9', // Main lavender
          400: '#9e8bb5',
          500: '#8572a0',
          600: '#6f5c88',
          700: '#5c4c70',
          800: '#4d405d',
          900: '#42384f',
        },
        'teal': {
          50: '#f2f7f7',
          100: '#e3eded',
          200: '#c5d9d9',
          300: '#8fb9b9',
          400: '#5b8a8a', // Main deep teal
          500: '#456d6d',
          600: '#3a5a5a',
          700: '#324a4a',
          800: '#2c3e3e',
          900: '#273535',
        },
        'earth': {
          50: '#f8f6f5',
          100: '#f0ece9',
          200: '#e0d8d2',
          300: '#c9bdb3',
          400: '#9c8b7a', // Main warm brown
          500: '#897869',
          600: '#746558',
          700: '#5f5349',
          800: '#51473f',
          900: '#463e37',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(139, 168, 136, 0.15)',
        'soft-lg': '0 10px 40px -10px rgba(139, 168, 136, 0.2)',
        'glow': '0 0 40px rgba(168, 197, 217, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-slow': 'fadeIn 2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
