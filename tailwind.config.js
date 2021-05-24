module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {}
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
