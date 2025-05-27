import React from "react";
import { 
	useBlockProps, 
	// @ts-ignore
	useInnerBlocksProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading_1,
		heading_2,
		heading_3,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading_1,
		heading_2,
		heading_3,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
	};

	const wrapBlockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save(
		useBlockProps.save({ className: "wcb-icon-list__icon-wrap" })
	);

	return (
		<SaveCommon {...wrapBlockProps} attributes={newAttrForSave} uniqueId={uniqueId}>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}
