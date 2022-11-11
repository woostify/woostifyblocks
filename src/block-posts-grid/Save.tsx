import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbBlockPostsGridAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export default function save({
	attributes,
}: {
	attributes: WcbBlockPostsGridAttrs;
}) {
	const { uniqueId, advance_responsiveCondition, advance_zIndex } = attributes;
	//
	const newAttrForSave: WcbBlockPostsGridAttrs = attributes;
	//
	const blockProps = useBlockProps.save({ className: "wcb-posts-grid__wrap" });
	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			{null}
		</SaveCommon>
	);
}
