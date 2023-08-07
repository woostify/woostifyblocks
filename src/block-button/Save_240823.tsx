import React from "react";
import { __ } from "@wordpress/i18n";
import {
	// @ts-ignore
	useInnerBlocksProps,
	useBlockProps,
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import Button from "./Button";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "content"> {}

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

	const newAttrForSave: WcbAttrsForSave = {
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
	const blockProps = useBlockProps.save({ className: "wcb-button__main" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className={"wcb-button__wrap" + ` ${attributes.className || ""}`}
			uniqueId={uniqueId}
		>
			<Button attributes={attributes} isEdit={false} {...innerBlocksProps} />
		</SaveCommon>
	);
}
