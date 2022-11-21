import { css, CSSObject } from "@emotion/react";
import { BackgroundNoImageControlData } from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

interface Params {
	background: BackgroundNoImageControlData;
	className: string;
}

const getBackgroundColorGradientStyles = ({
	className,
	background,
}: Params): CSSObject => {
	const { bgType, color, gradient } = background;

	if (bgType !== "color" && bgType !== "gradient") {
		return {};
	}

	let preBgName = "";
	let bgValue = "";
	if (bgType === "color") {
		preBgName = "backgroundColor";
		bgValue = color;
	}
	// Backgroud gradient
	if (bgType === "gradient") {
		preBgName = "backgroundImage";
		bgValue = gradient;
	}
	//
	return {
		[`${className}`]: {
			[`${preBgName}`]: `${bgValue}`,
		},
	};
};

export default getBackgroundColorGradientStyles;
