import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		content,
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
	} = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "content"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-button__wrap" });
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-button__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<RichText.Content
				className="wcb-button__main"
				tagName="a"
				value={attributes.content}
			/>
		</SaveCommon>
	);
}
