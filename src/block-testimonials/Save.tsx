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
	} = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "heading" | "subHeading"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
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
