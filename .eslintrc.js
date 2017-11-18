module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"extends": "eslint:recommended",
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	}
};