import { TwShadowPreset } from "./types";

export const getShadowStyleValueFromTwPreset = (
	presetClass: TwShadowPreset,
	color: string = ""
) => {
	switch (presetClass) {
		case "shadow-sm":
			return `0 1px 2px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
		case "shadow":
			return `0 1px 3px 0 ${color || "rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${
				color || "rgb(0 0 0 / 0.1)"
			}`;
		case "shadow-md":
			return `0 4px 6px -1px ${color || "rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${
				color || "rgb(0 0 0 / 0.1)"
			}`;
		case "shadow-lg":
			return `0 10px 15px -3px ${color || "rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${
				color || "rgb(0 0 0 / 0.1)"
			}`;
		case "shadow-xl":
			return `0 20px 25px -5px ${
				color || "rgb(0 0 0 / 0.1)"
			}, 0 8px 10px -6px ${color || "rgb(0 0 0 / 0.1)"}`;
		case "shadow-2xl":
			return `0 25px 50px -12px ${color || "rgb(0 0 0 / 0.25)"}`;
		case "shadow-inner":
			return `inset 0 2px 4px 0 ${color || "rgb(0 0 0 / 0.05)"}`;

		default:
			return "";
	}
};
