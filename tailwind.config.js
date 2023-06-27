/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        1440: '1440px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      completed: '#252526',
      search: '#2D2D30',
      todos: '#3E3E42',
      gray: '#848484',
      side: '#1E1E1E',
      midnight: '#1C1B1B',
      yellow: '#F4CA44',
      text: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
