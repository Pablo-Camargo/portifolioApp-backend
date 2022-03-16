module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
  },
 extends: ['airbnb-base', 'prettier'],
  plugins:['prettier'],
  
 rules: {
   "keyword-spacing": 2,
    "class-methos-use-this":"off",
    'no-param-reasing':'off',
      camelCase: 'off',
    'no-unused-vars': ['erro', { argsIgnorePattern: 'next'}],
    'prettier/prettier':'error,'
  },
};
