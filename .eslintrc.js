module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    import: ['error', 'always', { ignorePackages: true }],
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
