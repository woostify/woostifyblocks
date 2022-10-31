import { CSSObject } from "@emotion/react";
import {
	BorderMain4Side,
	BorderMainSingleSide,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";

interface Params {
	border: Partial<MyBorderControlData>;
	className: string;
}

const getBorderStyles = ({ border, className }: Params): CSSObject => {
	const { hoverColor, mainSettings } = border;
	//
	if (!mainSettings) {
		return {};
	}

	if ((mainSettings as BorderMain4Side)?.top) {
		const { bottom, left, right, top } = mainSettings as BorderMain4Side;
		return {
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

		return {
			[`${className}`]: {
				border: `${width} ${style} ${color}`,
				"&:hover": {
					borderColor: `${hoverColor}`,
				},
			},
		};
	}
};

export default getBorderStyles;
