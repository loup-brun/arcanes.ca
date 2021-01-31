module.exports = {
  corePlugins: {
    // manage .container in container.css
    container: false,
  },
  theme: {
    extend: {
      colors: {
        arcanes: {
          indigo:    '#6E20FF',
          DEFAULT:   '#6E20FF', // indigo
          rouge:     '#FF6A6A',
          mauve:     '#332450',
          peche:     '#FFA8A8',
          turquoise: '#3FBF8C',
          foret:     '#2C4830',
          noir:      '#000000',
          blanc:     '#FFFFFF',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'first'],
    },
  },
  plugins: [],
}
