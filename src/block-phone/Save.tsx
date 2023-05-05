import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import SelectCountryCode from "./SelectCountryCode";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general, label } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "phone");

	//
	const blockProps = useBlockProps.save({
		className: "wcb-phone__wrap",
	});

	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
				uniqueName={UNIQUE_NAME}
			/>
			<div className="wcb-phone__inner">
				<SelectCountryCode value={attributes.countryCode} />
				<input
					className="wcb-phone__tel-input"
					type="tel"
					placeholder={general_general.placeholder}
					required={general_general.isRequired}
					autoComplete={general_general.autocomplete}
					pattern={general_general.pattern}
					name={UNIQUE_NAME}
				/>
			</div>
		</label>
	);
}
