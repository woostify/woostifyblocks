import React from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { BlockWCBContainerBoxAttrs } from "./attributes";
import "./style.scss";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import SaveCommon from "../components/SaveCommon";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerBoxAttrs;
}) {
	const {
		uniqueId,
		general_container,
		styles_background,
		advance_responsiveCondition,
		advance_zIndex,
		general_flexProperties,
		styles_border,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
	} = attributes;
	//

	const blockProps = useBlockProps.save({
		className: "wcb-container-box__inner",
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const { htmlTag: HtmlTag = "div" } = general_container;
	const newAttrs: BlockWCBContainerBoxAttrs = {
		uniqueId,
		general_container,
		styles_background,
		advance_responsiveCondition,
		advance_zIndex,
		general_flexProperties,
		styles_border,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
	};
	return (
		<SaveCommon
			attributes={newAttrs}
			uniqueId={uniqueId}
			HtmlTag={HtmlTag}
			className="wcb-container-box__wrap"
		>
			<>
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
			</>
		</SaveCommon>
	);
}
