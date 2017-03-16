module.exports = {
  rules: {
    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": ["error", "as-needed", {
      requireForBlockBody: false
    }],
    // "arrow-parens": ["error", "as-needed", {
    //   requireForBlockBody: true,
    // }],

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "no-duplicate-imports": "error",
    // "no-duplicate-imports": "off",
  }
};
