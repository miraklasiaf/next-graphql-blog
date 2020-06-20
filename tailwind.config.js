const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindUi = require("@tailwindcss/ui")({ layout: "sidebar" });
const tailwindForm = require("@tailwindcss/custom-forms");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.mdx", "./src/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        unset: "unset",
        "12.5": "3.125rem",
        "22.5": "5rem",
      },
      minWidth: {
        xs: "20rem",
      },
    },
  },
  variants: {},
  plugins: [tailwindUi, tailwindForm],
};
