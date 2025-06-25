import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> { }

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		advance_motionEffect,
		general_preset
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		advance_motionEffect,
		general_preset
	};
	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon__wrap",
	});

	
	// Generate class names for layout
	const classes = [`wcb-icon__content ${general_preset.preset}`];
	

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			{/* CHILD CONTENT  */}

			<div className={`wcb-icon__content ${general_preset.preset}`}>
			</div>
		</SaveCommon>
	);
}
