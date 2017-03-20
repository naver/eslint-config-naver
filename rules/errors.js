module.exports = {
  rules: {
    // disallow assignment in conditional expressions
    "no-cond-assign": ["error", "except-parens"],
    // "no-cond-assign": ["error", "always"],

    // // disallow empty statements
    "no-empty" : ["error", {
      "allowEmptyCatch": true
    }],
    // "no-empty": "error",
  }
};
