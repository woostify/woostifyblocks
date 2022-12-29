import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: () => null,
	save: () => null,
});
