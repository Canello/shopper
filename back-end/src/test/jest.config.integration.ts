import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    restoreMocks: true,
    setupFilesAfterEnv: ["./setup-integration.ts"],
    // prettier-ignore
    testRegex: "\.integration\.test",
};

export default config;
