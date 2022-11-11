import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { BorderRadiusSettings } from "../components/controls/MyBorderControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Params {
	radius: HasResponsive<BorderRadiusSettings>;
	className: string;
}

const getBorderRadiusStyles = ({ className, radius }: Params): CSSObject => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
	//
	let radiusDesktop = radius?.Desktop;
	let radiusTablet = radius?.Tablet || radiusDesktop;
	let radiusMobile = radius?.Mobile || radiusTablet;

	const converttted = (radiusValue: BorderRadiusSettings) => {
		if (typeof radiusValue === "string") {
			radiusValue = {
				bottomLeft: radiusValue,
				bottomRight: radiusValue,
				topLeft: radiusValue,
				topRight: radiusValue,
			};
		}
		return radiusValue;
	};

	radiusDesktop = converttted(radiusDesktop);
	radiusTablet = converttted(radiusDesktop);
	radiusMobile = converttted(radiusDesktop);

	return {
		[`${className}`]: {
			borderTopLeftRadius: `${radiusMobile.topLeft}`,
			borderTopRightRadius: `${radiusMobile.topRight}`,
			borderBottomRightRadius: `${radiusMobile.bottomRight}`,
			borderBottomLeftRadius: `${radiusMobile.bottomLeft}`,

			[`@media (min-width: ${media_tablet})`]: {
				borderTopLeftRadius: `${radiusTablet.topLeft}`,
				borderTopRightRadius: ` ${radiusTablet.topRight}`,
				borderBottomRightRadius: `${radiusTablet.bottomRight}`,
				borderBottomLeftRadius: `${radiusTablet.bottomLeft}`,
			},
			[`@media (min-width: ${media_desktop})`]: {
				borderTopLeftRadius: `${radiusDesktop.topLeft}`,
				borderTopRightRadius: `${radiusDesktop.topRight}`,
				borderBottomRightRadius: `${radiusDesktop.bottomRight}`,
				borderBottomLeftRadius: `${radiusDesktop.bottomLeft}`,
			},
		},
	};
};

export default getBorderRadiusStyles;
