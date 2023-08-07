import { css, CSSObject, Global } from "@emotion/react";
import { BackgroundControlData } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getBackgroundColorGradientStyles from "./getBackgroundColorGradientStyles";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

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

		//
		const {
			mobile_v: SRC_new,
			tablet_v: SRC__TABLET_new,
			desktop_v: SRC__DESKTOP_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: SRC,
			tablet_v: SRC__TABLET,
			desktop_v: SRC__DESKTOP,
		});
		const {
			mobile_v: BG_REPEAT_new,
			tablet_v: BG_REPEAT__TABLET_new,
			desktop_v: BG_REPEAT__DESKTOP_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: BG_REPEAT,
			tablet_v: BG_REPEAT__TABLET,
			desktop_v: BG_REPEAT__DESKTOP,
		});
		const {
			mobile_v: BG_ATTACHMENT_new,
			tablet_v: BG_ATTACHMENT__TABLET_new,
			desktop_v: BG_ATTACHMENT__DESKTOP_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: BG_ATTACHMENT,
			tablet_v: BG_ATTACHMENT__TABLET,
			desktop_v: BG_ATTACHMENT__DESKTOP,
		});
		const {
			mobile_v: BG_SIZE_new,
			tablet_v: BG_SIZE__TABLET_new,
			desktop_v: BG_SIZE__DESKTOP_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: BG_SIZE,
			tablet_v: BG_SIZE__TABLET,
			desktop_v: BG_SIZE__DESKTOP,
		});
		const {
			mobile_v: BG_POSITION_new,
			tablet_v: BG_POSITION__TABLET_new,
			desktop_v: BG_POSITION__DESKTOP_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: BG_POSITION,
			tablet_v: BG_POSITION__TABLET,
			desktop_v: BG_POSITION__DESKTOP,
		});
		//

		return {
			[`${WRAP_CLASSNAME}`]: {
				backgroundImage: SRC_new ? `url(${SRC_new})` : undefined,
				backgroundRepeat: SRC_new ? `${BG_REPEAT_new}` : undefined,
				backgroundAttachment: SRC_new ? `${BG_ATTACHMENT_new}` : undefined,
				backgroundSize: SRC_new ? `${BG_SIZE_new}` : undefined,
				backgroundPosition: SRC_new ? `${BG_POSITION_new}` : undefined,
				[`@media (min-width: ${media_tablet})`]: SRC__TABLET_new
					? {
							backgroundImage: `url(${SRC__TABLET_new})`,
							backgroundRepeat: `${BG_REPEAT__TABLET_new}`,
							backgroundAttachment: `${BG_ATTACHMENT__TABLET_new}`,
							backgroundSize: `${BG_SIZE__TABLET_new}`,
							backgroundPosition: `${BG_POSITION__TABLET_new}`,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: SRC__DESKTOP_new
					? {
							backgroundImage: `url(${SRC__DESKTOP_new})`,
							backgroundRepeat: `${BG_REPEAT__DESKTOP_new}`,
							backgroundAttachment: `${BG_ATTACHMENT__DESKTOP_new}`,
							backgroundSize: `${BG_SIZE__DESKTOP_new}`,
							backgroundPosition: `${BG_POSITION__DESKTOP_new}`,
					  }
					: undefined,
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
