import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "build/**", "node_modules/**"] },
  ...nextCoreWebVitals,
  {
    // Vendored shadcn/ui primitives — keep as shipped upstream.
    files: ["src/components/ui/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
