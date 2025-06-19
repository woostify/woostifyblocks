import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_rating,
		style_name,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-testimonials__item`;
	const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-testimonials__item-name`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-testimonials__item-content`;
	const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-testimonials__item-company`;
	const ITEM_IMAGE = `${WRAP_CLASSNAME} .wcb-testimonials__item-image`;
	const ITEM_RATING = `${WRAP_CLASSNAME} .wcb-testimonials__item-rating`;
	const SLICK_ARROW = `${WRAP_CLASSNAME} .slick-arrow`;
	const SLICK_DOTS = `${WRAP_CLASSNAME} .slick-dots`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			getStyleObjectFromResponsiveAttr({
				value: general_general.textAlignment,
				className: `${ITEM_CLASSNAME}`,
				prefix: "textAlign",
			}),
		];
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ITEM NAME  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_name.typography,
						className: ITEM_NAME,
					}),
					getSingleDimensionStyles({
						value: style_name.marginBottom,
						className: ITEM_NAME,
						prefix: "marginBottom",
					}),
					{
						[ITEM_NAME]: {
							color: style_name.textColor,
						},
					},
				]}
			/>

			{/* ITEM CONTENT  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_content.typography,
						className: ITEM_CONTENT,
					}),
					getSingleDimensionStyles({
						value: style_content.marginBottom,
						className: ITEM_CONTENT,
						prefix: "marginBottom",
					}),
					{
						[ITEM_CONTENT]: {
							color: style_content.textColor,
						},
					},
				]}
			/>

			{/* ITEM COMPANY  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_company.typography,
						className: ITEM_COMPANY,
					}),
					{
						[ITEM_COMPANY]: {
							color: style_company.textColor,
						},
					},
				]}
			/>

			{/* ITEM IMAGE  */}
			<Global
				styles={[
					getPaddingMarginStyles({
						padding: style_image.padding,
						className: ITEM_IMAGE,
					}),
					getBorderRadiusStyles({
						radius: style_image.radius,
						className: `${ITEM_IMAGE} img`,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${ITEM_IMAGE} img`,
						prefix: "height",
						prefix_2: "width",
						value: style_image.imageSize,
					}),
					{
						[`${ITEM_IMAGE} img`]: {
							objectFit: style_image.objectFit,
						},
					},
				]}
			/>

			{/* ITEM WRAP  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_backgroundAndBorder.border,
						className: ITEM_CLASSNAME,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: ITEM_CLASSNAME,
						value: general_general.colGap,
						prefix: "paddingLeft",
						prefix_2: "paddingRight",
					}),
					getStyleObjectFromResponsiveAttr({
						className: ITEM_CLASSNAME,
						value: style_arrowAndDots.dotsMarginTop,
						prefix: "marginBottom",
					}),
					getPaddingMarginStyles({
						className: `${WRAP_CLASSNAME} .wcb-testimonials__item-inner`,
						padding: style_dimension.padding,
					}),
					getStyleBackground({
						className: `${ITEM_CLASSNAME} .wcb-testimonials__item-background`,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* SLICK ARROW & DOTS  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: SLICK_ARROW,
						isWithRadius: true,
					}),
					{
						[`${SLICK_ARROW} svg`]: {
							width: style_arrowAndDots.arrowSize,
							height: style_arrowAndDots.arrowSize,
							color: style_arrowAndDots.color,
						},
					},

					{
						[`${SLICK_DOTS} li`]: {
							"button:before": {
								color: style_arrowAndDots.color,
							},
						},
					},
				]}
				
			/>

			{/* RATING */}
			<Global
				styles={[
					getSingleDimensionStyles({
						value: style_rating.marginBottom,
						className: ITEM_RATING,
						prefix: "marginBottom",
					}),
					{
						[`${ITEM_RATING} .active`]: {
							color: style_rating.color,
						},
					},
				]}
				
			/>

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
