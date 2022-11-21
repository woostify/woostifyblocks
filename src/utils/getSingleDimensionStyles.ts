import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Params {
	value: HasResponsive<string>;
	prefix:
		| "paddingBottom"
		| "paddingTop"
		| "paddingLeft"
		| "paddingRight"
		| "marrginTop"
		| "marginBottom"
		| "marginLeft"
		| "marginRight"
		| "margin"
		| "padding"
		| "gap"
		| "gapX"
		| "gapY"
		| "top"
		| "right"
		| "left"
		| "bottom";
	className: string;
}

const getSingleDimensionStyles = ({
	className,
	prefix,
	value,
}: Params): CSSObject => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const v_Desktop = value?.Desktop;
	const v_Tablet = value?.Tablet || v_Desktop;
	const v_Mobile = value?.Mobile || v_Tablet;
	//

	return {
		[className]: {
			[prefix]: `${v_Mobile}`,
			[`@media (min-width: ${media_tablet})`]: {
				[prefix]: `${v_Tablet}`,
			},
			[`@media (min-width: ${media_desktop})`]: {
				[prefix]: `${v_Desktop}`,
			},
		},
	};
};

export default getSingleDimensionStyles;
