import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

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
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-faq__inner`;
	const FAQ_CHILD_WRAP = `${WRAP_CLASSNAME} .wcb-faq-child__wrap`;
	const FAQ_CHILD_QUESTION = `${WRAP_CLASSNAME} .wcb-faq-child__question`;
	const FAQ_CHILD_QUESTION_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__question-text`;
	const FAQ_CHILD_ANSWER = `${WRAP_CLASSNAME} .wcb-faq-child__answer`;
	const FAQ_CHILD_ANSWER_TEXT = `${WRAP_CLASSNAME} .wcb-faq-child__answer-text`;

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

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* INNER  */}
			{general_general.layout === "grid" && (
				<Global
					styles={[
						inner_getGridCol(),
						{
							[INNER_CLASSNAME]: {
								textAlign: general_general.textAlignment,
							},
							".wcb-faq-child__question": {
								display: "block",
							},
						},
					]}
				/>
			)}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "grid",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
