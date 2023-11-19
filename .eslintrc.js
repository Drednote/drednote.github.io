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
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': ['error', { functions: false, variables: false }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // 'max-len': ['error', { code: 100 }],
  },
  globals: {
    window: true,
    document: true,
  },
}
