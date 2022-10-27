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
	> {}

const getBgImageStyleBySettings = (params: Params): React.CSSProperties => {
	const {
		bgImageAttachment,
		bgImageRepeat,
		bgImageSize,
		focalPoint,
		imageData,
		//
	} = params;

	const SRC: string =
		imageData.Mobile?.mediaUrl ||
		imageData.Tablet?.mediaUrl ||
		imageData.Desktop?.mediaUrl;
	const SRC__TABLET: string =
		imageData.Tablet?.mediaUrl || imageData.Desktop?.mediaUrl;
	const SRC__DESKTOP: string = imageData.Desktop?.mediaUrl;

	const BG_REPEAT: BgImageRepeat =
		bgImageRepeat.Mobile || bgImageRepeat.Tablet || bgImageRepeat.Desktop;
	const BG_REPEAT__TABLET: BgImageRepeat =
		bgImageRepeat.Tablet || bgImageRepeat.Desktop;
	const BG_REPEAT__DESKTOP: BgImageRepeat = bgImageRepeat.Desktop;

	const BG_ATTACHMENT: BgImageAttachment =
		bgImageAttachment.Mobile ||
		bgImageAttachment.Tablet ||
		bgImageAttachment.Desktop;
	const BG_ATTACHMENT__TABLET: BgImageAttachment =
		bgImageAttachment.Tablet || bgImageAttachment.Desktop;
	const BG_ATTACHMENT__DESKTOP: BgImageAttachment = bgImageAttachment.Desktop;

	const BG_SIZE: BgImageSize =
		bgImageSize.Mobile || bgImageSize.Tablet || bgImageSize.Desktop;
	const BG_SIZE__TABLET: BgImageSize =
		bgImageSize.Tablet || bgImageSize.Desktop;
	const BG_SIZE__DESKTOP: BgImageSize = bgImageSize.Desktop;

	const BG_FOCAL: BgImageFocalPoint =
		focalPoint.Mobile || focalPoint.Tablet || focalPoint.Desktop;
	const BG_FOCAL__TABLET: BgImageFocalPoint =
		focalPoint.Tablet || focalPoint.Desktop;
	const BG_FOCAL__DESKTOP: BgImageFocalPoint = focalPoint.Desktop;

	const BG_POSITION = `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%`;
	const BG_POSITION__TABLET = `${BG_FOCAL__TABLET.x * 100}% ${
		BG_FOCAL__TABLET.y * 100
	}%`;
	const BG_POSITION__DESKTOP = `${BG_FOCAL__DESKTOP.x * 100}% ${
		BG_FOCAL__DESKTOP.y * 100
	}%`;

	return {
		backgroundImage: `url(${SRC})`,
		backgroundPosition: BG_POSITION,
		backgroundSize: BG_SIZE,
		backgroundAttachment: BG_ATTACHMENT,
		backgroundRepeat: BG_REPEAT,
	};
};

export default getBgImageStyleBySettings;
