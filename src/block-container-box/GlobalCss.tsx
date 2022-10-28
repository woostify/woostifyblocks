import { Global, css } from "@emotion/react";
import React, { FC } from "react";
import {
	BorderMain4Side,
	BorderMainSingleSide,
} from "../components/controls/MyBorderControl/types";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
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
		general_typography,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media__desktopMinWidth, media__tabletMinWidth } =
		DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .block-editor-block-list__layout`;

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
				flex-basis: calc(${cWidthMobile} - (var(--wcb-gap-x) / 2));
				min-height: ${minHeightMobile};
				@media (min-width: ${media__tabletMinWidth}) {
					flex-basis: calc(${cWidthTablet} - (var(--wcb-gap-x) / 2));
					min-height: ${minHeightTablet};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					flex-basis: calc(${cWidthDesktop} - (var(--wcb-gap-x) / 2));
					min-height: ${minHeightDesktop};
				}
			}
		`;
	};

	const getDivWrapStyles__BgColor_Gradient = () => {
		const { bgType, color, gradient } = styles_background;

		if (bgType !== "color" && bgType !== "gradient") {
			return;
		}

		let preBgName = "";
		let bgValue = "";
		if (bgType === "color") {
			preBgName = "background-color";
			bgValue = color;
		}
		// Backgroud gradient
		if (bgType === "gradient") {
			preBgName = "background-image";
			bgValue = gradient;
		}
		//
		return css`
			${WRAP_CLASSNAME} {
				${preBgName}: ${bgValue};
				@media (min-width: ${media__tabletMinWidth}) {
				}
				@media (min-width: ${media__desktopMinWidth}) {
				}
			}
		`;
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
				@media (min-width: ${media__tabletMinWidth}) {
					background-image: url(${SRC__TABLET});
					background-repeat: ${BG_REPEAT__TABLET};
					background-attachment: ${BG_ATTACHMENT__TABLET};
					background-size: ${BG_SIZE__TABLET};
					background-position: ${BG_POSITION__TABLET};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					background-image: url(${SRC__DESKTOP});
					background-repeat: ${BG_REPEAT__DESKTOP};
					background-attachment: ${BG_ATTACHMENT__DESKTOP};
					background-size: ${BG_SIZE__DESKTOP};
					background-position: ${BG_POSITION__DESKTOP};
				}
			}
		`;
	};

	const getDivWrapStyles__BgVideo = () => {
		const { bgType } = styles_background;
		if (bgType !== "video") {
			return;
		}

		return css`
			${WRAP_CLASSNAME} {
				.wcb-container__video {
					position: absolute;
					inset: 0;
					z-index: 0;
					overflow: hidden;
					video {
						position: absolute;
						inset: 0;
						z-index: 0;
						width: 100%;
						height: 100%;
					}
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
				.wcb-container__overlay {
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
		const radiusDesktop = radius?.Desktop;
		const radiusTablet = radius?.Tablet || radiusDesktop;
		const radiusMobile = radius?.Mobile || radiusTablet;

		return css`
			${WRAP_CLASSNAME} {
				border-top-left-radius: ${radiusMobile.top};
				border-top-right-radius: ${radiusMobile.right};
				border-bottom-right-radius: ${radiusMobile.bottom};
				border-bottom-left-radius: ${radiusMobile.left};

				@media (min-width: ${media__tabletMinWidth}) {
					border-top-left-radius: ${radiusTablet.top};
					border-top-right-radius: ${radiusTablet.right};
					border-bottom-right-radius: ${radiusTablet.bottom};
					border-bottom-left-radius: ${radiusTablet.left};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					border-top-left-radius: ${radiusDesktop.top};
					border-top-right-radius: ${radiusDesktop.right};
					border-bottom-right-radius: ${radiusDesktop.bottom};
					border-bottom-left-radius: ${radiusDesktop.left};
				}
			}
		`;
	};

	const getDivWrapStyles__Border = () => {
		const { hoverColor, mainSettings } = styles_border;
		//
		if (!mainSettings) {
			return;
		}

		if ((mainSettings as BorderMain4Side)?.top) {
			const { bottom, left, right, top } = mainSettings as BorderMain4Side;
			return css`
				${WRAP_CLASSNAME} {
					border-top: ${top.width} ${top.style} ${top.color};
					border-left: ${left.width} ${left.style} ${left.color};
					border-right: ${right.width} ${right.style} ${right.color};
					border-bottom: ${bottom.width} ${bottom.style} ${bottom.color};
					&:hover {
						border-color: ${hoverColor};
					}
				}
			`;
		} else {
			const { color, style, width } = mainSettings as BorderMainSingleSide;

			return css`
				${WRAP_CLASSNAME} {
					border: ${width} ${style} ${color};
					&:hover {
						border-color: ${hoverColor};
					}
				}
			`;
		}
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

		const margin_Desktop = margin.Desktop;
		const margin_Tablet = margin.Tablet || margin_Desktop;
		const margin_Mobile = margin.Mobile || margin_Tablet;
		//
		const padding_Desktop = padding.Desktop;
		const padding_Tablet = padding.Tablet || padding_Desktop;
		const padding_Mobile = padding.Mobile || padding_Tablet;
		//

		return css`
			${WRAP_CLASSNAME} {
				padding-top: ${padding_Mobile.top};
				padding-right: ${padding_Mobile.right};
				padding-bottom: ${padding_Mobile.bottom};
				padding-left: ${padding_Mobile.left};
				margin-top: ${margin_Mobile.top};
				margin-right: ${margin_Mobile.right};
				margin-bottom: ${margin_Mobile.bottom};
				margin-left: ${margin_Mobile.left};
				@media (min-width: ${media__tabletMinWidth}) {
					padding-top: ${padding_Tablet.top};
					padding-right: ${padding_Tablet.right};
					padding-bottom: ${padding_Tablet.bottom};
					padding-left: ${padding_Tablet.left};
					margin-top: ${margin_Tablet.top};
					margin-right: ${margin_Tablet.right};
					margin-bottom: ${margin_Tablet.bottom};
					margin-left: ${margin_Tablet.left};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					padding-top: ${padding_Desktop.top};
					padding-right: ${padding_Desktop.right};
					padding-bottom: ${padding_Desktop.bottom};
					padding-left: ${padding_Desktop.left};
					margin-top: ${margin_Desktop.top};
					margin-right: ${margin_Desktop.right};
					margin-bottom: ${margin_Desktop.bottom};
					margin-left: ${margin_Desktop.left};
				}
			}
		`;
	};
	// ------------------- END WRAP DIV

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global styles={getDivWrapStyles__BgColor_Gradient()} />
			<Global styles={getDivWrapStyles__BackgroundImage()} />
			<Global styles={getDivWrapStyles__BgVideo()} />
			<Global styles={getDivWrapStyles__Overlay()} />
			<Global styles={getDivWrapStyles__BorderRadius()} />
			<Global styles={getDivWrapStyles__Border()} />
			<Global styles={getDivWrapStyles__BoxShadow()} />
			<Global styles={getDivWrapStyles__PaddingMargin()} />
			{/*  */}
		</>
	);
};

export default GlobalCss;
