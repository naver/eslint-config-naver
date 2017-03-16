module.exports = {
  rules: {
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["error", {
        "args": "none"
    }],
    // "no-unused-vars": ["error", { vars: "local", args: "after-used" }],
  }
};
