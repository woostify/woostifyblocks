import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "title" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		description,
		general_layout,
		style_description,
		style_dimension,
		style_title,
		title,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_dimension,
		style_title,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-cta__wrap" });
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-cta__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div>CHILD</div>
		</SaveCommon>
	);
}
