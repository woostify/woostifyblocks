import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, advance_responsiveCondition, advance_zIndex } = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-default__wrap " + (attributes.className || ""),
	});
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-default__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div>CHILD</div>
		</SaveCommon>
	);
}
