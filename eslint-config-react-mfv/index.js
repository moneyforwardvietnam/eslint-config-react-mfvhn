module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "react-hooks",
    "@typescript-eslint",
    "simple-import-sort",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/require-await": "off",
    "import/extensions": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-console": [
      "error",
      {
        "allow": ["warn", "error"]
      }
    ],
    "no-use-before-define": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "semi": false
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".tsx", ".jsx"]
      }
    ],
    "react/require-default-props": "off",
    "react/state-in-constructor": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
