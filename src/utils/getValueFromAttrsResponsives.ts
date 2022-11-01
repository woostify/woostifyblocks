import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

const getValueFromAttrsResponsives = function <T>(
	properties: HasResponsive<T>
) {
	let value_Desktop = properties.Desktop;
	let value_Tablet = properties.Tablet || value_Desktop;
	let value_Mobile = properties.Mobile || value_Tablet;
	return {
		value_Desktop,
		value_Tablet,
		value_Mobile,
	};
};

export default getValueFromAttrsResponsives;
