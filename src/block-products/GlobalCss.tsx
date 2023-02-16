import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,
		style_addToCardBtn,
		style_featuredImage,
		style_layout,
		style_pagiantion,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `#${uniqueId}.${uniqueId}`;
	const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {
				[`@media (min-width: ${media_tablet})`]: {},
				[`@media (min-width: ${media_desktop})`]: {},
			},
		};
	};

	const renderDivListWrapStyle = () => {
		const {
			value_desktop: rowGap_desktop,
			value_mobile: rowGap_mobile,
			value_tablet: rowGap_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_layout.rowGap,
		});
		const {
			value_desktop: colunmGap_desktop,
			value_mobile: colunmGap_mobile,
			value_tablet: colunmGap_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_layout.colunmGap,
		});

		const {
			value_desktop: numberOfColumn_desktop,
			value_tablet: numberOfColumn_tablet,
			value_mobile: numberOfColumn_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: general_sortingAndFiltering.numberOfColumn,
		});

		return (
			<Global
				styles={{
					[LIST_CLASS]: {
						display: "grid",
						gridTemplateColumns: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
						rowGap: rowGap_mobile,
						columnGap: colunmGap_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							rowGap: rowGap_tablet,
							columnGap: colunmGap_tablet,
							gridTemplateColumns: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
						},
						[`@media (min-width: ${media_desktop})`]: {
							rowGap: rowGap_desktop,
							columnGap: colunmGap_desktop,
							gridTemplateColumns: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
						},
					},
				}}
			/>
		);
	};

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			{renderDivListWrapStyle()}

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

export default React.memo(GlobalCss);
