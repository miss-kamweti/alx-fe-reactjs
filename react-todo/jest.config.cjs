module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.js',
    '<rootDir>/src/__tests__/**/*.test.jsx',
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.test.jsx'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  verbose: true
};