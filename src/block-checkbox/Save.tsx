import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "checkbox");
	//
	const blockProps = useBlockProps.save({ className: "wcb-checkbox__wrap" });

	const renderCheckboxOptions = () => {
		return (attributes.options || []).map((item, index) => (
			<div key={index + "-" + item.value}>
				<label className="wcb-checkbox__option">
					<input
						type="checkbox"
						className="wcb-checkbox__option-input"
						value={item.value}
						required={general_general.isRequired}
						name={UNIQUE_NAME}
					/>
					<span className="wcb-checkbox__option-label">{item.label}</span>
				</label>
			</div>
		));
	};

	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
				uniqueName={UNIQUE_NAME}
			/>
			{renderCheckboxOptions()}
		</label>
	);
}
