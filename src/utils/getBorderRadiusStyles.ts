import { css } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { BorderRadiusSettings } from "../components/controls/MyBorderControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Params {
	radius: HasResponsive<BorderRadiusSettings>;
	className: string;
}

const getBorderRadiusStyles = ({ className, radius }: Params) => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
	//
	const radiusDesktop = radius?.Desktop;
	const radiusTablet = radius?.Tablet || radiusDesktop;
	const radiusMobile = radius?.Mobile || radiusTablet;

	return css`
		${className} {
			border-top-left-radius: ${radiusMobile.top};
			border-top-right-radius: ${radiusMobile.right};
			border-bottom-right-radius: ${radiusMobile.bottom};
			border-bottom-left-radius: ${radiusMobile.left};

			@media (min-width: ${media_tablet}) {
				border-top-left-radius: ${radiusTablet.top};
				border-top-right-radius: ${radiusTablet.right};
				border-bottom-right-radius: ${radiusTablet.bottom};
				border-bottom-left-radius: ${radiusTablet.left};
			}
			@media (min-width: ${media_desktop}) {
				border-top-left-radius: ${radiusDesktop.top};
				border-top-right-radius: ${radiusDesktop.right};
				border-bottom-right-radius: ${radiusDesktop.bottom};
				border-bottom-left-radius: ${radiusDesktop.left};
			}
		}
	`;
};

export default getBorderRadiusStyles;
