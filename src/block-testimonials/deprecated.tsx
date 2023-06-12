import Save__250523 from "./Save__250523";
import Save__100623 from "./Save__100623";
import blokcAttrs from "./attributes";
import { WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO } from "./WcbTestimonialsPanel_StyleImage";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokcAttrs,
		style_image: {
			type: "object",
			default: {
				...WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
				padding: {
					Desktop: {
						top: "0.5rem",
						left: "1rem",
						right: "1rem",
						bottom: "0.5rem",
					},
				},
			},
		},
	},
	save: Save__250523,
};
const v4 = {
	attributes: {
		...blokcAttrs,
		style_image: {
			type: "object",
			default: {
				...WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
				padding: {
					Desktop: {
						top: "0.5rem",
						left: "1rem",
						right: "1rem",
						bottom: "0.5rem",
					},
				},
			},
		},
	},
	save: Save__100623,
};

const deprecated = [v4, v3, v2, v1];

export default deprecated;
