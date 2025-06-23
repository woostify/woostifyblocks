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
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	attributes: {
		...attributes,
	},
    deprecated: deprecated,
	example: {
		attributes: {
			cover: (
				'<svg width="200" height="200" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg">' +
				'<path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"></path>' +
				'<circle cx="80.3564" cy="136" r="20.6301" fill="#E6E6E6"></circle>' +
				'<rect x="73.0564" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<rect x="81.3699" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<path d="M72.5025 145.801C72.5025 145.249 72.9502 144.801 73.5025 144.801H87.2104C87.7627 144.801 88.2104 145.249 88.2104 145.801C88.2104 146.354 87.7627 146.801 87.2104 146.801H73.5025C72.9502 146.801 72.5025 146.354 72.5025 145.801Z" fill="#B6B6B6"></path>' +
				'<circle cx="135.119" cy="136" r="20.6301" fill="#E6E6E6"></circle>' +
				'<rect x="127.819" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<rect x="136.132" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<path d="M127.265 145.801C127.265 145.249 127.713 144.801 128.265 144.801H141.973C142.525 144.801 142.973 145.249 142.973 145.801C142.973 146.354 142.525 146.801 141.973 146.801H128.265C127.713 146.801 127.265 146.354 127.265 145.801Z" fill="#B6B6B6"></path>' +
				'<circle cx="189.881" cy="136" r="20.6301" fill="#E6E6E6"></circle>' +
				'<rect x="182.581" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<rect x="190.895" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<path d="M182.027 145.801C182.027 145.249 182.475 144.801 183.027 144.801H196.735C197.287 144.801 197.735 145.249 197.735 145.801C197.735 146.354 197.287 146.801 196.735 146.801H183.027C182.475 146.801 182.027 146.354 182.027 145.801Z" fill="#B6B6B6"></path>' +
				'<circle cx="244.644" cy="136" r="20.6301" fill="#E6E6E6"></circle>' +
				'<rect x="237.344" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<rect x="245.657" y="125.566" width="6.28647" height="14.814" fill="#B6B6B6"></rect>' +
				'<path d="M236.79 145.801C236.79 145.249 237.237 144.801 237.79 144.801H251.498C252.05 144.801 252.498 145.249 252.498 145.801C252.498 146.354 252.05 146.801 251.498 146.801H237.79C237.237 146.801 236.79 146.354 236.79 145.801Z" fill="#B6B6B6"></path>' +
				'</svg>'
			),
		},
	},
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
