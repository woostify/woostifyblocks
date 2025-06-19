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
		advance_zIndex = { Desktop: undefined },
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
		advance_motionEffect,
		style_category,
	} = attributes;
	//

	// Data validation and normalization to ensure consistent structure
	const ensureObjectStructure = (value: any) => {
		if (value === null || value === undefined) return {};
		if (Array.isArray(value) && value.length === 0) return {};
		if (typeof value === 'object') return value;
		return {};
	};

	// Special handling for responsive values to ensure consistency
	const normalizeResponsiveObject = (obj: any) => {
		if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
			return {};
		}
		
		// For responsive objects, ensure they have proper structure
		const normalized: any = {};
		['Desktop', 'Tablet', 'Mobile'].forEach(device => {
			if (obj[device] !== undefined && obj[device] !== null && obj[device] !== '') {
				normalized[device] = obj[device];
			}
		});
		
		// Only return object if it has at least one valid responsive value
		return Object.keys(normalized).length > 0 ? normalized : {};
	};

	const ensureTypographyConsistency = (typography: any) => {
		if (!typography) return {};
		
		return {
			...typography,
			lineHeight: normalizeResponsiveObject(typography.lineHeight),
			letterSpacing: normalizeResponsiveObject(typography.letterSpacing),
			style: ensureObjectStructure(typography.style)
		};
	};

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition: ensureObjectStructure(advance_responsiveCondition),
		advance_zIndex: ensureObjectStructure(advance_zIndex),
		general_addToCartBtn: ensureObjectStructure(general_addToCartBtn),
		general_content: ensureObjectStructure(general_content),
		general_featuredImage: ensureObjectStructure(general_featuredImage),
		general_pagination: ensureObjectStructure(general_pagination),
		general_sortingAndFiltering: ensureObjectStructure(general_sortingAndFiltering),
		style_addToCardBtn: style_addToCardBtn ? {
			...style_addToCardBtn,
			typography: ensureTypographyConsistency(style_addToCardBtn.typography)
		} : undefined,
		style_border: ensureObjectStructure(style_border),
		style_featuredImage: ensureObjectStructure(style_featuredImage),
		style_layout: ensureObjectStructure(style_layout),
		style_pagination: ensureObjectStructure(style_pagination),
		style_price: style_price ? {
			...style_price,
			typography: ensureTypographyConsistency(style_price.typography)
		} : undefined,
		style_rating: ensureObjectStructure(style_rating),
		style_saleBadge: style_saleBadge ? {
			...style_saleBadge,
			typography: ensureTypographyConsistency(style_saleBadge.typography)
		} : undefined,
		style_title: style_title ? {
			...style_title,
			typography: ensureTypographyConsistency(style_title.typography)
		} : undefined,
		advance_motionEffect: ensureObjectStructure(advance_motionEffect),
		style_category: style_category ? {
			...style_category,
			typography: ensureTypographyConsistency(style_category.typography)
		} : undefined,
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
