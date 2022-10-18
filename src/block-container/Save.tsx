import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	// console.log(111, { attributes });

	return (
		<div {...useBlockProps.save()} className="wcb">
			<InnerBlocks.Content />
		</div>
	);
}
