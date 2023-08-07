import { Global, CSSObject } from "@emotion/react";
import React, { FC, CSSProperties } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrs } from "./attributes";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import { MyPosition } from "../types";

interface Props extends WcbAttrs {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_action,
		general_general,
		general_gg_recaptcha,
		general_submit_button,
		style_checkbox_radio_toggle,
		style_input,
		style_label,
		style_messages,
		style_spacing,
		style_submit_button,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__box`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__inner`;
	const INPUT_CLASSNAME = `${WRAP_CLASSNAME} [type="text"], ${WRAP_CLASSNAME} [type="email"], ${WRAP_CLASSNAME} [type="url"], ${WRAP_CLASSNAME} [type="password"], ${WRAP_CLASSNAME} [type="number"], ${WRAP_CLASSNAME} [type="date"], ${WRAP_CLASSNAME} [type="datetime-local"], ${WRAP_CLASSNAME} [type="month"], ${WRAP_CLASSNAME} [type="search"], ${WRAP_CLASSNAME} [type="tel"], ${WRAP_CLASSNAME} [type="time"], ${WRAP_CLASSNAME} [type="week"], ${WRAP_CLASSNAME} [multiple], ${WRAP_CLASSNAME} select, ${WRAP_CLASSNAME} textarea`;
	const CHECKBOX_RADIO_CLASSNAME = `${WRAP_CLASSNAME} .wcb-radio__option, ${WRAP_CLASSNAME} .wcb-checkbox__option`;
	const CHECKBOX_RADIO_INPUT_CLASSNAME = `${WRAP_CLASSNAME} input[type="checkbox"], ${WRAP_CLASSNAME} input[type="radio"]`;
	const TOGGLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-toggle__switch`;
	const SUBMIT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__btn-submit`;
	const SUCCESS_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__successMessageText`;
	const ERROR_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__errorMessageText`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		const { textAlignment } = general_general;
		const { position, textAlignment: btnAlignment } = general_submit_button;
		const {
			value_desktop: textAlignment_desktop,
			value_tablet: textAlignment_tablet,
			value_mobile: textAlignment_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: textAlignment,
		});
		const {
			value_desktop: btnAlignment_desktop,
			value_tablet: btnAlignment_tablet,
			value_mobile: btnAlignment_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: btnAlignment,
		});

		const boxflexDirectionType = (
			position?: MyPosition | null
		): CSSProperties["flexDirection"] => {
			if (position === "right") return "row";
			if (position === "left") return "row-reverse";
			if (position === "top") return "column-reverse";
			return "column";
		};

		const {
			value_desktop: position_desktop,
			value_tablet: position_tablet,
			value_mobile: position_mobile,
		} = getCssProperyHasResponsive({
			cssProperty: position,
		});
		const isFlexRow = (position?: MyPosition | null): boolean => {
			if (position === "right" || position === "left") return true;
			return false;
		};

		return {
			[`${WRAP_CLASSNAME}`]: {
				textAlign: textAlignment_mobile,
				".wcb-form__btn-submit-wrap": !isFlexRow(position_mobile)
					? { justifyContent: btnAlignment_mobile }
					: { alignItems: btnAlignment_mobile },

				[`@media (min-width: ${media_tablet})`]: {
					textAlign: textAlignment_tablet,
					".wcb-form__btn-submit-wrap": !isFlexRow(position_tablet)
						? { justifyContent: btnAlignment_tablet }
						: { alignItems: btnAlignment_tablet },
				},
				[`@media (min-width: ${media_desktop})`]: {
					textAlign: textAlignment_desktop,
					".wcb-form__btn-submit-wrap": !isFlexRow(position_desktop)
						? { justifyContent: btnAlignment_desktop }
						: { alignItems: btnAlignment_desktop },
				},
			},
			[`${BOX_CLASSNAME}`]: {
				flexDirection: boxflexDirectionType(position_mobile),

				[`@media (min-width: ${media_tablet})`]: {
					flexDirection: boxflexDirectionType(position_tablet),
				},
				[`@media (min-width: ${media_desktop})`]: {
					flexDirection: boxflexDirectionType(position_desktop),
				},
			},
		};
	};

	const renderCheckboxRadioSize = () => {
		const {
			value_desktop: size_desktop,
			value_mobile: size_mobile,
			value_tablet: size_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_checkbox_radio_toggle.checkboxRadioSize,
		});
		return (
			<Global
				styles={{
					[`${CHECKBOX_RADIO_INPUT_CLASSNAME} `]: {
						width: size_mobile,
						height: size_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							width: size_tablet,
							height: size_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							width: size_desktop,
							height: size_desktop,
						},
					},
				}}
			/>
		);
	};
	const renderToggleSize = () => {
		const {
			value_desktop: size_desktop,
			value_mobile: size_mobile,
			value_tablet: size_tablet,
		} = getCssProperyHasResponsive<number>({
			cssProperty: style_checkbox_radio_toggle.toggleSize,
		});

		const mobileSize = size_mobile + "rem";
		const tabletSize = size_tablet + "rem";
		const desktopSize = size_desktop + "rem";
		return (
			<Global
				styles={{
					[`${TOGGLE_CLASSNAME}`]: {
						".wcb-toggle__slider::before": {
							width: mobileSize,
							height: mobileSize,
						},
						"input:checked + .wcb-toggle__slider:before": {
							transform: `translateX(${mobileSize})`,
						},
						height: `calc(${mobileSize} + 8px)`,
						width: `calc((${mobileSize} * 2) + 8px)`,

						[`@media (min-width: ${media_tablet})`]: {
							".wcb-toggle__slider::before": {
								width: tabletSize,
								height: tabletSize,
							},
							"input:checked + .wcb-toggle__slider:before": {
								transform: `translateX(${tabletSize})`,
							},
							height: `calc(${tabletSize} + 8px)`,
							width: `calc((${tabletSize} * 2) + 8px)`,
						},
						[`@media (min-width: ${media_desktop})`]: {
							".wcb-toggle__slider::before": {
								width: desktopSize,
								height: desktopSize,
							},
							"input:checked + .wcb-toggle__slider:before": {
								transform: `translateX(${desktopSize})`,
							},
							height: `calc(${desktopSize} + 8px)`,
							width: `calc((${desktopSize} * 2) + 8px)`,
						},
					},
				}}
			/>
		);
	};

	const renderDivInnerSpacingGap = () => {
		const {
			value_mobile: rowGap_mobile,
			value_desktop: rowGap_desktop,
			value_tablet: rowGap_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_spacing.rowGap,
		});
		return (
			<Global
				styles={{
					[`${INNER_CLASSNAME}, ${BOX_CLASSNAME}`]: {
						rowGap: rowGap_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							rowGap: rowGap_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							rowGap: rowGap_desktop,
						},
					},
				}}
			/>
		);
	};
	const renderLabelMarginBottom = () => {
		const {
			value_mobile: bottomMargin_mobile,
			value_desktop: bottomMargin_desktop,
			value_tablet: bottomMargin_tablet,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_spacing.labelBottomMargin,
		});
		return (
			<Global
				styles={{
					[`${WRAP_CLASSNAME} .wcb-form__label`]: {
						marginBottom: bottomMargin_mobile,
						[`@media (min-width: ${media_tablet})`]: {
							marginBottom: bottomMargin_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							marginBottom: bottomMargin_desktop,
						},
					},
				}}
			/>
		);
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />
			<Global
				styles={getBorderStyles({
					className: `${WRAP_CLASSNAME}`,
					border: style_spacing.border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={getPaddingMarginStyles({
					className: `${WRAP_CLASSNAME}`,
					padding: style_spacing.padding,
				})}
			/>
			{renderDivInnerSpacingGap()}
			{renderLabelMarginBottom()}

			{/* ------------------- STYE FOR BOX ------------------------- */}

			{/* ------------------- STYE FOR LABEL ------------------------- */}
			<Global
				styles={getTypographyStyles({
					className: `${WRAP_CLASSNAME} .wcb-form__label`,
					typography: style_label.typography,
				})}
			/>
			<Global
				styles={{
					[`${WRAP_CLASSNAME} .wcb-form__label`]: {
						color: style_label.textColor,
						display: general_general.isShowLabel ? "block" : "none",
						":hover": {
							color: style_label.textColorHover,
						},
					},
				}}
			/>

			{/* ------------------- STYE FOR INPUT ------------------------- */}
			<Global
				styles={getTypographyStyles({
					className: INPUT_CLASSNAME,
					typography: style_input.typography,
				})}
			/>
			<Global
				styles={getBorderStyles({
					className: `${INPUT_CLASSNAME}`,
					border: style_input.border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={getPaddingMarginStyles({
					className: `${INPUT_CLASSNAME}`,
					padding: style_input.padding,
				})}
			/>
			<Global
				styles={{
					[INPUT_CLASSNAME]: {
						color: style_input.textColor,
						backgroundColor:
							style_input.bgAndPlaceholder.Normal.backgroundColor,
						"::placeholder": {
							color: style_input.bgAndPlaceholder.Normal.placeholderColor,
						},
						":hover": {
							backgroundColor:
								style_input.bgAndPlaceholder.Hover.backgroundColor,
							"::placeholder": {
								color: style_input.bgAndPlaceholder.Hover.placeholderColor,
							},
						},
						":active, :focus": {
							backgroundColor:
								style_input.bgAndPlaceholder.Active.backgroundColor,
							"::placeholder": {
								color: style_input.bgAndPlaceholder.Active.placeholderColor,
							},
						},
					},
				}}
			/>

			{/* ------------------- STYE FOR CHECKBOX RADIO TOGGLE ------------------------- */}
			<Global
				styles={getBorderStyles({
					className: `${CHECKBOX_RADIO_INPUT_CLASSNAME}, ${TOGGLE_CLASSNAME} .wcb-toggle__slider, ${TOGGLE_CLASSNAME} .wcb-toggle__slider::before`,
					border: style_checkbox_radio_toggle.border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={{
					[CHECKBOX_RADIO_INPUT_CLASSNAME]: {
						backgroundColor:
							style_checkbox_radio_toggle.colors.Normal.backgroundColor,
						":checked": {
							backgroundColor:
								style_checkbox_radio_toggle.colors.Active.backgroundColor,
						},
					},

					[`${TOGGLE_CLASSNAME}`]: {
						".wcb-toggle__slider": {
							backgroundColor:
								style_checkbox_radio_toggle.colors.Normal.backgroundColor,
						},
						"input:checked + .wcb-toggle__slider": {
							backgroundColor:
								style_checkbox_radio_toggle.colors.Active.backgroundColor,
						},
					},
				}}
			/>
			{renderCheckboxRadioSize()}
			{renderToggleSize()}

			{/* ------------------- STYE FOR BUTTON SUBMIT ------------------------- */}
			<Global
				styles={getBorderStyles({
					className: `${SUBMIT_CLASSNAME}`,
					border: style_submit_button.border,
					isWithRadius: true,
				})}
			/>

			<Global
				styles={getTypographyStyles({
					className: SUBMIT_CLASSNAME,
					typography: style_submit_button.typography,
				})}
			/>

			<Global
				styles={{
					[SUBMIT_CLASSNAME]: {
						color: style_submit_button.colorAndBackgroundColor?.Normal?.color,
						backgroundColor:
							style_submit_button.colorAndBackgroundColor?.Normal
								?.backgroundColor,
						":hover": {
							color: style_submit_button.colorAndBackgroundColor?.Hover?.color,
							backgroundColor:
								style_submit_button.colorAndBackgroundColor?.Hover
									?.backgroundColor,
						},
					},
				}}
			/>
			<Global
				styles={getPaddingMarginStyles({
					className: `${SUBMIT_CLASSNAME}`,
					padding: style_submit_button.padding,
					margin: style_submit_button.margin,
				})}
			/>

			{/* ------------------- STYE FOR MESSAGES ------------------------- */}
			<Global
				styles={getTypographyStyles({
					className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
					typography: style_messages.typography,
				})}
			/>
			<Global
				styles={getBorderStyles({
					className: `${SUCCESS_MESS_CLASSNAME}`,
					border: style_messages.Success.border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={getPaddingMarginStyles({
					className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
					margin: style_messages.margin,
				})}
			/>
			<Global
				styles={{
					[`${SUCCESS_MESS_CLASSNAME}`]: {
						color: style_messages.Success.color,
						backgroundColor: style_messages.Success.backgroundColor,
					},
				}}
			/>
			<Global
				styles={getBorderStyles({
					className: `${ERROR_MESS_CLASSNAME}`,
					border: style_messages.Error.border,
					isWithRadius: true,
				})}
			/>
			<Global
				styles={{
					[`${ERROR_MESS_CLASSNAME}`]: {
						color: style_messages.Error.color,
						backgroundColor: style_messages.Error.backgroundColor,
					},
				}}
			/>

			{/* ------------------- ADVANCE -------------------  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "flex",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
