import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getBorderStyles from "../utils/getBorderStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK

		style_icon,
		general_tabTitle,
		style_body,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const TITLE_WRAP_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__titles`;
	const TITLE_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner`;
	const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title`;

	//

	let {
		value_Desktop: iconSize_desktop,
		value_Tablet: iconSize_tablet,
		value_Mobile: iconSize_mobile,
	} = getValueFromAttrsResponsives(style_icon.size);

	const IconSizeConverted: HasResponsive<string> = {
		Desktop: iconSize_desktop + "px",
		Tablet: iconSize_tablet + "px",
		Mobile: iconSize_mobile + "px",
	};

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{/* ------- TITLE -------   */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: TITLE_WRAP_CLASSNAME,
						value: style_title.colunmGap,
						prefix: "columnGap",
					}),
					getStyleObjectFromResponsiveAttr({
						className: TITLE_WRAP_CLASSNAME,
						value: style_title.rowGap,
						prefix: "rowGap",
					}),
					getTypographyStyles({
						className: TITLE_CLASSNAME,
						typography: style_title.typography,
					}),
					getPaddingMarginStyles({
						className: TITLE_CHILD_CLASSNAME,
						padding: style_title.padding,
					}),

					getBorderStyles({
						className: TITLE_CHILD_CLASSNAME,
						border: style_title.border,
						isWithRadius: true,
					}),
					getBorderStyles({
						className: TITLE_CHILD_CLASSNAME + ".active",
						border: style_title.borderActive,
						isWithRadius: true,
					}),

					// getStyleObjectFromResponsiveAttr({
					// 	className: TITLE_CLASSNAME,
					// 	value: style_icon.colGap,
					// 	prefix: "gap",
					// }),
					{
						[TITLE_CHILD_CLASSNAME]: {
							color: style_title.color,
							backgroundColor: style_title.backgroundColor,
							// ":hover, :focus, :active": {
							// 	color: style_title.colorA,
							// 	backgroundColor: style_title.backgroundColorHover,
							// },
						},
						[`${TITLE_CHILD_CLASSNAME}.active .wcb-tabs__title`]: {
							color: style_title.colorActive,
							backgroundColor: style_title.backgroundColorActive,
						},
					},
				]}
			/>

			{/* ------ ICON ---------  */}
			{/* <Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: `${FAQ_CHILD_ICON}, ${FAQ_CHILD_ICON}:before, ${FAQ_CHILD_ICON} svg`,
						value: IconSizeConverted,
						prefix: "fontSize",
						prefix_2: "height",
						prefix_3: "width",
					}),
					{
						[FAQ_CHILD_ICON]: {
							color: style_icon.color,
						},
						[`${WRAP_CLASSNAME} .wcb-faq-child__wrap.active`]: {
							".wcb-faq-child__icon": {
								color: style_icon.activeColor,
							},
						},
					},
				]}
			/> */}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
