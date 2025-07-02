import { Global, CSSObject } from "@emotion/react";
import React, { FC, CSSProperties } from "react";
import getBorderStyles from "../utils/getBorderStyles";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";

interface Props extends WcbAttrsForSave { }

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_icon,
		style_background,
		style_icon,
		style_border,
		style_boxshadow,
		style_dimension,
		general_preset,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__content`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const { alignment } = general_icon;
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives<React.CSSProperties["textAlign"]>(
				alignment
			);
		//
		const {
			mobile_v: value_Mobile_new,
			tablet_v: value_Tablet_new,
			desktop_v: value_Desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: value_Mobile,
			tablet_v: value_Tablet,
			desktop_v: value_Desktop,
		});
		return {
			[`${WRAP_CLASSNAME}`]:
				value_Mobile_new || value_Tablet_new || value_Desktop_new
					? {
							textAlign: value_Mobile_new,

							[`@media (min-width: ${media_tablet})`]: value_Tablet_new
								? {
										textAlign: value_Tablet_new,
								  }
								: undefined,
							[`@media (min-width: ${media_desktop})`]: value_Desktop_new
								? {
										textAlign: value_Desktop_new,
								  }
								: undefined,
					  }
					: undefined,
		};
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{<Global styles={getDivWrapStyles()} />}

			{/* BACKGROUND  */}
			<Global
				styles={getBackgroundColorGradientStyles({
					className: CONTENT_CLASSNAME,
					background: style_background.normal,
					backgroundHover: style_background.hover,
				})}
			/>

			{/* BORDER  */}
			<Global
				styles={getBorderStyles({
					className: CONTENT_CLASSNAME,
					border: style_border,
					isWithRadius: true,
				})}
			/>
			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: CONTENT_CLASSNAME,
					boxShadow: style_boxshadow,
				})}
			/>		

			{/* ICON CSS */}
			<Global
				styles={[
					getPaddingMarginStyles({
						className: WRAP_CLASSNAME,
						margin: style_dimension.margin,
					}),
					getPaddingMarginStyles({
						className: `${WRAP_CLASSNAME} .wcb-icon__content`,
						padding: style_dimension.padding,
					}),
					getBorderStyles({
						border: style_icon,
						className: `${WRAP_CLASSNAME} .wcb-icon__content`,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${WRAP_CLASSNAME} .wcb-icon-full`,
						value: general_icon.size,
						prefix: "width",
						prefix_2: "fontSize",
					}),
					{
						[`${CONTENT_CLASSNAME} .wcb-icon-full`]: {
							color: style_icon.color
						},
						[`${CONTENT_CLASSNAME}:hover .wcb-icon-full`]: {
							color: style_icon.hoverColor,
						},
						[`${WRAP_CLASSNAME} .wcb-icon__content`]: {
							cursor: general_icon.enableLink ? 'pointer' : '',
						},
					}
				]}
			/>
			
			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: CONTENT_CLASSNAME,
					defaultDisplay: "inline-block",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
