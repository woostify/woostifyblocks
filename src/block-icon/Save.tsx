import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import MyIconFull from "../components/controls/MyIconFull";
import { getProtocol, prependHTTP } from '@wordpress/url';
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> { }

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
		general_preset
	} = attributes;
	//

	const {
		enableLink,
		addNofollowToLink,
		link,
		openInNewWindow,
	} = general_icon;

	// 

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
		general_preset
	};
	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon__wrap",
	});
	const HtmlTag = enableLink ? "a" : "div";
	var url = general_icon.link;
	if ( '' !== url ) {
		url = getProtocol( url ) ? url : prependHTTP( url );
	}
	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			{/* CHILD CONTENT  */}

			<HtmlTag className="wcb-icon__content"
				target={openInNewWindow ? "_blank" : undefined}
				href={enableLink ? url : undefined}
				rel={addNofollowToLink ? "noopener noreferrer" : undefined}
			>
				<MyIconFull icon={general_icon.icon} />
			</HtmlTag>
		</SaveCommon>
	);
}
