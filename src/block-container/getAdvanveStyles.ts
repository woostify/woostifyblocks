import { MyResponsiveConditionControlData } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { MyZIndexControlData } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { css } from "@emotion/react";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";

interface Params {
	advance_zIndex: MyZIndexControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	className: string;
	defaultDisplay?: React.CSSProperties["display"];
}

export const getAdvanveDivWrapStyles = ({
	advance_zIndex,
	advance_responsiveCondition,
	className,
	defaultDisplay,
}: Params) => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
	//

	const {
		mobile_v: zIndexMobile,
		tablet_v: zIndexTablet,
		desktop_v: zIndexDesktop,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v:
			advance_zIndex.Mobile || advance_zIndex.Tablet || advance_zIndex.Desktop,
		tablet_v: advance_zIndex.Tablet || advance_zIndex.Desktop,
		desktop_v: advance_zIndex.Desktop,
	});
	//

	const {
		mobile_v: isHiddenOnMobile,
		tablet_v: isHiddenOnTablet,
		desktop_v: isHiddenOnDesktop,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: advance_responsiveCondition.isHiddenOnMobile,
		tablet_v: advance_responsiveCondition.isHiddenOnTablet,
		desktop_v: advance_responsiveCondition.isHiddenOnDesktop,
	});

	// [data-is-wcb-save-common] {
	// 	visibility: visible;
	// }
	return css`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			visibility: visible;
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet !== ""
					? isHiddenOnTablet
						? "none"
						: defaultDisplay
					: ""};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop !== ""
					? isHiddenOnDesktop
						? "none"
						: defaultDisplay
					: ""};
			}
		}
	`;
};
