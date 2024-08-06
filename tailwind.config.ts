import type { Config } from 'tailwindcss'

const { screens } = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'fold':'270px',
      'phones':'350px',
      'xphones':'400px',
      'minitablet':'550px',
      'brkpoint':'940px',       
      ...screens,
      'smlaptops':'1150px',
      'mdlaptops':'1230px',
      'lglaptops':'1300px',
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      listStyleType: {
        square: 'square',
        circle: 'circle',
      }
    },
  },
  plugins: [],
}
export default config
