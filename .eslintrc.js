module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'no-use-before-define': 0,
    'no-multi-assign': 0,
  },
}
