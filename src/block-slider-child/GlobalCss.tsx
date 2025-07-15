import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleBackground from "../utils/getStyleBackground";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_name,
		style_image,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-slider-child__item`;
	const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-slider-child__name`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-slider-child__content`;
	const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-slider-child__company`;
	const ITEM_IMAGE = `${WRAP_CLASSNAME} .wcb-slider-child__image`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			// Basic styling for the slider child item
			{
				[ITEM_CLASSNAME]: {
					display: "flex",
					flexDirection: "column",
				},
			},
		];
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ITEM NAME  */}
			{style_name && (
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
			)}

			{/* ITEM CONTENT  */}
			{style_content && (
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
			)}

			{/* ITEM COMPANY  */}
			{style_company && (
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
			)}

			{/* ITEM WRAP  */}
			{style_backgroundAndBorder && (
				<Global
					styles={[
						getBorderStyles({
							border: style_backgroundAndBorder.border,
							className: ITEM_CLASSNAME,
							isWithRadius: true,
						}),
						getStyleBackground({
							className: `${ITEM_CLASSNAME} .wcb-slider-child__item-background`,
							styles_background: style_backgroundAndBorder.background,
						}),
					]}
				/>
			)}

			{/* PADDING STYLES */}
			{style_dimension && (
				<Global
					styles={[
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-slider-child__item-inner`,
							padding: style_dimension.padding,
						}),
					]}
				/>
			)}

			{/* IMAGE STYLES */}
			{ style_image && style_image.isShowImage && style_image?.image?.mediaId && (
				style_image.imagePosition === "above-title" || 
				style_image.imagePosition === "blow-title" || 
				style_image.imagePosition === "bottom") ? (
					<Global
						styles={[
							{
								[`${WRAP_CLASSNAME} .wcb-slider-child__content-image`]:
									{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
								},
								[`${WRAP_CLASSNAME} .wcb-slider-child__image`]:
									{
										alignSelf: style_image.imageAlignSelf,
										width: style_image.imageSize === "thumbnail" ? "100px" : "100%",
										height: style_image.imageSize === "thumbnail" ? "100px" : "100%",
										objectFit: "cover",
										margin: "auto",
									},
							},
						]}
					/>
			) : null}

			{ style_image && style_image.isShowImage && style_image?.image?.mediaId && (
				style_image.imagePosition === "left" || 
				style_image.imagePosition === "right") ? (
					<Global
						styles={[
							{
								[`${WRAP_CLASSNAME} .wcb-slider-child__item-wrap-inner`]:
									{
										display: "flex",
										flexDirection: "row",
										gap: "10px",
									},

								[`${WRAP_CLASSNAME} .wcb-slider-child__image`]:
									{
										display: "block",
										width: style_image.imageSize === "thumbnail" ? "100px" : "100%",
										height: style_image.imageSize === "thumbnail" ? "100px" : "100%",
										objectFit: "cover",
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
