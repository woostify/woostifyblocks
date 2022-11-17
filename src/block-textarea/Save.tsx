import React from "react";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;

	//
	const blockProps = useBlockProps.save({ className: "wcb-textarea__wrap" });

	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
			/>
			<textarea
				placeholder={general_general.placeholder}
				required={general_general.isRequired}
				autoComplete={general_general.autocomplete}
				rows={general_general.rows || 10}
			></textarea>
		</label>
	);
}