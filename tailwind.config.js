/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25% screen',
        '1/2': '50% screen',
      },
      translateX: {
        '-10': '-10rem'
      },
      animation: {
        text: 'text 4s ease infinite',
        svg: 'wave 5s ease-in-out infinite',
        appear: 'appear 1s ease-in',
        disappear: 'disappear 0.1s',
        zoom: 'zoom 1s ease',
        slideLeft: 'slideLeft 1s ease',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          }
        },
        wave: {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.1, 1.025)' },
          '100%': { transform: 'scale(1, 1)' },
        },

        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        zoom: {
          '0%': { scale: '1' },
          '100%': { scale: '1.05' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(-10rem)' },
          '100%': { transform: 'translateX(10rem)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        redHatDisplay: "redHatDisplay",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#0ab5f5",
        highlight: "#cdf9ff",
      },
    },
  },
  plugins: [],
}
