/* eslint-disable no-undef */
export interface Blokc1Attrs {
	uniqueId: string;
	color: string;
	message: string;
}

const blokc1Attrs = {
	uniqueId: {
		type: "string",
		default: "",
	},
	color: {
		type: "string",
		default: "#eee",
	},
	message: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Clik to edit heading here!",
	},
};

export default blokc1Attrs;
