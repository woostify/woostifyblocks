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
		general_layout,
		style_desination,
		style_Icon,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_dimension,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon-list__icon-wrap`;

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{/* INNER_CLASSNAME  */}
			<Global styles={[
				{
					[`${INNER_CLASSNAME}`]: {
							display: "flex",
							flexDirection: general_layout.layout === "vertical" ? "column" : "row",
							...(general_layout.layout === "vertical"
								? {
										alignItems:
											general_layout.textAlignment.Desktop === "center" ||
											general_layout.textAlignment.Mobile === "center" ||
											general_layout.textAlignment.Tablet === "center"
												? "center"
												: general_layout.textAlignment.Desktop === "left" ||
												general_layout.textAlignment.Mobile === "left" ||
												general_layout.textAlignment.Tablet === "left"
												? "flex-start"
												: general_layout.textAlignment.Desktop === "right" ||
												general_layout.textAlignment.Mobile === "right" ||
												general_layout.textAlignment.Tablet === "right"
												? "flex-end"
												: undefined,
								}
								: {
										justifyContent:
											general_layout.textAlignment.Desktop === "center" ||
											general_layout.textAlignment.Mobile === "center" ||
											general_layout.textAlignment.Tablet === "center"
												? "center"
												: general_layout.textAlignment.Desktop === "left" ||
												general_layout.textAlignment.Mobile === "left" ||
												general_layout.textAlignment.Tablet === "left"
												? "flex-start"
												: general_layout.textAlignment.Desktop === "right" ||
												general_layout.textAlignment.Mobile === "right" ||
												general_layout.textAlignment.Tablet === "right"
												? "flex-end"
												: undefined,
								}),
						},

						".wcb-icon-list__icon-wrap, .wcb-icon-list__content": {
							alignSelf:
								general_icon.verticalAlignment === "middle"
									? "center"
									: undefined,
						},

						".wcb-icon-list__icon-wrap": {
							order: general_icon.iconPosition === "leftOfTitle" ? "0" : "2",
						},

						".wcb-icon-list__content-title-wrap": {
							display:
								general_icon.iconPosition === "leftOfTitle" ||
								general_icon.iconPosition === "rightOfTitle"
									? "flex"
									: "block",
						},

						[`@media (min-width: ${media_tablet})`]: {
							flexDirection:
								general_icon.stackOn === "mobile" ? "row" : undefined,
						},

						[`@media (min-width: ${media_desktop})`]: {
							flexDirection: "row",
						},
				},
				getStyleObjectFromResponsiveAttr({
					className: INNER_CLASSNAME,
					value: general_layout.textAlignment,
					prefix: "textAlign",
				}),
			]}/>

			<Global
				styles={getPaddingMarginStyles({
					className: WRAP_CLASSNAME,
					margin: style_dimension.margin,
					padding: style_dimension.padding,
				})}
			/>

			{/* --------- ICON --------- */}
			{general_icon.enableIcon ? (
				<Global
					styles={[
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							margin: style_Icon.dimensions.margin,
						}),
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							padding: style_Icon.dimensions.padding,
						}),
						getBorderStyles({
							border: style_Icon.border,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							isWithRadius: true,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-full`,
							value: style_Icon.iconSize,
							prefix: "width",
							prefix_2: "fontSize",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-full`]: {
								color: style_Icon.color,
								":hover": {
									color: style_Icon.hoverColor,
								},
							},
						},
					]}
				/>
			) : null}

			{/* --------- TITLE --------- */}
			{general_layout.enableTitle ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_title.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
							value: style_title.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__heading`]: {
								color: style_title.textColor,
							},
						},
					]}
				/>
			) : null}


			{/* --------- DESIGNATION --------- */}
			{general_layout.enablePrefix ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_desination.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
							value: style_desination.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__designation`]: {
								color: style_desination.textColor,
							},
						},
					]}
				/>
			) : null}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_motionEffect,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
