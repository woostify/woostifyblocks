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
	const { styles_background, styles_border } = attributes;
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
	return (
		<>
			{renderBgOverlay()}
			{renderVideoBg()}
			<div {...innerBlocksProps} />;
		</>
	);
}
