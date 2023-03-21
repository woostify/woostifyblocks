import { css, CSSObject } from "@emotion/react";
import { TextColorControlData } from "../components/controls/MyTextColorControl/MyTextColorControl";

interface Params {
	textColor: TextColorControlData;
	className: string;
}

const getColorAndGradientStyles = ({ className, textColor }: Params) => {
	const { colorType, color, gradient } = textColor;

	if (colorType !== "color" && colorType !== "gradient") {
		return {};
	}

	let STYLES_CSS: CSSObject = {};
	//
	if (colorType === "color") {
		STYLES_CSS = {
			color,
		};
	}
	// Backgroud gradient
	if (colorType === "gradient") {
		STYLES_CSS = {
			color: "transparent",
			backgroundClip: "text",
			backgroundImage: gradient,
		};
	}

	STYLES_CSS = {
		[`${className}`]: STYLES_CSS,
	};
	//
	return STYLES_CSS;
};

export default getColorAndGradientStyles;
