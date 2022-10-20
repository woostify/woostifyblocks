import "./style.scss";
import React from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	const blockProps = useBlockProps.save({ className: "" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	return <div {...innerBlocksProps} />;
}
