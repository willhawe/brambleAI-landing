import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const explicitBase = process.env.BASE_PATH ?? process.env.VITE_BASE_PATH;

const formatAbsoluteBase = (value: string) => {
  const prefixed = value.startsWith("/") ? value : `/${value}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
};

const resolvedProductionBase =
  explicitBase === "./"
    ? "./"
    : explicitBase
      ? formatAbsoluteBase(explicitBase)
      : "./";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: mode === "production" ? resolvedProductionBase : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
