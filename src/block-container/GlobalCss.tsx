import { Global, css } from "@emotion/react";
import React, { FC } from "react";
import {
	BorderMain4Side,
	BorderMainSingleSide,
} from "../components/controls/MyBorderControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { BlockWCBContainerAttrs } from "./attributes";

interface Props extends BlockWCBContainerAttrs {}

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
		wrapClassName,
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media__desktopMinWidth, media__tabletMinWidth } =
		DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-container__inner`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = () => {
		const { containerWidthType, customWidth, htmlTag, overflow, minHeight } =
			general_container;
		let cWidthDesktop = customWidth.Desktop;
		let cWidthTablet = customWidth.Tablet || cWidthDesktop;
		let cWidthMobile = customWidth.Mobile || cWidthTablet;
		if (containerWidthType !== "Custom") {
			cWidthDesktop = "";
			cWidthTablet = "";
			cWidthMobile = "";
		}
		//
		const minHeightDesktop = minHeight.Desktop;
		const minHeightTablet = minHeight.Tablet || minHeightDesktop;
		const minHeightMobile = minHeight.Mobile || minHeightTablet;
		return css`
			${WRAP_CLASSNAME} {
				position: relative;
				display: flex;
				overflow: ${overflow};
				max-width: ${containerWidthType === "Custom" ? cWidthMobile : ""};
				min-height: ${minHeightMobile};
				@media (min-width: ${media__tabletMinWidth}) {
					max-width: ${cWidthTablet};
					min-height: ${minHeightTablet};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					max-width: ${cWidthDesktop};
					min-height: ${minHeightDesktop};
				}
			}
		`;
	};

	const getDivWrapStylesBackgroundColorORGradient = () => {
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

	const getDivWrapStylesBackgroundImage = () => {
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

	const getDivWrapStylesBgVideo = () => {
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

	const getDivWrapStylesOverlay = () => {
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

	const getDivWrapStylesBorderRadius = () => {
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
	const getDivWrapStylesBorder = () => {
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

		const contentBoxWidthDesktop = contentBoxWidth.Desktop;
		const contentBoxWidthTablet =
			contentBoxWidth.Tablet || contentBoxWidthDesktop;
		const contentBoxWidthMobile =
			contentBoxWidth.Mobile || contentBoxWidthTablet;

		return css`
			${INNER_CLASSNAME} {
				max-width: ${contentBoxWidthMobile};
				@media (min-width: ${media__tabletMinWidth}) {
					max-width: ${contentBoxWidthTablet};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					max-width: ${contentBoxWidthDesktop};
				}
			}
		`;
	};

	const getInner__flexProperties = () => {
		const { alignItems, flexDirection, flexWrap, justifyContent } =
			general_flexProperties;

		const flexDirection_Desktop = flexDirection.Desktop;
		const flexDirection_Tablet = flexDirection.Tablet || flexDirection_Desktop;
		const flexDirection_Mobile = flexDirection.Mobile || flexDirection_Tablet;
		//
		const alignItems_Desktop = alignItems.Desktop;
		const alignItems_Tablet = alignItems.Tablet || alignItems_Desktop;
		const alignItems_Mobile = alignItems.Mobile || alignItems_Tablet;
		//
		const flexWrap_Desktop = flexWrap.Desktop;
		const flexWrap_Tablet = flexWrap.Tablet || alignItems_Desktop;
		const flexWrap_Mobile = flexWrap.Mobile || alignItems_Tablet;
		//
		const justifyContent_Desktop = justifyContent.Desktop;
		const justifyContent_Tablet = justifyContent.Tablet || alignItems_Desktop;
		const justifyContent_Mobile = justifyContent.Mobile || alignItems_Tablet;
		//

		return css`
			${INNER_CLASSNAME} {
				flex-direction: ${flexDirection_Mobile};
				align-items: ${alignItems_Mobile};
				flex-wrap: ${flexWrap_Mobile};
				justify-content: ${justifyContent_Mobile};
				@media (min-width: ${media__tabletMinWidth}) {
					flex-direction: ${flexDirection_Tablet};
					align-items: ${alignItems_Tablet};
					flex-wrap: ${flexWrap_Tablet};
					justify-content: ${justifyContent_Tablet};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					flex-direction: ${flexDirection_Desktop};
					align-items: ${alignItems_Desktop};
					flex-wrap: ${flexWrap_Desktop};
					justify-content: ${justifyContent_Desktop};
				}
			}
		`;
	};

	// ------------------------------ END INNER DIV

	const InnerStyles_desktop = css`
		${INNER_CLASSNAME} {
			@media (min-width: ${media__desktopMinWidth}) {
			}
		}
	`;
	const InnerStyles_tablet = css`
		${INNER_CLASSNAME} {
			@media (min-width: ${media__tabletMinWidth}) {
			}
		}
	`;

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global styles={getDivWrapStylesBackgroundImage()} />
			<Global styles={getDivWrapStylesBackgroundColorORGradient()} />
			<Global styles={getDivWrapStylesBgVideo()} />
			<Global styles={getDivWrapStylesOverlay()} />
			<Global styles={getDivWrapStylesBorderRadius()} />
			<Global styles={getDivWrapStylesBorder()} />
			{/*  */}
			<Global styles={getDivInnerStyles()} />
			<Global styles={getInner__contentCustomWidth()} />
			<Global styles={getInner__flexProperties()} />

			{/*  */}
			<Global styles={InnerStyles_tablet} />
			<Global styles={InnerStyles_desktop} />
		</>
	);
};

export default GlobalCss;
