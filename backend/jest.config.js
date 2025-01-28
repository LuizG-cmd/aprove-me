/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};