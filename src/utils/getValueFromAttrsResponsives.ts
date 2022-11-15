import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";

const getValueFromAttrsResponsives = function <T>(
	properties: HasResponsive<T>,
	currentDevice?: ResponsiveDevices
) {
	let value_Desktop = properties.Desktop;
	let value_Tablet = properties.Tablet || value_Desktop;
	let value_Mobile = properties.Mobile || value_Tablet;
	let currentDeviceValue: T | null = null;
	if (currentDevice) {
		currentDeviceValue =
			currentDevice === "Desktop"
				? value_Desktop
				: currentDevice === "Tablet"
				? value_Tablet
				: value_Mobile;
	}

	return {
		value_Desktop,
		value_Tablet,
		value_Mobile,
		currentDeviceValue,
	};
};

export default getValueFromAttrsResponsives;
