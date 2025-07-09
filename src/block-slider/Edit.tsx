	import { __ } from "@wordpress/i18n";
	import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
	import { useDispatch, useSelect } from "@wordpress/data";
	import { createBlock } from "@wordpress/blocks";
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
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
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
			const targetNumber = general_general.numberofTestimonials || 3;
			const currentNumber = innerBlocks.length;

			if (currentNumber === targetNumber) {
				return; // No change needed
			}

			if (currentNumber < targetNumber) {
				// Add blocks
				const blocksToAdd = targetNumber - currentNumber;
				for (let i = 0; i < blocksToAdd; i++) {
					const newBlock = wp.blocks.createBlock("wcb/slider-child");
					insertBlock(newBlock, innerBlocks.length + i, clientId);
				}
			} else if (currentNumber > targetNumber) {
				// Remove blocks from the end
				const blocksToRemove = currentNumber - targetNumber;
				const clientIdsToRemove = innerBlocks.slice(-blocksToRemove);
				clientIdsToRemove.forEach(childClientId => {
					removeBlock(childClientId);
				});
			}
		}, [general_general.numberofTestimonials, innerBlocks.length, clientId, insertBlock, removeBlock]);

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

		// InnerBlocks configuration
		const ALLOWED_BLOCKS = ["wcb/slider-child"];
		
		const innerBlocksTemplate: any[] = [
			...Array(general_general.numberofTestimonials || 3).keys()
		].map(() => ["wcb/slider-child"]);

	// Memoized child component to prevent multiple renders
	const MemoizedChildBlock = useMemo(() => {
		return React.memo(({ block, isSelected, onSelect }: any) => {
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
									{BlockEdit && (
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
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}, []);

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
				autoplay: false,
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
						setIsParentSelected(true);
						setSelectedChildId(null);
					}}
				>
				{innerBlocks.map((block) => (
					<MemoizedChildBlock
						key={block.clientId}
						block={block}
						isSelected={!isParentSelected && (selectedChildId != null && selectedChildId === block.clientId)}
						onSelect={handleChildSelect}
					/>
				))}
				</Slider>
			);
	}, [
		general_carousel,
		general_general,
		deviceType,
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

		return (
			<MyCacheProvider uniqueKey={clientId}>
				<div
					{...wrapBlockProps}
					className={`${wrapBlockProps?.className} wcb-slider__wrap ${uniqueId}`}
					data-uniqueid={uniqueId}
					onClick={(e) => {
						// Nếu click trực tiếp vào div cha (không phải con)
						if (e.target === e.currentTarget) {
							setIsParentSelected(true);
							setSelectedChildId(null);
						}
					}}
				>
					{/* CONTROL SETTINGS - Only show when parent is selected and no child is selected */}
					{isParentSelected && (
						<HOCInspectorControls
							renderTabPanels={renderTabBodyPanels}
							uniqueId={uniqueId}
						/>
					)}
					
					{/* CSS IN JS */}
					<GlobalCss {...WcbAttrsForSave()} />

					{/* CHILD CONTENT */}
					<div className="wcb-slider__wrap-items">
						{renderSliderContent()}
					</div>
				</div>
			</MyCacheProvider>
		);
	};

	export default Edit;
