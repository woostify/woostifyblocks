import { css } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
	padding?: HasResponsive<DimensionSettings>;
	margin?: HasResponsive<DimensionSettings>;
	className: string;
}

const getPaddingMarginStyles = ({ className, padding, margin }: Params) => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const {
		value_Desktop: margin_Desktop,
		value_Tablet: margin_Tablet,
		value_Mobile: margin_Mobile,
	} = getValueFromAttrsResponsives(margin);
	//

	const {
		value_Desktop: padding_Desktop,
		value_Tablet: padding_Tablet,
		value_Mobile: padding_Mobile,
	} = getValueFromAttrsResponsives(padding);
	//

	//
	const {
		mobile_v: padding_Mobile_top,
		tablet_v: padding_Tablet_top,
		desktop_v: padding_Desktop_top,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.top,
		tablet_v: padding_Tablet?.top,
		desktop_v: padding_Desktop?.top,
	});
	const {
		mobile_v: padding_Mobile_left,
		tablet_v: padding_Tablet_left,
		desktop_v: padding_Desktop_left,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.left,
		tablet_v: padding_Tablet?.left,
		desktop_v: padding_Desktop?.left,
	});
	const {
		mobile_v: padding_Mobile_right,
		tablet_v: padding_Tablet_right,
		desktop_v: padding_Desktop_right,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.right,
		tablet_v: padding_Tablet?.right,
		desktop_v: padding_Desktop?.right,
	});
	const {
		mobile_v: padding_Mobile_bottom,
		tablet_v: padding_Tablet_bottom,
		desktop_v: padding_Desktop_bottom,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.bottom,
		tablet_v: padding_Tablet?.bottom,
		desktop_v: padding_Desktop?.bottom,
	});
	//
	const {
		mobile_v: margin_Mobile_top,
		tablet_v: margin_Tablet_top,
		desktop_v: margin_Desktop_top,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.top,
		tablet_v: margin_Tablet?.top,
		desktop_v: margin_Desktop?.top,
	});
	const {
		mobile_v: margin_Mobile_left,
		tablet_v: margin_Tablet_left,
		desktop_v: margin_Desktop_left,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.left,
		tablet_v: margin_Tablet?.left,
		desktop_v: margin_Desktop?.left,
	});
	const {
		mobile_v: margin_Mobile_right,
		tablet_v: margin_Tablet_right,
		desktop_v: margin_Desktop_right,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.right,
		tablet_v: margin_Tablet?.right,
		desktop_v: margin_Desktop?.right,
	});
	const {
		mobile_v: margin_Mobile_bottom,
		tablet_v: margin_Tablet_bottom,
		desktop_v: margin_Desktop_bottom,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.bottom,
		tablet_v: margin_Tablet?.bottom,
		desktop_v: margin_Desktop?.bottom,
	});

	return css`
		body ${className} {
			padding-top: ${padding_Mobile_top};
			padding-right: ${padding_Mobile_right};
			padding-bottom: ${padding_Mobile_bottom};
			padding-left: ${padding_Mobile_left};
			margin-top: ${margin_Mobile_top};
			margin-right: ${margin_Mobile_right};
			margin-bottom: ${margin_Mobile_bottom};
			margin-left: ${margin_Mobile_left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet_top};
				padding-right: ${padding_Tablet_right};
				padding-bottom: ${padding_Tablet_bottom};
				padding-left: ${padding_Tablet_left};
				margin-top: ${margin_Tablet_top};
				margin-right: ${margin_Tablet_right};
				margin-bottom: ${margin_Tablet_bottom};
				margin-left: ${margin_Tablet_left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop_top};
				padding-right: ${padding_Desktop_right};
				padding-bottom: ${padding_Desktop_bottom};
				padding-left: ${padding_Desktop_left};
				margin-top: ${margin_Desktop_top};
				margin-right: ${margin_Desktop_right};
				margin-bottom: ${margin_Desktop_bottom};
				margin-left: ${margin_Desktop_left};
			}
		}
	`;
};

export default getPaddingMarginStyles;
