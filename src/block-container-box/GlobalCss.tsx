import { Global, css, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
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
		let cWidthDesktop = customWidth.Desktop;
		let cWidthTablet = customWidth.Tablet || cWidthDesktop;
		let cWidthMobile = customWidth.Mobile || cWidthTablet;

		//
		const minHeightDesktop = minHeight.Desktop;
		const minHeightTablet = minHeight.Tablet || minHeightDesktop;
		const minHeightMobile = minHeight.Mobile || minHeightTablet;
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

	const getDivWrapStyles__BgColor_Gradient = () => {
		const {} = styles_background;
		return getBackgroundColorGradientStyles({
			background: styles_background,
			className: WRAP_CLASSNAME,
		});
	};

	const getDivWrapStyles__BackgroundImage = () => {
		const {
			bgImageAttachment,
			bgImageRepeat,
			bgImageSize,
			bgType,
			focalPoint,
			imageData,
		} = styles_background;

		if (bgType !== "image") {
			return;
		}
		//
		const SRC__DESKTOP: string = imageData.Desktop?.mediaUrl;
		const SRC__TABLET: string = imageData.Tablet?.mediaUrl || SRC__DESKTOP;
		const SRC: string = imageData.Mobile?.mediaUrl || SRC__TABLET;
		//
		const BG_REPEAT__DESKTOP = bgImageRepeat.Desktop;
		const BG_REPEAT__TABLET = bgImageRepeat.Tablet || BG_REPEAT__DESKTOP;
		const BG_REPEAT = bgImageRepeat.Mobile || BG_REPEAT__TABLET;
		//
		const BG_ATTACHMENT__DESKTOP = bgImageAttachment.Desktop;
		const BG_ATTACHMENT__TABLET =
			bgImageAttachment.Tablet || BG_ATTACHMENT__DESKTOP;
		const BG_ATTACHMENT = bgImageAttachment.Mobile || BG_ATTACHMENT__TABLET;
		//
		const BG_SIZE__DESKTOP = bgImageSize.Desktop;
		const BG_SIZE__TABLET = bgImageSize.Tablet || BG_SIZE__DESKTOP;
		const BG_SIZE = bgImageSize.Mobile || BG_SIZE__TABLET;
		//

		const BG_FOCAL__DESKTOP = focalPoint.Desktop;
		const BG_FOCAL__TABLET = focalPoint.Tablet || BG_FOCAL__DESKTOP;
		const BG_FOCAL = focalPoint.Mobile || BG_FOCAL__TABLET;
		//
		const BG_POSITION = `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%`;
		const BG_POSITION__TABLET = `${BG_FOCAL__TABLET.x * 100}% ${
			BG_FOCAL__TABLET.y * 100
		}%`;
		const BG_POSITION__DESKTOP = `${BG_FOCAL__DESKTOP.x * 100}% ${
			BG_FOCAL__DESKTOP.y * 100
		}%`;
		//
		return css`
			${WRAP_CLASSNAME} {
				background-image: url(${SRC});
				background-repeat: ${BG_REPEAT};
				background-attachment: ${BG_ATTACHMENT};
				background-size: ${BG_SIZE};
				background-position: ${BG_POSITION};
				@media (min-width: ${media_tablet}) {
					background-image: url(${SRC__TABLET});
					background-repeat: ${BG_REPEAT__TABLET};
					background-attachment: ${BG_ATTACHMENT__TABLET};
					background-size: ${BG_SIZE__TABLET};
					background-position: ${BG_POSITION__TABLET};
				}
				@media (min-width: ${media_desktop}) {
					background-image: url(${SRC__DESKTOP});
					background-repeat: ${BG_REPEAT__DESKTOP};
					background-attachment: ${BG_ATTACHMENT__DESKTOP};
					background-size: ${BG_SIZE__DESKTOP};
					background-position: ${BG_POSITION__DESKTOP};
				}
			}
		`;
	};

	const getDivWrapStyles__Overlay = () => {
		const { overlayColor, overlayGradient, overlayType } = styles_background;

		if (overlayType !== "color" && overlayType !== "gradient") {
			return;
		}

		let preBgName = "";
		let bgValue = "";
		if (overlayType === "color") {
			preBgName = "background-color";
			bgValue = overlayColor;
		}
		// Backgroud gradient
		if (overlayType === "gradient") {
			preBgName = "background-image";
			bgValue = overlayGradient;
		}

		return css`
			${WRAP_CLASSNAME} {
				.wcb-OverlayBackgroundByBgControl {
					${preBgName}: ${bgValue};
					position: absolute;
					inset: 0;
					z-index: 0;
				}
			}
		`;
	};

	const getDivWrapStyles__BorderRadius = () => {
		const { radius } = styles_border;
		//
		return getBorderRadiusStyles({
			radius: radius,
			className: WRAP_CLASSNAME,
		});
	};

	const getDivWrapStyles__Border = () => {
		const { hoverColor, mainSettings } = styles_border;
		//
		return getBorderStyles({
			border: styles_border,
			className: WRAP_CLASSNAME,
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
		const padding_Desktop = padding?.Desktop;
		const padding_Tablet = padding?.Tablet || padding_Desktop;
		const padding_Mobile = padding?.Mobile || padding_Tablet;

		return {
			[`${INNER_CLASSNAME}`]: {
				display: "flex",
				flex: "1 1 0%",
				position: "relative",
				// PHAN NAY KHONG CO TAC DUNG O FRONTEND, MUC DICH CHI FOCUS TREN EDITOR
				"&:after": {
					top: `calc(-${padding_Mobile.top} + 1px) !important`,
					right: `calc(-${padding_Mobile.right} + 1px) !important`,
					bottom: `calc(-${padding_Mobile.bottom} + 1px) !important`,
					left: `calc(-${padding_Mobile.left} + 1px) !important`,
				},
				[`@media (min-width: ${media_tablet})`]: {
					"&:after": {
						top: `calc(-${padding_Tablet.top} + 1px) !important`,
						right: `calc(-${padding_Tablet.right} + 1px) !important`,
						bottom: `calc(-${padding_Tablet.bottom} + 1px) !important`,
						left: `calc(-${padding_Tablet.left} + 1px) !important`,
					},
				},
				[`@media (min-width: ${media_desktop})`]: {
					"&:after": {
						top: `calc(-${padding_Desktop.top} + 1px) !important`,
						right: `calc(-${padding_Desktop.right} + 1px) !important`,
						bottom: `calc(-${padding_Desktop.bottom} + 1px) !important`,
						left: `calc(-${padding_Desktop.left} + 1px) !important`,
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
			<Global styles={getDivWrapStyles__BgColor_Gradient()} />
			<Global styles={getDivWrapStyles__BackgroundImage()} />
			<Global styles={getDivWrapStyles__Overlay()} />
			<Global styles={getDivWrapStyles__BorderRadius()} />
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

export default GlobalCss;
