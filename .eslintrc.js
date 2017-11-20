module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': 0,
    'no-mixed-operators': 1,
    eqeqeq: 1
  },
  globals: {}
}
