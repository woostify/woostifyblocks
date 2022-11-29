import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
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
	const {
		uniqueId,
		answer,
		question,
		general_icon,
		headingTag,
		layout,
		defaultExtend,
		enableSeparator,
	} = attributes;
	//

	const blockProps = useBlockProps.save({ className: "wcb-faq-child__wrap" });

	const renderIcon = () => {
		if (!general_icon.enableIcon || layout !== "accordion") {
			return null;
		}
		return (
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
		);
	};

	const ariaControls = uniqueId + "controls";
	const Htmltag = layout === "grid" ? "div" : "button";
	return (
		<div
			{...blockProps}
			className={`ac wcb-faq-child__wrap wcb-faq-child__wrap--${layout} `}
			id={uniqueId}
		>
			<div className="ac-header">
				<Htmltag
					className={`ac-trigger wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`}
					type="button"
					aria-expanded="true"
					aria-controls={ariaControls}
				>
					{general_icon.iconPosition === "left" && renderIcon()}
					<RichText.Content
						tagName={headingTag || "h4"}
						value={question}
						className="wcb-faq-child__question-text"
					/>

					{general_icon.iconPosition === "right" && renderIcon()}
				</Htmltag>
			</div>
			<div className="ac-panel">
				{enableSeparator && <div className="wcb-faq-child__separator"></div>}
				<div className="wcb-faq-child__answer" id={ariaControls}>
					<RichText.Content
						tagName="p"
						value={answer}
						className="wcb-faq-child__answer-text ac-text"
					/>
				</div>
			</div>
		</div>
	);
}
