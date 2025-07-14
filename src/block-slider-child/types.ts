// Types for slider-child block

// Re-export parent types that child might need
export type {
	WCB_SLIDER_PANEL_STYLE_NAME,
	WCB_SLIDER_PANEL_STYLE_CONTENT,
	WCB_SLIDER_PANEL_STYLE_COMPANY,
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
} from "../block-slider/types";

// Export child-specific types
export type { WCB_SLIDER_PANEL_IMAGE } from "./WcbSliderPanel_StyleImage";
export type { WcbAttrs } from "./attributes";

// Export panel components for external usage
export { default as WcbSliderChildEdit } from "./Edit";
export { default as WcbSliderChildSave } from "./Save";
export { default as WcbSliderChildAttributes } from "./attributes"; 