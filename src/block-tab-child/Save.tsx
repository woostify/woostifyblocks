import React from "react";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "answer" | "question"> {}

export default function save({
	attributes,
	...props
}: {
	attributes: WcbAttrs;
}) {
	const { defaultExtend } = attributes;

	//
	const wrapBlockProps = useBlockProps.save({
		className: `wcb-tab-child__wrap`,
	});

	//
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<div {...wrapBlockProps}>
			<div
				children={innerBlocksProps.children}
				className="wcb-tab-child__inner"
			/>
		</div>
	);
}
