const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
      transparent: 'transparent',
      current: 'currentColor',
      pink: "#ED1B67",
      darkPink: '#bd1552',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    
    require('@tailwindcss/aspect-ratio'),
  ],

  
}
