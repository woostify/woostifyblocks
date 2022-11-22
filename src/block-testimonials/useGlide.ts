import Glide from "@glidejs/glide";
import React, { useEffect } from "react";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WCB_TESTIMONIALS_PANEL_CAROUSEL } from "./WcbTestimonialsPanelCarousel";
import { WCB_TESTIMONIALS_PANEL_GENERAL } from "./WcbTestimonialsPanelGeneral";

interface Params {
	general_general: WCB_TESTIMONIALS_PANEL_GENERAL;
	general_carousel: WCB_TESTIMONIALS_PANEL_CAROUSEL;
	UNIQUE_ID: string;
}

const useGlide = ({ general_general, general_carousel, UNIQUE_ID }: Params) => {
	const {
		value_Desktop: colGap_Desktop,
		value_Tablet: colGap_Tablet,
		value_Mobile: colGap_Mobile,
	} = getValueFromAttrsResponsives(general_general.colGap);

	const options: Glide.Options = {
		perView: general_general.columns.Desktop || 1,
		gap: colGap_Desktop,
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
				gap: colGap_Tablet,
			},
			[parseInt(DEMO_WCB_GLOBAL_VARIABLES.media_tablet)]: {
				perView: general_general.columns.Mobile || 1,
				gap: colGap_Mobile,
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
		console.log(333, { slider, options, UNIQUE_ID });
		slider.mount();
		// @ts-ignore
		return () => slider.destroy();
	}, [options, UNIQUE_ID]);

	return null;
};

export default useGlide;
