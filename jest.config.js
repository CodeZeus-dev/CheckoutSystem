/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/src/helpers/",
    "<rootDir>/src/app.ts",
    "<rootDir>/src/__mocks__/",
  ],
};
