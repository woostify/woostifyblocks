import { css } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Params {
	padding?: HasResponsive<DimensionSettings>;
	margin?: HasResponsive<DimensionSettings>;
	className: string;
}

const getPaddingMarginStyles = ({ className, padding, margin }: Params) => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const margin_Desktop = margin?.Desktop;
	const margin_Tablet = margin?.Tablet || margin_Desktop;
	const margin_Mobile = margin?.Mobile || margin_Tablet;
	//
	const padding_Desktop = padding?.Desktop;
	const padding_Tablet = padding?.Tablet || padding_Desktop;
	const padding_Mobile = padding?.Mobile || padding_Tablet;
	//

	return css`
		${className} {
			padding-top: ${padding_Mobile?.top};
			padding-right: ${padding_Mobile?.right};
			padding-bottom: ${padding_Mobile?.bottom};
			padding-left: ${padding_Mobile?.left};
			margin-top: ${margin_Mobile?.top};
			margin-right: ${margin_Mobile?.right};
			margin-bottom: ${margin_Mobile?.bottom};
			margin-left: ${margin_Mobile?.left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet?.top};
				padding-right: ${padding_Tablet?.right};
				padding-bottom: ${padding_Tablet?.bottom};
				padding-left: ${padding_Tablet?.left};
				margin-top: ${margin_Tablet?.top};
				margin-right: ${margin_Tablet?.right};
				margin-bottom: ${margin_Tablet?.bottom};
				margin-left: ${margin_Tablet?.left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop?.top};
				padding-right: ${padding_Desktop?.right};
				padding-bottom: ${padding_Desktop?.bottom};
				padding-left: ${padding_Desktop?.left};
				margin-top: ${margin_Desktop?.top};
				margin-right: ${margin_Desktop?.right};
				margin-bottom: ${margin_Desktop?.bottom};
				margin-left: ${margin_Desktop?.left};
			}
		}
	`;
};

export default getPaddingMarginStyles;
