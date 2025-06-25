import { Global, CSSObject } from "@emotion/react";
import React, { FC, CSSProperties } from "react";
import getBorderStyles from "../utils/getBorderStyles";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

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
		general_preset,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__content`;
	const LABEL_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__label`;
	const NUMBER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__number`;
	const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__box`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	// ------------------- NUMBER
	const getInner__Number_typography = () => {
		const { typography } = style_icon;

		return getTypographyStyles({
			typography,
			className: NUMBER_CLASSNAME,
		});
	};


	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{<Global styles={getDivWrapStyles()} />}

			{/* BORDER  */}
			<Global
				styles={getBorderStyles({
					className: BOX_CLASSNAME,
					border: style_border,
					isWithRadius: true,
				})}
			/>
			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: BOX_CLASSNAME,
					boxShadow: style_boxshadow,
				})}
			/>
		

			{/* ICON CSS */}
			<Global styles={[
				getInner__Number_typography(),
				{
					[NUMBER_CLASSNAME]: {
						color: style_icon.textColor,
					},
				},
			]} />
			
			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: CONTENT_CLASSNAME,
					defaultDisplay: "flex",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
