import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getColorAndGradientStyles from "../utils/getColorAndGradientStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		general_content,
		styles_dimensions,
		styles_background,
		styles_heading,
		styles_highlight,
		styles_link,
		styles_separator,
		styles_subHeading,
		advance_responsiveCondition,
		advance_zIndex,
		styles_border,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__heading`;
	const SUB_HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__subHeading`;
	const SEPARATOR_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__separator`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const { textAlignment } = general_content;
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives<React.CSSProperties["textAlign"]>(
				textAlignment
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
	const getDivWrapStyles__Link = (): CSSObject => {
		const { linkColor } = styles_link;

		return {
			[`${WRAP_CLASSNAME} a`]: {
				color: linkColor.Normal.color,
				":hover": {
					color: linkColor.Hover.color,
				},
			},
		};
	};
	const getDivWrapStyles__background = () => {
		const { background } = styles_background;
		return getBackgroundColorGradientStyles({
			background,
			className: WRAP_CLASSNAME,
		});
	};
	const getDivWrapStyles__PaddingMargin = () => {
		const { dimension } = styles_dimensions;
		const { margin, padding } = dimension;
		return getPaddingMarginStyles({
			margin,
			padding,
			className: WRAP_CLASSNAME,
		});
	};
	// HIGHLIGHT STYLES
	const getDivWrapStyles__Highlight = (): CSSObject => {
		const { bgColor, padding, textColor } = styles_highlight;
		const {
			value_Desktop: padding_Desktop,
			value_Mobile: padding_Mobile,
			value_Tablet: padding_Tablet,
		} = getValueFromAttrsResponsives<DimensionSettings>(padding);

		//
		const {
			mobile_v: padding_Mobile_new,
			tablet_v: padding_Tablet_new,
			desktop_v: padding_Desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: `${padding_Mobile?.top} ${padding_Mobile?.right} ${padding_Mobile?.bottom} ${padding_Mobile?.left}`,
			tablet_v: `${padding_Tablet?.top} ${padding_Tablet?.right} ${padding_Tablet?.bottom} ${padding_Tablet?.left}`,
			desktop_v: `${padding_Desktop?.top} ${padding_Desktop?.right} ${padding_Desktop?.bottom} ${padding_Desktop?.left}`,
		});
		//
		return {
			[`${WRAP_CLASSNAME} mark`]: {
				color: textColor,
				backgroundColor: bgColor,
				padding: padding_Mobile_new,
				[`@media (min-width: ${media_tablet})`]: padding_Tablet_new
					? {
							padding: padding_Tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: padding_Desktop_new
					? {
							padding: padding_Desktop_new,
					  }
					: undefined,
			},
		};
	};
	const getDivWrapStyles__Highlight_typography = () => {
		const { typography } = styles_highlight;

		return getTypographyStyles({
			typography,
			className: `${WRAP_CLASSNAME} mark`,
		});
	};
	const getDivWrapStyles__Highlight_border = () => {
		const { border } = styles_highlight;

		return getBorderStyles({
			border,
			className: `${WRAP_CLASSNAME} mark`,
			isWithRadius: true,
		});
	};

	// SEPARATOR STYLES
	const getDivWrapStyles__Separator_width = (): CSSObject => {
		const { width } = styles_separator;
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives<string>(width);
		//
		return {
			[`${SEPARATOR_CLASSNAME}`]: {
				width: value_Mobile,
				[`@media (min-width: ${media_tablet})`]: {
					width: value_Tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					width: value_Desktop,
				},
			},
		};
	};
	const getDivWrapStyles__Separator = () => {
		const { border } = styles_separator;

		return getBorderStyles({
			border: {
				mainSettings: border,
			},
			className: `${SEPARATOR_CLASSNAME}`,
		});
	};

	// ------------------- HEADING STYLE
	const getInner__Heading_typography = () => {
		const { typography } = styles_heading;

		return getTypographyStyles({
			typography,
			className: HEADING_CLASSNAME,
		});
	};
	const getInner__Heading_color = () => {
		const { textColor } = styles_heading;
		return getColorAndGradientStyles({
			textColor,
			className: HEADING_CLASSNAME,
		});
	};
	const getInner__Heading__textShadow = (): CSSObject => {
		const { textShadow } = styles_heading;
		const { blur, color, horizontal, vertical } = textShadow;
		return {
			[`${HEADING_CLASSNAME}`]: {
				textShadow: `${horizontal}px ${vertical}px ${blur}px ${color}`,
			},
		};
	};
	// ------------------- SUB-HEADING STYLE
	const getInner__subHeading_typography = () => {
		const { typography } = styles_subHeading;
		return getTypographyStyles({
			typography,
			className: SUB_HEADING_CLASSNAME,
		});
	};
	const getInner__subHeading_color = () => {
		const { textColor } = styles_subHeading;
		return getColorAndGradientStyles({
			textColor,
			className: SUB_HEADING_CLASSNAME,
		});
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global styles={getDivWrapStyles__background()} />
			<Global styles={getDivWrapStyles__Link()} />
			<Global
				styles={getBorderStyles({
					className: WRAP_CLASSNAME,
					border: styles_border,
					isWithRadius: true,
				})}
			/>
			{/*  */}
			<Global styles={getDivWrapStyles__Highlight()} />
			<Global styles={getDivWrapStyles__Highlight_typography()} />
			<Global styles={getDivWrapStyles__Highlight_border()} />
			<Global styles={getDivWrapStyles__PaddingMargin()} />
			{/*  */}
			<Global styles={getDivWrapStyles__Separator_width()} />
			<Global styles={getDivWrapStyles__Separator()} />
			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: `${WRAP_CLASSNAME} .wcb-heading__separator-wrap`,
					value: styles_separator.marginBottom,
					prefix: "marginBottom",
				})}
			/>
			{/*  */}
			<Global styles={getInner__Heading_typography()} />
			<Global styles={getInner__Heading_color()} />
			<Global styles={getInner__Heading__textShadow()} />
			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: HEADING_CLASSNAME,
					value: styles_heading.marginBottom,
					prefix: "marginBottom",
				})}
			/>

			{/*  */}
			<Global styles={getInner__subHeading_typography()} />
			<Global styles={getInner__subHeading_color()} />
			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: SUB_HEADING_CLASSNAME,
					value: styles_subHeading.marginBottom,
					prefix: "marginBottom",
				})}
			/>

			{/*  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
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
