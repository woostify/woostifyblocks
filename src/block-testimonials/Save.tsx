import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
		testimonials,
	} = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "testimonials"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-testimonials__wrap",
	});
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-testimonials__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div>CHILD</div>
		</SaveCommon>
	);
}
