import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import { MyBorderControlData } from "./types";

interface Params extends MyBorderControlData {
	deviceType: ResponsiveDevices;
}

const getBorderStyleBySettings = (params: Params): React.CSSProperties => {
	const {
		hoverColor,
		mainSettings,
		radius,
		//
		deviceType,
	} = params;

	console.log(12, { mainSettings });
	// co ca common hoac full top-left-right-bottom
	return;

	const { bottom, left, right, top } = mainSettings;

	let borderStyles: React.CSSProperties = {
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

	return borderStyles;
};

export default getBorderStyleBySettings;
