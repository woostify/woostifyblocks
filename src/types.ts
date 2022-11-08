import { __ } from "@wordpress/i18n/";
import React from "react";

export interface Option<T = string> {
	label: string;
	value: T;
}

export type HtmlTagsType = React.ElementType<any>;

export type MyTabsForColor = "Normal" | "Hover";
export type MyTabsForActive = "Normal" | "Active";