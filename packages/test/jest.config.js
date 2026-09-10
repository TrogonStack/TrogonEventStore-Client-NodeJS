module.exports = {
  testTimeout: 60_000,
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.test.ts', '**/src/samples/*.ts'],
  globalSetup: '<rootDir>/src/utils/preflight.ts',
  moduleNameMapper: {
    '@test-utils': '<rootDir>/src/utils',
    "^@trogonstack/trogon-eventstore-client$": "<rootDir>/../db-client/dist/index",
    "^@trogonstack/trogon-eventstore-client/(.*)$": "<rootDir>/../db-client/$1",
    "^@trogonstack/trogon-eventstore-opentelemetry$": "<rootDir>/../opentelemetry/dist/index",
    "^@trogonstack/trogon-eventstore-opentelemetry/(.*)$": "<rootDir>/../opentelemetry/$1",
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }]
  },
};
