import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";

const getValueFromAttrsResponsives = function <T>(
	properties?: HasResponsive<T>,
	currentDevice?: ResponsiveDevices
) {
	const v_Desktop = properties?.Desktop;
	const v_Tablet = properties?.Tablet ?? v_Desktop;
	const v_Mobile = properties?.Mobile ?? v_Tablet;

	let currentDeviceValue: T | undefined = undefined;
	if (currentDevice) {
		currentDeviceValue =
			currentDevice === "Desktop"
				? v_Desktop
				: currentDevice === "Tablet"
				? v_Tablet
				: v_Mobile;
	}

	return {
		value_Desktop: v_Desktop ?? null,
		value_Tablet: v_Tablet ?? null,
		value_Mobile: v_Mobile ?? null,
		currentDeviceValue,
	};
};

export default getValueFromAttrsResponsives;
