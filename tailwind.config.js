module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'full': '100%', // Taille d'écran personnalisée définie à 100%
    },
    extend: {
      colors: {
        'text': '#000000',
        'background': '#FFFFFF',
        'primary': '#e7821d',
        'secondary': '#b4b4f3',
        'accent': '#232F3E',
       },
    },
  },
  plugins: [],
};
