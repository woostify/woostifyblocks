import Save from "./Save";
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
	save: Save,
};

const deprecated = [v3, v2, v1];

export default deprecated;
