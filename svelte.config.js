const autoProcess = require("svelte-preprocess");

module.exports = {
  preprocess: autoProcess({
    postcss: true,
    typescript: {
      compilerOptions: {
        target: "es6",
        module: "commonjs",
        baseUrl: "./",
      },
      transpileOnly: true,
    },
  }),
};
