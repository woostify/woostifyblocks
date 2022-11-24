import { RichText } from "@wordpress/block-editor";
import { Dashicon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { WcbAttrs } from "./attributes";

interface Props {
	attributes: WcbAttrs;
	onChangeText?: (content: string) => void;
	isEdit: boolean;
}

const Button: FC<Props> = ({
	attributes,
	onChangeText = () => {},
	isEdit,
	...props
}) => {
	const {
		content,
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
		uniqueId,
	} = attributes;
	const {
		enableIcon,
		iconPosition,
		isHiddenText,
		iconName,
		addNofollowToLink,
		link,
		openInNewWindow,
	} = general_content;

	const renderIcon = () => {
		if (!iconName || !enableIcon) {
			return null;
		}
		return <Dashicon className="wcb-button__icon" size={20} icon={iconName} />;
	};

	const renderButton = () => {
		const HtmlTag = isEdit ? "div" : "a";

		return (
			<HtmlTag
				{...props}
				className={`wcb-button__main ${
					enableIcon ? `wcb-button__main-icon-${iconPosition}` : ""
				} ${
					general_preset.preset
						? `wcb-button__main--${general_preset.preset}`
						: ""
				}`}
				//
				target={openInNewWindow ? "_blank" : undefined}
				href={!isEdit ? link : undefined}
				rel={addNofollowToLink ? "noopener noreferrer" : undefined}
			>
				{iconPosition === "left" && renderIcon()}
				{iconPosition === "top" && renderIcon()}

				{isEdit ? (
					<RichText
						tagName="div"
						className={`wcb-button__text ${isHiddenText ? "sr-only" : ""}`}
						value={content}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={onChangeText}
						placeholder={__("Button", "wcb")}
					/>
				) : (
					<RichText.Content
						tagName="div"
						className={`wcb-button__text ${isHiddenText ? "sr-only" : ""}`}
						value={content}
						placeholder={__("Button", "wcb")}
					/>
				)}
				{iconPosition === "right" && renderIcon()}
				{iconPosition === "bottom" && renderIcon()}
			</HtmlTag>
		);
	};

	return renderButton();
};

export default Button;
