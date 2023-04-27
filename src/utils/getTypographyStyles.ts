import { CSSObject } from "@emotion/react";
import { MyTypographyControlData } from "../components/controls/MyTypographyControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { loadGoogleFont } from "./font";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
	typography: MyTypographyControlData;
	className: string;
}

const getTypographyStyles = ({ typography, className }: Params): CSSObject => {
	if (!typography || !className) {
		return {};
	}
	const {
		appearance,
		fontFamily,
		fontSizes,
		letterSpacing,
		lineHeight,
		textDecoration,
		textTransform,
	} = typography;

	if (!!fontFamily) {
		loadGoogleFont(fontFamily);
	}

	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
	//
	const fontSize_Desktop = fontSizes?.Desktop;
	const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
	const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
	//
	const lineHeight_Desktop = lineHeight?.Desktop;
	const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
	const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
	//
	const letterSpacing_Desktop = letterSpacing?.Desktop;
	const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
	const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
	//

	//
	const {
		mobile_v: fontSize_Mobile_new,
		tablet_v: fontSize_Tablet_new,
		desktop_v: fontSize_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: fontSize_Mobile,
		tablet_v: fontSize_Tablet,
		desktop_v: fontSize_Desktop,
	});
	const {
		mobile_v: lineHeight_Mobile_new,
		tablet_v: lineHeight_Tablet_new,
		desktop_v: lineHeight_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: lineHeight_Mobile,
		tablet_v: lineHeight_Tablet,
		desktop_v: lineHeight_Desktop,
	});
	const {
		mobile_v: letterSpacing_Mobile_new,
		tablet_v: letterSpacing_Tablet_new,
		desktop_v: letterSpacing_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: letterSpacing_Mobile,
		tablet_v: letterSpacing_Tablet,
		desktop_v: letterSpacing_Desktop,
	});
	//

	return {
		[`${className}`]: {
			fontFamily: fontFamily,
			fontWeight: appearance.style?.fontWeight,
			fontStyle: appearance.style?.fontStyle,
			textDecoration,
			textTransform,
			//
			fontSize: fontSize_Mobile_new,
			lineHeight: lineHeight_Mobile_new,
			letterSpacing: letterSpacing_Mobile_new,
			[`@media (min-width: ${media_tablet})`]:
				fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new
					? {
							fontSize: fontSize_Tablet_new,
							lineHeight: lineHeight_Tablet_new,
							letterSpacing: letterSpacing_Tablet_new,
					  }
					: undefined,
			[`@media (min-width: ${media_desktop})`]:
				fontSize_Desktop_new ||
				lineHeight_Desktop_new ||
				letterSpacing_Desktop_new
					? {
							fontSize: fontSize_Desktop_new,
							lineHeight: lineHeight_Desktop_new,
							letterSpacing: letterSpacing_Desktop_new,
					  }
					: undefined,
		},
	};
};

export default getTypographyStyles;
