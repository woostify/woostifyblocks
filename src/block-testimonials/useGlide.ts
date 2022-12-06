import X from "@glidejs/glide";
import { useMemo, useEffect, useState } from "@wordpress/element";
import React from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WCB_TESTIMONIALS_PANEL_CAROUSEL } from "./WcbTestimonialsPanelCarousel";
import { WCB_TESTIMONIALS_PANEL_GENERAL } from "./WcbTestimonialsPanelGeneral";

interface Params {
	general_general: WCB_TESTIMONIALS_PANEL_GENERAL;
	general_carousel: WCB_TESTIMONIALS_PANEL_CAROUSEL;
	UNIQUE_ID: string;
	isSelected?: boolean;
	ref?: React.RefObject<HTMLDivElement>;
}

// let SLIDER: Glide | null = null;
const useGlide = ({
	general_general,
	general_carousel,
	UNIQUE_ID,
	isSelected,
	ref,
}: Params) => {
	const {
		value_Desktop: colGap_Desktop,
		value_Tablet: colGap_Tablet,
		value_Mobile: colGap_Mobile,
	} = getValueFromAttrsResponsives(general_general.colGap);
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const [SLIDER, setSLIDER] = useState<Glide>();

	const options: Partial<Glide.Options> = useMemo(
		() => ({
			keyboard: false,
			perView: general_general.columns.Desktop || 1,
			gap: colGap_Desktop || 0,
			bound: true,
			autoplay: general_carousel.isAutoPlay
				? general_carousel.autoplaySpeed
				: false,
			hoverpause: general_carousel.hoverpause,
			animationDuration: general_carousel.animationDuration || 1,
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
		}),
		[general_general, general_carousel, ref, UNIQUE_ID]
	);

	useEffect(() => {
		if (isSelected) {
			SLIDER?.pause();
		} else {
			SLIDER?.play();
		}
	}, [isSelected]);

	//
	//
	//
	//
	useEffect(() => {
		let DOC = window.document;
		let GLIDE = window.Glide;

		const { ownerDocument } = ref?.current || {};
		DOC = ownerDocument;
		const { defaultView } = ownerDocument;
		GLIDE = defaultView?.Glide;

		// defaultView.jQuery(".your-class").slick({});

		console.log(111, { DOC, ownerDocument, deviceType });

		const glideEL = DOC.querySelector(`[data-uniqueid=${UNIQUE_ID}] .glide`);

		if (!GLIDE || (!glideEL && !ref)) {
			return () => {};
		}

		const slider = new GLIDE(`[data-uniqueid=${UNIQUE_ID}] .glide`, options);

		setSLIDER(slider);

		setTimeout(() => {
			slider?.mount();
		}, 200);

		return () => {
			slider?.destroy();
		};
	}, [options, UNIQUE_ID, ref, deviceType]);

	return null;
};

export default useGlide;
