import { __ } from "@wordpress/i18n/";
import React from "react";

export interface Option<T = string> {
	label: string;
	value: T;
}
export interface MySelectOption<T = string> extends Option<T> {}

export type HtmlTagsType = React.ElementType<any>;

export type MyTabsForColor = "Normal" | "Hover";
export type MyTabsForActive = "Normal" | "Active";

export type AlignmentMatrixControlValue =
	| "top left"
	| "top center"
	| "top right"
	| "center left"
	| "center"
	| "center center"
	| "center right"
	| "bottom left"
	| "bottom center"
	| "bottom right";
