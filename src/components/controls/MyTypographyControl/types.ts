import { HasResponsive } from "../MyBackgroundControl/types";
import {
	FontAppearanceOptionsType,
	FONT_APPEARANCE_OPTIONS,
} from "../SelectFontAppearance";
import React, { CSSProperties } from "react";

export type MyTypographyControlData = {
	fontSizes: HasResponsive<string | undefined>;
	appearance: FontAppearanceOptionsType;
	textDecoration: CSSProperties["textDecoration"];
	textTransform: CSSProperties["textTransform"];
	lineHeight: HasResponsive<CSSProperties["lineHeight"]>;
	letterSpacing: HasResponsive<CSSProperties["letterSpacing"]>;
	fontFamily: CSSProperties["fontFamily"];
};
export const TYPOGRAPHY_CONTROL_DEMO: MyTypographyControlData = {
	fontSizes: { Desktop: "" },
	appearance: FONT_APPEARANCE_OPTIONS[0],
	textDecoration: undefined,
	textTransform: undefined,
	lineHeight: { Desktop: undefined },
	letterSpacing: { Desktop: undefined },
	fontFamily: undefined,
};

export const FONT_SIZES_DEMO = [
	{
		name: "Tiny",
		slug: "tiny",
		size: "8px",
	},
	{
		name: "Small",
		slug: "small",
		size: "12px",
	},
	{
		name: "Normal",
		slug: "normal",
		size: "16px",
	},
	{
		name: "Big",
		slug: "big",
		size: "26px",
	},
	{
		name: "Bigger",
		slug: "bigger",
		size: "30px",
	},
	{
		name: "Huge",
		slug: "huge",
		size: "36px",
	},
];
