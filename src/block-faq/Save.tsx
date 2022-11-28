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

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
	} = attributes;
	//
	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
	};
	// WRAP BLOCK
	const blockProps = useBlockProps.save({ className: "wcb-faq__wrap" });

	// INNER BLOCKS
	const innerBlockProps = useBlockProps.save({
		className: "wcb-faq__inner",
	});
	const innerBlocksProps = useInnerBlocksProps.save(innerBlockProps);
	//
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-faq__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}
