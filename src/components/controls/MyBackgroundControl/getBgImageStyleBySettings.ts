import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	AttrsTypeForBackground,
	BgImageAttachment,
	BgImageFocalPoint,
	BgImageRepeat,
	BgImageSize,
} from "./types";

interface Params extends AttrsTypeForBackground {
	deviceType: ResponsiveDevices;
}

const getBgImageStyleBySettings = (params: Params): React.CSSProperties => {
	const {
		imageData_Desktop,
		imageData_Mobile,
		imageData_Tablet,
		bgImageRepeat_Desktop,
		bgImageRepeat_Tablet,
		bgImageRepeat_Mobile,
		bgImageAttachment_Desktop,
		bgImageAttachment_Tablet,
		bgImageAttachment_Mobile,
		bgImageSize_Desktop,
		bgImageSize_Tablet,
		bgImageSize_Mobile,
		focalPoint_Desktop,
		focalPoint_Tablet,
		focalPoint_Mobile,
		//
		deviceType,
	} = params;

	let SRC = imageData_Desktop.mediaUrl;
	let BG_REPEAT: BgImageRepeat = bgImageRepeat_Desktop;
	let BG_ATTACHMENT: BgImageAttachment = bgImageAttachment_Desktop;
	let BG_SIZE: BgImageSize = bgImageSize_Desktop;
	let BG_FOCAL: BgImageFocalPoint = focalPoint_Desktop;
	//

	if (deviceType === "Tablet") {
		SRC = imageData_Tablet?.mediaUrl || imageData_Desktop.mediaUrl;
		BG_REPEAT = bgImageRepeat_Tablet || bgImageRepeat_Desktop;
		BG_ATTACHMENT = bgImageAttachment_Tablet || bgImageAttachment_Desktop;
		BG_SIZE = bgImageSize_Tablet || bgImageSize_Desktop;
		BG_FOCAL = focalPoint_Tablet || focalPoint_Desktop;
	}
	if (deviceType === "Mobile") {
		SRC =
			imageData_Mobile?.mediaUrl ||
			imageData_Tablet?.mediaUrl ||
			imageData_Desktop.mediaUrl;
		BG_REPEAT =
			bgImageRepeat_Mobile || bgImageRepeat_Tablet || bgImageRepeat_Desktop;
		BG_ATTACHMENT =
			bgImageAttachment_Mobile ||
			bgImageAttachment_Tablet ||
			bgImageAttachment_Desktop;
		BG_SIZE = bgImageSize_Mobile || bgImageSize_Tablet || bgImageSize_Desktop;
		BG_FOCAL = focalPoint_Mobile || focalPoint_Tablet || focalPoint_Desktop;
	}

	let BG_POSITION = `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%`;

	return {
		backgroundImage: `url(${SRC})`,
		backgroundPosition: BG_POSITION,
		backgroundSize: BG_SIZE,
		backgroundAttachment: BG_ATTACHMENT,
		backgroundRepeat: BG_REPEAT,
	};
};

export default getBgImageStyleBySettings;
