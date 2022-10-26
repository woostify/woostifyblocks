import { MyBoxShadowControlData } from "./MyBoxShadowControl";

export default function getBoxShadowStyles(boxShadow: MyBoxShadowControlData): {
	styles: React.CSSProperties;
	className: string;
} {
	const { Hover, Normal } = boxShadow;
	const { presetClass, blur, color, horizontal, position, spread, vertical } =
		Normal;
	const {
		presetClass: presetClass_h,
		blur: blur_h,
		color: color_h,
		horizontal: horizontal_h,
		position: position_h,
		spread: spread_h,
		vertical: vertical_h,
	} = Hover;
	if (presetClass) {
		return {
			styles: {},
			className: `${presetClass} hover:${presetClass_h}`,
		};
	}

	const MAIN_STYLES: React.CSSProperties = {
		// box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
		// @ts-ignore
		"--wcb-shadow-h": horizontal,
		"--wcb-shadow-v": vertical,
		"--wcb-shadow-blur": blur,
		"--wcb-shadow-spread": spread,
		"--wcb-shadow-color": color,
		"--wcb-shadow-position": position,
		//
		"--hover-wcb-shadow-h": horizontal_h,
		"--hover-wcb-shadow-v": vertical_h,
		"--hover-wcb-shadow-blur": blur_h,
		"--hover-wcb-shadow-spread": spread_h,
		"--hover-wcb-shadow-color": color_h,
		"--hover-wcb-shadow-position": position_h,
		// boxShadow: `${horizontal}_${vertical}_${blur}_${spread}_${color}_${position}`
	};

	return {
		styles: MAIN_STYLES,
		className: `shadow-[shadow:var(--wcb-shadow-h)_var(--wcb-shadow-v)_var(--wcb-shadow-blur)_var(--wcb-shadow-spread)_var(--wcb-shadow-color)_var(--wcb-shadow-position)] hover:shadow-[var(--hover-wcb-shadow-h)_var(--hover-wcb-shadow-v)_var(--hover-wcb-shadow-blur)_var(--hover-wcb-shadow-spread)_var(--hover-wcb-shadow-color)_var(--hover-wcb-shadow-position)] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`,
	};
}
