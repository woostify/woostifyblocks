import Save__300523 from "./Save__300523";
import Save__250523 from "./Save__250523";
import Save__290723 from "./Save__290723";
import blokcAttrs from "./attributes";
import { MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO } from "../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokcAttrs,
		style_submit_button: {
			type: "object",
			default: {
				colorAndBackgroundColor: MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
				padding: {
					Desktop: {
						top: "1rem",
						left: "2rem",
						right: "2rem",
						bottom: "1rem",
					},
				},
				border: MY_BORDER_CONTROL_DEMO,
			},
		},
		style_messages: {
			type: "object",
			default: {
				Success: {
					color: "#0c4a6e",
					backgroundColor: "#f0f9ff",
					border: MY_BORDER_CONTROL_DEMO,
				},
				Error: {
					color: "#ef4444",
					backgroundColor: "#fef2f2",
					border: MY_BORDER_CONTROL_DEMO,
				},
			},
		},
	},
	save: Save__250523,
};
const v4 = {
	attributes: {
		...blokcAttrs,
		style_submit_button: {
			type: "object",
			default: {
				colorAndBackgroundColor: MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
				padding: {
					Desktop: {
						top: "1rem",
						left: "2rem",
						right: "2rem",
						bottom: "1rem",
					},
				},
				border: MY_BORDER_CONTROL_DEMO,
			},
		},
		style_messages: {
			type: "object",
			default: {
				Success: {
					color: "#0c4a6e",
					backgroundColor: "#f0f9ff",
					border: MY_BORDER_CONTROL_DEMO,
				},
				Error: {
					color: "#ef4444",
					backgroundColor: "#fef2f2",
					border: MY_BORDER_CONTROL_DEMO,
				},
			},
		},
	},
	save: Save__300523,
};
const v5 = {
	attributes: {
		...blokcAttrs,
		general_submit_button: {
			type: "object",
			default: {
				textAlignment: "left",
			},
		},
	},
	save: Save__290723,
};

const deprecated = [v5, v4, v4, v3, v2, v1];

export default deprecated;
