module.exports = {
  extends: [
	"./eslint-config-airbnb-base/legacy",
	"./rules/best-practices",
	"./rules/errors",
	"./rules/node",
	"./rules/style",
	"./rules/variables"
  ].map(require.resolve)
};
