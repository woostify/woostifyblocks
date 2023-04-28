import React from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
import "./style.scss";
// import { getGapStyleFromGapjObj } from "./Edit";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import SaveCommon from "../components/SaveCommon";

export interface WcbAttrsForSave
	extends Omit<BlockWCBContainerAttrs, "isShowVariations" | "subHeading"> {}

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	const {
		isShowVariations,
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
		containerClassName,
		anchor,
		align,
	} = attributes;

	const blockProps = useBlockProps.save({ className: "wcb-container__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const { htmlTag: HtmlTag = "div", containerWidthType } = general_container;

	const { colunmGap, rowGap } = styles_dimensions;
	// const GAPS_VARIABLES = getGapStyleFromGapjObj({ colunmGap, rowGap });
	const GAPS_VARIABLES = {};

	const newAttrs: WcbAttrsForSave = {
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
		containerClassName,
	};

	return (
		<SaveCommon
			attributes={newAttrs}
			uniqueId={uniqueId}
			anchor={anchor}
			HtmlTag={HtmlTag}
			className={`wcb-container__wrap ${
				attributes.className
			} ${containerClassName} ${align ? `align-${align}` : ""}`}
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

				<div
					{...innerBlocksProps}
					className={(innerBlocksProps.className as string).replace(
						/alignwide|alignfull/g,
						""
					)}
					id={undefined}
					style={GAPS_VARIABLES}
				/>
			</>
		</SaveCommon>
	);
}
