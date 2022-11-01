import React from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
import "./style.scss";
import { getGapStyleFromGapjObj } from "./Edit";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import SaveCommon from "../components/SaveCommon";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	const {
		styles_background,
		uniqueId,
		general_container,
		styles_dimensions,
		advance_responsiveCondition,
		advance_zIndex,
		general_flexProperties,
		styles_border,
		styles_boxShadow,
		styles_color,
	} = attributes;

	const blockProps = useBlockProps.save({ className: "wcb-container__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const { htmlTag: HtmlTag = "div", containerWidthType } = general_container;
	const containerWidthTypeClass =
		containerWidthType === "Full Width"
			? "alignfull"
			: containerWidthType === "Boxed"
			? "alignwide"
			: "";
	const { colunmGap, rowGap } = styles_dimensions;
	const GAPS_VARIABLES = getGapStyleFromGapjObj({ colunmGap, rowGap });

	const newAttrs: BlockWCBContainerAttrs = {
		styles_background,
		uniqueId,
		general_container,
		styles_dimensions,
		advance_responsiveCondition,
		advance_zIndex,
		general_flexProperties,
		styles_border,
		styles_boxShadow,
		styles_color,
	};
	return (
		<SaveCommon
			attributes={newAttrs}
			uniqueId={uniqueId}
			HtmlTag={HtmlTag}
			className={`wcb-container__wrap ${containerWidthTypeClass}`}
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

				<div {...innerBlocksProps} style={GAPS_VARIABLES} />
			</>
		</SaveCommon>
	);
}
