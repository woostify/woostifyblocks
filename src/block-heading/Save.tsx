import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { WcbBlockHeadingAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";

export default function save({
	attributes,
}: {
	attributes: WcbBlockHeadingAttrs;
}) {
	const {
		uniqueId,
		heading,
		subHeading,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		styles_background,
		styles_dimensions,
		styles_heading,
		styles_highlight,
		styles_link,
		styles_separator,
		styles_subHeading,
	} = attributes;
	//

	const newAttrForSave: Omit<WcbBlockHeadingAttrs, "heading" | "subHeading"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		styles_background,
		styles_dimensions,
		styles_heading,
		styles_highlight,
		styles_link,
		styles_separator,
		styles_subHeading,
	};
	//
	const blockProps = useBlockProps.save({ className: "wcb-heading__wrap" });
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-heading__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<>
				<RichText.Content
					tagName="h2"
					className="wcb-heading__heading"
					value={heading}
				/>
				<div className="wcb-heading__separator"></div>
				<RichText.Content
					tagName="p"
					className="wcb-heading__subHeading"
					value={subHeading}
				/>
			</>
		</SaveCommon>
	);
}
