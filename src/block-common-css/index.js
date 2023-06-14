import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
/**
 * Internal dependencies
 */
import metadata from "./block.json";
import Edit from "./Edit";
//------------------ TAILWINDCSS AND COMMON CSS -----------------
import "../style.css";
import "../styles/index.scss";
//-----------------------------------------
import "animate.css";

registerBlockType(metadata.name, {
	edit: Edit,
	save: () => null,
	attributes: [],
});
