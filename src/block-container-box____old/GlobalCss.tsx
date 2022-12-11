import { Global, css, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleBackground from "../utils/getStyleBackground";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { BlockWCBContainerBoxAttrs } from "./attributes";

interface Props extends BlockWCBContainerBoxAttrs {}

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
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-container-box__inner`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = () => {
		const { customWidth, overflow, minHeight } = general_container;

		const {
			value_Desktop: cWidthDesktop,
			value_Tablet: cWidthTablet,
			value_Mobile: cWidthMobile,
		} = getValueFromAttrsResponsives(customWidth);

		//

		const {
			value_Desktop: minHeightDesktop,
			value_Tablet: minHeightTablet,
			value_Mobile: minHeightMobile,
		} = getValueFromAttrsResponsives(minHeight);

		return css`
			${WRAP_CLASSNAME} {
				position: relative;
				color: ${styles_color};
				overflow: ${overflow};
				min-height: ${minHeightMobile};
				flex-basis: calc(${cWidthMobile} - (var(--wcb-gap-x)));
				flex-grow: 1;
				flex-shrink: 1;
				@media (min-width: ${media_tablet}) {
					flex-basis: calc(${cWidthTablet} - (var(--wcb-gap-x)));
					min-height: ${minHeightTablet};
				}
				@media (min-width: ${media_desktop}) {
					flex-basis: calc(${cWidthDesktop} - (var(--wcb-gap-x)));
					min-height: ${minHeightDesktop};
				}
			}
		`;
	};

	const getDivWrapStyles__Border = () => {
		const { hoverColor, radius } = styles_border;
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
		//
	};
	// ------------------- END WRAP DIV

	// ------------------- INNER DIV
	const getDivInnerStyles = (): CSSObject => {
		const { padding } = styles_dimensions;
		//

		const {
			value_Desktop: padding_Desktop,
			value_Tablet: padding_Tablet,
			value_Mobile: padding_Mobile,
		} = getValueFromAttrsResponsives(padding);

		return {
			[`${INNER_CLASSNAME}`]: {
				display: "flex",
				flex: "1 1 0%",
				position: "relative",
				// PHAN NAY KHONG CO TAC DUNG O FRONTEND, MUC DICH CHI FOCUS TREN EDITOR
				"&:after": {
					top: `calc(-${padding_Mobile?.top} + 1px) !important`,
					right: `calc(-${padding_Mobile?.right} + 1px) !important`,
					bottom: `calc(-${padding_Mobile?.bottom} + 1px) !important`,
					left: `calc(-${padding_Mobile?.left} + 1px) !important`,
				},
				[`@media (min-width: ${media_tablet})`]: {
					"&:after": {
						top: `calc(-${padding_Tablet?.top} + 1px) !important`,
						right: `calc(-${padding_Tablet?.right} + 1px) !important`,
						bottom: `calc(-${padding_Tablet?.bottom} + 1px) !important`,
						left: `calc(-${padding_Tablet?.left} + 1px) !important`,
					},
				},
				[`@media (min-width: ${media_desktop})`]: {
					"&:after": {
						top: `calc(-${padding_Desktop?.top} + 1px) !important`,
						right: `calc(-${padding_Desktop?.right} + 1px) !important`,
						bottom: `calc(-${padding_Desktop?.bottom} + 1px) !important`,
						left: `calc(-${padding_Desktop?.left} + 1px) !important`,
					},
				},
			},
		};
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
			<Global styles={getInner__flexProperties()} />
		</>
	);
};

export default React.memo(GlobalCss);
