import { HasResponsive } from "../MyBackgroundControl/types";

export interface BorderMainSingleSide {
	color: string;
	style: string;
	width: string;
}
export interface BorderMain4Side {
	top: BorderMainSingleSide;
	right: BorderMainSingleSide;
	bottom: BorderMainSingleSide;
	left: BorderMainSingleSide;
}

export type BorderMainSettings =
	| BorderMain4Side
	| BorderMainSingleSide
	| undefined;

export interface BorderRadiusSettings {
	top: string;
	left: string;
	right: string;
	bottom: string;
}

export const DEFAULT_BORDER_RADIUS: BorderRadiusSettings = {
	top: "12px",
	left: "12px",
	right: "12px",
	bottom: "12px",
};

export const DEFAULT_BORDER_MAIN_SINGLE_SIDE: BorderMainSingleSide = {
	color: "#d1d5db",
	style: "solid",
	width: "1px",
};

export const DEFAULT_BORDER_MAINS: BorderMainSettings = undefined;

export interface MyBorderControlData {
	mainSettings?: BorderMainSettings;
	hoverColor?: string;
	radius: HasResponsive<BorderRadiusSettings>;
}

export const MY_BORDER_CONTROL_DEMO: MyBorderControlData = {
	mainSettings: DEFAULT_BORDER_MAINS,
	hoverColor: undefined,
	radius: {
		Desktop: DEFAULT_BORDER_RADIUS,
		Tablet: DEFAULT_BORDER_RADIUS,
		Mobile: DEFAULT_BORDER_RADIUS,
	},
};
