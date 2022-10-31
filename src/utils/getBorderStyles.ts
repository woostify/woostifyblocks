import { css } from "@emotion/react";
import {
	BorderMain4Side,
	BorderMainSettings,
	BorderMainSingleSide,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";

interface Params {
	border: Partial<MyBorderControlData>;
	className: string;
}

const getBorderStyles = ({ border, className }: Params) => {
	const { hoverColor, mainSettings } = border;
	//
	if (!mainSettings) {
		return;
	}

	if ((mainSettings as BorderMain4Side)?.top) {
		const { bottom, left, right, top } = mainSettings as BorderMain4Side;
		return css`
			${className} {
				border-top: ${top.width} ${top.style} ${top.color};
				border-left: ${left.width} ${left.style} ${left.color};
				border-right: ${right.width} ${right.style} ${right.color};
				border-bottom: ${bottom.width} ${bottom.style} ${bottom.color};
				&:hover {
					border-color: ${hoverColor};
				}
			}
		`;
	} else {
		const { color, style, width } = mainSettings as BorderMainSingleSide;

		return css`
			${className} {
				border: ${width} ${style} ${color};
				&:hover {
					border-color: ${hoverColor};
				}
			}
		`;
	}
};

export default getBorderStyles;
