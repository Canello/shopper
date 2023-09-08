import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    restoreMocks: true,
    setupFilesAfterEnv: ["./setup-unit.ts"],
    // prettier-ignore
    testPathIgnorePatterns: ["/node_modules/", "\.integration\.test"],
};

export default config;
