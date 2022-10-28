import React from "react";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import _ from "lodash";
// @ts-ignore
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { BlockWCBContainerBoxAttrs } from "./attributes";
import "./style.scss";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerBoxAttrs;
}) {
	const { uniqueId } = attributes;
	//

	return (
		<div
			className={`wcb-container-box__wrap wcb-update-div ${uniqueId}`}
			id={uniqueId}
		>
			<InnerBlocks.Content />

			{/*  */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{_.escape(JSON.stringify(attributes))}
			</pre>
		</div>
	);
}
