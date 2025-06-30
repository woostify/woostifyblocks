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
		<svg width="24" height="24" viewBox="0 0 24 25" fill="none" class="wcb-editor-block-icons fill-none" aria-hidden="true" focusable="false"><path d="M21 12.6987C21 17.6693 16.9706 21.6987 12 21.6987C7.02944 21.6987 3 17.6693 3 12.6987C3 7.72817 7.02944 3.69873 12 3.69873C16.9706 3.69873 21 7.72817 21 12.6987Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3217 9.12032C11.5991 8.5582 12.4007 8.5582 12.6781 9.12032L13.3798 10.5422C13.49 10.7654 13.7029 10.9201 13.9493 10.9559L15.5184 11.1839C16.1387 11.2741 16.3864 12.0364 15.9375 12.4739L14.8021 13.5807C14.6239 13.7544 14.5425 14.0048 14.5846 14.2501L14.8526 15.8129C14.9586 16.4307 14.3101 16.9019 13.7553 16.6102L12.3518 15.8723C12.1315 15.7565 11.8683 15.7565 11.6479 15.8723L10.2445 16.6102C9.68964 16.9019 9.04116 16.4307 9.14712 15.8129L9.41516 14.2501C9.45724 14.0048 9.3759 13.7544 9.19765 13.5807L8.06223 12.4739C7.61335 12.0364 7.86105 11.2741 8.48138 11.1839L10.0505 10.9559C10.2968 10.9201 10.5098 10.7654 10.6199 10.5422L11.3217 9.12032Z" fill="none" stroke="#fff" stroke-width="1.4"></path></svg>
	),
});
