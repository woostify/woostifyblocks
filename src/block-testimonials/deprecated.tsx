import Save__250523 from "./Save__250523";
import Save__100623 from "./Save__100623";
import Save__290723 from "./Save__290723";
import blokcAttrs from "./attributes";

const v3 = {
	attributes: {
		...blokcAttrs,
		style_image: {
			type: "object",
			default: {
				imageSize: {
					Desktop: "3.5rem",
				},
				radius: {
					Desktop: "100px",
					Tablet: "100px",
					Mobile: "100px",
				},
				padding: {
					Desktop: {
						top: "0.5rem",
						left: "1rem",
						right: "1rem",
						bottom: "0.5rem",
					},
				},
			},
		},
	},
	save: Save__250523,
};

const v4 = {
	attributes: {
		...blokcAttrs,
		style_image: {
			type: "object",
			default: {
				imageSize: {
					Desktop: "3.5rem",
				},
				radius: {
					Desktop: "100px",
					Tablet: "100px",
					Mobile: "100px",
				},
				padding: {
					Desktop: {
						top: "0.5rem",
						left: "1rem",
						right: "1rem",
						bottom: "0.5rem",
					},
				},
			},
		},
	},
	save: Save__100623,
};

const v5 = {
	attributes: {
		...blokcAttrs,
		style_image: {
			type: "object",
			default: {
				padding: {
					Desktop: {
						top: "1rem",
						left: "1rem",
						right: "1rem",
						bottom: "1rem",
					},
				},
				imageSize: {
					Desktop: "3.5rem",
				},
				radius: {
					Desktop: "100px",
					Tablet: "100px",
					Mobile: "100px",
				},
			},
		},
	},
	save: Save__100623,
};

const v6 = {
	attributes: blokcAttrs,
	save: Save__290723,
};

const deprecated = [v6, v5, v4, v3];

export default deprecated;
