/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./Edit";
import save from "./Save";
import metadata from "./block.json";
const { Fragment } = wp.element;
const { withSelect } = wp.data;
import attributes from "./attributes";
import deprecated from "./deprecated";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	attributes,
	deprecated: deprecated,
	example: convertObjectAttrToPreview(attributes),
	icon: (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="wcb-editor-block-icons fill-nones" aria-hidden="true" focusable="false"><path d="M1 10.5L3 9.5V16.5M5.5 11C5.66667 10.5 6.3 9.5 7.5 9.5C9 9.5 9.5 10.5 9.5 11C9.5 13.0707 7 15 5.5 16.5H9.7M11.5 10.5C11.6667 10.1667 12.3 9.2 13.5 9.2C14.7 9.2 15.7 10 15.7 11C15.7 12 14.2 13 13 13C14 13 16.2469 13 16 15C15.8742 16.0188 14.8107 16.7 13.5 16.7C13 16.7 12 16.5 11.5 15.5M20.5 18V6M20.5 6L18 8M20.5 6L23 8" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
	),
});
