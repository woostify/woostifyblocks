import React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import MyIcon from "../components/controls/MyIcon";
import GlobalCss from "./GlobalCss";
import { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";

export interface WcbAttrsForSave extends WcbAttrs {
	clientID?: string; // Add clientID to save interface
}

export default function save({ attributes, context }: { attributes: WcbAttrs & { clientID?: string }, context?: any }) {
	const {
		uniqueId,
		content,
		name,
		callToAction,
		style_image,
		style_buttonPreset,
		style_layoutPreset,
		clientID, // Get clientID if passed
	} = attributes;

	// For save component, we'll use a fallback approach since clientId might not be available
	// The CSS will still work with uniqueId as fallback
	const uniqueClientClass = clientID ? converClientIdToUniqueClass(clientID) : `fallback-${uniqueId}`;

	const blockProps = useBlockProps.save({
		className: `wcb-slider-child__wrap ${uniqueId} ${uniqueClientClass} wcb-update-div`,
		"data-uniqueid": uniqueId,
		"data-clientid": clientID || 'not-available',
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
			{/* 
				CSS SCOPING STRUCTURE:
				- Using clientId-based CSS classes for unique styling
				- Each slider child has unique CSS selector based on clientId
				- Fallback to uniqueId if clientId not available
			*/}
			
			{/* Render CSS for this specific slider child instance */}
			<GlobalCss {...attributes} clientID={clientID} />
			
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