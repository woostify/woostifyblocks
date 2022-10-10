import "./style.scss";

import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()} className="wcb">
			<RichText.Content tagName="h2" value={attributes.message} />
		</div>
	);
}
