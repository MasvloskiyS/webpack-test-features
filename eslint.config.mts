// eslint.config.mts

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Ігноровані файли та папки
  {
    ignores: ["config/**/*", "node_modules", "build", 'eslint.config.mts', 'webpack.config.ts'],
  },

  // 2. Базова конфігурація ESLint для JavaScript
  js.configs.recommended,

  // 3. Конфігурація для TypeScript
  // tseslint.configs.recommended - це масив, тому його потрібно розгорнути.
  ...tseslint.configs.recommended as any,

  // 4. Конфігурація для React
  // pluginReact.configs.flat.recommended - це об'єкт.
  pluginReact.configs.flat.recommended,
  
  // 5. Додаткові налаштування та правила, що не входять у базові конфігурації
  {
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      // Додаємо глобальні змінні для браузера
      globals: {
        ...globals.browser,
      },
      // Вказуємо парсер TypeScript та налаштовуємо його
      parser: tseslint.parser,
      parserOptions: {
        // Обов'язково вказуємо шлях до tsconfig.json для перевірки типів
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Тут можна додати власні правила, які перекривають або доповнюють
    // рекомендовані конфігурації.
    rules: {
      // Вимикаємо правило, оскільки "jsx": "react-jsx" у tsconfig.json робить його непотрібним
      "react/react-in-jsx-scope": "off",
    },
  },
]);