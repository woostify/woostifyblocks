import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getBorderStyles from "../utils/getBorderStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-faq__inner`;
	const FAQ_CHILD_WRAP = `${WRAP_CLASSNAME} .wcb-faq-child__wrap`;
	const FAQ_CHILD_QUESTION = `${WRAP_CLASSNAME} .wcb-faq-child__question`;
	const FAQ_CHILD_QUESTION_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__question-text`;
	const FAQ_CHILD_ANSWER = `${WRAP_CLASSNAME} .wcb-faq-child__answer`;
	const FAQ_CHILD_ANSWER_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__answer-text`;
	const FAQ_CHILD_ICON = `${WRAP_CLASSNAME} .wcb-faq-child__icon`;
	const FAQ_CHILD_SEPARATOR = `${WRAP_CLASSNAME} .wcb-faq-child__separator`;

	//

	let {
		value_Desktop: iconSize_desktop,
		value_Tablet: iconSize_tablet,
		value_Mobile: iconSize_mobile,
	} = getValueFromAttrsResponsives(style_icon.size);

	const IconSizeConverted: HasResponsive<string> = {
		Desktop: iconSize_desktop + "px",
		Tablet: iconSize_tablet + "px",
		Mobile: iconSize_mobile + "px",
	};

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	const inner_getGridCol = (): CSSObject => {
		const { value_Desktop, value_Tablet, value_Mobile } =
			getValueFromAttrsResponsives(general_general.columns);

		return {
			[`${INNER_CLASSNAME}`]: {
				gridTemplateColumns: `repeat(${value_Mobile}, minmax(0, 1fr))`,
				[`@media (min-width: ${media_tablet})`]: {
					gridTemplateColumns: `repeat(${value_Tablet}, minmax(0, 1fr))`,
				},
				[`@media (min-width: ${media_desktop})`]: {
					gridTemplateColumns: `repeat(${value_Desktop}, minmax(0, 1fr))`,
				},
			},
		};
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{/* ------- INNER -------   */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: style_container.colunmGap,
						prefix: "columnGap",
					}),
					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: style_container.rowGap,
						prefix: "rowGap",
					}),
					{
						[INNER_CLASSNAME]: {
							textAlign: general_general.textAlignment,
						},
					},
				]}
			/>
			{general_general.layout === "grid" && (
				<Global
					styles={[
						inner_getGridCol(),
						{
							[FAQ_CHILD_QUESTION]: {
								display: "block",
							},
						},
					]}
				/>
			)}

			{/* ------- FAQ CHILD -------  */}
			<Global
				styles={[
					getBackgroundColorGradientStyles({
						className: FAQ_CHILD_WRAP,
						background: style_container.background,
					}),
					getBorderStyles({
						border: style_container.border,
						className: FAQ_CHILD_WRAP,
						isWithRadius: true,
					}),
					getBorderStyles({
						border: style_container.border,
						className: FAQ_CHILD_SEPARATOR,
						isWithRadius: true,
					}),
					{
						[FAQ_CHILD_WRAP]: {
							height:
								general_general.layout === "grid" &&
								!style_container.equalHeight
									? "fit-content"
									: undefined,
						},
					},
				]}
			/>

			{/* ------ QUESTION ---------  */}
			<Global
				styles={[
					getTypographyStyles({
						className: FAQ_CHILD_QUESTION,
						typography: style_question.typography,
					}),
					getPaddingMarginStyles({
						className: FAQ_CHILD_QUESTION,
						padding: style_question.padding,
					}),
					getStyleObjectFromResponsiveAttr({
						className: FAQ_CHILD_QUESTION,
						value: style_icon.colGap,
						prefix: "gap",
					}),
					{
						[FAQ_CHILD_QUESTION]: {
							color: style_question.color,
							backgroundColor: style_question.backgroundColor,
							":hover, :focus, :active": {
								color: style_question.colorHover,
								backgroundColor: style_question.backgroundColorHover,
							},
						},
						[`${WRAP_CLASSNAME} .wcb-faq-child__wrap.active .wcb-faq-child__question`]:
							{
								color: style_question.colorHover,
								backgroundColor: style_question.backgroundColorHover,
							},
					},
				]}
			/>

			{/* ------ ICON ---------  */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: `${FAQ_CHILD_ICON}, ${FAQ_CHILD_ICON}:before, ${FAQ_CHILD_ICON} svg`,
						value: IconSizeConverted,
						prefix: "fontSize",
						prefix_2: "height",
						prefix_3: "width",
					}),
					{
						[FAQ_CHILD_ICON]: {
							color: style_icon.color,
						},
						[`${WRAP_CLASSNAME} .wcb-faq-child__wrap.active`]: {
							".wcb-faq-child__icon": {
								color: style_icon.activeColor,
							},
						},
					},
				]}
			/>

			{/* ------ ANSWER ---------  */}
			<Global
				styles={[
					getTypographyStyles({
						className: FAQ_CHILD_ANSWER,
						typography: style_answer.typography,
					}),
					getPaddingMarginStyles({
						className: FAQ_CHILD_ANSWER,
						padding: style_answer.padding,
					}),
					{
						[FAQ_CHILD_ANSWER]: {
							color: style_answer.color,
							backgroundColor: style_answer.backgroundColor,
							// display: general_general.collapseOtherItems ? "none" : "block",
						},
					},
				]}
			/>

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
