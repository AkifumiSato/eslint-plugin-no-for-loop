module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  transform: {
    '^.+\\.ts?$': 'esbuild-jest',
  },
}
