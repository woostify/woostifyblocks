import { css, CSSObject, Global } from "@emotion/react";
import { BackgroundControlData } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getBackgroundColorGradientStyles from "./getBackgroundColorGradientStyles";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";

interface Params {
	styles_background: BackgroundControlData;
	className: string;
}

export default function getStyleBackground({
	styles_background,
	className,
}: Params): CSSObject[] {
	const WRAP_CLASSNAME = className;
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const getDivWrapStyles__BgColor_Gradient = (): CSSObject => {
		const {} = styles_background;
		return getBackgroundColorGradientStyles({
			background: styles_background,
			className: WRAP_CLASSNAME,
		});
	};

	const getDivWrapStyles__BackgroundImage = (): CSSObject => {
		const {
			bgImageAttachment,
			bgImageRepeat,
			bgImageSize,
			bgType,
			focalPoint,
			imageData,
		} = styles_background;

		if (bgType !== "image") {
			return {};
		}
		//
		const SRC__DESKTOP: string = imageData.Desktop?.mediaUrl;
		const SRC__TABLET: string = imageData.Tablet?.mediaUrl || SRC__DESKTOP;
		const SRC: string = imageData.Mobile?.mediaUrl || SRC__TABLET;

		//

		const {
			value_Desktop: BG_REPEAT__DESKTOP,
			value_Tablet: BG_REPEAT__TABLET,
			value_Mobile: BG_REPEAT,
		} = getValueFromAttrsResponsives(bgImageRepeat);
		//

		const {
			value_Desktop: BG_ATTACHMENT__DESKTOP,
			value_Tablet: BG_ATTACHMENT__TABLET,
			value_Mobile: BG_ATTACHMENT,
		} = getValueFromAttrsResponsives(bgImageAttachment);
		//

		const {
			value_Desktop: BG_SIZE__DESKTOP,
			value_Tablet: BG_SIZE__TABLET,
			value_Mobile: BG_SIZE,
		} = getValueFromAttrsResponsives(bgImageSize);
		//

		const {
			value_Desktop: BG_FOCAL__DESKTOP,
			value_Tablet: BG_FOCAL__TABLET,
			value_Mobile: BG_FOCAL,
		} = getValueFromAttrsResponsives(focalPoint);
		//
		const BG_POSITION = BG_FOCAL
			? `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%`
			: "";
		const BG_POSITION__TABLET = BG_FOCAL__TABLET
			? `${BG_FOCAL__TABLET.x * 100}% ${BG_FOCAL__TABLET.y * 100}%`
			: "";
		const BG_POSITION__DESKTOP = BG_FOCAL__DESKTOP
			? `${BG_FOCAL__DESKTOP.x * 100}% ${BG_FOCAL__DESKTOP.y * 100}%`
			: "";
		//
		return {
			[`${WRAP_CLASSNAME}`]: {
				backgroundImage: `url(${SRC})`,
				backgroundRepeat: `${BG_REPEAT}`,
				backgroundAttachment: `${BG_ATTACHMENT}`,
				backgroundSize: `${BG_SIZE}`,
				backgroundPosition: `${BG_POSITION}`,
				[`@media (min-width: ${media_tablet})`]: {
					backgroundImage: `url(${SRC__TABLET})`,
					backgroundRepeat: `${BG_REPEAT__TABLET}`,
					backgroundAttachment: `${BG_ATTACHMENT__TABLET}`,
					backgroundSize: `${BG_SIZE__TABLET}`,
					backgroundPosition: `${BG_POSITION__TABLET}`,
				},
				[`@media (min-width: ${media_desktop})`]: {
					backgroundImage: `url(${SRC__DESKTOP})`,
					backgroundRepeat: `${BG_REPEAT__DESKTOP}`,
					backgroundAttachment: `${BG_ATTACHMENT__DESKTOP}`,
					backgroundSize: `${BG_SIZE__DESKTOP}`,
					backgroundPosition: `${BG_POSITION__DESKTOP}`,
				},
			},
		};
	};

	const getDivWrapStyles__Overlay = (): CSSObject => {
		const { overlayColor, overlayGradient, overlayType } = styles_background;

		if (overlayType !== "color" && overlayType !== "gradient") {
			return {};
		}

		let preBgName = "";
		let bgValue = "";
		if (overlayType === "color") {
			preBgName = "backgroundColor";
			bgValue = overlayColor;
		}
		// Backgroud gradient
		if (overlayType === "gradient") {
			preBgName = "backgroundImage";
			bgValue = overlayGradient;
		}

		return {
			[`${WRAP_CLASSNAME}`]: {
				".wcb-OverlayBackgroundByBgControl": {
					[`${preBgName}`]: `${bgValue}`,
					position: "absolute",
					inset: 0,
					zIndex: 0,
				},
			},
		};
	};

	return [
		getDivWrapStyles__BgColor_Gradient(),
		getDivWrapStyles__BackgroundImage(),
		getDivWrapStyles__Overlay(),
	];
}
