import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";

const getValueFromAttrsResponsives = function <T>(
	properties?: HasResponsive<T>,
	currentDevice?: ResponsiveDevices
) {
	// let value_Desktop = properties.Desktop;
	// let value_Tablet = properties.Tablet || value_Desktop;
	// let value_Mobile = properties.Mobile || value_Tablet;

	const v_Desktop = properties?.Desktop;
	const v_Tablet =
		typeof properties?.Tablet !== "undefined" && properties?.Tablet !== null
			? properties?.Tablet
			: v_Desktop;
	const v_Mobile =
		typeof properties?.Mobile !== "undefined" && properties?.Mobile !== null
			? properties?.Mobile
			: v_Tablet;

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
		value_Desktop: v_Desktop,
		value_Tablet: v_Tablet,
		value_Mobile: v_Mobile,
		currentDeviceValue,
	};
};

export default getValueFromAttrsResponsives;
