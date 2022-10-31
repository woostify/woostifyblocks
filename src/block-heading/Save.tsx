import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { WcbBlockHeadingAttrs } from "./attributes";
export default function save({
	attributes,
}: {
	attributes: WcbBlockHeadingAttrs;
}) {
	// console.log(123, "wcb-heading-save", { attributes });

	return (
		<div {...useBlockProps.save({ className: "wcb-heading__wrap" })}>
			<RichText.Content
				tagName="h2"
				className="wcb-heading__heading"
				value={attributes.heading}
			/>
			<div className="wcb-heading__separator">TUAN</div>
			<RichText.Content
				tagName="p"
				className="wcb-heading__subHeading"
				value={attributes.subHeading}
			/>
		</div>
	);
}
