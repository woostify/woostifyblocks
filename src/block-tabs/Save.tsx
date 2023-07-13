import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "general_preset"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_preset,
		general_tabTitle,
		titles,
		style_answer,
		style_container,
		style_question,
		style_icon,
		advance_motionEffect,
	} = attributes;

	//
	const newAttrForSave: WcbAttrsForSave = {
		general_preset,
		general_tabTitle,
		titles,
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		style_answer,
		style_container,
		style_question,
		style_icon,
		advance_motionEffect,
	};

	//
	const wrapBlockProps = useBlockProps.save({ className: "wcb-tabs__wrap" });
	// INNER BLOCKS
	// const innerBlockProps = useBlockProps.save();
	// const innerBlocksProps = useInnerBlocksProps.save(innerBlockProps);
	// //
	// const innerClassName = `wcb-tabs__inner`;
	//
	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<InnerBlocks.Content />
			{/* <div children={innerBlocksProps.children} className={innerClassName} /> */}
		</SaveCommon>
	);
}
