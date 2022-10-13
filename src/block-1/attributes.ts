import {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";

export interface Blokc1Attrs {
	uniqueId: string;
	message: string;
	styles_color: string;
	styles_background: BackgroundControlData;
	styles_border: MyBorderControlData;
}

type AttrsGenericType<T> = {
	[k in keyof T]: {
		type: string;
		default?: T[k];
		source?: string;
		selector?: string;
	};
};

const blokc1Attrs: AttrsGenericType<Blokc1Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	message: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Clik to edit heading here!",
	},
	styles_color: {
		type: "string",
		default: "#000",
	},
	styles_background: {
		type: "object",
		default: STYLES_BG_DEMO,
	},
	styles_border: {
		type: "object",
		default: MY_BORDER_CONTROL_DEMO,
	},
};

export default blokc1Attrs;
