import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/generated/**",
      "prisma/**",
      "src/shadcn/**",
    ],
  },
  {
    rules: {
      semi: "error",
      camelcase: "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-trailing-spaces": "error",
      "no-duplicate-imports": "error",
      "no-console": "warn", // Allow console statements, but warn about them
      "no-debugger": "warn", // Allow debugger statements, but warn about them
      "eol-last": "error", // Ensure files end with a newline
      "no-multiple-empty-lines": ["error", { max: 1 }], // Prevent multiple empty lines
      "no-trailing-spaces": "error", // Disallow trailing whitespace at the end
      "no-undef": "error", // Disallow the use of undeclared variables
    },
  },
];

export default eslintConfig;
