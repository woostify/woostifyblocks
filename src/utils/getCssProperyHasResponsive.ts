import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";

interface params<T = string> {
	cssProperty: HasResponsive<T>;
}

function getCssProperyHasResponsive<T>({ cssProperty }: params<T>) {
	const {
		value_Desktop: value_desktop,
		value_Tablet: value_tablet,
		value_Mobile: value_mobile,
	} = getValueFromAttrsResponsives(cssProperty);
	// const value_desktop = cssProperty.Desktop;
	// const value_tablet = cssProperty.Tablet || value_desktop;
	// const value_mobile = cssProperty.Mobile || value_tablet;
	return {
		value_desktop,
		value_tablet,
		value_mobile,
	};
}

export default getCssProperyHasResponsive;
