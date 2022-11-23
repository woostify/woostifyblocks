import { css, CSSObject } from "@emotion/react";
import { BackgroundNoImageControlData } from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

interface Params {
	background: BackgroundNoImageControlData;
	backgroundHover?: BackgroundNoImageControlData;
	className: string;
}

const getBackgroundColorGradientStyles = ({
	className,
	background,
	backgroundHover,
}: Params): CSSObject => {
	const { bgType, color, gradient } = background;
	const {
		bgType: bgType_h,
		color: color_h,
		gradient: gradient_h,
	} = backgroundHover || {};

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
	//
	let preBgName_h = "";
	let bgValue_h = "";
	if (bgType_h === "color") {
		preBgName_h = "backgroundColor";
		bgValue_h = color_h || "";
	}
	// Backgroud gradient
	if (bgType_h === "gradient") {
		preBgName_h = "backgroundImage";
		bgValue_h = gradient_h || "";
	}
	//
	//
	return {
		[`${className}`]: {
			[`${preBgName}`]: `${bgValue}`,
			":hover": {
				[`${preBgName_h}`]: `${bgValue_h || null}`,
			},
		},
	};
};

export default getBackgroundColorGradientStyles;
