module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.js"],
      env: {
        node: true,
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      plugins: ["sonarjs"],
      extends: ["plugin:sonarjs/recommended", "eslint:recommended"],
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        node: true,
        jest: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
        tsconfigRootDir: __dirname,
      },
      plugins: ["sonarjs", "@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:sonarjs/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/await-thenable": "error", // sonar typescript:S4123
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "error", // sonar typescript:S1186
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "error", // sonar typescript:S1117
        "@typescript-eslint/no-unnecessary-condition": [
          "error",
          {
            allowConstantLoopConditions: true,
          },
        ], // sonar typescript:S4325
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error", // sonar typescript:S4325
        // This should be safe at least while we're targeting es5
        // https://eslint.org/docs/rules/no-use-before-define
        "@typescript-eslint/no-use-before-define": [
          "error",
          { variables: false, functions: false },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],

        "@typescript-eslint/return-await": ["error"], // sonar typescript:S1488
        curly: ["error"],
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
              {
                pattern: "*.+(css|scss)",
                patternOptions: { matchBase: true },
                group: "internal",
                position: "after",
              },
            ],
            "newlines-between": "always",
            pathGroupsExcludedImportTypes: ["react"],
            warnOnUnassignedImports: true,
          },
        ],
        "no-empty-function": "off", // typescript version is using
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "error", // sonar typescript:S3358
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "tailwindcss-classnames",
                message: "Please use typings/tailwindcss-classnames instead.",
              },
            ],
            patterns: ["tailwindcss-classnames.gen"],
          },
        ],
        "no-return-await": "off", // typescript version is using
        "no-shadow": "off", // typescript version is using
        "no-unneeded-ternary": "error", // sonar typescript:S3358
        "no-unused-vars": "off", // typescript version is using
        "prefer-regex-literals": "error", // sonar typescript:S6325
        "react/prop-types": [0],
        "react/self-closing-comp": [
          "error",
          {
            component: true,
            html: true,
          },
        ],
        "require-await": "error",
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/no-nested-template-literals": "off",
        "sort-imports": [
          "error",
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            allowSeparatedGroups: true,
          },
        ],
      },
      settings: {
        react: {
          version: "latest",
        },
      },
    },
  ],
};
