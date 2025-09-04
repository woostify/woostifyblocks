import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, // @ts-ignore
	useInnerBlocksProps } from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";
import React, { useEffect, FC, useCallback, useRef, useState, useMemo } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbSlidersPanelGeneral from "./WcbSliderPanelGeneral";
import WcbSlidersPanelCarousel from "./WcbSliderPanelCarousel";
import WcbSlidersPanel_StyleArrowDots from "./WcbSliderPanel_StyleArrowDots";
import WcbSlidersPanel_StyleBackground from "./WcbSliderPanel_StyleBackground";
import WcbSlidersPanel_StyleDimension from "./WcbSliderPanel_StyleDimension";
import WcbSliderPanel_StyleBoxshadow from "./WcbSliderPanel_StyleBoxshadow";
import WcbSlidersPanel_StyleVerticalAlignment, {WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO} from "./WcbSlidersPanel_StyleVerticalAlignment";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import converUniqueIdToAnphaKey, { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
// Import child panel components using shared types to avoid circular dependency
import {
	WcbSlidersPanel_StyleName as ChildStyleName,
	WcbSlidersPanel_StyleContent as ChildStyleContent,
	WcbSliderPanel_StyleCallToActionButton as ChildStyleCallToActionButton,
	WcbSlidersPanel_StyleImage as ChildStyleImage,
	WcbSlidersPanel_StyleBackground as ChildStyleBackground,
	WcbSlidersPanel_StyleDimension as ChildStyleDimension,
	WcbSliderButtonPanelPreset as ChildStyleButtonPreset,
	WcbSliderLayoutPanelPreset as ChildStyleLayoutPreset,
	// WcbSlidersPanel_StyleSeparator as ChildStyleSparator,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO
} from "../block-slider-child/Edit";

// Import CallToAction presets
import {
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_2,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_3,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_4,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_5,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_6,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_7,
	WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_8,
} from "../block-slider-child/WcbSliderPanel_StyleCallToActionButton";

// Import separator demo constant
import { WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO } from "../block-slider-child/WcbSliderPanel_StyleSeparator";
import { WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "../block-slider-child/WcbSliderPanel_LayoutPreset";

// Import demo constants from shared types
import {
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "./types";
import { WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO } from "../block-slider-child/WcbSliderPanel_StyleImage";
import {
	WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO
} from "../block-slider-child/WcbSliderPanel_ButtonPreset";

export const SLIDER_ITEM_DEMO: string[] = ["wcb/slider-child"];

// Arrow components for slider
function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>
		</div>
	);
}

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_name,
		style_content,
		style_company,
		style_verticalAlignment,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
	} = attributes;

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	
	// Generate CSS-safe class from clientId for reliable parent identification
	const parentCssClass = converClientIdToUniqueClass(clientId);
	
	const [isParentSelected, setIsParentSelected] = useState(true);
	const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
	
	/**
	 * Parent-Child Synchronization
	 */
	const { insertBlock, removeBlock, selectBlock } = useDispatch("core/block-editor");

	// Get inner blocks and selected block
	const { innerBlocks } = useSelect((select: any) => {
		const { getBlocks } = select("core/block-editor");
		return {
			innerBlocks: getBlocks(clientId) || [],
		};
	}, [clientId]);

	// Initialize blocks after innerBlocks is available
	useEffect(() => {
		const targetNumber = general_general.numberofTestimonials || 3;
		const currentNumber = innerBlocks.length;

		if (currentNumber === 0 && targetNumber > 0) {
			const timeoutId = setTimeout(() => {
				for (let i = 0; i < targetNumber; i++) {
					const newBlock = wp.blocks.createBlock("wcb/slider-child");
					insertBlock(newBlock, i, clientId);
				}
			}, 100);
			return () => clearTimeout(timeoutId);
		}

		// Force parent selection after adding inner blocks
        selectBlock(clientId);
        setIsParentSelected(true);
        setSelectedChildId(null);
	}, [clientId, insertBlock, general_general.numberofTestimonials, innerBlocks.length]);

	// Handle child selection
	const handleChildSelect = (childClientId: string) => {
		setIsParentSelected(false);
		setSelectedChildId(childClientId);
		
		// // Reset slider to first slide when child is selected (similar to Spectra)
		// if (sliderRef.current && innerBlocks.length > 0) {
		// 	sliderRef.current.slickGoTo(0, false);
		// }
	};

	// Add useEffect to monitor numberofTestimonials changes and update inner blocks accordingly
	useEffect(() => {
		// Add a small delay to avoid conflicts with InnerBlocks initialization
		const targetNumber = general_general.numberofTestimonials || 3;
		const currentNumber = innerBlocks.length;

		// Only proceed if there's a real difference and blocks are actually loaded
		if (currentNumber === targetNumber || !targetNumber) {
			return; // No change needed
		}

		// Prevent running during initial load when innerBlocks might be empty
		if (currentNumber === 0 && targetNumber > 0) {
			// Let InnerBlocks handle initial template creation
			return;
		}

		const timeoutId = setTimeout(() => {
			if (currentNumber < targetNumber) {
				// Add blocks
				const blocksToAdd = targetNumber - currentNumber;
				for (let i = 0; i < blocksToAdd; i++) {
					const newBlock = wp.blocks.createBlock("wcb/slider-child");
					insertBlock(newBlock, currentNumber + i, clientId);
				}
			} else if (currentNumber > targetNumber) {
				// Remove blocks from the end
				const blocksToRemove = currentNumber - targetNumber;
				const clientIdsToRemove = innerBlocks.slice(-blocksToRemove).map(block => block.clientId);
				clientIdsToRemove.forEach(childClientId => {
					removeBlock(childClientId);
				});
			}

			// Force parent selection after modifying inner blocks
			selectBlock(clientId);
			setIsParentSelected(true);
			setSelectedChildId(null);
		}, 100); // Small delay to prevent race conditions

		return () => clearTimeout(timeoutId);
	}, [general_general.numberofTestimonials, innerBlocks.length]); // Simplified dependency array

	// Get selected child block if any
	const selectedChildBlock = !isParentSelected && selectedChildId 
		? innerBlocks.find(block => block.clientId === selectedChildId)
		: null;

	// Hook for child panel state management
	const childPanelInfo = useSetBlockPanelInfo(selectedChildBlock?.attributes?.uniqueId || '');

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		// If child block is selected, render child panels
		if (selectedChildBlock) {
			const childAttrs = selectedChildBlock.attributes;
			wp.data.dispatch("core/block-editor").updateBlockAttributes(
				selectedChildBlock.clientId,
				childAttrs
			);
			
			switch (tab.name) {
				case "General":
					return (
						<>
							<ChildStyleImage
								onToggle={() => handleTogglePanel("General", "PanelImages")}
								initialOpen={tabGeneralIsPanelOpen === "PanelImages" ||
									childPanelInfo.tabStylesIsPanelOpen === "first"
								}
								opened={tabGeneralIsPanelOpen === "PanelImages" || undefined}
								//
								setAttr__={(data) => {
									// Always update image/icon data
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_image: data }
									);

									// If icon is disabled, reset layout preset to demo
									if (data && (data.enableIcon === false || data.enableIcon === true)) {
										wp.data.dispatch("core/block-editor").updateBlockAttributes(
											selectedChildBlock.clientId,
											{ style_layoutPreset: WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO }
										);
									}
								}}
								panelData={childAttrs.style_image || WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO}
							/>
							
							<ChildStyleContent
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleContent")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleContent"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleContent" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_content: data }
									);

									// If textAlignment, reset layout preset to demo
									if (data && (data.textAlignment)) {
										wp.data.dispatch("core/block-editor").updateBlockAttributes(
											selectedChildBlock.clientId,
											{ style_layoutPreset: WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO }
										);
									}
								}}
								panelData={childAttrs.style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO}
							/>

							{/* TODO: Will continue coding when merge phase 1
								<ChildStyleSparator
									onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleSparator")}
									initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleSparator"}
									opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleSparator" || undefined}
									setAttr__={(data) => {
										wp.data.dispatch("core/block-editor").updateBlockAttributes(
											selectedChildBlock.clientId,
											{ style_sparator: data }
										);
									}}
									panelData={childAttrs.style_sparator || WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO}
								/> 
							*/}

							<ChildStyleButtonPreset
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleButtonPreset")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleButtonPreset"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleButtonPreset" || undefined}
								setAttr__={(data) => {
									// Update button preset
									wp.data.dispatch("core/block-editor").updateBlockAttributes(										
										selectedChildBlock.clientId,
										{ 
											style_buttonPreset: data 
										}
									);
									
									// Auto-update style_callToActionButton based on preset
									const getCallToActionStyleFromPreset = (preset: string) => {
										switch (preset) {
											case "wcb-button-1":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO;
											case "wcb-button-2":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_2;
											case "wcb-button-3":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_3;
											case "wcb-button-4":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_4;
											case "wcb-button-5":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_5;
											case "wcb-button-6":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_6;
											case "wcb-button-7":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_7;
											case "wcb-button-8":
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_8;
											default:
												return WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO;
										}
									};
									
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ 
											style_callToActionButton: getCallToActionStyleFromPreset(data.preset)
										}
									);
								}}
								panelData={childAttrs.style_buttonPreset || WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO}
							/>

							<ChildStyleLayoutPreset
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleLayoutPreset")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleLayoutPreset"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleLayoutPreset" || undefined}
								setAttr__={(data) => {
									switch (data.preset) {
										case "wcb-layout-1":
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{ 
													style_image: {
														...childAttrs.style_image,
														enableIcon: true,
													},
													style_content: {
														...childAttrs.style_content,
														textAlignment: {
															[deviceType]: "center",
														}
													}
												}
											);
											break;
										case "wcb-layout-2":
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{ 
													style_image: {
														...childAttrs.style_image,
														enableIcon: true,
													},
													style_content: {
														...childAttrs.style_content,
														textAlignment: {
															[deviceType]: "left",
														}
													}
												}
											);
											break;
										case "wcb-layout-3":
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{
													style_image: {
														...childAttrs.style_image,
														enableIcon: true,
													},
													style_content: {
														...childAttrs.style_content,
														textAlignment: {
															[deviceType]: "left",
														}
													}
												}
											);
											break;
										case "wcb-layout-4":
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{
													style_image: {
														...childAttrs.style_image,
														enableIcon: false,
													},
													style_content: {
														...childAttrs.style_content,
														textAlignment: {
															[deviceType]: "center",
														}
													}
												}
											);
											break;
										case "wcb-layout-5":
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{
													style_image: {
														...childAttrs.style_image,
														enableIcon: false,
													},
													style_content: {
														...childAttrs.style_content,
														textAlignment: {
															[deviceType]: "left",
														}
													}
												}
											);
											break;
										default:
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
												selectedChildBlock.clientId,
												{
													style_image: {
														...childAttrs.style_image,
														// enableIcon: false,
													},
													style_content: {
														...childAttrs.style_content,
														// textAlignment: {
														// 	[deviceType]: "center",
														// }
													}
												}
											);
											break;
									}
									// Update layout preset
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_layoutPreset: data }
									);
								}}
								panelData={childAttrs.style_layoutPreset || WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO}
							/>
						</>
					);
				case "Styles":
					return (
						<>
							<ChildStyleName
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleName", true)}
								initialOpen={
									childPanelInfo.tabStylesIsPanelOpen === "_StyleName" ||
									childPanelInfo.tabStylesIsPanelOpen === "first"
								}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleName" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_name: data }
									);
								}}
								panelData={childAttrs.style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO}
							/>
							
							<ChildStyleContent
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleContent")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleContent"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleContent" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_content: data }
									);
								}}
								panelData={childAttrs.style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO}
							/>

							<ChildStyleCallToActionButton 
								onToggle={() => handleTogglePanel("Styles", "_StyleCallToActionButton")}
								initialOpen={tabGeneralIsPanelOpen === "_StyleCallToActionButton"}
								opened={tabGeneralIsPanelOpen === "_StyleCallToActionButton" || undefined}
								//
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_callToActionButton: data }
									);
								}}
								panelData={childAttrs.style_callToActionButton || WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO}
							/>
							
							<ChildStyleBackground
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleBackground")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleBackground"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleBackground" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_backgroundAndBorder: data }
									);
								}}
								panelData={childAttrs.style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO}
							/>
							
							<ChildStyleDimension
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleDimension")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleDimension"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleDimension" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_dimension: data }
									);
								}}
								panelData={childAttrs.style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO}
							/>
						</>
					);
				case "Advances":
					return (
						<>
							<AdvancePanelCommon
								advance_motionEffect={childAttrs.advance_motionEffect}
								advance_responsiveCondition={childAttrs.advance_responsiveCondition}
								advance_zIndex={childAttrs.advance_zIndex}
								handleTogglePanel={childPanelInfo.handleTogglePanel}
								setAttributes={(newAttrs) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										newAttrs
									);
								}}
								tabAdvancesIsPanelOpen={childPanelInfo.tabAdvancesIsPanelOpen}
							/>
						</>
					);
				default:
					return <div></div>;
			}
		}
		
		// Parent panel rendering (original logic)
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbSlidersPanelGeneral
							onToggle={() => handleTogglePanel("General", "Heading", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Heading" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Heading" || undefined}
							setAttr__={(data) => {
								setAttributes({ general_general: data });
							}}
							panelData={general_general}
						/>
						<WcbSlidersPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={
								tabGeneralIsPanelOpen === "Carousel"
							}
							opened={tabGeneralIsPanelOpen === "Carousel" || undefined}
							setAttr__={(data) => {
								setAttributes({
									general_carousel: data,
								});
							}}
							panelData={general_carousel}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbSlidersPanel_StyleVerticalAlignment
							onToggle={() => handleTogglePanel("Styles", "_StyleVerticalAlignment")}
							initialOpen={tabStylesIsPanelOpen === "_StyleVerticalAlignment" ||
								tabStylesIsPanelOpen === "first"}
							opened={tabStylesIsPanelOpen === "_StyleVerticalAlignment" || undefined}
							setAttr__={(data) => {
								setAttributes({
									style_verticalAlignment: data,
								});
							}}
							panelData={style_verticalAlignment || WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO} // Provide a default object if undefined
						/>
						<WcbSlidersPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder}
						/>
						<WcbSliderPanel_StyleBoxshadow
							onToggle={() => handleTogglePanel("Styles", "_StyleBoxshadow")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBoxshadow"}
							opened={tabStylesIsPanelOpen === "_StyleBoxshadow" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_boxshadow: data,
								});
							}}
							panelData={style_boxshadow}
						/>
						<WcbSlidersPanel_StyleArrowDots
							onToggle={() => handleTogglePanel("Styles", "_StyleArrowDots")}
							initialOpen={tabStylesIsPanelOpen === "_StyleArrowDots"}
							opened={tabStylesIsPanelOpen === "_StyleArrowDots" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbSlidersPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
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

	// Use useMemo to prevent unnecessary template recreation
	const innerBlocksTemplate: any[] = [
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO
	]

	const innerBlocksProps = useInnerBlocksProps(
		{
			allowedBlocks: SLIDER_ITEM_DEMO,
			template: innerBlocksTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

	// Memoized child component to prevent multiple renders
	const MemoizedChildBlock = useMemo(() => {
		return React.memo(({ block, isSelected, onSelect, index}: any) => {
				const blockType = wp.blocks?.getBlockType?.(block.name);
				const BlockEdit = blockType?.edit;

				return (
				<div className="wcb-slider__item" key={index + "-"} 
						onClick={(e) => {
							e.stopPropagation();
							onSelect(block.clientId);
						}}
					>
						<div className="wcb-slider__item-background">
							<div className="wcb-slider__item-wrap-inner">
								<div className="wcb-slider__item-inner">
								<div className={`wcb-slider-child__wrap ${block.attributes?.uniqueId || ''}`}>
										<BlockEdit
											attributes={block.attributes}
											setAttributes={(newAttributes: any) => {
											wp.data.dispatch("core/block-editor").updateBlockAttributes(
														block.clientId,
														newAttributes
													);
											}}
											clientId={block.clientId}
											isSelected={isSelected}
											index={index} // Pass index to child for unique identification
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			},
			(prevProps, nextProps) => {
				// Only rerender when attributes or selection change
				if (prevProps.isSelected !== nextProps.isSelected) return false;
				if (prevProps.block.clientId !== nextProps.block.clientId) return false;

				// compare attributes shallow
				const prevAttrs = prevProps.block.attributes;
				const nextAttrs = nextProps.block.attributes;

				const keys = Object.keys({ ...prevAttrs, ...nextAttrs });
				for (const key of keys) {
					if (prevAttrs[key] !== nextAttrs[key]) {
						return false; // rerender if any attribute differs
					}
				}

				return true; // keep the same component if no changes
			}
		);
	}, []);

	useEffect(() => {
		// Get all DOM slider wrapper
		const sliders = document.querySelectorAll(".wcb-slider__wrap");
		const sliderItemInner = document.querySelectorAll(".wcb-slider__item-inner");

		sliders.forEach((slider) => {
			const items = slider.querySelectorAll<HTMLElement>(
				".wcb-slider-child__item-inner"
			);

			if (items.length > 0) {
				// Reset padding before calculating
				items.forEach((item) => {
					item.style.paddingTop = "";
					item.style.paddingRight = "";
					item.style.paddingBottom = "";
					item.style.paddingLeft = "";
				});

				// Find max padding value by site
				let maxPaddingTop = 0;
				let maxPaddingRight = 0;
				let maxPaddingBottom = 0;
				let maxPaddingLeft = 0;

				items.forEach((item) => {
					const style = window.getComputedStyle(item);
					maxPaddingTop = Math.max(maxPaddingTop, parseFloat(style.paddingTop));
					maxPaddingRight = Math.max(maxPaddingRight, parseFloat(style.paddingRight));
					maxPaddingBottom = Math.max(maxPaddingBottom, parseFloat(style.paddingBottom));
					maxPaddingLeft = Math.max(maxPaddingLeft, parseFloat(style.paddingLeft));
				});

				// Assign padding for sync
				items.forEach((item: any) => {
					item.style.paddingTop = `${maxPaddingTop}px !important`;
					item.style.paddingRight = `${maxPaddingRight}px !important`;
					item.style.paddingBottom = `${maxPaddingBottom}px !important`;
					item.style.paddingLeft = `${maxPaddingLeft}px !important`;
				});

				// Sync hight
				let maxHeight = 0;
				items.forEach((item) => {
					item.style.height = "auto"; // reset before calculating
					maxHeight = Math.max(maxHeight, item.offsetHeight);
				});

				sliderItemInner.forEach((item:any) => {
					item.style.height = `${maxHeight}px`;
					item.style.display = "flex";
					item.style.alignItems = "center";
					item.style.justifyContent = "center";
				});
			}
		});
	});

	const renderSliderContent = () => {
		const {
			animationDuration,
			autoplaySpeed,
			hoverpause,
			isAutoPlay,
			rewind,
			showArrowsDots,
			adaptiveHeight,
		} = general_carousel;
		const { colGap, columns } = general_general;

		const { currentDeviceValue: currentColumns } = getValueFromAttrsResponsives(
			columns,
			deviceType
		);

		const settings: Settings = {
			infinite: rewind,
			speed: animationDuration || 500,
			autoplay: isAutoPlay,
			// centerMode: true,
			autoplaySpeed,
			slidesToShow: currentColumns,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			dots: showArrowsDots !== "Arrow",
			arrows: showArrowsDots !== "Dot",
			adaptiveHeight: adaptiveHeight,
			pauseOnHover: hoverpause,
			pauseOnFocus: true,
			accessibility: false,
			initialSlide: 0,
			// Disable touch/swipe in editor mode to prevent accidental slide changes
			swipe: false,
			touchMove: false,
			draggable: false,
		};

		// If no inner blocks or blocks count doesn't match target, show template
		// If no inner blocks, show template  
		if (innerBlocks.length === 0) {
			return (
				<div className="wcb-slider__wrap-items">
					<Slider 
						// ref={ sliderRef } 
						{...settings} 
					>
						<div {...innerBlocksProps} />
						{/* <InnerBlocks
							allowedBlocks={SLIDER_ITEM_DEMO}
							template={innerBlocksTemplate}
							templateLock={false}
							renderAppender={isSelected ? InnerBlocks.DefaultBlockAppender : undefined} /> */}
					</Slider>
				</div>
			);
		}

		// Show slider with individual child blocks
		return (
			<div className="wcb-slider__wrap-items">
				<Slider 
					// ref={ sliderRef } 
					{...settings}
				>
				{innerBlocks.map((block: any, index: number) =>
					<MemoizedChildBlock
						key={block.clientId}
						block={block}
						isSelected={!isParentSelected && (selectedChildId != null && selectedChildId === block.clientId)}
						onSelect={handleChildSelect}
						index={index + 1} // Pass index to child for unique identification
					/>
				)}
				</Slider>
			</div>
		);
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			sliders,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_dimension,
			general_carousel,
			style_verticalAlignment,
			style_arrowAndDots,
			style_backgroundAndBorder,
			style_company,
			style_content,
			style_name,
			style_boxshadow,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		general_carousel,
		style_verticalAlignment,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_name,
		style_boxshadow,
		advance_motionEffect,
	]);

	const handleParentClick = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget && !isParentSelected) {
			console.log('Parent: Selecting parent block');
			selectBlock(clientId);
			setIsParentSelected(true);
			setSelectedChildId(null);
		}
	}, [isParentSelected, clientId]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider__wrap ${uniqueId} ${parentCssClass}`}
				data-uniqueid={uniqueId}
				onClick={handleParentClick}
			>
				{/* CONTROL SETTINGS - Show when parent is selected OR when child is selected */}
				{(isParentSelected || selectedChildBlock) && (
					<HOCInspectorControls
						renderTabPanels={renderTabBodyPanels}
						uniqueId={selectedChildBlock ? selectedChildBlock.attributes.uniqueId : uniqueId}
					/>
				)}
				
				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT */}
				{renderSliderContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
