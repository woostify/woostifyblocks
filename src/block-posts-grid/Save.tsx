import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbBlockHeadingAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export default function save({
	attributes,
}: {
	attributes: WcbBlockHeadingAttrs;
}) {
	const { uniqueId, advance_responsiveCondition, advance_zIndex } = attributes;
	//

	const newAttrForSave: Omit<WcbBlockHeadingAttrs, "heading" | "subHeading"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-default__wrap" });
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
