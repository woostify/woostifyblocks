import { CSSObject } from "@emotion/react";
import {
	BorderMain4Side,
	BorderMainSingleSide,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import getBorderRadiusStyles from "./getBorderRadiusStyles";

interface Params {
	border: Partial<MyBorderControlData>;
	className: string;
	isWithRadius?: boolean;
}

const getBorderStyles = ({
	border,
	className,
	isWithRadius = false,
}: Params): CSSObject => {
	const { hoverColor, mainSettings, radius } = border;
	//

	// MAIN BORDER
	let CSSObject: CSSObject = { [`${className}`]: {} };
	if (mainSettings) {
		if ((mainSettings as BorderMain4Side)?.top) {
			const { bottom, left, right, top } = mainSettings as BorderMain4Side;
			CSSObject = {
				[`${className}`]: {
					borderTop: `${top.width} ${top.style} ${top.color}`,
					borderLeft: `${left.width} ${left.style} ${left.color}`,
					borderRight: `${right.width} ${right.style} ${right.color}`,
					borderBottom: `${bottom.width} ${bottom.style} ${bottom.color}`,
					"&:hover": {
						borderColor: `${hoverColor}`,
					},
				},
			};
		} else {
			const { color, style, width } = mainSettings as BorderMainSingleSide;

			CSSObject = {
				[`${className}`]: {
					border: `${width} ${style} ${color}`,
					"&:hover": {
						borderColor: `${hoverColor}`,
					},
				},
			};
		}
	}

	// RAIDUS
	let radiusCSSObject: CSSObject = { [`${className}`]: {} };
	if (isWithRadius && radius) {
		radiusCSSObject = getBorderRadiusStyles({ radius, className });
	}

	//
	let a = {};
	let b = {};
	if (typeof CSSObject[className] === "object") {
		a = CSSObject[className] || {};
	}
	if (typeof radiusCSSObject[className] === "object") {
		b = radiusCSSObject[className] || {};
	}

	return {
		[`${className}`]: {
			...a,
			...b,
		},
	};
};

export default getBorderStyles;
