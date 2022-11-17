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

	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-form__wrap"
			uniqueId={uniqueId}
			HtmlTag="form"
		>
			<div {...innerBlocksProps} />
			<RichText.Content
				className="wcb-form__btn-submit"
				value={attributes.btnSubmitText}
				tagName="button"
			/>
		</SaveCommon>
	);
}
