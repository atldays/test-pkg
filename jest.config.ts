import type {Config} from "jest";

export default {
    testEnvironment: "jsdom",
    setupFiles: ["<rootDir>/tests/jest.setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: {
                    target: "ES2022",
                    jsx: "react-jsx"
                },
                diagnostics: true
            }
        ]
    },
    moduleNameMapper: {
        // Support ESM-style imports without explicit .js extension in TS
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
} satisfies Config;
