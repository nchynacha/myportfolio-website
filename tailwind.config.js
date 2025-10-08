/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#F8F5E6',
        'secondary' : '#5B5680',
        'border': '#0D1B2A',
        'dark' : '#3B3B3B',
        'light' : '#9A8174',
    
      },

      fontFamily :{
        Script:  ['"Story Script"', 'cursive'],
       Mono: ['"SUSE Mono"', 'monospace'], 
      }
    },
  },
  plugins: [],
}