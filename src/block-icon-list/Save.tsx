import React from "react";
import { 
	useBlockProps, 
	// @ts-ignore
	useInnerBlocksProps } from "@wordpress/block-editor";
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
		general_layout,
		heading_1,
		heading_2,
		heading_3,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		heading_1,
		heading_2,
		heading_3,
		style_description,
		style_desination,
		style_Icon,
		style_title,
		general_icon,
		style_dimension,
		style_separator,
		general_separator,
		advance_motionEffect,
	};

	const dynamicStyle = {
		display: "flex",
		flexDirection: general_layout.layout === "vertical" ? "column" : "row",
		...(general_layout.layout === "vertical"
			? {
				alignItems:
					general_layout.textAlignment.Desktop === "center" ||
					general_layout.textAlignment.Mobile === "center" ||
					general_layout.textAlignment.Tablet === "center"
						? "center"
						: general_layout.textAlignment.Desktop === "left" ||
							general_layout.textAlignment.Mobile === "left" ||
							general_layout.textAlignment.Tablet === "left"
						? "flex-start"
						: general_layout.textAlignment.Desktop === "right" ||
							general_layout.textAlignment.Mobile === "right" ||
							general_layout.textAlignment.Tablet === "right"
						? "flex-end"
						: undefined,
				}
			: {
				justifyContent:
					general_layout.textAlignment.Desktop === "center" ||
					general_layout.textAlignment.Mobile === "center" ||
					general_layout.textAlignment.Tablet === "center"
						? "center"
						: general_layout.textAlignment.Desktop === "left" ||
							general_layout.textAlignment.Mobile === "left" ||
							general_layout.textAlignment.Tablet === "left"
						? "flex-start"
						: general_layout.textAlignment.Desktop === "right" ||
							general_layout.textAlignment.Mobile === "right" ||
							general_layout.textAlignment.Tablet === "right"
						? "flex-end"
						: undefined,
		}),
	}

	const wrapBlockProps = useBlockProps.save({
        className: "wcb-icon-list__icon-wrap",
        style: dynamicStyle,
    });

    const innerBlocksProps = useInnerBlocksProps.save(wrapBlockProps);

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			{innerBlocksProps.children}
		</SaveCommon>
	);
}
