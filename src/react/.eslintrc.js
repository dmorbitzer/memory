module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
  },
};
