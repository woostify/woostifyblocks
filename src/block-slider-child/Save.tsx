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
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `wcb-slider-child__wrap ${uniqueId}`,
		"data-uniqueid": uniqueId,
	});

	const renderImage = () => {
		if (!image.mediaId) {
			return null;
		}
		return (
			<div className="wcb-slider-child__image">
				<img
					src={image.mediaUrl}
					alt=""
					srcSet={image.mediaSrcSet}
				/>
			</div>
		);
	};

	return (
		<div {...blockProps}>
			<div className="wcb-slider-child__item">
				<div className="wcb-slider-child__item-background">
					<div className="wcb-slider-child__item-wrap-inner">
						{/* IMAGE */}
						{renderImage()}

						<div className="wcb-slider-child__item-inner">
							{/* NAME */}
							<RichText.Content
								tagName="div"
								className="wcb-slider-child__name"
								value={name}
							/>

							<div className="wcb-slider-child__item-user">
								<div className="wcb-slider-child__item-nameandcompany">
									{/* CONTENT */}
									<RichText.Content
										tagName="div"
										className="wcb-slider-child__content"
										value={content}
									/>

									{/* COMPANY */}
									<RichText.Content
										tagName="div"
										className="wcb-slider-child__company"
										value={callToAction}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 