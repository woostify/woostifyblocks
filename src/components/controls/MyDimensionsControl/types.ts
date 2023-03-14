import { HasResponsive } from "../MyBackgroundControl/types";

export interface MyDimensionsControlData {
	rowGap: HasResponsive<string>;
	colunmGap: HasResponsive<string>;
	padding: HasResponsive<DimensionSettings>;
	margin: HasResponsive<DimensionSettings>;
}

export interface MyDimensionsNoGapControlData
	extends Pick<MyDimensionsControlData, "padding" | "margin"> {}
export interface MyDimensionsNoMarginControlData
	extends Omit<MyDimensionsControlData, "margin"> {}
export interface MyDimensionsNoPaddingControlData
	extends Omit<MyDimensionsControlData, "padding"> {}
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
	colunmGap: { Desktop: "1.5rem" },
	rowGap: { Desktop: "1.5rem" },
	margin: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
	padding: {
		Desktop: {
			top: "1rem",
			left: "1rem",
			right: "1rem",
			bottom: "1rem",
		},
	},
};

export const MY_DIMENSIONS_NO_GAP_CONTROL_DEMO: MyDimensionsNoGapControlData = {
	margin: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
	padding: {
		Desktop: {
			top: "1rem",
			left: "1rem",
			right: "1rem",
			bottom: "1rem",
		},
	},
};

export const MY_DIMENSIONS_NO_GAP_DEMO__EMPTY: MyDimensionsNoGapControlData = {
	margin: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
	padding: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
};

export const MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO: MyDimensionsNoMarginControlData =
	{
		colunmGap: { Desktop: "1.5rem" },
		rowGap: { Desktop: "1.5rem" },
		padding: {
			Desktop: {
				top: "1rem",
				left: "1rem",
				right: "1rem",
				bottom: "1rem",
			},
		},
	};
export const MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO: MyDimensionsNoPaddingControlData =
	{
		colunmGap: { Desktop: "1.5rem" },
		rowGap: { Desktop: "1.5rem" },
		margin: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
	};
