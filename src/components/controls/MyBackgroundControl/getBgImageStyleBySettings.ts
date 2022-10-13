import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import { BackgroundControlData } from "./MyBackgroundControl";
import {
	BgImageAttachment,
	BgImageFocalPoint,
	BgImageRepeat,
	BgImageSize,
} from "./types";

interface Params
	extends Pick<
		BackgroundControlData,
		| "bgImageAttachment"
		| "bgImageRepeat"
		| "bgImageSize"
		| "focalPoint"
		| "imageData"
	> {
	deviceType: ResponsiveDevices;
}

const getBgImageStyleBySettings = (params: Params): React.CSSProperties => {
	const {
		bgImageAttachment,
		bgImageRepeat,
		bgImageSize,
		focalPoint,
		imageData,
		//
		deviceType,
	} = params;

	const SRC: string =
		imageData[deviceType]?.mediaUrl ||
		imageData.Tablet?.mediaUrl ||
		imageData.Desktop?.mediaUrl;
	const BG_REPEAT: BgImageRepeat =
		bgImageRepeat[deviceType] || bgImageRepeat.Tablet || bgImageRepeat.Desktop;
	const BG_ATTACHMENT: BgImageAttachment =
		bgImageAttachment[deviceType] ||
		bgImageAttachment.Tablet ||
		bgImageAttachment.Desktop;
	const BG_SIZE: BgImageSize =
		bgImageSize[deviceType] || bgImageSize.Tablet || bgImageSize.Desktop;
	const BG_FOCAL: BgImageFocalPoint =
		focalPoint[deviceType] || focalPoint.Tablet || focalPoint.Desktop;

	const BG_POSITION = `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%`;

	return {
		backgroundImage: `url(${SRC})`,
		backgroundPosition: BG_POSITION,
		backgroundSize: BG_SIZE,
		backgroundAttachment: BG_ATTACHMENT,
		backgroundRepeat: BG_REPEAT,
	};
};

export default getBgImageStyleBySettings;
