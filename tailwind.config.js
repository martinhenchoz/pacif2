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
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}