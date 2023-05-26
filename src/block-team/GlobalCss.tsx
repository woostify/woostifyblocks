import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_image,
		general_layout,
		general_socials,
		style_description,
		style_desination,
		style_image,
		style_socialIcons,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			getStyleObjectFromResponsiveAttr({
				className: WRAP_CLASSNAME,
				value: general_layout.textAlignment,
				prefix: "textAlign",
			}),
			{
				[`${WRAP_CLASSNAME}`]: {
					[`@media (min-width: ${media_tablet})`]: {},
					[`@media (min-width: ${media_desktop})`]: {},
				},
			},
		];
	};

	const isImageBeSide =
		general_image.imagePosition === "left" ||
		general_image.imagePosition === "right";

	if (!uniqueId) {
		return null;
	}
	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* --------- CONTENT WRAP --------- */}
			{general_image.isShowImage &&
			general_image?.image?.mediaId &&
			isImageBeSide ? (
				<Global
					styles={[
						{
							[`${WRAP_CLASSNAME}`]: {
								display: general_image.stackOn !== "none" ? "block" : "flex",
								[`@media (min-width: ${media_tablet})`]: {
									display:
										general_image.stackOn === "tablet" ? "block" : "flex",
								},
								[`@media (min-width: ${media_desktop})`]: {
									display: "flex",
								},
							},
						},
					]}
				/>
			) : null}

			{/* --------- IMAGE --------- */}
			{general_image.isShowImage && general_image?.image?.mediaId ? (
				<Global
					styles={[
						getBorderStyles({
							border: style_image.border,
							className: `${WRAP_CLASSNAME} .wcb-team__image`,
							isWithRadius: true,
						}),
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-team__image`,
							margin: style_image.margin,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-team__image`,
							value: style_image.imageSize,
							prefix: "width",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-team__image, ${WRAP_CLASSNAME} .wcb-team__content-wrap`]:
								{
									alignSelf: general_image.imageAlignSelf,
								},
						},
					]}
				/>
			) : null}

			{/* --------- TITLE --------- */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_title.typography,
						className: `${WRAP_CLASSNAME} .wcb-team__heading`,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${WRAP_CLASSNAME} .wcb-team__heading`,
						value: style_title.marginBottom,
						prefix: "marginBottom",
					}),
					{
						[`${WRAP_CLASSNAME} .wcb-team__heading`]: {
							color: style_title.textColor,
						},
					},
				]}
			/>

			{/* --------- DESIGNATION --------- */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_desination.typography,
						className: `${WRAP_CLASSNAME} .wcb-team__designation`,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${WRAP_CLASSNAME} .wcb-team__designation`,
						value: style_desination.marginBottom,
						prefix: "marginBottom",
					}),
					{
						[`${WRAP_CLASSNAME} .wcb-team__designation`]: {
							color: style_desination.textColor,
						},
					},
				]}
			/>

			{/* --------- DESCRIPTION --------- */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_description.typography,
						className: `${WRAP_CLASSNAME} .wcb-team__description`,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${WRAP_CLASSNAME} .wcb-team__description`,
						value: style_description.marginBottom,
						prefix: "marginBottom",
					}),
					{
						[`${WRAP_CLASSNAME} .wcb-team__description`]: {
							color: style_description.textColor,
						},
					},
				]}
			/>

			{/* --------- SOCIALS ICONS --------- */}
			{general_socials.enableSocials ? (
				<Global
					styles={[
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-full`,
							value: style_socialIcons.iconSize,
							prefix: "width",
							prefix_2: "fontSize",
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-team__socials-icons > a`,
							value: style_socialIcons.iconSpacing,
							prefix: "marginLeft",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-full`]: {
								color: style_socialIcons.color,
								":hover": {
									color: style_socialIcons.hoverColor,
								},
							},
						},
					]}
				/>
			) : null}

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
