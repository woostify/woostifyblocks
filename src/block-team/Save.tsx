import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
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
		general_image,
		general_layout,
		general_socials,
		heading,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		general_socials,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-team__wrap" });
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-team__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div>CHILD</div>
			<i className="lni lni-500px"></i>
		</SaveCommon>
	);
}
