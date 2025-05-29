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
import attributes from "./attributes";
import deprecated from "./deprecated";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save,
	deprecated: deprecated,
	example: convertObjectAttrToPreview(attributes),
	icon: (
		<svg
			className="wcb-editor-block-icons fill-none"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 5H21M11 12H21M11 19H21"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
});
