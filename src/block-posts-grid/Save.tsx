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
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_pagination,
		general_postContent,
		general_postFeaturedImage,
		general_postMeta,
		general_readmoreLink,
		general_sortingAndFiltering,
		style_border,
		style_boxShadow,
		style_excerpt,
		style_featuredImage,
		style_layout,
		style_meta,
		style_pagination,
		style_readmoreLink,
		style_taxonomy,
		style_title,
	} = attributes;
	//
	const newAttrForSave: WcbBlockPostsGridAttrs = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_pagination,
		general_postContent,
		general_postFeaturedImage,
		general_postMeta,
		general_readmoreLink,
		general_sortingAndFiltering,
		style_border,
		style_boxShadow,
		style_excerpt,
		style_featuredImage,
		style_layout,
		style_meta,
		style_pagination,
		style_readmoreLink,
		style_taxonomy,
		style_title,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-posts-grid__wrap",
	});
	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			{null}
		</SaveCommon>
	);
}
