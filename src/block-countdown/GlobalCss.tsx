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
		general_layout,
		style_dimension,
		style_label,
		style_background,
		style_number,
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
	const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__content`;
	const LABEL_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__label`;
	const NUMBER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__number`;
	const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-countdown__box`;

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

	// ------------------- LABEL
	const getInner__Label_typography = () => {
		const { typography } = style_label;

		return getTypographyStyles({
			typography,
			className: LABEL_CLASSNAME,
		});
	};

	// ------------------- NUMBER
	const getInner__Number_typography = () => {
		const { typography } = style_number;

		return getTypographyStyles({
			typography,
			className: NUMBER_CLASSNAME,
		});
	};

	const {
		value_Desktop: textAlignment_Desktop,
		value_Tablet: textAlignment_tablet,
		value_Mobile: textAlignment_mobile,
	} = getValueFromAttrsResponsives(general_layout.textAlignment);

	const {
		value_Desktop: flexDirection_Desktop,
		value_Tablet: flexDirection_tablet,
		value_Mobile: flexDirection_mobile,
	} = getValueFromAttrsResponsives(general_layout.flexDirection);

	// FLEX COL
	let ALIGN_ITEMS: HasResponsive<CSSProperties["justifyContent"]> = {
		Desktop:
			textAlignment_Desktop === "left"
				? "start"
				: textAlignment_Desktop === "right"
					? "end"
					: "center",
		Tablet:
			textAlignment_tablet === "left"
				? "start"
				: textAlignment_tablet === "right"
					? "end"
					: "center",
		Mobile:
			textAlignment_mobile === "left"
				? "start"
				: textAlignment_mobile === "right"
					? "end"
					: "center",
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
			{/* INNER  */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: CONTENT_CLASSNAME,
						value: general_layout.textAlignment,
						prefix: "textAlign",
					}),

					getStyleObjectFromResponsiveAttr({
						className: CONTENT_CLASSNAME,
						value: ALIGN_ITEMS,
						prefix: "justifyContent",
					}),

					getStyleObjectFromResponsiveAttr({
						className: CONTENT_CLASSNAME,
						value: general_layout.flexDirection,
						prefix: "flexDirection",
					}),

					getStyleObjectFromResponsiveAttr({
						className: BOX_CLASSNAME + '+ div',
						value: style_dimension.gap_boxes,
						prefix: "marginLeft",
					}),

					getStyleObjectFromResponsiveAttr({
						className: BOX_CLASSNAME,
						value: style_dimension.width_box,
						prefix: "width",
					}),

					getBackgroundColorGradientStyles({
						className: BOX_CLASSNAME,
						background: style_background.normal,
						backgroundHover: style_background.hover,
					})

				]}
			/>

			{ general_preset.preset != 'wcb-countdown-5' && (
				<Global
					styles={
						getStyleObjectFromResponsiveAttr({
							className: BOX_CLASSNAME,
							value: style_dimension.width_box,
							prefix: "height",
						})
					}
				/>
			)}

			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: WRAP_CLASSNAME,
					value: general_layout.contentWidth,
					prefix: "width",
				})}
			/>
			{/* Flex css */}
			<Global
				styles={getFlexPropertiesStyles({
					flexProperties: general_layout.flexDirection,
					className: CONTENT_CLASSNAME,
				})}
			/>

			{/* LABEL CSS */}
			<Global styles={[
				getInner__Label_typography(),
				{
					[LABEL_CLASSNAME]: {
						color: style_label.textColor,
					},
				},
			]} />

			{/* NUMBER CSS */}
			<Global styles={[
				getInner__Number_typography(),
				{
					[NUMBER_CLASSNAME]: {
						color: style_number.textColor,
					},
				},
			]} />
			<Global
				styles={getStyleObjectFromResponsiveAttr({
					className: NUMBER_CLASSNAME,
					value: style_dimension.gap_number,
					prefix: "marginBottom",
				})}
			/>
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
