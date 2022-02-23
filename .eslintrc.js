module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    
    'airbnb-base',
    'prettier'
  ],
  plugins:['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methos-use-this':'off',
    'no-param-reasing':'off',
    camelCase: 'off',
    'no-unused-vars': ['erro', { argsIgnorePattern: 'next'}],
    'prettier/prettier':'error,'
  },
};
