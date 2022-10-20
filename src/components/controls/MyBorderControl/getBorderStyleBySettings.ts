import {
	BorderMain4Side,
	BorderMainSingleSide,
	MyBorderControlData,
} from "./types";

interface Params extends MyBorderControlData {}

const getBorderStyleBySettings = (
	params: Params
): {
	styles: React.CSSProperties;
	className: string;
} => {
	const { hoverColor, mainSettings, radius } = params;

	let BORDER_STYLES: React.CSSProperties = {};
	let BORDER_RADIUS: React.CSSProperties = {};
	let BORDER_RADIUS_CLASSNAME: string = "";

	const radiusDesktop = radius?.Desktop;
	const radiusTablet = radius?.Tablet;
	const radiusMobile = radius?.Mobile;
	BORDER_RADIUS = {
		// @ts-ignore
		"--lg-wcb-rounded-tl": radiusDesktop?.top,
		"--lg-wcb-rounded-tr": radiusDesktop?.right,
		"--lg-wcb-rounded-bl": radiusDesktop?.bottom,
		"--lg-wcb-rounded-br": radiusDesktop?.left,
		//
		"--md-wcb-rounded-tl": radiusTablet?.top,
		"--md-wcb-rounded-tr": radiusTablet?.right,
		"--md-wcb-rounded-bl": radiusTablet?.bottom,
		"--md-wcb-rounded-br": radiusTablet?.left,
		//
		"--wcb-rounded-tl": radiusMobile?.top,
		"--wcb-rounded-tr": radiusMobile?.right,
		"--wcb-rounded-bl": radiusMobile?.bottom,
		"--wcb-rounded-br": radiusMobile?.left,
	};
	BORDER_RADIUS_CLASSNAME = `rounded-tl-[var(--wcb-rounded-tl)] rounded-tr-[var(--wcb-rounded-tl)] rounded-bl-[var(--wcb-rounded-bl)] rounded-br-[var(--wcb-rounded-br)]`;

	if (!mainSettings) {
		return {
			styles: BORDER_RADIUS,
			className: BORDER_RADIUS_CLASSNAME,
		};
	}

	if ((mainSettings as BorderMain4Side)?.top) {
		const { bottom, left, right, top } = mainSettings as BorderMain4Side;
		BORDER_STYLES = {
			borderTop: `${top.width} ${top.style} ${top.color}`,
			borderLeft: `${left.width} ${left.style} ${left.color}`,
			borderRight: `${right.width} ${right.style} ${right.color}`,
			borderBottom: `${bottom.width} ${bottom.style} ${bottom.color}`,
		};
	} else {
		const { color, style, width } = mainSettings as BorderMainSingleSide;
		BORDER_STYLES = {
			border: `${width} ${style} ${color}`,
		};
	}

	return {
		styles: { ...BORDER_STYLES, ...BORDER_RADIUS },
		className: BORDER_RADIUS_CLASSNAME,
	};
};

export default getBorderStyleBySettings;
