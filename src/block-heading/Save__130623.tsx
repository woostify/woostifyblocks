import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { WcbBlockHeadingAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";

export interface WcbAttrsForSave
	extends Omit<WcbBlockHeadingAttrs, "heading" | "subHeading"> {}

export default function save({
	attributes,
}: {
	attributes: WcbBlockHeadingAttrs & { anchor: string };
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
		styles_border,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
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
		styles_border,
	};
	//

	const renderSeparator = () => {
		return general_content.showSeparator ? (
			<div className="wcb-heading__separator-wrap">
				<div className="wcb-heading__separator"></div>
			</div>
		) : null;
	};

	//
	const wrapBlockProps = useBlockProps.save({ className: "wcb-heading__wrap" });
	//
	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<>
				{general_content.separatorPosition === "top" && renderSeparator()}

				{general_content.showHeading ? (
					<RichText.Content
						tagName={general_content.headingTag || "h2"}
						className="wcb-heading__heading"
						value={heading}
					/>
				) : null}

				{general_content.separatorPosition === "middle" && renderSeparator()}

				{general_content.showSubHeading ? (
					<RichText.Content
						tagName="p"
						className="wcb-heading__subHeading"
						value={subHeading}
					/>
				) : null}

				{general_content.separatorPosition === "bottom" && renderSeparator()}
			</>
		</SaveCommon>
	);
}
