import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_settings,
		style_caption,
		style_image,
		style_overlay,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `[data-uniqueid=${uniqueId}]`;
	const IMAGE_CLASSNAME = `${WRAP_CLASSNAME} img`;
	const CAPTION_CLASSNAME = `${WRAP_CLASSNAME} figcaption.wp-element-caption`;
	const OVERLAY_BG_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-bg`;
	const OVERLAY_CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-content`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	return (
		<>
			{/* <Global styles={getDivWrapStyles()} /> */}
			<Global
				styles={[
					getPaddingMarginStyles({
						className: WRAP_CLASSNAME,
						padding: style_image.padding,
					}),
					getPaddingMarginStyles({
						className: `${WRAP_CLASSNAME} .wcb-image__overlay-wrap`,
						padding: style_image.padding,
					}),
				]}
			/>

			{/* -------- IMAGE img ----------  */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: IMAGE_CLASSNAME,
						value: general_settings.width,
						prefix: "width",
						hasUnit: false,
						unit: "px",
					}),
					getStyleObjectFromResponsiveAttr({
						className: IMAGE_CLASSNAME,
						value: general_settings.height,
						prefix: "height",
						hasUnit: false,
						unit: "px",
					}),
					getStyleObjectFromResponsiveAttr({
						className: IMAGE_CLASSNAME,
						value: general_settings.objectFit,
						prefix: "objectFit",
					}),
					//
					getBorderStyles({
						className: IMAGE_CLASSNAME,
						border: style_image.border,
						isWithRadius: true,
					}),
					getBorderRadiusStyles({
						className: `${OVERLAY_BG_CLASSNAME}`,
						radius: style_image.border.radius,
					}),
					getBoxShadowStyles({
						className: IMAGE_CLASSNAME,
						boxShadow: style_image.boxShadow,
					}),
				]}
			/>

			{/* -------- OVERLAY ----------  */}
			{general_settings.layout === "overlay" ? (
				<Global
					styles={[
						{
							[OVERLAY_BG_CLASSNAME]: {
								justifyContent: general_settings.contentAlignment,
								backgroundColor: style_overlay.backgroundColor,
								":hover": {
									backgroundColor: style_overlay.backgroundColorHover,
								},
							},
						},
					]}
				/>
			) : null}

			{/* -------- CAPTION ----------  */}
			{general_settings.layout !== "overlay" ? (
				<Global
					styles={[
						getStyleObjectFromResponsiveAttr({
							className: CAPTION_CLASSNAME,
							value: general_settings.captionAlignment,
							prefix: "textAlign",
						}),
						getTypographyStyles({
							className: CAPTION_CLASSNAME,
							typography: style_caption.typography,
						}),
						getPaddingMarginStyles({
							className: CAPTION_CLASSNAME,
							margin: style_caption.margin,
						}),
						{
							[CAPTION_CLASSNAME]: {
								color: style_caption.textColor,
							},
						},
					]}
				/>
			) : null}

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
