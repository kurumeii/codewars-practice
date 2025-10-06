import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	cacheDirectory: "<rootDir>/.jest/cache",
	extensionsToTreatAsEsm: [".ts"],
	transform: {
		"^.+.tsx?$": [
			"ts-jest",
			{
				useESM: true,
			},
		],
	},
	testMatch: ["<rootDir>/src/**/*.test.ts"],
	collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts", "!src/**/*.d.ts"],
};

export default jestConfig;
