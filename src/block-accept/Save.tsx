import React from "react";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "accept");

	//
	const blockProps = useBlockProps.save({ className: "wcb-accept__wrap" });

	return (
		<div {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
			/>
			{/* CHILD CONTENT  */}
			{general_general.enablePrivacyLink && (
				<div>
					<a
						href={general_general.linkHref}
						target={general_general.openInNewTab ? "_blank" : "_self"}
						rel="noopener noreferrer"
						className="wcb-accept__link"
					>
						{general_general.linkLabel}
					</a>
				</div>
			)}
			<label className="wcb-checkbox__option">
				<input
					type="checkbox"
					className="wcb-checkbox__option-input"
					required={general_general.isRequired}
					name={UNIQUE_NAME}
				/>
				<span
					className={`wcb-checkbox__option-label ${
						general_general.isRequired ? "required" : ""
					}`}
				>
					{general_general.acceptanceText}
				</span>
			</label>
		</div>
	);
}
