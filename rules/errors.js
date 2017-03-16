module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],    
    // "comma-dangle": ["error", {
    //   arrays: "always-multiline",
    //   objects: "always-multiline",
    //   imports: "always-multiline",
    //   exports: "always-multiline",
    //   functions: "always-multiline",
    // }],

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
