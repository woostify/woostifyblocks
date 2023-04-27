import { Global, CSSObject } from "@emotion/react";
import React, { FC, CSSProperties } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_layout,
		style_description,
		style_dimension,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}].wp-block`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__inner`;
	const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__content`;
	const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__title`;
	const DESC_CLASSNAME = `${WRAP_CLASSNAME} .wcb-cta__description`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	const {
		value_Desktop: textAlignment_Desktop,
		value_Tablet: textAlignment_tablet,
		value_Mobile: textAlignment_mobile,
	} = getValueFromAttrsResponsives(general_layout.textAlignment);
	const {
		value_Desktop: flexDirection_Desktop,
		value_Tablet: flexDirection_tablet,
		value_Mobile: flexDirection_mobile,
	} = getValueFromAttrsResponsives(general_layout.flexDirection);
	// FLEX COL
	let ALIGN_ITEMS: HasResponsive<CSSProperties["alignItems"]> = {
		Desktop:
			textAlignment_Desktop === "left"
				? "start"
				: textAlignment_Desktop === "right"
				? "end"
				: "center",
		Tablet:
			textAlignment_tablet === "left"
				? "start"
				: textAlignment_tablet === "right"
				? "end"
				: "center",
		Mobile:
			textAlignment_mobile === "left"
				? "start"
				: textAlignment_mobile === "right"
				? "end"
				: "center",
	};

	if (
		flexDirection_Desktop === "row" ||
		flexDirection_Desktop === "row-reverse"
	) {
		ALIGN_ITEMS.Desktop = "center";
	}
	if (
		flexDirection_tablet === "row" ||
		flexDirection_tablet === "row-reverse"
	) {
		ALIGN_ITEMS.Tablet = "center";
	}
	if (
		flexDirection_mobile === "row" ||
		flexDirection_mobile === "row-reverse"
	) {
		ALIGN_ITEMS.Mobile = "center";
	}
	// console.log(3, "---- CTA global css ---", { uniqueId });

	return (
		<>
			{/* <Global styles={getDivWrapStyles()} /> */}

			{/* INNER  */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: general_layout.textAlignment,
						prefix: "textAlign",
					}),

					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: ALIGN_ITEMS,
						prefix: "alignItems",
					}),

					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: general_layout.flexDirection,
						prefix: "flexDirection",
					}),

					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: style_dimension.gap,
						prefix: "gap",
					}),
					getPaddingMarginStyles({
						className: INNER_CLASSNAME,
						...style_dimension,
					}),
				]}
			/>

			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: CONTENT_CLASSNAME,
					value: general_layout.contentWidth,
					prefix: "width",
				})}
			/>

			{/* TITLE  */}
			<Global
				styles={[
					getTypographyStyles({
						className: TITLE_CLASSNAME,
						typography: style_title.typography,
					}),
					getStyleObjectFromResponsiveAttr({
						className: TITLE_CLASSNAME,
						value: style_title.marginBottom,
						prefix: "marginBottom",
					}),
					{
						[TITLE_CLASSNAME]: { color: style_title.textColor },
					},
				]}
			/>

			{/* DESCRIPTION  */}
			<Global
				styles={[
					getTypographyStyles({
						className: DESC_CLASSNAME,
						typography: style_description.typography,
					}),
					getStyleObjectFromResponsiveAttr({
						className: DESC_CLASSNAME,
						value: style_description.marginBottom,
						prefix: "marginBottom",
					}),
					{
						[DESC_CLASSNAME]: { color: style_description.textColor },
					},
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
