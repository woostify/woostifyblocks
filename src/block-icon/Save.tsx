import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
		link,
		openInNewWindow,
		addNofollowToLink,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
		link,
		openInNewWindow,
		addNofollowToLink,
	};
	//

	const renderIcon = () => {
		return (
			<>
				{general_icon.enableIcon && (
					<div className="wcb-icon-list__icon-wrap">
						<div className="wcb-icon-list__icon">
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
			<div className="wcb-icon-list__separator-wrap">
				<div className="wcb-icon-list__separator"></div>
			</div>
		);
	};

	const HeadingTag = general_layout.headingTag;

	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon-list__wrap",
		"data-block-type": "icon-item"
	});
	//

	const renderContent = () => (
		<div className="wcb-icon-list__content">
			<div className="wcb-icon-list__content-title-wrap">
				{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
				<div className="wcb-icon-list__content-title">
					{general_layout.enableTitle && (
						<RichText.Content
							tagName={HeadingTag}
							value={heading}
							placeholder={__("Heading of box")}
							className="wcb-icon-list__heading"
						/>
					)}
				</div>
				{(general_icon.iconPosition === "rightOfTitle") &&
					renderIcon()}
			</div>
		</div>
	);

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={attributes}
			uniqueId={uniqueId}
		>
			{link ? (
				<a
					href={link}
					target={openInNewWindow ? "_blank" : undefined}
					rel={addNofollowToLink ? "nofollow" : undefined}
				>
					{renderContent()}
				</a>
			) : (
					renderContent()
			)}
		</SaveCommon>
	);
}
