import config, { browser, mocha } from 'eslint-config-mw';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config,
  ...browser,
  {
    files: ['test/**/*.js'],
    ...mocha[0],
  },
];
