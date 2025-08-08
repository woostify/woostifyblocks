import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleBackground from "../utils/getStyleBackground";
import { WcbAttrsForSave } from "./Save";
import { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
import { STYLES_BG_NO_IMAGE_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";
import { TYPOGRAPHY_CONTROL_DEMO } from "../components/controls/MyTypographyControl/types";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import {
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";

interface Props extends WcbAttrsForSave {
	parentUniqueId?: string | null; // Keep for backward compatibility
	clientID?: string; // New: Use clientId for unique CSS selectors
}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		clientID, // Get clientID prop
		// ATTRS OF BLOCK
		style_backgroundAndBorder,
		style_content,
		style_callToActionButton,
		style_dimension,
		style_name,
		style_image,
		style_buttonPreset,
		style_layoutPreset,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	// Generate unique CSS class from clientID or fallback to uniqueId
	const uniqueCssClass = clientID ? converClientIdToUniqueClass(clientID) : uniqueId;

	// Create robust CSS selectors that work in all scenarios
	const WRAP_CLASSNAME_UNIVERSAL = `.wcb-slider-child__wrap.${uniqueCssClass}`;
	const WRAP_CLASSNAME_SCOPED = `.wcb-slider__wrap .wcb-slider-child__wrap.${uniqueCssClass}`;
	
	// Create comprehensive dual selectors that handle various wrapper scenarios
	const createRobustSelector = (childSelector: string) => [
		// Direct targeting (most reliable for save mode)
		`${WRAP_CLASSNAME_UNIVERSAL} ${childSelector}`,
		// Scoped targeting (for edit mode context)
		`${WRAP_CLASSNAME_SCOPED} ${childSelector}`,
		// Additional targeting for potential slider wrapper scenarios
		`${WRAP_CLASSNAME_UNIVERSAL} .wcb-slider__item ${childSelector}`,
		`${WRAP_CLASSNAME_SCOPED} .wcb-slider__item ${childSelector}`,
		// Even more specific for deeply nested scenarios
		`${WRAP_CLASSNAME_UNIVERSAL} .wcb-slider__item .wcb-slider__item-inner ${childSelector}`,
		`${WRAP_CLASSNAME_SCOPED} .wcb-slider__item .wcb-slider__item-inner ${childSelector}`
	].join(', ');

	// Create CSS selectors using robust approach
	const ITEM_CLASSNAME = createRobustSelector('.wcb-slider-child__item');
	const ITEM_CLASSNAME_INNER = createRobustSelector('.wcb-slider-child__item-inner');
	const ITEM_NAME = createRobustSelector('.wcb-slider-child__name');
	const ITEM_CONTENT = createRobustSelector('.wcb-slider-child__content');
	const ITEM_IMAGE = createRobustSelector('.wcb-slider-child__image');
	const CALL_TO_ACTION_INNER = createRobustSelector('.wcb-slider-child__btn-inner');
	const CALL_TO_ACTION_TEXT = createRobustSelector('.wcb-slider-child__btn-text');
	const CALL_TO_ACTION_TEXT_SPACING = createRobustSelector('.wcb-slider-child__btn_spacing');
	const ITEM_TOP_ICON_WRAP = createRobustSelector('.wcb-top__icon-wrap');
	const ITEM_TOP_ICON = createRobustSelector('.wcb-top__icon');

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			// Basic styling for the slider child item using robust selectors
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

			{/* --------- ICON --------- */}
			{style_image?.enableIcon ? (
				<Global
					styles={[
						getPaddingMarginStyles({
							className: ITEM_TOP_ICON_WRAP,
							margin: style_image?.iconDimensions.margin,
						}),
						getPaddingMarginStyles({
							className: ITEM_TOP_ICON_WRAP,
							padding: style_image?.iconDimensions.padding,
						}),
						getBorderStyles({
							border: style_image?.iconBorder,
							className: ITEM_TOP_ICON_WRAP,
							isWithRadius: true,
						}),
						getStyleObjectFromResponsiveAttr({
							className: ITEM_TOP_ICON,
							value: style_image?.iconSize,
							prefix: "width",
							prefix_2: "fontSize",
						}),
						{
							[`${ITEM_TOP_ICON} .wcb-icon-full`]: {
								color: style_image?.iconColor,
								":hover": {
									color: style_image?.iconHoverColor,
								},
							},
						},
					]}
				/>
			) : null}

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
								color: `${style_name.textColor} !important`,
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
								color: `${style_content.textColor} !important`,
							},
						},
					]}
				/>
			)}

			{/* STYLE LayoutPreset for call to action */}
			<Global
				styles={[
					{
						[ITEM_CLASSNAME_INNER]: {
							justifyItems: `${
									style_layoutPreset?.preset === "wcb-layout-2" ||
									style_image?.iconPosition === "left" ||
									style_layoutPreset?.preset === "wcb-layout-3" ||
									style_layoutPreset?.preset === "wcb-layout-5" ||
									style_content?.textAlignment?.Desktop === "left" ?
									"start" : 
									style_image?.iconPosition === "right" ||
									style_content?.textAlignment?.Desktop === "right" ?
									"end" :
									"center"
							}`
						},
						[CALL_TO_ACTION_INNER]: {
							// backgroundColor: `${getButtonBackgroundFromPreset()} !important`,
							// width: "10rem",
							// height: "2.5rem",
						},
					},
				]}
			/>

			{/* TEXT for call to action */}
			<Global
				styles={[
					getTypographyStyles({
						className: CALL_TO_ACTION_TEXT,
						typography: style_callToActionButton?.typographyText ?? TYPOGRAPHY_CONTROL_DEMO,
					}),
					{
						[CALL_TO_ACTION_TEXT]: {
							color: style_callToActionButton?.colorText ?? "#ffffff",
						},
						[CALL_TO_ACTION_TEXT_SPACING]: 
							style_buttonPreset?.iconPosition === "afterTitle"
								? { marginRight: style_buttonPreset?.iconSpacing?.Desktop ?? "0px" }
								: { marginLeft: style_buttonPreset?.iconSpacing?.Desktop ?? "0px" },
						// [CALL_TO_ACTION_TEXT_SPACING]: 
						// 	style_buttonPreset?.iconPosition === "afterTitle"
						// 		? { marginRight: style_buttonPreset?.iconSpacing?.Tablet ?? "0px" }
						// 		: { marginLeft: style_buttonPreset?.iconSpacing?.Tablet ?? "0px" },
						// [CALL_TO_ACTION_TEXT_SPACING]: 
						// 	style_buttonPreset?.iconPosition === "afterTitle"
						// 		? { marginRight: style_buttonPreset?.iconSpacing?.Mobile ?? "0px" }
						// 		: { marginLeft: style_buttonPreset?.iconSpacing?.Mobile ?? "0px" },
						// BUTTON HOVER
						[CALL_TO_ACTION_INNER]: {
							":hover": {
								".wcb-slider-child__btn-text": {
									color: style_callToActionButton?.hoverColorText,
								},
							},
						},
					},
				]}
			/>

			{/* BACKGROUND for call to action */}
			<Global
				styles={getBackgroundColorGradientStyles({
					className: CALL_TO_ACTION_INNER,
					background: style_callToActionButton?.normalBackground ?? STYLES_BG_NO_IMAGE_DEMO,
					backgroundHover: style_callToActionButton?.hoverBackground ?? STYLES_BG_NO_IMAGE_DEMO,
				})}
			/>

			{/* BORDER for call to action */}
			<Global
				styles={getBorderStyles({
					className: CALL_TO_ACTION_INNER,
					border: {
						mainSettings: style_callToActionButton?.mainSettings ?? MY_BORDER_CONTROL_DEMO.mainSettings,
						hoverColor: style_callToActionButton?.hoverColor ?? "#121314",
						radius: style_callToActionButton?.radius ?? MY_BORDER_CONTROL_DEMO.radius,
					},
					isWithRadius: true,
				})}
			/>

			{/* DIMENSION for call to action */}
			<Global
				styles={[
					getPaddingMarginStyles({
						className: CALL_TO_ACTION_INNER,
						padding: style_callToActionButton?.padding,
						margin: style_callToActionButton?.margin,
					}),
				]}
			/>


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
							className: ITEM_CLASSNAME,
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
							className: createRobustSelector('.wcb-slider-child__item-inner'),
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
								[createRobustSelector('.wcb-slider-child__content-image')]:
									{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
								},
								[createRobustSelector('.wcb-slider-child__image')]:
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
								[createRobustSelector('.wcb-slider-child__item-wrap-inner')]:
									{
										display: "flex",
										flexDirection: "row",
										gap: "10px",
									},

								[createRobustSelector('.wcb-slider-child__image')]:
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
					className: WRAP_CLASSNAME_UNIVERSAL,
					defaultDisplay: "block",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
