import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_border,
		advance_motionEffect,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_border,
		advance_motionEffect,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-map__wrap",
	});
	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			<div className="wcb-map__inner">
				<iframe
					width="100%"
					height="100%"
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src={`https://www.google.com/maps/embed/v1/place
						?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY
						&maptype=${general_general.mapTypeId}
						&language=${general_general.language}
						&zoom=${general_general.zoom}
						&q=place_id:${
							general_general.placeQuery?.place_id ||
							"ChIJdan7FLcJxkcRQrwvoy3DwiM"
						}`}
				></iframe>
			</div>
		</SaveCommon>
	);
}
