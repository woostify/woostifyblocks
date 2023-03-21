const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const { getWebpackEntryPoints } = require("@wordpress/scripts/utils/config");

module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		// plugins: "./src/block-container/FrontendStyles.jsx",
	},
};
