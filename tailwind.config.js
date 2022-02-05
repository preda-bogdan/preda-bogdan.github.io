module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {        
        'cursor-blink': '1s blink step-end infinite',      
      },
      keyframes: {        
        blink: {          
          '0%, 100%': { color: 'transparent' },          
          '50%': { color: 'inherit' },        
        }      
      }
    },
  },
  plugins: [],
}
