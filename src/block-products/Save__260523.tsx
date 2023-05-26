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
		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,
		style_addToCardBtn,
		style_border,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_price,
		style_rating,
		style_saleBadge,
		style_title,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,
		style_addToCardBtn,
		style_border,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_price,
		style_rating,
		style_saleBadge,
		style_title,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-products__wrap",
	});
	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			{null}
		</SaveCommon>
	);
}
