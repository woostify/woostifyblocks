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
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
import useGetDeviceType from "../hooks/useGetDeviceType";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	__experimentalLabel(attributes, { context }) {
		if (context === "accessibility") {
			const { caption, alt, url } = attributes;

			if (!url) {
				return __("Empty");
			}

			if (!alt) {
				return caption || "";
			}

			// This is intended to be read by a screen reader.
			// A period simply means a pause, no need to translate it.
			return alt + (caption ? ". " + caption : "");
		}
	},
	getEditWrapperProps(attributes) {
		const deviceType = useGetDeviceType() || "Desktop";
		return {
			"data-align": 
				deviceType === "Desktop" ? attributes.general_settings?.alignment?.Desktop :
				deviceType === "Tablet" ? attributes.general_settings?.alignment?.Tablet : 
				attributes.general_settings?.alignment?.Mobile,
		};
	},
	edit: Edit,
	save,
	attributes,
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
				d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
});
