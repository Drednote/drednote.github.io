module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['**.json'],
  rules: {
    'prettier/prettier': 'error',
  },
}
