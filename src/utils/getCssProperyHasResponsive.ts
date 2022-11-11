import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface params<T = string> {
	cssProperty: HasResponsive<T>;
}

function getCssProperyHasResponsive<T>({ cssProperty }: params<T>) {
	const value_desktop = cssProperty.Desktop;
	const value_tablet = cssProperty.Tablet || value_desktop;
	const value_mobile = cssProperty.Mobile || value_tablet;
	return {
		value_desktop,
		value_tablet,
		value_mobile,
	};
}

export default getCssProperyHasResponsive;
