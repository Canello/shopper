/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    restoreMocks: true,
    setupFilesAfterEnv: ["./src/test/setup-unit.ts"],
    // prettier-ignore
    testPathIgnorePatterns: ["/node_modules/", "\.integration\.test"],
};
