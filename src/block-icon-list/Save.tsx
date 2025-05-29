import React from "react";
import { 
    useBlockProps, 
	//@ts-ignore
    useInnerBlocksProps 
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
    extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		general_layout,
		style_dimension,
	} = attributes;

	const containerStyles = {
		display: "flex",
		flexDirection: general_layout.layout === "vertical" ? "column" : "row",
		...(general_layout.layout === "vertical"
			? {
				alignItems: general_layout.textAlignment.Desktop === "center"
					? "center"
					: general_layout.textAlignment.Desktop === "left"
					? "flex-start"
					: "flex-end",
			}
			: {
				justifyContent: general_layout.textAlignment.Desktop === "center"
					? "center"
					: general_layout.textAlignment.Desktop === "left"
					? "flex-start"
					: "flex-end",
			}),
		...(style_dimension?.padding?.Desktop && {
			paddingTop: style_dimension.padding.Desktop.top || "",
			paddingRight: style_dimension.padding.Desktop.right || "",
			paddingBottom: style_dimension.padding.Desktop.bottom || "",
			paddingLeft: style_dimension.padding.Desktop.left || "",
		}),
		...(style_dimension?.margin?.Desktop && {
			marginTop: style_dimension.margin.Desktop.top || "",
			marginRight: style_dimension.margin.Desktop.right || "",
			marginBottom: style_dimension.margin.Desktop.bottom || "",
			marginLeft: style_dimension.margin.Desktop.left || "",
		}),
	};

	// Wrapper block props with className same as Edit component
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon-list__wrap",
	});

	// Container for list items with className wcb-icon-list__icon-wrap like Edit component
	const blockProps = useBlockProps.save({
		className: "wcb-icon-list__icon-wrap",
		style: containerStyles
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={attributes}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}