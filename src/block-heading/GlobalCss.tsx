import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getColorAndGradientStyles from "../utils/getColorAndGradientStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbBlockHeadingAttrs } from "./attributes";

interface Props extends WcbBlockHeadingAttrs {}

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
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__heading`;
	const SUB_HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__subHeading`;
	const SEPARATOR_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__separator`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const { textAlignment } = general_content;

		let textAlign_Desktop = textAlignment.Desktop;
		let textAlign_Tablet = textAlignment.Tablet || textAlign_Desktop;
		let textAlign_Mobile = textAlignment.Mobile || textAlign_Tablet;

		return {
			[`${WRAP_CLASSNAME}`]: {
				textAlign: textAlign_Mobile,

				[`@media (min-width: ${media_tablet})`]: {
					textAlign: textAlign_Tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					textAlign: textAlign_Desktop,
				},
			},
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
		const { bgColor, padding, textColor, typography } = styles_highlight;

		let padding_Desktop = padding.Desktop;
		let padding_Tablet = padding.Tablet || padding_Desktop;
		let padding_Mobile = padding.Mobile || padding_Tablet;
		//
		return {
			[`${WRAP_CLASSNAME} mark`]: {
				color: textColor,
				backgroundColor: bgColor,
				padding: `${padding_Mobile.top} ${padding_Mobile.right} ${padding_Mobile.bottom} ${padding_Mobile.left}`,
				[`@media (min-width: ${media_tablet})`]: {
					padding: `${padding_Tablet.top} ${padding_Tablet.right} ${padding_Tablet.bottom} ${padding_Tablet.left}`,
				},
				[`@media (min-width: ${media_desktop})`]: {
					padding: `${padding_Desktop.top} ${padding_Desktop.right} ${padding_Desktop.bottom} ${padding_Desktop.left}`,
				},
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
		});
	};
	const getDivWrapStyles__Highlight_borderRadius = () => {
		const { border } = styles_highlight;

		return getBorderRadiusStyles({
			radius: border.radius,
			className: `${WRAP_CLASSNAME} mark`,
		});
	};

	// SEPARATOR STYLES
	const getDivWrapStyles__Separator_width = (): CSSObject => {
		const { width } = styles_separator;

		let width_Desktop = width.Desktop;
		let width_Tablet = width.Tablet || width_Desktop;
		let width_Mobile = width.Mobile || width_Tablet;
		//
		return {
			[`${SEPARATOR_CLASSNAME}`]: {
				width: width_Mobile,
				[`@media (min-width: ${media_tablet})`]: {
					width: width_Tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					width: width_Desktop,
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

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global styles={getDivWrapStyles__background()} />
			<Global styles={getDivWrapStyles__Link()} />
			{/*  */}
			<Global styles={getDivWrapStyles__Highlight()} />
			<Global styles={getDivWrapStyles__Highlight_typography()} />
			<Global styles={getDivWrapStyles__Highlight_border()} />
			<Global styles={getDivWrapStyles__Highlight_borderRadius()} />
			<Global styles={getDivWrapStyles__PaddingMargin()} />
			{/*  */}
			<Global styles={getDivWrapStyles__Separator_width()} />
			<Global styles={getDivWrapStyles__Separator()} />
			{/*  */}
			<Global styles={getInner__Heading_typography()} />
			<Global styles={getInner__Heading_color()} />
			<Global styles={getInner__Heading__textShadow()} />
			{/*  */}
			<Global styles={getInner__subHeading_typography()} />
			<Global styles={getInner__subHeading_color()} />
			{/*  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
		</>
	);
};

export default GlobalCss;
