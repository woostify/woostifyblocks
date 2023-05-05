import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	//
	const UNIQUE_NAME = converUniqueId(uniqueId, "toggle");
	const blockProps = useBlockProps.save({
		className: "wcb-toggle__wrap",
	});

	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
				uniqueName={UNIQUE_NAME}
			/>

			<label className="wcb-toggle__switch">
				<input
					type="hidden"
					className="wcb-toggle__switch-input-hidden"
					data-truestate={attributes.general_general?.trueState}
					data-falsestate={attributes.general_general?.falseState}
					name={UNIQUE_NAME}
				/>
				<input
					type="checkbox"
					data-truestate={attributes.general_general?.trueState}
					data-falsestate={attributes.general_general?.falseState}
					name={UNIQUE_NAME}
					checked={attributes.general_general?.isDefaultON}
					required={attributes.general_general?.isRequired}
				/>
				<span
					className={`wcb-toggle__slider ${
						attributes.general_general?.layout === "round" ? "round" : ""
					}`}
				></span>
			</label>
		</label>
	);
}
