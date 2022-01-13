module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      'serif': ["Vollkorn", "sans-serif"],
      'sans': ["Fira Sans", "sans-serif"]
    },
    scale: {
      '1025': '1.025'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      animation: {
        'ticktock': 'ticktock 3s linear infinite'
      },
      backgroundImage: theme => ({
        'line-sphere': "url('/static/img/line-sphere.svg')"
      }),
      backgroundPosition: {
        'right-bottom-over': 'right -5vw bottom -5vh'
      },
      borderRadius: {
        'default': '0.75rem'
      },
      colors: {
        'brand_blue': '#004071',
        'brand_lightblue': '#007baf',
        'brand_lightblue-hover': '#006b99',
        'brand_lightblue-11ty': '#006f9e',
        'brand_darkblue': '#00133F',
        'brand_maroon': '#A7253F',
        'brand_gold': '#D3B257',
        'brand_yellow': '#f0b51d',
        'brand_light-yellow': '#FFEEBF',
        'brand_green': '#37b550',
        'brand_darkgrey': '#60636B',
        'brand_lightgrey': '#D1D3D4',
        'footer': '#006F9D',
        'text-black': '#101010',
        'offwhite': '#FBF9F3'
      },
      keyframes: {
        ticktock: {
          '0%': { transform: 'rotate(-3deg)' },
          '49.9%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(3deg)' }
        }
      },
      gap: {
        'default': '2rem'
      },
      minHeight: {
        'question': '12rem'
      },
      outline: {
        'lightblue': ['#007baf', '2px']
      },
      width: {
        'header': '80rem'
      }
    }
  },
  variants: {
    extend: {
      contrast: ['hover']
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};
