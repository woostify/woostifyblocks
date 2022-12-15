import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading,
		description,
		designation,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
	};
	//

	const blockProps = useBlockProps.save({ className: "wcb-icon-box__wrap" });
	const HeadingTag = general_layout.headingTag;

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-icon-box__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<h1>okoookokokokok</h1>
		</SaveCommon>
	);
}
