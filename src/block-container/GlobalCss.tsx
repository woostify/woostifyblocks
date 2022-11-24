import { Global, css } from "@emotion/react";
import React, { FC } from "react";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleBackground from "../utils/getStyleBackground";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { BlockWCBContainerAttrs } from "./attributes";
import { getAdvanveDivWrapStyles } from "./getAdvanveStyles";

interface Props extends BlockWCBContainerAttrs {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		general_container,
		general_flexProperties,
		styles_background,
		styles_border,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-container__inner`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = () => {
		const { containerWidthType, customWidth, htmlTag, overflow, minHeight } =
			general_container;

		let {
			value_Desktop: cWidthDesktop,
			value_Tablet: cWidthTablet,
			value_Mobile: cWidthMobile,
		} = getValueFromAttrsResponsives(customWidth);

		if (containerWidthType !== "Custom") {
			cWidthDesktop = "";
			cWidthTablet = "";
			cWidthMobile = "";
		}
		//

		const {
			value_Desktop: minHeightDesktop,
			value_Tablet: minHeightTablet,
			value_Mobile: minHeightMobile,
		} = getValueFromAttrsResponsives(minHeight);
		//

		const {
			value_Desktop: zIndexDesktop,
			value_Tablet: zIndexTablet,
			value_Mobile: zIndexMobile,
		} = getValueFromAttrsResponsives(advance_zIndex);
		//
		const { isHiddenOnDesktop, isHiddenOnMobile, isHiddenOnTablet } =
			advance_responsiveCondition;
		return css`
			${WRAP_CLASSNAME} {
				position: relative;
				display: ${isHiddenOnMobile ? "hidden" : "flex"};
				color: ${styles_color};
				overflow: ${overflow};
				max-width: ${containerWidthType === "Custom" ? cWidthMobile : ""};
				min-height: ${minHeightMobile};
				z-index: ${zIndexMobile};
				@media (min-width: ${media_tablet}) {
					max-width: ${cWidthTablet};
					min-height: ${minHeightTablet};
					z-index: ${zIndexTablet};
					display: ${isHiddenOnTablet ? "hidden" : "flex"};
				}
				@media (min-width: ${media_desktop}) {
					max-width: ${cWidthDesktop};
					min-height: ${minHeightDesktop};
					z-index: ${zIndexDesktop};
					display: ${isHiddenOnDesktop ? "hidden" : "flex"};
				}
			}
		`;
	};

	const getDivWrapStyles__Border = () => {
		const {} = styles_border;
		//
		return getBorderStyles({
			border: styles_border,
			className: WRAP_CLASSNAME,
			isWithRadius: true,
		});
	};

	const getDivWrapStyles__BoxShadow = () => {
		const { Hover, Normal } = styles_boxShadow;
		const { presetClass, blur, color, horizontal, position, spread, vertical } =
			Normal;
		const {
			presetClass: presetClass_h,
			blur: blur_h,
			color: color_h,
			horizontal: horizontal_h,
			position: position_h,
			spread: spread_h,
			vertical: vertical_h,
		} = Hover;
		//
		let VALUE = "";
		let VALUE_H = "";
		//
		if (presetClass) {
			VALUE = getShadowStyleValueFromTwPreset(presetClass, color);
		} else {
			VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${
				position === "inset" ? position : ""
			}`;
		}
		//
		if (presetClass_h) {
			VALUE_H = getShadowStyleValueFromTwPreset(presetClass_h, color_h);
		} else {
			VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${
				position_h === "inset" ? position_h : ""
			}`;
		}

		return css`
			${WRAP_CLASSNAME} {
				box-shadow: ${VALUE};
				&:hover {
					box-shadow: ${VALUE_H};
				}
			}
		`;
	};

	const getDivWrapStyles__PaddingMargin = () => {
		const { margin, padding } = styles_dimensions;
		return getPaddingMarginStyles({
			margin,
			padding,
			className: WRAP_CLASSNAME,
		});
	};
	// ------------------- END WRAP DIV

	// ------------------- INNER DIV
	const getDivInnerStyles = () => {
		return css`
			${INNER_CLASSNAME} {
				display: flex;
				flex: 1 1 0%;
				position: relative;
				margin: 0 auto;
			}
		`;
	};

	const getInner__contentCustomWidth = () => {
		const { containerWidthType, contentWidthType, contentBoxWidth } =
			general_container;
		if (containerWidthType !== "Full Width" || contentWidthType !== "Boxed") {
			return;
		}

		const {
			value_Desktop: contentBoxWidthDesktop,
			value_Tablet: contentBoxWidthTablet,
			value_Mobile: contentBoxWidthMobile,
		} = getValueFromAttrsResponsives(contentBoxWidth);

		return css`
			${INNER_CLASSNAME} {
				max-width: ${contentBoxWidthMobile};
				@media (min-width: ${media_tablet}) {
					max-width: ${contentBoxWidthTablet};
				}
				@media (min-width: ${media_desktop}) {
					max-width: ${contentBoxWidthDesktop};
				}
			}
		`;
	};

	const getInner__flexProperties = () => {
		const {} = general_flexProperties;
		const { colunmGap, rowGap } = styles_dimensions;
		return getFlexPropertiesStyles({
			flexProperties: {
				...general_flexProperties,
				colunmGap,
				rowGap,
			},
			className: INNER_CLASSNAME,
		});
	};

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global
				styles={getStyleBackground({
					className: WRAP_CLASSNAME,
					styles_background,
				})}
			/>
			<Global styles={getDivWrapStyles__Border()} />
			<Global styles={getDivWrapStyles__BoxShadow()} />
			<Global styles={getDivWrapStyles__PaddingMargin()} />
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
			{/*  */}
			<Global styles={getDivInnerStyles()} />
			<Global styles={getInner__contentCustomWidth()} />
			<Global styles={getInner__flexProperties()} />
		</>
	);
};

export default React.memo(GlobalCss);
