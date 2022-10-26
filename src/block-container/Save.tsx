import React from "react";
import { __ } from "@wordpress/i18n";
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
import "./style.scss";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	const className = "";

	const blockProps = useBlockProps.save({ className });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
}
