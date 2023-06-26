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
import Save_240823 from "./Save_240823";
import metadata from "./block.json";
const { Fragment } = wp.element;
const { withSelect } = wp.data;
import attributes from "./attributes";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	icon: "heart",
	edit: Edit,
	save,
	attributes,
	example: convertObjectAttrToPreview(attributes),
	deprecated: [
		{
			attributes,
			save: Save_240823,
		},
	],
	icon: (
		<svg
			className="wcb-editor-block-icons fill-none "
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.32 15.99H4.69002C3.21002 15.99 2.01001 14.78 2.01001 13.31V10.68C2.01001 9.20001 3.22002 8 4.69002 8H19.32C20.8 8 22 9.21001 22 10.68V13.31C22 14.78 20.79 15.99 19.32 15.99Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 10.99V12.99"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 10.99V12.99"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 11.99H18"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
});
