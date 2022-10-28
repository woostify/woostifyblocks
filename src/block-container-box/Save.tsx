import React from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { BlockWCBContainerBoxAttrs } from "./attributes";
import "./style.scss";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerBoxAttrs;
}) {
	const { uniqueId, general_container, styles_background } = attributes;
	//

	const blockProps = useBlockProps.save({
		className: "wcb-container-box__inner",
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const { htmlTag: HtmlTag = "div" } = general_container;
	return (
		<HtmlTag
			className={`wcb-container-box__wrap wcb-update-div ${uniqueId}`}
			id={uniqueId}
		>
			{/*  */}
			<VideoBackgroundByBgControl
				bgType={styles_background.bgType}
				videoData={styles_background.videoData}
			/>
			<OverlayBackgroundByBgControl
				bgType={styles_background.bgType}
				overlayType={styles_background.overlayType}
			/>

			{/*  */}
			<div {...innerBlocksProps} />

			{/*  */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{_.escape(JSON.stringify(attributes))}
			</pre>
		</HtmlTag>
	);
}
