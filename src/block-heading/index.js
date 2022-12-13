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
import {
	RichTextToolbarButton,
	RichTextShortcut,
} from "@wordpress/block-editor";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import MyCustomButton, { WCB_FORMAT_HIGHLIGHT } from "./MyCustomButton";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerFormatType(WCB_FORMAT_HIGHLIGHT, {
	title: "Highlight",
	tagName: "mark",
	className: "wcb-highlight-text",
	edit: MyCustomButton,
});

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	attributes,
});
