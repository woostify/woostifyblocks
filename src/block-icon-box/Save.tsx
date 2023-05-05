import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading,
		description,
		designation,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
	};
	//

	const renderIcon = () => {
		return (
			<>
				{general_icon.enableIcon && (
					<div className="wcb-icon-box__icon-wrap">
						<div className="wcb-icon-box__icon">
							<MyIconFull icon={general_icon.icon} />
						</div>
					</div>
				)}
				{general_separator.position === "afterIcon" && renderSeparator()}
			</>
		);
	};

	const renderSeparator = () => {
		if (!general_separator.enableSeparator) {
			return null;
		}
		return (
			<div className="wcb-icon-box__separator-wrap">
				<div className="wcb-icon-box__separator"></div>
			</div>
		);
	};

	const HeadingTag = general_layout.headingTag;

	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon-box__wrap",
	});
	//

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			{(general_icon.iconPosition === "top" ||
				general_icon.iconPosition === "left") &&
				renderIcon()}

			{/* CHILD CONTENT  */}
			<div className="wcb-icon-box__content">
				<div className="wcb-icon-box__content-title-wrap">
					{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
					<div className="wcb-icon-box__content-title">
						{general_layout.enablePrefix && (
							<RichText.Content
								tagName="div"
								value={designation}
								placeholder={__("Designation...")}
								className="wcb-icon-box__designation"
							/>
						)}

						{general_separator.position === "afterPrefix" && renderSeparator()}

						{general_layout.enableTitle && (
							<RichText.Content
								tagName={HeadingTag}
								value={heading}
								placeholder={__("Heading...")}
								className="wcb-icon-box__heading"
							/>
						)}
					</div>
					{(general_icon.iconPosition === "rightOfTitle" ||
						general_icon.iconPosition === "bellowTitle") &&
						renderIcon()}
				</div>

				{general_separator.position === "afterTitle" && renderSeparator()}

				{general_layout.enableDescription && (
					<RichText.Content
						tagName="div"
						value={description}
						placeholder={__("Description...")}
						className="wcb-icon-box__description"
					/>
				)}

				{general_separator.position === "afterDescription" && renderSeparator()}

				{general_layout.enableCTAButton && <InnerBlocks.Content />}
			</div>

			{general_icon.iconPosition === "right" && renderIcon()}
		</SaveCommon>
	);
}
