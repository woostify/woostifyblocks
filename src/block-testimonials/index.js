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
		<svg
			className="wcb-editor-block-icons fill-none "
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.9999 11.84H14.3199C13.6099 11.84 13.1299 11.3 13.1299 10.65V9.15997C13.1299 8.50997 13.6099 7.96997 14.3199 7.96997H15.8099C16.4599 7.96997 16.9999 8.50997 16.9999 9.15997V11.84Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.9999 11.8401C16.9999 14.6301 16.4799 15.1001 14.9099 16.0301"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.86 11.84H8.17999C7.46999 11.84 6.98999 11.3 6.98999 10.65V9.15997C6.98999 8.50997 7.46999 7.96997 8.17999 7.96997H9.66999C10.32 7.96997 10.86 8.50997 10.86 9.15997V11.84Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.86 11.8401C10.86 14.6301 10.34 15.1001 8.77002 16.0301"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
});
