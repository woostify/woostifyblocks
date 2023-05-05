import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "hidden");

	//
	const blockProps = useBlockProps.save({
		className: "wcb-hidden__wrap",
	});

	return (
		<label {...blockProps} data-uniqueid={uniqueId} hidden>
			<FormInputLabelRichTextContent
				value={general_general.name}
				uniqueName={UNIQUE_NAME}
				isRequired={false}
			/>
			<input
				type="hidden"
				placeholder={general_general.value}
				autoComplete={general_general.value}
				name={UNIQUE_NAME}
				hidden
			/>
		</label>
	);
}
