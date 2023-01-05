import { registerBlockType } from "@wordpress/blocks";
/**
 * Internal dependencies
 */
import "./App";
import metadata from "./block.json";
//

registerBlockType(metadata.name, {
	edit: () => null,
	save: () => null,
	attributes: [],
});

//
