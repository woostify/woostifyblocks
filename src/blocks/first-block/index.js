import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
registerBlockType( 'woostify-block/first-block', {
	"attributes": {
		"message": {
			"type": "string",
			"source": "text",
			"selector": "div",
			"default": ""
		},
		"bg_color": { 
			"type": 'string', 
			"default": '#000000' 
		},
        "text_color": { 
			"type": 'string', 
			"default": '#ffffff' 
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
