/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // darkMode colors
        'dark': {
          'gray': {
            100: '#cacde8', // Light Grayish Blue
            200: '#e4e5f1', // Light Grayish Blue (hover)
            300: '#777a92', // Dark Grayish Blue
            400: '#4d5066', // Very Dark Grayish Blue
            500: '#393a4c', // Very Dark Grayish Blue:
            600: '#25273c', // Very Dark Desaturated
            700: '#161722', // Very Dark Blue
          },
          'primary': '#5079CB',
        },
        //  lightMode colors
        'light': {
          'gray': {
            100: '#ffffff', // Very Light Gray
            200: '#e4e5f1', // Very Light Grayish Blue
            300: '#d2d3db', // Light Grayish Blue
            400: '#9394a5', // Dark Grayish Blue
            500: '#484b6a', // Very Dark Grayish Blue
          },
          'primary': '#5079CB',
        } 
      },
      boxShadow: {
        'light': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'dark': 'rgba(14, 14, 22, 0.7) 0px 8px 24px',
      }
    },
    backgroundImage: {
      'gradientBlueViolet': 'linear-gradient(135deg, #60BBF4 0%, #A674EF 100%)'
    },
    fontFamily: {
      primary: 'Josefin Sans Bold',
      secondary: 'Josefin Sans Regular'
    }
  },
  plugins: [],
  darkMode: 'class'
}


