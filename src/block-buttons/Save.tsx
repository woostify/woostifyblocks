import React from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const { uniqueId, advance_responsiveCondition, advance_zIndex } = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "heading" | "subHeading"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-buttons__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-buttons__wrap"
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}
