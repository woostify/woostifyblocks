import { CSSObject } from "@emotion/react";
import { MyTypographyControlData } from "../components/controls/MyTypographyControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { loadGoogleFont } from "./font";

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

	return {
		[`${className}`]: {
			fontFamily: fontFamily,
			fontSize: fontSize_Mobile,
			fontWeight: appearance.style?.fontWeight,
			fontStyle: appearance.style?.fontStyle,
			textDecoration,
			textTransform,
			lineHeight: lineHeight_Mobile,
			letterSpacing: letterSpacing_Mobile,
			[`@media (min-width: ${media_tablet})`]: {
				fontSize: fontSize_Tablet,
				lineHeight: lineHeight_Tablet,
				letterSpacing: letterSpacing_Tablet,
			},
			[`@media (min-width: ${media_desktop})`]: {
				fontSize: fontSize_Desktop,
				lineHeight: lineHeight_Desktop,
				letterSpacing: letterSpacing_Desktop,
			},
		},
	};
};

export default getTypographyStyles;
