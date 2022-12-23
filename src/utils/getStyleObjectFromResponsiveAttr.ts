import { CSSProperties } from "react";
import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";

interface Params<T = string> {
	value: HasResponsive<T>;
	prefix: keyof CSSProperties;
	prefix_2?: keyof CSSProperties;
	prefix_3?: keyof CSSProperties;
	prefix_4?: keyof CSSProperties;
	className: string;
	hasUnit?: boolean;
	unit?: string;
}

function getStyleObjectFromResponsiveAttr<T = string>({
	className,
	prefix,
	prefix_2,
	prefix_3,
	prefix_4,
	value,
	hasUnit = true,
	unit,
}: Params<T>): CSSObject {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	let { value_Desktop, value_Tablet, value_Mobile } =
		getValueFromAttrsResponsives(value);

	if (
		!hasUnit &&
		!!unit &&
		(typeof value_Desktop === "string" || typeof value_Desktop === "number")
	) {
		(value_Desktop as string) = value_Desktop + unit;
		(value_Tablet as string) = value_Tablet + unit;
		(value_Mobile as string) = value_Mobile + unit;
	}

	//
	let prefix2 = prefix_2 || "";
	let prefix3 = prefix_3 || "";
	let prefix4 = prefix_4 || "";
	return {
		[className]: {
			[prefix]: `${value_Mobile}`,
			[prefix2]: prefix_2 ? `${value_Mobile}` : null,
			[prefix3]: prefix_3 ? `${value_Mobile}` : null,
			[prefix4]: prefix_4 ? `${value_Mobile}` : null,
			[`@media (min-width: ${media_tablet})`]: {
				[prefix]: `${value_Tablet}`,
				[prefix2]: prefix_2 ? `${value_Tablet}` : null,
				[prefix3]: prefix_3 ? `${value_Tablet}` : null,
				[prefix4]: prefix_4 ? `${value_Tablet}` : null,
			},
			[`@media (min-width: ${media_desktop})`]: {
				[prefix]: `${value_Desktop}`,
				[prefix2]: prefix_2 ? `${value_Desktop}` : null,
				[prefix3]: prefix_3 ? `${value_Desktop}` : null,
				[prefix4]: prefix_4 ? `${value_Desktop}` : null,
			},
		},
	};
}

export default getStyleObjectFromResponsiveAttr;
