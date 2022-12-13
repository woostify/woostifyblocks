import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
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
		general_image,
		general_layout,
		heading,
		description,
		designation,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		style_image,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		style_image,
	};
	//

	const renderImage = () => {
		return general_image.isShowImage && general_image?.image?.mediaId ? (
			<img
				className="wcb-icon-box__image"
				src={general_image.image.mediaUrl}
				alt=""
			/>
		) : null;
	};

	const blockProps = useBlockProps.save({ className: "wcb-icon-box__wrap" });
	const HeadingTag = general_layout.headingTag;
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-icon-box__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			{(general_image.imagePosition === "left" ||
				general_image.imagePosition === "top") &&
				renderImage()}
			{/* CHILD CONTENT  */}
			<div className="wcb-icon-box__content">
				<RichText.Content
					tagName={HeadingTag}
					value={heading}
					placeholder={__("Heading...")}
					className="wcb-icon-box__heading"
				/>
				<RichText.Content
					tagName="div"
					value={designation}
					placeholder={__("Designation...")}
					className="wcb-icon-box__designation"
				/>
				<RichText.Content
					tagName="div"
					value={description}
					placeholder={__("Description...")}
					className="wcb-icon-box__description"
				/>
			</div>

			{(general_image.imagePosition === "right" ||
				general_image.imagePosition === "bottom") &&
				renderImage()}
		</SaveCommon>
	);
}
