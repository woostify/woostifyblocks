import { CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { MyFlexPropertiesControlData } from "../components/controls/MyFlexPropertiesControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

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

	const flexDirection_Desktop = flexDirection?.Desktop;
	const flexDirection_Tablet = flexDirection?.Tablet || flexDirection_Desktop;
	const flexDirection_Mobile = flexDirection?.Mobile || flexDirection_Tablet;
	//
	const alignItems_Desktop = alignItems?.Desktop;
	const alignItems_Tablet = alignItems?.Tablet || alignItems_Desktop;
	const alignItems_Mobile = alignItems?.Mobile || alignItems_Tablet;
	//
	const flexWrap_Desktop = flexWrap?.Desktop;
	const flexWrap_Tablet = flexWrap?.Tablet || flexWrap_Desktop;
	const flexWrap_Mobile = flexWrap?.Mobile || flexWrap_Tablet;
	//
	const justifyContent_Desktop = justifyContent?.Desktop;
	const justifyContent_Tablet =
		justifyContent?.Tablet || justifyContent_Desktop;
	const justifyContent_Mobile = justifyContent?.Mobile || justifyContent_Tablet;
	//
	const colunmGap_Desktop = colunmGap?.Desktop;
	const colunmGap_Tablet = colunmGap?.Tablet || colunmGap_Desktop;
	const colunmGap_Mobile = colunmGap?.Mobile || colunmGap_Tablet;
	//
	const rowGap_Desktop = rowGap?.Desktop;
	const rowGap_Tablet = rowGap?.Tablet || rowGap_Desktop;
	const rowGap_Mobile = rowGap?.Mobile || rowGap_Tablet;
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
