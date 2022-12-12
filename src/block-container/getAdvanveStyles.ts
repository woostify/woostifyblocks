import { MyResponsiveConditionControlData } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { MyZIndexControlData } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { Global, css } from "@emotion/react";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

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
	const zIndexDesktop = advance_zIndex.Desktop;
	const zIndexTablet = advance_zIndex.Tablet || zIndexDesktop;
	const zIndexMobile = advance_zIndex.Mobile || zIndexTablet;
	//
	const { isHiddenOnDesktop, isHiddenOnMobile, isHiddenOnTablet } =
		advance_responsiveCondition;
	return css`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet ? "none" : defaultDisplay};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop ? "none" : defaultDisplay};
			}
		}
	`;
};
