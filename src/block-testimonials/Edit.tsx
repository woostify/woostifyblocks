import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { TestimonialItem, WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbTestimonialsPanelGeneral from "./WcbTestimonialsPanelGeneral";
import WcbTestimonialsPanelImages from "./WcbTestimonialsPanelImages";
import WcbTestimonialsPanelCarousel from "./WcbTestimonialsPanelCarousel";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import WcbTestimonialsPanel_StyleName from "./WcbTestimonialsPanel_StyleName";
import WcbTestimonialsPanel_StyleContent from "./WcbTestimonialsPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany from "./WcbTestimonialsPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage from "./WcbTestimonialsPanel_StyleImage";
import WcbTestimonialsPanel_StyleArrowDots from "./WcbTestimonialsPanel_StyleArrowDots";
import WcbTestimonialsPanel_StyleBackground from "./WcbTestimonialsPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension from "./WcbTestimonialsPanel_StyleDimension";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

const TESTIMONIAL_ITEM_DEMO: TestimonialItem = {
	name: "Drink Water",
	companyName: "CEO of Meta",
	content:
		"I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
};

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		testimonials,
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
	} = attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
	//

	const options: Glide.Options = {
		perView: general_general.columns.Desktop || 1,
		gap: 32,
		bound: true,
		autoplay: general_carousel.isAutoPlay
			? general_carousel.autoplaySpeed
			: false,
		hoverpause: general_carousel.hoverpause,
		animationDuration: general_carousel.animationDuration || undefined,
		rewind: general_carousel.rewind,
		breakpoints: {
			[parseInt(DEMO_WCB_GLOBAL_VARIABLES.media_desktop)]: {
				perView: general_general.columns.Tablet || 1,
			},
			[parseInt(DEMO_WCB_GLOBAL_VARIABLES.media_tablet)]: {
				perView: general_general.columns.Mobile || 1,
			},
		},
	};

	useEffect(() => {
		const glideEL = document.querySelector(
			`[data-uniqueid=${UNIQUE_ID}] .glide`
		);
		if (!glideEL) {
			return;
		}

		const slider = new Glide(`[data-uniqueid=${UNIQUE_ID}] .glide`, options);
		console.log(333, { slider });
		slider.mount();
		// @ts-ignore
		return () => slider.destroy();
	}, [options, UNIQUE_ID]);

	//
	let CURRENT_DATA = [
		...Array(general_general.numberofTestimonials || 3).keys(),
	].map((_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO);

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
								setAttributes({ general_general: data });
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

						<WcbTestimonialsPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={tabGeneralIsPanelOpen === "Carousel"}
							opened={tabGeneralIsPanelOpen === "Carousel" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_carousel: data });
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
				onChange={(content) =>
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
					})
				}
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
				onChange={(content) =>
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
					})
				}
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
				onChange={(content) =>
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
					})
				}
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

	const renderTestimonialItem = (item: TestimonialItem, index: number) => {
		const { imagePosition } = general_images;
		return (
			<li
				className="glide__slide wcb-testimonials__item"
				key={index + "-" + item.name}
			>
				{/* IMAGE */}
				{imagePosition === "left" && renderTestimonialItemImage(item, index)}

				<div>
					{/* IMAGE */}
					{imagePosition === "top" && renderTestimonialItemImage(item, index)}

					{/* CONTENT */}
					{renderTestimonialItemContent(item, index)}

					<div className="wcb-testimonials__item-body">
						{/* IMAGE */}
						{imagePosition === "bottom" &&
							renderTestimonialItemImage(item, index)}

						{/* NAME */}
						{renderTestimonialItemName(item, index)}

						{/* COMPANY */}
						{renderTestimonialItemCompany(item, index)}
					</div>
				</div>

				{/* IMAGE */}
				{imagePosition === "right" && renderTestimonialItemImage(item, index)}
			</li>
		);
	};

	const renderEditContent = () => {
		return (
			<div className="glide">
				{/* CONTENT */}
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{CURRENT_DATA.map(renderTestimonialItem)}
					</ul>
				</div>

				{/* ARROW */}
				{(general_carousel.showArrowsDots === "Both" ||
					general_carousel.showArrowsDots === "Arrow") && (
					<div className="glide__arrows" data-glide-el="controls">
						<button
							className="glide__arrow glide__arrow--left"
							data-glide-dir="<"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						<button
							className="glide__arrow glide__arrow--right"
							data-glide-dir=">"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				)}

				{/* DOTS */}
				{(general_carousel.showArrowsDots === "Both" ||
					general_carousel.showArrowsDots === "Dot") && (
					<div className="glide__bullets" data-glide-el="controls[nav]">
						{CURRENT_DATA.map((item, index) => {
							return (
								<button
									className="glide__bullet"
									key={index + "-" + item.name}
									data-glide-dir={`=${index}`}
								></button>
							);
						})}
					</div>
				)}
			</div>
		);
	};

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-testimonials__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />

				{/* CSS IN JS */}
				<GlobalCss {...attributes} />

				{/* CHILD CONTENT  */}
				{renderEditContent()}
			</div>
		</CacheProvider>
	);
};

export default Edit;
