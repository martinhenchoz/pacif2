module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      height: {
        '84': '21rem',
      },
      margin: {
        '18': '4.5rem',
      },
      colors: {
        'pacif': '#a18218'
      },
      outline: {
        pacif: ['2px solid #a18218', '2px'],
      },
      transitionProperty: {
        DEFAULT:
        'background-color, border-color, color, fill, stroke, padding, opacity, box-shadow, transform, filter, backdrop-filter',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}