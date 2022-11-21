import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrs } from "./attributes";

interface Props extends WcbAttrs {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
		testimonials,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-testimonials__item-name`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-testimonials__item-content`;
	const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-testimonials__item-company`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ITEM NAME  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_name.typography,
						className: ITEM_NAME,
					}),
					getSingleDimensionStyles({
						value: style_name.marginBottom,
						className: ITEM_NAME,
						prefix: "marginBottom",
					}),
					{
						[ITEM_NAME]: {
							color: style_name.textColor,
						},
					},
				]}
			/>

			{/* ITEM CONTENT  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_content.typography,
						className: ITEM_CONTENT,
					}),
					getSingleDimensionStyles({
						value: style_content.marginBottom,
						className: ITEM_CONTENT,
						prefix: "marginBottom",
					}),
					{
						[ITEM_CONTENT]: {
							color: style_content.textColor,
						},
					},
				]}
			/>

			{/* ITEM COMPANY  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_company.typography,
						className: ITEM_COMPANY,
					}),
					{
						[ITEM_COMPANY]: {
							color: style_company.textColor,
						},
					},
				]}
			/>

			{/* ADVANCE  */}
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
