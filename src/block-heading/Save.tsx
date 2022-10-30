import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { WcbBlokcHeadingAttrs } from "./attributes";
export default function save({
	attributes,
}: {
	attributes: WcbBlokcHeadingAttrs;
}) {
	return (
		<div {...useBlockProps.save()} className="wcb-heading__wrap">
			<RichText.Content
				tagName="h2"
				value={attributes.content}
				className="wcb-heading__inner"
			/>
		</div>
	);
}
