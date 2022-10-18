import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { BlockWCBContainerBoxAttrs } from "./attributes";
export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerBoxAttrs;
}) {
	console.log(111, { attributes });

	return (
		<div {...useBlockProps.save()} className="wcb">
			<RichText.Content tagName="h2" value={attributes.message} />
		</div>
	);
}
