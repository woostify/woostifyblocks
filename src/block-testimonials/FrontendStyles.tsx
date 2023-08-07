import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}
//
export function initCarouselForWcbTestimonials(div: Element, props: Props) {
	const dataUniqueid = div.getAttribute("data-uniqueid") || "";

	let $ = jQuery;
	if (typeof jQuery !== "function") {
		return;
	}
	const {
		animationDuration,
		autoplaySpeed,
		hoverpause,
		isAutoPlay,
		rewind,
		showArrowsDots,
		adaptiveHeight,
	} = props.general_carousel;
	const { colGap, columns, numberofTestimonials, textAlignment } =
		props.general_general;

	const {
		value_Desktop: col_desktop,
		value_Tablet: col_tablet,
		value_Mobile: col_mobile,
	} = getValueFromAttrsResponsives(columns);

	const settings = {
		infinite: rewind,
		speed: animationDuration || 500,
		autoplay: isAutoPlay,
		autoplaySpeed,
		//
		slidesToShow: col_desktop,
		slidesToScroll: 1,
		prevArrow: `<button type="button" class="slick-arrow slick-prev">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
		</button>`,
		nextArrow: `<button type="button" class="slick-arrow slick-next">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
		</button>`,

		dots: showArrowsDots !== "Arrow",
		arrows: showArrowsDots !== "Dot",
		adaptiveHeight,
		pauseOnHover: hoverpause,
		responsive: [
			{
				breakpoint: parseInt(DEMO_WCB_GLOBAL_VARIABLES.media_desktop),
				settings: {
					slidesToShow: col_tablet,
				},
			},
			{
				breakpoint: parseInt(DEMO_WCB_GLOBAL_VARIABLES.media_tablet),
				settings: {
					slidesToShow: col_mobile,
				},
			},
		],
	};
	// @ts-ignore
	$(`.${dataUniqueid} .wcb-testimonials__wrap-items`)?.slick?.(settings);
}
