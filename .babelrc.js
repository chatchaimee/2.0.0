const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: false,
        preprocess: false,
        minify: true
      }
    ],
    [
      "module-resolver",
      {
        root: ["./src"]
      }
    ],
    ["@babel/plugin-proposal-nullish-coalescing-operator"],
    ["transform-define", env]
  ]
};
