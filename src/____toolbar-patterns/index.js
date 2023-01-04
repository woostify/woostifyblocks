import { registerBlockType } from "@wordpress/blocks";
/**
 * Internal dependencies
 */
import "./HeaderToolBarPatterns";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: () => null,
	save: () => null,
	attributes: [],
});
