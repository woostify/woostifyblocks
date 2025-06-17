import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useRef } from "react";
import { TestimonialItem, WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbTestimonialsPanelGeneral from "./WcbTestimonialsPanelGeneral";
import WcbTestimonialsPanelImages from "./WcbTestimonialsPanelImages";
import WcbTestimonialsPanelRating from "./WcbTestimonialsPanelRating";
import WcbTestimonialsPanelCarousel from "./WcbTestimonialsPanelCarousel";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import WcbTestimonialsPanel_StyleName from "./WcbTestimonialsPanel_StyleName";
import WcbTestimonialsPanel_StyleContent from "./WcbTestimonialsPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany from "./WcbTestimonialsPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage from "./WcbTestimonialsPanel_StyleImage";
import WcbTestimonialsPanel_StyleRating from "./WcbTestimonialsPanel_StyleRating";
import WcbTestimonialsPanel_StyleArrowDots from "./WcbTestimonialsPanel_StyleArrowDots";
import WcbTestimonialsPanel_StyleBackground from "./WcbTestimonialsPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension from "./WcbTestimonialsPanel_StyleDimension";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import _, { forEach } from "lodash";
import { useMemo } from "@wordpress/element";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

export const TESTIMONIAL_ITEM_DEMO: TestimonialItem = {
	name: "Drink Water",
	companyName: "CEO of Meta",
	content:
		"I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
};

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
		testimonials,
		general_general,
		general_images,
		general_rating,
		general_carousel,
		style_name,
		style_content,
		style_company,
		style_image,
		style_rating,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS

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
	//

	let CURRENT_DATA = useMemo(
		() =>
			[...Array(general_general.numberofTestimonials || 3).keys()].map(
				(_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO
			),
		[general_general.numberofTestimonials, testimonials]
	);

	//

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
							//
							setAttr__={(data) => {
								if (
									data.numberofTestimonials !==
									general_general.numberofTestimonials
								) {
									const newtestimonials = [
										...Array(general_general.numberofTestimonials || 3).keys(),
									].map(
										(_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO
									);
									setAttributes({
										general_general: data,
										testimonials: newtestimonials,
									});
								} else {
									setAttributes({ general_general: data });
								}
							}}
							panelData={general_general}
						/>

						<WcbTestimonialsPanelImages
							onToggle={() => handleTogglePanel("General", "PanelImages")}
							initialOpen={tabGeneralIsPanelOpen === "PanelImages"}
							opened={tabGeneralIsPanelOpen === "PanelImages" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_images: data });
							}}
							panelData={general_images}
							numberOfItems={general_general.numberofTestimonials}
						/>

						<WcbTestimonialsPanelRating
							onToggle={() => handleTogglePanel("General", "PanelRating")}
							initialOpen={tabGeneralIsPanelOpen === "PanelRating"}
							opened={tabGeneralIsPanelOpen === "PanelRating" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_rating: data });
							}}
							panelData={general_rating}
							numberOfItems={general_general.numberofTestimonials}
						/>

						<WcbTestimonialsPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={tabGeneralIsPanelOpen === "Carousel"}
							opened={tabGeneralIsPanelOpen === "Carousel" || undefined}
							//
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
							//
							setAttr__={(data) => {
								setAttributes({ style_name: data });
							}}
							panelData={style_name}
						/>
						<WcbTestimonialsPanel_StyleContent
							onToggle={() => handleTogglePanel("Styles", "_StyleContent")}
							initialOpen={tabStylesIsPanelOpen === "_StyleContent"}
							opened={tabStylesIsPanelOpen === "_StyleContent" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_content: data });
							}}
							panelData={style_content}
						/>
						<WcbTestimonialsPanel_StyleCompany
							onToggle={() => handleTogglePanel("Styles", "_StyleCompany")}
							initialOpen={tabStylesIsPanelOpen === "_StyleCompany"}
							opened={tabStylesIsPanelOpen === "_StyleCompany" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_company: data });
							}}
							panelData={style_company}
						/>
						<WcbTestimonialsPanel_StyleImage
							onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
							initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
							opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_image: data });
							}}
							panelData={style_image}
						/>
						<WcbTestimonialsPanel_StyleRating
							onToggle={() => handleTogglePanel("Styles", "_StyleRating")}
							initialOpen={tabStylesIsPanelOpen === "_StyleRating"}
							opened={tabStylesIsPanelOpen === "_StyleRating" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_rating: data });
							}}
							panelData={style_rating}
						/>
						<WcbTestimonialsPanel_StyleArrowDots
							onToggle={() => handleTogglePanel("Styles", "_StyleArrowDots")}
							initialOpen={tabStylesIsPanelOpen === "_StyleArrowDots"}
							opened={tabStylesIsPanelOpen === "_StyleArrowDots" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbTestimonialsPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder}
						/>
						<WcbTestimonialsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
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

	const renderTestimonialItemContent = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials__item-content"
				value={item.content}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									content: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Content of testimonials")}
			/>
		);
	};

	const renderTestimonialItemName = (item: TestimonialItem, index: number) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials__item-name"
				value={item.name}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									name: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Name")}
			/>
		);
	};

	const renderTestimonialItemCompany = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials__item-company"
				value={item.companyName}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									companyName: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Company Name")}
			/>
		);
	};

	const renderTestimonialItemImage = (item: TestimonialItem, index: number) => {
		const { images, isShowImage, imageSize } = general_images;
		const { imageSize: imageSizeAttr } = style_image;
		const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
		const { mediaId, mediaSrcSet } = images[index] || {};
		if (!isShowImage || !mediaId) {
			return null;
		}
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives(imageSizeAttr);
		const url = getImageUrlBySize(images[index], imageSize);
		return (
			<div className="wcb-testimonials__item-image">
				<img
					src={url}
					alt=""
					srcSet={mediaSrcSet}
					sizes={`(max-width: ${media_tablet}) ${value_Mobile}, (max-width: ${media_desktop}) ${value_Tablet}, ${value_Desktop}`}
				/>
			</div>
		);
	};

	const renderTestimonialItemRating = (item: TestimonialItem, index: number) => {
		const { ratings, isShowRating, ratingPosition } = general_rating;
		const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
		if (!isShowRating) {
			return null;
		}
		return (
			<div className="wcb-testimonials__item-rating">
				{ ratings[index] && Array.from({ length: 5 }, (_, i) => {
					const clsActive = i < ratings[index] ? 'active' : '';
					return (
						<span key={i} className={`wcb-star ${clsActive}`}>
							★
						</span>
					);
				})}
			</div>
		);
	};

	const renderTestimonialItem = (item: TestimonialItem, index: number) => {
		const { imagePosition } = general_images;
		const { ratingPosition } = general_rating;
		return (
			<div className="wcb-testimonials__item" key={index + "-"}>
				<div className="wcb-testimonials__item-background">
					<div className=""></div>
					<VideoBackgroundByBgControl
						bgType={style_backgroundAndBorder.background.bgType}
						videoData={style_backgroundAndBorder.background.videoData}
					/>
					<OverlayBackgroundByBgControl
						bgType={style_backgroundAndBorder.background.bgType}
						overlayType={style_backgroundAndBorder.background.overlayType}
					/>
					<div className="wcb-testimonials__item-wrap-inner">
						{/* IMAGE */}
						{imagePosition === "left" &&
							renderTestimonialItemImage(item, index)}

						<div className="wcb-testimonials__item-inner">
							{/* RATING */}
							{ ratingPosition === "top" && 
								renderTestimonialItemRating(item, index) }

							{/* IMAGE */}
							{imagePosition === "top" &&
								renderTestimonialItemImage(item, index)}

							{/* CONTENT */}
							{renderTestimonialItemContent(item, index)}

							{/* RATING */}
							{ ratingPosition === "middle" && 
								renderTestimonialItemRating(item, index) }

							<div className="wcb-testimonials__item-user">
								{/* IMAGE */}
								{imagePosition === "bottom" &&
									renderTestimonialItemImage(item, index)}

								<div className="wcb-testimonials__item-nameandcompany">
									{/* NAME */}
									<div>{renderTestimonialItemName(item, index)}</div>

									{/* COMPANY */}
									{renderTestimonialItemCompany(item, index)}
								</div>
							</div>

							{/* RATING */}
							{ ratingPosition === "bottom" && 
								renderTestimonialItemRating(item, index) }
						</div>

						{/* IMAGE */}
						{imagePosition === "right" &&
							renderTestimonialItemImage(item, index)}
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
			//
			slidesToShow: currentColumns,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,

			dots: showArrowsDots !== "Arrow",
			arrows: showArrowsDots !== "Dot",
			adaptiveHeight: true,
			pauseOnHover: hoverpause,
		};
		return (
			<Slider {...settings}>{CURRENT_DATA.map(renderTestimonialItem)}</Slider>
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
			style_rating,
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
		style_rating,
		style_name,
		advance_motionEffect,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-testimonials__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				{renderEditContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
