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
import {
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_1,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_2,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_3,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_4,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_5,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_6,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_7,
	WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_8,
} from "./WcbSliderPanel_ButtonPreset";

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
	const CALL_TO_ACTION = createRobustSelector('.wcb-slider-child__btn');
	const CALL_TO_ACTION_INNER = createRobustSelector('.wcb-slider-child__btn-inner');

	// ------------------- HELPER FUNCTIONS
	const getButtonBorderFromPreset = () => {
		if (!style_buttonPreset) return {};
		
		switch (style_buttonPreset.preset) {
			case "wcb-button-1":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_1;
			case "wcb-button-2":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_2;
			case "wcb-button-3":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_3;
			case "wcb-button-4":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_4;
			case "wcb-button-5":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_5;
			case "wcb-button-6":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_6;
			case "wcb-button-7":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_7;
			case "wcb-button-8":
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_8;
			default:
				return WCB_SLIDER_BUTTON_PANEL_STYLE_BORDER_PRESET_1;
		}
	};

	const getButtonBackgroundFromPreset = (): string => {
		if (!style_buttonPreset) return "#121314";
		switch (style_buttonPreset.preset) {
			case "wcb-button-1":
				return "#121314";
			case "wcb-button-2":
				return "#121314";
			case "wcb-button-3":
				return "#121314";
			case "wcb-button-4":
				return "#121314";
			case "wcb-button-5":
				return "#909090";
			case "wcb-button-6":
				return "#909090";
			case "wcb-button-7":
				return "#909090";
			case "wcb-button-8":
				return "#909090";
			default:
				return "#121314";
		}
	};

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

			{/* BUTTON BORDER  */}
			<Global
				styles={getBorderStyles({
					className: CALL_TO_ACTION_INNER,
					border: getButtonBorderFromPreset(),
					isWithRadius: true,
				})}
			/>

			{/* INNER  */}
			<Global
				styles={[
					{
						[ITEM_CLASSNAME_INNER]: {
							justifyItems: `${
									style_layoutPreset?.preset === "wcb-layout-2" ||
									style_layoutPreset?.preset === "wcb-layout-3" ||
									style_layoutPreset?.preset === "wcb-layout-5" ?
									"start" : "center"
							}`
						},
						[CALL_TO_ACTION_INNER]: {
							backgroundColor: `${getButtonBackgroundFromPreset()} !important`,
							width: "10rem",
							height: "2.5rem",
						},
					},
				]}
			/>

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
							className: createRobustSelector('.wcb-slider-child__item-background'),
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
