import { defineConfig, ViteUserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export const createVitestConfig = ({ config }: { config?: ViteUserConfig }) => {
  return defineConfig({
    plugins: [react()],
    test: {
      environment: "jsdom",
    },
    ...config,
  });
};
