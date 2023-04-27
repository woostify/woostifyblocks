import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrs } from "./attributes";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";

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
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}].wp-block`;
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
		const {
			value_desktop: textAlignment_desktop,
			value_mobile: textAlignment_mobile,
			value_tablet: textAlignment_tablet,
		} = getCssProperyHasResponsive({
			cssProperty: textAlignment,
		});
		return {
			[`${WRAP_CLASSNAME}`]: {
				textAlign: textAlignment_mobile,
				[`@media (min-width: ${media_tablet})`]: {
					textAlign: textAlignment_tablet,
				},
				[`@media (min-width: ${media_desktop})`]: {
					textAlign: textAlignment_desktop,
				},
				".wcb-form__btn-submit-wrap": {
					justifyContent: general_submit_button.textAlignment,
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
					[`${INNER_CLASSNAME}, ${WRAP_CLASSNAME}`]: {
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
						// ":checked::before": {
						// 	color: style_checkbox_radio_toggle.colors.Active.color,
						// },
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
						// ".wcb-toggle__slider::before": {
						// 	backgroundColor: style_checkbox_radio_toggle.colors.Normal.color,
						// },
						// "input:checked + .wcb-toggle__slider::before": {
						// 	backgroundColor: style_checkbox_radio_toggle.colors.Active.color,
						// },
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
				})}
			/>

			{/* ------------------- STYE FOR MESSAGES ------------------------- */}
			<Global
				styles={getBorderStyles({
					className: `${SUCCESS_MESS_CLASSNAME}`,
					border: style_messages.Success.border,
					isWithRadius: true,
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
