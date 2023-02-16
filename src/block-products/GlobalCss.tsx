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

		const { numberOfColumn, swithToScrollSnapX } = general_sortingAndFiltering;
		const {
			value_desktop: numberOfColumn_desktop,
			value_tablet: numberOfColumn_tablet,
			value_mobile: numberOfColumn_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: numberOfColumn,
		});

		const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
		const isSnapScrollTablet =
			isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
		const isSnapScrollMobile =
			isSnapScrollTablet || swithToScrollSnapX === "Mobile";
		return (
			<Global
				styles={{
					[LIST_CLASS]: {
						// ------ setting snap scroll x
						"> div": isSnapScrollMobile
							? {
									scrollSnapAlign: "start",
									flexShrink: 0,
									flexBasis: `calc((100% - (${
										Number(numberOfColumn_mobile) - 1
									} * ${colunmGap_mobile})) / ${Number(
										numberOfColumn_mobile
									)})`,
							  }
							: {},

						overflowX: isSnapScrollMobile ? "auto" : undefined,
						scrollSnapType: isSnapScrollMobile ? "x proximity" : undefined,
						display: isSnapScrollMobile ? "flex" : "grid",
						gridTemplateColumns: isSnapScrollMobile
							? undefined
							: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
						// ------ end setting snap scroll x
						//
						rowGap: rowGap_mobile,
						columnGap: colunmGap_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							rowGap: rowGap_tablet,
							columnGap: colunmGap_tablet,
							// ------ setting snap scroll x
							"> div": isSnapScrollTablet
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_tablet) - 1
										} * ${colunmGap_tablet})) / ${Number(
											numberOfColumn_tablet
										)})`,
								  }
								: {},

							overflowX: isSnapScrollTablet ? "auto" : undefined,
							scrollSnapType: isSnapScrollTablet ? "x proximity" : undefined,
							display: isSnapScrollTablet ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollTablet
								? undefined
								: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
						},
						[`@media (min-width: ${media_desktop})`]: {
							rowGap: rowGap_desktop,
							columnGap: colunmGap_desktop,
							// ------ setting snap scroll x
							"> div": isSnapScrollDesktop
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_desktop) - 1
										} * ${colunmGap_desktop})) / ${Number(
											numberOfColumn_desktop
										)})`,
								  }
								: {},

							overflowX: isSnapScrollDesktop ? "auto" : undefined,
							scrollSnapType: isSnapScrollDesktop ? "x proximity" : undefined,
							display: isSnapScrollDesktop ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollDesktop
								? undefined
								: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
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
