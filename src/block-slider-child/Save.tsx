import React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import MyIcon from "../components/controls/MyIcon";

export interface WcbAttrsForSave extends WcbAttrs {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		content,
		name,
		callToAction,
		style_image,
		style_buttonPreset,
		style_layoutPreset,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `wcb-slider-child__wrap ${uniqueId} wcb-update-div`,
		"data-uniqueid": uniqueId,
	});

	const renderImage = () => {
		return style_image && style_image.isShowImage && style_image.image?.mediaId ? (
			<div className="wcb-slider-child__content-image">
				<img
					className="wcb-slider-child__image"
					src={style_image.image.mediaUrl}
					alt=""
				/>
			</div>
		) : null;
	};

	const renderIconButton = () => {
		return <MyIcon icon={"lni-arrow-right"} className="wcb-button__icon" />;
	};

	const renderIconTop = () => {
		return <MyIcon icon={"lni-checkmark-circle"} className="wcb-button__icon" />
	}

	return (
		<div {...blockProps}>
			<div className="wcb-slider-child__item">
				<div className="wcb-slider-child__item-background">
					<div className="wcb-slider-child__item-wrap-inner">
						{
							(style_image && 
							style_image.imagePosition === "left") &&
							renderImage()
						}
						<div className={`wcb-slider-child__item-inner 
							${
								style_layoutPreset?.preset === "wcb-layout-2" ||
								style_layoutPreset?.preset === "wcb-layout-3" ||
								style_layoutPreset?.preset === "wcb-layout-5" ?
								"justify-items-start" : "justify-items-center"
							}
						`}>
							{/* Image */}	
							{
								(style_image && 
								style_image.imagePosition === "above-title") &&
								renderImage()
							}

							{/* NAME */}
							<div className="wcb-slider-child__name">
								{
									style_layoutPreset?.preset === "wcb-layout-1" || 
									style_layoutPreset?.preset === "wcb-layout-2" ||
									style_layoutPreset?.preset === "wcb-layout-3" ?
									renderIconTop() : null
								}
								<RichText.Content
									tagName="h4"
									value={name}
								/>
							</div>
							
							{/* Image */}	
							{
								(style_image && 
								style_image.imagePosition === "blow-title") &&
								renderImage()
							}


							{/* Content */}
							<div className={`wcb-slider-child__content ${
									style_layoutPreset?.preset === "wcb-layout-2" ||
									style_layoutPreset?.preset === "wcb-layout-3" ||
									style_layoutPreset?.preset === "wcb-layout-5" ?
									"text-start" : "text-center"
								}
							`}>
								<RichText.Content
									tagName="p"
									value={content}
								/>
							</div>

							{/* Call to Action */}
							{
								style_layoutPreset?.preset === "wcb-layout-3" ?
								null : 								
								<div className="wcb-slider-child__btn">
									<div className="wcb-slider-child__btn-inner">
										<RichText.Content
											tagName="span"
											value={callToAction}
										/>
										{
											style_buttonPreset?.preset === 'wcb-button-4' || style_buttonPreset?.preset === 'wcb-button-8' ?
											renderIconButton() : null
										}
									</div>
								</div>
							}

							{/* Image */}	
							{
								(style_image &&
								style_image.imagePosition === "bottom") &&
								renderImage()
							}

						</div>
						{/* Image */}	
						{
							(style_image && 
							style_image.imagePosition === "right") &&
							renderImage()
						}
					</div>
				</div>
			</div>
		</div>
	);
} 