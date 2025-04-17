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
	edit: Edit,
	save,
	attributes,
    deprecated: deprecated,
	example: convertObjectAttrToPreview(attributes),
	icon: (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			className="wcb-editor-block-icons fill-none "
			aria-hidden="true"
			focusable="false"
		>
		<path
			d="M12 5.39514V3.16507M16.2269 6.58948L17.8848 5.09796M9.69775 2.60654H14.3022M11.8872 13.4553H16.6079M20.0052 13.3886C20.0052 17.8099 16.4211 21.394 11.9999 21.394C7.57873 21.394 3.99463 17.8099 3.99463 13.3886C3.99463 8.96743 7.57873 5.38333 11.9999 5.38333C16.4211 5.38333 20.0052 8.96743 20.0052 13.3886ZM12.327 13.3886C12.327 13.2081 12.1807 13.0618 12.0002 13.0618C11.8197 13.0618 11.6733 13.2081 11.6733 13.3886C11.6733 13.5692 11.8197 13.7155 12.0002 13.7155C12.1807 13.7155 12.327 13.5692 12.327 13.3886Z"
			fill="none"
			stroke="#fff"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		</svg>
	),
});
