import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,

  // ✅ TypeScript support
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      react,
      "react-refresh": reactRefresh,
    },
  },

  // ✅ Disable Fast Refresh rule for shadcn/ui
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];
