import {
	INIT_FOCAL_POINT_DEMO,
	INIT_IMAGE_DATA_UPLOAD_DEMO,
	INIT_VIDEO_DATA_UPLOAD_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import {
	AttrsTypeForBackground,
	BackgroundControlType,
	BgImageAttachment,
	BgImageFocalPoint,
	BgImageOverlayType,
	BgImageRepeat,
	BgImageSize,
} from "../components/controls/MyBackgroundControl/types";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";
import { VideoMediaUploadData } from "../components/controls/MyVideoUploadCheck";

/* eslint-disable no-undef */

export interface AttrDefaultType {
	type: string;
	default?: any;
	source?: string;
	selector?: string;
}
const ATTR_INIT_DEMO = {};

type GenericAttrType<T> = Omit<AttrDefaultType, "default"> & {
	default?: T;
};
export interface AttrForBackgroundSettings {
	color: AttrDefaultType;
	bgColor: AttrDefaultType;
	bgType: GenericAttrType<BackgroundControlType>;
	gradient: AttrDefaultType;
	//
	overlayType: GenericAttrType<BgImageOverlayType>;
	overlayGradient: AttrDefaultType;
	overlayColor: AttrDefaultType;
	//
	imageData_Desktop: GenericAttrType<MediaUploadData>;
	imageData_Tablet: GenericAttrType<MediaUploadData>;
	imageData_Mobile: GenericAttrType<MediaUploadData>;
	//
	focalPoint_Desktop: GenericAttrType<BgImageFocalPoint>;
	focalPoint_Tablet: GenericAttrType<BgImageFocalPoint>;
	focalPoint_Mobile: GenericAttrType<BgImageFocalPoint>;
	//
	bgImageAttachment_Desktop: GenericAttrType<BgImageAttachment>;
	bgImageAttachment_Tablet: GenericAttrType<BgImageAttachment>;
	bgImageAttachment_Mobile: GenericAttrType<BgImageAttachment>;
	//
	bgImageRepeat_Desktop: GenericAttrType<BgImageRepeat>;
	bgImageRepeat_Tablet: GenericAttrType<BgImageRepeat>;
	bgImageRepeat_Mobile: GenericAttrType<BgImageRepeat>;
	//
	bgImageSize_Desktop: GenericAttrType<BgImageSize>;
	bgImageSize_Tablet: GenericAttrType<BgImageSize>;
	bgImageSize_Mobile: GenericAttrType<BgImageSize>;
	//
	videoData: GenericAttrType<VideoMediaUploadData>;
}

export interface Blokc1Attrs extends AttrsTypeForBackground {
	uniqueId: string;
	message: string;
	color: string;
}

export const ATTRS_FOR_BACKGROUND_SETTINGS: AttrForBackgroundSettings = {
	bgType: {
		type: "string",
		default: "color",
	},
	gradient: {
		type: "string",
		default:
			"linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",
	},
	bgColor: {
		type: "string",
		default: "#fff",
	},
	color: {
		type: "string",
		default: "#000",
	},
	overlayType: {
		type: "string",
		default: "none",
	},
	overlayGradient: {
		type: "string",
		default: "",
	},
	overlayColor: {
		type: "string",
		default: "",
	},
	//
	imageData_Desktop: {
		type: "object",
		default: INIT_IMAGE_DATA_UPLOAD_DEMO,
	},
	imageData_Tablet: {
		type: "object",
	},
	imageData_Mobile: {
		type: "object",
	},
	//
	focalPoint_Desktop: {
		type: "object",
		default: INIT_FOCAL_POINT_DEMO,
	},
	focalPoint_Tablet: {
		type: "object",
	},
	focalPoint_Mobile: {
		type: "object",
	},
	//
	bgImageAttachment_Desktop: {
		type: "string",
		default: "local",
	},
	bgImageAttachment_Tablet: {
		type: "string",
	},
	bgImageAttachment_Mobile: {
		type: "string",
	},
	//
	bgImageRepeat_Desktop: {
		type: "string",
		default: "no-repeat",
	},
	bgImageRepeat_Tablet: {
		type: "string",
	},
	bgImageRepeat_Mobile: {
		type: "string",
	},
	//
	bgImageSize_Desktop: {
		type: "string",
		default: "cover",
	},
	bgImageSize_Tablet: {
		type: "string",
	},
	bgImageSize_Mobile: {
		type: "string",
	},
	//
	videoData: {
		type: "object",
		default: INIT_VIDEO_DATA_UPLOAD_DEMO,
	},
};

const blokc1Attrs = {
	uniqueId: {
		type: "string",
		default: "",
	},
	message: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Clik to edit heading here!",
	},
	...ATTRS_FOR_BACKGROUND_SETTINGS,
};

export default blokc1Attrs;
