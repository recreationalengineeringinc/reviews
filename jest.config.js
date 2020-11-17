/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    // CHECK IN DOCS
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '\\.jsx$': 'babel-jest',
    '\\.css$': 'babel-jest',
  },
  // Whether to use watchman for file crawling
  // watchman: true,
};
