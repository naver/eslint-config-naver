module.exports = {
  rules: {
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": "off",
    // "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    "import/no-extraneous-dependencies": "off",
    // "import/no-extraneous-dependencies": ["error", {
    //   devDependencies: [
    //     "test/**", // tape, common npm pattern
    //     "tests/**", // also common npm pattern
    //     "spec/**", // mocha, rspec-like pattern
    //     "**/__tests__/**", // jest pattern
    //     "test.js", // repos with a single test file
    //     "test-*.js", // repos with multiple top-level test files
    //     "**/*.test.js", // tests where the extension denotes that it is a test
    //     "**/webpack.config.js", // webpack config
    //     "**/webpack.config.*.js", // webpack config
    //     "**/rollup.config.js", // rollup config
    //     "**/gulpfile.js", // gulp config
    //     "**/gulpfile.*.js", // gulp config
    //     "**/Gruntfile", // grunt config
    //   ],
    //   optionalDependencies: false,
    // }],

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": "off",
    // "import/no-mutable-exports": "error",

    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    "import/first": "error",
    // "import/first": ["error", "absolute-first"],

    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    "import/imports-first": "off",
    // deprecated: use `import/first`

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": "off",
    // "import/extensions": ["error", "always", {
    //   js: "never",
    //   jsx: "never",
    // }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "off",
    // "import/no-webpack-loader-syntax": "error",
  },
};
