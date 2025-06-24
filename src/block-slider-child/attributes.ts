import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	content: string;
	name: string;
	callToAction: string;
	//
	image: MediaUploadData;
	rating: number;
	//
}

const blockAttrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF SLIDER CHILD CONTENT HERE
	content: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__content",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	name: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__name",
		default: "Slider",
	},
	callToAction: {
		type: "string",
		source: "html",
		selector: ".wcb-slider-child__company",
		default: "Read More",
	},
	image: {
		type: "object",
		default: INIT_IMAGE_DATA_UPLOAD_DEMO,
	},
	rating: {
		type: "number",
		default: 5,
	},

	// ADVANCE
};

export default blockAttrs; 