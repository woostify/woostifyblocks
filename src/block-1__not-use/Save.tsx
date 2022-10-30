import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Blokc1Attrs } from "./attributes";
export default function save({ attributes }: { attributes: Blokc1Attrs }) {
	console.log(111, { attributes });

	return (
		<div {...useBlockProps.save()} className="wcb">
			<RichText.Content tagName="h2" value={attributes.message} />
		</div>
	);
}