import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	BorderMain4Side,
	BorderMainSingleSide,
	MyBorderControlData,
} from "./types";

interface Params extends MyBorderControlData {
	deviceType: ResponsiveDevices;
}

const getBorderStyleBySettings = (params: Params): React.CSSProperties => {
	const { hoverColor, mainSettings, radius, deviceType } = params;

	let BORDER_STYLES: React.CSSProperties;
	if ((mainSettings as BorderMain4Side).top) {
		const { bottom, left, right, top } = mainSettings as BorderMain4Side;
		BORDER_STYLES = {
			borderTop: `${top.width} ${top.style} ${top.color}`,
			borderLeft: `${left.width} ${left.style} ${left.color}`,
			borderRight: `${right.width} ${right.style} ${right.color}`,
			borderBottom: `${bottom.width} ${bottom.style} ${bottom.color}`,
			//
			borderTopLeftRadius: radius[deviceType]?.top,
			borderTopRightRadius: radius[deviceType]?.right,
			borderBottomRightRadius: radius[deviceType]?.bottom,
			borderBottomLeftRadius: radius[deviceType]?.left,
		};
	} else {
		const { color, style, width } = mainSettings as BorderMainSingleSide;
		BORDER_STYLES = {
			border: `${width} ${style} ${color}`,
			//
			borderTopLeftRadius: radius[deviceType]?.top,
			borderTopRightRadius: radius[deviceType]?.right,
			borderBottomRightRadius: radius[deviceType]?.bottom,
			borderBottomLeftRadius: radius[deviceType]?.left,
		};
	}

	return BORDER_STYLES;
};

export default getBorderStyleBySettings;
