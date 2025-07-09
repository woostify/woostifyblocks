import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useState, useRef } from "react";
import { useSelect } from "@wordpress/data";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import MyMediaUploadCheck from "../components/controls/MyMediaUploadCheck";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import GlobalCss from "./GlobalCss";
// Import style panels
import WcbTestimonialsPanel_StyleName, { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import WcbTestimonialsPanel_StyleContent, { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany, { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage, { WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO } from "./WcbSliderPanel_StyleImage";
import WcbTestimonialsPanel_StyleBackground, { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension, { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import AdvancePanelCommon from "../components/AdvancePanelCommon";

// Global style registry to ensure only one style instance exists
const styleRegistry = new Set<string>();

// Custom hook to ensure only one style instance exists
const useUniqueStyleInstance = (uniqueId: string) => {
	const [isRegistered, setIsRegistered] = useState(false);
	
	useEffect(() => {
		// If this uniqueId is not in registry, register it
		if (!styleRegistry.has(uniqueId)) {
			styleRegistry.add(uniqueId);
			setIsRegistered(true);
		}
		
		// Cleanup function to remove from registry when component unmounts
		return () => {
			if (styleRegistry.has(uniqueId)) {
				styleRegistry.delete(uniqueId);
				setIsRegistered(false);
			}
		};
	}, [uniqueId]);
	
	return isRegistered;
};

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		content,
		name,
		callToAction,
		image,
		style_name,
		style_content,
		style_company,
		style_image,
		style_backgroundAndBorder,
		style_dimension,
		advance_motionEffect,
	} = attributes;
	
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);
	
	// Ensure only one style instance exists
	const isUniqueStyleInstance = useUniqueStyleInstance(uniqueId);
	
	// Debug: Log when style instance is created
	useEffect(() => {
		if (isUniqueStyleInstance) {
			console.log(`🎨 Style instance created for: ${uniqueId}`);
			console.log(`📊 Total active style instances: ${styleRegistry.size}`);
		}
	}, [isUniqueStyleInstance, uniqueId]);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbTestimonialsPanel_StyleName
							onToggle={() => handleTogglePanel("Styles", "_StyleName", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleName" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleName" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_name: data });
							}}
							panelData={style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleContent
							onToggle={() => handleTogglePanel("Styles", "_StyleContent")}
							initialOpen={tabStylesIsPanelOpen === "_StyleContent"}
							opened={tabStylesIsPanelOpen === "_StyleContent" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_content: data });
							}}
							panelData={style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleCompany
							onToggle={() => handleTogglePanel("Styles", "_StyleCompany")}
							initialOpen={tabStylesIsPanelOpen === "_StyleCompany"}
							opened={tabStylesIsPanelOpen === "_StyleCompany" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_company: data });
							}}
							panelData={style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleImage
							onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
							initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
							opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_image: data });
							}}
							panelData={style_image || WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO}
						/>
						<WcbTestimonialsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbTestimonialsPanel_StyleName
							onToggle={() => handleTogglePanel("Styles", "_StyleName", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleName" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleName" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_name: data });
							}}
							panelData={style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleContent
							onToggle={() => handleTogglePanel("Styles", "_StyleContent")}
							initialOpen={tabStylesIsPanelOpen === "_StyleContent"}
							opened={tabStylesIsPanelOpen === "_StyleContent" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_content: data });
							}}
							panelData={style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleCompany
							onToggle={() => handleTogglePanel("Styles", "_StyleCompany")}
							initialOpen={tabStylesIsPanelOpen === "_StyleCompany"}
							opened={tabStylesIsPanelOpen === "_StyleCompany" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_company: data });
							}}
							panelData={style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleImage
							onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
							initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
							opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_image: data });
							}}
							panelData={style_image || WCB_SLIDER_PANEL_STYLE_IMAGE_DEMO}
						/>
						
						<WcbTestimonialsPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO}
						/>
						<WcbTestimonialsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO}
						/>
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_motionEffect={advance_motionEffect}
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);
			default:
				return <div></div>;
		}
	};

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider-child__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>

				{/* Inspector Controls - Only show when this child is actually selected and is unique instance */}
				{isSelected && (
					<HOCInspectorControls
						uniqueId={uniqueId}
						renderTabPanels={renderTabBodyPanels}
					/>
				)}
				
				<div className="wcb-slider-child__item">
					<div className="wcb-slider-child__item-background">
						<div className="wcb-slider-child__item-wrap-inner">
							<div className="wcb-slider-child__item-inner">

								{/* Image */}
								{image?.mediaUrl && (
									<div className="wcb-slider-child__item-image">
										<MyMediaUploadCheck
											onChange={(data) => {
												const newImage = data?.[0] || { url: "", alt: "" };
												setAttributes({ image: newImage });
											}}
											imageData={image}
										/>
									</div>
								)}

								{/* Name */}
								<div className="wcb-slider-child__name">
									<RichText
										tagName="h4"
										placeholder={__("Enter name...", "wcb")}
										value={name}
										onChange={(value) => setAttributes({ name: value })}
									/>
								</div>

								{/* Content */}
								<div className="wcb-slider-child__content">
									<RichText
										tagName="p"
										placeholder={__("Enter content...", "wcb")}
										value={content}
										onChange={(value) => setAttributes({ content: value })}
									/>
								</div>

								{/* Call to Action */}
								<div className="wcb-slider-child__btn">
									<div className="wcb-slider-child__btn-inner">
										<RichText
											tagName="span"
											placeholder={__("Enter call to action...", "wcb")}
											value={callToAction}
											onChange={(value) => setAttributes({ callToAction: value })}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;