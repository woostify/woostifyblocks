import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import React, { useEffect, FC, useCallback, useRef } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbTestimonialsPanelGeneral from "./WcbSliderPanelGeneral";
import WcbTestimonialsPanelImages from "./WcbSliderPanelImages";
import WcbTestimonialsPanelCarousel from "./WcbSliderPanelCarousel";
import WcbTestimonialsPanel_StyleName from "./WcbSliderPanel_StyleName";
import WcbTestimonialsPanel_StyleContent from "./WcbSliderPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany from "./WcbSliderPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage from "./WcbSliderPanel_StyleImage";
import WcbTestimonialsPanel_StyleArrowDots from "./WcbSliderPanel_StyleArrowDots";
import WcbTestimonialsPanel_StyleBackground from "./WcbSliderPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension from "./WcbSliderPanel_StyleDimension";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_general,
		general_images,
		general_carousel,
		style_name,
		style_content,
		style_company,
		style_image,
		style_arrowAndDots,
		style_backgroundAndBorder,
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

	// Get inner blocks and selection state for Spectra-like editing
	const { innerBlocks, selectedBlockClientId } = useSelect((select: any) => {
		const { getBlocks, getSelectedBlockClientId } = select("core/block-editor");
		return {
			innerBlocks: getBlocks(clientId) || [],
			selectedBlockClientId: getSelectedBlockClientId(),
		};
	}, [clientId]);

	const { selectBlock } = useDispatch("core/block-editor") as any;

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbTestimonialsPanelGeneral
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

						<WcbTestimonialsPanelImages
							onToggle={() => handleTogglePanel("General", "PanelImages")}
							initialOpen={tabGeneralIsPanelOpen === "PanelImages"}
							opened={tabGeneralIsPanelOpen === "PanelImages" || undefined}
							setAttr__={(data) => {
								setAttributes({ general_images: data });
							}}
							panelData={general_images}
							numberOfItems={innerBlocks.length}
						/>

						<WcbTestimonialsPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={tabGeneralIsPanelOpen === "Carousel"}
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
							panelData={style_name}
						/>
						<WcbTestimonialsPanel_StyleContent
							onToggle={() => handleTogglePanel("Styles", "_StyleContent")}
							initialOpen={tabStylesIsPanelOpen === "_StyleContent"}
							opened={tabStylesIsPanelOpen === "_StyleContent" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_content: data });
							}}
							panelData={style_content}
						/>
						<WcbTestimonialsPanel_StyleCompany
							onToggle={() => handleTogglePanel("Styles", "_StyleCompany")}
							initialOpen={tabStylesIsPanelOpen === "_StyleCompany"}
							opened={tabStylesIsPanelOpen === "_StyleCompany" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_company: data });
							}}
							panelData={style_company}
						/>
						<WcbTestimonialsPanel_StyleImage
							onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
							initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
							opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_image: data });
							}}
							panelData={style_image}
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
						<WcbTestimonialsPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder}
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

	// Render editable slider child - direct inline editing like Spectra
	const renderEditableSliderChild = (block: any, index: number) => {
		const isChildSelected = selectedBlockClientId === block.clientId;
		const blockType = wp.blocks?.getBlockType?.(block.name);
		const BlockEdit = blockType?.edit;
		
		return (
			<div 
				key={block.clientId} 
				className={`wcb-slider__item ${isChildSelected ? 'is-child-selected' : ''}`}
				onClick={(e) => {
					// When clicking on child, select it to show its inspector controls
					if (!isChildSelected) {
						e.stopPropagation();
						selectBlock(block.clientId);
					}
				}}
			>
				<div className="wcb-slider__item-background">
					<div className="wcb-slider__item-wrap-inner">
						<div className="wcb-slider__item-inner">
							<div className={`wcb-slider-child__wrap ${block.attributes?.uniqueId || ''}`}>
								{/* Direct inline editing - render the actual block edit component */}
								<BlockEdit
									attributes={block.attributes}
									setAttributes={(newAttributes: any) => {
										wp.data.dispatch("core/block-editor").updateBlockAttributes(
											block.clientId,
											newAttributes
										);
									}}
									clientId={block.clientId}
									isSelected={isChildSelected}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const renderEditContent = () => {
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

		// If no inner blocks, show template like FAQ block
		if (innerBlocks.length === 0) {
			return (
				<div className="wcb-slider__wrap-items">
					<InnerBlocks
						allowedBlocks={["wcb/slider-child"]}
						template={[
							["wcb/slider-child"],
							["wcb/slider-child"],
							["wcb/slider-child"],
						]}
						templateLock={false}
						renderAppender={isSelected ? InnerBlocks.DefaultBlockAppender : undefined}
					/>
				</div>
			);
		}

		// Spectra-like experience: Always show slider with editable content
		return (
			<div className="wcb-slider__wrap-items">
				<Slider {...settings}>
					{innerBlocks.map(renderEditableSliderChild)}
				</Slider>
				{/* Hidden InnerBlocks for appender when selected */}
				{isSelected && (
					<div style={{ display: 'none' }}>
						<InnerBlocks
							allowedBlocks={["wcb/slider-child"]}
							templateLock={false}
							renderAppender={() => <InnerBlocks.DefaultBlockAppender />}
						/>
					</div>
				)}
			</div>
		);
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_dimension,
			general_carousel,
			general_images,
			style_arrowAndDots,
			style_backgroundAndBorder,
			style_company,
			style_content,
			style_image,
			style_name,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_image,
		style_name,
		advance_motionEffect,
	]);

	// Check if a child block is selected
	const isChildBlockSelected = innerBlocks.some(block => block.clientId === selectedBlockClientId);
	const shouldShowParentControls = isSelected || (!isChildBlockSelected && selectedBlockClientId === clientId);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider__wrap ${uniqueId} ${isChildBlockSelected ? 'has-child-selected' : ''}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS - Only show when parent is selected, not when child is selected */}
				{shouldShowParentControls && (
					<HOCInspectorControls
						renderTabPanels={renderTabBodyPanels}
						uniqueId={uniqueId}
					/>
				)}

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT */}
				{renderEditContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
