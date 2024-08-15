module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  };