import { HasResponsive } from "../MyBackgroundControl/types";

export interface MyDimensionsControlData {
	rowGap: HasResponsive<string>;
	colunmGap: HasResponsive<string>;
	padding: HasResponsive<DimensionSettings>;
	margin: HasResponsive<DimensionSettings>;
}
export interface DimensionSettings {
	top: string;
	left: string;
	right: string;
	bottom: string;
}

export const DEFAULT_DIMENSION: string | DimensionSettings = {
	top: "12px",
	left: "12px",
	right: "12px",
	bottom: "12px",
};

export const MY_DIMENSIONS_CONTROL_DEMO: MyDimensionsControlData = {
	colunmGap: { Desktop: "2rem" },
	rowGap: { Desktop: "2rem" },
	margin: {
		Desktop: {
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
		},
	},
	padding: {
		Desktop: {
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
		},
	},
};