/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '361px',
      }
      ,
      fontSize: {
        '9xl': ['15rem', { lineHeight: '0.55' }],
      },
      lineHeight: '1rem',
      plugins: [
        require('@tailwindcss/typography'),
      ],
      keyframes: {
        'fullmousemove': {
          '0%': { transform: 'translate(2rem, -2rem)' },
          '10%': { transform: 'translate(-3rem, 4rem)' },
          '20%': { transform: 'translate(1rem, -2rem)' },
          '30%': { transform: 'translate(0rem, -5rem)' },
          '40%': { transform: 'translate(5rem, 0rem)' },
          '50%': { transform: 'translate(0rem, 0rem)' },
          '60%': { transform: 'translate(-5rem, 0rem)' },
          '70%': { transform: 'translate(0rem, 5rem)' },
          '80%': { transform: 'translate(-1rem, 2rem)' },
          '90%': { transform: 'translate(3rem, 4rem)' },
          '100%': { transform: 'translate(-2rem, 2rem)' }
        },
        'mousemove': {
          '0%': { transform: 'translate(0rem, -2rem)' },
          '10%': { transform: 'translate(-2rem, 0rem)' },
          '20%': { transform: 'translate(0rem, -2rem)' },
          '30%': { transform: 'translate(-2rem, 2rem)' },
          '40%': { transform: 'translate(0rem, 2rem)' },
          '50%': { transform: 'translate(-2rem, 0rem)' },
          '60%': { transform: 'translate(-2rem, 0rem)' },
          '70%': { transform: 'translate(2rem, 0rem)' },
          '80%': { transform: 'translate(2rem, 0rem)' },
          '90%': { transform: 'translate(0rem, -2rem)' },
          '100%': { transform: 'translate(-2rem, 0rem)' }
        },
        'balloon1': {
          '0%': { transform: 'translate(0rem, 0.5rem)' },
          '25%': { transform: 'translate(0rem, -0.5rem)' },
          '50%': { transform: 'translate(0rem, 0.5rem)' },
          '75%': { transform: 'translate(0rem, -0.5rem)' },
          '100%': { transform: 'translate(0rem, 0.5rem)' }
        },
        'balloon2': {
          '0%': { transform: 'translate(0rem, -0.5rem)' },
          '25%': { transform: 'translate(0rem, 0.5rem)' },
          '50%': { transform: 'translate(0rem, -0.5rem)' },
          '75%': { transform: 'translate(0rem, 0.5rem)' },
          '100%': { transform: 'translate(0rem, -0.5rem)' }
        },
        "diagonalMove45": {
          '0%': { transform: 'translate(-0.5rem, -0.5rem)' },
          '25%': { transform: 'translate(-0.5rem, -0.5rem)' },
          '50%': { transform: 'translate(0.5rem, 0.5rem)' },
          '75%': { transform: 'translate(0.5rem, 0.5rem)' },
          '100%': { transform: 'translate(-0.5rem, -0.5rem)' }
        },
        "diagonalMove-45": {
          '0%': { transform: 'translate(-0.5rem, 0.5rem)' },
          '25%': { transform: 'translate(-0.5rem, 0.5rem)' },
          '50%': { transform: 'translate(0.5rem, -0.5rem)' },
          '75%': { transform: 'translate(0.5rem, -0.5rem)' },
          '100%': { transform: 'translate(-0.5rem, 0.5rem)' }
        },
        
      }
    }
  }
}