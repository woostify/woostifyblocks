import React from "react";
import { __ } from "@wordpress/i18n";
import {
	// @ts-ignore
	useInnerBlocksProps,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
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
		btnSubmitText,
	} = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "btnSubmitText"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
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
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-form__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const reCaptchaV2 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v2";
	const reCaptchaV3 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v3";
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-form__wrap"
			uniqueId={uniqueId}
			HtmlTag="form"
		>
			<div {...innerBlocksProps} />
			{/* V2 */}
			{reCaptchaV2 && (
				<div
					className="g-recaptcha"
					data-sitekey={DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_site_key}
				></div>
			)}

			<div className="wcb-form__btn-submit-wrap">
				<RichText.Content
					className={`wcb-form__btn-submit ${reCaptchaV3 ? "g-recaptcha" : ""}`}
					value={attributes.btnSubmitText}
					tagName="button"
					type="submit"
				/>
			</div>

			<div className="wcb-form__successMessageText">
				<span>{attributes.general_general.successMessageText}</span>
			</div>
			<div className="wcb-form__errorMessageText">
				<span>{attributes.general_general.errorMessageText}</span>
			</div>
		</SaveCommon>
	);
}
