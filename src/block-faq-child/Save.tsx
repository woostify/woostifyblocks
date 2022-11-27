import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import { Dashicon } from "@wordpress/components";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "answer" | "question"> {}

export default function save({
	attributes,
	...props
}: {
	attributes: WcbAttrs;
}) {
	const { uniqueId, answer, question, general_icon, headingTag, layout } =
		attributes;
	//
	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		general_icon,
		headingTag,
		layout,
	};
	const isSelected = true;
	//
	const blockProps = useBlockProps.save({ className: "wcb-faq-child__wrap" });
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className={` wcb-faq-child__wrap wcb-faq-child__wrap--${layout} ${
				isSelected ? "active" : ""
			}`}
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div className="wcb-faq-child__question">
				<RichText.Content
					tagName={headingTag || "h4"}
					value={question}
					className="wcb-faq-child__question-text"
				/>

				{general_icon.enableIcon && layout === "accordion" && (
					<>
						{general_icon.iconName && (
							<Dashicon
								className="wcb-faq-child__icon wcb-faq-child__icon--active"
								size={16}
								icon={general_icon.iconName}
							/>
						)}
						{general_icon.inactiveIconName && (
							<Dashicon
								className="wcb-faq-child__icon wcb-faq-child__icon--inactive"
								size={16}
								icon={general_icon.inactiveIconName}
							/>
						)}
					</>
				)}
			</div>
			{(isSelected || layout === "grid") && (
				<div className="wcb-faq-child__answer">
					<RichText.Content
						tagName="p"
						value={answer}
						placeholder={__("Answer...")}
						className="wcb-faq-child__answer-text"
					/>
				</div>
			)}
		</SaveCommon>
	);
}
