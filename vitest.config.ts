import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        clearMocks: true,
        coverage: {
            provider: "v8",
            exclude: ["lib", "node_modules", "components/index.tsx", "components/types.d.ts","components/**/*.stories.{ts,tsx}", "components/test/test-utils.tsx"],
            include: ["./components/**/*.{ts,tsx}"],
            reporter: ["text"],
        },
        environment: "jsdom",
        globals: true,
        exclude: ["lib", "node_modules"],
        setupFiles: ["./components/test/setup.ts", "console-fail-test/setup",],
        reporters: ["default"],
        root: "./",
    },
});