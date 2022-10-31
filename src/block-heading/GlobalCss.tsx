import { Global, css, Interpolation, Theme, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import {
	BorderMain4Side,
	BorderMainSingleSide,
} from "../components/controls/MyBorderControl/types";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
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
	// const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__inner`;
	const HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__heading`;
	const SUB_HEADING_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__subHeading`;
	const SEPARATOR_CLASSNAME = `${WRAP_CLASSNAME} .wcb-heading__separator`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const {
			headingTag,
			showHeading,
			showSeparator,
			showSubHeading,
			textAlignment,
		} = general_content;

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
			[`${WRAP_CLASSNAME} .wcb-heading__separator`]: {
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
			className: `${WRAP_CLASSNAME} .wcb-heading__separator`,
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
		const flexWrap_Tablet = flexWrap.Tablet || flexWrap_Desktop;
		const flexWrap_Mobile = flexWrap.Mobile || flexWrap_Tablet;
		//
		const justifyContent_Desktop = justifyContent.Desktop;
		const justifyContent_Tablet =
			justifyContent.Tablet || justifyContent_Desktop;
		const justifyContent_Mobile =
			justifyContent.Mobile || justifyContent_Tablet;
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

	const getInner__flexGaps = () => {
		const { colunmGap, rowGap } = styles_dimensions;
		//
		const colunmGap_Desktop = colunmGap.Desktop;
		const colunmGap_Tablet = colunmGap.Tablet || colunmGap_Desktop;
		const colunmGap_Mobile = colunmGap.Mobile || colunmGap_Tablet;
		//
		const rowGap_Desktop = rowGap.Desktop;
		const rowGap_Tablet = rowGap.Tablet || rowGap_Desktop;
		const rowGap_Mobile = rowGap.Mobile || rowGap_Tablet;
		//

		return css`
			${INNER_CLASSNAME} {
				column-gap: ${colunmGap_Mobile};
				row-gap: ${rowGap_Mobile};
				@media (min-width: ${media__tabletMinWidth}) {
					column-gap: ${colunmGap_Tablet};
					row-gap: ${rowGap_Tablet};
				}
				@media (min-width: ${media__desktopMinWidth}) {
					column-gap: ${colunmGap_Desktop};
					row-gap: ${rowGap_Desktop};
				}
			}
		`;
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
			{/* <Global styles={getDivWrapStyles__BgColor_Gradient()} />
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
			/> */}
			{/*  */}
			{/* <Global styles={getDivInnerStyles()} />
			<Global styles={getInner__flexProperties()} />
			<Global styles={getInner__flexGaps()} /> */}
		</>
	);
};

export default GlobalCss;
