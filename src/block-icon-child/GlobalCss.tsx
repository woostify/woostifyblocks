import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import { WcbAttrs } from "./attributes";

interface Props extends WcbAttrsForSave {
	attributes: WcbAttrs;
	clientId: string;
}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_layout,
		style_desination,
		style_Icon,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_dimension,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}][data-block-type="icon-item"]`;
	const ICON_CLASS = `${WRAP_CLASSNAME} .wcb-icon-list__icon`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			{
				[`${WRAP_CLASSNAME}`]: {
					".wcb-icon-list__icon-wrap, .wcb-icon-list__content": {
						alignSelf:
							general_icon.verticalAlignment === "middle"
								? "center"
								: undefined,
					},

					".wcb-icon-list__icon-wrap": {
						order: general_icon.iconPosition === "leftOfTitle" ? "0" : "2",
					},

					".wcb-icon-list__content-title-wrap": {
						display:
							general_icon.iconPosition === "leftOfTitle" ||
							general_icon.iconPosition === "rightOfTitle"
								? "flex"
								: "block",
					},
				},
			},
		];
	};

	// ICON CSS
	const renderIconCss = () => {
		const { color, hoverColor, iconSize, dimensions, border } = style_Icon;

		return `
			${ICON_CLASS} {
				color: ${color};
				font-size: ${iconSize.Desktop};
				padding: ${dimensions.padding.Desktop.top} ${dimensions.padding.Desktop.right} ${dimensions.padding.Desktop.bottom} ${dimensions.padding.Desktop.left};
				margin: ${dimensions.margin.Desktop.top} ${dimensions.margin.Desktop.right} ${dimensions.margin.Desktop.bottom} ${dimensions.margin.Desktop.left};
				border-radius: ${border.radius.Desktop};
			}
			${ICON_CLASS}:hover {
				color: ${hoverColor || color};
			}

			@media (max-width: 768px) {
				${ICON_CLASS} {
					font-size: ${iconSize.Tablet};
					border-radius: ${border.radius.Tablet};
				}
			}

			@media (max-width: 576px) {
				${ICON_CLASS} {
					font-size: ${iconSize.Mobile};
					border-radius: ${border.radius.Mobile};
				}
			}
		`;
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global
				styles={getPaddingMarginStyles({
					className: WRAP_CLASSNAME,
					margin: style_dimension.margin,
					padding: style_dimension.padding,
				})}
			/>

			{/* --------- ICON --------- */}
			{general_icon.enableIcon ? (
				<Global
					styles={[
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon-wrap`,
							margin: style_Icon.dimensions.margin,
						}),
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							padding: style_Icon.dimensions.padding,
						}),
						getBorderStyles({
							border: style_Icon.border,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							isWithRadius: true,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-full`,
							value: style_Icon.iconSize,
							prefix: "width",
							prefix_2: "fontSize",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-full`]: {
								color: style_Icon.color,
								":hover": {
									color: style_Icon.hoverColor,
								},
							},
						},
					]}
				/>
			) : null}

			{/* --------- TITLE --------- */}
			{general_layout.enableTitle ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_title.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
							value: style_title.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__heading`]: {
								color: style_title.textColor,
							},
							[`${WRAP_CLASSNAME} .wcb-icon-list__heading:hover`]: {
								color: style_title.textColorHover,
							},
						},
					]}
				/>
			) : null}


			{/* --------- DESIGNATION --------- */}
			{general_layout.enablePrefix ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_desination.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
							value: style_desination.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__designation`]: {
								color: style_desination.textColor,
							},
						},
					]}
				/>
			) : null}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_motionEffect,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>

			<style>{renderIconCss()}</style>
		</>
	);
};

export default React.memo(GlobalCss);
