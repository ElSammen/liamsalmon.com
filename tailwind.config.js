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
      fontSize: {
        '9xl': ['15rem', { lineHeight: '0.55' }],
      },
      lineHeight: '1rem',
      plugins: [
        require('@tailwindcss/typography'),
      ],
      keyframes: {
        'mousemove': {
          '0%': { transform: 'translate(1rem, 0rem)' },
          '5%': { transform: 'translate(3rem, 0rem)' },
          '10%': { transform: 'translate(0rem, 2rem)' },
          '15%': { transform: 'translate(0rem, 2rem)' },
          '20%': { transform: 'translate(6rem, 2rem)' },
          '25%': { transform: 'translate(-4rem, 0rem)' },
          '30%': { transform: 'translate(2rem, 0rem)' },
          '35%': { transform: 'translate(-1rem, 2rem)' },
          '40%': { transform: 'translate(3rem, -2rem)' },
          '45%': { transform: 'translate(4rem, 4rem)' },
          '50%': { transform: 'translate(0px, 0px)' },
          '55%': { transform: 'translate(-4rem, 4rem)' },
          '60%': { transform: 'translate(-6rem, 2rem)' },
          '65%': { transform: 'translate(-4rem, 4rem)' },
          '70%': { transform: 'translate(-2rem, 6rem)' },
          '75%': { transform: 'translate(-4rem, 4rem)' },
          '80%': { transform: 'translate(-6rem, 2rem)' },
          '85%': { transform: 'translate(-4rem, 4rem)' },
          '90%': { transform: 'translate(-2rem, 6rem)' },
          '95%': { transform: 'translate(-4rem, 4rem)' },
          '100%': { transform: 'translate(4rem, 4rem)' },
          '105%': { transform: 'translate(1rem, 1rem)' },
        },
      }
    }
  }
}