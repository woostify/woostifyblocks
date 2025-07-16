import React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";

export interface WcbAttrsForSave extends WcbAttrs {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		content,
		name,
		callToAction,
		image,
		rating,
		style_image,
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
						<div className="wcb-slider-child__item-inner">
							{/* Image */}	
							{
								(style_image && 
								style_image.imagePosition === "above-title") &&
								renderImage()
							}

							{/* NAME */}
							<div className="wcb-slider-child__name">
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
							<div className="wcb-slider-child__content">
								<RichText.Content
									tagName="p"
									value={content}
								/>
							</div>

							{/* Call to Action */}
							<div className="wcb-slider-child__btn">
								<div className="wcb-slider-child__btn-inner">
									<RichText.Content
										tagName="span"
										value={callToAction}
									/>
								</div>
							</div>

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