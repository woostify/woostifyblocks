import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrs } from "./attributes";

interface Props extends WcbAttrs {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		style_dimension,
		style_text,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { stackOrientation, alignment, size } = general_general;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-buttons__inner`;
	// const INNER_BUTTON = `#${uniqueId} .wcb-button__main`;
	const INNER_BUTTON_TEXT = `#${uniqueId} .wcb-button__text`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`.${uniqueId}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	const {
		value_Desktop: alignment_Desktop,
		value_Tablet: alignment_tablet,
		value_Mobile: alignment_mobile,
	} = getValueFromAttrsResponsives(alignment);

	// console.log(1, "---- butons global css ---", { style_dimension });

	if (!uniqueId) {
		return null;
	}
	return (
		<>
			{/* <Global styles={getDivWrapStyles()} /> */}

			{/* INNER_CLASSNAME  */}
			<Global
				styles={[
					{
						[INNER_CLASSNAME]: {
							flexDirection: stackOrientation !== "none" ? "column" : "row",
							justifyContent:
								stackOrientation !== "none" ? undefined : alignment_mobile,
							alignItems:
								stackOrientation !== "none" ? alignment_mobile : "center",
							">*": {
								flex: alignment_mobile === "stretch" ? 1 : undefined,
								display: alignment_mobile === "stretch" ? "flex" : "block",
							},
							[`@media (min-width: ${media_tablet})`]: {
								flexDirection:
									stackOrientation !== "none" && stackOrientation !== "Mobile"
										? "column"
										: "row",

								justifyContent:
									stackOrientation !== "none" && stackOrientation !== "Mobile"
										? undefined
										: alignment_tablet,
								alignItems:
									stackOrientation !== "none" && stackOrientation !== "Mobile"
										? alignment_tablet
										: "center",

								">*": {
									flex: alignment_tablet === "stretch" ? 1 : undefined,
									display: alignment_tablet === "stretch" ? "flex" : "block",
								},
							},
							[`@media (min-width: ${media_desktop})`]: {
								flexDirection:
									stackOrientation === "Desktop" ? "column" : "row",
								justifyContent:
									stackOrientation === "Desktop"
										? undefined
										: alignment_Desktop,
								alignItems:
									stackOrientation === "Desktop" ? alignment_Desktop : "center",
								">*": {
									flex: alignment_Desktop === "stretch" ? 1 : undefined,
									display: alignment_Desktop === "stretch" ? "flex" : "block",
								},
							},
						},
					},

					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: general_general.gap,
						prefix: "gap",
					}),
				]}
			/>

			{/*  BUTTON */}
			<Global
				styles={getPaddingMarginStyles({
					// className: INNER_BUTTON,
					className: WRAP_CLASSNAME,
					padding: style_dimension.padding,
					margin: style_dimension.margin,
				})}
			/>

			{/*  TEXT */}
			<Global
				styles={getTypographyStyles({
					className: INNER_BUTTON_TEXT,
					typography: style_text.typography,
				})}
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
