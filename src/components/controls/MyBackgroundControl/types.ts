export type BackgroundType = "color" | "gradient" | "image" | "video";
export type BgImageAttachment = "fixed" | "local" | "scroll";
export type BgImageRepeat = "repeat" | "no-repeat" | "repeat-x" | "repeat-y";
export type BgImageSize = "auto" | "cover" | "contain";
export type BgImageOverlayType = "none" | "color" | "gradient";

export interface HasResponsive<T> {
	Desktop: T;
	Tablet?: T;
	Mobile?: T;
}

export interface BgImageFocalPoint {
	x: number;
	y: number;
}

export const BG_ATTACHMENT_OPTIONS: {
	value: BgImageAttachment;
	label: string;
}[] = [
	{
		value: "fixed",
		label: "Fixed",
	},
	{
		value: "local",
		label: "Local",
	},
	{
		value: "scroll",
		label: "Scroll",
	},
];

export const BG_REPEAT_OPTIONS: {
	value: BgImageRepeat;
	label: string;
}[] = [
	{
		value: "no-repeat",
		label: "No repeat",
	},
	{
		value: "repeat",
		label: "Repeat",
	},
	{
		value: "repeat-x",
		label: "Repeat-x",
	},
	{
		value: "repeat-y",
		label: "Repeat-y",
	},
];
export const BG_SIZE_OPTIONS: {
	value: BgImageSize;
	label: string;
}[] = [
	{
		value: "auto",
		label: "Auto",
	},
	{
		value: "contain",
		label: "Contain",
	},
	{
		value: "cover",
		label: "Cover",
	},
];

export const GRADIENT_DEFAULT = [
	{
		name: "JShine",
		gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
		slug: "jshine",
	},
	{
		name: "Moonlit Asteroid",
		gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
		slug: "moonlit-asteroid",
	},
	{
		name: "Rastafarie",
		gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
		slug: "rastafari",
	},
];
