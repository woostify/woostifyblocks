import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		general_socials,
		heading,
		description,
		designation,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		general_socials,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-team__wrap" });
	const HeadingTag = general_layout.headingTag;
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-team__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<RichText.Content
				tagName={HeadingTag}
				value={heading}
				placeholder={__("Heading...")}
				className="wcb-team__heading"
			/>
			<RichText.Content
				tagName="div"
				value={designation}
				placeholder={__("Designation...")}
				className="wcb-team__designation"
			/>
			<RichText.Content
				tagName="div"
				value={description}
				placeholder={__("Description...")}
				className="wcb-team__description"
			/>

			{/* <div className="wcb-team__socials-icons">
					<a href="#">
						<MyIcon icon="lni-adobe" />
					</a>
					<a href="#">
						<MyIcon icon="lni-airbnb" />
					</a>
					<a href="#">
						<MyIcon icon="lni-sad" />
					</a>
				</div> */}
		</SaveCommon>
	);
}
