import { css } from "@emotion/react";
import { BackgroundNoImageControlData } from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

interface Params {
	background: BackgroundNoImageControlData;
	className: string;
}

const getBackgroundColorGradientStyles = ({
	className,
	background,
}: Params) => {
	const { bgType, color, gradient } = background;

	if (bgType !== "color" && bgType !== "gradient") {
		return;
	}

	let preBgName = "";
	let bgValue = "";
	if (bgType === "color") {
		preBgName = "background-color";
		bgValue = color;
	}
	// Backgroud gradient
	if (bgType === "gradient") {
		preBgName = "background-image";
		bgValue = gradient;
	}
	//
	return css`
		${className} {
			${preBgName}: ${bgValue};
		}
	`;
};

export default getBackgroundColorGradientStyles;
