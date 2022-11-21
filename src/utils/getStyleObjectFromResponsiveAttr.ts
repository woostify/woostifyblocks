import { CSSProperties } from "react";
import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";

interface Params<T = string> {
	value: HasResponsive<T>;
	prefix: keyof CSSProperties;
	className: string;
}

function getStyleObjectFromResponsiveAttr<T = string>({
	className,
	prefix,
	value,
}: Params<T>): CSSObject {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

	const { value_Desktop, value_Mobile, value_Tablet } =
		getValueFromAttrsResponsives(value);
	//

	return {
		[className]: {
			[prefix]: `${value_Tablet}`,
			[`@media (min-width: ${media_tablet})`]: {
				[prefix]: `${value_Mobile}`,
			},
			[`@media (min-width: ${media_desktop})`]: {
				[prefix]: `${value_Desktop}`,
			},
		},
	};
}

export default getStyleObjectFromResponsiveAttr;
