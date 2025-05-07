import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,

  {
    files: ['**/*.ts'],
    rules: {
      '@nx/typescript/no-empty-object-type': ['warn'],
    },
  },
];
