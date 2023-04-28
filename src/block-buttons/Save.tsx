import React from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

export default function save({ attributes }: { attributes: WcbAttrsForSave }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		style_text,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		general_general,
		style_dimension,
		style_text,
		advance_responsiveCondition,
		advance_zIndex,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-buttons__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className={"wcb-buttons__wrap" + ` ${attributes.className}`}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}
