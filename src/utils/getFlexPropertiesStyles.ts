import { CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { MyFlexPropertiesControlData } from "../components/controls/MyFlexPropertiesControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";

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
	return {
		[`${className}`]: {
			flexDirection: flexDirection_Mobile,
			alignItems: alignItems_Mobile,
			flexWrap: flexWrap_Mobile,
			justifyContent: justifyContent_Mobile,
			columnGap: colunmGap_Mobile,
			rowGap: rowGap_Mobile,
			[`@media (min-width: ${media_tablet})`]: {
				flexDirection: flexDirection_Tablet,
				alignItems: alignItems_Tablet,
				flexWrap: flexWrap_Tablet,
				justifyContent: justifyContent_Tablet,
				columnGap: colunmGap_Tablet,
				rowGap: rowGap_Tablet,
			},
			[`@media (min-width: ${media_desktop})`]: {
				flexDirection: flexDirection_Desktop,
				alignItems: alignItems_Desktop,
				flexWrap: flexWrap_Desktop,
				justifyContent: justifyContent_Desktop,
				columnGap: colunmGap_Desktop,
				rowGap: rowGap_Desktop,
			},
		},
	};
};

export default getFlexPropertiesStyles;
