module.exports = {
  rules: {
    // [NAVER] 2.2 조건/반복문/제어문에 중괄호 사용
    "curly": "error",
    // curly: ["error", "multi-line"],

    // encourages use of dot notation whenever possible
    // [NAVER] 8.6.3. 오브젝트에 속성으로 접근할 때는 .(점)을 사용한다.
    "dot-notation": ["error", { allowKeywords: true }],

    // make sure for-in loops have an if statement
    "guard-for-in": "off",
    // "guard-for-in": "error",

    // disallow else after a return in an if
    "no-else-return": "off",
    // "no-else-return": "error",

    // disallow usage of __iterator__ property
    "no-iterator": "off",
    // "no-iterator": "error",

    // disallow use of labels for anything other then loops and switches
    "no-labels": "off",
    // "no-labels": ["error", { allowLoop: false, allowSwitch: false }],    

    // // disallow reassignment of function parameters
    // // disallow parameter object manipulation
    // // rule: http://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": ["error", { props: false }],
    // "no-param-reassign": ["error", { props: true }],

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": ["error", {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
    }, {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
    }, {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
    }],
    // "no-restricted-properties": ["error", {
    //   object: "arguments",
    //   property: "callee",
    //   message: "arguments.callee is deprecated",
    // }, {
    //   property: "__defineGetter__",
    //   message: "Please use Object.defineProperty instead.",
    // }, {
    //   property: "__defineSetter__",
    //   message: "Please use Object.defineProperty instead.",
    // }, {
    //   object: "Math",
    //   property: "pow",
    //   message: "Use the exponentiation operator (**) instead.",
    // }],

    // disallow usage of expressions in statement position
    "no-unused-expressions": ["error", {
        "allowShortCircuit": true,
        "allowTernary": true
    }],
    // "no-unused-expressions": ["error", {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    // }],

    // requires to declare all vars on top of their containing scope
    // [NAVER] 9.1. 변수 선언은 상단에 변수당 하나씩 사용한다.
    "vars-on-top": "error",

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "inside", { functionPrototypeMethods: false }],
    // "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
  }
};
