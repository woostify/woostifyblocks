import React from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
import "./style.scss";
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
	} = attributes;

	const { htmlTag: HtmlTag = "div" } = general_container;

	// const { colunmGap, rowGap } = styles_dimensions;
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

	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-container__wrap " + containerClassName,
	});
	//
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrs}
			uniqueId={uniqueId}
			HtmlTag={HtmlTag}
		>
			<>
				<VideoBackgroundByBgControl
					bgType={styles_background.bgType}
					videoData={styles_background.videoData}
				/>
				<OverlayBackgroundByBgControl
					bgType={styles_background.bgType}
					overlayType={styles_background.overlayType}
				/>
				<div
					children={innerBlocksProps.children}
					className="wcb-container__inner"
					style={GAPS_VARIABLES}
				/>
			</>
		</SaveCommon>
	);
}
