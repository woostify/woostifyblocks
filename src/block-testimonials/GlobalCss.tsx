import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrs } from "./attributes";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";

interface Props
	extends Omit<
		WcbAttrs,
		"testimonials" | "general_carousel" | "general_images"
	> {}

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
		style_name,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-testimonials__item`;
	const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-testimonials__item-name`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-testimonials__item-content`;
	const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-testimonials__item-company`;
	const ITEM_IMAGE = `${WRAP_CLASSNAME} .wcb-testimonials__item-image`;
	const GLIDE_ARROW = `${WRAP_CLASSNAME} .glide__arrow`;
	const GLIDE_DOTS = `${WRAP_CLASSNAME} .glide__bullets`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			{
				[`${WRAP_CLASSNAME}`]: {
					".glide": {
						padding: "1rem",
					},
					[`@media (min-width: ${media_tablet})`]: {},
					[`@media (min-width: ${media_desktop})`]: {
						".glide": {
							padding: "1.75rem",
						},
					},
				},
			},
			getStyleObjectFromResponsiveAttr({
				value: general_general.textAlignment,
				className: `${ITEM_CLASSNAME}`,
				prefix: "textAlign",
			}),
		];
	};

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
				]}
			/>

			{/* GLIDE ARROW  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: GLIDE_ARROW,
						isWithRadius: true,
					}),
					{
						[`${GLIDE_ARROW} svg`]: {
							width: style_arrowAndDots.arrowSize,
							height: style_arrowAndDots.arrowSize,
							color: style_arrowAndDots.color,
						},
					},
					getSingleDimensionStyles({
						value: style_arrowAndDots.dotsMarginTop,
						className: GLIDE_DOTS,
						prefix: "marginTop",
					}),
					{
						[`${GLIDE_DOTS} .glide__bullet`]: {
							backgroundColor: style_arrowAndDots.color,
							opacity: 0.3,
							"&.glide__bullet--active": {
								backgroundColor: style_arrowAndDots.color,
								opacity: 1,
							},
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
					getPaddingMarginStyles({
						className: `${ITEM_CLASSNAME}`,
						padding: style_dimension.padding,
					}),
					getStyleBackground({
						className: `${ITEM_CLASSNAME}`,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
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
