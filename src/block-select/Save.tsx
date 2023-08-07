import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import { FormInputLabelRichTextContent } from "../block-form/FormInputLabelRichTextContent";
import converUniqueId from "../utils/converUniqueId";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, general_general } = attributes;
	const UNIQUE_NAME = converUniqueId(uniqueId, "select");

	//
	const blockProps = useBlockProps.save({
		className: "wcb-select__wrap " + UNIQUE_NAME,
	});

	const renderSelect = () => {
		return (
			<select className="wcb-select__select" name={UNIQUE_NAME}>
				{(attributes.options || []).map((item, index) => (
					<option key={index + "-" + item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		);
	};
	return (
		<label {...blockProps} data-uniqueid={uniqueId}>
			<FormInputLabelRichTextContent
				value={attributes.label}
				isRequired={general_general.isRequired}
				uniqueName={UNIQUE_NAME}
			/>
			{renderSelect()}
		</label>
	);
}
