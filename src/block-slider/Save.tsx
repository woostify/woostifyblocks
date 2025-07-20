import React from "react";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
import "./style.scss";

export interface WcbAttrsForSave extends WcbAttrs {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_name,
		style_content,
		style_company,
		style_boxshadow,
		advance_motionEffect,
	} = attributes;

	// Note: In save context, we don't have access to clientId
	// The child blocks will need to detect parent through DOM traversal
	
	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_name,
		style_content,
		style_company,
		style_boxshadow,
		advance_motionEffect,
	};

	const blockProps = useBlockProps.save({
		className: `wcb-slider__wrap ${uniqueId}`,
		"data-uniqueid": uniqueId, // Add data-uniqueid attribute
	});

	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			<div className="wcb-slider__wrap-items">
				<InnerBlocks.Content />
			</div>
		</SaveCommon>
	);
}
