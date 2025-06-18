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
		advance_motionEffect,
	} = attributes;

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

	//
	const newAttrForSave: WcbBlockPostsGridAttrs = {
		uniqueId,
		advance_responsiveCondition: ensureObjectStructure(advance_responsiveCondition),
		advance_zIndex: ensureObjectStructure(advance_zIndex),
		general_pagination: ensureObjectStructure(general_pagination),
		general_postContent: ensureObjectStructure(general_postContent),
		general_postFeaturedImage: ensureObjectStructure(general_postFeaturedImage),
		general_postMeta: ensureObjectStructure(general_postMeta),
		general_readmoreLink: ensureObjectStructure(general_readmoreLink),
		general_sortingAndFiltering: ensureObjectStructure(general_sortingAndFiltering),
		style_border: ensureObjectStructure(style_border),
		style_boxShadow: ensureObjectStructure(style_boxShadow),
		style_excerpt: style_excerpt ? {
			...style_excerpt,
			typography: ensureTypographyConsistency(style_excerpt.typography)
		} : undefined,
		style_featuredImage: ensureObjectStructure(style_featuredImage),
		style_layout: ensureObjectStructure(style_layout),
		style_meta: style_meta ? {
			...style_meta,
			authorTypography: ensureTypographyConsistency(style_meta.authorTypography),
			dateTypography: ensureTypographyConsistency(style_meta.dateTypography)
		} : undefined,
		style_pagination: ensureObjectStructure(style_pagination),
		style_readmoreLink: style_readmoreLink ? {
			...style_readmoreLink,
			typography: ensureTypographyConsistency(style_readmoreLink.typography)
		} : undefined,
		style_taxonomy: style_taxonomy ? {
			...style_taxonomy,
			typography: ensureTypographyConsistency(style_taxonomy.typography)
		} : undefined,
		style_title: style_title ? {
			...style_title,
			typography: ensureTypographyConsistency(style_title.typography)
		} : undefined,
		advance_motionEffect: ensureObjectStructure(advance_motionEffect),
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
