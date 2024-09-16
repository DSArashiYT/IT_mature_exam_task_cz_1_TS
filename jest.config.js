/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^@decorators/(.*)$': '<rootDir>/decorators/$1',
    '^@classes/(.*)$': '<rootDir>/classes/$1',
    '^@app/(.*)$': '<rootDir>/$1',
  }
};