import { MyBoxShadowControlData } from "./MyBoxShadowControl";

export type TwShadowPreset =
	| ""
	| "shadow-sm"
	| "shadow"
	| "shadow-md"
	| "shadow-lg"
	| "shadow-xl"
	| "shadow-2xl"
	| "shadow-inner";

export const TW_SHADOW_PRESET: TwShadowPreset[] = [
	"shadow-sm",
	"shadow",
	"shadow-md",
	"shadow-lg",
	"shadow-xl",
	"shadow-2xl",
	"shadow-inner",
];

export const MY_BOX_SHADOW_CONTROL_DEMO: MyBoxShadowControlData = {
	Normal: {
		color: "",
		presetClass: "",
		blur: 0,
		horizontal: 0,
		spread: 0,
		vertical: 0,
		position: "outset",
	},
	Hover: {
		color: "",
		presetClass: "",
		blur: 0,
		horizontal: 0,
		spread: 0,
		vertical: 0,
		position: "outset",
	},
};
