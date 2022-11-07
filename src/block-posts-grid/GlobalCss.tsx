import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbBlockPostsGridAttrs } from "./attributes";

interface Props extends WcbBlockPostsGridAttrs {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcbPostCard`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				display: "grid",
				gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
				gap: "2rem",
				// [`@media (min-width: ${media_tablet})`]: {},
				// [`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	const getPostCardWrapStyles = (): CSSObject => {
		return {
			[`${POST_CARD_CLASS}`]: {
				display: "flex",
				flexDirection: "column",
				".wcbPostCard__featuredImage": {
					position: "relative",
					img: {
						display: "block",
						position: "relative",
						width: "100%",
					},
				},
			},
		};
	};

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			{/*  */}
			<Global styles={getPostCardWrapStyles()} />

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

export default GlobalCss;
