module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        page: "white",
        textMain: 'rgb(17, 24, 39)',
        textSecond: 'gray'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        small: '1.375rem',
        custom: '1.5rem',
        bold: '1.875rem',
      },
      fontWeight: {
        custom: '500',
        bold: '700',
      },
    },
    // Определение цветов для светлой и темной тем
    dark: {
      colors: {
        page: "blak",
        textMain: 'white',
        textSecond: 'gray'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
