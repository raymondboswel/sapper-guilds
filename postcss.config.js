const tailwind = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.svelte"],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const presetEnv = require("postcss-preset-env")({
  features: {
    // enable nesting
    "nesting-rules": true,
  },
});

const plugins =
  process.env.NODE_ENV === "production"
    ? [tailwind, presetEnv]
    : [tailwind, presetEnv];

module.exports = { plugins };
