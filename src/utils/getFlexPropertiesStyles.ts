import { CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { MyFlexPropertiesControlData } from "../components/controls/MyFlexPropertiesControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface FlexProperties extends Partial<MyFlexPropertiesControlData> {
	colunmGap?: HasResponsive<string>;
	rowGap?: HasResponsive<string>;
}

interface Params {
	flexProperties: FlexProperties;
	className: string;
}

const getFlexPropertiesStyles = ({
	flexProperties,
	className,
}: Params): CSSObject => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	//
	const {
		alignItems,
		flexDirection,
		flexWrap,
		justifyContent,
		colunmGap,
		rowGap,
	} = flexProperties;
	//

	const {
		value_Desktop: flexDirection_Desktop,
		value_Tablet: flexDirection_Tablet,
		value_Mobile: flexDirection_Mobile,
	} = getValueFromAttrsResponsives(flexDirection);
	//
	const {
		value_Desktop: alignItems_Desktop,
		value_Tablet: alignItems_Tablet,
		value_Mobile: alignItems_Mobile,
	} = getValueFromAttrsResponsives(alignItems);
	//
	const {
		value_Desktop: flexWrap_Desktop,
		value_Tablet: flexWrap_Tablet,
		value_Mobile: flexWrap_Mobile,
	} = getValueFromAttrsResponsives(flexWrap);
	//
	const {
		value_Desktop: justifyContent_Desktop,
		value_Tablet: justifyContent_Tablet,
		value_Mobile: justifyContent_Mobile,
	} = getValueFromAttrsResponsives(justifyContent);

	//
	const {
		value_Desktop: colunmGap_Desktop,
		value_Tablet: colunmGap_Tablet,
		value_Mobile: colunmGap_Mobile,
	} = getValueFromAttrsResponsives(colunmGap);
	//
	const {
		value_Desktop: rowGap_Desktop,
		value_Tablet: rowGap_Tablet,
		value_Mobile: rowGap_Mobile,
	} = getValueFromAttrsResponsives(rowGap);
	//

	//
	const {
		mobile_v: flexDirection_Mobile_new,
		tablet_v: flexDirection_Tablet_new,
		desktop_v: flexDirection_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: flexDirection_Mobile,
		tablet_v: flexDirection_Tablet,
		desktop_v: flexDirection_Desktop,
	});
	const {
		mobile_v: alignItems_Mobile_new,
		tablet_v: alignItems_Tablet_new,
		desktop_v: alignItems_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: alignItems_Mobile,
		tablet_v: alignItems_Tablet,
		desktop_v: alignItems_Desktop,
	});
	const {
		mobile_v: flexWrap_Mobile_new,
		tablet_v: flexWrap_Tablet_new,
		desktop_v: flexWrap_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: flexWrap_Mobile,
		tablet_v: flexWrap_Tablet,
		desktop_v: flexWrap_Desktop,
	});
	const {
		mobile_v: justifyContent_Mobile_new,
		tablet_v: justifyContent_Tablet_new,
		desktop_v: justifyContent_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: justifyContent_Mobile,
		tablet_v: justifyContent_Tablet,
		desktop_v: justifyContent_Desktop,
	});
	const {
		mobile_v: colunmGap_Mobile_new,
		tablet_v: colunmGap_Tablet_new,
		desktop_v: colunmGap_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: colunmGap_Mobile,
		tablet_v: colunmGap_Tablet,
		desktop_v: colunmGap_Desktop,
	});
	const {
		mobile_v: rowGap_Mobile_new,
		tablet_v: rowGap_Tablet_new,
		desktop_v: rowGap_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: rowGap_Mobile,
		tablet_v: rowGap_Tablet,
		desktop_v: rowGap_Desktop,
	});
	//

	return {
		[`${className}`]: {
			flexDirection: flexDirection_Mobile_new,
			alignItems: alignItems_Mobile_new,
			flexWrap: flexWrap_Mobile_new,
			justifyContent: justifyContent_Mobile_new,
			columnGap: colunmGap_Mobile_new,
			rowGap: rowGap_Mobile_new,
			[`@media (min-width: ${media_tablet})`]:
				flexDirection_Tablet_new ||
				alignItems_Tablet_new ||
				flexWrap_Tablet_new ||
				justifyContent_Tablet_new ||
				colunmGap_Tablet_new ||
				rowGap_Tablet_new
					? {
							flexDirection: flexDirection_Tablet_new,
							alignItems: alignItems_Tablet_new,
							flexWrap: flexWrap_Tablet_new,
							justifyContent: justifyContent_Tablet_new,
							columnGap: colunmGap_Tablet_new,
							rowGap: rowGap_Tablet_new,
					  }
					: undefined,
			[`@media (min-width: ${media_desktop})`]:
				flexDirection_Desktop_new ||
				alignItems_Desktop_new ||
				flexWrap_Desktop_new ||
				justifyContent_Desktop_new ||
				colunmGap_Desktop_new ||
				rowGap_Desktop_new
					? {
							flexDirection: flexDirection_Desktop_new,
							alignItems: alignItems_Desktop_new,
							flexWrap: flexWrap_Desktop_new,
							justifyContent: justifyContent_Desktop_new,
							columnGap: colunmGap_Desktop_new,
							rowGap: rowGap_Desktop_new,
					  }
					: undefined,
		},
	};
};

export default getFlexPropertiesStyles;
