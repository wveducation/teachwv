const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
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
      backgroundSize: {
        '50%': "50%"
      },
      backgroundImage: {
        'hero-grid': "url('/static/img/teachwv-grid-titlebar.jpg')",
        'hero-grid-titlebar': "url('/static/img/teachwv-grid-titlebar.jpg')",
        'hero-small-white': "url('/static/img/teachwv-hero_small_white.jpg')",
        'hero-large-offwhite': "url('/static/img/teachwv-hero_large_offwhite.jpg')",
        'abstract-beams': "linear-gradient(to right, \
          #518CB2, \
          #518CB2 10%, \
          #365F8A 10%, \
          #365F8A 18%, \
          #518CB2 18%, \
          #518CB2 19%, \
          #365F8A 19%, \
          #365F8A 21%, \
          #8B8E94 21%, \
          #8B8E94 35%, \
          #D8AB44 35%, \
          #D8AB44 48%, \
          #CC6918 48%, \
          #CC6918 70%, \
          #518CB2 70%, \
          #518CB2 72%, \
          #CFB465 72% \
        )",
        'quote-gradient': "linear-gradient(to top, rgba(250, 246, 240, 1), rgba(250, 246, 240, 0))"
      },
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
        'brand_lightblue-a11y': '#0077aa',
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
        'offwhite': '#faf6f0'
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 3vw, 3rem)'
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
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('n+5', '&:nth-child(n+5)')
    })
  ],
};
