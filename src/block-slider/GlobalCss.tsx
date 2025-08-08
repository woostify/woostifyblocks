import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_boxshadow,
		style_verticalAlignment,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-slider__item`;
	const ITEM_INNER_CLASSNAME = `${ITEM_CLASSNAME} .wcb-slider__item-inner`;
	const SLICK_ARROW = `${WRAP_CLASSNAME} .slick-arrow`;
	const SLICK_DOTS = `${WRAP_CLASSNAME} .slick-dots`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			getStyleObjectFromResponsiveAttr({
				value: general_general.textAlignment,
				className: `${ITEM_CLASSNAME}`,
				prefix: "textAlign",
			}),
		];
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ITEM WRAP  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_backgroundAndBorder.border,
						className: ITEM_CLASSNAME,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: ITEM_CLASSNAME,
						value: general_general.colGap,
						prefix: "paddingLeft",
						prefix_2: "paddingRight",
					}),
					// getStyleObjectFromResponsiveAttr({
					// 	className: ITEM_CLASSNAME,
					// 	value: style_arrowAndDots.dotsMarginTop,
					// 	prefix: "marginBottom",
					// }),
					// getPaddingMarginStyles({
					// 	className: `${WRAP_CLASSNAME} .wcb-slider__item-inner`,
					// 	padding: style_dimension.padding,
					// }),
					getStyleBackground({
						className: `${WRAP_CLASSNAME} .wcb-slider__wrap-items`,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: ITEM_CLASSNAME,
					boxShadow: style_boxshadow,
				})}
			/>

			{/* SLICK ARROW & DOTS  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: SLICK_ARROW,
						isWithRadius: true,
					}),
					{
						[`${SLICK_ARROW} svg`]: {
							width: style_arrowAndDots.arrowSize,
							height: style_arrowAndDots.arrowSize,
							color: style_arrowAndDots.color,
						},
					},

					{
						[`${SLICK_DOTS} li`]: {
							"button:before": {
								color: style_arrowAndDots.color,
							},
						},
					},
				]}
			/>

			{/* VERTICAL ALIGNMENT  */}
			<Global
				styles={{
					[`${ITEM_INNER_CLASSNAME}`]: {
						paddingTop: style_verticalAlignment?.verticalAlignment === "top"
							? "-4rem"
							: style_verticalAlignment?.verticalAlignment === "middle"
							? "0px"
							: "4rem",
					},
				}}
			/>

			{/* ADVANCE  */}
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
