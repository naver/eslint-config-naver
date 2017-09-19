module.exports = {
  rules: {
	// enforce spacing inside array brackets
	// [NAVER] 7.8. 괄호 안에 공백을 삽입하지 않는다.(disallowSpacesInsideArrayBrackets, disallowSpacesInsideObjectBrackets, disallowSpacesInsideParentheses)
	"array-bracket-spacing": ["error", "never"],

	"array-element-newline": ["error", "never"],
	"array-bracket-newline": ["error", {"multiline": true}],

	// // enforce one true brace style
	// [NAVER] 2.1 줄의 끝에서 중괄호 시작
	"brace-style": "error",
	// "brace-style": ["error", "1tbs", { allowSingleLine: true }],

	// enforce spacing before and after comma
	// [NAVER] 7.6. 콤마(,)은 뒤에 공백을 삽입한다.
	"comma-spacing": ["error", { before: false, after: true }],

	// // enforces consistent naming when capturing the current execution context
	"consistent-this": [
		"error",
		"self"
	],
	// "consistent-this": "off",

	// require function expressions to have a name
	// http://eslint.org/docs/rules/func-names
	"func-names": "off",
	// "func-names": "warn", // airbnb

	// this option sets a specific tab width for your code
	// http://eslint.org/docs/rules/indent
	// [NAVER] 7.1. 공백은 탭을 사용한다.
	"indent": ["error",
		"tab",
		{
			"SwitchCase": 1,
			"MemberExpression": 1
		}
	],
	// indent: ["error", 2, {
	//   SwitchCase: 1,
	//   VariableDeclarator: 1,
	//   outerIIFEBody: 1,
	//   // MemberExpression: null,
	//   // CallExpression: {
	//     // parameters: null,
	//   // },
	//   FunctionDeclaration: {
	//     parameters: 1,
	//     body: 1
	//   },
	//   FunctionExpression: {
	//     parameters: 1,
	//     body: 1
	//   }
	// }],

	// enforces spacing between keys and values in object literal properties
	// [NAVER] 7.7. 콜론(:)을 사용하는 경우에는 반드시 뒤에 공백을 삽입한다.
	"key-spacing": ["error", {
		"afterColon": true
	}],
	// "key-spacing": ["error", { beforeColon: false, afterColon: true }],

	// require a space before & after certain keywords
	// [NAVER] 7.9. 특정 키워드의 경우 뒤에 공백을 삽입한다.
	"keyword-spacing": ["error", {
	  before: true,
	  after: true,
	  overrides: {
		return: { after: true },
		throw: { after: true },
		case: { after: true }
	  }
	}],

	// disallow mixed "LF" and "CRLF" as linebreaks
	// http://eslint.org/docs/rules/linebreak-style
	"linebreak-style": "error",
	// "linebreak-style": ["error", "unix"],

	// specify the maximum length of a line in your program
	// http://eslint.org/docs/rules/max-len
	// [NAVER] 3.1 최대 줄 너비는 100
	"max-len": ["error", {
		"code": 100,
		"tabWidth": 1,
		"ignoreComments": true,
		"ignoreTrailingComments": true,
		"ignoreRegExpLiterals": true,
		"ignoreTemplateLiterals": true,
		"ignoreStrings": true,
		"ignoreUrls": true
	}],
	// "max-len": ["error", 100, 2, {
	//     ignoreUrls: true,
	//     ignoreComments: false,
	//     ignoreRegExpLiterals: true,
	//     ignoreStrings: true,
	//     ignoreTemplateLiterals: true,
	// }],

	// allow/disallow an empty newline after var statement
	// [NAVER] 5.2. 함수 선언 간, 변수 선언 후 빈 줄 사용 준수
	// "newline-after-var": ["error", "always"],
	// "newline-after-var": "off",

	// enforces new line after each method call in the chain to make it
	// more readable and easy to maintain
	// http://eslint.org/docs/rules/newline-per-chained-call
	// [NAVER] 1.1 메서드 체인
	"newline-per-chained-call": ["error", {
		"ignoreChainWithDepth": 2
	}],
	// "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

	// disallow use of bitwise operators
	// http://eslint.org/docs/rules/no-bitwise
	"no-bitwise": "off",

	// disallow use of the continue statement
	// http://eslint.org/docs/rules/no-continue
	"no-continue": "off",
	// "no-continue": "error",

	// disallow un-paren"d mixes of different operators
	// http://eslint.org/docs/rules/no-mixed-operators
	"no-mixed-operators": ["error", {
		groups: [
			["&", "|", "^", "~", "<<", ">>", ">>>"],
			["==", "!=", "===", "!==", ">", ">=", "<", "<="],
			["&&", "||"]
		],
		allowSamePrecedence: true
	}],

	// disallow use of unary operators, ++ and --
	// http://eslint.org/docs/rules/no-plusplus
	"no-plusplus": "off",
	// "no-plusplus": "error",

	// disallow certain syntax forms
	// http://eslint.org/docs/rules/no-restricted-syntax
	"no-restricted-syntax": ["error", "WithStatement"],
	// "no-restricted-syntax": [
	//   "error",
	//   "ForInStatement",
	//   "ForOfStatement",
	//   "LabeledStatement",
	//   "WithStatement",
	// ], // Airbnb

	// disallow tab characters entirely
	"no-tabs": "off",
	// "no-tabs": "error",

	// disallow dangling underscores in identifiers
	// [NAVER] 8.6.2. 외부에서 접근할 수 없다면, 변수에 _을 사용하지 않는다.
	// [NAVER] 8.4.2. 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드는 _을 사용한다.
	// [NAVER] 8.4.3. 외부에서 접근할 수 없다면, 메서드에 _을 사용하지 않는다.
	// [NAVER] 8.6.1. 속성. 외부에서 접근할 수 있는 경우, 사용하면 안되는 속성은 _을 사용한다.
	"no-underscore-dangle": "off",
	// "no-underscore-dangle": ["error", { allowAfterThis: false }],

	// require padding inside curly braces
	// [NAVER] 7.8. 괄호 안에 공백을 삽입하지 않는다.(disallowSpacesInsideArrayBrackets, disallowSpacesInsideObjectBrackets, disallowSpacesInsideParentheses)
	"object-curly-spacing": [ "error", "never"],
	// "object-curly-spacing": ["error", "always"],

	// enforce "same line" or "multiple line" on object properties.
	// http://eslint.org/docs/rules/object-property-newline
	// [NAVER] 6.1 오브젝트 리터럴은 키와 값을 한 쌍으로 새 줄을 삽입한다.
	"object-property-newline": "error",
	// "object-property-newline": ["error", {
	//   allowMultiplePropertiesPerLine: true,
	// }],

	// allow just one var statement per function
	// [NAVER] 5.2. 함수 선언 간, 변수 선언 후 빈 줄 사용 준수
	"one-var": ["error", "never"],

	// enforce operators to be placed before or after line breaks
	// [NAVER] 3.2 줄 바꿈
	"operator-linebreak": ["error", "after"],
	// "operator-linebreak": "off",

	// enforce padding within blocks
	// [NAVER] 5.1 함수 선언 후 빈줄 사용 지양
	"padded-blocks": ["error", "never"],

	"padding-line-between-statements": ["error",
		{ "blankLine": "any", "prev": "*", "next": "return" },
		{ "blankLine": "always", "prev": ["const", "let"], "next": "*" },
		{ "blankLine": "any", "prev": ["const", "let"], "next": ["const", "let"]},
		{ "blankLine": "always", "prev": "directive", "next": "*" },
		{ "blankLine": "never", "prev": "directive", "next": "directive" }
	],

	// require quotes around object literal property names
	// http://eslint.org/docs/rules/quote-props.html
	"quote-props": ["error", "as-needed", { keywords: false, unnecessary: false, numbers: false }],
	// "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

	// specify whether double or single quotes should be used
	// [NAVER] 10.1 따옴표는 쌍따옴표를 사용한다. 이스케이프한 경우는 예외로 홑따옴표를 사용할 수 있다.
	"quotes": ["error", "double", {
		"avoidEscape": true,
		"allowTemplateLiterals": true
	}],
	// quotes: ["error", "single", { avoidEscape: true }],

	// enforce spacing before and after semicolons
	// [NAVER] 7.5 종료 구분자(;) 앞에는 공백 사용 지양.
	"semi-spacing": ["error", { before: false, after: true }],

	// require or disallow space before blocks
	// [NAVER] 7.2 중괄호({})의 앞에 공백을 하나 넣는다.
	"space-before-blocks": "error",

	// require or disallow space before function opening parenthesis
	// http://eslint.org/docs/rules/space-before-function-paren
	"space-before-function-paren": ["error", {
		"anonymous": "never",
		"named": "never",
		"asyncArrow": "always"
	}],
	// "space-before-function-paren": ["error", { // aribnb
	// 	anonymous: "always",
	// 	named: "never",
	// 	asyncArrow: "always"
	// }],

	// require spaces around operators
	// [NAVER] 7.4. 산술 연산자, 비교 연산자 앞,뒤에 공백을 추가한다.
	"space-infix-ops": "error",

	// Require or disallow spaces before/after unary operators
	// http://eslint.org/docs/rules/space-unary-ops
	// [NAVER] 7.3. 단항 연산자(!, ++..)와 피연산자 사이에 공백을 두지 않는다.
	"space-unary-ops": ["error", {
		"nonwords": false
	}],
	// "space-unary-ops": ["error", {
	//   words: true,
	//   nonwords: false,
	//   overrides: {
	//   },
	// }],
  }
};
