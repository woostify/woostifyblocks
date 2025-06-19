import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import { TESTIMONIAL_ITEM_DEMO } from "./Edit";
import {
	WCB_TESTIMONIALS_PANEL_CAROUSEL,
	WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO,
} from "./WcbTestimonialsPanelCarousel";
import {
	WCB_TESTIMONIALS_PANEL_GENERAL,
	WCB_TESTIMONIALS_PANEL_GENERAL_DEMO,
} from "./WcbTestimonialsPanelGeneral";
import {
	WCB_TESTIMONIALS_PANEL_IMAGES,
	WCB_TESTIMONIALS_PANEL_IMAGES_DEMO,
} from "./WcbTestimonialsPanelImages";
import {
	WCB_TESTIMONIALS_PANEL_RATING,
	WCB_TESTIMONIALS_PANEL_RATING_DEMO,
} from "./WcbTestimonialsPanelRating";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS,
	WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
} from "./WcbTestimonialsPanel_StyleArrowDots";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER,
	WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
} from "./WcbTestimonialsPanel_StyleBackground";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_COMPANY,
	WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO,
} from "./WcbTestimonialsPanel_StyleCompany";
import { WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO } from "./WcbTestimonialsPanel_StyleContent";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION,
	WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbTestimonialsPanel_StyleDimension";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_IMAGE,
	WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbTestimonialsPanel_StyleImage";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_RATING,
	WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
} from "./WcbTestimonialsPanel_StyleRating";
import {
	WCB_TESTIMONIALS_PANEL_STYLE_NAME,
	WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO,
} from "./WcbTestimonialsPanel_StyleName";

export interface TestimonialItem {
	content: string;
	name: string;
	companyName: string;
}

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	testimonials: TestimonialItem[];
	//
	general_general: WCB_TESTIMONIALS_PANEL_GENERAL;
	general_images: WCB_TESTIMONIALS_PANEL_IMAGES;
	general_rating: WCB_TESTIMONIALS_PANEL_RATING;
	general_carousel: WCB_TESTIMONIALS_PANEL_CAROUSEL;
	//
	style_name: WCB_TESTIMONIALS_PANEL_STYLE_NAME;
	style_content: WCB_TESTIMONIALS_PANEL_STYLE_NAME;
	style_company: WCB_TESTIMONIALS_PANEL_STYLE_COMPANY;
	style_image: WCB_TESTIMONIALS_PANEL_STYLE_IMAGE;
	style_rating: WCB_TESTIMONIALS_PANEL_STYLE_RATING;
	style_arrowAndDots: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS;
	style_backgroundAndBorder: WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER;
	style_dimension: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	testimonials: {
		type: "array",
		default: [
			TESTIMONIAL_ITEM_DEMO,
			TESTIMONIAL_ITEM_DEMO,
			TESTIMONIAL_ITEM_DEMO,
		],
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_GENERAL_DEMO,
	},
	general_images: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_IMAGES_DEMO,
	},
	general_rating: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_RATING_DEMO,
	},
	general_carousel: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO,
	},
	//
	style_name: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO,
	},
	style_content: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO,
	},
	style_company: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO,
	},
	style_image: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
	},
	style_rating: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
	},
	style_arrowAndDots: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
	},
	style_backgroundAndBorder: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},
	style_dimension: {
		type: "object",
		default: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
	},
	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;
