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

	const reCaptchaV2 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v2";
	const reCaptchaV3 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v3";

	//
	const wrapBlockProps = useBlockProps.save({ className: "wcb-form__wrap" });
	//
	const blockProps = useBlockProps.save({ className: "wcb-form__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	//

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
			HtmlTag="form"
		>
			<div children={innerBlocksProps.children} className="wcb-form__inner" />
			{/* V2 */}
			{reCaptchaV2 && (
				<div
					className="g-recaptcha"
					// data-sitekey= key se duoc jQuery add o Frontend.tsx
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
