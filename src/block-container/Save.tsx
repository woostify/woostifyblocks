import React from "react";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import _ from "lodash";
// @ts-ignore
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { BlockWCBContainerAttrs } from "./attributes";
import "./style.scss";

export default function save({
	attributes,
}: {
	attributes: BlockWCBContainerAttrs;
}) {
	const { styles_background, uniqueId, general_container } = attributes;
	const blockProps = useBlockProps.save({ className: "wcb-container__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	const renderVideoBg = () => {
		if (
			styles_background.bgType !== "video" ||
			!styles_background.videoData?.mediaId
		) {
			return null;
		}
		const SRC = styles_background.videoData?.mediaUrl || "";
		return (
			<div className="wcb-container__video">
				<video
					autoPlay
					loop
					muted
					controls={false}
					title={SRC}
					data-id={styles_background.videoData.mediaId}
					src={SRC}
				></video>
			</div>
		);
	};

	const renderBgOverlay = () => {
		if (styles_background.overlayType === "none") {
			return null;
		}
		if (
			styles_background.bgType !== "video" &&
			styles_background.bgType !== "image"
		) {
			return null;
		}

		return <div className="wcb-container__overlay "></div>;
	};

	const containerWidthTypeClass =
		general_container.containerWidthType === "Full Width"
			? "alignfull"
			: general_container.containerWidthType === "Boxed"
			? "alignwide"
			: "";

	return (
		<div
			className={`wcb-container__wrap wcb-update-div ${uniqueId} ${containerWidthTypeClass}`}
			id={uniqueId}
		>
			{renderBgOverlay()}
			{renderVideoBg()}
			<div {...innerBlocksProps} />
			{/*  */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{_.escape(JSON.stringify(attributes))}
			</pre>
		</div>
	);
}
