import { Global, css, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getFlexPropertiesStyles from "../utils/getFlexPropertiesStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleBackground from "../utils/getStyleBackground";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { getAdvanveDivWrapStyles } from "./getAdvanveStyles";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

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
	const getDivWrapStyles = (): CSSObject[] => {
		const { containerWidthType, customWidth, overflow, minHeight } =
			general_container;

		let {
			value_Desktop: cWidthDesktop,
			value_Tablet: cWidthTablet,
			value_Mobile: cWidthMobile,
		} = getValueFromAttrsResponsives(customWidth);

		if (containerWidthType !== "Custom") {
			cWidthDesktop = undefined;
			cWidthTablet = undefined;
			cWidthMobile = undefined;
		}

		//
		const {
			value_Desktop: minHeightDesktop,
			value_Tablet: minHeightTablet,
			value_Mobile: minHeightMobile,
		} = getValueFromAttrsResponsives(minHeight);

		return [
			{
				[WRAP_CLASSNAME]: {
					color: styles_color,
					overflow: overflow,
					//
					maxWidth: cWidthMobile,
					minHeight: minHeightMobile,
					"&.is_wcb_container_child": {
						// width: "unset",
						flexBasis: `calc(${cWidthMobile} - (var(--wcb-gap-x)));`,
					},
					[`@media (min-width: ${media_tablet})`]: {
						maxWidth: cWidthTablet,
						minHeight: minHeightTablet,
						"&.is_wcb_container_child": {
							// width: "unset",
							flexBasis: `calc(${cWidthTablet} - (var(--wcb-gap-x)));`,
						},
					},
					[`@media (min-width: ${media_desktop})`]: {
						maxWidth: cWidthDesktop,
						minHeight: minHeightDesktop,
						"&.is_wcb_container_child": {
							// width: "unset",
							flexBasis: `calc(${cWidthDesktop} - (var(--wcb-gap-x)));`,
						},
					},
				},
			},
		];
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
			}
		`;
	};

	const getInner__contentCustomWidth = (): CSSObject => {
		let { containerWidthType, contentWidthType, contentBoxWidth } =
			general_container;
		if (containerWidthType !== "Full Width" || contentWidthType !== "Boxed") {
			return {};
		}

		if (contentBoxWidth.Desktop === "") {
			contentBoxWidth = {
				Desktop: DEMO_WCB_GLOBAL_VARIABLES.defaultContentWidth || "",
			};
		}

		const {
			value_Desktop: contentBoxWidthDesktop,
			value_Tablet: contentBoxWidthTablet,
			value_Mobile: contentBoxWidthMobile,
		} = getValueFromAttrsResponsives(contentBoxWidth);

		return {
			[INNER_CLASSNAME]: {
				maxWidth: contentBoxWidthMobile,
				"> .wcb-container__wrap": {},
				[`@media (min-width: ${media_tablet})`]: {
					maxWidth: contentBoxWidthTablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					maxWidth: contentBoxWidthDesktop,
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
			{/*  */}
			{/* <Global styles={getDivInnerStyles()} /> */}
			<Global styles={getInner__contentCustomWidth()} />
			<Global styles={getInner__flexProperties()} />
			{/*  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "flex",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
