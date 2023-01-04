import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
/**
 * Internal dependencies
 */
import "./HeaderToolBarPatterns";
// import save from "./Save";
import metadata from "./block.json";
//------------------ TAILWINDCSS AND COMMON CSS -----------------
import "../style.css";
import "../styles/index.scss";
//-----------------------------------------

registerBlockType(metadata.name, {
	edit: () => null,
	save: () => null,
	attributes: [],
});
