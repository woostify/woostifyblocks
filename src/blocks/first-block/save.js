import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'First Block – hello from the saved content!',
				'woostify-block'
			) }
		</p>
	);
}
