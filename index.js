module.exports = {
	extends: [
		"./eslint-config-airbnb-base/index",
		"./rules/best-practices",
		"./rules/errors",
		"./rules/node",
		"./rules/style",
		"./rules/variables",
		"./rules/es6",
		"./rules/imports",
		"./rules/naver"
	].map(require.resolve)
};
