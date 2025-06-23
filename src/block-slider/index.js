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
const { Fragment } = wp.element;
const { withSelect } = wp.data;
import Edit from "./Edit";
import save from "./Save";
import metadata from "./block.json";
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
			width="26" 
			height="26" 
			viewBox="0 0 26 24" 
			fill="none" 
			class="wcb-editor-block-icons fill-nones"
			aria-hidden="true" 
			focusable="false">
				<rect x="5.4502" y="4.98621" width="15.0978" height="11.2249" rx="2" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></rect>
				<path d="M9.19922 9.10217H16.501" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
				<path d="M9.19922 12.0948H16.501" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
				<path d="M15.9987 19.0138H16.0054M12.9922 19.0138H12.9989M9.99219 19.0138H9.99885" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
				<path d="M2.49658 9.69873L1.49658 10.5987L2.49658 11.4987" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5034 11.4987L24.5034 10.5987L23.5034 9.69872" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
	),
});
