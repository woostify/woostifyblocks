const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const { getWebpackEntryPoints } = require("@wordpress/scripts/utils/config");

// Guard the style chunk namer so unnamed chunks don't crash path.dirname().
const safeStyleChunkNamer = (cacheGroupKey) => (_, chunks) => {
	const firstChunk = chunks && chunks[0];
	const chunkName = firstChunk?.name ?? firstChunk?.id;

	if (!chunkName) {
		return cacheGroupKey;
	}

	const normalized = String(chunkName);
	return `${path.dirname(normalized)}/${cacheGroupKey}-${path.basename(normalized)}`;
};

const styleCacheGroup =
	defaultConfig?.optimization?.splitChunks?.cacheGroups?.style || {};

module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			...defaultConfig.optimization?.splitChunks,
			cacheGroups: {
				...defaultConfig.optimization?.splitChunks?.cacheGroups,
				style: {
					...styleCacheGroup,
					name: safeStyleChunkNamer("style"),
				},
			},
		},
	},
};
