import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getStyleObjectFromResponsiveAttr from "./getStyleObjectFromResponsiveAttr";

interface Params {
	value: HasResponsive<string>;
	prefix:
		| "paddingBottom"
		| "paddingTop"
		| "paddingLeft"
		| "paddingRight"
		| "marginTop"
		| "marginBottom"
		| "marginLeft"
		| "marginRight"
		| "margin"
		| "padding"
		| "gap"
		| "rowGap"
		| "columnGap"
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
	return getStyleObjectFromResponsiveAttr({
		className,
		prefix,
		value,
	});
};

export default getSingleDimensionStyles;
