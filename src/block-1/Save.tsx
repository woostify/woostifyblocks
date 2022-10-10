import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()} className="wcb">
			test abc
		</div>
	);
}
