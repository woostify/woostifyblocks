import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "url");

	//
	const blockProps = useBlockProps.save({
		className: "wcb-url__wrap",
	});

	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
				uniqueName={UNIQUE_NAME}
			/>
			<input
				type="url"
				placeholder={general_general.placeholder}
				required={general_general.isRequired}
				autoComplete={general_general.autocomplete}
				name={UNIQUE_NAME}
			/>
		</label>
	);
}
