odule.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "eslint-config-prettier"],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {}
};
export const extends = ["plugin:storybook/recommended"];