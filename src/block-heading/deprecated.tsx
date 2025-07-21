import Save__130623 from "./Save__130623";
import Save__180725 from "./Save__180725";
import Save from "./Save";
import blokc1Attrs from "./attributes";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
// 1. attributes mới nhất
const currentAttributes = {
	...blokc1Attrs,
	styles_heading: {
		type: "object",
		default: {
			typography: {
				...TYPOGRAPHY_CONTROL_DEMO,
				letterSpacing: [], // MUST BE ARRAY HERE
			},
		},
	},
};

// 2. current version
export const attributes = currentAttributes;
export const save = Save; // Save.tsx


// 3. deprecated versions
const deprecated = [
	{
		attributes: attributes,
		save: Save__180725,
	},
	{
		attributes: blokc1Attrs,
		save: Save__130623,
	},
];

// 4. export default for block registration
export default deprecated;
