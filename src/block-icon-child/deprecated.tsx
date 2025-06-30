import Save__260523 from "./Save__260523";
import Save__100623 from "./Save__100623";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__260523,
};
const v4 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__100623,
};

const deprecated = [v4, v3, v2, v1];

export default deprecated;
