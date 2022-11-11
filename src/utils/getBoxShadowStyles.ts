import { CSSObject } from "@emotion/react";
import { getShadowStyleValueFromTwPreset } from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import { MyBoxShadowControlData } from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";

interface Params {
	boxShadow: Partial<MyBoxShadowControlData>;
	className: string;
}

const getBoxShadowStyles = ({ boxShadow, className }: Params): CSSObject => {
	const { Hover, Normal } = boxShadow;

	const { presetClass, blur, color, horizontal, position, spread, vertical } =
		Normal || {};

	const {
		presetClass: presetClass_h,
		blur: blur_h,
		color: color_h,
		horizontal: horizontal_h,
		position: position_h,
		spread: spread_h,
		vertical: vertical_h,
	} = Hover || {};
	//
	let VALUE = "";
	let VALUE_H = "";
	//
	if (presetClass) {
		VALUE = getShadowStyleValueFromTwPreset(presetClass, color);
	} else {
		VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${
			position === "inset" ? position : ""
		}`;
	}
	//
	if (presetClass_h) {
		VALUE_H = getShadowStyleValueFromTwPreset(presetClass_h, color_h);
	} else {
		VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${
			position_h === "inset" ? position_h : ""
		}`;
	}

	return {
		[`${className}`]: {
			boxShadow: VALUE,
			"&:hover": {
				boxShadow: VALUE_H,
			},
		},
	};
};

export default getBoxShadowStyles;
