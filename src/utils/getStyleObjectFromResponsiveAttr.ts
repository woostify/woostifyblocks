import { CSSProperties } from "react";
import { CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
	value: HasResponsive<string | number | null | undefined>;
	prefix: keyof CSSProperties;
	prefix_2?: keyof CSSProperties;
	prefix_3?: keyof CSSProperties;
	prefix_4?: keyof CSSProperties;
	className: string;
	// da co san unit trong value roi thi khong can them unit nua
	hasUnit?: boolean;
	unit?: string;
}

function getStyleObjectFromResponsiveAttr({
	className,
	prefix,
	prefix_2,
	prefix_3,
	prefix_4,
	value,
	hasUnit = true,
	unit,
}: Params): CSSObject {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	let { value_Desktop, value_Tablet, value_Mobile } =
		getValueFromAttrsResponsives(value);

	if (!hasUnit && !!unit) {
		if (typeof value_Desktop === "number") {
			value_Desktop = value_Desktop + unit;
			value_Tablet = value_Tablet + unit;
			value_Mobile = value_Mobile + unit;
		}
		if (typeof value_Desktop === "string") {
			value_Desktop = value_Desktop ? value_Desktop + unit : null;
			value_Tablet = value_Tablet ? value_Tablet + unit : null;
			value_Mobile = value_Mobile ? value_Mobile + unit : null;
		}
	}

	//
	let prefix2 = prefix_2 || "";
	let prefix3 = prefix_3 || "";
	let prefix4 = prefix_4 || "";

	//
	const {
		mobile_v: value_Mobile_new,
		tablet_v: value_Tablet_new,
		desktop_v: value_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: value_Mobile,
		tablet_v: value_Tablet,
		desktop_v: value_Desktop,
	});
	//

	return {
		[className]: {
			[prefix]: value_Mobile_new ?? null,
			[prefix2]: prefix_2 ? value_Mobile_new ?? null : null,
			[prefix3]: prefix_3 ? value_Mobile_new ?? null : null,
			[prefix4]: prefix_4 ? value_Mobile_new ?? null : null,
			[`@media (min-width: ${media_tablet})`]: value_Tablet_new
				? {
						[prefix]: value_Tablet_new,
						[prefix2]: prefix_2 ? value_Tablet_new : null,
						[prefix3]: prefix_3 ? value_Tablet_new : null,
						[prefix4]: prefix_4 ? value_Tablet_new : null,
				  }
				: undefined,
			[`@media (min-width: ${media_desktop})`]: value_Desktop_new
				? {
						[prefix]: value_Desktop_new,
						[prefix2]: prefix_2 ? value_Desktop_new : null,
						[prefix3]: prefix_3 ? value_Desktop_new : null,
						[prefix4]: prefix_4 ? value_Desktop_new : null,
				  }
				: undefined,
		},
	};
}

export default getStyleObjectFromResponsiveAttr;
