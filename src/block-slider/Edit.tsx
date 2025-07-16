import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
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
import WcbTestimonialsPanel_StyleArrowDots from "./WcbSliderPanel_StyleArrowDots";
import WcbTestimonialsPanel_StyleBackground from "./WcbSliderPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension from "./WcbSliderPanel_StyleDimension";
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
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
// Import child panel components using shared types to avoid circular dependency
import {
	WcbTestimonialsPanel_StyleName as ChildStyleName,
	WcbTestimonialsPanel_StyleContent as ChildStyleContent,
	WcbTestimonialsPanel_StyleCompany as ChildStyleCompany,
	WcbTestimonialsPanel_StyleImage as ChildStyleImage,
	WcbTestimonialsPanel_StyleBackground as ChildStyleBackground,
	WcbTestimonialsPanel_StyleDimension as ChildStyleDimension,
} from "../block-slider-child/Edit";

// Import demo constants from shared types
import {
	WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "./types";
import { WCB_SLIDER_PANEL_IMAGE_DEMO } from "../block-slider-child/WcbSliderPanel_StyleImage";

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
	const [isParentSelected, setIsParentSelected] = useState(true);
	const [selectedChildId, setSelectedChildId] = useState<string | null>(clientId);

	/**
	 * Parent-Child Synchronization
	 */
	const { insertBlock, removeBlock } = useDispatch("core/block-editor");

	// Get inner blocks and selected block
	const { innerBlocks } = useSelect((select: any) => {
		const { getBlocks } = select("core/block-editor");
		return {
			innerBlocks: getBlocks(clientId) || [],
		};
	}, [clientId]);

	// Handle child selection
	const handleChildSelect = (childClientId: string) => {
		setIsParentSelected(false);
		setSelectedChildId(childClientId);
	};

	// Add useEffect to monitor numberofTestimonials changes and update inner blocks accordingly
	useEffect(() => {
		// Add a small delay to avoid conflicts with InnerBlocks initialization
		const timeoutId = setTimeout(() => {
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
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_image: data }
									);
								}}
								panelData={childAttrs.style_image || WCB_SLIDER_PANEL_IMAGE_DEMO}
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
							
							<ChildStyleCompany
								onToggle={() => childPanelInfo.handleTogglePanel("Styles", "_StyleCompany")}
								initialOpen={childPanelInfo.tabStylesIsPanelOpen === "_StyleCompany"}
								opened={childPanelInfo.tabStylesIsPanelOpen === "_StyleCompany" || undefined}
								setAttr__={(data) => {
									wp.data.dispatch("core/block-editor").updateBlockAttributes(
										selectedChildBlock.clientId,
										{ style_company: data }
									);
								}}
								panelData={childAttrs.style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO}
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
						<WcbTestimonialsPanel_StyleBackground
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
						<WcbTestimonialsPanel_StyleArrowDots
							onToggle={() => handleTogglePanel("Styles", "_StyleArrowDots")}
							initialOpen={tabStylesIsPanelOpen === "_StyleArrowDots"}
							opened={tabStylesIsPanelOpen === "_StyleArrowDots" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbTestimonialsPanel_StyleDimension
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

	// InnerBlocks configuration
	const ALLOWED_BLOCKS = ["wcb/slider-child"];
	
	// Use useMemo to prevent unnecessary template recreation
	const innerBlocksTemplate: any[] = useMemo(() => {
		const targetNumber = general_general.numberofTestimonials || 3;
		return [...Array(targetNumber).keys()].map(() => ["wcb/slider-child"]);
	}, [general_general.numberofTestimonials]);

	// Memoized child component to prevent multiple renders
	const MemoizedChildBlock = useMemo(() => {
		return React.memo(({ block, isSelected, onSelect, index}: any) => {
			const blockType = wp.blocks?.getBlockType?.(block.name);
			const BlockEdit = blockType?.edit;
			
			return (
				<div className="wcb-slider__item" 
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
		}
	)}, []);

	const renderSliderContent = useCallback(() => {
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
			autoplaySpeed,
			slidesToShow: Number(currentColumns) || 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			dots: showArrowsDots !== "Arrow",
			arrows: showArrowsDots !== "Dot",
			adaptiveHeight: adaptiveHeight,
			pauseOnHover: hoverpause,
		};

		// If no inner blocks or blocks count doesn't match target, show template
		const targetNumber = general_general.numberofTestimonials || 3;
		// If no inner blocks, show template  
		if (innerBlocks.length === 0) {
			return (
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={innerBlocksTemplate}
					templateLock={false}
					renderAppender={isSelected ? InnerBlocks.DefaultBlockAppender : undefined}
				/>
			);
		}

		// Show slider with individual child blocks
		return (
			<Slider {...settings} 
				afterChange={(e) => {
					console.log('Slider afterChange - selecting parent');
					setIsParentSelected(true);
					setSelectedChildId(null);
				}}
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
		);
	}, [
		innerBlocks,
		innerBlocksTemplate,
		isSelected,
		handleChildSelect,
		isParentSelected,
		selectedChildId
	]);

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
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

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
				onClick={(e) => {
					// Nếu click trực tiếp vào div cha (không phải con)
					if (e.target === e.currentTarget) {
						console.log('Parent: Selecting parent block');
						setIsParentSelected(true);
						setSelectedChildId(null);
					}
				}}
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
